import { dom } from './dom.js';
import { state, wizardState, saveStateToLocal, setState } from './state.js';
import { ai, makeGeminiRequest, createNewBin, syncDataUp } from './api.js';
import { showScreen, showNotification, renderFamilyMembers, renderAll } from './ui.js';
import { Type } from "https://esm.run/@google/genai";

function renderWizard() {
    const { currentStep, totalSteps } = wizardState;
    
    dom.apiKeyInput.value = state.settings.geminiApiKey || '';
    dom.wizardJsonbinBinId.value = state.settings.jsonBin.binId || '';
    dom.wizardJsonbinApiKey.value = state.settings.jsonBin.apiKey || '';
    dom.wizardMenuDuration.value = state.settings.menuDuration;
    dom.wizardTotalBudget.value = state.settings.totalBudget;
    dom.wizardPreferences.value = state.settings.preferences;
    dom.wizardCuisine.value = state.settings.cuisine;
    dom.wizardDifficulty.value = state.settings.difficulty;
    
    dom.wizardNav.classList.remove('hidden');
    dom.generationProgress.classList.add('hidden');
    dom.setupWizard.classList.remove('hidden');
    dom.wizardStepCounter.classList.remove('hidden');

    dom.wizardStepCounter.textContent = `Шаг ${currentStep} из ${totalSteps}`;

    dom.wizardSteps.forEach(step => {
        step.classList.toggle('active', parseInt(step.dataset.step) === currentStep);
    });

    dom.wizardBackBtn.disabled = currentStep === 1;
    dom.wizardNextBtn.textContent = currentStep === totalSteps ? 'Начать генерацию' : 'Далее';
    
    if (currentStep === 3) {
        renderFamilyMembers(true);
    }
}

export function showWizard() {
    showScreen('setup-screen');
    wizardState.currentStep = 1;
    renderWizard();
}

export async function navigateWizard(direction) {
    const { currentStep, totalSteps } = wizardState;
    if (direction > 0) { // Движение вперед
        if (currentStep === 1) {
            const apiKey = dom.apiKeyInput.value.trim();
            if (!apiKey) { showNotification('Пожалуйста, введите Gemini API ключ.', 'error'); return; }
            state.settings.geminiApiKey = apiKey;
        } else if (currentStep === 2) {
            const binId = dom.wizardJsonbinBinId.value.trim();
            const apiKey = dom.wizardJsonbinApiKey.value.trim();
            state.settings.jsonBin = apiKey ? { enabled: true, binId: binId || null, apiKey } : { enabled: false, binId: null, apiKey: null };
        } else if (currentStep === 3) {
            if (state.settings.family.length === 0) { showNotification('Добавьте хотя бы одного члена семьи.', 'error'); return; }
        } else if (currentStep === 4) {
            state.settings.menuDuration = parseInt(dom.wizardMenuDuration.value) || 7;
            state.settings.totalBudget = parseInt(dom.wizardTotalBudget.value) || 10000;
            state.settings.preferences = dom.wizardPreferences.value;
            state.settings.cuisine = dom.wizardCuisine.value;
            state.settings.difficulty = dom.wizardDifficulty.value;
        } else if (currentStep === totalSteps) {
            saveStateToLocal();
            await startGenerationProcess();
            return;
        }
    }
    
    wizardState.currentStep += direction;
    if (wizardState.currentStep < 1) wizardState.currentStep = 1;
    renderWizard();
}

async function updateProgress(step, totalSteps, status, details) {
    return new Promise(resolve => {
        const percent = (step / totalSteps) * 100;
        dom.progressBar.style.width = `${percent}%`;
        dom.progressStatus.textContent = `Шаг ${step}/${totalSteps}: ${status}`;
        dom.progressDetails.innerHTML = details;
        setTimeout(resolve, 300);
    });
}

async function generateMenu(purchasedItems = '') {
    const { family, menuDuration, preferences, cuisine, difficulty } = state.settings;
    await updateProgress(2, 5, "Генерация меню...", `Для вашей семьи на ${menuDuration} дней.`);
    const familyDescription = family.map(p => `${p.name} (${p.gender === 'male' ? 'Мужчина' : 'Женщина'}, ${p.age} лет, активность: ${p.activity})`).join('; ');
    
    let prompt = `Сгенерируй разнообразное и сбалансированное меню на ${menuDuration} дней (с воскресенья по субботу) для семьи: ${familyDescription}. Учти их потребности в калориях. Общие предпочтения: ${preferences}. Предпочитаемая кухня: ${cuisine}. Желаемая сложность блюд: ${difficulty}. Каждый день должен включать: Завтрак, Перекус, Обед, Полдник, Ужин. Иногда используй остатки от ужина на обед следующего дня (помечай их как "Название блюда (остатки)").`;
    if (purchasedItems) {
        prompt += `\nВАЖНО: При составлении меню отдай приоритет блюдам, в которых используются уже купленные продукты. Список купленных продуктов: ${purchasedItems}.`;
    }

    const schema = {type: Type.ARRAY, items: {type: Type.OBJECT, properties: {day: {type: Type.STRING}, meals: {type: Type.OBJECT, properties: {breakfast: {type: Type.STRING}, snack1: {type: Type.STRING}, lunch: {type: Type.STRING}, snack2: {type: Type.STRING}, dinner: {type: Type.STRING}}, required: ["breakfast", "snack1", "lunch", "snack2", "dinner"]}}, required: ["day", "meals"]}};
    state.menu = await makeGeminiRequest(prompt, schema);
    dom.progressDetails.innerHTML += `<br>✅ Сгенерировано меню.`;
}

async function generateRecipes() {
    await updateProgress(3, 5, "Генерация рецептов…", "Создаём пошаговые инструкции...");
    const uniqueMeals = [...new Set(state.menu.flatMap(d => Object.values(d.meals)))].filter(name => name && !name.includes("(остатки)"));
    if (uniqueMeals.length === 0) {
         dom.progressDetails.innerHTML += `<br>⚠️ Не найдено новых блюд для генерации рецептов.`;
         return;
    }
    const familySize = state.settings.family.length;
    const schema = {type: Type.OBJECT, properties: {id: {type: Type.STRING}, name: {type: Type.STRING}, ingredients: {type: Type.ARRAY, items: {type: Type.OBJECT, properties: {name: {type: Type.STRING}, quantity: {type: Type.STRING}}, required: ["name", "quantity"]}}, steps: {type: Type.ARRAY, items: {type: Type.OBJECT, properties: {description: {type: Type.STRING}, time: {type: Type.NUMBER, description: "Время в минутах. 0 если таймер не нужен."}, ingredients: {type: Type.ARRAY, items: {type: Type.OBJECT, properties: { name: {type: Type.STRING}, quantity: {type: Type.STRING, description: "Количество и единица измерения, например '200 г' или '1 шт'"} }, required: ["name", "quantity"] }}}, required: ["description", "time", "ingredients"]}}}, required: ["id", "name", "ingredients", "steps"]}};
    
    state.recipes = {};
    for (const mealName of uniqueMeals) {
        dom.progressDetails.textContent = `Обрабатывается: "${mealName}"...`;
        const prompt = `Создай детальный рецепт для блюда "${mealName}" для семьи из ${familySize} человек (${state.settings.family.length} порции). В каждом шаге укажи конкретное количество ингредиентов, используемых на этом шаге.`;
        const recipeData = await makeGeminiRequest(prompt, schema);
        state.recipes[recipeData.id] = recipeData;
    }
    dom.progressDetails.innerHTML += `<br>✅ Все ${uniqueMeals.length} рецептов сгенерированы.`;
}

async function generateShoppingList() {
    await updateProgress(4, 5, "Формирование списка покупок…", "Собираем все ингредиенты...");
    if (Object.keys(state.recipes).length === 0) {
        dom.progressDetails.innerHTML += `<br>⚠️ Нет рецептов для создания списка покупок.`;
        state.shoppingList = [];
        return;
    }
    const allIngredients = Object.values(state.recipes).flatMap(r => r.ingredients);
    const prompt = `Сгруппируй и суммируй этот список ингредиентов. Категории: "Мясо и птица", "Молочные и яйца", "Овощи и зелень", "Фрукты и орехи", "Бакалея", "Хлеб и выпечка", "Напитки", "Прочее". Для каждого ингредиента верни общее необходимое количество (totalNeeded). Затем предложи разумное количество для покупки в магазине (shoppingSuggestion), округляя в большую сторону до стандартной упаковки (например, для 750г муки предложи купить 1кг). Укажи примерную цену в рублях за предложенное количество для покупки. Ингредиенты: ${JSON.stringify(allIngredients)}`;
    const schema = { type: Type.ARRAY, items: { type: Type.OBJECT, properties: { category: { type: Type.STRING }, items: { type: Type.ARRAY, items: { type: Type.OBJECT, properties: { name: { type: Type.STRING }, totalNeeded: { type: Type.OBJECT, properties: { qty: { type: Type.NUMBER }, unit: { type: Type.STRING }}}, shoppingSuggestion: { type: Type.OBJECT, properties: { qty: { type: Type.NUMBER }, unit: { type: Type.STRING }}}, price: { type: Type.NUMBER } }, required: ["name", "totalNeeded", "shoppingSuggestion", "price"] } } }, required: ["category", "items"] } };
    const shoppingListData = await makeGeminiRequest(prompt, schema);
    
    shoppingListData.forEach(category => {
        category.items.forEach(item => {
            item.id = `item-${Date.now()}-${Math.random()}`;
            item.purchases = [];
        });
    });
    
    state.shoppingList = shoppingListData;
    const totalCost = shoppingListData.flatMap(c => c.items).reduce((sum, item) => sum + item.price, 0);
    dom.progressDetails.innerHTML += `<br>✅ Список из ${shoppingListData.flatMap(c => c.items).length} продуктов сгруппирован. Итого: ${totalCost} ₽`;
}

export async function startGenerationProcess(isRegenerating = false, purchasedItems = '') {
    if (!ai) { alert('API ключ не найден или недействителен.'); showWizard(); return; }
    
    dom.setupWizard.classList.add('hidden');
    dom.wizardNav.classList.add('hidden');
    dom.wizardStepCounter.classList.add('hidden');
    dom.generationProgress.classList.remove('hidden');
    if (isRegenerating) showScreen('setup-screen');
    
    try {
        if (state.settings.jsonBin.enabled && !state.settings.jsonBin.binId) {
            const newBinId = await createNewBin();
            if (newBinId) state.settings.jsonBin.binId = newBinId;
            else throw new Error("Не удалось создать онлайн-хранилище.");
        }

        await updateProgress(1, 5, "Подключение к Google Gemini…", "Проверка ключа...");
        await ai.models.generateContent({model:'gemini-2.5-flash', contents: 'test'});
        dom.progressDetails.innerHTML += '<br>✅ Ключ активен.';
        
        await generateMenu(purchasedItems);
        await generateRecipes();
        await generateShoppingList();
        
        await updateProgress(5, 5, "Готово!", "Добро пожаловать в 'СЕМЕЙНОЕ МЕНЮ'.");
        dom.finishSetupBtn.classList.remove('hidden');
        dom.finishSetupBtn.classList.add('reveal');
        
        state.timestamp = new Date().toISOString();
        saveStateToLocal();
        await syncDataUp();

    } catch (error) {
        console.error("Generation failed:", error);
        updateProgress(0, 5, "Ошибка!", `Не удалось сгенерировать меню. ${error.message}`);
        dom.finishSetupBtn.textContent = 'Назад к настройкам';
        dom.finishSetupBtn.classList.remove('hidden');
        dom.finishSetupBtn.onclick = () => window.location.reload();
        if(!isRegenerating) {
            state.settings.geminiApiKey = null;
            saveStateToLocal();
        }
    }
}


export async function handleRegeneration(type, data) {
    showNotification("Обновляем меню...", 'loading');
    try {
        const { dayName, mealKey } = data;
        const currentDay = state.menu.find(d => d.day === dayName);
        if (!currentDay) throw new Error("День для регенерации не найден");

        let prompt;
        const mealTypes = { breakfast: 'завтрак', snack1: 'перекус', lunch: 'обед', snack2: 'полдник', dinner: 'ужин' };
        const familyDescription = state.settings.family.map(p => `${p.name} (${p.gender === 'male' ? 'М' : 'Ж'}, ${p.age} лет, ${p.activity})`).join('; ');
        
        if (type === 'meal') {
            const mealTypeStr = mealTypes[mealKey];
            const otherMeals = Object.values(currentDay.meals).join(', ');
            prompt = `Сгенерируй одно новое блюдо для "${mealTypeStr}" на ${dayName}. Оно должно отличаться от: ${otherMeals}. Учти предпочтения: ${state.settings.preferences} и кухню: ${state.settings.cuisine}.`;
            const schema = { type: Type.OBJECT, properties: { newMeal: { type: Type.STRING } }, required: ['newMeal'] };
            const result = await makeGeminiRequest(prompt, schema);
            currentDay.meals[mealKey] = result.newMeal;
        } else { // regenerate day
            prompt = `Сгенерируй полное меню (Завтрак, Перекус, Обед, Полдник, Ужин) на один день (${dayName}) для семьи: ${familyDescription}. Учти предпочтения: ${state.settings.preferences} и кухню: ${state.settings.cuisine}.`;
            const schema = {type: Type.OBJECT, properties: {breakfast: {type: Type.STRING}, snack1: {type: Type.STRING}, lunch: {type: Type.STRING}, snack2: {type: Type.STRING}, dinner: {type: Type.STRING}}, required: ["breakfast", "snack1", "lunch", "snack2", "dinner"]};
            const result = await makeGeminiRequest(prompt, schema);
            currentDay.meals = result;
        }
        
        await generateRecipes();
        await generateShoppingList();

        state.timestamp = new Date().toISOString();
        saveStateToLocal();
        await syncDataUp();
        
        renderAll();
        showNotification("Меню успешно обновлено!");

    } catch(e) {
        showNotification("Ошибка при обновлении.", 'error');
        console.error(e);
    }
}
