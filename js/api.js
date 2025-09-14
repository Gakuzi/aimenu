import { GoogleGenAI, Type } from "https://esm.run/@google/genai";
import { state, logToConsole } from './state.js';
import { ui } from './ui.js';

let ai;

function initAi() {
    if (state.get().settings.apiKey) {
        ai = new GoogleGenAI({ apiKey: state.get().settings.apiKey });
        return ai;
    }
    return null;
}

async function makeGeminiRequest(prompt, jsonSchema, model = "gemini-2.5-flash") {
    if (!ai) initAi();
    if (!ai) throw new Error("API client not initialized.");

    logToConsole(`🟡 REQUEST to ${model}: ${prompt.substring(0, 50)}...`);
    let retries = 3;
    while (retries > 0) {
        try {
            const result = await ai.models.generateContent({
              model: model,
              contents: [{ parts: [{ text: prompt }] }],
              config: {
                responseMimeType: "application/json",
                responseSchema: jsonSchema,
                temperature: 0.7,
              }
            });
            const jsonText = result.text.trim();
            const data = JSON.parse(jsonText);
            logToConsole(`✅ RESPONSE RECEIVED from ${model}`);
            return data;
        } catch (error) {
            retries--;
            logToConsole(`🔴 ERROR from ${model}: ${error}. Retrying... (${retries} left)`);
            if (retries === 0) throw error;
            await new Promise(res => setTimeout(res, 2000)); // wait before retrying
        }
    }
}

async function generateMenu(purchasedItems = '') {
    const { family, menuDuration, preferences, cuisine, difficulty } = state.get().settings;
    await ui.updateProgress(2, 5, "Генерация меню...", `Для вашей семьи на ${menuDuration} дней.`);
    const familyDescription = family.map(p => `${p.gender === 'male' ? 'Мужчина' : 'Женщина'}, ${p.age} лет, активность: ${p.activity}`).join('; ');
    
    let prompt = `Сгенерируй разнообразное и сбалансированное меню на ${menuDuration} дней (с воскресенья по субботу) для семьи: ${familyDescription}. 
    Учти их потребности в калориях.
    Общие предпочтения: ${preferences}.
    Предпочитаемая кухня: ${cuisine}.
    Желаемая сложность блюд: ${difficulty}.
    Каждый день должен включать: Завтрак, Перекус, Обед, Полдник, Ужин. Иногда используй остатки от ужина на обед следующего дня (помечай их как "Название блюда (остатки)").`;
    
    if (purchasedItems) {
        prompt += `\nВАЖНО: При составлении меню отдай приоритет блюдам, в которых используются уже купленные продукты. Список купленных продуктов: ${purchasedItems}.`;
    }

    const schema = {type: Type.ARRAY, items: {type: Type.OBJECT, properties: {day: {type: Type.STRING}, meals: {type: Type.OBJECT, properties: {breakfast: {type: Type.STRING}, snack1: {type: Type.STRING}, lunch: {type: Type.STRING}, snack2: {type: Type.STRING}, dinner: {type: Type.STRING}}, required: ["breakfast", "snack1", "lunch", "snack2", "dinner"]}}, required: ["day", "meals"]}};
    const newMenu = await makeGeminiRequest(prompt, schema);
    state.update(s => s.menu = newMenu);
    ui.updateProgressDetails('✅ Сгенерировано меню.');
}

async function generateRecipes() {
    await ui.updateProgress(3, 5, "Генерация рецептов…", "Создаём пошаговые инструкции...");
    const currentMenu = state.get().menu;
    const uniqueMeals = [...new Set(currentMenu.flatMap(d => Object.values(d.meals)))].filter(name => name && !name.includes("(остатки)"));
    if (uniqueMeals.length === 0) {
         ui.updateProgressDetails('⚠️ Не найдено новых блюд для генерации рецептов.');
         return;
    }
    const familySize = state.get().settings.family.length;
    const schema = {type: Type.OBJECT, properties: {id: {type: Type.STRING}, name: {type: Type.STRING}, ingredients: {type: Type.ARRAY, items: {type: Type.OBJECT, properties: {name: {type: Type.STRING}, quantity: {type: Type.STRING}}, required: ["name", "quantity"]}}, steps: {type: Type.ARRAY, items: {type: Type.OBJECT, properties: {description: {type: Type.STRING}, time: {type: Type.NUMBER, description: "Время в минутах. 0 если таймер не нужен."}, ingredients: {type: Type.ARRAY, items: {type: Type.OBJECT, properties: { name: {type: Type.STRING}, quantity: {type: Type.STRING, description: "Количество и единица измерения, например '200 г' или '1 шт'"} }, required: ["name", "quantity"] }}}, required: ["description", "time", "ingredients"]}}}, required: ["id", "name", "ingredients", "steps"]};
    
    const newRecipes = {};
    for (const mealName of uniqueMeals) {
        ui.updateProgressDetails(`Обрабатывается: "${mealName}"...`);
        const prompt = `Создай детальный рецепт для блюда "${mealName}" для семьи из ${familySize} человек (${familySize} порции). В каждом шаге укажи конкретное количество ингредиентов, используемых на этом шаге.`;
        const recipeData = await makeGeminiRequest(prompt, schema);
        newRecipes[recipeData.id] = recipeData;
    }
    state.update(s => s.recipes = newRecipes);
    ui.updateProgressDetails(`✅ Все ${uniqueMeals.length} рецептов сгенерированы.`, true);
}

async function generateShoppingList() {
    await ui.updateProgress(4, 5, "Формирование списка покупок…", "Собираем все ингредиенты...");
    const recipes = state.get().recipes;
    if (Object.keys(recipes).length === 0) {
        ui.updateProgressDetails('⚠️ Нет рецептов для создания списка покупок.');
        state.update(s => s.shoppingList = []);
        return;
    }
    const allIngredients = Object.values(recipes).flatMap(r => r.ingredients);
    const prompt = `Сгруппируй и суммируй этот список ингредиентов. Категории: "Мясо и птица", "Молочные и яйца", "Овощи и зелень", "Фрукты и орехи", "Бакалея", "Хлеб и выпечка", "Напитки", "Прочее". Для каждого ингредиента верни общее необходимое количество (totalNeeded). Затем предложи разумное количество для покупки в магазине (shoppingSuggestion), округляя в большую сторону до стандартной упаковки (например, для 750г муки предложи купить 1кг). Укажи примерную цену в рублях за предложенное количество для покупки. Ингредиенты: ${JSON.stringify(allIngredients)}`;
    const schema = { type: Type.ARRAY, items: { type: Type.OBJECT, properties: { category: { type: Type.STRING }, items: { type: Type.ARRAY, items: { type: Type.OBJECT, properties: { name: { type: Type.STRING }, totalNeeded: { type: Type.OBJECT, properties: { qty: { type: Type.NUMBER }, unit: { type: Type.STRING }}}, shoppingSuggestion: { type: Type.OBJECT, properties: { qty: { type: Type.NUMBER }, unit: { type: Type.STRING }}}, price: { type: Type.NUMBER } }, required: ["name", "totalNeeded", "shoppingSuggestion", "price"] } } }, required: ["category", "items"] } };
    const shoppingListData = await makeGeminiRequest(prompt, schema);
    
    shoppingListData.forEach(category => {
        category.items.forEach(item => {
            item.purchases = []; // New property for partial purchases
        });
    });
    
    state.update(s => s.shoppingList = shoppingListData);
    const totalCost = shoppingListData.flatMap(c => c.items).reduce((sum, item) => sum + item.price, 0);
    ui.updateProgressDetails(`✅ Список из ${shoppingListData.flatMap(c => c.items).length} продуктов сгруппирован. Итого: ${totalCost} ₽`, true);
}


async function generateStepImage(recipeId, stepIndex) {
    if (!ai) initAi();
    if (!ai) return null;
    
    try {
        const recipe = state.get().recipes[recipeId];
        const stepDescription = recipe.steps[stepIndex].description;
        const prompt = `Food photography, realistic, high-detail photo of a cooking step: "${stepDescription}"`;
        
        const response = await ai.models.generateImages({
            model: 'imagen-4.0-generate-001',
            prompt: prompt,
            config: {
              numberOfImages: 1,
              outputMimeType: 'image/jpeg',
              aspectRatio: '4:3',
            },
        });
        
        const base64ImageBytes = response.generatedImages[0].image.imageBytes;
        const imageUrl = `data:image/jpeg;base64,${base64ImageBytes}`;
        
        state.update(s => {
            if (s.recipes[recipeId] && s.recipes[recipeId].steps[stepIndex]) {
                s.recipes[recipeId].steps[stepIndex].imageUrl = imageUrl;
            }
        });
        state.save();

        return imageUrl;
    } catch (error) {
        logToConsole(`🔴 Image generation failed: ${error}`);
        console.error("Image generation failed:", error);
        return null;
    }
}


export const api = {
    initAi,
    makeGeminiRequest,
    generateMenu,
    generateRecipes,
    generateShoppingList,
    generateStepImage,
};
