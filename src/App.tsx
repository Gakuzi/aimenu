import React, { useState, useEffect, createContext, useContext } from 'react';
import { auth, db } from './api/firebase';
import { onAuthStateChanged, User } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

import { Screen, AppState, UserSettings } from './types';

import SplashScreen from './components/SplashScreen';
import WelcomeScreen from './components/WelcomeScreen';
import SetupWizard from './components/SetupWizard';
import MainScreen from './components/MainScreen';
import RecipeScreen from './components/RecipeScreen';
import SettingsScreen from './components/SettingsScreen';

// --- Context for State Management ---
interface AppContextType {
  appState: AppState | null;
  setAppState: React.Dispatch<React.SetStateAction<AppState | null>>;
  user: User | null;
  showNotification: (message: string, type?: 'success' | 'error' | 'loading') => void;
}

export const AppContext = createContext<AppContextType | null>(null);
export const useApp = () => useContext(AppContext)!;

// --- Default State ---
const getDefaultState = (): AppState => ({
  settings: {
    apiKey: null,
    family: [],
    preferences: "Без рыбы, без грибов",
    menuDuration: 7,
    totalBudget: 15000,
    cuisine: "Любая",
    difficulty: "Любая",
  },
  menu: [],
  recipes: {},
  shoppingList: [],
  cookedMeals: {},
  timestamp: null,
});

// --- Main App Component ---
const App: React.FC = () => {
  const [screen, setScreen] = useState<Screen>('splash');
  const [user, setUser] = useState<User | null>(null);
  const [appState, setAppState] = useState<AppState | null>(null);
  const [loading, setLoading] = useState(true);
  const [notification, setNotification] = useState({ show: false, message: '', type: 'success' });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
        const userDocRef = doc(db, "user-data", firebaseUser.uid);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          setAppState(userDocSnap.data() as AppState);
          setScreen('main');
        } else {
          setAppState(getDefaultState());
          setScreen('setup');
        }
      } else {
        setUser(null);
        setAppState(null);
        setScreen('welcome');
      }
      setLoading(false);
    });

    const splashTimer = setTimeout(() => {
      if (loading) {
        setScreen('welcome');
        setLoading(false);
      }
    }, 3000);

    return () => {
      unsubscribe();
      clearTimeout(splashTimer);
    };
  }, []);

  const showNotification = (message: string, type: 'success' | 'error' | 'loading' = 'success') => {
    setNotification({ show: true, message, type });
  };

  const renderContent = () => {
    if (loading) {
      return <SplashScreen />;
    }

    switch (screen) {
      case 'welcome':
        return <WelcomeScreen setScreen={setScreen} />;
      case 'setup':
        return <SetupWizard setScreen={setScreen} />;
      case 'main':
        return <MainScreen setScreen={setScreen} />;
      case 'settings':
        return <SettingsScreen setScreen={setScreen} />;
      // case 'recipe':
      //   return <RecipeScreen setScreen={setScreen} meal={selectedMeal} />;
      default:
        return <WelcomeScreen setScreen={setScreen} />;
    }
  };

  return (
    <AppContext.Provider value={{ appState, setAppState, user, showNotification }}>
      <div id="app">
        {renderContent()}
        {/* TODO: Re-implement Modal and Notification components */}
      </div>
    </AppContext.Provider>
  );
};

export default App;
