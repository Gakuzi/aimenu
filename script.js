// --- Константы и Глобальное Состояние ---

// Этот плейсхолдер заменяется GitHub Action при сборке
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

// --- DOM Элементы ---
const screens = document.querySelectorAll('.screen');
const navButtons = document.querySelectorAll('.nav-btn');
const settingsBtn = document.getElementById('settings-btn');
const closeSettingsBtn = document.getElementById('close-settings-btn');
const settingsModal = document.getElementById('settings-modal');
const preloader = document.getElementById('preloader');
const toast = document.getElementById('toast');
// Элементы управления API ключом
const apiKeyInput = document.getElementById('api-key-input');
const toggleApiKeyVisibilityBtn = document.getElementById('toggle-api-key-visibility');
const checkApiKeyBtn = document.getElementById('check-api-key-btn');
const clearApiKeyBtn = document.getElementById('clear-api-key-btn');
const apiKeyStatus = document.getElementById('api-key-status');


// --- Управление API Ключами ---

/** Получает API ключ, сохраненный пользователем. */
function getUserApiKey() {
    return localStorage.getItem(USER_API_KEY_STORAGE_KEY);
}

/** Сохраняет пользовательский API ключ в localStorage. */
function saveUserApiKey(key) {
    localStorage.setItem(USER_API_KEY_STORAGE_KEY, key);
}

/** Удаляет пользовательский API ключ из localStorage. */
function clearUserApiKey() {
    localStorage.removeItem(USER_API_KEY_STORAGE_KEY);
}

/**
 * Определяет активный API ключ.
 * Приоритет отдается ключу, введенному пользователем.
 * Если его нет, используется встроенный ключ (из GitHub Secrets).
 * @returns {string|null} Активный API ключ или null, если ни один не доступен.
 */
function getActiveApiKey() {
    const userKey = getUserApiKey();
    if (userKey && userKey.trim() !== '') {
        return userKey; // Приоритет №1: ключ пользователя
    }
    // Проверяем, что встроенный ключ был заменен и не является плейсхолдером
    if (GEMINI_API_KEY && GEMINI_API_KEY !== "__GEMINI_API_KEY__") {
        return GEMINI_API_KEY; // Приоритет №2: встроенный ключ
    }
    return null; // Ключи отсутствуют
}


// --- Логика Интерфейса (UI) ---

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
    toast.className = 'toast';
    toast.classList.add('show');
    if (type === 'warning') {
        toast.classList.add('warning');
    }
    setTimeout(() => {
        toast.classList.remove('show');
    }, duration);
}


// --- Отрисовка (Рендеринг) ---

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


// --- Сохранение и Загрузка Состояния ---

function saveState() {
    try {
        localStorage.setItem('familyMenuState', JSON.stringify(state));
    } catch (error) {
        console.error("Could not save state to localStorage:", error);
        showToast("Не удалось сохранить состояние", "warning");
    }
}

function loadState() {
    try {
        const savedStateJSON = localStorage.getItem('familyMenuState');
        if (!savedStateJSON) return;

        const savedState = JSON.parse(savedStateJSON);
        
        Object.assign(state, {
            settings: savedState.settings || { days: 7, people: 3 },
            menu: savedState.menu || null,
            recipes: savedState.recipes || {},
            shoppingList: savedState.shoppingList || [],
            currentScreen: savedState.currentScreen || 'menu-screen',
            lastActiveTab: savedState.lastActiveTab || 'menu-screen',
        });

    } catch (e) {
        console.error("Error loading state from localStorage. Resetting.", e);
        localStorage.removeItem('familyMenuState');
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
        showToast(`Ошибка генерации: ${error.message}`, 'warning', 4000);
    } finally {
        hidePreloader();
    }
}


// --- Статус и Проверка AI ---

/** Обновляет UI индикаторов статуса AI. */
function updateAIStatusUI() {
    const modalIndicator = document.getElementById('ai-status-indicator');
    const headerIndicator = document.getElementById('header-ai-status');
    if (!modalIndicator || !headerIndicator) return;

    let statusText = 'Проверка...';
    let statusTitle = 'Статус AI: Проверка...';
    let statusClass = state.aiStatus;

    const activeKey = getActiveApiKey();
    const userKeyExists = !!getUserApiKey();

    switch(state.aiStatus) {
        case 'ready':
            statusText = userKeyExists ? 'Готово (ваш ключ)' : 'Готово (встроенный)';
            statusTitle = `Статус AI: ${statusText}`;
            break;
        case 'unavailable':
            statusText = activeKey ? 'Ключ недействителен' : 'Ключ не настроен';
            statusTitle = `Статус AI: ${statusText}.`;
            break;
    }
    
    // Обновление индикатора в модальном окне
    const textEl = modalIndicator.querySelector('.status-text');
    modalIndicator.className = `ai-status-indicator ${statusClass}`;
    if(textEl) textEl.textContent = statusText;

    // Обновление индикатора в шапке
    headerIndicator.className = `header-status ${statusClass}`;
    headerIndicator.title = statusTitle;
}

/**
 * Проверяет валидность предоставленного API ключа, делая тестовый запрос.
 * @param {string} key - API ключ для проверки.
 * @returns {Promise<boolean>} true, если ключ валиден, иначе false.
 */
async function testApiKey(key) {
    if (!key || key.trim() === '') return false;
    
    let GoogleGenAI;
    try {
        ({ GoogleGenAI } = await import("https://esm.run/@google/generative-ai"));
        const ai = new GoogleGenAI({ apiKey: key });
        // Простой, быстрый запрос для проверки аутентификации
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

/** Проверяет статус доступности AI и обновляет UI. */
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
    updateAIStatusUI();
    console.log(`AI Status: ${state.aiStatus}. Key source: ${getUserApiKey() ? 'User' : 'Built-in'}`);
}


// --- Интеграция с Gemini AI ---

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
        throw new Error("Не удалось загрузить модуль AI. Проверьте сеть.");
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

    try {
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
    } catch(e) {
        console.error("Error during Gemini API call:", e);
        throw new Error("Ошибка ответа от AI. Попробуйте снова.");
    }
}


// --- Установка Обработчиков Событий ---

function setupEventListeners() {
    navButtons.forEach(btn => {
        btn.addEventListener('click', () => showScreen(btn.dataset.screen));
    });

    settingsBtn?.addEventListener('click', () => showModal(settingsModal));
    closeSettingsBtn?.addEventListener('click', () => hideModal(settingsModal));
    settingsModal?.addEventListener('click', (e) => {
        if (e.target === settingsModal) hideModal(settingsModal);
    });

    // Настройки: дни и количество человек
    document.getElementById('days-increment')?.addEventListener('click', () => { state.settings.days < 14 && state.settings.days++; updateSettingsUI(); saveState(); });
    document.getElementById('days-decrement')?.addEventListener('click', () => { state.settings.days > 1 && state.settings.days--; updateSettingsUI(); saveState(); });
    document.getElementById('people-increment')?.addEventListener('click', () => { state.settings.people < 10 && state.settings.people++; updateSettingsUI(); saveState(); });
    document.getElementById('people-decrement')?.addEventListener('click', () => { state.settings.people > 1 && state.settings.people--; updateSettingsUI(); saveState(); });

    // Настройки: управление видимостью API ключа
    toggleApiKeyVisibilityBtn?.addEventListener('click', () => {
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

    // Настройки: проверка и сохранение ключа
    checkApiKeyBtn?.addEventListener('click', async () => {
        const key = apiKeyInput.value.trim();
        if (!key) {
            apiKeyStatus.textContent = 'Пожалуйста, введите ключ.';
            apiKeyStatus.className = 'api-status-message error';
            return;
        }

        apiKeyStatus.textContent = 'Проверка...';
        apiKeyStatus.className = 'api-status-message loading';
        checkApiKeyBtn.disabled = true;
        clearApiKeyBtn.disabled = true;
        apiKeyInput.disabled = true;

        const isValid = await testApiKey(key);
        
        if (isValid) {
            saveUserApiKey(key);
            apiKeyStatus.textContent = 'Ключ действителен и сохранен!';
            apiKeyStatus.className = 'api-status-message success';
            await checkAIStatus(); // Обновляем глобальный статус
        } else {
            apiKeyStatus.textContent = 'Ошибка: неверный ключ или проблема с сетью.';
            apiKeyStatus.className = 'api-status-message error';
        }
        
        checkApiKeyBtn.disabled = false;
        clearApiKeyBtn.disabled = false;
        apiKeyInput.disabled = false;
    });

    // Настройки: очистка ключа
    clearApiKeyBtn?.addEventListener('click', async () => {
        clearUserApiKey();
        apiKeyInput.value = '';
        apiKeyStatus.textContent = 'Ваш ключ удален. Используется встроенный ключ (если доступен).';
        apiKeyStatus.className = 'api-status-message';
        await checkAIStatus(); // Перепроверяем статус с встроенным ключом
    });

    // Кнопки генерации
    document.getElementById('generate-btn')?.addEventListener('click', generatePlan);
    document.getElementById('generate-from-settings-btn')?.addEventListener('click', () => {
        hideModal(settingsModal);
        setTimeout(generatePlan, 300);
    });

    // Навигация
    document.getElementById('back-to-menu-btn')?.addEventListener('click', () => showScreen(state.lastActiveTab));

    // Список покупок
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

    // Импорт/Экспорт
    const importFileInput = document.getElementById('import-file-input');
    document.getElementById('import-btn')?.addEventListener('click', () => importFileInput?.click());
    importFileInput?.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = function(event) {
            try {
                const importedState = JSON.parse(event.target.result);
                Object.assign(state, { settings: {}, menu: null, recipes: {}, shoppingList: [] });
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
            const linkElement = document.createElement('a');
            linkElement.setAttribute('href', dataUri);
            linkElement.setAttribute('download', exportFileDefaultName);
            linkElement.click();
        } catch (error) {
            showToast("Ошибка экспорта данных", "warning");
        }
    });
}

// --- Инициализация Приложения ---

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

    checkAIStatus(); // Первичная проверка при запуске
    setInterval(checkAIStatus, 60000); // Повторная проверка каждую минуту
}

document.addEventListener('DOMContentLoaded', () => {
    try {
        init();
    } catch (error) {
        console.error("A critical error occurred during app initialization:", error);
        document.body.innerHTML = `<div style="padding: 20px; text-align: center; font-family: sans-serif; color: #333;">
            <h2>Произошла критическая ошибка</h2>
            <p>Не удалось запустить приложение. Пожалуйста, попробуйте очистить данные сайта и перезагрузить страницу.</p>
        </div>`;
    }
});
