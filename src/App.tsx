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
    console.log("Setting up onAuthStateChanged listener...");
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      console.log("onAuthStateChanged triggered.");
      if (user) {
        console.log("User is logged in:", user.uid);
        setUser(user);
        try {
          const userDocRef = doc(db, "users", user.uid);
          console.log("Attempting to get user document from Firestore...");
          const userDocSnap = await getDoc(userDocRef);
          console.log("Successfully got response from Firestore.");

          if (userDocSnap.exists()) {
            console.log("User document exists.", userDocSnap.data());
            if (userDocSnap.data().setupComplete) {
              console.log("Setup is complete, navigating to main screen.");
              setScreen('main');
            } else {
              console.log("Setup is not complete, navigating to setup screen.");
              setScreen('setup');
            }
          } else {
            console.log("User document does not exist, navigating to setup screen.");
            setScreen('setup');
          }
        } catch (error) {
          console.error("Error getting user document from Firestore:", error);
          // Если произошла ошибка (например, из-за правил безопасности), 
          // все равно переводим на экран настроек, чтобы пользователь мог продолжить.
          setScreen('setup');
        }
      } else {
        console.log("User is logged out, navigating to welcome screen.");
        setUser(null);
        setScreen('welcome');
      }
      console.log("Setting loading to false.");
      setLoading(false);
    });

    // Splash screen logic
    const splashTimer = setTimeout(() => {
        if (loading) { // If we are still loading after 3 seconds
           setScreen('welcome');
           setLoading(false);
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