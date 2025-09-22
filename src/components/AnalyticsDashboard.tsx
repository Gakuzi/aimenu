// Комментарий: Компонент для отображения аналитики использования приложения. Показывает графики активности, статистику использования и данные о семьях.

import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { useAnalytics } from '../hooks/useAnalytics';

interface AnalyticsData {
  date: string;
  menuGenerated: number;
  purchasesMade: number;
  familyActivity: number;
}

interface FamilyData {
  name: string;
  value: number;
}

const AnalyticsDashboard: React.FC = () => {
  const { events, isLoading, fetchRecentEvents } = useAnalytics();
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData[]>([]);
  const [familyData, setFamilyData] = useState<FamilyData[]>([]);
  const [timeRange, setTimeRange] = useState<'week' | 'month' | 'year'>('week');

  // Загрузка аналитических данных из Firebase
  useEffect(() => {
    fetchRecentEvents();
  }, []);

  // Обработка данных событий для графиков
  useEffect(() => {
    if (events.length === 0) return;

    // Генерация данных для графика активности по дням
    const activityData: Record<string, { menuGenerated: number; purchasesMade: number; familyActivity: number }> = {};
    
    // Инициализация данных за последние 7 дней
    for (let i = 6; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const dateStr = date.toLocaleDateString('ru-RU', { weekday: 'short' });
      activityData[dateStr] = { menuGenerated: 0, purchasesMade: 0, familyActivity: 0 };
    }
    
    // Подсчет событий
    events.forEach(event => {
      const date = new Date(event.timestamp);
      const dateStr = date.toLocaleDateString('ru-RU', { weekday: 'short' });
      
      if (activityData[dateStr]) {
        if (event.actionType === 'menu_generated') {
          activityData[dateStr].menuGenerated++;
        } else if (event.actionType === 'purchase_made') {
          activityData[dateStr].purchasesMade++;
        } else {
          activityData[dateStr].familyActivity++;
        }
      }
    });
    
    // Преобразование в массив для графика
    const chartData = Object.entries(activityData).map(([date, counts]) => ({
      date,
      menuGenerated: counts.menuGenerated,
      purchasesMade: counts.purchasesMade,
      familyActivity: counts.familyActivity
    }));
    
    setAnalyticsData(chartData);
    
    // Генерация данных для диаграммы семей
    const familyCounts: Record<string, number> = {};
    events.forEach(event => {
      const familyId = event.familyId || 'Без семьи';
      familyCounts[familyId] = (familyCounts[familyId] || 0) + 1;
    });
    
    const familyChartData = Object.entries(familyCounts)
      .map(([name, value]) => ({ name, value }))
      .sort((a, b) => b.value - a.value)
      .slice(0, 4);
    
    setFamilyData(familyChartData);
  }, [events]);

  // Цвета для диаграмм
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className="analytics-dashboard">
      <h2>Аналитика использования</h2>
      
      <div className="analytics-controls">
        <div className="time-range-selector">
          <label htmlFor="time-range">Период:</label>
          <select 
            id="time-range"
            value={timeRange} 
            onChange={(e) => setTimeRange(e.target.value as any)}
          >
            <option value="week">Неделя</option>
            <option value="month">Месяц</option>
            <option value="year">Год</option>
          </select>
        </div>
      </div>
      
      {isLoading ? (
        <p>Загрузка данных аналитики...</p>
      ) : (
        <div className="analytics-charts">
          <div className="chart-container">
            <h3>Активность по дням</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={analyticsData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="menuGenerated" name="Сгенерировано меню" fill="#8884d8" />
                <Bar dataKey="purchasesMade" name="Сделано покупок" fill="#82ca9d" />
                <Bar dataKey="familyActivity" name="Активность семьи" fill="#ffc658" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <div className="chart-container">
            <h3>Распределение по семьям</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={familyData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {familyData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
      
      <div className="analytics-summary">
        <div className="summary-card">
          <h4>Всего семей</h4>
          <p className="summary-value">{familyData.length}</p>
        </div>
        <div className="summary-card">
          <h4>Сгенерировано меню</h4>
          <p className="summary-value">
            {events.filter(e => e.actionType === 'menu_generated').length}
          </p>
        </div>
        <div className="summary-card">
          <h4>Сделано покупок</h4>
          <p className="summary-value">
            {events.filter(e => e.actionType === 'purchase_made').length}
          </p>
        </div>
        <div className="summary-card">
          <h4>Активных пользователей</h4>
          <p className="summary-value">
            {new Set(events.map(e => e.userId)).size}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;