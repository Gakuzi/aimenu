import { cacheDom } from './dom.js';
import { initializeEventListeners } from './handlers.js';
import { registerServiceWorker } from './pwa.js';
import { showScreen, showNotification } from './ui.js';
import { loadState } from './state.js';
import { dom } from './dom.js';

async function init() {
    // Прячем все экраны, чтобы избежать мелькания контента
    // Сделаем это через CSS для надежности
    cacheDom();
    initializeEventListeners();
    registerServiceWorker();
    
    // Сразу пытаемся инициализировать основное состояние приложения
    try {
        await continueInit();
    } catch (error) {
        console.error("Critical initialization failed:", error);
        // В случае критической ошибки показываем экран приветствия
        showScreen('welcome-screen');
        showNotification("Произошла критическая ошибка при загрузке.", "error");
    } finally {
        // Показываем контент после того, как все готово
        document.body.classList.remove('is-loading');
    }
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