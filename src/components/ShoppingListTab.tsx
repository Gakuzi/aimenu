import React from 'react';
import { useApp } from '../App';

const ShoppingListTab: React.FC = () => {
  const { appState } = useApp();

  if (!appState || appState.shoppingList.length === 0) {
    return <div>Список покупок пуст.</div>;
  }

  return (
    <div>
      <h2>Список покупок</h2>
      {/* TODO: Implement the shopping list view */}
      <pre>{JSON.stringify(appState.shoppingList, null, 2)}</pre>
    </div>
  );
};

export default ShoppingListTab;
