import React from 'react';
import { useApp } from '../App';

const MenuTab: React.FC = () => {
  const { appState } = useApp();

  if (!appState || appState.menu.length === 0) {
    return <div>Меню не сгенерировано.</div>;
  }

  return (
    <div>
      <h2>Меню на неделю</h2>
      {/* TODO: Implement the daily menu view */}
      <pre>{JSON.stringify(appState.menu, null, 2)}</pre>
    </div>
  );
};

export default MenuTab;
