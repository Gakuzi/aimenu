// Комментарий: Хук для логирования аналитики в Firestore. Отслеживает события использования приложения и предоставляет данные для аналитики.

import { useEffect, useState } from 'react';
import { logAnalyticsEvent, getRecentAnalyticsEvents } from '../services/firebaseService';
import { useAppContext } from '../context/AppContext';

interface AnalyticsEvent {
  userId: string;
  familyId: string;
  actionType: string;
  timestamp: Date;
  deviceInfo: {
    browser: string;
    os: string;
  };
  metadata?: any;
}

export const useAnalytics = () => {
  const { familyId } = useAppContext();
  const [events, setEvents] = useState<AnalyticsEvent[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Получение информации об устройстве
  const getDeviceInfo = () => {
    const userAgent = navigator.userAgent;
    let browser = 'Unknown';
    let os = 'Unknown';

    // Определение браузера
    if (userAgent.includes('Chrome')) browser = 'Chrome';
    else if (userAgent.includes('Firefox')) browser = 'Firefox';
    else if (userAgent.includes('Safari')) browser = 'Safari';
    else if (userAgent.includes('Edge')) browser = 'Edge';

    // Определение ОС
    if (userAgent.includes('Windows')) os = 'Windows';
    else if (userAgent.includes('Mac')) os = 'macOS';
    else if (userAgent.includes('Linux')) os = 'Linux';
    else if (userAgent.includes('Android')) os = 'Android';
    else if (userAgent.includes('iPhone') || userAgent.includes('iPad')) os = 'iOS';

    return { browser, os };
  };

  // Логирование события
  const logEvent = async (actionType: string, metadata?: any) => {
    try {
      const userId = localStorage.getItem('userId') || `user_${Date.now()}`;
      
      const event: any = {
        userId,
        familyId: familyId || 'no_family',
        actionType,
        deviceInfo: getDeviceInfo(),
        metadata
      };

      // Сохраняем в Firestore
      await logAnalyticsEvent(event);
      
      // Обновляем локальный список событий
      setEvents(prev => [event as AnalyticsEvent, ...prev.slice(0, 99)]); // Ограничиваем 100 последними событиями
    } catch (error) {
      console.error('Ошибка логирования события аналитики:', error);
    }
  };

  // Получение последних событий
  const fetchRecentEvents = async () => {
    setIsLoading(true);
    try {
      const eventsData = await getRecentAnalyticsEvents(50);
      setEvents(eventsData as AnalyticsEvent[]);
    } catch (error) {
      console.error('Ошибка получения событий аналитики:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Автоматическое логирование при монтировании
  useEffect(() => {
    logEvent('app_opened');
    
    // Логирование закрытия вкладки
    const handleBeforeUnload = () => {
      logEvent('app_closed');
    };
    
    window.addEventListener('beforeunload', handleBeforeUnload);
    
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return {
    events,
    isLoading,
    logEvent,
    fetchRecentEvents
  };
};