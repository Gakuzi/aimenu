import { ui } from './ui.js';
import { dom } from './dom.js';

let appState = {};

const defaultState = {
    settings: {
        apiKey: null,
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

export const currentRecipe = {
    id: null,
    step: 0,
};

const timerInstance = {
    interval: null,
    timeLeft: 0,
    initialTime: 0,
    isRunning: false,

    start() {
        if (this.isRunning || this.timeLeft <= 0) return;
        this.isRunning = true;
        this.interval = setInterval(() => {
            this.timeLeft--;
            ui.updateTimerDisplay(this.timeLeft);
            if (this.timeLeft <= 0) {
                this.stop(true); // finished
            }
        }, 1000);
    },
    pause() {
        this.isRunning = false;
        clearInterval(this.interval);
    },
    stop(finished = false) {
        this.pause();
        if (finished) {
            dom.timerDisplay.textContent = "Готово!";
            ui.showNotification("Таймер завершен!", "success");
            dom.notificationSound.play().catch(e => console.log("Audio play failed", e));
        }
    },
    reset(initialTime) {
        this.stop();
        this.initialTime = initialTime;
        this.timeLeft = this.initialTime;
        ui.updateTimerDisplay(this.timeLeft);
    }
};

export const timer = timerInstance;

export const state = {
    get: () => appState,
    set: (newState) => {
        appState = newState;
    },
    update: (updater) => {
        updater(appState);
    },
    save: saveState,
    load: loadState,
    reset,
    logToConsole
};

export function saveState() {
    try {
        localStorage.setItem('familyMenuState', JSON.stringify(appState));
    } catch (e) {
        console.error("Failed to save state:", e);
    }
}

export function loadState() {
    const savedState = localStorage.getItem('familyMenuState');
    if (savedState) {
        try {
            const loadedData = JSON.parse(savedState);
            // Deep merge to ensure new default properties are added
            appState = mergeDeep(JSON.parse(JSON.stringify(defaultState)), loadedData);
            
            // Data migration/cleanup for older versions
            if (!appState.settings.family) appState.settings.family = [];
            if (!appState.cookedMeals) appState.cookedMeals = {};
            (appState.shoppingList || []).forEach(cat => {
                (cat.items || []).forEach(item => {
                    if (item.purchases === undefined) {
                        item.purchases = item.completed ? [{ qty: item.shoppingSuggestion?.qty || 1, price: item.price }] : [];
                    }
                });
            });
        } catch (e) {
            console.error("Failed to load or parse state:", e);
            appState = JSON.parse(JSON.stringify(defaultState));
        }
    } else {
        appState = JSON.parse(JSON.stringify(defaultState));
    }
}

function reset() {
    localStorage.removeItem('familyMenuState');
    localStorage.removeItem('hasSeenSplash');
    window.location.reload();
}

function logToConsole(message) {
    if (!dom.logOutput) return;
    const p = document.createElement('p');
    p.textContent = `[${new Date().toLocaleTimeString()}] ${message}`;
    dom.logOutput.appendChild(p);
    dom.logOutput.scrollTop = dom.logOutput.scrollHeight;
}


// Helper for deep merging states to avoid losing new default properties on load
function isObject(item) {
  return (item && typeof item === 'object' && !Array.isArray(item));
}

function mergeDeep(target, ...sources) {
  if (!sources.length) return target;
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }

  return mergeDeep(target, ...sources);
}
