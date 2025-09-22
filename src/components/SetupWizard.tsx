import React, { useState } from 'react';
import { useApp } from '../App';
import { FamilyMember } from '../types';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../api/firebase';
import { FaArrowLeft, FaArrowRight, FaPlus, FaTrash, FaUser } from 'react-icons/fa';

interface SetupWizardProps {
  setScreen: (screen: 'main') => void;
}

const SetupWizard: React.FC<SetupWizardProps> = ({ setScreen }) => {
  const { appState, setAppState, user } = useApp();
  const [step, setStep] = useState(1);

  // Local form state, initialized from global state
  const [formData, setFormData] = useState(appState?.settings);

  if (!formData) {
    return <div>Загрузка настроек...</div>; // Or a proper loader
  }

  const handleNext = () => setStep(prev => prev + 1);
  const handleBack = () => setStep(prev => prev - 1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev!, [name]: value }));
  };

  const handleFamilyChange = (index: number, field: keyof FamilyMember, value: any) => {
    const updatedFamily = [...formData.family];
    updatedFamily[index] = { ...updatedFamily[index], [field]: value };
    setFormData(prev => ({ ...prev!, family: updatedFamily }));
  };

  const addFamilyMember = () => {
    const newMember: FamilyMember = {
      id: new Date().toISOString(),
      name: 'Новый член семьи',
      age: 30,
      weight: 70,
      height: 170,
      gender: 'male',
      activityLevel: 'moderate',
      goal: 'maintain',
    };
    setFormData(prev => ({ ...prev!, family: [...prev!.family, newMember] }));
  };

  const removeFamilyMember = (index: number) => {
    const updatedFamily = formData.family.filter((_, i) => i !== index);
    setFormData(prev => ({ ...prev!, family: updatedFamily }));
  };

  const handleFinish = async () => {
    if (user && appState) {
      const newState: AppState = { ...appState, settings: formData };
      setAppState(newState);
      await setDoc(doc(db, "user-data", user.uid), newState);
      setScreen('main');
    }
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h2 className="wizard-step-title">Шаг 1: Ваша семья</h2>
            <p className="wizard-step-description">Добавьте членов семьи, чтобы ИИ мог рассчитать потребности в питании.</p>
            {formData.family.map((member, index) => (
              <div key={member.id} className="family-member-card-wizard">
                 <FaUser className="family-member-icon" />
                <div className="family-member-inputs">
                    <input type="text" value={member.name} onChange={(e) => handleFamilyChange(index, 'name', e.target.value)} placeholder="Имя" />
                    <input type="number" value={member.age} onChange={(e) => handleFamilyChange(index, 'age', parseInt(e.target.value))} placeholder="Возраст" />
                    <input type="number" value={member.weight} onChange={(e) => handleFamilyChange(index, 'weight', parseInt(e.target.value))} placeholder="Вес (кг)" />
                </div>
                <button onClick={() => removeFamilyMember(index)} className="remove-member-btn"><FaTrash /></button>
              </div>
            ))}
            <button onClick={addFamilyMember} className="add-member-btn"><FaPlus /> Добавить члена семьи</button>
          </div>
        );
      case 2:
        return (
            <div>
                <h2 className="wizard-step-title">Шаг 2: Предпочтения и бюджет</h2>
                 <div className="settings-form-group">
                    <label>Общие предпочтения</label>
                    <textarea name="preferences" value={formData.preferences} onChange={handleChange} rows={3} placeholder="Например: любим итальянскую кухню, нежирное мясо..." />
                </div>
                 <div className="settings-form-group">
                    <label>Предпочитаемая кухня</label>
                    <input type="text" name="cuisine" value={formData.cuisine} onChange={handleChange} placeholder="Любая, Итальянская, Азиатская..." />
                </div>
                 <div className="settings-form-group">
                    <label>Желаемая сложность блюд</label>
                    <input type="text" name="difficulty" value={formData.difficulty} onChange={handleChange} placeholder="Любая, Простая, Средняя..." />
                </div>
                 <div className="settings-form-group">
                    <label>Бюджет на неделю, ₽</label>
                    <input type="number" name="totalBudget" value={formData.totalBudget} onChange={handleChange} />
                </div>
            </div>
        );
        case 3:
            return (
                 <div>
                    <h2 className="wizard-step-title">Шаг 3: API Ключ</h2>
                    <p className="wizard-step-description">Введите ваш API-ключ от Google AI Studio. Он нужен для генерации меню.</p>
                    <div className="settings-form-group">
                        <label>Google Gemini API Key</label>
                        <input type="password" name="apiKey" value={formData.apiKey || ''} onChange={handleChange} placeholder="Введите ваш ключ" />
                        <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener noreferrer" className="api-key-help-link">Где взять ключ?</a>
                    </div>
                </div>
            )
      default:
        return null;
    }
  };

  return (
    <div className="screen" id="setup-screen">
      <div className="setup-container">
        <h1 className="setup-title">Мастер настройки</h1>
        <p className="wizard-step-counter">Шаг {step} из 3</p>
        <div id="setup-wizard">
          {renderStepContent()}
        </div>
        <div id="wizard-nav">
          {step > 1 && <button onClick={handleBack} className="secondary-button"><FaArrowLeft /> Назад</button>}
          {step < 3 ? (
            <button onClick={handleNext} className="primary-button">Далее <FaArrowRight /></button>
          ) : (
            <button onClick={handleFinish} className="primary-button">Завершить</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SetupWizard;