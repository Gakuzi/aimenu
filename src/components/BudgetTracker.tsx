// Комментарий: Трекер бюджета. Пересчитывает сумму, показывает warnings с react-modal, графики с recharts.

import React, { useContext, useMemo } from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import Modal from 'react-modal';
import { AppContext } from '../context/AppContext';

const BudgetTracker: React.FC = () => {
  const { state } = useContext(AppContext)!;

  const totalSpent = useMemo(() => {
    return state.shoppingList.reduce((sum: number, item: { price: number; quantity: number; }) => sum + item.price * item.quantity, 0);
  }, [state.shoppingList]);

  const isOverBudget = totalSpent > state.budget;

  // Данные для графика
  const data = [
    { name: 'Потрачено', value: totalSpent },
    { name: 'Остаток', value: Math.max(0, state.budget - totalSpent) }
  ];

  const COLORS = ['#0088FE', '#00C49F'];

  return (
    <div>
      <p>Бюджет: {state.budget} руб. Потрачено: {totalSpent} руб.</p>
      <PieChart width={400} height={400}>
        <Pie 
          data={data} 
          cx={200} 
          cy={200} 
          innerRadius={60} 
          outerRadius={80} 
          fill="#8884d8" 
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      <Modal isOpen={isOverBudget}>
        <p>Превышен бюджет!</p>
      </Modal>
    </div>
  );
};

export default BudgetTracker;