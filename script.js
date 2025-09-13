// This placeholder will be replaced by the GitHub Action secret
const GEMINI_API_KEY = "__GEMINI_API_KEY__";
const USER_API_KEY_STORAGE_KEY = 'userGeminiApiKey';

const state = {
    settings: {
        days: 7,
        people: 3,
    },
    menu: null,
    recipes: {},
    shoppingList: [],
    currentScreen: 'menu-screen',
    lastActiveTab: 'menu-screen',
    aiStatus: 'checking', // 'checking', 'ready', 'unavailable'
};

// DOM Elements
const screens = document.querySelectorAll('.screen');
const navButtons = document.querySelectorAll('.nav-btn');
const settingsBtn = document.getElementById('settings-btn');
const closeSettingsBtn = document.getElementById('close-settings-btn');
const settingsModal = document.getElementById('settings-modal');
const preloader = document.getElementById('preloader');
const toast = document.getElementById('toast');
// API Key UI elements
const apiKeyInput = document.getElementById('api-key-input');
const toggleApiKeyVisibilityBtn = document.getElementById('toggle-api-key-visibility');
const checkApiKeyBtn = document.getElementById('check-api-key-btn');
const clearApiKeyBtn = document.getElementById('clear-api-key-btn');
const apiKeyStatus = document.getElementById('api-key-status');


// --- Key Management ---
function getUserApiKey() {
    return localStorage.getItem(USER_API_KEY_STORAGE_KEY);
}

function saveUserApiKey(key) {
    localStorage.setItem(USER_API_KEY_STORAGE_KEY, key);
}

function clearUserApiKey() {
    localStorage.removeItem(USER_API_KEY_STORAGE_KEY);
}

function getActiveApiKey() {
    const userKey = getUserApiKey();
    if (userKey && userKey.trim() !== '') {
        return userKey;
    }
    if (GEMINI_API_KEY && GEMINI_API_KEY !== "__GEMINI_API_KEY__") {
        return GEMINI_API_KEY;
    }
    return null;
}


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
        const stateToSave = { ...state };
        localStorage.setItem('familyMenuState', JSON.stringify(stateToSave));
    } catch (error) {
        console.error("Could not save state to localStorage:", error);
        showToast("Не удалось сохранить состояние", "warning");
    }
}

function loadState() {
    let savedStateJSON;
    try {
        savedStateJSON = localStorage.getItem('familyMenuState');
        if (!savedStateJSON) return;

        const savedState = JSON.parse(savedStateJSON);
        
        if (typeof savedState !== 'object' || savedState === null) {
            throw new Error("Saved state is not a valid object.");
        }

        if (savedState.settings && typeof savedState.settings === 'object') {
            state.settings.days = (typeof savedState.settings.days === 'number' && savedState.settings.days > 0) ? savedState.settings.days : 7;
            state.settings.people = (typeof savedState.settings.people === 'number' && savedState.settings.people > 0) ? savedState.settings.people : 3;
        }

        if (Array.isArray(savedState.menu)) {
            state.menu = savedState.menu.filter(day => 
                day && typeof day === 'object' && typeof day.day === 'string' && Array.isArray(day.meals)
            );
        }

        if (savedState.recipes && typeof savedState.recipes === 'object' && !Array.isArray(savedState.recipes)) {
            state.recipes = savedState.recipes;
        }

        if (Array.isArray(savedState.shoppingList)) {
            state.shoppingList = savedState.shoppingList
                .filter(item => item && typeof item === 'object')
                .map(item => ({
                    name: String(item.name || 'Без имени'),
                    amount: String(item.amount || ''),
                    checked: !!item.checked
                }));
        }
        
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
        Object.assign(state, {
            settings: { days: 7, people: 3 },
            menu: null, recipes: {}, shoppingList: [],
            currentScreen: 'menu-screen', lastActiveTab: 'menu-screen',
        });
    }
}


function updateSettingsUI() {
    const daysValue = document.getElementById('days-value');
    const peopleValue = document.getElementById('people-value');

    if (daysValue) daysValue.textContent = state.settings.days;
    if (peopleValue) peopleValue.textContent = state.settings.people;
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
    if (state.aiStatus !== 'ready') {
        showToast("AI недоступен. Проверьте ключ в настройках.", "warning");
        return;
    }

    showPreloader();
    try {
        const plan = await generateWithAI();
        processGeneratedPlan(plan);
        showToast("Меню сгенерировано с помощью Gemini!");
    } catch (error) {
        console.error("AI generation failed:", error);
        showToast("Ошибка генерации. Попробуйте еще раз.", 'warning', 4000);
    } finally {
        hidePreloader();
    }
}


// --- AI Status Check ---
function updateAIStatusUI() {
    const modalIndicator = document.getElementById('ai-status-indicator');
    const headerIndicator = document.getElementById('header-ai-status');
    
    if (!modalIndicator || !headerIndicator) return;

    let statusText = 'Проверка...';
    let statusTitle = 'Статус AI: Проверка...';
    const statusClass = state.aiStatus;

    switch(state.aiStatus) {
        case 'ready':
            statusText = getUserApiKey() ? 'Готово (ваш ключ)' : 'Готово';
            statusTitle = `Статус AI: ${statusText}`;
            break;
        case 'unavailable':
            statusText = 'Недоступно';
            statusTitle = 'Статус AI: Ключ не настроен или недействителен.';
            break;
    }
    
    if (modalIndicator) {
        const textEl = modalIndicator.querySelector('.status-text');
        modalIndicator.className = `ai-status-indicator ${statusClass}`;
        if(textEl) textEl.textContent = statusText;
    }

    if (headerIndicator) {
        headerIndicator.className = `header-status ${statusClass}`;
        headerIndicator.title = statusTitle;
    }
}

async function testApiKey(key) {
    if (!key || key.trim() === '') return false;
    
    let GoogleGenAI;
    try {
        ({ GoogleGenAI } = await import("https://esm.run/@google/generative-ai"));
        const ai = new GoogleGenAI({ apiKey: key });
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: "hi",
            config: { thinkingConfig: { thinkingBudget: 0 } }
        });
        return !!(response && response.text);
    } catch (error) {
        console.error("API Key test failed:", error);
        return false;
    }
}

async function checkAIStatus() {
    state.aiStatus = 'checking';
    updateAIStatusUI();

    const apiKey = getActiveApiKey();
    if (!apiKey) {
        state.aiStatus = 'unavailable';
        updateAIStatusUI();
        console.warn("AI Status: Unavailable (No active API key).");
        return;
    }
    
    const isValid = await testApiKey(apiKey);
    state.aiStatus = isValid ? 'ready' : 'unavailable';
    const keySource = getUserApiKey() ? 'User' : 'Built-in';
    console.log(`AI Status: ${state.aiStatus}. Key source: ${keySource}`);
    updateAIStatusUI();
}


// --- Gemini AI Integration ---
async function generateWithAI() {
    const apiKey = getActiveApiKey();
    if (!apiKey) {
        throw new Error("API-ключ не настроен.");
    }
    
    let GoogleGenAI, Type;
    try {
        ({ GoogleGenAI, Type } = await import("https://esm.run/@google/generative-ai"));
    } catch (e) {
        console.error("Failed to load GoogleGenAI module:", e);
        throw new Error("Не удалось загрузить модуль AI. Проверьте подключение к сети.");
    }

    const ai = new GoogleGenAI({ apiKey: apiKey });

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

    if (toggleApiKeyVisibilityBtn) {
        toggleApiKeyVisibilityBtn.addEventListener('click', () => {
            const openIcon = toggleApiKeyVisibilityBtn.querySelector('.eye-open');
            const closedIcon = toggleApiKeyVisibilityBtn.querySelector('.eye-closed');
            if (apiKeyInput.type === 'password') {
                apiKeyInput.type = 'text';
                openIcon.style.display = 'none';
                closedIcon.style.display = 'block';
            } else {
                apiKeyInput.type = 'password';
                openIcon.style.display = 'block';
                closedIcon.style.display = 'none';
            }
        });
    }

    if (checkApiKeyBtn) {
        checkApiKeyBtn.addEventListener('click', async () => {
            const key = apiKeyInput.value.trim();
            if (!key) {
                apiKeyStatus.textContent = 'Пожалуйста, введите ключ.';
                apiKeyStatus.className = 'api-status-message error';
                return;
            }

            apiKeyStatus.textContent = 'Проверка...';
            apiKeyStatus.className = 'api-status-message loading';
            checkApiKeyBtn.disabled = true;
            apiKeyInput.disabled = true;

            const isValid = await testApiKey(key);
            
            if (isValid) {
                saveUserApiKey(key);
                apiKeyStatus.textContent = 'Ключ действителен и сохранен!';
                apiKeyStatus.className = 'api-status-message success';
                await checkAIStatus(); // Update global status
            } else {
                apiKeyStatus.textContent = 'Ошибка: неверный ключ или проблема с сетью.';
                apiKeyStatus.className = 'api-status-message error';
            }
            
            checkApiKeyBtn.disabled = false;
            apiKeyInput.disabled = false;
        });
    }

    if (clearApiKeyBtn) {
        clearApiKeyBtn.addEventListener('click', async () => {
            clearUserApiKey();
            apiKeyInput.value = '';
            apiKeyStatus.textContent = 'Ваш ключ удален. Используется встроенная конфигурация.';
            apiKeyStatus.className = 'api-status-message';
            await checkAIStatus(); // Re-check with built-in key
        });
    }

    document.getElementById('generate-btn')?.addEventListener('click', generatePlan);

    document.getElementById('generate-from-settings-btn')?.addEventListener('click', () => {
        hideModal(settingsModal);
        setTimeout(generatePlan, 300);
    });

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
                 Object.assign(state, {
                    settings: { days: 7, people: 3 },
                    menu: null, recipes: {}, shoppingList: [],
                });
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
    
    const userKey = getUserApiKey();
    if (apiKeyInput && userKey) {
        apiKeyInput.value = userKey;
    }

    renderMenu();
    renderAllRecipes();
    renderShoppingList();
    showScreen(state.currentScreen || 'menu-screen');
    setupEventListeners();

    checkAIStatus(); // Initial check
    setInterval(checkAIStatus, 60000); // Re-check every minute
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