// Комментарий: Компонент для генерации меню. Использует useGeminiApi хук, отображает меню в таблице, добавляет drag-and-drop с react-dnd для редактирования.

import React, { useContext } from 'react';
import { useGeminiApi } from '../hooks/useGeminiApi';
import { AppContext } from '../context/AppContext';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const MenuGenerator: React.FC = () => {
  const { state, dispatch } = useContext(AppContext)!;
  const { data: menu, isLoading, error } = useGeminiApi(state.family);  // Запрос к Gemini

  if (isLoading) return <p>Генерация меню...</p>;
  if (error) return <p>Ошибка: {error.message}</p>;

  dispatch({ type: 'SET_MENU', payload: menu });

  return (
    <DndProvider backend={HTML5Backend}>
      <table>
        {/* Рендер меню с draggable блюдами */}
        {menu?.map((item) => (
          <tr key={item.dish}>
            <td>{item.day}</td>
            <td>{item.meal}</td>
            <td>{item.dish}</td>
          </tr>
        ))}
      </table>
    </DndProvider>
  );
};

export default MenuGenerator;