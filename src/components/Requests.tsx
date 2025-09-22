// Комментарий: Компонент для отображения и отправки запросов в семье. Реализует чат-подобный интерфейс для общения между членами семьи.

import React, { useState, useEffect } from 'react';
import { useAppContext } from '../context/AppContext';
import { getFamilyRequests, sendFamilyRequest } from '../services/firebaseService';

interface Request {
  id: string;
  text: string;
  author: string;
  timestamp: string;
  type: 'purchase' | 'menu' | 'message';
}

const Requests: React.FC = () => {
  const { familyId } = useAppContext();
  const [requests, setRequests] = useState<Request[]>([]);
  const [newRequest, setNewRequest] = useState('');
  const [requestType, setRequestType] = useState<'purchase' | 'menu' | 'message'>('message');
  const [loading, setLoading] = useState(false);

  // Загрузка запросов из Firebase
  useEffect(() => {
    if (!familyId) return;

    let unsubscribe: (() => void) | null = null;
    
    getFamilyRequests(familyId, (requestsData) => {
      setRequests(requestsData);
    }).then(unsub => {
      unsubscribe = unsub || null;
    });

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [familyId]);

  // Отправка нового запроса
  const handleSendRequest = async () => {
    if (!newRequest.trim() || !familyId) return;

    setLoading(true);
    try {
      await sendFamilyRequest(familyId, {
        text: newRequest,
        author: 'Я',
        type: requestType
      });

      setNewRequest('');
    } catch (error) {
      console.error('Ошибка при отправке запроса:', error);
      alert('Не удалось отправить запрос.');
    } finally {
      setLoading(false);
    }
  };

  // Форматирование времени
  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleString('ru-RU', {
      day: 'numeric',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (!familyId) {
    return (
      <div className="requests-container">
        <h2>Запросы семьи</h2>
        <p>Для использования функции запросов создайте или присоединитесь к семье в настройках синхронизации.</p>
      </div>
    );
  }

  return (
    <div className="requests-container">
      <h2>Запросы семьи</h2>
      
      <div className="requests-list">
        {requests.length === 0 ? (
          <p>Пока нет запросов. Отправьте первый!</p>
        ) : (
          requests.map(request => (
            <div key={request.id} className={`request-item ${request.type}`}>
              <div className="request-header">
                <span className="request-author">{request.author}</span>
                <span className="request-time">{formatTime(request.timestamp)}</span>
                <span className={`request-type ${request.type}`}>
                  {request.type === 'purchase' ? '🛒' : 
                   request.type === 'menu' ? '🍽️' : '💬'}
                </span>
              </div>
              <div className="request-text">{request.text}</div>
            </div>
          ))
        )}
      </div>
      
      <div className="new-request">
        <div className="request-type-selector">
          <label htmlFor="request-type">Тип запроса:</label>
          <select 
            id="request-type"
            value={requestType} 
            onChange={(e) => setRequestType(e.target.value as any)}
          >
            <option value="message">💬 Сообщение</option>
            <option value="purchase">🛒 Просьба купить</option>
            <option value="menu">🍽️ Об изменении меню</option>
          </select>
        </div>
        <div className="request-input-container">
          <input
            type="text"
            value={newRequest}
            onChange={(e) => setNewRequest(e.target.value)}
            placeholder="Введите сообщение..."
            onKeyPress={(e) => e.key === 'Enter' && handleSendRequest()}
            disabled={loading}
          />
          <button 
            className="send-button"
            onClick={handleSendRequest}
            disabled={!newRequest.trim() || loading}
          >
            {loading ? 'Отправка...' : 'Отправить'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Requests;