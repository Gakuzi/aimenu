import React, { useState } from 'react';
import { Screen } from '../types';
import { auth, db } from '../api/firebase';
import { doc, setDoc } from "firebase/firestore";

interface SetupWizardProps {
  setScreen: (screen: Screen) => void;
}

const SetupWizard: React.FC<SetupWizardProps> = ({ setScreen }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    apiKey: '',
    familyName: '',
    familyMembers: [],
    preferences: '',
    dietaryRestrictions: '',
    kitchenAppliances: '',
  });
  const [newMember, setNewMember] = useState('');
  const [loading, setLoading] = useState(false);

  const totalSteps = 4;

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAddMember = () => {
    if (newMember.trim() !== '') {
      setFormData(prev => ({
        ...prev,
        familyMembers: [...prev.familyMembers, newMember.trim()],
      }));
      setNewMember('');
    }
  };

  const handleRemoveMember = (indexToRemove: number) => {
    setFormData(prev => ({
      ...prev,
      familyMembers: prev.familyMembers.filter((_, index) => index !== indexToRemove),
    }));
  };

  const handleSubmit = async () => {
    if (!auth.currentUser) {
      console.error("Пользователь не аутентифицирован. Невозможно сохранить настройки.");
      // Показать уведомление об ошибке
      return;
    }
    setLoading(true);
    try {
      const userDocRef = doc(db, "users", auth.currentUser.uid);
      await setDoc(userDocRef, {
        ...formData,
        setupComplete: true,
        createdAt: new Date(),
      });
      setScreen('main');
    } catch (error) {
      console.error("Ошибка сохранения настроек:", error);
      // Показать уведомление об ошибке
    } finally {
      setLoading(false);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h2 className="wizard-step-title">Шаг 1: Настройка подключения</h2>
            <p className="wizard-step-description">Введите ваш API-ключ от Google AI Studio для генерации меню. Это безопасно, ключ хранится только на вашем устройстве.</p>
            <div className="settings-form-group">
              <label htmlFor="api-key-input">Ваш Google Gemini API Ключ</label>
              <input
                id="api-key-input"
                name="apiKey"
                type="password"
                value={formData.apiKey}
                onChange={handleChange}
                placeholder="Введите ваш API ключ"
              />
               <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener noreferrer" className="api-key-help-link">Где взять ключ?</a>
            </div>
          </div>
        );
      case 2:
        return (
            <div>
              <h2 className="wizard-step-title">Шаг 2: Ваша семья</h2>
              <p className="wizard-step-description">Давайте познакомимся! Назовите вашу семью и добавьте ее членов. Это поможет AI лучше адаптировать меню.</p>
              <div className="settings-form-group">
                  <label htmlFor="familyName">Название семьи (например, "Ивановы")</label>
                  <input
                      id="familyName"
                      name="familyName"
                      type="text"
                      value={formData.familyName}
                      onChange={handleChange}
                      placeholder="Семья Ивановых"
                  />
              </div>
              <div className="settings-form-group">
                  <label>Члены семьи</label>
                  <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                      <input
                          type="text"
                          value={newMember}
                          onChange={(e) => setNewMember(e.target.value)}
                          placeholder="Имя"
                          style={{ flexGrow: 1 }}
                      />
                      <button type="button" onClick={handleAddMember} className="secondary-button" style={{width: 'auto', padding: '0 20px'}}>Добавить</button>
                  </div>
                  <div>
                      {formData.familyMembers.map((member, index) => (
                          <div key={index} className="family-member-card">
                              <span>{member}</span>
                              <button onClick={() => handleRemoveMember(index)}>&times;</button>
                          </div>
                      ))}
                  </div>
              </div>
            </div>
        );
      case 3:
        return (
          <div>
            <h2 className="wizard-step-title">Шаг 3: Предпочтения в еде</h2>
            <p className="wizard-step-description">Расскажите о ваших вкусах, чтобы меню было максимально подходящим.</p>
            <div className="settings-form-group">
              <label htmlFor="preferences">Общие предпочтения</label>
              <textarea
                id="preferences"
                name="preferences"
                value={formData.preferences}
                onChange={handleChange}
                placeholder="Например: любим итальянскую кухню, нежирное мясо, больше овощей, простые рецепты"
                rows={3}
              />
            </div>
            <div className="settings-form-group">
              <label htmlFor="dietaryRestrictions">Диетические ограничения или аллергии</label>
              <textarea
                id="dietaryRestrictions"
                name="dietaryRestrictions"
                value={formData.dietaryRestrictions}
                onChange={handleChange}
                placeholder="Например: без глютена, аллергия на орехи, вегетарианство"
                rows={3}
              />
            </div>
            <div className="settings-form-group">
              <label htmlFor="kitchenAppliances">Какая кухонная техника у вас есть?</label>
              <textarea
                id="kitchenAppliances"
                name="kitchenAppliances"
                value={formData.kitchenAppliances}
                onChange={handleChange}
                placeholder="Например: мультиварка, блендер, духовка, микроволновка"
                rows={3}
              />
            </div>
          </div>
        );
      case 4:
        return (
          <div>
            <h2 className="wizard-step-title">Шаг 4: Все готово!</h2>
            <p className="wizard-step-description">Проверьте введенные данные. Вы всегда сможете изменить их позже в настройках. Нажмите "Завершить", чтобы создать ваше первое семейное меню!</p>
            {/* Здесь можно добавить краткий обзор введенных данных */}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="screen" id="setup-screen">
       <div className="setup-container">
        <svg className="setup-logo" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="45" fill="#F0E7DD"></circle><path d="M50,10 A40,40 0 0,1 90,50" fill="none" stroke="#8B5E3C" strokeWidth="8"></path><path d="M50,90 A40,40 0 0,1 10,50" fill="none" stroke="#D4A373" strokeWidth="8"></path><circle cx="50" cy="50" r="20" fill="#fff"></circle><path d="M50 38 C 55 42, 55 48, 50 52 S 45 58, 50 62" stroke="#5E7A6E" strokeWidth="4" fill="none" strokeLinecap="round"></path></svg>
        <h1 className="setup-title">Мастер настройки</h1>
        <p className="wizard-step-counter">Шаг {step} из {totalSteps}</p>
        <div id="setup-wizard">
          <div className="wizard-step active">
            {renderStep()}
          </div>
        </div>
        <div id="wizard-nav">
          {step > 1 && <button onClick={handleBack} className="secondary-button" disabled={loading}>Назад</button>}
          {step < totalSteps && <button onClick={handleNext} className="primary-button" disabled={loading}>Далее</button>}
          {step === totalSteps && <button onClick={handleSubmit} className="primary-button" disabled={loading}>{loading ? 'Сохранение...' : 'Завершить и создать меню'}</button>}
        </div>
      </div>
    </div>
  );
};

export default SetupWizard;
