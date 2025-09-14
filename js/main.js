import { cacheDom } from './dom.js';
import { initializeEventListeners } from './handlers.js';
import { registerServiceWorker } from './pwa.js';
import { showScreen, startFeatureShowcaseAnimation } from './ui.js';
import { loadState } from './state.js';
import { dom } from './dom.js';

async function init() {
    cacheDom();
    initializeEventListeners();
    registerServiceWorker();
    showScreen('splash-screen');
    startFeatureShowcaseAnimation();

    // Кнопка "Начать" активируется после инициализации
    dom.startAppBtn.disabled = false;
    dom.startAppBtn.textContent = 'Начать';
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