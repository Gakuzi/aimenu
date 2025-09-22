// Комментарий: Хук для работы с localStorage с автоматическим сохранением и восстановлением данных. Обеспечивает persistence данных между сессиями.

import { useState, useEffect } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  // Получение значения из localStorage или использование initialValue
  const readValue = (): T => {
    if (typeof window === 'undefined') {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`Ошибка при чтении localStorage ключа "${key}":`, error);
      return initialValue;
    }
  };

  const [storedValue, setStoredValue] = useState<T>(readValue);

  // Обновление значения в localStorage
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      // Разрешаем передачу функции для обновления состояния
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.warn(`Ошибка при записи в localStorage ключа "${key}":`, error);
    }
  };

  // Синхронизация с localStorage при изменении ключа
  useEffect(() => {
    setStoredValue(readValue());
  }, [key]);

  // Слушатель событий storage для синхронизации между вкладками
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === key && e.newValue) {
        try {
          setStoredValue(JSON.parse(e.newValue));
        } catch (error) {
          console.warn(`Ошибка при парсинге значения из storage события для ключа "${key}":`, error);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [key]);

  return [storedValue, setValue] as const;
}