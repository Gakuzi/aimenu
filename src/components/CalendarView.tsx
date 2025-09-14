// Комментарий: Календарь с react-calendar. Выбор недели, статистика калорий по дням (графики recharts).

import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const CalendarView: React.FC = () => {
  const [date, setDate] = React.useState(new Date());

  // Пример данных для графика
  const data = [
    { day: 'Пн', calories: 2000 },
    { day: 'Вт', calories: 1800 },
    { day: 'Ср', calories: 2200 },
    { day: 'Чт', calories: 1900 },
    { day: 'Пт', calories: 2100 },
    { day: 'Сб', calories: 2300 },
    { day: 'Вс', calories: 1800 }
  ];

  // Обработчик изменения даты в календаре
  const handleDateChange = (value: any) => {
    if (value instanceof Date) {
      setDate(value);
    }
  };

  return (
    <div>
      <Calendar onChange={handleDateChange} value={date} />
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="calories" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CalendarView;