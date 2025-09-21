import React, { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';
import WelcomeScreen from './components/WelcomeScreen';
import SetupWizard from './components/SetupWizard';
import MainScreen from './components/MainScreen';
import SettingsScreen from './components/SettingsScreen';
import RecipeScreen from './components/RecipeScreen';
import Modal from './components/Modal';
import Notification from './components/Notification';
import { auth, db } from './api/firebase';
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { Screen } from './types';

const App = () => {
  const [screen, setScreen] = useState<Screen>('splash');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [modal, setModal] = useState({ show: false, content: null });
  const [notification, setNotification] = useState({ show: false, message: '', type: 'success' });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        const userDocRef = doc(db, "users", user.uid);
        const userDocSnap = await getDoc(userDocRef);
        if (userDocSnap.exists() && userDocSnap.data().setupComplete) {
          setScreen('main');
        } else {
          setScreen('setup');
        }
      } else {
        setUser(null);
        setScreen('welcome');
      }
      setLoading(false);
    });

    // Splash screen logic
    const splashTimer = setTimeout(() => {
        if (screen === 'splash') {
           // The onAuthStateChanged will handle the screen transition
           // so we just need to ensure the splash doesn't show forever
           // if firebase auth is slow.
           // If after 3s we are still loading, we might go to welcome.
           if(loading) setScreen('welcome');
        }
    }, 3000);

    return () => {
        unsubscribe();
        clearTimeout(splashTimer);
    };
  }, []);


  const renderScreen = () => {
    if (loading) {
      return <SplashScreen />;
    }

    switch (screen) {
      case 'welcome':
        return <WelcomeScreen setScreen={setScreen} />;
      case 'setup':
        return <SetupWizard setScreen={setScreen} />;
      case 'main':
        return <MainScreen setScreen={setScreen} setSelectedMeal={setSelectedMeal} />;
      case 'settings':
        return <SettingsScreen setScreen={setScreen} />;
      case 'recipe':
        return <RecipeScreen setScreen={setScreen} meal={selectedMeal} />;
      default:
        return <WelcomeScreen setScreen={setScreen} />;
    }
  };

  const showNotification = (message, type = 'success') => {
    setNotification({ show: true, message, type });
  };

  return (
    <div id="app">
        {renderScreen()}

        <Modal show={modal.show} onClose={() => setModal({ ...modal, show: false })}>
            {modal.content}
        </Modal>

        {notification.show && (
            <Notification
                message={notification.message}
                type={notification.type}
                onClose={() => setNotification({ ...notification, show: false })}
            />
        )}

        <audio id="notification-sound" src="data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YU9vT18="></audio>
    </div>
  );
};

export default App;
