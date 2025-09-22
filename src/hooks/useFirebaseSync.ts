// Комментарий: Хук для синхронизации данных с Firebase Realtime Database. Обеспечивает реалтайм-обновления и offline-first функциональность.

import { useEffect, useState } from 'react';
import { ref, onValue, set, push } from 'firebase/database';
import { db } from '../services/firebaseService';
import { useAppContext } from '../context/AppContext';

interface SyncState {
  isSyncing: boolean;
  lastSync: Date | null;
  error: string | null;
}

export const useFirebaseSync = () => {
  const { familyId, menu, shoppingList, dispatch } = useAppContext();
  const [syncState, setSyncState] = useState<SyncState>({
    isSyncing: false,
    lastSync: null,
    error: null
  });

  // Синхронизация меню
  useEffect(() => {
    if (!db || !familyId) return;

    const menuRef = ref(db, `families/${familyId}/menu`);
    
    const unsubscribe = onValue(menuRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        dispatch({ type: 'SET_MENU', payload: data });
        setSyncState(prev => ({
          ...prev,
          lastSync: new Date(),
          error: null
        }));
      }
    }, (error) => {
      console.error('Ошибка синхронизации меню:', error);
      setSyncState(prev => ({
        ...prev,
        error: 'Не удалось синхронизировать меню'
      }));
    });

    return () => unsubscribe();
  }, [familyId, dispatch]);

  // Синхронизация списка покупок
  useEffect(() => {
    if (!db || !familyId) return;

    const shoppingListRef = ref(db, `families/${familyId}/shoppingList`);
    
    const unsubscribe = onValue(shoppingListRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        dispatch({ type: 'SET_SHOPPING_LIST', payload: data });
        setSyncState(prev => ({
          ...prev,
          lastSync: new Date(),
          error: null
        }));
      }
    }, (error) => {
      console.error('Ошибка синхронизации списка покупок:', error);
      setSyncState(prev => ({
        ...prev,
        error: 'Не удалось синхронизировать список покупок'
      }));
    });

    return () => unsubscribe();
  }, [familyId, dispatch]);

  // Обновление меню в Firebase
  const updateMenuInFirebase = async (newMenu: any) => {
    if (!db || !familyId) return;

    try {
      setSyncState(prev => ({ ...prev, isSyncing: true }));
      const menuRef = ref(db, `families/${familyId}/menu`);
      await set(menuRef, newMenu);
      setSyncState(prev => ({
        ...prev,
        isSyncing: false,
        lastSync: new Date(),
        error: null
      }));
    } catch (error) {
      console.error('Ошибка обновления меню в Firebase:', error);
      setSyncState(prev => ({
        ...prev,
        isSyncing: false,
        error: 'Не удалось обновить меню'
      }));
    }
  };

  // Обновление списка покупок в Firebase
  const updateShoppingListInFirebase = async (newShoppingList: any) => {
    if (!db || !familyId) return;

    try {
      setSyncState(prev => ({ ...prev, isSyncing: true }));
      const shoppingListRef = ref(db, `families/${familyId}/shoppingList`);
      await set(shoppingListRef, newShoppingList);
      setSyncState(prev => ({
        ...prev,
        isSyncing: false,
        lastSync: new Date(),
        error: null
      }));
    } catch (error) {
      console.error('Ошибка обновления списка покупок в Firebase:', error);
      setSyncState(prev => ({
        ...prev,
        isSyncing: false,
        error: 'Не удалось обновить список покупок'
      }));
    }
  };

  // Отправка запроса в семью
  const sendFamilyRequest = async (request: any) => {
    if (!db || !familyId) return;

    try {
      const requestsRef = ref(db, `families/${familyId}/requests`);
      await push(requestsRef, {
        ...request,
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      console.error('Ошибка отправки запроса:', error);
      throw new Error('Не удалось отправить запрос');
    }
  };

  return {
    syncState,
    updateMenuInFirebase,
    updateShoppingListInFirebase,
    sendFamilyRequest
  };
};