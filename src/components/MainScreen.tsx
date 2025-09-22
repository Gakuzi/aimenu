import React, { useState, useEffect } from 'react';
import { Screen } from '../types';
import { auth, db } from '../api/firebase';
import { doc, getDoc, setDoc, collection, orderBy, query, limit, getDocs } from 'firebase/firestore';
import { generateWeeklyMenu } from '../api/gemini';

interface MainScreenProps {
  setScreen: (screen: Screen) => void;
  setSelectedMeal: (meal: any) => void;
}

const MainScreen: React.FC<MainScreenProps> = ({ setScreen, setSelectedMeal }) => {
  const [userData, setUserData] = useState(null);
  const [menuData, setMenuData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [generating, setGenerating] = useState(false);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('menu');

  useEffect(() => {
    const fetchData = async () => {
      if (auth.currentUser) {
        setLoading(true);
        try {
          // Fetch user data
          const userDocRef = doc(db, "users", auth.currentUser.uid);
          const userDocSnap = await getDoc(userDocRef);
          if (userDocSnap.exists()) {
            setUserData(userDocSnap.data());
          } else {
            setError("Не найдены данные пользователя.");
            setScreen('setup');
            return;
          }

          // Fetch latest menu
          const menusCollectionRef = collection(db, `users/${auth.currentUser.uid}/menus`);
          const q = query(menusCollectionRef, orderBy("createdAt", "desc"), limit(1));
          const querySnapshot = await getDocs(q);
          if (!querySnapshot.empty) {
            setMenuData(querySnapshot.docs[0].data());
          }

        } catch (e) {
          console.error("Ошибка загрузки данных:", e);
          setError("Не удалось загрузить данные. Проверьте ваше интернет-соединение.");
        } finally {
          setLoading(false);
        }
      }
    };

    fetchData();
  }, []);

  const handleGenerateMenu = async () => {
    if (!userData || !userData.apiKey) {
        setError("API ключ не найден в настройках.");
        return;
    }
    setGenerating(true);
    setError('');
    try {
        const generatedMenu = await generateWeeklyMenu(userData.apiKey, userData);

        const menuId = new Date().toISOString();
        const menuDocRef = doc(db, `users/${auth.currentUser.uid}/menus`, menuId);
        await setDoc(menuDocRef, { ...generatedMenu, createdAt: new Date() });

        setMenuData(generatedMenu);

    } catch (e) {
        console.error(e);
        setError(e.message || "Произошла неизвестная ошибка при генерации меню.");
    } finally {
        setGenerating(false);
    }
  };

  const handleMealClick = (meal) => {
    if (meal.recipe) {
      setSelectedMeal(meal);
      setScreen('recipe');
    }
  };

  const renderMenu = () => {
    if (!menuData || !menuData.weekMenu) return null;
    return (
        <div id="daily-menu-container">
            {menuData.weekMenu.map((dayData, index) => (
                <div key={index} className="preview-day">
                    <h3 className="preview-day-title">{dayData.day} ({dayData.date})</h3>
                    <div className={`preview-meal ${dayData.meals.breakfast.recipe ? 'clickable' : ''}`} onClick={() => handleMealClick(dayData.meals.breakfast)}>
                        <span className="meal-icon">🍳</span>
                        <span className="meal-name">{dayData.meals.breakfast.name}</span>
                    </div>
                    <div className={`preview-meal ${dayData.meals.lunch.recipe ? 'clickable' : ''}`} onClick={() => handleMealClick(dayData.meals.lunch)}>
                        <span className="meal-icon">🥗</span>
                        <span className="meal-name">{dayData.meals.lunch.name} {dayData.meals.lunch.isLeftover && '(остатки)'}</span>
                    </div>
                    <div className={`preview-meal ${dayData.meals.dinner.recipe ? 'clickable' : ''}`} onClick={() => handleMealClick(dayData.meals.dinner)}>
                        <span className="meal-icon">🍲</span>
                        <span className="meal-name">{dayData.meals.dinner.name}</span>
                    </div>
                </div>
            ))}
        </div>
    );
  }

  const renderContent = () => {
    if (loading) return <div>Загрузка данных...</div>;
    if (error && !generating) return <div style={{color: 'red', textAlign: 'center', padding: '20px'}}>Ошибка: {error}</div>;

    switch (activeTab) {
        case 'menu':
            return (
                <div>
                    {generating ? (
                        <div style={{textAlign: 'center', marginTop: '50px'}}>
                            <h3>Магия в процессе... ✨</h3>
                            <p>Нейросеть подбирает для вас идеальные блюда. Это может занять около минуты.</p>
                            {/* Можно добавить анимацию загрузки */}
                        </div>
                    ) : menuData ? (
                        renderMenu()
                    ) : (
                        <div style={{textAlign: 'center', marginTop: '50px'}}>
                            <p>У вас пока нет меню на эту неделю.</p>
                            <button className="primary-button" onClick={handleGenerateMenu} disabled={generating}>
                                ✨ Сгенерировать меню с помощью AI
                            </button>
                        </div>
                    )}
                </div>
            );
        case 'shopping':
            return <div>Раздел "Список покупок" в разработке.</div>;
        case 'budget':
            return <div>Раздел "Бюджет" в разработке.</div>;
        default:
            return null;
    }
  };


  return (
    <div className="screen" id="main-screen">
      <header className="main-header">
        <h1 id="main-header-title">Меню</h1>
        <button id="open-settings-btn" onClick={() => setScreen('settings')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V15a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51-1z"></path></svg>
        </button>
      </header>
      <div className="content-area">
        {renderContent()}
      </div>
      <nav className="bottom-nav">
        <button className={`nav-button ${activeTab === 'menu' ? 'active' : ''}`} onClick={() => setActiveTab('menu')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            <span>Меню</span>
        </button>
        <button className={`nav-button ${activeTab === 'shopping' ? 'active' : ''}`} onClick={() => setActiveTab('shopping')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
            <span>Покупки</span>
        </button>
        <button className={`nav-button ${activeTab === 'budget' ? 'active' : ''}`} onClick={() => setActiveTab('budget')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>
            <span>Бюджет</span>
        </button>
      </nav>
    </div>
  );
};

export default MainScreen;
