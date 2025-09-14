// Комментарий: Список покупок. Агрегирует ингредиенты из меню (lodash для groupBy), чекбоксы для отметки, экспорт в PDF с html2pdf.js, цены из assets/prices.json.

import React, { useContext, useMemo } from 'react';
import _ from 'lodash';
import html2pdf from 'html2pdf.js';
import { AppContext } from '../context/AppContext';
import prices from '../assets/prices.json';  // JSON с ценами

const ShoppingList: React.FC = () => {
  const { state } = useContext(AppContext)!;

  const aggregatedList = useMemo(() => {
    return _.chain(state.menu)
      .flatMap('ingredients')
      .groupBy('name')
      .map((group: any[], name: string) => ({
        name,
        quantity: _.sumBy(group, 'quantity'),
        price: (prices as any)[name] || 0,
        checked: false,
      }))
      .value();
  }, [state.menu]);

  const handleExport = () => {
    const element = document.getElementById('shopping-list');
    if (element) {
      html2pdf().from(element).save('shopping-list.pdf');
    }
  };

  return (
    <div id="shopping-list">
      <ul>
        {aggregatedList.map((item: any) => (
          <li key={item.name}>
            <label>
              <input type="checkbox" onChange={() => {/* update checked */}} />
              <span>{item.name} - {item.quantity} ({item.price * item.quantity} руб.)</span>
            </label>
          </li>
        ))}
      </ul>
      <button onClick={handleExport}>Экспорт в PDF</button>
    </div>
  );
};

export default ShoppingList;