// --- Константы и Глобальное Состояние ---

const GEMINI_API_KEY = "__GEMINI_API_KEY__"; 
const USER_API_KEY_STORAGE_KEY = 'userGeminiApiKey';
const API_MODE_STORAGE_KEY = 'userApiKeyMode';

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
};

const aiState = {
    status: 'checking', // 'checking', 'ready-user', 'ready-builtin', 'unavailable'
    mode: 'auto', // 'auto', 'force_user', 'force_builtin'
    userKey: null,
    userKeyValid: null,
    builtinKeyValid: null,
    lastError: null,
    activeKeySource: null, // 'user' | 'builtin' | null
};


// --- DOM Элементы ---
const screens = document.querySelectorAll('.screen');
const navButtons = document.querySelectorAll('.nav-btn');
const preloader = document.getElementById('preloader');
const toast = document.getElementById('toast');

// Общие настройки
const settingsBtn = document.getElementById('settings-btn');
const closeSettingsBtn = document.getElementById('close-settings-btn');
const settingsModal = document.getElementById('settings-modal');

// Диагностика AI
const headerAiStatusBtn = document.getElementById('header-ai-status');
const aiDiagnosticsModal = document.getElementById('ai-diagnostics-modal');
const closeAiDiagBtn = document.getElementById('close-ai-diag-btn');
const aiDiagStatusIndicator = document.getElementById('ai-diag-status-indicator');
const aiDiagApiKeyInput = document.getElementById('ai-diag-api-key-input');
const aiDiagToggleVisibilityBtn = document.getElementById('ai-diag-toggle-visibility');
const aiDiagTestBtn = document.getElementById('ai-diag-test-btn');
const aiDiagClearKeyBtn = document.getElementById('ai-diag-clear-key-btn');
const aiDiagSaveBtn = document.getElementById('ai-diag-save-btn');
const aiDiagModeRadios = document.querySelectorAll('input[name="ai-diag-api-mode"]');
const aiDiagLog = document.getElementById('ai-diag-log');
const aiDiagErrorDetails = document.getElementById('ai-diag-error-details');


// --- Управление API ---

function loadAiConfig() {
    aiState.userKey = localStorage.getItem(USER_API_KEY_STORAGE_KEY);
    aiState.mode = localStorage.getItem(API_MODE_STORAGE_KEY) || 'auto';
    aiDiagApiKeyInput.value = aiState.userKey || '';
    const activeRadio = document.querySelector(`input[name="ai-diag-api-mode"][value="${aiState.mode}"]`);
    if (activeRadio) activeRadio.checked = true;
}

function saveAiConfig() {
    localStorage.setItem(USER_API_KEY_STORAGE_KEY, aiDiagApiKeyInput.value.trim());
    const selectedMode = document.querySelector('input[name="ai-diag-api-mode"]:checked');
    localStorage.setItem(API_MODE_STORAGE_KEY, selectedMode ? selectedMode.value : 'auto');
    loadAiConfig();
}

/**
 * Определяет, какой ключ использовать на основе текущего состояния и режима.
 * @returns {{key: string|null, source: 'user'|'builtin'|null}}
 */
function determineActiveKey() {
    const builtinKeyExists = GEMINI_API_KEY && GEMINI_API_KEY !== "__GEMINI_API_KEY__";

    switch (aiState.mode) {
        case 'force_user':
            return { key: aiState.userKey, source: 'user' };
        case 'force_builtin':
            return { key: builtinKeyExists ? GEMINI_API_KEY : null, source: 'builtin' };
        case 'auto':
        default:
            if (aiState.userKey && aiState.userKeyValid) {
                return { key: aiState.userKey, source: 'user' };
            }
            if (builtinKeyExists && aiState.builtinKeyValid) {
                return { key: GEMINI_API_KEY, source: 'builtin' };
            }
            // Fallback for generation attempt if validation state is unknown
            if (aiState.userKey) {
                return { key: aiState.userKey, source: 'user' };
            }
            if (builtinKeyExists) {
                return { key: GEMINI_API_KEY, source: 'builtin' };
            }
            return { key: null, source: null };
    }
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
        
        Object.assign(state.settings, savedState.settings);
        
        Object.assign(state, {
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
    const { key, source } = determineActiveKey();

    if (!key || aiState.status === 'unavailable') {
         showToast("AI недоступен. Откройте диагностику для решения проблемы.", "warning");
         showModal(aiDiagnosticsModal);
         runDiagnostics();
         return;
    }

    showPreloader();
    try {
        const plan = await generateWithAI(key);
        processGeneratedPlan(plan);
        showToast(`Меню сгенерировано! (ключ: ${source === 'user' ? 'ваш' : 'встроенный'})`);
    } catch (error) {
        console.error("AI generation failed:", error);
        aiState.lastError = error;
        updateAIStatus(); // Обновляем статус, чтобы отразить ошибку
        showToast(`Ошибка генерации. ${error.userMessage || 'Откройте диагностику.'}`, 'warning', 4000);
        showModal(aiDiagnosticsModal);
        runDiagnostics();
    } finally {
        hidePreloader();
    }
}


// --- Статус и Диагностика AI ---
function logToDiagnostics(message) {
    if (aiDiagLog) {
        aiDiagLog.textContent += message + '\n';
        aiDiagLog.scrollTop = aiDiagLog.scrollHeight;
    }
}

function clearDiagnostics() {
    if(aiDiagLog) aiDiagLog.textContent = '';
    if(aiDiagErrorDetails) aiDiagErrorDetails.style.display = 'none';
}

function showDiagnosticsError(error) {
    if (!aiDiagErrorDetails) return;
    const { title, meaning, suggestion } = translateError(error);
    document.getElementById('ai-diag-error-title').textContent = title;
    document.getElementById('ai-diag-error-meaning').textContent = meaning;
    document.getElementById('ai-diag-error-suggestion').textContent = suggestion;
    aiDiagErrorDetails.style.display = 'block';
}

function updateAIStatusUI() {
    const indicators = [aiDiagStatusIndicator, headerAiStatusBtn];
    if (!indicators[0] || !indicators[1]) return;
    
    let statusText = 'Проверка...';
    let statusTitle = 'Статус AI: Проверка...';

    const { key, source } = determineActiveKey();
    aiState.activeKeySource = source;

    switch(aiState.status) {
        case 'ready-user':
            statusText = 'Готово (ваш ключ)';
            statusTitle = `Статус AI: ${statusText}`;
            break;
        case 'ready-builtin':
            statusText = 'Готово (встроенный)';
            statusTitle = `Статус AI: ${statusText}`;
            break;
        case 'unavailable':
            statusText = 'Ошибка';
            statusTitle = 'AI недоступен. Нажмите для диагностики.';
            break;
    }
    
    indicators.forEach(ind => {
        const textEl = ind.querySelector('.status-text');
        ind.className = ind.id.includes('header') 
            ? `header-status-btn ${aiState.status}` 
            : `ai-status-indicator ${aiState.status}`;
        if(textEl) textEl.textContent = statusText;
        ind.title = statusTitle;
    });
}

/**
 * Проверяет валидность предоставленного API ключа.
 * @param {string} key - API ключ для проверки.
 * @returns {Promise<boolean>} true, если ключ валиден.
 * @throws {Error} Кастомная ошибка с деталями при неудаче.
 */
async function testApiKey(key) {
    if (!key || key.trim() === '') {
        throw new Error('API key is empty');
    }
    
    try {
        const { GoogleGenAI } = await import("https://esm.run/@google/generative-ai");
        const ai = new GoogleGenAI({ apiKey: key });
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: "hi",
            config: { thinkingConfig: { thinkingBudget: 0 } }
        });
        return !!(response && response.text);
    } catch (error) {
        error.isApiKeyTestError = true;
        throw error; // Пробрасываем ошибку дальше для обработки
    }
}


function translateError(error) {
    let title = 'Неизвестная ошибка';
    let meaning = 'Произошла непредвиденная ошибка при обращении к API Gemini.';
    let suggestion = 'Проверьте консоль разработчика для получения дополнительной информации и попробуйте снова позже.';
    
    if (error.message.includes('API key is empty')) {
        title = 'Пустой API ключ';
        meaning = 'Ключ для этого режима не введен или не настроен.';
        suggestion = 'Введите ваш ключ в поле выше или выберите другой режим подключения.';
    } else if (error.message.includes('fetch')) {
        title = 'Ошибка сети';
        meaning = 'Не удалось подключиться к серверам Google. Возможно, у вас проблемы с интернетом или блокировщик рекламы/файрвол мешает соединению.';
        suggestion = 'Проверьте ваше интернет-соединение и отключите блокировщики для этого сайта.';
    } else if (error.message.includes('400')) {
        title = 'Ошибка 400: Неверный запрос (Invalid API Key)';
        meaning = 'Скорее всего, вы ввели недействительный API ключ. Он имеет неверный формат.';
        suggestion = 'Пожалуйста, скопируйте и вставьте ваш ключ из Google AI Studio еще раз, убедившись, что в нем нет лишних символов.';
    } else if (error.message.includes('429')) {
        title = 'Ошибка 429: Исчерпана квота';
        meaning = 'Ваш ключ превысил бесплатный лимит использования (количество запросов в минуту).';
        suggestion = 'Подождите одну минуту и попробуйте снова. Если ошибка повторяется, возможно, стоит создать новый ключ.';
    }
    
    error.userMessage = title;
    return { title, meaning, suggestion };
}

/** Основная функция обновления глобального статуса AI */
async function updateAIStatus() {
    aiState.status = 'checking';
    updateAIStatusUI();

    const checkResults = await Promise.allSettled([
        testApiKey(aiState.userKey),
        testApiKey(GEMINI_API_KEY)
    ]);

    aiState.userKeyValid = checkResults[0].status === 'fulfilled';
    aiState.builtinKeyValid = checkResults[1].status === 'fulfilled';
    
    const { key, source } = determineActiveKey();

    if (!key) {
        aiState.status = 'unavailable';
    } else {
        const keyIsValid = source === 'user' ? aiState.userKeyValid : aiState.builtinKeyValid;
        aiState.status = keyIsValid ? `ready-${source}` : 'unavailable';
    }
    
    updateAIStatusUI();
    return aiState.status;
}

async function runDiagnostics() {
    clearDiagnostics();
    const buttons = [aiDiagTestBtn, aiDiagClearKeyBtn, aiDiagSaveBtn];
    buttons.forEach(btn => btn.disabled = true);

    const mode = document.querySelector('input[name="ai-diag-api-mode"]:checked').value;
    logToDiagnostics(`--- Начало теста (режим: ${mode}) ---`);

    try {
        // Test user key
        logToDiagnostics('1. Проверка вашего ключа...');
        if (!aiState.userKey) {
            logToDiagnostics('   - Ваш ключ не введен.');
            aiState.userKeyValid = false;
        } else {
            try {
                await testApiKey(aiState.userKey);
                logToDiagnostics('   - ✅ Ваш ключ действителен.');
                aiState.userKeyValid = true;
            } catch (e) {
                logToDiagnostics('   - ❌ Ваш ключ недействителен.');
                aiState.lastError = e;
                aiState.userKeyValid = false;
            }
        }

        // Test builtin key
        logToDiagnostics('2. Проверка встроенного ключа...');
        const builtinKeyExists = GEMINI_API_KEY && GEMINI_API_KEY !== "__GEMINI_API_KEY__";
        if (!builtinKeyExists) {
            logToDiagnostics('   - Встроенный ключ не настроен в приложении.');
            aiState.builtinKeyValid = false;
        } else {
            try {
                await testApiKey(GEMINI_API_KEY);
                logToDiagnostics('   - ✅ Встроенный ключ действителен.');
                aiState.builtinKeyValid = true;
            } catch (e) {
                logToDiagnostics('   - ❌ Встроенный ключ не работает.');
                if (!aiState.lastError) aiState.lastError = e; // Показываем ошибку, если другой не было
                aiState.builtinKeyValid = false;
            }
        }
        
        // Final status determination
        logToDiagnostics('3. Определение итогового статуса...');
        const finalStatus = await updateAIStatus();
        logToDiagnostics(`--- Тест завершен. Статус: ${finalStatus.toUpperCase()} ---`);
        
        if (finalStatus === 'unavailable' && aiState.lastError) {
            showDiagnosticsError(aiState.lastError);
        }

    } catch (e) {
        logToDiagnostics(`Критическая ошибка во время диагностики: ${e.message}`);
        showDiagnosticsError(e);
    } finally {
        buttons.forEach(btn => btn.disabled = false);
    }
}


// --- Интеграция с Gemini AI ---

async function generateWithAI(apiKey) {
    let GoogleGenAI, Type;
    try {
        ({ GoogleGenAI, Type } = await import("https://esm.run/@google/generative-ai"));
    } catch (e) {
        throw new Error("Не удалось загрузить модуль AI. Проверьте сеть.");
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
        aiState.lastError = e;
        throw e;
    }
}


// --- Установка Обработчиков Событий ---

function setupEventListeners() {
    navButtons.forEach(btn => {
        btn.addEventListener('click', () => showScreen(btn.dataset.screen));
    });
    
    // -- Основные настройки --
    settingsBtn?.addEventListener('click', () => showModal(settingsModal));
    closeSettingsBtn?.addEventListener('click', () => hideModal(settingsModal));
    settingsModal?.addEventListener('click', (e) => {
        if (e.target === settingsModal) hideModal(settingsModal);
    });

    document.getElementById('days-increment')?.addEventListener('click', () => { state.settings.days < 14 && state.settings.days++; updateSettingsUI(); saveState(); });
    document.getElementById('days-decrement')?.addEventListener('click', () => { state.settings.days > 1 && state.settings.days--; updateSettingsUI(); saveState(); });
    document.getElementById('people-increment')?.addEventListener('click', () => { state.settings.people < 10 && state.settings.people++; updateSettingsUI(); saveState(); });
    document.getElementById('people-decrement')?.addEventListener('click', () => { state.settings.people > 1 && state.settings.people--; updateSettingsUI(); saveState(); });

    // -- Диагностика AI --
    headerAiStatusBtn?.addEventListener('click', () => {
        showModal(aiDiagnosticsModal);
        runDiagnostics();
    });
    closeAiDiagBtn?.addEventListener('click', () => hideModal(aiDiagnosticsModal));
    aiDiagnosticsModal?.addEventListener('click', (e) => {
        if (e.target === aiDiagnosticsModal) hideModal(aiDiagnosticsModal);
    });
    aiDiagTestBtn?.addEventListener('click', runDiagnostics);
    aiDiagSaveBtn?.addEventListener('click', () => {
        saveAiConfig();
        hideModal(aiDiagnosticsModal);
        updateAIStatus();
    });
    aiDiagClearKeyBtn?.addEventListener('click', () => {
        aiDiagApiKeyInput.value = '';
        saveAiConfig();
        runDiagnostics();
    });
    aiDiagToggleVisibilityBtn?.addEventListener('click', () => {
        const openIcon = aiDiagToggleVisibilityBtn.querySelector('.eye-open');
        const closedIcon = aiDiagToggleVisibilityBtn.querySelector('.eye-closed');
        if (aiDiagApiKeyInput.type === 'password') {
            aiDiagApiKeyInput.type = 'text';
            openIcon.style.display = 'none';
            closedIcon.style.display = 'block';
        } else {
            aiDiagApiKeyInput.type = 'password';
            openIcon.style.display = 'block';
            closedIcon.style.display = 'none';
        }
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
                const importedData = JSON.parse(event.target.result);
                Object.assign(state.settings, importedData.settings);
                state.menu = importedData.menu || null;
                state.recipes = importedData.recipes || {};
                state.shoppingList = importedData.shoppingList || [];
                
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
            const exportState = {
                settings: state.settings,
                menu: state.menu,
                recipes: state.recipes,
                shoppingList: state.shoppingList
            };
            const dataStr = JSON.stringify(exportState, null, 2);
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
    loadAiConfig();
    updateSettingsUI();
    
    renderMenu();
    renderAllRecipes();
    renderShoppingList();
    showScreen(state.lastActiveTab || 'menu-screen');
    setupEventListeners();

    updateAIStatus(); // Первичная проверка при запуске
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
