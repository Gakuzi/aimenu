import React from 'react';
import { Screen } from '../types';

interface SplashScreenProps {
  setScreen?: (screen: Screen) => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ setScreen }) => {
  // The button is removed as the transition is now handled by App.tsx's useEffect
  return (
    <div className="screen" id="splash-screen">
        <svg className="splash-logo" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="45" fill="#F0E7DD"></circle><path d="M50,10 A40,40 0 0,1 90,50" fill="none" stroke="#8B5E3C" strokeWidth="8"></path><path d="M50,90 A40,40 0 0,1 10,50" fill="none" stroke="#D4A373" strokeWidth="8"></path><circle cx="50" cy="50" r="20" fill="#fff"></circle><path d="M50 38 C 55 42, 55 48, 50 52 S 45 58, 50 62" stroke="#5E7A6E" strokeWidth="4" fill="none" strokeLinecap="round"></path></svg>
        <h1 className="splash-title">СЕМЕЙНОЕ МЕНЮ</h1>
        <div className="splash-features">
            <div className="feature-slide">
                <div className="feature-icon">🗓️</div>
                <div className="feature-text">Планируйте меню на неделю</div>
            </div>
            <div className="feature-slide">
                <div className="feature-icon">🛒</div>
                <div className="feature-text">Составляйте умный список покупок</div>
            </div>
            <div className="feature-slide">
                <div className="feature-icon">👩‍🍳</div>
                <div className="feature-text">Готовьте легко по шагам</div>
            </div>
        </div>
        <div className="splash-author">
          Автор: Климов Евгений<br/>
          <a href="https://t.me/eklimov" target="_blank" rel="noopener noreferrer">Telegram: @eklimov</a>
        </div>
    </div>
  );
};

export default SplashScreen;
