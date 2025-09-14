# Семейное Меню

Это веб-приложение для генерации персонализированного меню на неделю с использованием ИИ (Google Gemini), синхронизацией через Firebase и поддержкой PWA для offline-работы. Разработано на React 18+, TypeScript, Vite.

## Установка и запуск

1. Клонируйте репозиторий: `git clone https://github.com/Gakuzi/aimenu.git`
2. Перейдите в директорию: `cd aimenu`
3. Установите зависимости: `npm install`
4. Настройте .env (или .env.local): Добавьте `VITE_GEMINI_API_KEY=ваш_ключ`, Firebase config (VITE_FIREBASE_API_KEY и т.д.).
5. Запустите в dev-режиме: `npm run dev` (откроется на http://localhost:5173/aimenu/)
6. Соберите билд: `npm run build` (результат в dist/)
7. Тестируйте: `npm test`

## Деплой на GitHub Pages

1. В GitHub репозитории перейдите в Settings > Pages.
2. Выберите source: Deploy from a branch, branch: gh-pages.
3. Или используйте auto-deploy через .github/workflows/deploy.yml — при push в main билд автоматически деплоится.
4. Приложение доступно на https://gakuzi.github.io/aimenu/

## Настройка Firebase

1. Создайте проект в https://console.firebase.google.com/.
2. Включите Realtime Database, Authentication (email/password), Cloud Messaging.
3. Добавьте web-app, скопируйте config в .env.
4. Правила DB: Позвольте read/write для аутентифицированных пользователей.

## Функции

- Генерация меню через Gemini с персонализацией (калории, аллергии).
- Список покупок с чекбоксами, экспортом PDF и расчетом цен.
- Бюджет с графиками и предупреждениями.
- Рецепты с модалками, таймерами и фото.
- Календарь для выбора недель.
- Realtime-синхронизация между устройствами (Firebase).
- Offline-поддержка (PWA + LocalStorage).

## Структура проекта

- `src/components/`: Компоненты (FamilyForm.tsx и т.д.).
- `src/hooks/`: Кастомные хуки (useLocalStorage.ts).
- `src/services/`: API-клиенты (geminiService.ts, firebaseService.ts).
- `src/utils/`: Хелперы (formatDate.ts).
- `src/types/`: Типы (MenuItem.ts).
- `src/context/`: Контекст (AppContext.tsx).
- `src/styles/`: Стили (global.css).
- `src/assets/`: Данные (prices.json).

Для вопросов: Обратитесь к разработчику или форкам.