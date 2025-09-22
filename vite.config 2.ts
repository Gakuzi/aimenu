// Комментарий: Конфигурация Vite для сборки с React, PWA и base-path для GH Pages. Добавлен vite-plugin-pwa для offline-поддержки, HMR и code splitting включены по умолчанию.

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'Семейное Меню',
        short_name: 'Aimenu',
        description: 'Приложение для генерации семейного меню с ИИ',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
  base: '/aimenu/',  // Для корректной работы на GH Pages (относительные пути)
  build: {
    outDir: 'dist',  // Директория для билда
    chunkSizeWarningLimit: 1000,  // Оптимизация для code splitting
  },
});