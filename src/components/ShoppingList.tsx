// Комментарий: Компонент для отображения и управления списком покупок. Содержит функции для отметки купленных товаров, частичных покупок, экспорта в PDF и поиска. Использует react-query для загрузки списка покупок.

import React, { useState, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useAppContext } from '../context/AppContext';
import { ShoppingListItem } from '../types';
import { geminiService } from '../services/geminiService';
import html2pdf from 'html2pdf.js';

const ShoppingList: React.FC = () => {
  const { menu, dispatch } = useAppContext();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [partialQuantity, setPartialQuantity] = useState<{[key: string]: number}>({});

  // Генерация списка покупок
  const generateShoppingList = async () => {
    try {
      const list = await geminiService.generateShoppingList(menu);
      dispatch({ type: 'SET_SHOPPING_LIST', payload: list });
      return list;
    } catch (error) {
      console.error('Ошибка при генерации списка покупок:', error);
      throw error;
    }
  };

  // Используем react-query для управления состоянием загрузки
  const { data: list, isLoading, error, refetch } = useQuery<ShoppingListItem[], Error>({
    queryKey: ['shoppingList', menu],
    queryFn: generateShoppingList,
    enabled: menu.length > 0, // Запускать только если есть меню
  });

  // Фильтрация списка покупок
  const filteredList = useMemo(() => {
    if (!list) return [];
    
    return list.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [list, searchTerm, selectedCategory]);

  // Получение уникальных категорий
  const categories = useMemo(() => {
    if (!list) return [];
    const uniqueCategories = [...new Set(list.map(item => item.category))];
    return ['all', ...uniqueCategories];
  }, [list]);

  // Обработка отметки купленного товара
  const handleTogglePurchased = (id: string) => {
    if (!list) return;
    
    const updatedList = list.map(item => 
      item.id === id ? { ...item, purchased: !item.purchased } : item
    );
    
    dispatch({ type: 'SET_SHOPPING_LIST', payload: updatedList });
  };

  // Обработка частичной покупки
  const handlePartialPurchase = (id: string, quantity: number) => {
    if (!list) return;
    
    const updatedList = list.map(item => {
      if (item.id === id) {
        const newPartialQuantities = {
          ...item.partialQuantities,
          [Date.now()]: quantity
        };
        
        // Проверяем, куплено ли всё
        const totalPurchased = Object.values(newPartialQuantities).reduce((sum: number, q: unknown) => sum + (typeof q === "number" ? q : 0), 0);
        const purchased = totalPurchased >= item.quantity;
        
        return {
          ...item,
          partialQuantities: newPartialQuantities,
          purchased
        };
      }
      return item;
    });
    
    dispatch({ type: 'SET_SHOPPING_LIST', payload: updatedList });
  };

  // Экспорт в PDF
  const handleExportToPDF = () => {
    const element = document.getElementById('shopping-list-export');
    if (!element) return;
    
    const options = {
      margin: 10,
      filename: 'shopping-list.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    
    html2pdf().set(options).from(element).save();
  };

  // Общая стоимость
  const totalCost = useMemo(() => {
    if (!list) return 0;
    return list.reduce((sum: number, item) => sum + item.price, 0);
  }, [list]);

  // Купленная стоимость
  const purchasedCost = useMemo(() => {
    if (!list) return 0;
    return list
      .filter(item => item.purchased)
      .reduce((sum: number, item) => sum + item.price, 0);
  }, [list]);

  return (
    <div className="shopping-list">
      <h2>Список покупок</h2>
      
      <div className="shopping-list-controls">
        <div className="search-container">
          <input
            type="text"
            placeholder="Поиск по названию..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="category-filter">
          <label htmlFor="category-select">Категория:</label>
          <select 
            id="category-select"
            value={selectedCategory} 
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category === 'all' ? 'Все категории' : category}
              </option>
            ))}
          </select>
        </div>
        
        <button onClick={handleExportToPDF} disabled={!list || list.length === 0}>
          Экспорт в PDF
        </button>
        
        <button onClick={() => refetch()} disabled={isLoading || menu.length === 0}>
          Обновить список
        </button>
      </div>
      
      {menu.length === 0 && (
        <p className="warning">Пожалуйста, сгенерируйте меню перед созданием списка покупок</p>
      )}
      
      {isLoading ? (
        <div className="loading">
          <p>Генерируем список покупок...</p>
        </div>
      ) : error ? (
        <div className="error">
          <p>Ошибка при генерации списка покупок: {error.message}</p>
          <button onClick={() => refetch()}>Попробовать снова</button>
        </div>
      ) : list && list.length > 0 ? (
        <>
          <div className="shopping-list-summary">
            <p>Общая стоимость: <strong>{totalCost} руб.</strong></p>
            <p>Куплено на: <strong>{purchasedCost} руб.</strong></p>
            <p>Осталось купить на: <strong>{totalCost - purchasedCost} руб.</strong></p>
          </div>
          
          <div className="shopping-list-items">
            {filteredList.map(item => (
              <div 
                key={item.id} 
                className={`shopping-item ${item.purchased ? 'purchased' : ''}`}
              >
                <div className="item-info">
                  <h4>{item.name}</h4>
                  <p>{item.quantity} {item.unit} - {item.price} руб.</p>
                  <p className="category">Категория: {item.category}</p>
                  
                  {!item.purchased && (
                    <div className="partial-purchase">
                      <input
                        type="number"
                        min="0"
                        max={item.quantity}
                        step="0.1"
                        placeholder="Частичная покупка"
                        value={partialQuantity[item.id] || ''}
                        onChange={(e) => setPartialQuantity({
                          ...partialQuantity,
                          [item.id]: Number(e.target.value)
                        })}
                      />
                      <button 
                        onClick={() => {
                          if (partialQuantity[item.id]) {
                            handlePartialPurchase(item.id, partialQuantity[item.id]);
                            setPartialQuantity({
                              ...partialQuantity,
                              [item.id]: 0
                            });
                          }
                        }}
                        disabled={!partialQuantity[item.id] || partialQuantity[item.id] <= 0}
                      >
                        Купить частично
                      </button>
                    </div>
                  )}
                </div>
                
                <button 
                  className={`toggle-purchased ${item.purchased ? 'purchased' : ''}`}
                  onClick={() => handleTogglePurchased(item.id)}
                >
                  {item.purchased ? 'Куплено' : 'Отметить купленным'}
                </button>
              </div>
            ))}
          </div>
          
          {/* Скрытый элемент для экспорта в PDF */}
          <div id="shopping-list-export" style={{ display: 'none' }}>
            <h1>Список покупок</h1>
            <h2>Общая стоимость: {totalCost} руб.</h2>
            <h2>Куплено на: {purchasedCost} руб.</h2>
            <h2>Осталось купить на: {totalCost - purchasedCost} руб.</h2>
            
            {categories.filter(cat => cat !== 'all').map(category => {
              const categoryItems = list.filter(item => item.category === category);
              if (categoryItems.length === 0) return null;
              
              return (
                <div key={category}>
                  <h3>{category}</h3>
                  <ul>
                    {categoryItems.map(item => (
                      <li key={item.id}>
                        {item.name} - {item.quantity} {item.unit} - {item.price} руб.
                        {item.purchased && ' (Куплено)'}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <p>Список покупок пуст</p>
      )}
    </div>
  );
};

export default ShoppingList;