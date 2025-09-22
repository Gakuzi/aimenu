import React from 'react';
import { Screen } from '../types';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from '../api/firebase';

interface WelcomeScreenProps {
  setScreen: (screen: Screen) => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ setScreen }) => {
  const handleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      // Успешный вход обработается onAuthStateChanged в App.tsx,
      // который и сменит экран. Прямой вызов setScreen не требуется.
    } catch (error) {
      console.error("Ошибка входа через Google:", error);
      // В будущем здесь будет показано уведомление для пользователя.
    }
  };

  return (
    <div className="screen" id="welcome-screen">
        <div className="setup-container">
            <svg className="setup-logo" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="45" fill="#F0E7DD"></circle><path d="M50,10 A40,40 0 0,1 90,50" fill="none" stroke="#8B5E3C" strokeWidth="8"></path><path d="M50,90 A40,40 0 0,1 10,50" fill="none" stroke="#D4A373" strokeWidth="8"></path><circle cx="50" cy="50" r="20" fill="#fff"></circle><path d="M50 38 C 55 42, 55 48, 50 52 S 45 58, 50 62" stroke="#5E7A6E" strokeWidth="4" fill="none" strokeLinecap="round"></path></svg>
            <h1 className="setup-title">Добро пожаловать!</h1>
            <p className="setup-subtitle">Войдите, чтобы сохранять и синхронизировать ваше меню между устройствами.</p>
            <div className="welcome-buttons">
                <button className="primary-button" id="google-signin-btn" onClick={handleSignIn}>
                    <svg style={{width:'20px',height:'20px',verticalAlign:'middle',marginRight:'10px'}} viewBox="0 0 24 24"><path fill="white" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"></path><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"></path><path fill="#4A90E2" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"></path><path fill="#FBBC05" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"></path><path fill="none" d="M1 1h22v22H1z"></path></svg>
                    Войти через Google
                </button>
            </div>
            <p className="welcome-info">Вход позволит вам безопасно хранить данные в облаке.</p>
        </div>
    </div>
  );
};

export default WelcomeScreen;
