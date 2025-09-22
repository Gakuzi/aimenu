import './src/index.css';
import { GoogleGenAI, Type } from "@google/genai";
import { db, auth } from './src/firebase-config.js';
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { getDoc, setDoc, doc } from "firebase/firestore";

const app = {
    version: '1.4.0',
    changelog: {
        '1.4.0': [
            'Улучшена синхронизация: добавлена кнопка "Поделиться" для отправки данных через мессенджеры.',
            'Добавлена история изменений приложения, чтобы вы всегда были в курсе новшеств.',
            'Интерфейс настроек стал более информативным и удобным.'
        ],
        '1.3.0': [
            'Добавлен экран предпросмотра меню перед финальным сохранением.',
            'Полностью переработана и исправлена логика перегенерации отдельных блюд и дней.',
            'Заменена иконка перегенерации на более современную.',
            'В список покупок добавлено отображение остатка, необходимого к покупке.',
            'При отметке блюда как "приготовленное" ингредиенты списываются из запасов.',
            'На экран бюджета добавлена диаграмма для визуализации трат за последние 7 дней.',
        ],
        '1.2.0': [
            'Добавлена информация об авторе и версии приложения.',
            'При перегенерации меню теперь учитываются уже купленные продукты.',
            'Улучшена логика обработки остатков блюд в меню, добавлена кнопка регенерации.',
            'Обновлен дизайн кнопки полной перегенерации.',
            'Улучшена проверка API ключа при запуске приложения.',
        ],
        '1.1.0': [
            'Добавлена анимированная заставка-презентация.',
            'Реализованы расширенные настройки (кухня, сложность, время).',
            'Улучшен ИИ для генерации списка покупок с учетом "магазинных" единиц.',
            'В шагах рецепта теперь отображается количество ингредиентов.',
            'Добавлена функция "Попросить купить" недостающие продукты.',
        ],
        '1.0.0': ['Первоначальный выпуск.'],
    },
    state: {
        settings: {
            apiKey: null,
            family: [],
            preferences: "Без рыбы, без грибов",
            menuDuration: 7,
            totalBudget: 10000,
            cuisine: "Любая",
            difficulty: "Любая",
        },
        menu: [],
        recipes: {},
        shoppingList: [],
        cookedMeals: {},
        timestamp: null,
        currentDayIndex: 0,
    },

    tempState: null,
    dom: {},
    wizard: {
        currentStep: 1,
        totalSteps: 3,
    },
    currentRecipe: {
        id: null,
        step: 0,
    },
    timer: {
        interval: null,
        timeLeft: 0,
        initialTime: 0,
        isRunning: false,
    },
    currentUser: null,
    ai: null,

    init() {
        this.cacheDom();
        this.addEventListeners();

        window.firebaseServices = {
            auth,
            provider: new GoogleAuthProvider(),
            firestore: db,
            signInWithPopup,
            onAuthStateChanged,
            signOut,
            doc,
            setDoc,
            getDoc
        };

        this.loadState().then(() => {
            this.setupAuthListener();
        });
    },

    cacheDom() {
        // This method remains largely the same, as it depends on the HTML structure
        // which we are keeping for now.
        this.dom = {
            splashScreen: document.getElementById('splash-screen'),
            startAppBtn: document.getElementById('start-app-btn'),
            screens: document.querySelectorAll('.screen'),
            welcomeScreen: document.getElementById('welcome-screen'),
            googleSigninBtn: document.getElementById('google-signin-btn'),
            setupScreen: document.getElementById('setup-screen'),
            mainScreen: document.getElementById('main-screen'),
            recipeScreen: document.getElementById('recipe-screen'),
            settingsScreen: document.getElementById('settings-screen'),
            previewScreen: document.getElementById('preview-screen'),

            setupWizard: document.getElementById('setup-wizard'),
            wizardSteps: document.querySelectorAll('.wizard-step'),
            wizardNav: document.getElementById('wizard-nav'),
            wizardBackBtn: document.getElementById('wizard-back-btn'),
            wizardNextBtn: document.getElementById('wizard-next-btn'),
            wizardStepCounter: document.getElementById('wizard-step-counter'),
            wizardFamilyContainer: document.getElementById('wizard-family-members-container'),
            wizardAddMemberBtn: document.getElementById('wizard-add-family-member-btn'),
            wizardDuration: document.getElementById('wizard-menu-duration'),
            wizardBudget: document.getElementById('wizard-total-budget'),
            wizardPreferences: document.getElementById('wizard-preferences'),
            wizardCuisine: document.getElementById('wizard-cuisine'),
            wizardDifficulty: document.getElementById('wizard-difficulty'),

            generationProgress: document.getElementById('generation-progress'),
            progressBar: document.getElementById('progress-bar'),
            progressStatus: document.getElementById('progress-status'),
            progressDetails: document.getElementById('progress-details'),

            previewMenuContainer: document.getElementById('preview-menu-container'),
            previewRegenerateAllBtn: document.getElementById('preview-regenerate-all-btn'),
            previewAcceptBtn: document.getElementById('preview-accept-btn'),

            mainHeaderTitle: document.getElementById('main-header-title'),
            openSettingsBtn: document.getElementById('open-settings-btn'),
            closeSettingsBtn: document.getElementById('close-settings-btn'),
            bottomNav: document.querySelector('.bottom-nav'),
            mainContents: document.querySelectorAll('.main-content'),

            dateSelector: document.getElementById('date-selector'),
            prevDayBtn: document.getElementById('prev-day-btn'),
            currentDateDisplay: document.getElementById('current-date-display'),
            nextDayBtn: document.getElementById('next-day-btn'),
            dailyMenuContainer: document.getElementById('daily-menu-container'),

            shoppingListContainer: document.getElementById('shopping-list-container'),
            shoppingProgressText: document.getElementById('shopping-progress-text'),
            shoppingProgress: document.getElementById('shopping-progress'),
            shoppingListTotal: document.getElementById('shopping-list-total'),

            backToMenuBtn: document.getElementById('back-to-menu-btn'),
            recipeTitle: document.getElementById('recipe-title'),
            stepIndicator: document.getElementById('step-indicator'),
            stepImage: document.getElementById('step-image'),
            stepDescription: document.getElementById('step-description'),
            timerSection: document.getElementById('timer-section'),
            timerDisplay: document.getElementById('timer-display'),
            startTimerBtn: document.getElementById('start-timer-btn'),
            pauseTimerBtn: document.getElementById('pause-timer-btn'),
            resetTimerBtn: document.getElementById('reset-timer-btn'),
            stepIngredientsList: document.getElementById('step-ingredients'),
            stepIngredientsTitle: document.getElementById('step-ingredients-title'),
            prevStepBtn: document.getElementById('prev-step-btn'),
            nextStepBtn: document.getElementById('next-step-btn'),

            budget: {
                pieProducts: document.getElementById('pie-products'),
                spentTotal: document.getElementById('budget-spent-total'),
                total: document.getElementById('budget-total'),
                remaining: document.getElementById('budget-remaining'),
                barChart: document.getElementById('bar-chart'),
            },

            settings: {
                content: document.getElementById('settings-content'),
                duration: document.getElementById('settings-menu-duration'),
                budget: document.getElementById('settings-total-budget'),
                preferences: document.getElementById('settings-preferences'),
                cuisine: document.getElementById('settings-cuisine'),
                difficulty: document.getElementById('settings-difficulty'),
                saveBtn: document.getElementById('save-settings-btn'),
                familyContainer: document.getElementById('family-members-container'),
                addMemberBtn: document.getElementById('add-family-member-btn'),
                regenerateAllBtn: document.getElementById('regenerate-all-btn'),
                apiKeyInput: document.getElementById('settings-api-key'),
                saveApiKeyBtn: document.getElementById('save-api-key-btn'),
                runWizardBtn: document.getElementById('run-wizard-btn'),
                appVersionInfo: document.getElementById('app-version-info'),
                showChangelogBtn: document.getElementById('show-changelog-btn'),
            },
            exportBtn: document.getElementById('export-btn'),
            importBtn: document.getElementById('import-btn'),
            importFileInput: document.getElementById('import-file-input'),

            devConsole: document.getElementById('dev-console'),
            logOutput: document.getElementById('log-output'),
            commandInput: document.getElementById('command-input'),

            notification: document.getElementById('notification'),
            notificationSound: document.getElementById('notification-sound'),

            modalOverlay: document.getElementById('modal-overlay'),
            modalTitle: document.getElementById('modal-title'),
            modalBody: document.getElementById('modal-body'),
            modalButtons: document.getElementById('modal-buttons'),
        };
    },

    addEventListeners() {
        this.dom.startAppBtn.addEventListener('click', () => {
            localStorage.setItem('hasSeenSplash', 'true');
            this.showScreen('welcome-screen');
        });

        this.dom.googleSigninBtn.addEventListener('click', () => this.signInWithGoogle());
        this.dom.wizardNextBtn.addEventListener('click', () => this.navigateWizard(1));
        this.dom.wizardBackBtn.addEventListener('click', () => this.navigateWizard(-1));
        this.dom.previewAcceptBtn.addEventListener('click', () => this.acceptPreview());
        this.dom.previewRegenerateAllBtn.addEventListener('click', () => this.startGenerationProcess(true));
        this.dom.bottomNav.addEventListener('click', (e) => this.handleNav(e));
        this.dom.backToMenuBtn.addEventListener('click', () => this.showScreen('main-screen'));
        this.dom.prevStepBtn.addEventListener('click', () => this.navigateRecipeStep(-1));
        this.dom.nextStepBtn.addEventListener('click', () => this.navigateRecipeStep(1));
        this.dom.prevDayBtn.addEventListener('click', () => this.navigateMenuDay(-1));
        this.dom.nextDayBtn.addEventListener('click', () => this.navigateMenuDay(1));
        this.dom.startTimerBtn.addEventListener('click', () => this.startTimer());
        this.dom.pauseTimerBtn.addEventListener('click', () => this.pauseTimer());
        this.dom.resetTimerBtn.addEventListener('click', () => this.resetTimer());
        this.dom.openSettingsBtn.addEventListener('click', () => this.showSettingsPanel());
        this.dom.closeSettingsBtn.addEventListener('click', () => this.hideSettingsPanel());
        this.dom.settings.saveBtn.addEventListener('click', () => this.saveSettings());
        this.dom.settings.addMemberBtn.addEventListener('click', () => this.openFamilyMemberModal());
        this.dom.settings.regenerateAllBtn.addEventListener('click', () => this.confirmRegenerateAll());
        this.dom.settings.saveApiKeyBtn.addEventListener('click', () => this.saveApiKey());
        this.dom.wizardAddMemberBtn.addEventListener('click', () => this.openFamilyMemberModal(true));
        this.dom.settings.runWizardBtn.addEventListener('click', () => {
            this.hideSettingsPanel();
            this.showWizard();
        });
        this.dom.settings.showChangelogBtn.addEventListener('click', () => this.showChangelogModal());
        this.dom.exportBtn.addEventListener('click', () => this.exportData());
        this.dom.importBtn.addEventListener('click', () => this.dom.importFileInput.click());
        this.dom.importFileInput.addEventListener('change', (e) => this.importData(e));
        let longPressTimer;
        document.body.addEventListener('touchstart', e => {
            if (e.touches.length === 3) {
                longPressTimer = setTimeout(() => this.toggleDevConsole(), 1000);
            }
        });
        document.body.addEventListener('touchend', () => clearTimeout(longPressTimer));
        this.dom.commandInput.addEventListener('keydown', e => {
            if (e.key === 'Enter') this.executeCommand(e.target.value);
        });
        this.dom.modalOverlay.addEventListener('click', (e) => {
            if (e.target === this.dom.modalOverlay) {
                this.hideModal();
            }
        });
    },

    setupAuthListener() {
        const { auth, onAuthStateChanged } = window.firebaseServices;
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                this.currentUser = user;
                this.dom.openSettingsBtn.innerHTML = `<img src="${user.photoURL}" style="width: 32px; height: 32px; border-radius: 50%;" alt="User avatar">`;
                await this.loadState();
                if (this.state.menu && this.state.menu.length > 0) {
                    this.showScreen('main-screen');
                } else {
                    this.showWizard();
                }
            } else {
                this.currentUser = null;
                this.dom.openSettingsBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`;
                const hasSeenSplash = localStorage.getItem('hasSeenSplash') === 'true';
                this.showScreen(hasSeenSplash ? 'welcome-screen' : 'splash-screen');
            }
        });
    },

    async signInWithGoogle() {
        this.showNotification('Открываю окно входа...', 'loading');
        const { auth, provider, signInWithPopup } = window.firebaseServices;
        try {
            await signInWithPopup(auth, provider);
            this.hideNotification();
        } catch (error) {
            console.error("Google Sign-in failed:", error);
            this.showNotification(`Ошибка входа: ${error.message}`, 'error');
        }
    },

    async saveState() {
        try {
            await setDoc(doc(db, "user-data", "main-config"), this.state);
        } catch (e) {
            console.error("Error saving state to Firestore:", e);
            this.showNotification('Ошибка сохранения данных.', 'error');
        }
    },

    async loadState() {
        try {
            const docRef = doc(db, "user-data", "main-config");
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const loadedData = docSnap.data();
                if (loadedData.settings) {
                     this.state = loadedData;
                     if (!this.state.settings.family) this.state.settings.family = [];
                     if (!this.state.settings.menuDuration) this.state.settings.menuDuration = 7;
                     if (!this.state.cookedMeals) this.state.cookedMeals = {};
                     if (!this.state.settings.cuisine) this.state.settings.cuisine = "Любая";
                     if (!this.state.settings.difficulty) this.state.settings.difficulty = "Любая";
                     if (this.state.currentDayIndex === undefined) this.state.currentDayIndex = 0;
                     (this.state.shoppingList || []).forEach(cat => {
                        (cat.items || []).forEach(item => {
                            if (item.purchases === undefined) item.purchases = item.completed ? [{ qty: item.shoppingSuggestion?.qty || 1, price: item.price, date: new Date().toISOString() }] : [];
                            item.purchases.forEach(p => { if (!p.date) p.date = new Date().toISOString() });
                            if (item.consumedQty === undefined) item.consumedQty = 0;
                        });
                     });
                }
            } else {
                console.log("No saved state found in Firestore.");
            }
        } catch (e) {
            console.error("Error loading state from Firestore:", e);
            this.showNotification('Ошибка загрузки данных.', 'error');
        }
        this.hideNotification();
    },

    resetState() {
        const { signOut, auth } = window.firebaseServices;
        signOut(auth).catch(error => console.error('Sign out failed', error));
    },

    showScreen(screenId) {
        this.dom.screens.forEach(screen => {
            const isTarget = screen.id === screenId;
            screen.classList.toggle('hidden', !isTarget);
            if (['recipe-screen', 'splash-screen', 'settings-screen'].includes(screen.id)) {
                screen.classList.toggle('active', isTarget);
            }
        });
        if (screenId === 'main-screen') {
            document.getElementById('main-screen').classList.remove('hidden');
            this.renderAll();
        } else if (['setup-screen', 'welcome-screen', 'preview-screen'].includes(screenId)) {
             document.getElementById(screenId).classList.remove('hidden');
        }
    },

    showWizard() {
        this.showScreen('setup-screen');
        this.wizard.currentStep = 1;
        this.updateWizardView();
    },

    updateWizardView() {
        const { currentStep, totalSteps } = this.wizard;
        this.dom.wizardDuration.value = this.state.settings.menuDuration;
        this.dom.wizardBudget.value = this.state.settings.totalBudget;
        this.dom.wizardPreferences.value = this.state.settings.preferences;
        this.dom.wizardCuisine.value = this.state.settings.cuisine;
        this.dom.wizardDifficulty.value = this.state.settings.difficulty;
        this.dom.wizardNav.classList.remove('hidden');
        this.dom.generationProgress.classList.add('hidden');
        this.dom.setupWizard.classList.remove('hidden');
        this.dom.wizardStepCounter.classList.remove('hidden');
        this.dom.wizardStepCounter.textContent = `Шаг ${currentStep} из ${totalSteps}`;
        this.dom.wizardSteps.forEach(step => {
            step.classList.toggle('active', parseInt(step.dataset.step) === currentStep);
        });
        this.dom.wizardBackBtn.classList.toggle('hidden', currentStep === 1);
        this.dom.wizardNextBtn.textContent = currentStep === totalSteps ? 'Начать генерацию' : 'Далее';
        let isStepValid = false;
        switch(currentStep) {
            case 1: isStepValid = this.state.settings.family.length > 0; break;
            default: isStepValid = true;
        }
        this.dom.wizardNextBtn.disabled = !isStepValid;
        if (currentStep === 1) {
            this.renderFamilyMembers(true);
        }
    },

    async navigateWizard(direction) {
        const { currentStep, totalSteps } = this.wizard;
        if (direction > 0) {
            if (currentStep === 2) {
                this.state.settings.menuDuration = parseInt(this.dom.wizardDuration.value) || 7;
                this.state.settings.totalBudget = parseInt(this.dom.wizardBudget.value) || 10000;
                this.state.settings.preferences = this.dom.wizardPreferences.value;
                this.state.settings.cuisine = this.dom.wizardCuisine.value;
                this.state.settings.difficulty = this.dom.wizardDifficulty.value;
            } else if (currentStep === totalSteps) {
                await this.saveState();
                await this.startGenerationProcess();
                return;
            }
        }
        this.wizard.currentStep += direction;
        this.updateWizardView();
    },

    async startGenerationProcess(isRegenerating = false, purchasedItems = '', extraPrompt = '') {
        if (!this.state.settings.apiKey) {
            alert('API ключ не найден.');
            this.showWizard();
            return;
        }
        this.dom.setupWizard.classList.add('hidden');
        this.dom.wizardNav.classList.add('hidden');
        this.dom.wizardStepCounter.classList.add('hidden');
        this.dom.generationProgress.classList.remove('hidden');
        this.showScreen('setup-screen');
        try {
            this.ai = new GoogleGenAI({ apiKey: this.state.settings.apiKey });
            await this.updateProgress(1, 2, "Подключение к Google Gemini…", "Проверка ключа...");
            await this.ai.models.generateContent({model:'gemini-2.5-flash', contents: 'test'});
            this.logToConsole('✅ API KEY VALIDATED');
            this.dom.progressDetails.innerHTML += '<br>✅ Ключ активен. Доступ к Gemini получен.';
            await this.updateProgress(2, 2, "Магия ИИ в действии…", "Создаем меню, рецепты и список покупок...");
            const comprehensiveData = await this.generateComprehensiveData(purchasedItems, extraPrompt);
            if (!comprehensiveData || !comprehensiveData.menu || comprehensiveData.menu.length === 0) {
                throw new Error("Menu generation failed or returned empty data. Please check your prompt and settings.");
            }
            this.tempState = comprehensiveData;
            this.renderPreview();
            this.showScreen('preview-screen');
        } catch (error) {
            console.error("Generation failed:", error);
            this.updateProgress(0, 2, "Ошибка!", `Не удалось сгенерировать меню. ${error.message}`);
            this.dom.generationProgress.innerHTML += `<button class="primary-button" onclick="window.location.reload()" style="margin-top: 20px;">Назад к настройкам</button>`;
            if(!isRegenerating) {
                this.state.settings.apiKey = null;
                this.saveState();
            }
        }
    },

    async updateProgress(step, totalSteps, status, details) {
        return new Promise(resolve => {
            const percent = (step / totalSteps) * 100;
            this.dom.progressBar.style.width = `${percent}%`;
            this.dom.progressStatus.textContent = `Шаг ${step}/${totalSteps}: ${status}`;
            this.dom.progressDetails.innerHTML = details;
            setTimeout(resolve, 300);
        });
    },

    async makeGeminiRequest(prompt, jsonSchema) {
        this.logToConsole(`🟡 REQUEST: ${prompt.substring(0, 50)}...`);
        let retries = 3;
        while (retries > 0) {
            try {
                const response = await this.ai.models.generateContent({
                  model: "gemini-2.5-flash",
                  contents: prompt,
                  config: {
                    responseMimeType: "application/json",
                    responseSchema: jsonSchema
                  }
                });
                const jsonText = response.text.trim();
                const data = JSON.parse(jsonText);
                this.logToConsole(`✅ RESPONSE RECEIVED`);
                return data;
            } catch (error) {
                retries--;
                this.logToConsole(`🔴 ERROR: ${error}. Retrying... (${retries} left)`);
                if (retries === 0) throw error;
                await new Promise(res => setTimeout(res, 1000));
            }
        }
    },

    async generateComprehensiveData(purchasedItems = '', extraPrompt = '') {
        const { family, menuDuration, preferences, cuisine, difficulty, totalBudget } = this.state.settings;
        const familyDescription = family.map(p =>
            `- ${p.name}: Вес ${p.weight}кг, Рост ${p.height}см. Цель: ${
                {'lose': 'постепенное снижение веса', 'maintain': 'поддержание текущего веса', 'gain': 'набор мышечной массы'}[p.goal]
            }.`
        ).join('\n');
        let promptText = `Сгенерируй одним JSON-ответом полный план питания. Ответ должен содержать три ключа верхнего уровня: "menu", "recipes", "shoppingList".

1.  **menu**: Разнообразное меню на ${menuDuration} дней (с воскресенья по субботу) для семьи:\n${familyDescription}.
    *   Учти их потребности в калориях.
    *   Общие предпочтения: ${preferences}.
    *   Предпочитаемая кухня: ${cuisine}.
    *   Желаемая сложность блюд: ${difficulty}.
    *   Каждый день должен включать: Завтрак, Перекус, Обед, Полдник, Ужин.
    *   Иногда используй остатки от ужина на обед следующего дня (помечай их как "Название блюда (остатки)").

2.  **recipes**: Массив с детальными рецептами для КАЖДОГО уникального блюда из сгенерированного меню (кроме блюд с пометкой "остатки").
    *   Каждый рецепт должен иметь уникальный 'id' (например, 'borsch-s-govyadinoy').
    *   Название 'name' рецепта должно ТОЧНО соответствовать названию в меню.
    *   Включи полный список ингредиентов с количеством для семьи из ${family.length} человек.
    *   Предоставь пошаговые инструкции 'steps'. В каждом шаге укажи используемые ингредиенты и их количество.

3.  **shoppingList**: Сводный список покупок, сгруппированный по категориям.
    *   Суммируй ВСЕ ингредиенты из ВСЕХ сгенерированных рецептов.
    *   Категории: "Мясо и птица", "Молочные и яйца", "Овощи и зелень", "Фрукты и орехи", "Бакалея", "Хлеб и выпечка", "Напитки", "Прочее".
    *   Для каждого продукта укажи общее необходимое количество 'totalNeeded', а затем предложи 'shoppingSuggestion' — разумное количество для покупки в магазине, округляя в большую сторону до стандартной упаковки (например, для 750г муки предложи купить 1кг).
    *   Укажи примерную цену 'price' в рублях для 'shoppingSuggestion'. Общая стоимость всех продуктов не должна превышать бюджет ${totalBudget} рублей.
`;
        if (purchasedItems) {
            promptText += `\nВАЖНО: При составлении меню отдай приоритет блюдам, в которых используются уже купленные продукты. Список купленных продуктов: ${purchasedItems}.`;
        }
        if (extraPrompt) {
             promptText += `\nОСОБОЕ УКАЗАНИЕ: ${extraPrompt}`;
        }
        const ingredientsSchema = { type: Type.ARRAY, items: { type: Type.OBJECT, properties: { name: { type: Type.STRING }, quantity: { type: Type.STRING, description: "Количество и единица измерения, например '200 г' или '1 шт'" } }, required: ["name", "quantity"] } };
        const schema = {
            type: Type.OBJECT,
            properties: {
                menu: {
                    type: Type.ARRAY,
                    description: "Меню на неделю.",
                    items: {
                        type: Type.OBJECT,
                        properties: {
                            day: { type: Type.STRING },
                            meals: {
                                type: Type.OBJECT,
                                properties: {
                                    breakfast: { type: Type.STRING },
                                    snack1: { type: Type.STRING },
                                    lunch: { type: Type.STRING },
                                    snack2: { type: Type.STRING },
                                    dinner: { type: Type.STRING }
                                },
                                required: ["breakfast", "snack1", "lunch", "snack2", "dinner"]
                            }
                        },
                        required: ["day", "meals"]
                    }
                },
                recipes: {
                    type: Type.ARRAY,
                    description: "Рецепты для уникальных блюд из меню.",
                    items: {
                        type: Type.OBJECT,
                        properties: {
                            id: { type: Type.STRING, description: "Уникальный идентификатор рецепта" },
                            name: { type: Type.STRING, description: "Название, соответствующее меню" },
                            ingredients: ingredientsSchema,
                            steps: {
                                type: Type.ARRAY,
                                items: {
                                    type: Type.OBJECT,
                                    properties: {
                                        description: { type: Type.STRING },
                                        time: { type: Type.NUMBER, description: "Время в минутах. 0 если таймер не нужен." },
                                        ingredients: ingredientsSchema
                                    },
                                    required: ["description", "time", "ingredients"]
                                }
                            }
                        },
                        required: ["id", "name", "ingredients", "steps"]
                    }
                },
                shoppingList: {
                    type: Type.ARRAY,
                    description: "Список покупок, сгруппированный по категориям.",
                    items: {
                        type: Type.OBJECT,
                        properties: {
                            category: { type: Type.STRING },
                            items: {
                                type: Type.ARRAY,
                                items: {
                                    type: Type.OBJECT,
                                    properties: {
                                        name: { type: Type.STRING },
                                        totalNeeded: { type: Type.OBJECT, properties: { qty: { type: Type.NUMBER }, unit: { type: Type.STRING } } },
                                        shoppingSuggestion: { type: Type.OBJECT, properties: { qty: { type: Type.NUMBER }, unit: { type: Type.STRING } } },
                                        price: { type: Type.NUMBER }
                                    },
                                    required: ["name", "totalNeeded", "shoppingSuggestion", "price"]
                                }
                            }
                        },
                        required: ["category", "items"]
                    }
                }
            },
            required: ["menu", "recipes", "shoppingList"]
        };
        const comprehensiveData = await this.makeGeminiRequest(promptText, schema);
        const recipesMap = {};
        if (comprehensiveData.recipes) {
            comprehensiveData.recipes.forEach(recipe => {
                recipesMap[recipe.id] = recipe;
            });
        }
        if (comprehensiveData.shoppingList) {
            comprehensiveData.shoppingList.forEach(category => {
                (category.items || []).forEach(item => {
                    item.purchases = [];
                    item.consumedQty = 0;
                });
            });
        }
        return {
            menu: comprehensiveData.menu || [],
            recipes: recipesMap,
            shoppingList: comprehensiveData.shoppingList || []
        };
    },
    renderAll() {
        this.renderMenu();
        this.renderShoppingList();
        this.renderBudget();
    },
    getRegenerateIcon() {
        return `<svg class="regenerate-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.868 2.884c.321-.772 1.415-.772 1.736 0l1.681 4.06c.064.155.19.284.348.348l4.06 1.68c.772.321.772 1.415 0 1.736l-4.06 1.68a.5.5 0 00-.348.349l-1.68 4.06c-.321-.772-1.415-.772-1.736 0l-1.681-4.06a.5.5 0 00-.348-.348l-4.06-1.68c-.772-.321-.772-1.415 0-1.736l4.06-1.68a.5.5 0 00.348-.348l1.68-4.06z" clip-rule="evenodd" /></svg>`;
    },
    getSortedMenu() {
        const daysOrder = ["ВОСКРЕСЕНЬЕ", "ПОНЕДЕЛЬНИК", "ВТОРНИК", "СРЕДА", "ЧЕТВЕРГ", "ПЯТНИЦА", "СУББОТА"];
        const menuCopy = JSON.parse(JSON.stringify(this.state.menu || []));
        return menuCopy.sort((a, b) => {
            return daysOrder.indexOf(a.day.toUpperCase()) - daysOrder.indexOf(b.day.toUpperCase());
        });
    },
    renderMenu() {
        if (!this.state.menu || this.state.menu.length === 0) {
            this.dom.dailyMenuContainer.innerHTML = '<p style="text-align: center; color: var(--soft-text); margin-top: 30px;">Меню еще не создано. Перейдите в настройки для генерации.</p>';
            this.dom.currentDateDisplay.textContent = 'Нет меню';
            return;
        };
        const sortedMenu = this.getSortedMenu();
        if (this.state.currentDayIndex >= sortedMenu.length || this.state.currentDayIndex < 0) {
            this.state.currentDayIndex = 0;
        }
        const dayData = sortedMenu[this.state.currentDayIndex];
        if (!dayData) {
            console.error('No day data found for index:', this.state.currentDayIndex);
            return;
        }
        this.dom.currentDateDisplay.textContent = dayData.day;
        const mealHtml = (icon, mealName, mealKey, dayName) => {
            const cleanName = (mealName || 'Не указано').replace(/\s*\(остатки\)/i, '');
            const isLeftover = (mealName || '').includes('(остатки)');
            const hasContent = mealName && mealName.trim() !== '' && mealName.trim() !== 'Не указано';
            const hasRecipe = !isLeftover && hasContent;
            const isCooked = this.state.cookedMeals[dayName] && this.state.cookedMeals[dayName].includes(mealKey);
            return `
            <div class="meal ${hasRecipe ? 'clickable' : ''} ${isCooked ? 'cooked' : ''}" data-meal-name="${mealName || ''}" data-meal-key="${mealKey}" data-day-name="${dayName}">
                <button class="cooked-toggle" data-day-name="${dayName}" data-meal-key="${mealKey}" aria-label="Отметить как приготовленное">
                    <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                </button>
                <span class="meal-icon">${icon}</span>
                <span class="meal-name">${cleanName}</span>
                ${isLeftover ? '<span class="leftover-icon">🔄</span>' : ''}
                ${hasContent ? `<button class="regenerate-btn" title="Перегенерировать блюдо">${this.getRegenerateIcon()}</button>` : ''}
            </div>`;
        };
        this.dom.dailyMenuContainer.innerHTML = `
            ${mealHtml('☀️', dayData.meals.breakfast, 'breakfast', dayData.day)}
            ${mealHtml('🍎', dayData.meals.snack1, 'snack1', dayData.day)}
            ${mealHtml('🍲', dayData.meals.lunch, 'lunch', dayData.day)}
            ${mealHtml('🥛', dayData.meals.snack2, 'snack2', dayData.day)}
            ${mealHtml('🌙', dayData.meals.dinner, 'dinner', dayData.day)}
        `;
        this.dom.dailyMenuContainer.querySelectorAll('.meal.clickable').forEach(el => {
            el.addEventListener('click', (e) => {
                if (e.target.closest('.regenerate-btn') || e.target.closest('.cooked-toggle')) return;
                const mealName = e.currentTarget.dataset.mealName.replace(/\s*\(остатки\)/i, '').trim();
                const recipe = Object.values(this.state.recipes).find(r => r.name === mealName);
                if (recipe) {
                    this.checkIngredientsForRecipe(recipe.id);
                } else if (mealName) {
                    this.showNotification('Рецепт для "' + mealName + '" не найден.', 'error');
                }
            });
        });
        this.dom.dailyMenuContainer.querySelectorAll('.cooked-toggle').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const { dayName, mealKey } = e.currentTarget.dataset;
                this.toggleCookedStatus(dayName, mealKey);
            });
        });
        this.dom.dailyMenuContainer.querySelectorAll('.regenerate-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const el = e.currentTarget;
                const mealDiv = el.closest('.meal');
                const {dayName, mealKey} = mealDiv.dataset;
                this.openRegenerateModal('meal', { dayName, mealKey });
            });
        });
    },
    navigateMenuDay(direction) {
        if (!this.state.menu || this.state.menu.length === 0) return;
        const menuLength = this.state.menu.length;
        let newIndex = this.state.currentDayIndex + direction;
        if (newIndex < 0) {
            newIndex = menuLength - 1;
        } else if (newIndex >= menuLength) {
            newIndex = 0;
        }
        this.state.currentDayIndex = newIndex;
        this.saveState();
        this.renderMenu();
    },
    toggleCookedStatus(dayName, mealKey) {
        if (!this.state.cookedMeals[dayName]) {
            this.state.cookedMeals[dayName] = [];
        }
        const isCooking = !this.state.cookedMeals[dayName].includes(mealKey);
        const factor = isCooking ? 1 : -1;
        const mealName = (this.state.menu.find(d => d.day === dayName)?.meals[mealKey] || '').replace(/\s*\(остатки\)/i, '').trim();
        const recipe = Object.values(this.state.recipes).find(r => r.name === mealName);
        if (recipe && recipe.ingredients) {
            recipe.ingredients.forEach(ing => {
                const shopItem = this.findShopItemByName(ing.name);
                const parsedIng = this.parseQuantity(ing.quantity);
                if (shopItem && parsedIng) {
                    if (shopItem.consumedQty === undefined) shopItem.consumedQty = 0;
                    shopItem.consumedQty += factor * parsedIng.qty;
                    shopItem.consumedQty = Math.max(0, shopItem.consumedQty);
                }
            });
        }
        const mealIndex = this.state.cookedMeals[dayName].indexOf(mealKey);
        if (mealIndex > -1) {
            this.state.cookedMeals[dayName].splice(mealIndex, 1);
        } else {
            this.state.cookedMeals[dayName].push(mealKey);
        }
        this.saveState();
        this.renderMenu();
        this.showNotification(isCooking ? "Блюдо отмечено как приготовленное!" : "Отметка о приготовлении снята.", "success");
    },
    findShopItemByName(name) {
        if (!name) return null;
        const lname = name.toLowerCase().trim().replace(/ё/g, 'е');
        for (const category of this.state.shoppingList) {
            for (const item of category.items) {
                const itemName = item.name.toLowerCase().trim().replace(/ё/g, 'е');
                if (itemName.includes(lname) || lname.includes(itemName)) {
                    return item;
                }
            }
        }
        return null;
    },
    parseQuantity(quantityStr) {
        if (typeof quantityStr !== 'string') return null;
        const match = quantityStr.match(/(\d+[\.,]?\d*)\s*([а-яА-Яa-zA-Z]+)?/);
        if (!match) return null;
        return {
            qty: parseFloat(match[1].replace(',', '.')),
            unit: (match[2] || '').toLowerCase()
        };
    },
    renderShoppingList() {
        if (!this.state.shoppingList) return;
        this.dom.shoppingListContainer.innerHTML = '';
        this.state.shoppingList.forEach((category, catIndex) => {
            const categoryElement = document.createElement('div');
            categoryElement.className = 'category-group';
            const itemsHtml = category.items.map((item, itemIndex) => {
                const totalPurchased = (item.purchases || []).reduce((sum, p) => sum + p.qty, 0);
                const remainingQty = Math.max(0, item.shoppingSuggestion.qty - totalPurchased);
                const isCompleted = remainingQty <= 0;
                const progressPercent = item.shoppingSuggestion.qty > 0 ? Math.min((totalPurchased / item.shoppingSuggestion.qty) * 100, 100) : 0;
                const radius = 10;
                const circumference = 2 * Math.PI * radius;
                const offset = circumference - (progressPercent / 100) * circumference;
                return `
                <li class="shopping-item ${isCompleted ? 'completed' : ''}" data-cat-index="${catIndex}" data-item-index="${itemIndex}">
                    <div class="item-checkbox-progress">
                        <svg viewBox="0 0 24 24">
                          <circle class="bg" cx="12" cy="12" r="${radius}"></circle>
                          <circle class="progress" cx="12" cy="12" r="${radius}" stroke-dasharray="${circumference}" stroke-dashoffset="${offset}"></circle>
                        </svg>
                        <span class="checkmark">✔</span>
                    </div>
                    <div class="item-details">
                        <span class="item-name">${item.name}</span>
                        <div class="item-quantity">
                           Нужно: ${item.shoppingSuggestion.qty.toLocaleString('ru-RU')} ${item.shoppingSuggestion.unit} <br>
                           <span style="font-weight: bold; color: ${remainingQty > 0 ? 'var(--warning-color)' : 'var(--success-color)'};">Осталось купить: ${remainingQty.toLocaleString('ru-RU')} ${item.shoppingSuggestion.unit}</span>
                        </div>
                    </div>
                    <span class="item-price">${item.price} ₽</span>
                </li>
            `}).join('');
            categoryElement.innerHTML = `
                <button class="category-toggle">${category.category} ▼</button>
                <ul class="category-items">${itemsHtml}</ul>
            `;
            this.dom.shoppingListContainer.appendChild(categoryElement);
        });
        this.dom.shoppingListContainer.querySelectorAll('.shopping-item').forEach(itemEl => {
            itemEl.addEventListener('click', (e) => {
                const { catIndex, itemIndex } = e.currentTarget.dataset;
                this.openPurchaseModal(parseInt(catIndex), parseInt(itemIndex));
            });
        });
        this.dom.shoppingListContainer.querySelectorAll('.category-toggle').forEach(button => {
            button.addEventListener('click', e => {
                const list = e.target.nextElementSibling;
                list.classList.toggle('collapsed');
                e.target.innerHTML = list.classList.contains('collapsed') ? e.target.innerHTML.replace('▼', '▶') : e.target.innerHTML.replace('▶', '▼');
            });
        });
        this.updateShoppingProgress();
        const estimatedCost = this.state.shoppingList.flatMap(c => c.items).reduce((sum, item) => sum + (item.price || 0), 0);
        this.dom.shoppingListTotal.innerHTML = `<span>Примерная сумма:</span> ${estimatedCost.toLocaleString('ru-RU')} ₽`;
    },
    updateShoppingProgress() {
        if (!this.state.shoppingList) return;
        const allItems = this.state.shoppingList.flatMap(c => c.items || []);
        if (allItems.length === 0) return;
        const totalItems = allItems.length;
        const completedItems = allItems.filter(i => {
            const totalPurchased = (i.purchases || []).reduce((sum, p) => sum + p.qty, 0);
            return totalPurchased >= i.shoppingSuggestion.qty;
        }).length;
        const percent = totalItems > 0 ? (completedItems / totalItems) * 100 : 0;
        this.dom.shoppingProgress.style.width = `${percent}%`;
        this.dom.shoppingProgressText.textContent = `${completedItems}/${totalItems} куплено`;
    },
    renderBudget() {
        const totalBudget = this.state.settings.totalBudget;
        const spentOnProducts = this.state.shoppingList
            .flatMap(c => c.items || [])
            .flatMap(item => item.purchases || [])
            .reduce((sum, purchase) => sum + purchase.price, 0);
        const remaining = totalBudget - spentOnProducts;
        const spentPercent = totalBudget > 0 ? Math.min((spentOnProducts / totalBudget) * 100, 100) : 0;
        this.dom.budget.pieProducts.style.strokeDasharray = `${spentPercent} 100`;
        this.dom.budget.spentTotal.innerHTML = `${spentOnProducts.toLocaleString('ru-RU')} ₽ <span>потрачено</span>`;
        this.dom.budget.total.textContent = `${totalBudget.toLocaleString('ru-RU')} ₽`;
        this.dom.budget.remaining.textContent = `${remaining.toLocaleString('ru-RU')} ₽`;
        this.dom.budget.remaining.className = `amount ${remaining >= 0 ? 'ok' : 'warning'}`;
        this.renderBudgetChart();
    },
    renderBudgetChart() {
        const purchases = this.state.shoppingList.flatMap(c => c.items || []).flatMap(i => i.purchases || []);
        const spendingByDay = {};
        for (let i = 6; i >= 0; i--) {
            const d = new Date();
            d.setDate(d.getDate() - i);
            const key = d.toISOString().split('T')[0];
            spendingByDay[key] = {
                amount: 0,
                label: d.toLocaleDateString('ru-RU', { weekday: 'short' })
            };
        }
        purchases.forEach(p => {
            const key = new Date(p.date).toISOString().split('T')[0];
            if (spendingByDay[key]) {
                spendingByDay[key].amount += p.price;
            }
        });
        const dataValues = Object.values(spendingByDay).map(d => d.amount);
        const maxSpending = Math.max(...dataValues, 1);
        this.dom.budget.barChart.innerHTML = Object.values(spendingByDay).map(day => {
            const height = (day.amount / maxSpending) * 100;
            return `
                <div class="bar-chart-item">
                    <div class="bar" style="height: ${height}%;">
                        ${day.amount > 0 ? `<div class="bar-value">${Math.round(day.amount)}</div>` : ''}
                    </div>
                    <div class="bar-label">${day.label}</div>
                </div>
            `;
        }).join('');
    },
    checkIngredientsForRecipe(recipeId) {
        const recipe = this.state.recipes[recipeId];
        if (!recipe || !recipe.ingredients) {
            this.showRecipe(recipeId);
            return;
        }
        const missingIngredients = [];
        recipe.ingredients.forEach(ing => {
            const shopItem = this.findShopItemByName(ing.name);
            const parsedIng = this.parseQuantity(ing.quantity);
            if (shopItem && parsedIng) {
                 const totalPurchased = (shopItem.purchases || []).reduce((sum, p) => sum + p.qty, 0);
                 const availableStock = totalPurchased - (shopItem.consumedQty || 0);
                 if (availableStock < parsedIng.qty) {
                     missingIngredients.push(shopItem);
                 }
            } else {
                missingIngredients.push({name: ing.name, shoppingSuggestion: {qty: parsedIng?.qty || 1, unit: parsedIng?.unit || 'шт'}});
            }
        });
        if (missingIngredients.length > 0) {
            this.showMissingIngredientsWarning(missingIngredients, recipeId);
        } else {
            this.showRecipe(recipeId);
        }
    },
    showRecipe(recipeId) {
        this.currentRecipe.id = recipeId;
        this.currentRecipe.step = 0;
        const recipe = this.state.recipes[recipeId];
        if (!recipe) {
            this.showNotification(`Не удалось найти рецепт с ID: ${recipeId}.`, 'error');
            return;
        }
        this.showScreen('recipe-screen');
        this.renderRecipeStep();
    },
    renderRecipeStep() {
        const { id, step } = this.currentRecipe;
        const recipe = this.state.recipes[id];
        if (!recipe || !recipe.steps || !recipe.steps[step]) {
            console.error('Invalid recipe or step:', id, step);
            this.showNotification('Ошибка при загрузке рецепта.', 'error');
            this.showScreen('main-screen');
            return;
        }
        const stepData = recipe.steps[step];
        this.dom.recipeTitle.textContent = recipe.name;
        this.dom.stepIndicator.textContent = `Шаг ${step + 1}/${recipe.steps.length}`;
        this.dom.stepDescription.textContent = stepData.description;
        this.dom.stepImage.style.opacity = '0.5';
        if (stepData.imageUrl) {
            this.dom.stepImage.src = stepData.imageUrl;
            this.dom.stepImage.alt = stepData.description;
            this.dom.stepImage.style.opacity = '1';
        } else {
            this.dom.stepImage.src = '';
            this.dom.stepImage.alt = 'Генерация изображения...';
            this.generateStepImage(id, step);
        }
        this.stopTimer();
        if (stepData.time && stepData.time > 0) {
            this.timer.initialTime = stepData.time * 60;
            this.resetTimer();
            this.dom.timerSection.classList.remove('hidden');
        } else {
            this.dom.timerSection.classList.add('hidden');
        }
        this.dom.stepIngredientsList.innerHTML = '';
        if (stepData.ingredients && stepData.ingredients.length > 0) {
            this.dom.stepIngredientsTitle.classList.remove('hidden');
            stepData.ingredients.forEach(ing => {
                const li = document.createElement('li');
                const shopItem = this.findShopItemByName(ing.name);
                const parsedIng = this.parseQuantity(ing.quantity);
                let statusClass = 'unknown';
                let statusIcon = '❔';
                if (shopItem && parsedIng) {
                    const totalPurchased = (shopItem.purchases || []).reduce((sum, p) => sum + p.qty, 0);
                    const availableStock = totalPurchased - (shopItem.consumedQty || 0);
                    if (availableStock >= parsedIng.qty) {
                        statusClass = 'completed';
                        statusIcon = '✅';
                    } else {
                        statusClass = 'missing';
                        statusIcon = '⚠️';
                    }
                }
                li.innerHTML = `<span><span class="ingredient-status ${statusClass}">${statusIcon}</span> ${ing.name}</span> <span class="ingredient-quantity">${ing.quantity}</span>`;
                this.dom.stepIngredientsList.appendChild(li);
            });
        } else {
            this.dom.stepIngredientsTitle.classList.add('hidden');
        }
        this.dom.prevStepBtn.disabled = step === 0;
        this.dom.nextStepBtn.textContent = (step === recipe.steps.length - 1) ? 'Завершить ✅' : 'Далее →';
    },
    async generateStepImage(recipeId, stepIndex) {
        if (!this.ai) {
             if (this.state.settings.apiKey) {
                this.ai = new GoogleGenAI({ apiKey: this.state.settings.apiKey });
            } else {
                return;
            }
        }
        try {
            const recipe = this.state.recipes[recipeId];
            const stepDescription = recipe.steps[stepIndex].description;
            const prompt = `Food photography, realistic, high-detail photo of a cooking step: "${stepDescription}"`;
            const response = await this.ai.models.generateImages({
                model: 'imagen-4.0-generate-001',
                prompt: prompt,
                config: {
                  numberOfImages: 1,
                  outputMimeType: 'image/jpeg',
                  aspectRatio: '4:3',
                },
            });
            const base64ImageBytes = response.generatedImages[0].image.imageBytes;
            const imageUrl = `data:image/jpeg;base64,${base64ImageBytes}`;
            if (this.currentRecipe.id === recipeId && this.currentRecipe.step === stepIndex) {
                this.dom.stepImage.src = imageUrl;
                this.dom.stepImage.style.opacity = '1';
            }
            this.state.recipes[recipeId].steps[stepIndex].imageUrl = imageUrl;
            this.saveState();
        } catch (error) {
            console.error("Image generation failed:", error);
            if (this.currentRecipe.id === recipeId && this.currentRecipe.step === stepIndex) {
               this.dom.stepImage.alt = 'Не удалось загрузить изображение';
            }
        }
    },
    navigateRecipeStep(direction) {
        const { id, step } = this.currentRecipe;
        const recipe = this.state.recipes[id];
        if (direction > 0 && step === recipe.steps.length - 1) {
            this.finishCooking();
            return;
        }
        const newStep = step + direction;
        if (newStep >= 0 && newStep < recipe.steps.length) {
            this.currentRecipe.step = newStep;
            this.renderRecipeStep();
        }
    },
    finishCooking() {
        const { id } = this.currentRecipe;
        const recipe = this.state.recipes[id];
        let mealInfo = null;
        for (const day of this.state.menu) {
            for (const mealKey in day.meals) {
                const mealName = (day.meals[mealKey] || '').replace(/\s*\(остатки\)/i, '').trim();
                if (mealName === recipe.name) {
                    mealInfo = { dayName: day.day, mealKey: mealKey };
                    break;
                }
            }
            if (mealInfo) break;
        }
        if (mealInfo) {
            this.toggleCookedStatus(mealInfo.dayName, mealInfo.mealKey);
        }
        this.showNotification(`"${recipe.name}" приготовлено!`, 'success');
        this.showScreen('main-screen');
    },
    startTimer() {
        if (this.timer.isRunning || this.timer.timeLeft <= 0) return;
        this.timer.isRunning = true;
        this.timer.interval = setInterval(() => {
            this.timer.timeLeft--;
            this.updateTimerDisplay();
            if (this.timer.timeLeft <= 0) {
                this.stopTimer(true);
            }
        }, 1000);
    },
    pauseTimer() {
        this.timer.isRunning = false;
        clearInterval(this.timer.interval);
    },
    stopTimer(finished = false) {
        this.pauseTimer();
        if (finished) {
            this.dom.timerDisplay.textContent = "Готово!";
            this.showNotification("Таймер завершен!", "success");
            this.dom.notificationSound.play().catch(e => console.log("Audio play failed", e));
        }
    },
    resetTimer() {
        this.stopTimer();
        this.timer.timeLeft = this.timer.initialTime;
        this.updateTimerDisplay();
    },
    updateTimerDisplay() {
        const minutes = Math.floor(this.timer.timeLeft / 60);
        const seconds = this.timer.timeLeft % 60;
        this.dom.timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    },
    handleNav(e) {
        const button = e.target.closest('.nav-button');
        if (!button) return;
        this.dom.bottomNav.querySelectorAll('.nav-button').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        const contentId = button.dataset.content;
        this.dom.mainHeaderTitle.textContent = button.dataset.title;
        this.dom.mainContents.forEach(content => {
            content.classList.toggle('active', content.id === contentId);
        });
        if (contentId === 'budget-content') this.renderBudget();
    },
    showNotification(message, type = 'success') {
        this.dom.notification.textContent = message;
        this.dom.notification.className = type;
        this.dom.notification.classList.add('show');
        if (type !== 'loading') {
            setTimeout(() => {
                this.dom.notification.classList.remove('show');
            }, 3000);
        }
    },
    hideNotification() {
        this.dom.notification.classList.remove('show');
    },
    showModal(title, bodyHtml, buttons) {
        this.dom.modalTitle.textContent = title;
        this.dom.modalBody.innerHTML = bodyHtml;
        this.dom.modalButtons.innerHTML = '';
        buttons.forEach(btn => {
            const buttonEl = document.createElement('button');
            buttonEl.textContent = btn.text;
            buttonEl.className = `modal-button ${btn.class}`;
            buttonEl.addEventListener('click', () => {
                btn.action();
                if (btn.closes !== false) this.hideModal();
            });
            this.dom.modalButtons.appendChild(buttonEl);
        });
        this.dom.modalOverlay.classList.add('visible');
    },
    hideModal() {
        this.dom.modalOverlay.classList.remove('visible');
    },
    showApiKeyHelpModal() {
        const bodyHtml = `...`; // Omitted for brevity
        this.showModal('Как получить API ключ?', bodyHtml, [{ text: 'Понятно', class: 'primary', action: () => {} }]);
        // ...
    },
    openPurchaseModal(catIndex, itemIndex) {
        // ...
    },
    async shareMissingItems(missingItems) {
        // ...
    },
    showMissingIngredientsWarning(missingItems, recipeId) {
        // ...
    },
    showSettingsPanel() {
        this.renderSettings();
        this.dom.settingsScreen.classList.remove('hidden');
        setTimeout(() => this.dom.settingsScreen.classList.add('active'), 10);
    },
    hideSettingsPanel() {
        this.dom.settingsScreen.classList.remove('active');
        setTimeout(() => {
            this.dom.settingsScreen.classList.add('hidden');
        }, 500);
    },
    renderSettings() {
        // ...
    },
    saveSettings() {
        // ...
    },
    async saveApiKey() {
        // ...
    },
    renderFamilyMembers(isWizard = false) {
        // ...
    },
    openFamilyMemberModal(isWizard = false, member = null, memberIndex = -1) {
        // ...
    },
    confirmRegenerateAll() {
        // ...
    },
    showChangelogModal() {
        // ...
    },
    openRegenerateModal(type, data) {
        // ...
    },
    async handleRegeneration(type, data, isPreview = false, customPrompt = '') {
        // ...
    },
    renderPreview() {
        // ...
    },
    acceptPreview() {
        // ...
    },
    async exportData() {
        // ...
    },
    importData(event) {
        // ...
    },
    toggleDevConsole() {
        this.dom.devConsole.classList.toggle('visible');
    },
    logToConsole(message) {
        const p = document.createElement('p');
        p.textContent = `[${new Date().toLocaleTimeString()}] ${message}`;
        this.dom.logOutput.appendChild(p);
        this.dom.logOutput.scrollTop = this.dom.logOutput.scrollHeight;
    },
    executeCommand(commandStr) {
        // ...
    }
};

document.addEventListener('DOMContentLoaded', () => app.init());
