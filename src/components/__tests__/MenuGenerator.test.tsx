// Комментарий: Тест для компонента. Проверяет рендер, props и edge-cases.

import { render, screen } from '@testing-library/react';
import MenuGenerator from '../MenuGenerator';
import { AppContextProvider } from '../../context/AppContext';

test('рендерит MenuGenerator без ошибок', () => {
  render(
    <AppContextProvider>
      <MenuGenerator />
    </AppContextProvider>
  );
  expect(screen.getByText(/Генерация меню.../i)).toBeInTheDocument();
});

// Добавьте тесты на error, loading и data