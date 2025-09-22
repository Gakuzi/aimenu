// Комментарий: Глобальное состояние приложения через Context API. Содержит family (члены семьи), menu (сгенерированное меню), shoppingList (агрегированный список), budget (расходы/лимит), preferences (аллергии/предпочтения). Использует useReducer для управления сложным состоянием, localStorage для persistence.

import React, { createContext, useContext, useReducer, useEffect, useState } from 'react';
import { FamilyMember, MenuItem, ShoppingListItem, Budget } from '../types';
import { syncFamilyData, db } from '../services/firebaseService';

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
  familyId: string | null;
}

// Типы действий
type AppAction =
  | { type: 'SET_FAMILY'; payload: FamilyMember[] }
  | { type: 'SET_MENU'; payload: MenuItem[] }
  | { type: 'SET_SHOPPING_LIST'; payload: ShoppingListItem[] }
  | { type: 'SET_BUDGET'; payload: Budget }
  | { type: 'UPDATE_PREFERENCES'; payload: { allergies: string[]; preferences: string[] } }
  | { type: 'SET_FAMILY_ID'; payload: string }
  | { type: 'RESET_STATE' }

// Начальное состояние
const initialState: AppState = {
  family: [],
  menu: [],
  shoppingList: [],
  budget: { limit: 0, spent: 0, items: [] },
  preferences: { allergies: [], preferences: [] },
  familyId: null,
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
    case 'SET_FAMILY_ID':
      return { ...state, familyId: action.payload };
    case 'RESET_STATE':
      return initialState;
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
  const [unsubscribe, setUnsubscribe] = useState<(() => void) | null>(null);

  // Загрузка состояния из localStorage при инициализации
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
        if (parsedState.familyId) dispatch({ type: 'SET_FAMILY_ID', payload: parsedState.familyId });
      } catch (e) {
        console.error('Ошибка при восстановлении состояния из localStorage:', e);
      }
    }
    
    // Проверяем, есть ли familyId в localStorage
    const savedFamilyId = localStorage.getItem('familyId');
    if (savedFamilyId) {
      dispatch({ type: 'SET_FAMILY_ID', payload: savedFamilyId });
    }
  }, []);

  // Сохранение состояния в localStorage при изменении
  useEffect(() => {
    localStorage.setItem('appState', JSON.stringify(state));
  }, [state]);

  // Синхронизация с Firebase
  useEffect(() => {
    // Отписываемся от предыдущей подписки, если она была
    if (unsubscribe) {
      unsubscribe();
      setUnsubscribe(null);
    }
    
    // Если есть familyId и подключение к Firebase, устанавливаем синхронизацию
    if (state.familyId && db) {
      const unsubscribeFn = syncFamilyData(state.familyId, (data) => {
        // Обновляем локальное состояние данными из Firebase
        if (data.menu) dispatch({ type: 'SET_MENU', payload: data.menu });
        if (data.shoppingList) dispatch({ type: 'SET_SHOPPING_LIST', payload: data.shoppingList });
        if (data.family) dispatch({ type: 'SET_FAMILY', payload: data.family });
      });
      
      if (unsubscribeFn) {
        setUnsubscribe(() => unsubscribeFn);
      }
    }
    
    // Очистка при размонтировании
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [state.familyId]);

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