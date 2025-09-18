
import { GoogleGenAI, Type } from "@google/genai";

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
    
    tempState: null, // For preview screen
    dom: {},
    wizard: {
        currentStep: 1,
        totalSteps: 4,
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

    async init() {
        this.cacheDom();
        this.addEventListeners();
        this.loadState();

        const hasSeenSplash = localStorage.getItem('hasSeenSplash') === 'true';
        if (!hasSeenSplash) {
            this.showScreen('splash-screen');
        } else {
            this.handleStartSetup();
        }
    },

    cacheDom() {
        this.dom = {
            splashScreen: document.getElementById('splash-screen'),
            startAppBtn: document.getElementById('start-app-btn'),
            screens: document.querySelectorAll('.screen'),
            setupScreen: document.getElementById('setup-screen'),
            mainScreen: document.getElementById('main-screen'),
            recipeScreen: document.getElementById('recipe-screen'),
            settingsScreen: document.getElementById('settings-screen'),
            previewScreen: document.getElementById('preview-screen'),
            
            // Wizard
            setupWizard: document.getElementById('setup-wizard'),
            wizardSteps: document.querySelectorAll('.wizard-step'),
            wizardNav: document.getElementById('wizard-nav'),
            wizardBackBtn: document.getElementById('wizard-back-btn'),
            wizardNextBtn: document.getElementById('wizard-next-btn'),
            wizardStepCounter: document.getElementById('wizard-step-counter'),
            apiKeyInput: document.getElementById('api-key-input'),
            apiKeyHelpLink: document.getElementById('api-key-help-link'),
            wizardLoadFromFileBtn: document.getElementById('wizard-load-from-file-btn'),
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
            
            // Preview
            previewMenuContainer: document.getElementById('preview-menu-container'),
            previewRegenerateAllBtn: document.getElementById('preview-regenerate-all-btn'),
            previewAcceptBtn: document.getElementById('preview-accept-btn'),

            // Main UI
            mainHeaderTitle: document.getElementById('main-header-title'),
            openSettingsBtn: document.getElementById('open-settings-btn'),
            closeSettingsBtn: document.getElementById('close-settings-btn'),
            bottomNav: document.querySelector('.bottom-nav'),
            mainContents: document.querySelectorAll('.main-content'),
            
            // New Menu UI
            dateSelector: document.getElementById('date-selector'),
            prevDayBtn: document.getElementById('prev-day-btn'),
            currentDateDisplay: document.getElementById('current-date-display'),
            nextDayBtn: document.getElementById('next-day-btn'),
            dailyMenuContainer: document.getElementById('daily-menu-container'),

            shoppingListContainer: document.getElementById('shopping-list-container'),
            shoppingProgressText: document.getElementById('shopping-progress-text'),
            shoppingProgress: document.getElementById('shopping-progress'),

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
            this.handleStartSetup();
        });
        
        this.dom.wizardLoadFromFileBtn.addEventListener('click', () => (this.dom.importFileInput as HTMLElement).click());

        this.dom.wizardNextBtn.addEventListener('click', () => this.navigateWizard(1));
        this.dom.wizardBackBtn.addEventListener('click', () => this.navigateWizard(-1));
        this.dom.apiKeyInput.addEventListener('input', () => this.updateWizardView());
        this.dom.apiKeyHelpLink.addEventListener('click', (e) => {
            e.preventDefault();
            this.showApiKeyHelpModal();
        });

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

        // Settings Listeners
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
        this.dom.importBtn.addEventListener('click', () => (this.dom.importFileInput as HTMLElement).click());
        this.dom.importFileInput.addEventListener('change', (e) => this.importData(e));

        let longPressTimer;
        document.body.addEventListener('touchstart', e => {
            if (e.touches.length === 3) {
                longPressTimer = setTimeout(() => this.toggleDevConsole(), 1000);
            }
        });
        document.body.addEventListener('touchend', () => clearTimeout(longPressTimer));
        this.dom.commandInput.addEventListener('keydown', e => {
            if (e.key === 'Enter') this.executeCommand((e.target as HTMLInputElement).value);
        });

        this.dom.modalOverlay.addEventListener('click', (e) => {
            if (e.target === this.dom.modalOverlay) {
                this.hideModal();
            }
        });
    },

    async handleStartSetup() {
        if (this.state.settings.apiKey && this.state.menu && this.state.menu.length > 0) {
            this.showScreen('main-screen');
            this.renderAll();
        } else if (this.state.settings.apiKey) {
             this.showNotification('Проверка API ключа...', 'loading');
            try {
                this.ai = new GoogleGenAI({ apiKey: this.state.settings.apiKey });
                await this.ai.models.generateContent({model:'gemini-2.5-flash', contents: 'test'});
                this.hideNotification();
                this.wizard.currentStep = 2; 
                this.showWizard();
                this.updateWizardView();
            } catch (e) {
                this.showNotification('API ключ недействителен. Введите новый.', 'error');
                this.state.settings.apiKey = null; 
                this.saveState();
                this.showWizard();
            }
        } else {
             this.showWizard();
        }
    },

    saveState() {
        try {
            localStorage.setItem('familyMenuState', JSON.stringify(this.state));
        } catch (e) {
            console.error("Failed to save state:", e);
        }
    },
    
    loadState() {
        const savedState = localStorage.getItem('familyMenuState');
        if (savedState) {
            try {
                const loadedData = JSON.parse(savedState);
                if (loadedData.settings) {
                     this.state = loadedData;
                     // Ensure new properties exist for backward compatibility
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
                } else {
                    this.resetState();
                }
            } catch (e) {
                this.resetState();
            }
        }
    },

    resetState() {
        localStorage.removeItem('familyMenuState');
        localStorage.removeItem('hasSeenSplash');
        window.location.reload();
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
        } else if (['setup-screen', 'preview-screen'].includes(screenId)) {
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
        
        // Populate inputs from state
        (this.dom.apiKeyInput as HTMLInputElement).value = this.state.settings.apiKey || '';
        (this.dom.wizardDuration as HTMLInputElement).value = this.state.settings.menuDuration;
        (this.dom.wizardBudget as HTMLInputElement).value = this.state.settings.totalBudget;
        (this.dom.wizardPreferences as HTMLInputElement).value = this.state.settings.preferences;
        (this.dom.wizardCuisine as HTMLInputElement).value = this.state.settings.cuisine;
        (this.dom.wizardDifficulty as HTMLInputElement).value = this.state.settings.difficulty;
        
        this.dom.wizardNav.classList.remove('hidden');
        this.dom.generationProgress.classList.add('hidden');
        this.dom.setupWizard.classList.remove('hidden');
        this.dom.wizardStepCounter.classList.remove('hidden');

        this.dom.wizardStepCounter.textContent = `Шаг ${currentStep} из ${totalSteps}`;

        this.dom.wizardSteps.forEach(step => {
            step.classList.toggle('active', parseInt((step as HTMLElement).dataset.step) === currentStep);
        });

        this.dom.wizardBackBtn.classList.toggle('hidden', currentStep === 1);
        this.dom.wizardNextBtn.textContent = currentStep === totalSteps ? 'Начать генерацию' : 'Далее';
        
        // Validation for 'Next' button
        let isStepValid = false;
        switch(currentStep) {
            case 1: isStepValid = (this.dom.apiKeyInput as HTMLInputElement).value.trim().length > 0; break;
            case 2: isStepValid = this.state.settings.family.length > 0; break;
            default: isStepValid = true;
        }
        (this.dom.wizardNextBtn as HTMLButtonElement).disabled = !isStepValid;

        if (currentStep === 2) {
            this.renderFamilyMembers(true);
        }
    },

    async navigateWizard(direction) {
        const { currentStep, totalSteps } = this.wizard;
        // Validation & State saving for current step before navigating
        if (direction > 0) {
            if (currentStep === 1) {
                this.state.settings.apiKey = (this.dom.apiKeyInput as HTMLInputElement).value.trim();
            } else if (currentStep === 3) {
                this.state.settings.menuDuration = parseInt((this.dom.wizardDuration as HTMLInputElement).value) || 7;
                this.state.settings.totalBudget = parseInt((this.dom.wizardBudget as HTMLInputElement).value) || 10000;
                this.state.settings.preferences = (this.dom.wizardPreferences as HTMLInputElement).value;
                this.state.settings.cuisine = (this.dom.wizardCuisine as HTMLInputElement).value;
                this.state.settings.difficulty = (this.dom.wizardDifficulty as HTMLInputElement).value;
            } else if (currentStep === totalSteps) {
                this.saveState();
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
            (this.dom.progressBar as HTMLElement).style.width = `${percent}%`;
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
        const familyDescription = family.map(p => `${p.gender === 'male' ? 'Мужчина' : 'Женщина'}, ${p.age} лет, активность: ${p.activity}`).join('; ');

        let promptText = `Сгенерируй одним JSON-ответом полный план питания. Ответ должен содержать три ключа верхнего уровня: "menu", "recipes", "shoppingList".

1.  **menu**: Разнообразное меню на ${menuDuration} дней (с воскресенья по субботу) для семьи: ${familyDescription}.
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
    *   Для каждого продукта укажи общее необходимое количество 'totalNeeded', а затем предложи 'shoppingSuggestion' — разумное количество для покупки в магазине, округляя в большую сторону до стандартной упаковки (например, для 750г муки предложи купить 1кг), и 'estimatedPrice' - примерную цену в рублях за предложенное количество.
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
                                        estimatedPrice: { type: Type.NUMBER, description: "Примерная цена в рублях за предложенное к покупке количество" }
                                    },
                                    required: ["name", "totalNeeded", "shoppingSuggestion", "estimatedPrice"]
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

        // Process data for internal use
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

        // Re-attach listeners
        this.dom.dailyMenuContainer.querySelectorAll('.meal.clickable').forEach(el => {
            el.addEventListener('click', (e) => {
                if ((e.target as HTMLElement).closest('.regenerate-btn') || (e.target as HTMLElement).closest('.cooked-toggle')) return;
                const mealName = (e.currentTarget as HTMLElement).dataset.mealName.replace(/\s*\(остатки\)/i, '').trim();
                // FIX: Cast recipe to 'any' to access properties like 'name' and 'id'.
                const recipe: any = Object.values(this.state.recipes).find((r: any) => r.name === mealName);
                if (recipe) {
                    this.checkIngredientsForRecipe(recipe.id);
                } else if (mealName) {
                    this.showNotification(`Рецепт для "${mealName}" не найден.`, 'error');
                }
            });
        });

        this.dom.dailyMenuContainer.querySelectorAll('.cooked-toggle').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent opening recipe view
                const { dayName, mealKey } = (e.currentTarget as HTMLElement).dataset;
                this.toggleCookedStatus(dayName, mealKey);
            });
        });

        this.dom.dailyMenuContainer.querySelectorAll('.regenerate-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const el = e.currentTarget as HTMLElement;
                const mealDiv = el.closest('.meal');
                const {dayName, mealKey} = (mealDiv as HTMLElement).dataset;
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
        // FIX: Cast recipe to 'any' to access properties like 'name' and 'ingredients'.
        const recipe: any = Object.values(this.state.recipes).find((r: any) => r.name === mealName);
        
        if (recipe && recipe.ingredients) {
            recipe.ingredients.forEach((ing: any) => {
                const shopItem = this.findShopItemByName(ing.name);
                const parsedIng = this.parseQuantity(ing.quantity);
                if (shopItem && parsedIng) {
                    if (shopItem.consumedQty === undefined) shopItem.consumedQty = 0;
                    // Simple logic assuming units match. More complex conversion would be needed for perfect accuracy.
                    shopItem.consumedQty += factor * parsedIng.qty;
                    shopItem.consumedQty = Math.max(0, shopItem.consumedQty); // Don't go below zero
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
        let totalEstimatedPrice = 0;
        
        this.state.shoppingList.forEach((category, catIndex) => {
            const categoryElement = document.createElement('div');
            categoryElement.className = 'category-group';
            
            const itemsHtml = category.items.map((item, itemIndex) => {
                totalEstimatedPrice += item.estimatedPrice || 0;
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
                    <span class="item-price">${item.estimatedPrice ? `~${item.estimatedPrice.toLocaleString('ru-RU')} ₽` : ''}</span>
                </li>
            `}).join('');
            
            categoryElement.innerHTML = `
                <button class="category-toggle">${category.category} ▼</button>
                <ul class="category-items">${itemsHtml}</ul>
            `;
            this.dom.shoppingListContainer.appendChild(categoryElement);
        });

        const totalAmountEl = document.getElementById('shopping-total-amount');
        if (totalAmountEl) {
             totalAmountEl.textContent = `~${Math.round(totalEstimatedPrice).toLocaleString('ru-RU')} ₽`;
        }
        
        this.dom.shoppingListContainer.querySelectorAll('.shopping-item').forEach(itemEl => {
            itemEl.addEventListener('click', (e) => {
                const { catIndex, itemIndex } = (e.currentTarget as HTMLElement).dataset;
                this.openPurchaseModal(parseInt(catIndex), parseInt(itemIndex));
            });
        });
        
        this.dom.shoppingListContainer.querySelectorAll('.category-toggle').forEach(button => {
            button.addEventListener('click', e => {
                const target = e.target as HTMLElement;
                const list = target.nextElementSibling;
                list.classList.toggle('collapsed');
                target.innerHTML = list.classList.contains('collapsed') ? target.innerHTML.replace('▼', '▶') : target.innerHTML.replace('▶', '▼');
            });
        });

        this.updateShoppingProgress();
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
        (this.dom.shoppingProgress as HTMLElement).style.width = `${percent}%`;
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
        
        (this.dom.budget.pieProducts as HTMLElement).style.strokeDasharray = `${spentPercent} 100`;
        this.dom.budget.spentTotal.innerHTML = `${spentOnProducts.toLocaleString('ru-RU')} ₽ <span>потрачено</span>`;
        this.dom.budget.total.textContent = `${totalBudget.toLocaleString('ru-RU')} ₽`;
        this.dom.budget.remaining.textContent = `${remaining.toLocaleString('ru-RU')} ₽`;
        this.dom.budget.remaining.className = `amount ${remaining >= 0 ? 'ok' : 'warning'}`;
        
        this.renderBudgetChart();
    },
    
    renderBudgetChart() {
        const purchases = this.state.shoppingList.flatMap(c => c.items || []).flatMap(i => i.purchases || []);
        // FIX: Define the type for spendingByDay to resolve property access errors.
        const spendingByDay: { [key: string]: { amount: number, label: string } } = {};
        
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
        const maxSpending = Math.max(...dataValues, 1); // Avoid division by zero
        
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

        (this.dom.stepImage as HTMLImageElement).style.opacity = '0.5';
        if (stepData.imageUrl) {
            (this.dom.stepImage as HTMLImageElement).src = stepData.imageUrl;
            (this.dom.stepImage as HTMLImageElement).alt = stepData.description;
            (this.dom.stepImage as HTMLImageElement).style.opacity = '1';
        } else {
            (this.dom.stepImage as HTMLImageElement).src = ''; 
            (this.dom.stepImage as HTMLImageElement).alt = 'Генерация изображения...';
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

        (this.dom.prevStepBtn as HTMLButtonElement).disabled = step === 0;
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
                (this.dom.stepImage as HTMLImageElement).src = imageUrl;
                (this.dom.stepImage as HTMLImageElement).style.opacity = '1';
            }
            this.state.recipes[recipeId].steps[stepIndex].imageUrl = imageUrl;
            this.saveState();
        } catch (error) {
            console.error("Image generation failed:", error);
            if (this.currentRecipe.id === recipeId && this.currentRecipe.step === stepIndex) {
               (this.dom.stepImage as HTMLImageElement).alt = 'Не удалось загрузить изображение';
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
                this.stopTimer(true); // finished
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
            (this.dom.notificationSound as HTMLAudioElement).play().catch(e => console.log("Audio play failed", e));
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
        const button = (e.target as HTMLElement).closest('.nav-button');
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
        this.dom.notification.className = type; // success, loading, error
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
        const bodyHtml = `
            <style>
                .help-step { margin-bottom: 20px; }
                .help-step h5 { font-family: var(--font-nunito); font-weight: 700; color: var(--accent-color); margin: 0 0 8px 0; font-size: 18px; }
                .help-step p { margin: 0 0 10px 0; line-height: 1.5; font-size: 15px; }
                .help-step a { color: var(--accent-color); font-weight: 600; }
                .connection-check { background-color: var(--card-accent-bg); padding: 15px; border-radius: 12px; text-align: center; }
                #connection-status { font-weight: 600; margin-top: 10px; min-height: 20px; }
            </style>
            <div class="help-step">
                <h5>Шаг 1: Получение ключа</h5>
                <p>Для работы приложения нужен ваш персональный бесплатный ключ (API Key) от Google Gemini.</p>
                <p>1. Перейдите на сайт <a href="https://aistudio.google.com/app/apikey" target="_blank">Google AI Studio</a>.</p>
                <p>2. Нажмите на кнопку <strong>"Create API key in new project"</strong>.</p>
                <p>3. Скопируйте сгенерированный ключ и вставьте его в поле на предыдущем экране.</p>
            </div>
            <div class="help-step">
                <h5>Шаг 2: Проверка доступа</h5>
                <p>Иногда сервисы Google могут быть недоступны в некоторых регионах. Давайте проверим ваш доступ.</p>
                <div class="connection-check">
                    <button class="secondary-button" id="check-connection-btn" style="height: 45px; font-size: 16px;">Проверить доступ</button>
                    <div id="connection-status"></div>
                </div>
            </div>
            <div class="help-step" id="troubleshooting-step" style="display: none;">
                <h5>Что делать, если доступа нет?</h5>
                <p>Если вы видите ошибку или сайт из Шага 1 не открывается, это значит, что сервисы Google AI ограничены в вашем регионе.</p>
                <p><strong>Решение:</strong> Для доступа к таким сервисам можно использовать VPN. VPN изменяет ваше виртуальное местоположение.</p>
                <p>1. Включите любой VPN-сервис и выберите страну, где Gemini доступен (например, США, Великобритания).</p>
                <p>2. Повторите <strong>Шаг 1</strong> и <strong>Шаг 2</strong> с включенным VPN.</p>
                <p>После получения ключа, VPN можно будет отключить для работы с приложением.</p>
            </div>
        `;

        this.showModal(
            'Как получить API ключ?',
            bodyHtml,
            [{ text: 'Понятно', class: 'primary', action: () => {} }]
        );

        document.getElementById('check-connection-btn').addEventListener('click', async (e) => {
            // FIX: Cast event target to HTMLButtonElement to access the 'disabled' property.
            const btn = e.target as HTMLButtonElement;
            const statusDiv = document.getElementById('connection-status');
            const troubleshootingDiv = document.getElementById('troubleshooting-step');
            
            btn.disabled = true;
            statusDiv.textContent = 'Проверяем...';
            statusDiv.style.color = 'var(--soft-text)';

            try {
                await fetch('https://generativelanguage.googleapis.com/$rpc/google.ai.generativelanguage.v1beta.ModelService/ListModels', {
                    method: 'GET',
                    mode: 'cors'
                });
                statusDiv.textContent = '✅ Отлично! Доступ есть.';
                statusDiv.style.color = 'var(--success-color)';
                troubleshootingDiv.style.display = 'none';
            } catch (error) {
                console.error('Connection check failed:', error);
                statusDiv.textContent = '⚠️ Ошибка! Доступ, скорее всего, ограничен.';
                statusDiv.style.color = 'var(--danger-color)';
                troubleshootingDiv.style.display = 'block';
            } finally {
                btn.disabled = false;
            }
        });
    },

    openPurchaseModal(catIndex, itemIndex) {
        const item = this.state.shoppingList[catIndex].items[itemIndex];
        const totalPurchased = (item.purchases || []).reduce((sum, p) => sum + p.qty, 0);
        const remainingQty = Math.max(0, item.shoppingSuggestion.qty - totalPurchased);

        const bodyHtml = `
            <p>Нужно купить: ${item.shoppingSuggestion.qty} ${item.shoppingSuggestion.unit}. Осталось: ${remainingQty} ${item.shoppingSuggestion.unit}</p>
            <div class="modal-form-group">
                <label for="purchase-qty">Сколько купили (${item.shoppingSuggestion.unit})</label>
                <input type="number" id="purchase-qty" class="modal-input" value="${remainingQty > 0 ? remainingQty : ''}" placeholder="0">
            </div>
            <div class="modal-form-group">
                <label for="purchase-price">Цена за эту покупку (₽)</label>
                <input type="number" id="purchase-price" class="modal-input" placeholder="0">
            </div>
        `;

        const buttons = [
            { text: 'Отмена', class: 'secondary', action: () => {} },
            { text: 'Сохранить', class: 'primary', action: () => {
                // FIX: Cast HTMLElement to HTMLInputElement to access the 'value' property.
                const qty = parseFloat((document.getElementById('purchase-qty') as HTMLInputElement).value) || 0;
                // FIX: Cast HTMLElement to HTMLInputElement to access the 'value' property.
                const price = parseFloat((document.getElementById('purchase-price') as HTMLInputElement).value) || 0;
                if (qty > 0) {
                    if (!item.purchases) item.purchases = [];
                    item.purchases.push({ qty, price, date: new Date().toISOString() });
                    this.saveState();
                    this.renderShoppingList();
                    this.renderBudget();
                }
            }},
        ];
        this.showModal(`Покупка: ${item.name}`, bodyHtml, buttons);
    },

    async shareMissingItems(missingItems) {
        const text = "Привет! Пожалуйста, купи для ужина:\n" + 
                     missingItems.map(item => `- ${item.name} (${item.shoppingSuggestion.qty} ${item.shoppingSuggestion.unit})`).join('\n');
        
        try {
            if (navigator.share) {
                await navigator.share({
                    title: 'Список покупок',
                    text: text,
                });
            } else {
                await navigator.clipboard.writeText(text);
                this.showNotification("Список скопирован в буфер обмена!");
            }
        } catch (err) {
            console.error('Share/Copy failed:', err);
            this.showNotification("Не удалось поделиться/скопировать.", 'error');
        }
    },

    showMissingIngredientsWarning(missingItems, recipeId) {
        const bodyHtml = `
            <p>Для приготовления этого блюда вам не хватает следующих продуктов:</p>
            <ul>${missingItems.map(item => `<li>${item.name}</li>`).join('')}</ul>
            <p>Хотите все равно продолжить или попросить кого-то сходить в магазин?</p>
        `;
        const buttons = [
             { text: 'Все равно готовить', class: 'primary', action: () => this.showRecipe(recipeId) },
             { text: '🛒 Попросить купить', class: 'secondary', action: () => this.shareMissingItems(missingItems) },
             { text: 'Назад к меню', class: 'secondary', action: () => {} },
        ];
        this.showModal("Не хватает ингредиентов", bodyHtml, buttons);
    },

    // SETTINGS LOGIC
    showSettingsPanel() {
        this.renderSettings();
        this.dom.settingsScreen.classList.remove('hidden');
        // A short delay ensures the transition is applied correctly after changing display property
        setTimeout(() => this.dom.settingsScreen.classList.add('active'), 10);
    },
    hideSettingsPanel() {
        this.dom.settingsScreen.classList.remove('active');
        // Add the 'hidden' class back after the transition completes (0.5s duration)
        setTimeout(() => {
            this.dom.settingsScreen.classList.add('hidden');
        }, 500);
    },
    renderSettings() {
        const s = this.state.settings;
        (this.dom.settings.duration as HTMLInputElement).value = s.menuDuration;
        (this.dom.settings.budget as HTMLInputElement).value = s.totalBudget;
        (this.dom.settings.preferences as HTMLInputElement).value = s.preferences;
        (this.dom.settings.cuisine as HTMLInputElement).value = s.cuisine;
        (this.dom.settings.difficulty as HTMLInputElement).value = s.difficulty;
        (this.dom.settings.apiKeyInput as HTMLInputElement).value = s.apiKey || '';
        this.dom.settings.appVersionInfo.textContent = `Версия приложения: ${this.version}`;
        this.renderFamilyMembers();
    },
    saveSettings() {
        const s = this.state.settings;
        s.menuDuration = parseInt((this.dom.settings.duration as HTMLInputElement).value) || 7;
        s.totalBudget = parseInt((this.dom.settings.budget as HTMLInputElement).value) || 10000;
        s.preferences = (this.dom.settings.preferences as HTMLInputElement).value;
        s.cuisine = (this.dom.settings.cuisine as HTMLInputElement).value;
        s.difficulty = (this.dom.settings.difficulty as HTMLInputElement).value;
        this.saveState();
        this.renderBudget(); 
        this.showNotification("Настройки сохранены. Чтобы они применились, перегенерируйте меню.");
    },
    async saveApiKey() {
        const newApiKey = (this.dom.settings.apiKeyInput as HTMLInputElement).value.trim();
        if (!newApiKey) {
            this.showNotification('API ключ не может быть пустым', 'error');
            return;
        }
        this.showNotification('Проверка ключа...', 'loading');
        try {
            const testAI = new GoogleGenAI({ apiKey: newApiKey });
            await testAI.models.generateContent({model:'gemini-2.5-flash', contents: 'test'});
            
            this.state.settings.apiKey = newApiKey;
            this.ai = testAI; 
            this.saveState();
            this.showNotification('API ключ успешно сохранен и проверен!');
        } catch (error) {
            console.error("API Key validation failed:", error);
            this.showNotification('Неверный API ключ. Проверьте его и попробуйте снова.', 'error');
        }
    },
    renderFamilyMembers(isWizard = false) {
        const container = isWizard ? this.dom.wizardFamilyContainer : this.dom.settings.familyContainer;
        container.innerHTML = '';
        if (this.state.settings.family.length === 0) {
            container.innerHTML = '<p style="font-size:14px; color: var(--soft-text);">Добавьте членов семьи для расчета рациона.</p>';
        }
        this.state.settings.family.forEach((person, index) => {
            const card = document.createElement('div');
            card.className = 'family-member-card';
            const genderText = person.gender === 'male' ? 'муж.' : 'жен.';
            const activityMap = { sedentary: 'сидячий', light: 'легкая', moderate: 'умеренная', high: 'высокая' };
            card.innerHTML = `
                <span>${person.age} лет, ${genderText}, ${activityMap[person.activity] || person.activity}</span>
                <button data-index="${index}" class="delete-member-btn">✖</button>
            `;
            container.appendChild(card);
        });
        container.querySelectorAll('.delete-member-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.state.settings.family.splice((e.target as HTMLElement).dataset.index, 1);
                this.saveState();
                this.renderFamilyMembers(isWizard);
                if (!isWizard) this.renderFamilyMembers(false);
                this.updateWizardView();
            });
        });
    },
    openFamilyMemberModal(isWizard = false) {
        const bodyHtml = `
            <div class="modal-form-group">
                <label for="member-age">Возраст</label>
                <input type="number" id="member-age" class="modal-input" placeholder="30">
            </div>
            <div class="modal-form-group">
                <label for="member-gender">Пол</label>
                <select id="member-gender" class="settings-select" style="height: 45px;">
                    <option value="female">Женский</option>
                    <option value="male">Мужской</option>
                </select>
            </div>
            <div class="modal-form-group">
                <label for="member-activity">Уровень активности</label>
                <select id="member-activity" class="settings-select" style="height: 45px;">
                    <option value="sedentary">Сидячий</option>
                    <option value="light">Легкая</option>
                    <option value="moderate">Умеренная</option>
                    <option value="high">Высокая</option>
                </select>
            </div>
        `;
        const buttons = [
            { text: 'Отмена', class: 'secondary', action: () => {} },
            { text: 'Добавить', class: 'primary', action: () => {
                const newMember = {
                    // FIX: Cast HTMLElement to HTMLInputElement to access the 'value' property.
                    age: parseInt((document.getElementById('member-age') as HTMLInputElement).value) || 30,
                    // FIX: Cast HTMLElement to HTMLSelectElement to access the 'value' property.
                    gender: (document.getElementById('member-gender') as HTMLSelectElement).value,
                    // FIX: Cast HTMLElement to HTMLSelectElement to access the 'value' property.
                    activity: (document.getElementById('member-activity') as HTMLSelectElement).value,
                };
                this.state.settings.family.push(newMember);
                this.saveState();
                this.renderFamilyMembers(isWizard);
                if (!isWizard) this.renderFamilyMembers(false);
                this.updateWizardView();
            }},
        ];
        this.showModal("Новый член семьи", bodyHtml, buttons);
    },
    confirmRegenerateAll() {
        this.showModal(
            "Подтверждение",
            "<p>Вы уверены, что хотите полностью перегенерировать меню? Все текущие данные будут удалены, но ИИ постарается использовать уже купленные продукты.</p>",
            [
                { text: 'Отмена', class: 'secondary', action: () => {} },
                { text: 'Да, перегенерировать', class: 'primary', action: () => {
                    const purchasedItems = (this.state.shoppingList || [])
                        .flatMap(c => c.items || [])
                        .filter(item => (item.purchases || []).length > 0)
                        .map(item => `${item.name} (${item.purchases.reduce((sum, p) => sum + p.qty, 0)} ${item.shoppingSuggestion.unit})`)
                        .join(', ');
                    this.hideSettingsPanel();
                    this.startGenerationProcess(true, purchasedItems);
                }}
            ]
        );
    },
    showChangelogModal() {
        const versions = Object.keys(this.changelog).sort((a,b) => b.localeCompare(a, undefined, {numeric: true}));
        const bodyHtml = versions.map(version => `
            <h4>Версия ${version}</h4>
            <ul>
                ${this.changelog[version].map(change => `<li>${change}</li>`).join('')}
            </ul>
        `).join('');
        this.showModal('История изменений', bodyHtml, [{text: 'Закрыть', class: 'primary', action: () => {}}]);
    },
    
    // REGENERATION
    openRegenerateModal(type, data) {
        const title = type === 'meal' ? "Перегенерировать блюдо" : "Перегенерировать день";
        const bodyHtml = `
            <p>Вы можете указать дополнительные пожелания для этого обновления.</p>
            <div class="modal-form-group">
                <label for="regen-prompt">Пожелания (необязательно)</label>
                <textarea id="regen-prompt" class="modal-textarea" rows="2" placeholder="Например: что-то более легкое"></textarea>
            </div>
        `;
        const buttons = [
            { text: 'Отмена', class: 'secondary', action: () => {} },
            { text: 'Перегенерировать', class: 'primary', action: () => {
                // FIX: Cast HTMLElement to HTMLTextAreaElement to access the 'value' property.
                const customPrompt = (document.getElementById('regen-prompt') as HTMLTextAreaElement)?.value || '';
                this.handleRegeneration(type, data, false, customPrompt);
            }}
        ];
        this.showModal(title, bodyHtml, buttons);
    },

    async handleRegeneration(type, data, isPreview = false, customPrompt = '') {
        this.showNotification("Обновляем меню...", 'loading');
        
        const sourceState = isPreview ? this.tempState : this.state;
        if (!sourceState) return;

        if (!this.ai) {
            if (this.state.settings.apiKey) {
                this.ai = new GoogleGenAI({ apiKey: this.state.settings.apiKey });
            } else {
                this.showNotification("API ключ не настроен.", "error");
                return;
            }
        }

        try {
            let extraPrompt = '';
            const currentMenuString = JSON.stringify(sourceState.menu.map(d => ({day: d.day, meals: d.meals})));
            
            if (type === 'meal') {
                const { dayName, mealKey } = data;
                const mealName = sourceState.menu.find(d => d.day === dayName)?.meals[mealKey];
                extraPrompt = `Основываясь на существующем меню: ${currentMenuString}. СДЕЛАЙ ТОЛЬКО ОДНО ИЗМЕНЕНИЕ: для дня "${dayName}" замени блюдо "${mealKey}" ("${mealName}") на что-то другое. Пожелание: ${customPrompt || 'сделай что-нибудь другое'}. Сохрани все остальные блюда в меню без изменений. Затем обнови список рецептов и покупок в соответствии с этим одним изменением.`;
            } else { // type === 'day'
                const { dayName } = data;
                extraPrompt = `Основываясь на существующем меню: ${currentMenuString}. СДЕЛАЙ ИЗМЕНЕНИЯ ТОЛЬКО ДЛЯ ОДНОГО ДНЯ: полностью обнови меню для дня "${dayName}". Пожелание: ${customPrompt || 'сделай этот день разнообразнее'}. Сохрани меню для всех остальных дней без изменений. Затем обнови список рецептов и покупок в соответствии с изменениями этого дня.`;
            }

            const purchasedItems = (this.state.shoppingList || [])
                .flatMap(c => c.items || [])
                .filter(item => (item.purchases || []).length > 0)
                .map(item => item.name)
                .join(', ');
            
            const newData = await this.generateComprehensiveData(purchasedItems, extraPrompt);
            
            if (isPreview) {
                this.tempState = newData;
                this.renderPreview();
                this.showNotification("Предпросмотр обновлен!");
            } else {
                Object.assign(this.state, newData);
                this.saveState();
                this.renderAll();
                this.showNotification("Меню успешно обновлено!");
            }

        } catch(e) {
            this.showNotification("Ошибка при обновлении.", 'error');
            console.error(e);
        }
    },
    
    // PREVIEW FLOW
    renderPreview() {
        const container = this.dom.previewMenuContainer;
        container.innerHTML = '';
        if (!this.tempState || !this.tempState.menu) return;

        this.tempState.menu.forEach(dayData => {
            const dayDiv = document.createElement('div');
            dayDiv.className = 'preview-day';

            const mealsHtml = Object.entries(dayData.meals).map(([key, name]) => `
                <div class="preview-meal" data-day-name="${dayData.day}" data-meal-key="${key}">
                    <span class="preview-meal-name">${name || '...'}</span>
                    <button class="regenerate-btn" title="Изменить это блюдо">${this.getRegenerateIcon()}</button>
                </div>
            `).join('');

            dayDiv.innerHTML = `<h4 class="preview-day-title">${dayData.day}</h4>${mealsHtml}`;
            container.appendChild(dayDiv);
        });

        container.querySelectorAll('.regenerate-btn').forEach(btn => {
            btn.addEventListener('click', e => {
                // FIX: Cast the result of closest() to HTMLElement and add a null check to safely access dataset.
                const mealDiv = (e.target as HTMLElement).closest('.preview-meal') as HTMLElement;
                if (!mealDiv) return;
                const { dayName, mealKey } = mealDiv.dataset;
                const mealName = this.tempState.menu.find(d=>d.day===dayName).meals[mealKey];
                this.showModal(
                    "Изменить блюдо",
                    `<p>Что бы вы хотели видеть вместо "${mealName}"?</p>
                     <textarea id="regen-prompt" class="modal-textarea" rows="2" placeholder="Например: что-то из курицы"></textarea>`,
                    [
                        { text: 'Отмена', class: 'secondary', action: () => {} },
                        { text: 'Изменить', class: 'primary', action: () => {
                            // FIX: Cast HTMLElement to HTMLTextAreaElement to access the 'value' property.
                            const customPrompt = (document.getElementById('regen-prompt') as HTMLTextAreaElement)?.value || '';
                            this.handleRegeneration('meal', { dayName, mealKey }, true, customPrompt);
                        }}
                    ]
                );
            });
        });
    },

    acceptPreview() {
        if (this.tempState) {
            Object.assign(this.state, this.tempState);
            this.state.timestamp = new Date().toISOString();
            this.state.currentDayIndex = 0;
            this.saveState();
            this.tempState = null;
            this.showScreen('main-screen');
            this.renderAll();
            this.showNotification("Меню сохранено!");
        }
    },

    async exportData() {
        const fileName = `family_menu_backup_${new Date().toISOString().split('T')[0]}.json`;
        const dataBlob = new Blob([JSON.stringify(this.state)], { type: 'application/json' });

        try {
            const dataFile = new File([dataBlob], fileName, { type: 'application/json' });
            if (navigator.share && navigator.canShare({ files: [dataFile] })) {
                await navigator.share({
                    files: [dataFile],
                    title: 'Конфигурация Семейного Меню',
                    text: 'Файл с данными меню. Загрузи его в приложении "Семейное меню+".',
                });
                this.showNotification("Данными успешно поделились!");
                return;
            }
        } catch (error) {
            if (error.name !== 'AbortError') {
                 console.error('Share failed:', error);
            }
        }

        try {
            const dataUrl = URL.createObjectURL(dataBlob);
            const downloadAnchorNode = document.createElement('a');
            downloadAnchorNode.href = dataUrl;
            downloadAnchorNode.download = fileName;
            document.body.appendChild(downloadAnchorNode);
            downloadAnchorNode.click();
            document.body.removeChild(downloadAnchorNode);
            URL.revokeObjectURL(dataUrl);
            this.showNotification("Файл для синхронизации скачан!");
        } catch (fallbackError) {
            console.error('Fallback download failed:', fallbackError);
            this.showNotification("Не удалось поделиться или скачать файл.", 'error');
        }
    },
    importData(event) {
        const file = (event.target as HTMLInputElement).files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                // FIX: Ensure result is a string before parsing JSON.
                const importedState = JSON.parse(e.target.result as string);
                if (importedState.settings) {
                    this.state = importedState;
                    this.saveState();
                    this.showNotification("Данные успешно импортированы!");
                    this.handleStartSetup();
                } else {
                    throw new Error("Invalid file format");
                }
            } catch (error) {
                this.showNotification("Ошибка импорта: неверный формат файла.", 'error');
            }
        };
        reader.readAsText(file);
        (event.target as HTMLInputElement).value = '';
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
        this.logToConsole(`> ${commandStr}`);
        try {
            switch(commandStr.toLowerCase()) {
                case 'clear':
                    this.dom.logOutput.innerHTML = '';
                    break;
                case 'state':
                    console.log(this.state);
                    this.logToConsole('State logged to browser console.');
                    break;
                case 'reset':
                    this.resetState();
                    break;
                default:
                    this.logToConsole('Unknown command. Available: clear, state, reset');
            }
        } catch (e) {
            this.logToConsole(`Error: ${e.message}`);
        }
        (this.dom.commandInput as HTMLInputElement).value = '';
    }
};

app.init();
