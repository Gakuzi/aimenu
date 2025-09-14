// Комментарий: Форма для ввода данных о семье. Использует react-hook-form для валидации, dispatch из Context для обновления состояния.

import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AppContext } from '../context/AppContext';
import { FamilyMember } from '../types';

const FamilyForm: React.FC = () => {
  const { dispatch } = useContext(AppContext)!;
  const { register, handleSubmit } = useForm<{ members: FamilyMember[] }>();

  const onSubmit = (data: { members: FamilyMember[] }) => {
    dispatch({ type: 'UPDATE_FAMILY', payload: data.members });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Поля для имени, возраста, пола и т.д. */}
      <input {...register('members.0.name')} placeholder="Имя" />
      {/* Добавьте поля для других членов */}
      <button type="submit">Сохранить</button>
    </form>
  );
};

export default FamilyForm;