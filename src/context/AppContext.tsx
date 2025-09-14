// Комментарий: Глобальное состояние с Context API. Хранит данные о семье, меню, бюджете и т.д. Использует useReducer для сложной логики, useLocalStorage для persistent хранения. Синхронизирует с Firebase через useEffect.

import React, { createContext, useReducer, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { AppState, MenuItem } from '../types';
import { firebaseSync } from '../services/firebaseService';  // Для синхронизации

type Action = { type: 'UPDATE_FAMILY', payload: any } | { type: 'SET_MENU', payload: MenuItem[] };  // Примеры actions

const initialState: AppState = {
  family: [],
  menu: [],
  budget: 0,
  shoppingList: [],
  // ... другие поля
};

function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'UPDATE_FAMILY':
      return { ...state, family: action.payload };
    case 'SET_MENU':
      return { ...state, menu: action.payload };
    default:
      return state;
  }
}

export const AppContext = createContext<{ state: AppState; dispatch: React.Dispatch<Action> } | undefined>(undefined);

export const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [storedState, setStoredState] = useLocalStorage<AppState>('appState', initialState);
  const [state, dispatch] = useReducer(reducer, storedState);

  useEffect(() => {
    setStoredState(state);  // Auto-save в LocalStorage
  }, [state, setStoredState]);

  useEffect(() => {
    // Синхронизация с Firebase при монтировании
    firebaseSync(state, dispatch);
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};