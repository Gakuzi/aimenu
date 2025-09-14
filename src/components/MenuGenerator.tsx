// Комментарий: Компонент для генерации меню с помощью Google Gemini API. Содержит кнопку для запуска генерации, индикатор прогресса и отображение сгенерированного меню. Использует react-query для управления состоянием загрузки и кэширования.

import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useAppContext } from '../context/AppContext';
import { MenuItem } from '../types';
import { geminiService } from '../services/geminiService';

const MenuGenerator: React.FC = () => {
  const { family, dispatch } = useAppContext();
  const [days, setDays] = useState<number>(7);
  const [isGenerating, setIsGenerating] = useState(false);

  // Функция для генерации меню
  const generateMenu = async () => {
    setIsGenerating(true);
    try {
      // Здесь будет логика генерации меню через Gemini API
      const menu = await geminiService.generateMenu(family, days);
      
      // Сохраняем меню в состоянии приложения
      dispatch({ type: 'SET_MENU', payload: menu });
      
      return menu;
    } catch (error) {
      console.error('Ошибка при генерации меню:', error);
      throw error;
    } finally {
      setIsGenerating(false);
    }
  };

  // Используем react-query для управления состоянием загрузки
  const { data: menu, isLoading, error, refetch } = useQuery<MenuItem[], Error>({
    queryKey: ['menu', family, days],
    queryFn: generateMenu,
    enabled: false, // Не запускать автоматически
  });

  const handleGenerate = () => {
    refetch();
  };

  return (
    <div className="menu-generator">
      <h2>Генерация меню</h2>
      
      <div className="menu-controls">
        <div>
          <label htmlFor="days">Количество дней:</label>
          <input
            id="days"
            type="number"
            min="1"
            max="14"
            value={days}
            onChange={(e) => setDays(Number(e.target.value))}
          />
        </div>
        
        <button 
          onClick={handleGenerate} 
          disabled={isLoading || isGenerating || family.length === 0}
        >
          {isLoading || isGenerating ? 'Генерируем...' : 'Сгенерировать меню'}
        </button>
      </div>

      {family.length === 0 && (
        <p className="warning">Пожалуйста, добавьте членов семьи перед генерацией меню</p>
      )}

      {isLoading || isGenerating ? (
        <div className="loading">
          <p>Генерируем меню с помощью ИИ...</p>
          <div className="progress-bar">
            <div className="progress"></div>
          </div>
        </div>
      ) : error ? (
        <div className="error">
          <p>Ошибка при генерации меню: {error.message}</p>
          <button onClick={handleGenerate}>Попробовать снова</button>
        </div>
      ) : menu && menu.length > 0 ? (
        <div className="generated-menu">
          <h3>Сгенерированное меню</h3>
          {menu.map((item) => (
            <div key={item.id} className="menu-item">
              <h4>{item.day} - {item.mealType}</h4>
              <p>{item.dish}</p>
              <p>Калории: {item.calories}</p>
              <button 
                onClick={() => dispatch({ 
                  type: 'SET_MENU', 
                  payload: menu.map(m => 
                    m.id === item.id ? { ...m, cooked: !m.cooked } : m
                  ) 
                })}
              >
                {item.cooked ? 'Отменить приготовление' : 'Приготовлено'}
              </button>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default MenuGenerator;