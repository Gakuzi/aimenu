import React, { useState } from 'react';
import { useApp } from '../App';
import { FamilyMember } from '../types';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../api/firebase';
import { FaArrowLeft, FaArrowRight, FaPlus, FaTrash, FaEdit } from 'react-icons/fa';
import FamilyMemberModal from './FamilyMemberModal';

interface SetupWizardProps {
  setScreen: (screen: 'main') => void;
}

const SetupWizard: React.FC<SetupWizardProps> = ({ setScreen }) => {
  const { appState, setAppState, user } = useApp();
  const [step, setStep] = useState(1);
  const [showMemberModal, setShowMemberModal] = useState(false);
  const [editingMember, setEditingMember] = useState<FamilyMember | null>(null);

  // Local form state, initialized from global state
  const [formData, setFormData] = useState(appState?.settings);

  if (!formData) {
    return <div>Загрузка настроек...</div>; // Or a proper loader
  }

  const handleNext = () => setStep(prev => prev + 1);
  const handleBack = () => setStep(prev => prev - 1);

  const handleFamilyChange = (index: number, field: keyof FamilyMember, value: any) => {
    const updatedFamily = [...formData.family];
    updatedFamily[index] = { ...updatedFamily[index], [field]: value };
    setFormData(prev => ({ ...prev!, family: updatedFamily }));
  };

  const addFamilyMember = () => {
    setEditingMember(null);
    setShowMemberModal(true);
  };

  const editFamilyMember = (member: FamilyMember) => {
    setEditingMember(member);
    setShowMemberModal(true);
  };

  const handleSaveMember = (newMember: FamilyMember) => {
    if (editingMember) {
      // Update existing member
      setFormData(prev => ({
        ...prev!,
        family: prev!.family.map(m => (m.id === newMember.id ? newMember : m)),
      }));
    } else {
      // Add new member
      setFormData(prev => ({
        ...prev!,
        family: [...prev!.family, newMember],
      }));
    }
    setShowMemberModal(false);
    setEditingMember(null);
  };

  const removeFamilyMember = (id: string) => {
    setFormData(prev => ({
      ...prev!,
      family: prev!.family.filter(member => member.id !== id),
    }));
  };

  const handleChangeSettings = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev!, [name]: value }));
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
                <div className="family-member-info">
                  <span>{member.name} ({member.age} лет)</span>
                  <span className="family-member-details">{member.weight}кг, {member.height}см, {member.gender === 'male' ? 'М' : 'Ж'}</span>
                </div>
                <div className="family-member-actions">
                  <button onClick={() => editFamilyMember(member)} className="edit-member-btn"><FaEdit /></button>
                  <button onClick={() => removeFamilyMember(member.id)} className="remove-member-btn"><FaTrash /></button>
                </div>
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
                    <textarea name="preferences" value={formData.preferences} onChange={handleChangeSettings} rows={3} placeholder="Например: любим итальянскую кухню, нежирное мясо..." />
                </div>
                 <div className="settings-form-group">
                    <label>Предпочитаемая кухня</label>
                    <input type="text" name="cuisine" value={formData.cuisine} onChange={handleChangeSettings} placeholder="Любая, Итальянская, Азиатская..." />
                </div>
                 <div className="settings-form-group">
                    <label>Желаемая сложность блюд</label>
                    <input type="text" name="difficulty" value={formData.difficulty} onChange={handleChangeSettings} placeholder="Любая, Простая, Средняя..." />
                </div>
                 <div className="settings-form-group">
                    <label>Бюджет на неделю, ₽</label>
                    <input type="number" name="totalBudget" value={formData.totalBudget} onChange={handleChangeSettings} />
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
                        <input type="password" name="apiKey" value={formData.apiKey || ''} onChange={handleChangeSettings} placeholder="Введите ваш ключ" />
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
      {showMemberModal && (
        <FamilyMemberModal
          member={editingMember}
          onSave={handleSaveMember}
          onClose={() => setShowMemberModal(false)}
        />
      )}
    </div>
  );
};

export default SetupWizard;
