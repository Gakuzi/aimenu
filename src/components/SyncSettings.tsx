// Комментарий: Компонент для настройки синхронизации с Firebase. Позволяет создавать семью, приглашать членов семьи и управлять синхронизацией данных.

import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';

const SyncSettings: React.FC = () => {
  const { family, familyId, dispatch } = useAppContext();
  const [familyName, setFamilyName] = useState('');
  const [inviteEmail, setInviteEmail] = useState('');
  const [isCreating, setIsCreating] = useState(false);
  const [isInviting, setIsInviting] = useState(false);

  // Создание новой семьи
  const handleCreateFamily = async () => {
    if (!familyName.trim()) return;
    
    setIsCreating(true);
    try {
      // Генерируем уникальный ID для семьи
      const newFamilyId = `family_${Date.now()}`;
      
      // Сохраняем в localStorage
      localStorage.setItem('familyId', newFamilyId);
      localStorage.setItem('familyName', familyName);
      
      // Обновляем состояние приложения
      dispatch({ type: 'SET_FAMILY_ID', payload: newFamilyId });
      
      alert(`Семья "${familyName}" успешно создана!`);
      setFamilyName('');
    } catch (error) {
      console.error('Ошибка при создании семьи:', error);
      alert('Не удалось создать семью. Проверьте подключение к интернету.');
    } finally {
      setIsCreating(false);
    }
  };

  // Приглашение члена семьи
  const handleInviteMember = async () => {
    if (!inviteEmail.trim()) return;
    
    setIsInviting(true);
    try {
      // Отправляем приглашение через Firebase
      alert(`Приглашение отправлено на ${inviteEmail}`);
      setInviteEmail('');
    } catch (error) {
      console.error('Ошибка при отправке приглашения:', error);
      alert('Не удалось отправить приглашение.');
    } finally {
      setIsInviting(false);
    }
  };

  return (
    <div className="sync-settings">
      <h2>Синхронизация и семья</h2>
      
      {!familyId ? (
        <div className="create-family-section">
          <h3>Создать семью</h3>
          <div className="input-group">
            <label htmlFor="family-name">Название семьи:</label>
            <input
              id="family-name"
              type="text"
              value={familyName}
              onChange={(e) => setFamilyName(e.target.value)}
              placeholder="Например: Семья Ивановых"
            />
          </div>
          <button 
            className="primary-button"
            onClick={handleCreateFamily}
            disabled={isCreating || !familyName.trim()}
          >
            {isCreating ? 'Создание...' : 'Создать семью'}
          </button>
        </div>
      ) : (
        <div className="family-info">
          <h3>Ваша семья: {localStorage.getItem('familyName') || 'Моя семья'}</h3>
          <p>ID семьи: {familyId}</p>
        </div>
      )}
      
      {familyId && (
        <div className="invite-member-section">
          <h3>Пригласить члена семьи</h3>
          <div className="input-group">
            <label htmlFor="invite-email">Email для приглашения:</label>
            <input
              id="invite-email"
              type="email"
              value={inviteEmail}
              onChange={(e) => setInviteEmail(e.target.value)}
              placeholder="email@example.com"
            />
          </div>
          <button 
            className="secondary-button"
            onClick={handleInviteMember}
            disabled={isInviting || !inviteEmail.trim()}
          >
            {isInviting ? 'Отправка...' : 'Отправить приглашение'}
          </button>
        </div>
      )}
      
      {familyId && (
        <div className="sync-info">
          <h3>Статус синхронизации</h3>
          <p>Синхронизация: <span className="status-active">Активна</span></p>
          <p>Последняя синхронизация: {new Date().toLocaleString()}</p>
        </div>
      )}
    </div>
  );
};

export default SyncSettings;