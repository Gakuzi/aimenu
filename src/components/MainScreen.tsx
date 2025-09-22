import React, { useState } from 'react';
import { useApp } from '../App';
import { Screen } from '../types';
import { FaCalendarAlt, FaShoppingCart, FaChartPie, FaCog } from 'react-icons/fa';

import MenuTab from './MenuTab';
import ShoppingListTab from './ShoppingListTab';
import BudgetTab from './BudgetTab';

interface MainScreenProps {
  setScreen: (screen: Screen) => void;
}

const MainScreen: React.FC<MainScreenProps> = ({ setScreen }) => {
  const { appState, user } = useApp();
  const [activeTab, setActiveTab] = useState('menu');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'menu':
        return <MenuTab />;
      case 'shopping':
        return <ShoppingListTab />;
      case 'budget':
        return <BudgetTab />;
      default:
        return null;
    }
  };

  const getTitle = () => {
      switch (activeTab) {
          case 'menu': return 'Меню на неделю';
          case 'shopping': return 'Список покупок';
          case 'budget': return 'Бюджет';
          default: return 'Семейное меню';
      }
  }

  return (
    <div className="screen" id="main-screen">
      <header className="main-header">
        <h1 id="main-header-title">{getTitle()}</h1>
        <button id="open-settings-btn" onClick={() => setScreen('settings')}>
          {user?.photoURL ? (
            <img src={user.photoURL} alt="User settings" className="header-avatar" />
          ) : (
            <FaCog />
          )}
        </button>
      </header>

      <div className="content-area">
        {appState?.menu.length === 0 ? (
            <div className="empty-state">
                <h2>Меню еще не создано</h2>
                <p>Перейдите в настройки, чтобы сгенерировать ваше первое меню.</p>
                <button className="primary-button" onClick={() => setScreen('settings')}>Перейти в настройки</button>
            </div>
        ) : (
            renderTabContent()
        )}
      </div>

      <nav className="bottom-nav">
        <button className={`nav-button ${activeTab === 'menu' ? 'active' : ''}`} onClick={() => setActiveTab('menu')}>
          <FaCalendarAlt />
          <span>Меню</span>
        </button>
        <button className={`nav-button ${activeTab === 'shopping' ? 'active' : ''}`} onClick={() => setActiveTab('shopping')}>
          <FaShoppingCart />
          <span>Покупки</span>
        </button>
        <button className={`nav-button ${activeTab === 'budget' ? 'active' : ''}`} onClick={() => setActiveTab('budget')}>
          <FaChartPie />
          <span>Бюджет</span>
        </button>
      </nav>
    </div>
  );
};

export default MainScreen;