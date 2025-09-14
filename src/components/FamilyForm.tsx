// Комментарий: Компонент для ввода информации о членах семьи. Содержит форму с полями для имени, возраста, веса, роста, уровня активности, цели, аллергий и предпочтений. Использует react-hook-form для управления формой и валидации.

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FamilyMember } from '../types';
import { useAppContext } from '../context/AppContext';

interface FamilyFormInputs {
  name: string;
  age: number;
  weight: number;
  height: number;
  activityLevel: FamilyMember['activityLevel'];
  goal: FamilyMember['goal'];
  allergies: string;
  preferences: string;
}

const FamilyForm: React.FC = () => {
  const { dispatch } = useAppContext();
  const [familyMembers, setFamilyMembers] = useState<FamilyMember[]>([]);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FamilyFormInputs>();

  const onSubmit = (data: FamilyFormInputs) => {
    const newMember: FamilyMember = {
      id: Date.now().toString(),
      name: data.name,
      age: data.age,
      weight: data.weight,
      height: data.height,
      activityLevel: data.activityLevel,
      goal: data.goal,
      allergies: data.allergies.split(',').map(item => item.trim()).filter(item => item),
      preferences: data.preferences.split(',').map(item => item.trim()).filter(item => item),
    };

    const updatedMembers = [...familyMembers, newMember];
    setFamilyMembers(updatedMembers);
    dispatch({ type: 'SET_FAMILY', payload: updatedMembers });
    
    reset();
  };

  return (
    <div className="family-form">
      <h2>Члены семьи</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Имя:</label>
          <input
            id="name"
            {...register('name', { required: 'Имя обязательно' })}
            placeholder="Введите имя"
          />
          {errors.name && <span className="error">{errors.name.message}</span>}
        </div>

        <div>
          <label htmlFor="age">Возраст:</label>
          <input
            id="age"
            type="number"
            {...register('age', { 
              required: 'Возраст обязателен',
              min: { value: 1, message: 'Возраст должен быть больше 0' },
              max: { value: 120, message: 'Возраст должен быть меньше 120' }
            })}
            placeholder="Введите возраст"
          />
          {errors.age && <span className="error">{errors.age.message}</span>}
        </div>

        <div>
          <label htmlFor="weight">Вес (кг):</label>
          <input
            id="weight"
            type="number"
            step="0.1"
            {...register('weight', { 
              required: 'Вес обязателен',
              min: { value: 1, message: 'Вес должен быть больше 0' },
              max: { value: 300, message: 'Вес должен быть меньше 300' }
            })}
            placeholder="Введите вес"
          />
          {errors.weight && <span className="error">{errors.weight.message}</span>}
        </div>

        <div>
          <label htmlFor="height">Рост (см):</label>
          <input
            id="height"
            type="number"
            {...register('height', { 
              required: 'Рост обязателен',
              min: { value: 50, message: 'Рост должен быть больше 50' },
              max: { value: 250, message: 'Рост должен быть меньше 250' }
            })}
            placeholder="Введите рост"
          />
          {errors.height && <span className="error">{errors.height.message}</span>}
        </div>

        <div>
          <label htmlFor="activityLevel">Уровень активности:</label>
          <select id="activityLevel" {...register('activityLevel', { required: 'Уровень активности обязателен' })}>
            <option value="sedentary">Сидячий образ жизни</option>
            <option value="light">Легкая активность</option>
            <option value="moderate">Умеренная активность</option>
            <option value="active">Активный образ жизни</option>
            <option value="veryActive">Очень активный образ жизни</option>
          </select>
          {errors.activityLevel && <span className="error">{errors.activityLevel.message}</span>}
        </div>

        <div>
          <label htmlFor="goal">Цель:</label>
          <select id="goal" {...register('goal', { required: 'Цель обязательна' })}>
            <option value="maintain">Поддерживать вес</option>
            <option value="lose">Похудеть</option>
            <option value="gain">Набрать вес</option>
          </select>
          {errors.goal && <span className="error">{errors.goal.message}</span>}
        </div>

        <div>
          <label htmlFor="allergies">Аллергии (через запятую):</label>
          <input
            id="allergies"
            {...register('allergies')}
            placeholder="Например: орехи, молоко, яйца"
          />
        </div>

        <div>
          <label htmlFor="preferences">Предпочтения (через запятую):</label>
          <input
            id="preferences"
            {...register('preferences')}
            placeholder="Например: вегетарианские блюда, острые блюда"
          />
        </div>

        <button type="submit">Добавить члена семьи</button>
      </form>

      {/* Отображение добавленных членов семьи */}
      <div className="family-members-list">
        <h3>Добавленные члены семьи:</h3>
        {familyMembers.map(member => (
          <div key={member.id} className="family-member-card">
            <h4>{member.name}</h4>
            <p>Возраст: {member.age} лет</p>
            <p>Вес: {member.weight} кг</p>
            <p>Рост: {member.height} см</p>
            <p>Уровень активности: {member.activityLevel}</p>
            <p>Цель: {member.goal}</p>
            {member.allergies.length > 0 && (
              <p>Аллергии: {member.allergies.join(', ')}</p>
            )}
            {member.preferences.length > 0 && (
              <p>Предпочтения: {member.preferences.join(', ')}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FamilyForm;