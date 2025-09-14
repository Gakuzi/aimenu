// Комментарий: Глобальное состояние приложения через Context API. Содержит family (члены семьи), menu (сгенерированное меню), shoppingList (агрегированный список), budget (расходы/лимит), preferences (аллергии/предпочтения). Использует useReducer для управления сложным состоянием, localStorage для persistence.

import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { FamilyMember, MenuItem, ShoppingListItem, Budget } from '../types';

// Типы состояния
interface AppState {
  family: FamilyMember[];
  menu: MenuItem[];
  shoppingList: ShoppingListItem[];
  budget: Budget;
  preferences: {
    allergies: string[];
    preferences: string[];
  };
  // ... другие поля состояния
}

// Типы действий
type AppAction =
  | { type: 'SET_FAMILY'; payload: FamilyMember[] }
  | { type: 'SET_MENU'; payload: MenuItem[] }
  | { type: 'SET_SHOPPING_LIST'; payload: ShoppingListItem[] }
  | { type: 'SET_BUDGET'; payload: Budget }
  | { type: 'UPDATE_PREFERENCES'; payload: { allergies: string[]; preferences: string[] } }
  // ... другие действия

// Начальное состояние
const initialState: AppState = {
  family: [],
  menu: [],
  shoppingList: [],
  budget: { limit: 0, spent: 0, items: [] },
  preferences: { allergies: [], preferences: [] },
};

// Редьюсер
function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'SET_FAMILY':
      return { ...state, family: action.payload };
    case 'SET_MENU':
      return { ...state, menu: action.payload };
    case 'SET_SHOPPING_LIST':
      return { ...state, shoppingList: action.payload };
    case 'SET_BUDGET':
      return { ...state, budget: action.payload };
    case 'UPDATE_PREFERENCES':
      return { ...state, preferences: action.payload };
    // ... другие кейсы
    default:
      return state;
  }
}

// Создание контекста
interface AppContextType extends AppState {
  dispatch: React.Dispatch<AppAction>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

// Провайдер контекста
export const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Сохранение состояния в localStorage
  useEffect(() => {
    const savedState = localStorage.getItem('appState');
    if (savedState) {
      try {
        const parsedState = JSON.parse(savedState);
        // Диспатчим действия для восстановления состояния
        if (parsedState.family) dispatch({ type: 'SET_FAMILY', payload: parsedState.family });
        if (parsedState.menu) dispatch({ type: 'SET_MENU', payload: parsedState.menu });
        if (parsedState.shoppingList) dispatch({ type: 'SET_SHOPPING_LIST', payload: parsedState.shoppingList });
        if (parsedState.budget) dispatch({ type: 'SET_BUDGET', payload: parsedState.budget });
        if (parsedState.preferences) dispatch({ type: 'UPDATE_PREFERENCES', payload: parsedState.preferences });
      } catch (e) {
        console.error('Ошибка при восстановлении состояния из localStorage:', e);
      }
    }
  }, []);

  // Сохранение состояния в localStorage при изменении
  useEffect(() => {
    localStorage.setItem('appState', JSON.stringify(state));
  }, [state]);

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

// Хук для использования контекста
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext должен использоваться внутри AppContextProvider');
  }
  return context;
};