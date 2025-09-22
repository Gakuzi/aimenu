import React from 'react';
import { useApp } from '../App';

const BudgetTab: React.FC = () => {
  const { appState } = useApp();

  if (!appState) {
    return <div>Бюджет не доступен.</div>;
  }

  return (
    <div>
      <h2>Бюджет</h2>
      {/* TODO: Implement the budget view */}
      <pre>{JSON.stringify(appState.settings.totalBudget, null, 2)}</pre>
    </div>
  );
};

export default BudgetTab;
