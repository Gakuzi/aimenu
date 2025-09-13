// IMPORTANT: The GoogleGenAI module is now imported dynamically inside generateWithAI()
// to ensure the app can start and function offline without relying on the network.

const state = {
    settings: {
        days: 7,
        people: 3,
        apiKey: '',
    },
    menu: null,
    recipes: {},
    shoppingList: [],
    currentScreen: 'menu-screen',
    lastActiveTab: 'menu-screen',
};

// DOM Elements
const screens = document.querySelectorAll('.screen');
const navButtons = document.querySelectorAll('.nav-btn');
const settingsBtn = document.getElementById('settings-btn');
const closeSettingsBtn = document.getElementById('close-settings-btn');
const settingsModal = document.getElementById('settings-modal');
const preloader = document.getElementById('preloader');
const toast = document.getElementById('toast');

// --- UI Logic ---

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
    if(preloader) preloader.classList.add('visible');
}

function hidePreloader() {
    if(preloader) preloader.classList.remove('visible');
}

function showToast(message, type = 'info', duration = 3000) {
    if (!toast) return;
    toast.textContent = message;
    toast.className = 'toast'; // Reset classes
    toast.classList.add('show');
    if (type === 'warning') {
        toast.classList.add('warning');
    }
    setTimeout(() => {
        toast.classList.remove('show');
    }, duration);
}


// --- Rendering ---

function renderMenu() {
    const content = document.getElementById('menu-content');
    if (!content) return;
    if (!state.menu || state.menu.length === 0) {
        content.innerHTML = `<p class="placeholder">Нажмите "Сгенерировать меню", чтобы начать планирование.</p>`;
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

    document.querySelectorAll('.meal').forEach(el => {
        el.addEventListener('click', () => {
            renderRecipeDetail(el.dataset.recipeId);
            showScreen('recipe-detail-screen', true);
        });
    });
}

function renderAllRecipes() {
    const list = document.getElementById('recipes-list');
    if (!list) return;
     if (!state.recipes || Object.keys(state.recipes).length === 0) {
        list.innerHTML = `<p class="placeholder">Здесь появятся рецепты после генерации меню.</p>`;
        return;
    }
    list.innerHTML = Object.values(state.recipes).map(recipe => `
         <div class="meal" data-recipe-id="${recipe.id}" style="border-bottom: 1px solid #F0EDE7; padding-bottom: 1rem; margin-bottom: 1rem;">
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
    if (!content || !title) return;
    
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
}


function renderShoppingList() {
    const list = document.getElementById('shopping-list');
    if (!list) return;
     if (state.shoppingList.length === 0) {
        list.innerHTML = `<p class="placeholder">Список покупок пуст. Сгенерируйте меню.</p>`;
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


// --- Data & Logic ---

function saveState() {
    try {
        localStorage.setItem('familyMenuState', JSON.stringify(state));
    } catch (error) {
        console.error("Could not save state to localStorage:", error);
        showToast("Не удалось сохранить состояние", "warning");
    }
}

/**
 * HYPER-ROBUST `loadState` function.
 * This is the critical fix. It deeply validates all loaded data structures from 
 * localStorage. If any part of the saved data is corrupted, malformed, or null,
 * it safely discards it and falls back to default values instead of crashing the app.
 * This ensures the application ALWAYS starts successfully.
 */
function loadState() {
    let savedStateJSON;
    try {
        savedStateJSON = localStorage.getItem('familyMenuState');
        if (!savedStateJSON) return;

        const savedState = JSON.parse(savedStateJSON);
        
        if (typeof savedState !== 'object' || savedState === null) {
            throw new Error("Saved state is not a valid object.");
        }

        // Defensively load settings
        if (savedState.settings && typeof savedState.settings === 'object') {
            state.settings.days = (typeof savedState.settings.days === 'number' && savedState.settings.days > 0) ? savedState.settings.days : 7;
            state.settings.people = (typeof savedState.settings.people === 'number' && savedState.settings.people > 0) ? savedState.settings.people : 3;
            state.settings.apiKey = typeof savedState.settings.apiKey === 'string' ? savedState.settings.apiKey : '';
        }

        // Defensively load menu
        if (Array.isArray(savedState.menu)) {
            state.menu = savedState.menu.filter(day => 
                day && typeof day === 'object' && typeof day.day === 'string' && Array.isArray(day.meals)
            );
        }

        // Defensively load recipes
        if (savedState.recipes && typeof savedState.recipes === 'object' && !Array.isArray(savedState.recipes)) {
            state.recipes = savedState.recipes;
        }

        // Defensively load shopping list (this was a likely crash point)
        if (Array.isArray(savedState.shoppingList)) {
            state.shoppingList = savedState.shoppingList
                .filter(item => item && typeof item === 'object') // CRITICAL: Filter out null/undefined items
                .map(item => ({
                    name: String(item.name || 'Без имени'),
                    amount: String(item.amount || ''),
                    checked: !!item.checked
                }));
        }

        // Defensively load screen state
        const validScreenIds = Array.from(screens).map(s => s.id);
        if (validScreenIds.includes(savedState.currentScreen)) {
            state.currentScreen = savedState.currentScreen;
        }
        if (validScreenIds.includes(savedState.lastActiveTab)) {
            state.lastActiveTab = savedState.lastActiveTab;
        }

    } catch (e) {
        console.error("Critical error loading state from localStorage. Resetting for safety.", e);
        localStorage.removeItem('familyMenuState');
        // Reset state to default just in case it was partially loaded before erroring
        Object.assign(state, {
            settings: { days: 7, people: 3, apiKey: '' },
            menu: null, recipes: {}, shoppingList: [],
            currentScreen: 'menu-screen', lastActiveTab: 'menu-screen',
        });
    }
}


function updateSettingsUI() {
    const daysValue = document.getElementById('days-value');
    const peopleValue = document.getElementById('people-value');
    const apiKeyInput = document.getElementById('api-key-input');

    if (daysValue) daysValue.textContent = state.settings.days;
    if (peopleValue) peopleValue.textContent = state.settings.people;
    if (apiKeyInput) apiKeyInput.value = state.settings.apiKey;
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

async function generatePlan() {
    if (!state.settings.apiKey) {
        showToast("Введите Gemini API ключ в настройках", 'warning', 4000);
        showModal(settingsModal);
        return;
    }

    showPreloader();
    try {
        const plan = await generateWithAI();
        processGeneratedPlan(plan);
        showToast("Меню сгенерировано с помощью Gemini!");
    } catch (error) {
        console.error("AI generation failed, falling back to local DB:", error);
        showToast("Ошибка AI. Используется локальная база.", 'warning', 4000);
        const plan = generateWithLocalDB();
        processGeneratedPlan(plan);
    } finally {
        hidePreloader();
    }
}

// --- Gemini AI Integration ---
async function generateWithAI() {
    const apiKey = state.settings.apiKey;
    if (!apiKey) {
        throw new Error("API Key is not provided.");
    }
    
    let GoogleGenAI, Type;
    try {
        // Dynamically import the module ONLY when needed.
        ({ GoogleGenAI, Type } = await import("https://esm.run/@google/generative-ai"));
    } catch (e) {
        console.error("Failed to load GoogleGenAI module:", e);
        throw new Error("Could not load AI module. Check network connection.");
    }

    const ai = new GoogleGenAI({ apiKey });

    const prompt = `
        Создай план питания на ${state.settings.days} дней для ${state.settings.people} человек.
        Включи завтрак, обед и ужин на каждый день.
        Блюда должны быть разнообразными, вкусными и относительно простыми в приготовлении.
        Для каждого блюда предоставь уникальный recipeId.
        
        В ответе должно быть 3 ключа: 'menu', 'recipes', 'shoppingList'.
        
        'menu' - это массив объектов, где каждый объект представляет день и содержит поля 'day' (e.g., "День 1") и 'meals' (массив объектов с полями 'type', 'name', 'recipeId').
        
        'recipes' - это массив объектов рецептов. Каждый рецепт должен содержать: 'id' (уникальный), 'name', 'ingredients' (массив строк с количеством, e.g., "Куриное филе - 500г"), и 'instructions' (массив строк с шагами).
        
        'shoppingList' - это массив объектов продуктов для покупки. Каждый объект должен содержать 'name' и 'amount' (e.g., "Куриное филе", "1.5кг"). Сгруппируй одинаковые ингредиенты со всех рецептов.
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


// --- Local Fallback ---
function generateWithLocalDB() {
    const localRecipes = {
        '1': { id: '1', name: 'Овсяная каша с фруктами', ingredients: [`Овсяные хлопья - ${50 * state.settings.people}г`, `Молоко - ${150 * state.settings.people}мл`, `Банан - ${state.settings.people} шт`], instructions: ['Сварить кашу на молоке.', 'Нарезать банан и добавить в кашу.'] },
        '2': { id: '2', name: 'Куриный суп', ingredients: [`Курица - ${200 * state.settings.people}г`, `Картофель - ${150 * state.settings.people}г`, `Морковь - ${50 * state.settings.people}г`, 'Лук - 1 шт'], instructions: ['Сварить бульон.', 'Добавить овощи и варить до готовности.'] },
        '3': { id: '3', name: 'Гречка с котлетами', ingredients: [`Гречка - ${80 * state.settings.people}г`, `Фарш - ${150 * state.settings.people}г`], instructions: ['Отварить гречку.', 'Сформировать и пожарить котлеты.'] },
        '4': { id: '4', name: 'Яичница с беконом', ingredients: [`Яйца - ${2 * state.settings.people} шт`, `Бекон - ${50 * state.settings.people}г`], instructions: ['Пожарить бекон.', 'Разбить яйца на сковороду и жарить до готовности.'] },
    };

    const menu = [];
    for (let i = 1; i <= state.settings.days; i++) {
        menu.push({
            day: `День ${i}`,
            meals: [
                { type: 'Завтрак', name: 'Овсяная каша с фруктами', recipeId: '1' },
                { type: 'Обед', name: 'Куриный суп', recipeId: '2' },
                { type: 'Ужин', name: 'Гречка с котлетами', recipeId: '3' },
            ]
        });
    }
    
    const shoppingList = [
        {name: 'Овсяные хлопья', amount: `${50 * state.settings.people * state.settings.days}г`},
        {name: 'Курица', amount: `${200 * state.settings.people * state.settings.days}г`},
        {name: 'Гречка', amount: `${80 * state.settings.people * state.settings.days}г`}
    ];

    return { menu, recipes: Object.values(localRecipes), shoppingList };
}


// --- Event Listeners ---

function setupEventListeners() {
    navButtons.forEach(btn => {
        btn.addEventListener('click', () => showScreen(btn.dataset.screen));
    });

    if (settingsBtn) settingsBtn.addEventListener('click', () => showModal(settingsModal));
    if (closeSettingsBtn) closeSettingsBtn.addEventListener('click', () => hideModal(settingsModal));
    if (settingsModal) settingsModal.addEventListener('click', (e) => {
        if (e.target === settingsModal) hideModal(settingsModal);
    });

    document.getElementById('days-increment')?.addEventListener('click', () => {
        if (state.settings.days < 14) state.settings.days++;
        updateSettingsUI(); saveState();
    });
    document.getElementById('days-decrement')?.addEventListener('click', () => {
        if (state.settings.days > 1) state.settings.days--;
        updateSettingsUI(); saveState();
    });
    document.getElementById('people-increment')?.addEventListener('click', () => {
        if (state.settings.people < 10) state.settings.people++;
        updateSettingsUI(); saveState();
    });
    document.getElementById('people-decrement')?.addEventListener('click', () => {
        if (state.settings.people > 1) state.settings.people--;
        updateSettingsUI(); saveState();
    });

    document.getElementById('api-key-input')?.addEventListener('change', (e) => {
        state.settings.apiKey = e.target.value.trim();
        saveState();
        showToast("API ключ сохранен.");
    });

    document.getElementById('generate-btn')?.addEventListener('click', generatePlan);

    document.getElementById('back-to-menu-btn')?.addEventListener('click', () => showScreen(state.lastActiveTab));

    document.getElementById('shopping-list')?.addEventListener('click', (e) => {
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

    const importFileInput = document.getElementById('import-file-input');
    document.getElementById('import-btn')?.addEventListener('click', () => importFileInput?.click());
    if (importFileInput) importFileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = function(event) {
            try {
                const importedState = JSON.parse(event.target.result);
                // Reset state before applying imported data for a clean import
                 Object.assign(state, {
                    settings: { days: 7, people: 3, apiKey: state.settings.apiKey }, // Keep API key
                    menu: null, recipes: {}, shoppingList: [],
                });
                // Defensively merge imported state
                if (importedState.settings) Object.assign(state.settings, importedState.settings);
                if (importedState.menu) state.menu = importedState.menu;
                if (importedState.recipes) state.recipes = importedState.recipes;
                if (importedState.shoppingList) state.shoppingList = importedState.shoppingList;

                saveState();
                updateSettingsUI();
                renderMenu();
                renderAllRecipes();
                renderShoppingList();
                showToast("План успешно импортирован!");
                hideModal(settingsModal);
            } catch (err) {
                showToast("Ошибка импорта: неверный формат файла.", 'warning');
            }
        };
        reader.readAsText(file);
        e.target.value = '';
    });
    
    document.getElementById('export-btn')?.addEventListener('click', () => {
        try {
            const dataStr = JSON.stringify(state, null, 2);
            const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
            const exportFileDefaultName = 'family_menu_plan.json';
            let linkElement = document.createElement('a');
            linkElement.setAttribute('href', dataUri);
            linkElement.setAttribute('download', exportFileDefaultName);
            linkElement.click();
        } catch (error) {
            showToast("Ошибка экспорта данных", "warning");
        }
    });
}

// --- App Initialization ---
function init() {
    loadState();
    updateSettingsUI();
    renderMenu();
    renderAllRecipes();
    renderShoppingList();
    showScreen(state.currentScreen || 'menu-screen');
    setupEventListeners();
}

document.addEventListener('DOMContentLoaded', () => {
    try {
        init();
    } catch (error) {
        console.error("A critical error occurred during app initialization:", error);
        document.body.innerHTML = `<div style="padding: 20px; text-align: center; font-family: sans-serif; color: #333;">
            <h2>Произошла критическая ошибка</h2>
            <p>Не удалось запустить приложение. Пожалуйста, попробуйте очистить данные сайта (кэш и localStorage) и перезагрузить страницу.</p>
        </div>`;
    }
});