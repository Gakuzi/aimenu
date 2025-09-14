// Комментарий: Компонент для отслеживания бюджета. Содержит графики расходов, предупреждения о превышении бюджета и рекомендации по экономии. Использует recharts для визуализации данных.

import React, { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useAppContext } from '../context/AppContext';
import { geminiService } from '../services/geminiService';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const BudgetTracker: React.FC = () => {
  const { family, shoppingList, dispatch } = useAppContext();

  // Расчет бюджета
  const calculateBudget = async () => {
    try {
      const calculatedBudget = await geminiService.calculateBudget(shoppingList, family);
      dispatch({ type: 'SET_BUDGET', payload: calculatedBudget });
      return calculatedBudget;
    } catch (error) {
      console.error('Ошибка при расчете бюджета:', error);
      throw error;
    }
  };

  // Используем react-query для управления состоянием загрузки
  const { data: calculatedBudget, isLoading, error, refetch } = useQuery({
    queryKey: ['budget', shoppingList, family],
    queryFn: calculateBudget,
    enabled: shoppingList.length > 0 && family.length > 0,
  });

  // Подготовка данных для круговой диаграммы
  const pieChartData = useMemo(() => {
    if (!calculatedBudget) return [];
    
    return calculatedBudget.items.map(item => ({
      name: item.category,
      value: item.allocated,
    }));
  }, [calculatedBudget]);

  // Подготовка данных для столбчатой диаграммы
  const barChartData = useMemo(() => {
    if (!calculatedBudget) return [];
    
    return calculatedBudget.items.map(item => ({
      name: item.category,
      allocated: item.allocated,
      spent: item.spent,
    }));
  }, [calculatedBudget]);

  // Цвета для диаграмм
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D'];

  // Общая стоимость
  const totalCost = useMemo(() => {
    if (!calculatedBudget) return 0;
    return calculatedBudget.items.reduce((sum, item) => sum + item.allocated, 0);
  }, [calculatedBudget]);

  // Потрачено
  const totalSpent = useMemo(() => {
    if (!calculatedBudget) return 0;
    return calculatedBudget.items.reduce((sum, item) => sum + item.spent, 0);
  }, [calculatedBudget]);

  // Процент использования бюджета
  const budgetPercentage = useMemo(() => {
    if (totalCost === 0) return 0;
    return Math.round((totalSpent / totalCost) * 100);
  }, [totalCost, totalSpent]);

  return (
    <div className="budget-tracker">
      <h2>Бюджет</h2>
      
      {shoppingList.length === 0 || family.length === 0 ? (
        <p className="warning">
          Пожалуйста, добавьте членов семьи и сгенерируйте список покупок для расчета бюджета
        </p>
      ) : isLoading ? (
        <div className="loading">
          <p>Рассчитываем бюджет...</p>
        </div>
      ) : error ? (
        <div className="error">
          <p>Ошибка при расчете бюджета: {(error as Error).message}</p>
          <button onClick={() => refetch()}>Попробовать снова</button>
        </div>
      ) : calculatedBudget ? (
        <>
          <div className="budget-summary">
            <div className="budget-amounts">
              <p>Общий бюджет: <strong>{totalCost} руб.</strong></p>
              <p>Потрачено: <strong>{totalSpent} руб.</strong></p>
              <p>Осталось: <strong>{totalCost - totalSpent} руб.</strong></p>
            </div>
            
            <div className="budget-percentage">
              <p>Использовано: <strong>{budgetPercentage}%</strong></p>
              <div className="progress-bar">
                <div 
                  className="progress" 
                  style={{ width: `${budgetPercentage}%` }}
                ></div>
              </div>
            </div>
          </div>
          
          <div className="budget-charts">
            <div className="chart-container">
              <h3>Распределение по категориям</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={pieChartData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {pieChartData.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value} руб.`, 'Сумма']} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            
            <div className="chart-container">
              <h3>Сравнение план/факт</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={barChartData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`${value} руб.`, 'Сумма']} />
                  <Legend />
                  <Bar dataKey="allocated" fill="#8884d8" name="План" />
                  <Bar dataKey="spent" fill="#82ca9d" name="Факт" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          {budgetPercentage > 100 && (
            <div className="budget-warning">
              <h3>Внимание! Бюджет превышен!</h3>
              <p>Вы превысили запланированный бюджет на {totalSpent - totalCost} руб.</p>
              <p>Рассмотрите возможность оптимизации расходов.</p>
            </div>
          )}
          
          {budgetPercentage > 90 && budgetPercentage <= 100 && (
            <div className="budget-warning warning">
              <h3>Предупреждение</h3>
              <p>Вы близки к исчерпанию бюджета: {budgetPercentage}% использовано.</p>
            </div>
          )}
        </>
      ) : (
        <p>Бюджет не рассчитан</p>
      )}
    </div>
  );
};

export default BudgetTracker;