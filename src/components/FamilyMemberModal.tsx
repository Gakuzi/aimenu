import React, { useState, useEffect } from 'react';
import { FamilyMember } from '../types';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface FamilyMemberModalProps {
  member: FamilyMember | null;
  onSave: (member: FamilyMember) => void;
  onClose: () => void;
}

const getDefaultFamilyMember = (): FamilyMember => ({
  id: new Date().toISOString(),
  name: '',
  age: 30,
  weight: 70,
  height: 170,
  gender: 'male',
  activityLevel: 'moderate',
  goal: 'maintain',
});

const FamilyMemberModal: React.FC<FamilyMemberModalProps> = ({ member, onSave, onClose }) => {
  const [currentMember, setCurrentMember] = useState<FamilyMember>(member || getDefaultFamilyMember());
  const [step, setStep] = useState(1);
  const totalSteps = 6; // Name, Age, Weight, Height, Gender, Activity, Goal

  useEffect(() => {
    setCurrentMember(member || getDefaultFamilyMember());
    setStep(1);
  }, [member]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCurrentMember(prev => ({
      ...prev,
      [name]: name === 'age' || name === 'weight' || name === 'height' ? parseInt(value) : value,
    }));
  };

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(prev => prev - 1);
    }
  };

  const handleSave = () => {
    if (currentMember.name.trim() === '') {
      alert('Пожалуйста, введите имя члена семьи.');
      return;
    }
    onSave(currentMember);
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="modal-form-group">
            <label>Имя</label>
            <input type="text" name="name" value={currentMember.name} onChange={handleChange} placeholder="Имя" />
          </div>
        );
      case 2:
        return (
          <div className="modal-form-group">
            <label>Возраст</label>
            <input type="number" name="age" value={currentMember.age} onChange={handleChange} placeholder="Возраст" />
          </div>
        );
      case 3:
        return (
          <div className="modal-form-group">
            <label>Вес (кг)</label>
            <input type="number" name="weight" value={currentMember.weight} onChange={handleChange} placeholder="Вес" />
          </div>
        );
      case 4:
        return (
          <div className="modal-form-group">
            <label>Рост (см)</label>
            <input type="number" name="height" value={currentMember.height} onChange={handleChange} placeholder="Рост" />
          </div>
        );
      case 5:
        return (
          <div className="modal-form-group">
            <label>Пол</label>
            <select name="gender" value={currentMember.gender} onChange={handleChange}>
              <option value="male">Мужской</option>
              <option value="female">Женский</option>
            </select>
          </div>
        );
      case 6:
        return (
          <div className="modal-form-group">
            <label>Уровень активности</label>
            <select name="activityLevel" value={currentMember.activityLevel} onChange={handleChange}>
              <option value="sedentary">Сидячий (мало или нет упражнений)</option>
              <option value="light">Легкая (легкие упражнения/спорт 1-3 дня в неделю)</option>
              <option value="moderate">Умеренная (умеренные упражнения/спорт 3-5 дней в неделю)</option>
              <option value="active">Высокая (интенсивные упражнения/спорт 6-7 дней в неделю)</option>
              <option value="very_active">Очень высокая (очень интенсивные упражнения/физическая работа)</option>
            </select>
            <label>Цель</label>
            <select name="goal" value={currentMember.goal} onChange={handleChange}>
              <option value="lose">Снижение веса</option>
              <option value="maintain">Поддержание веса</option>
              <option value="gain">Набор массы</option>
            </select>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="modal-overlay visible">
      <div className="modal-content">
        <h2 className="modal-title">{member ? 'Редактировать' : 'Добавить'} члена семьи</h2>
        <p className="wizard-step-counter">Шаг {step} из {totalSteps}</p>
        <div className="modal-body">
          {renderStepContent()}
        </div>
        <div className="modal-buttons">
          {step > 1 && <button className="secondary-button" onClick={handleBack}><FaArrowLeft /> Назад</button>}
          {step < totalSteps ? (
            <button className="primary-button" onClick={handleNext}>Далее <FaArrowRight /></button>
          ) : (
            <button className="primary-button" onClick={handleSave}>Сохранить</button>
          )}
          <button className="secondary-button" onClick={onClose}>Отмена</button>
        </div>
      </div>
    </div>
  );
};

export default FamilyMemberModal;
