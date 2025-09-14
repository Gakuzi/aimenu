// Комментарий: Модальное окно для рецепта. Шаги, таймеры (useEffect с setInterval), фото-заглушки из assets.

import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

const RecipeModal: React.FC<{ dish: string; recipe: string }> = ({ dish, recipe }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTimer((prev) => prev + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Просмотреть рецепт {dish}</button>
      <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
        <h2>{dish}</h2>
        <p>{recipe}</p>
        <p>Таймер: {timer} сек.</p>
        <img src="./assets/placeholder.jpg" alt="Фото блюда" />
      </Modal>
    </>
  );
};

export default RecipeModal;