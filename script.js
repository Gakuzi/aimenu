// --- Константы и Глобальное Состояние ---
const GEMINI_API_KEY = "__GEMINI_API_KEY__"; // Сюда будет встроен ключ
const USER_API_KEY_STORAGE_KEY = 'userGeminiApiKey'; // Для будущих расширений, если понадобится
const APP_STATE_STORAGE_KEY = 'familyMenuState';

const state = {
    settings: {
        days: 7,
        people: 3,
        preferences: '',
    },
    menu: null,
    recipes: {},
    shoppingList: [],
    currentScreen: 'menu-screen',
    lastActiveTab: 'menu-screen',
};

// --- DOM Элементы ---
const screens = document.querySelectorAll('.screen');
const navButtons = document.querySelectorAll('.nav-btn');
const preloader = document.getElementById('preloader');
const toast = document.getElementById('toast');
const settingsModal = document.getElementById('settings-modal');

// --- Управление UI ---

function showScreen(screenId, isDetailView = false) {
    state.currentScreen = screenId;
    screens.forEach(screen => {
        screen.classList.toggle('active', screen.id === screenId);
    });

    if (!isDetailView) {
        state.lastActiveTab = screenId;
        navButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.screen === screenId);
        });
    }
}

function showModal(modal) {
    if(modal) modal.classList.add('visible');
}

function hideModal(modal) {
    if(modal) modal.classList.remove('visible');
}

function showPreloader() {
    preloader.classList.add('visible');
}

function hidePreloader() {
    preloader.classList.remove('visible');
}

function showToast(message, type = 'info', duration = 3000) {
    toast.textContent = message;
    toast.className = 'toast'; // Reset classes
    if (type === 'warning') {
        toast.classList.add('warning');
    }
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, duration);
}


// --- Рендеринг данных ---

function renderMenu() {
    const content = document.getElementById('menu-content');
    if (!state.menu || state.menu.length === 0) {
        content.innerHTML = `<p class="placeholder">Нажмите "Сгенерировать меню", чтобы начать ваше кулинарное путешествие.</p>`;
        return;
    }
    content.innerHTML = state.menu.map(day => `
        <div class="day-card">
            <h2>${day.day}</h2>
            ${day.meals.map(meal => `
                <div class="meal" data-recipe-id="${meal.recipeId}">
                    <h3>${meal.name}</h3>
                    <p>${meal.type}</p>
                </div>
            `).join('')}
        </div>
    `).join('');

    content.querySelectorAll('.meal').forEach(el => {
        el.addEventListener('click', () => {
            renderRecipeDetail(el.dataset.recipeId);
            showScreen('recipe-detail-screen', true);
        });
    });
}

function renderAllRecipes() {
    const list = document.getElementById('recipes-list');
     if (!state.recipes || Object.keys(state.recipes).length === 0) {
        list.innerHTML = `<p class="placeholder">Здесь появятся все рецепты после генерации вашего первого меню.</p>`;
        return;
    }
    list.innerHTML = Object.values(state.recipes).map(recipe => `
         <div class="meal" data-recipe-id="${recipe.id}" style="padding: 16px 8px; border-bottom: 1px solid #F0EDE7;">
            <h3>${recipe.name}</h3>
        </div>
    `).join('');

    list.querySelectorAll('.meal').forEach(el => {
         el.addEventListener('click', () => {
            renderRecipeDetail(el.dataset.recipeId);
            showScreen('recipe-detail-screen', true);
        });
    });
}

function renderRecipeDetail(recipeId) {
    const recipe = state.recipes[recipeId];
    if (!recipe) return;
    const content = document.getElementById('recipe-detail-content');
    const title = document.getElementById('recipe-detail-title');
    
    title.textContent = recipe.name;
    
    content.innerHTML = `
        <img src="https://placeholder.co/600x400/D4A373/8B5E3C?text=${encodeURIComponent(recipe.name)}" alt="${recipe.name}">
        <h3>Ингредиенты</h3>
        <ul>
            ${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}
        </ul>
        <h3>Инструкции</h3>
        <ol>
            ${recipe.instructions.map(step => `<li>${step}</li>`).join('')}
        </ol>
    `;
    content.scrollTop = 0; // Scroll to top on new recipe
}

function renderShoppingList() {
    const list = document.getElementById('shopping-list');
    if (state.shoppingList.length === 0) {
        list.innerHTML = `<p class="placeholder">Список покупок пуст. Сгенерируйте меню, и он появится здесь.</p>`;
        return;
    }
    list.innerHTML = state.shoppingList.map((item, index) => `
        <li class="shopping-item ${item.checked ? 'checked' : ''}" data-index="${index}">
            <span class="checkbox">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </span>
            <div class="item-details">
                <span class="item-name">${item.name}</span>
                <span class="item-amount">${item.amount}</span>
            </div>
        </li>
    `).join('');
}


// --- Управление состоянием ---

function saveState() {
    try {
        localStorage.setItem(APP_STATE_STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
        console.error("Не удалось сохранить состояние в localStorage:", error);
        showToast("Ошибка сохранения", "warning");
    }
}

function loadState() {
    try {
        const savedStateJSON = localStorage.getItem(APP_STATE_STORAGE_KEY);
        if (!savedStateJSON) return;
        const savedState = JSON.parse(savedStateJSON);
        Object.assign(state, savedState);
    } catch (e) {
        console.error("Ошибка загрузки состояния. Сброс.", e);
        localStorage.removeItem(APP_STATE_STORAGE_KEY);
    }
}

function updateSettingsUI() {
    document.getElementById('days-value').textContent = state.settings.days;
    document.getElementById('people-value').textContent = state.settings.people;
    document.getElementById('preferences-input').value = state.settings.preferences;
}

function processGeneratedPlan(plan) {
    state.menu = plan.menu;
    state.recipes = {};
    plan.recipes.forEach(r => state.recipes[r.id] = r);
    state.shoppingList = plan.shoppingList.map(item => ({...item, checked: false }));
    
    saveState();
    renderMenu();
    renderAllRecipes();
    renderShoppingList();
    showScreen('menu-screen');
}

// --- Интеграция с Gemini AI ---

async function generatePlan() {
    if (!GEMINI_API_KEY || GEMINI_API_KEY === "__GEMINI_API_KEY__") {
        showToast("Ключ API не настроен в приложении.", "warning");
        return;
    }
    
    showPreloader();
    try {
        const plan = await callGeminiAPI(GEMINI_API_KEY);
        processGeneratedPlan(plan);
        showToast("Ваше меню готово!");
    } catch (error) {
        console.error("Ошибка генерации AI:", error);
        showToast("Ошибка генерации. Попробуйте снова.", "warning");
    } finally {
        hidePreloader();
    }
}

async function callGeminiAPI(apiKey) {
    let GoogleGenAI, Type;
    try {
        ({ GoogleGenAI, Type } = await import("https://esm.run/@google/generative-ai"));
    } catch (e) {
        throw new Error("Не удалось загрузить модуль AI. Проверьте сеть.");
    }

    const ai = new GoogleGenAI({ apiKey });

    const prompt = `
        Создай красивый и уютный план питания на ${state.settings.days} дней для ${state.settings.people} человек.
        Предпочтения пользователя: "${state.settings.preferences || "сбалансированное питание, без особых предпочтений"}".
        Включи завтрак, обед и ужин на каждый день. Блюда должны быть разнообразными, вкусными и относительно простыми в приготовлении, создающими ощущение домашнего уюта.
        Для каждого блюда предоставь уникальный recipeId в формате "recipe-XXXX".
        
        Твой ответ ДОЛЖЕН быть JSON объектом с 3 ключами: 'menu', 'recipes', 'shoppingList'.
        
        - 'menu': массив объектов дней. Каждый объект: { "day": "День 1", "meals": [ { "type": "Завтрак", "name": "Овсяная каша с ягодами", "recipeId": "recipe-0001" } ... ] }.
        - 'recipes': массив объектов рецептов. Каждый рецепт: { "id": "recipe-0001", "name": "Овсяная каша с ягодами", "ingredients": ["Овсяные хлопья - 100г", "Молоко - 200мл", "Свежие ягоды - 50г"], "instructions": ["Смешать хлопья с молоком.", "Варить 5 минут.", "Добавить ягоды."] }.
        - 'shoppingList': массив объектов продуктов для покупки. Каждый объект: { "name": "Овсяные хлопья", "amount": "500г" }. Сгруппируй одинаковые ингредиенты со всех рецептов в одну позицию с общим количеством.
    `;
    
    const responseSchema = {
        type: Type.OBJECT,
        properties: {
            menu: { type: Type.ARRAY, items: { type: Type.OBJECT, properties: { day: { type: Type.STRING }, meals: { type: Type.ARRAY, items: { type: Type.OBJECT, properties: { type: { type: Type.STRING }, name: { type: Type.STRING }, recipeId: { type: Type.STRING } } } } } } },
            recipes: { type: Type.ARRAY, items: { type: Type.OBJECT, properties: { id: { type: Type.STRING }, name: { type: Type.STRING }, ingredients: { type: Type.ARRAY, items: { type: Type.STRING } }, instructions: { type: Type.ARRAY, items: { type: Type.STRING } } } } },
            shoppingList: { type: Type.ARRAY, items: { type: Type.OBJECT, properties: { name: { type: Type.STRING }, amount: { type: Type.STRING } } } }
        },
        required: ["menu", "recipes", "shoppingList"]
    };

    const genAIResponse = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            responseSchema: responseSchema,
        },
    });

    const jsonText = genAIResponse.text.trim();
    return JSON.parse(jsonText);
}

// --- Обработчики событий ---

function setupEventListeners() {
    navButtons.forEach(btn => {
        btn.addEventListener('click', () => showScreen(btn.dataset.screen));
    });

    document.getElementById('settings-btn').addEventListener('click', () => showModal(settingsModal));
    document.getElementById('close-settings-btn').addEventListener('click', () => hideModal(settingsModal));
    settingsModal.addEventListener('click', (e) => {
        if (e.target === settingsModal) hideModal(settingsModal);
    });

    // Настройки
    document.getElementById('days-increment').addEventListener('click', () => { state.settings.days < 14 && state.settings.days++; updateSettingsUI(); });
    document.getElementById('days-decrement').addEventListener('click', () => { state.settings.days > 1 && state.settings.days--; updateSettingsUI(); });
    document.getElementById('people-increment').addEventListener('click', () => { state.settings.people < 10 && state.settings.people++; updateSettingsUI(); });
    document.getElementById('people-decrement').addEventListener('click', () => { state.settings.people > 1 && state.settings.people--; updateSettingsUI(); });
    document.getElementById('preferences-input').addEventListener('input', (e) => { state.settings.preferences = e.target.value; });

    // Кнопки генерации
    document.getElementById('generate-btn').addEventListener('click', generatePlan);
    document.getElementById('generate-from-settings-btn').addEventListener('click', () => {
        saveState();
        hideModal(settingsModal);
        setTimeout(generatePlan, 300); // Allow modal to close
    });

    // Навигация
    document.getElementById('back-to-menu-btn').addEventListener('click', () => showScreen(state.lastActiveTab));

    // Список покупок
    document.getElementById('shopping-list').addEventListener('click', (e) => {
        const itemEl = e.target.closest('.shopping-item');
        if (itemEl) {
            const index = parseInt(itemEl.dataset.index, 10);
            if(state.shoppingList[index]) {
                state.shoppingList[index].checked = !state.shoppingList[index].checked;
                saveState();
                renderShoppingList();
            }
        }
    });
    
    // Импорт/Экспорт
    const importFileInput = document.getElementById('import-file-input');
    document.getElementById('import-btn').addEventListener('click', () => importFileInput.click());
    importFileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = function(event) {
            try {
                const importedData = JSON.parse(event.target.result);
                // Basic validation
                if (importedData.menu && importedData.recipes && importedData.shoppingList) {
                    Object.assign(state, importedData);
                    saveState();
                    updateSettingsUI();
                    renderMenu();
                    renderAllRecipes();
                    renderShoppingList();
                    showToast("План успешно импортирован!");
                    hideModal(settingsModal);
                } else {
                    throw new Error("Invalid file structure");
                }
            } catch (err) {
                showToast("Ошибка импорта: неверный формат.", 'warning');
            }
        };
        reader.readAsText(file);
        e.target.value = ''; // Reset for next import
    });
    
    document.getElementById('export-btn').addEventListener('click', () => {
        const exportData = JSON.stringify(state, null, 2);
        const blob = new Blob([exportData], {type: 'application/json'});
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'menu-plan.json';
        a.click();
        URL.revokeObjectURL(url);
        showToast("Экспорт начат...");
    });
}

// --- Инициализация ---

function init() {
    loadState();
    updateSettingsUI();
    renderMenu();
    renderAllRecipes();
    renderShoppingList();
    showScreen(state.lastActiveTab || 'menu-screen');
    setupEventListeners();
}

document.addEventListener('DOMContentLoaded', init);
