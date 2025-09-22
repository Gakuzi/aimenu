// This file has been modified by the AI.
import React, { useState } from 'react';
import { useApp } from '../App';
import { Screen } from '../types';
import { FaCalendarAlt, FaShoppingCart, FaChartPie, FaCog } from 'react-icons/fa';
import { generateWeeklyMenu } from '../api/gemini';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../api/firebase';

import MenuTab from './MenuTab';
import ShoppingListTab from './ShoppingListTab';
import BudgetTab from './BudgetTab';

interface MainScreenProps {
  setScreen: (screen: Screen) => void;
}

const MainScreen: React.FC<MainScreenProps> = ({ setScreen }) => {
  const { appState, setAppState, user, showNotification } = useApp();
  const [activeTab, setActiveTab] = useState('menu');
  const [generating, setGenerating] = useState(false);

  const handleGenerateMenu = async () => {
    if (!appState?.settings.apiKey) {
      showNotification('API ключ не найден в настройках.', 'error');
      setScreen('settings'); // Redirect to settings to set API key
      return;
    }

    setGenerating(true);
    showNotification('Генерируем меню...', 'loading');

    try {
      const prompt = `Сгенерируй меню на ${appState.settings.menuDuration} дней для семьи: ${JSON.stringify(appState.settings.family)}. Предпочтения: ${appState.settings.preferences}. Бюджет: ${appState.settings.totalBudget}. Кухня: ${appState.settings.cuisine}. Сложность: ${appState.settings.difficulty}.`;
      const result = await generateContent(prompt);
      const parsedResult = JSON.parse(result);

      if (parsedResult.error) {
        throw new Error(parsedResult.error);
      }

      const newAppState = {
        ...appState,
        menu: parsedResult.menu || [],
        recipes: parsedResult.recipes || {},
        shoppingList: parsedResult.shoppingList || [],
        timestamp: Date.now(),
      };

      setAppState(newAppState);

      if (user) {
        await setDoc(doc(db, "user-data", user.uid), newAppState);
      }
      showNotification('Меню успешно сгенерировано!', 'success');

    } catch (error: any) {
      console.error("Ошибка генерации меню:", error);
      showNotification(`Ошибка генерации меню: ${error.message || error}`, 'error');
    } finally {
      setGenerating(false);
    }
  };

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
                <button className="primary-button" onClick={handleGenerateMenu} disabled={generating}>
                    {generating ? 'Генерация...' : '✨ Сгенерировать меню с помощью AI'}
                </button>
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
