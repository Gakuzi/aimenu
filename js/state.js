import { syncDataDown } from './api.js';
import { setSyncStatus } from './ui.js';

export let state = {
    settings: {
        geminiApiKey: null,
        jsonBin: {
            enabled: false,
            apiKey: null,
            binId: null,
        },
        family: [],
        preferences: "Без рыбы, без грибов",
        menuDuration: 7,
        totalBudget: 10000,
        cuisine: "Любая",
        difficulty: "Любая",
    },
    menu: [],
    recipes: {},
    shoppingList: [],
    cookedMeals: {},
    timestamp: null,
};

// Отдельные состояния для сложных компонентов UI
export const wizardState = {
    currentStep: 1,
    totalSteps: 5,
};
export const recipeState = {
    id: null,
    step: 0,
    timer: {
        interval: null,
        timeLeft: 0,
        initialTime: 0,
        isRunning: false,
    },
};
export const qrScannerState = {
    stream: null,
    animationFrameId: null,
};

export function saveStateToLocal() {
    try {
        localStorage.setItem('familyMenuState', JSON.stringify(state));
    } catch (e) {
        console.error("Failed to save state to local storage:", e);
    }
}

export function resetState() {
    localStorage.clear();
    window.location.reload();
}

export async function loadState() {
    const localState = localStorage.getItem('familyMenuState');
    if (localState) {
        try {
            state = JSON.parse(localState);
            if (!state.settings.jsonBin) {
                state.settings.jsonBin = { enabled: false, apiKey: null, binId: null };
            }
        } catch (e) { 
            console.error("Failed to parse local state, resetting.", e);
            resetState();
        }
    }
    
    if (state.settings.jsonBin.enabled) {
        await syncDataDown();
    } else {
        setSyncStatus('idle');
    }
    
    // Миграция данных и установка значений по умолчанию для обратной совместимости
    state.settings.family = state.settings.family?.map(p => ({
        name: p.name || 'Член семьи',
        gender: p.gender || 'male',
        age: p.age || 30,
        activity: p.activity || 'средний',
        contact: p.contact || ''
    })) || [];

    if (!state.settings.menuDuration) state.settings.menuDuration = 7;
    if (!state.cookedMeals) state.cookedMeals = {};
    if (!state.settings.cuisine) state.settings.cuisine = "Любая";
    if (!state.settings.difficulty) state.settings.difficulty = "Любая";

     if (state.shoppingList) {
         state.shoppingList.forEach(cat => {
            (cat.items || []).forEach(item => {
                if (!item.id) item.id = `item-${Date.now()}-${Math.random()}`;
                if (item.purchases === undefined) item.purchases = item.completed ? [{ qty: item.shoppingSuggestion?.qty || 1, price: item.price }] : [];
            });
         });
     } else {
         state.shoppingList = [];
     }
     
     // Возвращаем флаг, настроено ли приложение
     return state.settings.geminiApiKey && (state.menu.length > 0 || state.settings.jsonBin.enabled);
}

// Эта функция позволяет обновлять состояние из других модулей, не создавая циклических зависимостей
export function setState(newState) {
    state = newState;
}
