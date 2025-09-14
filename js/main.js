import { cacheDom } from './dom.js';
import { initializeEventListeners } from './handlers.js';
import { registerServiceWorker } from './pwa.js';
import { showScreen } from './ui.js';
import { loadState } from './state.js';

async function init() {
    cacheDom();
    initializeEventListeners();
    registerServiceWorker();
    showScreen('splash-screen');
    // Кнопка "Начать" теперь всегда активна, так как логика загрузки перенесена в continueInit
    document.getElementById('start-app-btn').disabled = false;
}

export async function continueInit() {
    const isConfigured = await loadState();
    
    if (isConfigured) {
        showScreen('main-screen');
    } else {
        showScreen('welcome-screen');
    }
}

document.addEventListener('DOMContentLoaded', init);
