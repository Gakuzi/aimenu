// Комментарий: Корневой компонент. Оборачивает всё в AppContextProvider для глобального состояния, включает маршрутизацию если нужно (пока без router, но можно добавить), рендерит основные фича-компоненты.

import React from 'react';
import { AppContextProvider } from './context/AppContext';
import FamilyForm from './components/FamilyForm';
import MenuGenerator from './components/MenuGenerator';
import ShoppingList from './components/ShoppingList';
import BudgetTracker from './components/BudgetTracker';
import CalendarView from './components/CalendarView';
import RecipeModal from './components/RecipeModal';
// ... другие компоненты

const App: React.FC = () => {
  return (
    <AppContextProvider>
      <div className="app-container">
        <h1>Семейное Меню</h1>
        <FamilyForm />
        <MenuGenerator />
        <ShoppingList />
        <BudgetTracker />
        <CalendarView />
        <RecipeModal dish="Тестовое блюдо" recipe="Тестовый рецепт" />
        {/* Добавьте другие компоненты по мере необходимости */}
      </div>
    </AppContextProvider>
  );
};

export default App;