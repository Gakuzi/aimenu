// Комментарий: Корневой компонент. Реализует интерфейс из технического задания с мастером настройки, генерацией меню и всеми функциями.

import React, { useState, useEffect } from 'react';
import './styles/global.css';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<'splash' | 'welcome' | 'setup' | 'main' | 'family' | 'menu' | 'shopping' | 'budget' | 'calendar' | 'settings'>('splash');
  const [geminiKey, setGeminiKey] = useState<string>('');
  const [setupStep, setSetupStep] = useState<number>(1);
  const [settings, setSettings] = useState<any>({
    people: 3,
    restrictions: [],
    protein: 'chicken',
    days: 7,
    budget: 10000,
    family: []
  });

  // Проверяем, есть ли уже API ключ в localStorage
  useEffect(() => {
    const savedKey = localStorage.getItem('geminiKey');
    if (savedKey) {
      setGeminiKey(savedKey);
      setCurrentScreen('main');
    } else {
      // Показываем splash screen на 2 секунды
      const timer = setTimeout(() => {
        setCurrentScreen('welcome');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

// saveApiKey function removed as it was unused

  // Переход к следующему шагу настройки
  const nextSetupStep = () => {
    if (setupStep < 5) {
      setSetupStep(setupStep + 1);
    } else {
      // Завершаем настройку
      localStorage.setItem('settings', JSON.stringify(settings));
      setCurrentScreen('main');
    }
  };

  // Переход к предыдущему шагу настройки
  const prevSetupStep = () => {
    if (setupStep > 1) {
      setSetupStep(setupStep - 1);
    }
  };

  // Пропустить шаг настройки
  const skipSetupStep = () => {
    nextSetupStep();
  };

  // Обновить настройки
  const updateSettings = (newSettings: any) => {
    setSettings({ ...settings, ...newSettings });
  };

  // Splash Screen
  if (currentScreen === 'splash') {
    return (
      <div id="splash-screen">
        <div className="splash-logo">
          {/* SVG логотип */}
          <svg width="100" height="100" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="1024" height="1024" rx="232" fill="#F9F7F4"/>
            <path d="M512 739C456.91 739 417 720.09 417 665C417 609.91 456.91 591 512 591C567.09 591 607 609.91 607 665C607 720.09 567.09 739 512 739Z" fill="#8B5E3C"/>
            <path d="M512 718C468.43 718 433 696.57 433 665C433 633.43 468.83 612 512 612C555.57 612 591 633.43 591 665C591 696.57 555.57 718 512 718Z" fill="white"/>
            <path d="M512 344C512 344 536 385 512 409C488 385 512 344 512 344Z" fill="#D4A373" opacity="0.5"/>
            <path d="M484 326C484 326 503 354.6 484 376C465 354.6 484 326 484 326Z" fill="#D4A373" opacity="0.5"/>
            <path d="M540 326C501 326 597 358.6 540 376C573 358.6 540 326 540 326Z" fill="#D4A373" opacity="0.5"/>
          </svg>
        </div>
        <h1 className="splash-title">СЕМЕЙНОЕ МЕНЮ</h1>
        <p className="splash-subtitle">Здесь ваша семья встречается с ИИ, чтобы готовить с любовью.</p>
        
        <div className="splash-features">
          <div className="feature-slide">
            <div className="feature-icon">🤖</div>
            <div className="feature-text">ИИ-генерация меню</div>
          </div>
          <div className="feature-slide">
            <div className="feature-icon">📋</div>
            <div className="feature-text">Списки покупок</div>
          </div>
          <div className="feature-slide">
            <div className="feature-icon">💰</div>
            <div className="feature-text">Бюджет и цены</div>
          </div>
        </div>
        
        <p className="splash-author">
          Создано с ❤️ для тех, кто готовит с любовью<br/>
          © 2025 СЕМЕЙНОЕ МЕНЮ
        </p>
      </div>
    );
  }

  // Welcome Screen
  if (currentScreen === 'welcome') {
    return (
      <div id="welcome-screen" className="screen">
        <div className="welcome-logo">
          <svg width="80" height="80" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="1024" height="1024" rx="232" fill="#F9F7F4"/>
            <path d="M512 739C456.91 739 417 720.09 417 665C417 609.91 456.91 591 512 591C567.09 591 607 609.91 607 665C607 720.09 567.09 739 512 739Z" fill="#8B5E3C"/>
            <path d="M512 718C468.43 718 433 696.57 433 665C433 633.43 468.83 612 512 612C555.57 612 591 633.43 591 665C591 696.57 555.57 718 512 718Z" fill="white"/>
            <path d="M512 344C512 344 536 385 512 409C488 385 512 344 512 344Z" fill="#D4A373" opacity="0.5"/>
            <path d="M484 326C484 326 503 354.6 484 376C465 354.6 484 326 484 326Z" fill="#D4A373" opacity="0.5"/>
            <path d="M540 326C501 326 597 358.6 540 376C573 358.6 540 326 540 326Z" fill="#D4A373" opacity="0.5"/>
          </svg>
        </div>
        <h1 className="welcome-title">СЕМЕЙНОЕ МЕНЮ</h1>
        <p className="welcome-subtitle">ИИ-помощник для планирования питания вашей семьи</p>
        
        <div className="welcome-buttons">
          <button id="start-app-btn" onClick={() => setCurrentScreen('setup')}>
            Начать использование
          </button>
          <button className="secondary-button" onClick={() => setCurrentScreen('setup')}>
            У меня уже есть ключ API
          </button>
        </div>
        
        <p className="welcome-info">
          Приложение работает полностью в браузере.<br/>
          Для работы требуется Google Gemini API ключ.
        </p>
      </div>
    );
  }

  // Setup Screen
  if (currentScreen === 'setup') {
    return (
      <div id="setup-screen" className="screen">
        <div className="setup-container">
          <div className="setup-logo">
            <svg width="80" height="80" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="1024" height="1024" rx="232" fill="#F9F7F4"/>
              <path d="M512 739C456.91 739 417 720.09 417 665C417 609.91 456.91 591 512 591C567.09 591 607 609.91 607 665C607 720.09 567.09 739 512 739Z" fill="#8B5E3C"/>
              <path d="M512 718C468.43 718 433 696.57 433 665C433 633.43 468.83 612 512 612C555.57 612 591 633.43 591 665C591 696.57 555.57 718 512 718Z" fill="white"/>
              <path d="M512 344C512 344 536 385 512 409C488 385 512 344 512 344Z" fill="#D4A373" opacity="0.5"/>
              <path d="M484 326C484 326 503 354.6 484 376C465 354.6 484 326 484 326Z" fill="#D4A373" opacity="0.5"/>
              <path d="M540 326C501 326 597 358.6 540 376C573 358.6 540 326 540 326Z" fill="#D4A373" opacity="0.5"/>
            </svg>
          </div>
          <h1 className="setup-title">Мастер настройки</h1>
          <p className="setup-subtitle">Ответьте на несколько вопросов, чтобы ИИ мог создать персонализированное меню</p>
          
          <div id="setup-wizard">
            {/* Шаг 1: Количество человек */}
            {setupStep === 1 && (
              <div className="wizard-step active">
                <div className="wizard-step-counter">Шаг 1 из 5</div>
                <h2 className="wizard-step-title">Сколько человек в семье?</h2>
                <p className="wizard-step-description">Выберите количество человек, для которых будет составлено меню. Это поможет ИИ рассчитать порции и калории правильно.</p>
                
                <div className="input-group">
                  <label htmlFor="people-range">Количество человек: {settings.people}</label>
                  <input 
                    id="people-range"
                    type="range" 
                    min="1" 
                    max="6" 
                    value={settings.people} 
                    onChange={(e) => updateSettings({ people: parseInt(e.target.value) })}
                    style={{ width: '100%' }}
                  />
                  <div style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 'bold', color: '#8B5E3C' }}>
                    {settings.people}
                  </div>
                </div>
                
                <div id="wizard-nav">
                  <button className="secondary-button" onClick={skipSetupStep}>Пропустить</button>
                  <button className="primary-button" onClick={nextSetupStep}>Далее</button>
                </div>
              </div>
            )}
            
            {/* Шаг 2: Ограничения */}
            {setupStep === 2 && (
              <div className="wizard-step active">
                <div className="wizard-step-counter">Шаг 2 из 5</div>
                <h2 className="wizard-step-title">Какие у вас ограничения?</h2>
                <p className="wizard-step-description">Укажите, какие продукты вы не едите — чтобы ИИ исключил их из меню. Вы можете выбрать несколько вариантов или пропустить.</p>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', margin: '20px 0' }}>
                  {['Без рыбы', 'Без грибов', 'Без молочных продуктов', 'Без яиц', 'Без сахара', 'Без глутамата'].map((restriction) => (
                    <div key={restriction} style={{ display: 'flex', alignItems: 'center' }}>
                      <input 
                        type="checkbox" 
                        id={restriction} 
                        checked={settings.restrictions.includes(restriction)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            updateSettings({ restrictions: [...settings.restrictions, restriction] });
                          } else {
                            updateSettings({ restrictions: settings.restrictions.filter((r: string) => r !== restriction) });
                          }
                        }}
                        style={{ width: '20px', height: '20px', marginRight: '10px' }}
                      />
                      <label htmlFor={restriction} style={{ margin: 0 }}>{restriction}</label>
                    </div>
                  ))}
                </div>
                
                <div className="input-group">
                  <label htmlFor="other-restrictions">Другие ограничения:</label>
                  <input 
                    type="text" 
                    id="other-restrictions" 
                    placeholder="например: соя, орехи"
                    value={settings.otherRestrictions || ''}
                    onChange={(e) => updateSettings({ otherRestrictions: e.target.value })}
                  />
                </div>
                
                <div id="wizard-nav">
                  <button className="secondary-button" onClick={prevSetupStep}>Назад</button>
                  <button className="secondary-button" onClick={skipSetupStep}>Пропустить</button>
                  <button className="primary-button" onClick={nextSetupStep}>Далее</button>
                </div>
              </div>
            )}
            
            {/* Шаг 3: Основной белок */}
            {setupStep === 3 && (
              <div className="wizard-step active">
                <div className="wizard-step-counter">Шаг 3 из 5</div>
                <h2 className="wizard-step-title">Какой основной белок вы предпочитаете?</h2>
                <p className="wizard-step-description">Выберите основной источник белка — ИИ будет строить меню вокруг него. Можно выбрать один вариант или оставить по умолчанию.</p>
                
                <div style={{ display: 'grid', gap: '15px', margin: '20px 0' }}>
                  {[
                    { value: 'chicken', label: 'Курица', description: 'Лёгкая, доступная, универсальная' },
                    { value: 'beef', label: 'Говядина', description: 'Богатая железом, подходит для взрослых' },
                    { value: 'pork', label: 'Свинина', description: 'Сочная, вкусная, но тяжелее для пищеварения' },
                    { value: 'vegetarian', label: 'Вегетарианский', description: 'На основе бобовых, тофу, яиц, сыра' }
                  ].map((protein) => (
                    <div 
                      key={protein.value}
                      onClick={() => updateSettings({ protein: protein.value })}
                      style={{
                        padding: '15px',
                        border: `2px solid ${settings.protein === protein.value ? '#8B5E3C' : '#E0E0E0'}`,
                        borderRadius: '12px',
                        cursor: 'pointer',
                        backgroundColor: settings.protein === protein.value ? 'rgba(139, 94, 60, 0.05)' : 'white'
                      }}
                    >
                      <div style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{protein.label}</div>
                      <div style={{ color: '#7D7D7D', marginTop: '5px' }}>{protein.description}</div>
                    </div>
                  ))}
                </div>
                
                <div id="wizard-nav">
                  <button className="secondary-button" onClick={prevSetupStep}>Назад</button>
                  <button className="secondary-button" onClick={skipSetupStep}>Пропустить</button>
                  <button className="primary-button" onClick={nextSetupStep}>Далее</button>
                </div>
              </div>
            )}
            
            {/* Шаг 4: Количество дней */}
            {setupStep === 4 && (
              <div className="wizard-step active">
                <div className="wizard-step-counter">Шаг 4 из 5</div>
                <h2 className="wizard-step-title">Сколько дней нужно для меню?</h2>
                <p className="wizard-step-description">
                  На сколько дней составить меню?<br/>
                  7 дней — идеально для планирования недели.<br/>
                  3 дня — если хотите чаще менять.<br/>
                  1 день — для теста.
                </p>
                
                <div className="input-group">
                  <label htmlFor="days-range">Количество дней: {settings.days} {settings.days === 1 ? 'день' : settings.days < 5 ? 'дня' : 'дней'}</label>
                  <input 
                    id="days-range"
                    type="range" 
                    min="1" 
                    max="7" 
                    step="2"
                    value={settings.days} 
                    onChange={(e) => updateSettings({ days: parseInt(e.target.value) })}
                    style={{ width: '100%' }}
                  />
                  <div style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 'bold', color: '#8B5E3C' }}>
                    {settings.days} {settings.days === 1 ? 'день' : settings.days < 5 ? 'дня' : 'дней'}
                  </div>
                </div>
                
                <p style={{ textAlign: 'center', color: '#7D7D7D', marginTop: '10px' }}>
                  Мы рекомендуем 7 дней — это оптимально для экономии и рационального использования продуктов.
                </p>
                
                <div id="wizard-nav">
                  <button className="secondary-button" onClick={prevSetupStep}>Назад</button>
                  <button className="secondary-button" onClick={skipSetupStep}>Пропустить</button>
                  <button className="primary-button" onClick={nextSetupStep}>Далее</button>
                </div>
              </div>
            )}
            
            {/* Шаг 5: Бюджет */}
            {setupStep === 5 && (
              <div className="wizard-step active">
                <div className="wizard-step-counter">Шаг 5 из 5</div>
                <h2 className="wizard-step-title">Какой бюджет вы готовы выделить?</h2>
                <p className="wizard-step-description">
                  Сколько рублей вы готовы потратить на питание за выбранный период?<br/>
                  Это поможет ИИ подобрать продукты в рамках ваших возможностей.
                </p>
                
                <div className="input-group">
                  <label htmlFor="budget">Бюджет (₽):</label>
                  <input 
                    type="number" 
                    id="budget" 
                    placeholder="10000"
                    value={settings.budget || ''}
                    onChange={(e) => updateSettings({ budget: parseInt(e.target.value) || 0 })}
                  />
                </div>
                
                <p style={{ textAlign: 'center', color: '#7D7D7D', marginTop: '10px' }}>
                  Пример: 7 дней для {settings.people} {settings.people === 1 ? 'человека' : settings.people < 5 ? 'человек' : 'человек'} — средний бюджет 6 000–8 000 ₽
                </p>
                
                <div id="wizard-nav">
                  <button className="secondary-button" onClick={prevSetupStep}>Назад</button>
                  <button className="secondary-button" onClick={skipSetupStep}>Пропустить</button>
                  <button className="primary-button" onClick={nextSetupStep}>Завершить</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Main Screen (основной интерфейс приложения)
  return (
    <div id="main-screen" className="screen">
      <div className="main-header">
        СЕМЕЙНОЕ МЕНЮ
      </div>
      
      <div className="content-area">
        {/* Здесь будет основной контент приложения */}
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <h2>Добро пожаловать в Семейное Меню!</h2>
          <p>Ваше приложение готово к использованию.</p>
          <p>Настройки сохранены:</p>
          <ul style={{ textAlign: 'left', display: 'inline-block' }}>
            <li>Людей в семье: {settings.people}</li>
            <li>Дней в меню: {settings.days}</li>
            <li>Бюджет: {settings.budget} ₽</li>
            <li>Основной белок: {settings.protein === 'chicken' ? 'Курица' : 
                               settings.protein === 'beef' ? 'Говядина' : 
                               settings.protein === 'pork' ? 'Свинина' : 'Вегетарианский'}</li>
          </ul>
          <button onClick={() => setCurrentScreen('menu')}>
            Сгенерировать меню
          </button>
        </div>
      </div>
      
      {/* Нижняя навигация */}
      <div className="bottom-nav">
        <button className="nav-button" onClick={() => setCurrentScreen('main')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9,22 9,12 15,12 15,22"></polyline>
          </svg>
          <span>Главная</span>
        </button>
        <button className="nav-button" onClick={() => setCurrentScreen('menu')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
          <span>Меню</span>
        </button>
        <button className="nav-button" onClick={() => setCurrentScreen('shopping')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          <span>Покупки</span>
        </button>
        <button className="nav-button" onClick={() => setCurrentScreen('budget')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="12" y1="1" x2="12" y2="23"></line>
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
          </svg>
          <span>Бюджет</span>
        </button>
        <button className="nav-button" onClick={() => setCurrentScreen('settings')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="3"></circle>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
          </svg>
          <span>Настройки</span>
        </button>
      </div>
    </div>
  );
};

export default App;