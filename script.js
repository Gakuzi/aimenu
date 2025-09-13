// IMPORTANT: This import is crucial for browser environments.
import { GoogleGenAI, Type } from "https://esm.run/@google/generative-ai";

const state = {
    settings: {
        days: 7,
        people: 3,
        useAI: false,
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
    modal.classList.add('visible');
}

function hideModal(modal) {
    modal.classList.remove('visible');
}

function showPreloader() {
    preloader.classList.add('visible');
}

function hidePreloader() {
    preloader.classList.remove('visible');
}

function showToast(message, duration = 3000) {
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, duration);
}

// --- Rendering ---

function renderMenu() {
    const content = document.getElementById('menu-content');
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
    document.getElementById('recipe-detail-title').textContent = recipe.name;
    
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
    localStorage.setItem('familyMenuState', JSON.stringify(state));
}

function loadState() {
    const savedState = localStorage.getItem('familyMenuState');
    if (savedState) {
        Object.assign(state, JSON.parse(savedState));
    }
}

function updateSettingsUI() {
    document.getElementById('days-value').textContent = state.settings.days;
    document.getElementById('people-value').textContent = state.settings.people;
    document.getElementById('use-ai-toggle').checked = state.settings.useAI;
    document.getElementById('api-key-input').value = state.settings.apiKey;
    document.getElementById('ai-settings').classList.toggle('hidden', !state.settings.useAI);
}

async function generatePlan() {
    showPreloader();
    let plan;
    try {
        if (state.settings.useAI && state.settings.apiKey) {
            plan = await generateWithAI();
        } else {
            if (state.settings.useAI && !state.settings.apiKey) {
                 showToast('API ключ Gemini не указан.');
            }
            plan = generateWithLocalDB();
        }

        state.menu = plan.menu;
        state.recipes = {};
        plan.recipes.forEach(r => state.recipes[r.id] = r);
        state.shoppingList = plan.shoppingList.map(item => ({...item, checked: false }));
        
        saveState();
        renderMenu();
        renderAllRecipes();
        renderShoppingList();
        showScreen(state.lastActiveTab);

    } catch (error) {
        console.error("Error generating plan:", error);
        showToast("Ошибка генерации. Попробуйте снова.");
        // Fallback to local DB if AI fails
        if(state.settings.useAI) {
            plan = generateWithLocalDB();
            state.menu = plan.menu;
            state.recipes = {};
            plan.recipes.forEach(r => state.recipes[r.id] = r);
            state.shoppingList = plan.shoppingList.map(item => ({...item, checked: false }));
            saveState();
            renderMenu();
            renderAllRecipes();
            renderShoppingList();
        }
    } finally {
        hidePreloader();
    }
}

// --- Gemini AI Integration ---
async function generateWithAI() {
    if (!state.settings.apiKey) {
        throw new Error("API key is missing.");
    }
    const ai = new GoogleGenAI({ apiKey: state.settings.apiKey });

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
            menu: {
                type: Type.ARRAY,
                items: {
                    type: Type.OBJECT,
                    properties: {
                        day: { type: Type.STRING },
                        meals: {
                            type: Type.ARRAY,
                            items: {
                                type: Type.OBJECT,
                                properties: {
                                    type: { type: Type.STRING },
                                    name: { type: Type.STRING },
                                    recipeId: { type: Type.STRING }
                                },
                                required: ["type", "name", "recipeId"]
                            }
                        }
                    },
                    required: ["day", "meals"]
                }
            },
            recipes: {
                type: Type.ARRAY,
                items: {
                    type: Type.OBJECT,
                    properties: {
                        id: { type: Type.STRING },
                        name: { type: Type.STRING },
                        ingredients: { type: Type.ARRAY, items: { type: Type.STRING } },
                        instructions: { type: Type.ARRAY, items: { type: Type.STRING } }
                    },
                    required: ["id", "name", "ingredients", "instructions"]
                }
            },
            shoppingList: {
                type: Type.ARRAY,
                items: {
                    type: Type.OBJECT,
                    properties: {
                        name: { type: Type.STRING },
                        amount: { type: Type.STRING }
                    },
                    required: ["name", "amount"]
                }
            }
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
    } catch (error) {
        console.error("Gemini AI error:", error);
        showToast("Ошибка Gemini AI. Используется локальная база.");
        return generateWithLocalDB();
    }
}


// --- Local Fallback ---
function generateWithLocalDB() {
    // This is a simplified local fallback.
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
    
    // Simple aggregation for shopping list
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

    settingsBtn.addEventListener('click', () => showModal(settingsModal));
    closeSettingsBtn.addEventListener('click', () => hideModal(settingsModal));
    settingsModal.addEventListener('click', (e) => {
        if (e.target === settingsModal) hideModal(settingsModal);
    });

    document.getElementById('days-increment').addEventListener('click', () => {
        if (state.settings.days < 14) state.settings.days++;
        updateSettingsUI(); saveState();
    });
    document.getElementById('days-decrement').addEventListener('click', () => {
        if (state.settings.days > 1) state.settings.days--;
        updateSettingsUI(); saveState();
    });
    document.getElementById('people-increment').addEventListener('click', () => {
        if (state.settings.people < 10) state.settings.people++;
        updateSettingsUI(); saveState();
    });
    document.getElementById('people-decrement').addEventListener('click', () => {
        if (state.settings.people > 1) state.settings.people--;
        updateSettingsUI(); saveState();
    });

    const useAiToggle = document.getElementById('use-ai-toggle');
    useAiToggle.addEventListener('change', () => {
        state.settings.useAI = useAiToggle.checked;
        updateSettingsUI(); saveState();
    });

    const apiKeyInput = document.getElementById('api-key-input');
    apiKeyInput.addEventListener('change', () => {
        state.settings.apiKey = apiKeyInput.value;
        saveState();
    });
    
    document.getElementById('generate-btn').addEventListener('click', generatePlan);

    document.getElementById('back-to-menu-btn').addEventListener('click', () => showScreen(state.lastActiveTab));

    document.getElementById('shopping-list').addEventListener('click', (e) => {
        const itemEl = e.target.closest('.shopping-item');
        if (itemEl) {
            const index = parseInt(itemEl.dataset.index, 10);
            state.shoppingList[index].checked = !state.shoppingList[index].checked;
            saveState();
            renderShoppingList();
        }
    });

    // Import / Export
    document.getElementById('export-btn').addEventListener('click', () => {
        const dataStr = JSON.stringify(state, null, 2);
        const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
        const exportFileDefaultName = 'family_menu_plan.json';
        let linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', exportFileDefaultName);
        linkElement.click();
    });

    const importFileInput = document.getElementById('import-file-input');
    document.getElementById('import-btn').addEventListener('click', () => importFileInput.click());
    importFileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = function(event) {
            try {
                const importedState = JSON.parse(event.target.result);
                Object.assign(state, importedState);
                saveState();
                updateSettingsUI();
                renderMenu();
                renderAllRecipes();
                renderShoppingList();
                showToast("План успешно импортирован!");
                hideModal(settingsModal);
            } catch (err) {
                showToast("Ошибка импорта: неверный формат файла.");
            }
        };
        reader.readAsText(file);
        e.target.value = ''; // Reset input
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

document.addEventListener('DOMContentLoaded', init);
