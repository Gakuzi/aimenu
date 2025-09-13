// --- Глобальное Состояние и Константы ---
const APP_STATE_STORAGE_KEY = 'familyMenuState';
const alarmSound = new Audio('data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YU9vT18=');

const state = {
    settings: {
        days: 7,
        people: 3,
        preferences: 'Курица, без рыбы и грибов',
    },
    menu: null,
    recipes: {},
    shoppingList: [],
    timers: {},
    currentScreen: 'menu-screen',
    lastActiveTab: 'menu-screen',
};

// --- DOM Элементы ---
const elements = {
    screens: document.querySelectorAll('.screen'),
    navButtons: document.querySelectorAll('.nav-btn'),
    preloader: document.getElementById('preloader'),
    toast: document.getElementById('toast'),
    settingsModal: document.getElementById('settings-modal'),
    debugConsole: document.getElementById('debug-console'),
    debugLogOutput: document.getElementById('debug-log-output'),
    debugCommandInput: document.getElementById('debug-command-input'),
};

// --- Управление UI ---

function showScreen(screenId, isDetailView = false) {
    state.currentScreen = screenId;
    elements.screens.forEach(screen => {
        screen.classList.toggle('active', screen.id === screenId);
    });

    if (!isDetailView) {
        state.lastActiveTab = screenId;
        elements.navButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.screen === screenId);
        });
    }
}

function showModal(modal) { if(modal) modal.classList.add('visible'); }
function hideModal(modal) { if(modal) modal.classList.remove('visible'); }
function showPreloader() { elements.preloader.classList.add('visible'); }
function hidePreloader() { elements.preloader.classList.remove('visible'); }

function showToast(message, type = 'info', duration = 3000) {
    elements.toast.textContent = message;
    elements.toast.className = 'toast'; // Reset classes
    if (type === 'warning') {
        elements.toast.classList.add('warning');
    }
    elements.toast.classList.add('show');
    
    setTimeout(() => {
        elements.toast.classList.remove('show');
    }, duration);
}

// --- Консоль Отладки ---
let touchCount = 0;
let touchTimeout;

function handleTripleTouch() {
    touchCount++;
    clearTimeout(touchTimeout);
    if (touchCount === 3) {
        toggleDebugConsole();
        touchCount = 0;
    }
    touchTimeout = setTimeout(() => { touchCount = 0; }, 1000);
}

function toggleDebugConsole() {
    elements.debugConsole.classList.toggle('visible');
    if (elements.debugConsole.classList.contains('visible')) {
        logToDebug('CMD', 'Debug console opened. Type /help for commands.');
        elements.debugCommandInput.focus();
    }
}

function logToDebug(type, message) {
    const timestamp = new Date().toISOString().split('T')[1].replace('Z','');
    const logEntry = document.createElement('span');
    logEntry.className = `log-${type}`;
    logEntry.textContent = `[${type}] ${timestamp} - ${message}`;
    elements.debugLogOutput.appendChild(logEntry);
    elements.debugLogOutput.scrollTop = elements.debugLogOutput.scrollHeight;
}

function parseDebugCommand(command) {
    logToDebug('CMD', `> ${command}`);
    const [cmd, ...args] = command.trim().split(' ');

    switch (cmd) {
        case '/help':
            logToDebug('CMD', 'Commands: /reset, /export, /import <json>, /reload');
            break;
        case '/reset':
            localStorage.removeItem(APP_STATE_STORAGE_KEY);
            logToDebug('CMD', 'localStorage cleared. Reloading...');
            setTimeout(() => window.location.reload(), 500);
            break;
        case '/export':
            navigator.clipboard.writeText(JSON.stringify(state, null, 2));
            logToDebug('CMD', 'Current state copied to clipboard.');
            showToast('Состояние скопировано в буфер обмена');
            break;
        case '/reload':
            logToDebug('CMD', 'Reloading application state...');
            init();
            break;
        default:
            logToDebug('ERR', `Unknown command: ${cmd}`);
            break;
    }
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
            ${recipe.instructions.map((step, index) => {
                const timerMatch = step.match(/\{(\d+)\s*минут\}/);
                let timerHtml = '';
                if (timerMatch) {
                    const duration = parseInt(timerMatch[1], 10) * 60;
                    const timerId = `${recipe.id}-step-${index}`;
                    const isActive = state.timers[timerId] && state.timers[timerId].end > Date.now();
                    const remaining = isActive ? Math.ceil((state.timers[timerId].end - Date.now()) / 1000) : duration;
                    step = step.replace(timerMatch[0], '').trim();
                    timerHtml = `<button class="timer-btn ${isActive ? 'active' : ''}" data-timer-id="${timerId}" data-duration="${duration}">${formatTime(remaining)}</button>`;
                }
                return `<li>${step}${timerHtml}</li>`;
            }).join('')}
        </ol>
    `;
    content.scrollTop = 0;
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
                <span class="item-amount">${item.amount} (≈${item.cost}₽)</span>
            </div>
        </li>
    `).join('');
}


// --- Управление состоянием ---

function saveState() {
    try {
        localStorage.setItem(APP_STATE_STORAGE_KEY, JSON.stringify(state));
        logToDebug('STOR', `Data saved to localStorage (size: ${((JSON.stringify(state).length)/1024).toFixed(2)} KB)`);
    } catch (error) {
        logToDebug('ERR', `Failed to save state to localStorage: ${error.message}`);
        showToast("Ошибка сохранения", "warning");
    }
}

function loadState() {
    try {
        const savedStateJSON = localStorage.getItem(APP_STATE_STORAGE_KEY);
        if (!savedStateJSON) {
            logToDebug('STOR', 'No saved state found, using defaults.');
            return;
        };
        const savedState = JSON.parse(savedStateJSON);
        Object.assign(state, savedState);
        logToDebug('STOR', 'State loaded from localStorage.');
    } catch (e) {
        logToDebug('ERR', `Error loading state. Resetting. ${e.message}`);
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

// --- Таймеры ---

function formatTime(seconds) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

function startTimer(timerId, duration) {
    if (state.timers[timerId] && state.timers[timerId].interval) {
        clearInterval(state.timers[timerId].interval);
    }
    const endTime = Date.now() + duration * 1000;
    state.timers[timerId] = { end: endTime, duration };
    logToDebug('TMR', `Timer "${timerId}" started (${duration}s)`);
    
    const interval = setInterval(() => {
        const remaining = Math.ceil((endTime - Date.now()) / 1000);
        const timerBtn = document.querySelector(`[data-timer-id="${timerId}"]`);
        if (timerBtn) {
            timerBtn.textContent = formatTime(remaining);
            timerBtn.classList.add('active');
        }
        if (remaining <= 0) {
            clearInterval(interval);
            delete state.timers[timerId];
            if(timerBtn) {
                timerBtn.textContent = formatTime(duration);
                timerBtn.classList.remove('active');
            }
            alarmSound.play();
            showToast(`Таймер "${timerId}" завершен!`);
            logToDebug('TMR', `Timer "${timerId}" finished -> notification shown.`);
            saveState();
        }
    }, 1000);
    state.timers[timerId].interval = interval;
    saveState();
}

// --- Локальный Генератор Меню ---
const RECIPE_DB = {
    // DB content is omitted for brevity but would be here.
    // Example structure:
    "Куриная грудка с рисом": {
        ingredients: [{ name: "Куриная грудка", amount: 150, unit: "г" }, { name: "Рис", amount: 80, unit: "г" }, { name: "Специи", amount: 5, unit: "г" }],
        instructions: ["Отварите рис. {15 минут}", "Обжарьте куриную грудку со специями. {10 минут}", "Подавайте вместе."],
        type: ['обед', 'ужин']
    },
    "Овсяная каша": {
        ingredients: [{ name: "Овсяные хлопья", amount: 50, unit: "г" }, { name: "Молоко", amount: 150, unit: "мл" }, { name: "Ягоды", amount: 30, unit: "г" }],
        instructions: ["Залейте хлопья молоком.", "Варите на медленном огне. {5 минут}", "Добавьте ягоды."],
        type: ['завтрак']
    },
    "Гречневый суп": {
        ingredients: [{ name: "Гречка", amount: 60, unit: 'г'}, { name: "Картофель", amount: 100, unit: 'г' }, { name: "Морковь", amount: 50, unit: 'г' }, { name: "Куриный бульон", amount: 300, unit: 'мл' }],
        instructions: ["Вскипятите бульон.", "Добавьте нарезанный картофель и морковь.", "Через 10 минут добавьте гречку и варите до готовности. {20 минут}"],
        type: ['обед']
    }
    // ... more recipes
};

const PRICES = { "Куриная грудка": 350, "Рис": 80, "Специи": 150, "Овсяные хлопья": 70, "Молоко": 100, "Ягоды": 500, "Гречка": 90, "Картофель": 50, "Морковь": 40, "Куриный бульон": 120 }; // per kg/l

function generatePlan() {
    showPreloader();
    logToDebug('GEN', `Generating menu for ${state.settings.people} people, ${state.settings.days} days...`);
    
    // Simulate generation delay for UX
    setTimeout(() => {
        try {
            const mealTypes = ['Завтрак', 'Обед', 'Ужин'];
            const menu = [];
            const usedRecipes = new Set();
            
            for (let i = 1; i <= state.settings.days; i++) {
                const dayMeals = [];
                mealTypes.forEach(type => {
                    const availableRecipes = Object.keys(RECIPE_DB).filter(name => RECIPE_DB[name].type.includes(type.toLowerCase()) && !usedRecipes.has(name));
                    const recipeName = availableRecipes.length > 0 ? availableRecipes[Math.floor(Math.random() * availableRecipes.length)] : Object.keys(RECIPE_DB)[0];
                    usedRecipes.add(recipeName);
                    dayMeals.push({
                        type: type,
                        name: recipeName,
                        recipeId: `recipe-${recipeName.replace(/\s+/g, '-')}`
                    });
                });
                menu.push({ day: `День ${i}`, meals: dayMeals });
            }

            const recipes = {};
            const shoppingListAggregator = {};

            menu.forEach(day => {
                day.meals.forEach(meal => {
                    const recipeId = meal.recipeId;
                    if (!recipes[recipeId]) {
                        const recipeData = RECIPE_DB[meal.name];
                        recipes[recipeId] = {
                            id: recipeId,
                            name: meal.name,
                            ingredients: recipeData.ingredients.map(ing => `${ing.name} - ${ing.amount * state.settings.people}${ing.unit}`),
                            instructions: recipeData.instructions
                        };
                        logToDebug('REC', `Recipe "${meal.name}" generated.`);

                        recipeData.ingredients.forEach(ing => {
                            if (!shoppingListAggregator[ing.name]) {
                                shoppingListAggregator[ing.name] = { totalAmount: 0, unit: ing.unit, pricePerKg: PRICES[ing.name] || 150 };
                            }
                            shoppingListAggregator[ing.name].totalAmount += ing.amount * state.settings.people;
                        });
                    }
                });
            });
            
            const shoppingList = Object.entries(shoppingListAggregator).map(([name, data]) => {
                const cost = Math.ceil((data.totalAmount / 1000) * data.pricePerKg);
                return { name, amount: `${data.totalAmount}${data.unit}`, cost };
            });

            const totalCost = shoppingList.reduce((sum, item) => sum + item.cost, 0);
            logToDebug('SHOP', `Shopping list: ${shoppingList.length} items, total cost: ${totalCost} ₽`);

            processGeneratedPlan({ menu, recipes, shoppingList });
            showToast("Ваше меню готово!");
        } catch (error) {
            logToDebug('ERR', `Generation failed: ${error.message}`);
            showToast("Ошибка генерации меню", "warning");
        } finally {
            hidePreloader();
        }
    }, 1500); // Simulated delay
}

// --- Обработчики событий ---

function setupEventListeners() {
    elements.navButtons.forEach(btn => {
        btn.addEventListener('click', () => showScreen(btn.dataset.screen));
    });

    document.getElementById('settings-btn').addEventListener('click', () => showModal(elements.settingsModal));
    document.getElementById('close-settings-btn').addEventListener('click', () => hideModal(elements.settingsModal));
    elements.settingsModal.addEventListener('click', (e) => {
        if (e.target === elements.settingsModal) hideModal(elements.settingsModal);
    });
    
    // Настройки
    document.getElementById('days-increment').addEventListener('click', () => { state.settings.days < 7 && state.settings.days++; updateSettingsUI(); });
    document.getElementById('days-decrement').addEventListener('click', () => { state.settings.days > 1 && state.settings.days--; updateSettingsUI(); });
    document.getElementById('people-increment').addEventListener('click', () => { state.settings.people < 6 && state.settings.people++; updateSettingsUI(); });
    document.getElementById('people-decrement').addEventListener('click', () => { state.settings.people > 1 && state.settings.people--; updateSettingsUI(); });
    document.getElementById('preferences-input').addEventListener('input', (e) => { state.settings.preferences = e.target.value; });

    // Кнопки генерации
    document.getElementById('generate-btn').addEventListener('click', generatePlan);
    document.getElementById('generate-from-settings-btn').addEventListener('click', () => {
        saveState();
        hideModal(elements.settingsModal);
        setTimeout(generatePlan, 300);
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
    
    // Таймеры в рецептах
    document.getElementById('recipe-detail-content').addEventListener('click', e => {
        const timerBtn = e.target.closest('.timer-btn');
        if (timerBtn) {
            startTimer(timerBtn.dataset.timerId, parseInt(timerBtn.dataset.duration, 10));
        }
    });

    // Печать
    document.getElementById('print-btn').addEventListener('click', handlePrint);

    // Консоль отладки
    document.body.addEventListener('pointerdown', handleTripleTouch);
    elements.debugCommandInput.addEventListener('keydown', e => {
        if (e.key === 'Enter' && e.target.value) {
            parseDebugCommand(e.target.value);
            e.target.value = '';
        }
    });
}

function handlePrint() {
    if (state.shoppingList.length === 0) {
        showToast("Список покупок пуст", "warning");
        return;
    }
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <html>
            <head>
                <title>Список покупок</title>
                <style>
                    body { font-family: 'Nunito', sans-serif; padding: 20px; }
                    h1 { color: #8B5E3C; border-bottom: 2px solid #F0EDE7; padding-bottom: 10px; }
                    ul { list-style: none; padding: 0; }
                    li { display: flex; align-items: center; padding: 10px 0; border-bottom: 1px solid #F0EDE7; }
                    .checkbox-print { width: 20px; height: 20px; border: 2px solid #D4A373; border-radius: 5px; margin-right: 15px; }
                    .item-details-print { flex-grow: 1; }
                    .item-name-print { font-size: 14pt; font-weight: 600; }
                    .item-amount-print { font-size: 11pt; color: #7D7D7D; }
                    footer { text-align: center; margin-top: 30px; font-size: 10pt; color: #7D7D7D; }
                </style>
                <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
            </head>
            <body>
                <h1>Список покупок на ${state.settings.days} дней</h1>
                <ul>
                    ${state.shoppingList.map(item => `
                        <li>
                           <div class="checkbox-print"></div>
                           <div class="item-details-print">
                                <div class="item-name-print">${item.name}</div>
                                <div class="item-amount-print">${item.amount}</div>
                           </div>
                        </li>
                    `).join('')}
                </ul>
                <footer>Семейное меню на неделю • Создано с любовью</footer>
            </body>
        </html>
    `);
    printWindow.document.close();
    setTimeout(() => {
        printWindow.print();
        printWindow.close();
    }, 500);
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
    logToDebug('DBG', 'Application initialized.');
}

document.addEventListener('DOMContentLoaded', init);