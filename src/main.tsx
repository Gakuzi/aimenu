// Комментарий: Точка входа в приложение. Инициализирует React, подключает контекст и рендерит корневой компонент.

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppContextProvider } from './context/AppContext';
import { initializeFCM, onFCMMessage } from './services/firebaseService';
import './styles/global.css';

// Инициализация Firebase Cloud Messaging
initializeFCM().then(token => {
  if (token) {
    console.log('FCM токен получен:', token);
  }
});

// Слушатель входящих сообщений
onFCMMessage((payload) => {
  console.log('Получено FCM сообщение:', payload);
  // Здесь можно показать уведомление пользователю
});

// Рендеринг приложения
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>,
);