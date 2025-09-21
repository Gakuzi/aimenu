<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Семейное Меню AI

Это простое веб-приложение для генерации семейного меню, рецептов и списков покупок с помощью Google Gemini AI, с хранением данных в Firebase.

## Развертывание на GitHub Pages

Этот проект настроен для автоматического развертывания на GitHub Pages при каждом обновлении ветки `main`.

Чтобы развертывание прошло успешно, вам необходимо добавить ключи конфигурации Firebase в секреты вашего репозитория на GitHub.

### Как добавить ключи Firebase в секреты GitHub

1.  **Перейдите в настройки репозитория**: На странице вашего репозитория на GitHub, нажмите на вкладку "Settings" (Настройки).
2.  **Найдите "Secrets and variables"**: В меню слева, найдите раздел "Secrets and variables" (Секреты и переменные) и кликните на "Actions".
3.  **Создайте новые секреты**: Нажмите на кнопку "New repository secret" для КАЖДОГО из следующих ключей. Имена должны быть в точности такими, как указано ниже. Значения возьмите из вашего `firebaseConfig`.

    *   `VITE_API_KEY`
    *   `VITE_AUTH_DOMAIN`
    *   `VITE_PROJECT_ID`
    *   `VITE_STORAGE_BUCKET`
    *   `VITE_MESSAGING_SENDER_ID`
    *   `VITE_APP_ID`
    *   `VITE_MEASUREMENT_ID`

После того как вы добавите все эти секреты, рабочий процесс GitHub Actions сможет использовать их для развертывания вашего приложения. При следующем обновлении ветки `main` ваше приложение будет автоматически опубликовано на GitHub Pages.

## Локальный запуск

Для локального запуска вам потребуется создать файл `.env.local` в корне проекта и поместить в него те же самые ключи, что и в секреты GitHub.

Пример содержимого файла `.env.local`:
```
VITE_API_KEY=AIzaSy...
VITE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_PROJECT_ID=your-project-id
VITE_STORAGE_BUCKET=your-project.appspot.com
VITE_MESSAGING_SENDER_ID=1234567890
VITE_APP_ID=1:1234567890:web:abcdef123456
VITE_MEASUREMENT_ID=G-ABCDEFGHIJ
```

После создания файла `.env.local`:
1. Установите зависимости: `npm install`
2. Запустите приложение: `npm run dev`
