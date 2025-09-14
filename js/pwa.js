import { showModal, showNotification } from './ui.js';

export function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js').then(registration => {
                console.log('SW registered: ', registration);
            }).catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
        });
    }
}

export async function requestNotificationPermission() {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    if (isIOS && !navigator.standalone) {
        showModal(
            "Уведомления на iPhone/iPad",
            "<p>Чтобы включить push-уведомления на вашем устройстве, сначала необходимо добавить приложение на экран 'Домой'.</p><p>Для этого нажмите кнопку 'Поделиться' в браузере Safari, а затем выберите 'На экран 'Домой''.</p>",
            [{ text: "Понятно", class: "primary", action: () => {} }]
        );
        return;
    }

    if (!("Notification" in window)) {
        showNotification("Уведомления не поддерживаются на вашем устройстве.", "error");
        return;
    }
    
    if (Notification.permission === "granted") {
        showNotification("Уведомления уже включены. Отправляем тестовое.", "success");
        showSystemNotification("Тестовое уведомление", "Если вы видите это, все работает отлично!");
        return;
    }
    
    if (Notification.permission === "denied") {
        showNotification("Уведомления заблокированы. Измените настройки браузера.", "error");
        return;
    }

    const permission = await Notification.requestPermission();
    if (permission === "granted") {
        showNotification("Уведомления успешно включены!", "success");
        showSystemNotification("Проверка", "Теперь вы будете получать уведомления от приложения.");
    } else {
         showNotification("Вы не разрешили отправку уведомлений.", "warning");
    }
}

export function showSystemNotification(title, body) {
    if ("Notification" in window && Notification.permission === "granted") {
        navigator.serviceWorker.ready.then(reg => {
            reg.showNotification(title, { body });
        });
    }
}
