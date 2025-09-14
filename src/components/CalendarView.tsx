// Комментарий: Компонент для отображения меню в календарном виде. Содержит календарь с возможностью выбора дней и отображения меню на выбранный день. Использует react-calendar для отображения календаря.

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { useAppContext } from '../context/AppContext';
import { MenuItem } from '../types';
import 'react-calendar/dist/Calendar.css';

const CalendarView: React.FC = () => {
  const { menu } = useAppContext();
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  // Фильтрация меню по выбранной дате
  const getMenuForDate = (date: Date | null): MenuItem[] => {
    if (!date || menu.length === 0) return [];
    
    // Преобразуем дату в строку для сравнения
    // const dateString = date.toISOString().split('T')[0]; // Не используется, закомментировано
    
    // Ищем день недели, соответствующий дате
    const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    const dayName = daysOfWeek[date.getDay()];
    
    return menu.filter(item => item.day === dayName);
  };

  // Получаем меню для выбранной даты
  const dailyMenu = getMenuForDate(selectedDate);

  // Функция для определения, есть ли меню для конкретной даты
  const hasMenuForDate = (date: Date): boolean => {
    const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    const dayName = daysOfWeek[date.getDay()];
    return menu.some(item => item.day === dayName);
  };

  // Функция для отображения содержимого дня в календаре
  const tileContent = ({ date, view }: { date: Date; view: string }) => {
    if (view === 'month' && hasMenuForDate(date)) {
      return <div className="menu-indicator">●</div>;
    }
    return null;
  };

  // Обработчик изменения даты
  const handleDateChange = (value: any, _event: React.MouseEvent<HTMLButtonElement>) => {
    if (value instanceof Date) {
      setSelectedDate(value);
    } else if (Array.isArray(value) && value[0] instanceof Date) {
      setSelectedDate(value[0]);
    } else {
      setSelectedDate(null);
    }
  };

  return (
    <div className="calendar-view">
      <h2>Календарь меню</h2>
      
      <div className="calendar-container">
        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
          tileContent={tileContent}
          locale="ru-RU"
        />
      </div>
      
      {selectedDate && dailyMenu.length > 0 ? (
        <div className="daily-menu">
          <h3>Меню на {selectedDate.toLocaleDateString('ru-RU')}</h3>
          {dailyMenu.map(item => (
            <div key={item.id} className={`menu-item ${item.cooked ? 'cooked' : ''}`}>
              <h4>{item.mealType === 'breakfast' ? 'Завтрак' : 
                   item.mealType === 'lunch' ? 'Обед' : 
                   item.mealType === 'dinner' ? 'Ужин' : 'Перекус'}</h4>
              <p>{item.dish}</p>
              <p>Калории: {item.calories}</p>
              <button className={item.cooked ? 'cooked' : ''}>
                {item.cooked ? 'Приготовлено' : 'Отметить приготовленным'}
              </button>
            </div>
          ))}
        </div>
      ) : selectedDate ? (
        <div className="daily-menu">
          <h3>Меню на {selectedDate.toLocaleDateString('ru-RU')}</h3>
          <p>Меню на этот день не сгенерировано</p>
        </div>
      ) : null}
    </div>
  );
};

export default CalendarView;