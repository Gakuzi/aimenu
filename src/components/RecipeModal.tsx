// Комментарий: Компонент для отображения рецепта в модальном окне. Содержит пошаговую инструкцию, таймеры для каждого шага и список ингредиентов. Использует react-modal для отображения модального окна.

import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { useQuery } from '@tanstack/react-query';
import { useAppContext } from '../context/AppContext';
import { geminiService } from '../services/geminiService';
import { Recipe } from '../types';

// Устанавливаем элемент приложения для react-modal
Modal.setAppElement('#root');

interface RecipeModalProps {
  dish: string;
  isOpen: boolean;
  onClose: () => void;
}

const RecipeModal: React.FC<RecipeModalProps> = ({ dish, isOpen, onClose }) => {
  const { family } = useAppContext();
  const [currentStep, setCurrentStep] = useState(0);
  const [timers, setTimers] = useState<{[key: number]: number}>({});
  const [timerIntervals, setTimerIntervals] = useState<{[key: number]: NodeJS.Timeout}>({});

  // Генерация рецепта
  const generateRecipe = async () => {
    try {
      const recipe = await geminiService.generateRecipe(dish, family);
      return recipe;
    } catch (error) {
      console.error('Ошибка при генерации рецепта:', error);
      throw error;
    }
  };

  // Используем react-query для управления состоянием загрузки
  const { data: recipe, isLoading, error, refetch } = useQuery<Recipe, Error>({
    queryKey: ['recipe', dish, family],
    queryFn: generateRecipe,
    enabled: isOpen, // Запускать только если модальное окно открыто
  });

  // Очистка интервалов таймеров при размонтировании
  useEffect(() => {
    return () => {
      Object.values(timerIntervals).forEach(interval => clearInterval(interval));
    };
  }, [timerIntervals]);

  // Запуск таймера для шага
  const startTimer = (stepIndex: number, seconds: number) => {
    // Останавливаем существующий таймер для этого шага
    if (timerIntervals[stepIndex]) {
      clearInterval(timerIntervals[stepIndex]);
    }

    // Устанавливаем начальное значение таймера
    setTimers(prev => ({ ...prev, [stepIndex]: seconds }));

    // Запускаем таймер
    const interval = setInterval(() => {
      setTimers(prev => {
        const newTime = (prev[stepIndex] || 0) - 1;
        if (newTime <= 0) {
          clearInterval(interval);
          // Уведомление о завершении таймера
          if ('Notification' in window && Notification.permission === 'granted') {
            new Notification('Таймер завершен!', {
              body: `Шаг "${recipe?.steps[stepIndex].title}" завершен`,
            });
          }
          return { ...prev, [stepIndex]: 0 };
        }
        return { ...prev, [stepIndex]: newTime };
      });
    }, 1000);

    // Сохраняем интервал для возможности остановки
    setTimerIntervals(prev => ({ ...prev, [stepIndex]: interval }));
  };

  // Остановка таймера для шага
  const stopTimer = (stepIndex: number) => {
    if (timerIntervals[stepIndex]) {
      clearInterval(timerIntervals[stepIndex]);
      setTimerIntervals(prev => {
        const newIntervals = { ...prev };
        delete newIntervals[stepIndex];
        return newIntervals;
      });
      setTimers(prev => {
        const newTimers = { ...prev };
        delete newTimers[stepIndex];
        return newTimers;
      });
    }
  };

  // Переход к следующему шагу
  const nextStep = () => {
    if (recipe && currentStep < recipe.steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  // Переход к предыдущему шагу
  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Рецепт блюда"
      className="recipe-modal"
      overlayClassName="recipe-modal-overlay"
    >
      <div className="recipe-modal-content">
        <button className="close-button" onClick={onClose}>×</button>
        
        {isLoading ? (
          <div className="loading">
            <p>Генерируем рецепт...</p>
          </div>
        ) : error ? (
          <div className="error">
            <p>Ошибка при генерации рецепта: {error.message}</p>
            <button onClick={() => refetch()}>Попробовать снова</button>
          </div>
        ) : recipe ? (
          <>
            <h2>{recipe.dish}</h2>
            
            <div className="recipe-ingredients">
              <h3>Ингредиенты</h3>
              <ul>
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>
                    {ingredient.name} - {ingredient.quantity} {ingredient.unit}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="recipe-steps">
              <h3>Пошаговое приготовление</h3>
              <div className="step-indicator">
                Шаг {currentStep + 1} из {recipe.steps.length}
              </div>
              
              <div className="step-content">
                <h4>{recipe.steps[currentStep].title}</h4>
                <p>{recipe.steps[currentStep].description}</p>
                
                {recipe.steps[currentStep].time && (
                  <div className="timer-section">
                    <p>Время: {recipe.steps[currentStep].time} минут</p>
                    <div className="timer-controls">
                      {timers[currentStep] !== undefined ? (
                        <>
                          <span className="timer-display">
                            {Math.floor((timers[currentStep] || 0) / 60)}:
                            {(timers[currentStep] || 0) % 60 < 10 ? '0' : ''}
                            {(timers[currentStep] || 0) % 60}
                          </span>
                          <button onClick={() => stopTimer(currentStep)}>Стоп</button>
                        </>
                      ) : (
                        <button onClick={() => startTimer(currentStep, (recipe.steps[currentStep].time || 0) * 60)}>
                          Начать таймер
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
              
              <div className="step-navigation">
                <button 
                  onClick={prevStep} 
                  disabled={currentStep === 0}
                >
                  Назад
                </button>
                <button 
                  onClick={nextStep} 
                  disabled={currentStep === recipe.steps.length - 1}
                >
                  Далее
                </button>
              </div>
            </div>
            
            <div className="recipe-total-time">
              <p>Общее время приготовления: {recipe.totalTime} минут</p>
            </div>
          </>
        ) : (
          <p>Рецепт не найден</p>
        )}
      </div>
    </Modal>
  );
};

export default RecipeModal;