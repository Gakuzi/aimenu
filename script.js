import { GoogleGenAI, Type } from "https://esm.run/@google/genai";
import qrcode from 'https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/+esm'


const app = {
    version: '1.6.0',
    changelog: {
        '1.6.0': [
            'КРИТИЧЕСКОЕ ИСПРАВЛЕНИЕ: Восстановлена работа всех интерактивных элементов в меню и списке покупок.',
            'ИСПРАВЛЕНО: Кнопка "Начать" на заставке теперь работает корректно.',
            'ИСПРАВЛЕНО: Улучшена стабильность отправки Push-уведомлений и отображения статуса синхронизации.',
            'НОВОЕ: Расширены настройки семьи. Теперь можно указать имя и контакт (Telegram/телефон).',
            'НОВОЕ: Добавлена функция "Попросить купить" в списке покупок для быстрой отправки списка через мессенджер.',
            'УЛУЧШЕНО: Кнопка "Сканировать QR" добавлена в раздел настроек для удобства.',
        ],
        '1.5.1': [
            'КРИТИЧЕСКОЕ ИСПРАВЛЕНИЕ: Восстановлена работа всех основных функций.',
            'Исправлена ошибка, из-за которой не открывался экран с рецептом.',
            'Восстановлена логика регенерации отдельных блюд и целых дней.',
            'Восстановлена работа списка покупок (покупка/отмена покупки).',
            'Восстановлена работа всех модальных окон и интерактивных элементов.',
        ],
        '1.5.0': [
            'Реализована поддержка нескольких семей через создание уникальных онлайн-хранилищ.',
            'Добавлена скрытая панель администратора для управления данными хранилищ (загрузка/удаление).',
            'Исправлена кнопка "Начать" на заставке, теперь она активна сразу.',
            'Улучшена анимация заставки, теперь она наглядно показывает функции приложения.',
            'Исправлена кнопка "Сканировать QR" и добавлена возможность вернуться из мастера настройки.',
        ],
    },
    state: {
        settings: {
            geminiApiKey: null,
            jsonBin: {
                enabled: false,
                apiKey: null,
                binId: null,
            },
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
    },
    
    dom: {},
    wizard: {
        currentStep: 1,
        totalSteps: 5,
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
    qrScanner: {
        stream: null,
        animationFrameId: null,
    },
    sync: {
        timeout: null,
        status: 'idle' // idle, syncing, synced, error
    },

    async init() {
        this.cacheDom();
        this.addEventListeners();
        this.registerServiceWorker();
        this.showScreen('splash-screen');
        this.dom.startAppBtn.disabled = false;
    },
    
    async continueInit() {
        await this.loadState();
        
        if (!this.state.settings.jsonBin.enabled) {
            this.setSyncStatus('idle');
        }

        const isConfigured = this.state.settings.geminiApiKey && (this.state.menu.length > 0 || this.state.settings.jsonBin.enabled);
        
        if (isConfigured) {
            this.showScreen('main-screen');
        } else {
            this.showScreen('welcome-screen');
        }
    },


    cacheDom() {
        this.dom = {
            splashScreen: document.getElementById('splash-screen'),
            startAppBtn: document.getElementById('start-app-btn'),
            screens: document.querySelectorAll('.screen'),
            welcomeScreen: document.getElementById('welcome-screen'),
            startSetupWizardBtn: document.getElementById('start-setup-wizard-btn'),
            loadFromFileBtn: document.getElementById('load-from-file-btn'),
            scanQrBtn: document.getElementById('scan-qr-btn'),
            setupScreen: document.getElementById('setup-screen'),
            backToWelcomeBtn: document.getElementById('back-to-welcome-btn'),
            mainScreen: document.getElementById('main-screen'),
            recipeScreen: document.getElementById('recipe-screen'),
            
            // Wizard
            setupWizard: document.getElementById('setup-wizard'),
            wizardSteps: document.querySelectorAll('.wizard-step'),
            wizardNav: document.getElementById('wizard-nav'),
            wizardBackBtn: document.getElementById('wizard-back-btn'),
            wizardNextBtn: document.getElementById('wizard-next-btn'),
            wizardStepCounter: document.getElementById('wizard-step-counter'),
            apiKeyInput: document.getElementById('api-key-input'),
            apiKeyHelpLink: document.getElementById('api-key-help-link'),
            wizardJsonBinBinId: document.getElementById('wizard-jsonbin-bin-id'),
            wizardJsonBinApiKey: document.getElementById('wizard-jsonbin-api-key'),
            jsonBinHelpLink: document.getElementById('jsonbin-help-link'),
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
            finishSetupBtn: document.getElementById('finish-setup-btn'),
            
            bottomNav: document.querySelector('.bottom-nav'),
            mainContents: document.querySelectorAll('.main-content'),
            mainHeaderTitle: document.getElementById('main-header-title'),
            syncStatusIndicator: document.getElementById('sync-status-indicator'),
            
            dayScroller: document.getElementById('day-scroller-container'),
            shoppingListContainer: document.getElementById('shopping-list-container'),
            shoppingProgressText: document.getElementById('shopping-progress-text'),
            shoppingProgress: document.getElementById('shopping-progress'),
            shoppingListTotal: document.getElementById('shopping-list-total'),
            askToBuyBtn: document.getElementById('ask-to-buy-btn'),

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
            },

            settings: {
                duration: document.getElementById('settings-menu-duration'),
                budget: document.getElementById('settings-total-budget'),
                preferences: document.getElementById('settings-preferences'),
                cuisine: document.getElementById('settings-cuisine'),
                difficulty: document.getElementById('settings-difficulty'),
                saveBtn: document.getElementById('save-settings-btn'),
                familyContainer: document.getElementById('family-members-container'),
                addMemberBtn: document.getElementById('add-family-member-btn'),
                regenerateAllBtn: document.getElementById('regenerate-all-btn'),
                geminiApiKeyInput: document.getElementById('settings-api-key'),
                saveApiKeyBtn: document.getElementById('save-api-key-btn'),
                jsonBinBinId: document.getElementById('settings-jsonbin-bin-id'),
                jsonBinApiKey: document.getElementById('settings-jsonbin-api-key'),
                saveSyncSettingsBtn: document.getElementById('save-sync-settings-btn'),
                jsonBinHelpLinkSettings: document.getElementById('jsonbin-help-link-settings'),
                runWizardBtn: document.getElementById('run-wizard-btn'),
                appVersionInfo: document.getElementById('app-version-info'),
                showChangelogBtn: document.getElementById('show-changelog-btn'),
                enableNotificationsBtn: document.getElementById('enable-notifications-btn'),
                scanQrFromSettingsBtn: document.getElementById('scan-qr-from-settings-btn'),
                adminPanel: document.getElementById('admin-panel'),
                adminBinIdInput: document.getElementById('admin-bin-id'),
                adminLoadBtn: document.getElementById('admin-load-bin-btn'),
                adminDeleteBinIdInput: document.getElementById('admin-delete-bin-id'),
                adminDeleteBtn: document.getElementById('admin-delete-bin-btn'),
            },
            exportBtn: document.getElementById('export-btn'),
            importBtn: document.getElementById('import-btn'),
            importFileInput: document.getElementById('import-file-input'),
            shareQrBtn: document.getElementById('share-qr-btn'),

            qrScannerOverlay: document.getElementById('qr-scanner-overlay'),
            qrVideo: document.getElementById('qr-video'),
            qrCanvas: document.getElementById('qr-canvas'),
            cancelScanBtn: document.getElementById('cancel-scan-btn'),

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
        // --- Core App Navigation ---
        this.dom.startAppBtn.addEventListener('click', () => this.continueInit());
        this.dom.startSetupWizardBtn.addEventListener('click', () => this.handleStartSetup());
        this.dom.loadFromFileBtn.addEventListener('click', () => this.dom.importFileInput.click());
        this.dom.scanQrBtn.addEventListener('click', () => this.startQrScanner());
        this.dom.cancelScanBtn.addEventListener('click', () => this.stopQrScanner());
        this.dom.backToWelcomeBtn.addEventListener('click', () => this.showScreen('welcome-screen'));
        this.dom.bottomNav.addEventListener('click', (e) => this.handleNav(e));
        this.dom.backToMenuBtn.addEventListener('click', () => this.showScreen('main-screen'));

        // --- Wizard Navigation ---
        this.dom.wizardNextBtn.addEventListener('click', () => this.navigateWizard(1));
        this.dom.wizardBackBtn.addEventListener('click', () => this.navigateWizard(-1));
        this.dom.finishSetupBtn.addEventListener('click', async () => {
            document.getElementById('generation-progress').classList.add('hidden');
            document.getElementById('finish-setup-btn').classList.add('hidden');
            await this.syncDataUp();
            this.showScreen('main-screen');
            this.renderAll();
        });

        // --- Help Modals ---
        this.dom.apiKeyHelpLink.addEventListener('click', (e) => { e.preventDefault(); this.showApiKeyHelpModal(); });
        this.dom.jsonBinHelpLink.addEventListener('click', (e) => { e.preventDefault(); this.showJsonBinHelpModal(); });
        this.dom.settings.jsonBinHelpLinkSettings.addEventListener('click', (e) => { e.preventDefault(); this.showJsonBinHelpModal(); });

        // --- Event Delegation for Dynamic Content ---
        this.addMainContentListeners();

        // --- Recipe Screen ---
        this.dom.prevStepBtn.addEventListener('click', () => this.navigateRecipeStep(-1));
        this.dom.nextStepBtn.addEventListener('click', () => this.navigateRecipeStep(1));
        this.dom.startTimerBtn.addEventListener('click', () => this.startTimer());
        this.dom.pauseTimerBtn.addEventListener('click', () => this.pauseTimer());
        this.dom.resetTimerBtn.addEventListener('click', () => this.resetTimer());

        // --- Settings Screen ---
        this.dom.settings.saveBtn.addEventListener('click', () => this.saveSettings());
        this.dom.settings.addMemberBtn.addEventListener('click', () => this.openFamilyMemberModal());
        this.dom.wizardAddMemberBtn.addEventListener('click', () => this.openFamilyMemberModal(true));
        this.dom.settings.regenerateAllBtn.addEventListener('click', () => this.confirmRegenerateAll());
        this.dom.settings.saveApiKeyBtn.addEventListener('click', () => this.saveApiKey());
        this.dom.settings.saveSyncSettingsBtn.addEventListener('click', () => this.saveSyncSettings());
        this.dom.settings.runWizardBtn.addEventListener('click', () => this.showWizard());
        this.dom.settings.showChangelogBtn.addEventListener('click', () => this.showChangelogModal());
        this.dom.settings.enableNotificationsBtn.addEventListener('click', () => this.requestNotificationPermission());
        this.dom.settings.scanQrFromSettingsBtn.addEventListener('click', () => this.startQrScanner());

        // --- Data Management ---
        this.dom.exportBtn.addEventListener('click', () => this.exportData());
        this.dom.importBtn.addEventListener('click', () => this.dom.importFileInput.click());
        this.dom.importFileInput.addEventListener('change', (e) => this.importData(e));
        this.dom.shareQrBtn.addEventListener('click', () => this.showQrCode());
        this.dom.askToBuyBtn.addEventListener('click', () => this.openAskToBuyModal());

        // --- Admin/Dev ---
        this.addAdminListeners();
        this.dom.modalOverlay.addEventListener('click', (e) => {
            if (e.target === this.dom.modalOverlay) this.hideModal();
        });
    },

    addMainContentListeners() {
        // --- Menu Screen Clicks (Delegated) ---
        this.dom.dayScroller.addEventListener('click', (e) => {
            const mealElement = e.target.closest('.meal');
            const dayRegenButton = e.target.closest('.day-title-container .regenerate-btn');
    
            if (mealElement) {
                const { dayName, mealKey, mealName } = mealElement.dataset;
    
                if (e.target.closest('.cooked-toggle')) {
                    this.toggleCookedStatus(dayName, mealKey);
                    return;
                }
    
                if (e.target.closest('.regenerate-btn')) {
                    this.openRegenerateModal('meal', { dayName, mealKey });
                    return;
                }
                
                if (mealElement.classList.contains('clickable')) {
                    const cleanMealName = mealName.replace(/\s*\(остатки\)/i, '').trim();
                    const recipe = Object.values(this.state.recipes).find(r => r.name === cleanMealName);
                    if (recipe) {
                        this.checkIngredientsForRecipe(recipe.id);
                    } else if (cleanMealName) {
                        this.showNotification(`Рецепт для "${cleanMealName}" не найден.`, 'error');
                    }
                }
            } else if (dayRegenButton) {
                this.openRegenerateModal('day', { dayName: dayRegenButton.dataset.dayName });
            }
        });

        // --- Shopping List Clicks (Delegated) ---
        this.dom.shoppingListContainer.addEventListener('click', (e) => {
            const itemElement = e.target.closest('.shopping-item');
            if (itemElement) {
                const { itemId } = itemElement.dataset;
                let foundItem, catIndex, itemIndex;
                for (let i = 0; i < this.state.shoppingList.length; i++) {
                    const foundIdx = this.state.shoppingList[i].items.findIndex(it => it.id === itemId);
                    if (foundIdx !== -1) {
                        foundItem = this.state.shoppingList[i].items[foundIdx];
                        catIndex = i;
                        itemIndex = foundIdx;
                        break;
                    }
                }
                if (foundItem) {
                    const totalPurchased = (foundItem.purchases || []).reduce((sum, p) => sum + p.qty, 0);
                    const isCompleted = totalPurchased >= foundItem.shoppingSuggestion.qty;
                    if (isCompleted) {
                        this.openUndoPurchaseModal(catIndex, itemIndex);
                    } else {
                        this.openPurchaseModal(catIndex, itemIndex);
                    }
                }
                return;
            }
            
            const categoryToggle = e.target.closest('.category-toggle');
            if(categoryToggle) {
                const list = categoryToggle.nextElementSibling;
                list.classList.toggle('collapsed');
                categoryToggle.innerHTML = list.classList.contains('collapsed') ? categoryToggle.innerHTML.replace('▼', '▶') : categoryToggle.innerHTML.replace('▶', '▼');
                return;
            }
        });
    },

    addAdminListeners() {
        let versionClickCount = 0;
        let versionClickTimer = null;
        this.dom.settings.appVersionInfo.addEventListener('click', () => {
            versionClickCount++;
            clearTimeout(versionClickTimer);
            versionClickTimer = setTimeout(() => { versionClickCount = 0; }, 1000);
            if (versionClickCount === 5) {
                versionClickCount = 0;
                this.dom.settings.adminPanel.classList.toggle('hidden');
                this.showNotification('Панель администратора ' + (this.dom.settings.adminPanel.classList.contains('hidden') ? 'скрыта' : 'открыта'), 'success');
            }
        });
        this.dom.settings.adminLoadBtn.addEventListener('click', () => this.loadAdminBin());
        this.dom.settings.adminDeleteBtn.addEventListener('click', () => this.deleteAdminBin());

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
    },

    async handleStartSetup() {
        if (this.state.settings.geminiApiKey) {
            this.showNotification('Проверка API ключа...', 'loading');
            try {
                this.ai = new GoogleGenAI({ apiKey: this.state.settings.geminiApiKey });
                await this.ai.models.generateContent({model:'gemini-2.5-flash', contents: 'test'});
                this.hideNotification();
                if (this.state.menu && this.state.menu.length > 0) {
                     this.showScreen('main-screen');
                     this.renderAll();
                } else {
                    this.showWizard();
                    this.wizard.currentStep = 2; 
                    this.renderWizard();
                }
            } catch (e) {
                this.showNotification('API ключ недействителен. Введите новый.', 'error');
                this.state.settings.geminiApiKey = null; 
                this.saveStateToLocal();
                this.showWizard();
            }
        } else {
            this.showWizard();
        }
    },

    saveStateToLocal() {
        try {
            localStorage.setItem('familyMenuState', JSON.stringify(this.state));
        } catch (e) {
            console.error("Failed to save state to local storage:", e);
        }
    },
    
    async saveState() {
        this.saveStateToLocal();
        await this.syncDataUp();
    },

    async loadState() {
        const localState = localStorage.getItem('familyMenuState');
        if (localState) {
            try {
                this.state = JSON.parse(localState);
                if (!this.state.settings.jsonBin) {
                    this.state.settings.jsonBin = { enabled: false, apiKey: null, binId: null };
                }
            } catch (e) { this.resetState(); }
        }
        
        if (this.state.settings.jsonBin.enabled) {
            await this.syncDataDown();
        }
        
        // Data migration and default values
        this.state.settings.family = this.state.settings.family?.map(p => ({
            name: p.name || 'Член семьи',
            gender: p.gender || 'male',
            age: p.age || 30,
            activity: p.activity || 'средний',
            contact: p.contact || ''
        })) || [];

        if (!this.state.settings.menuDuration) this.state.settings.menuDuration = 7;
        if (!this.state.cookedMeals) this.state.cookedMeals = {};
        if (!this.state.settings.cuisine) this.state.settings.cuisine = "Любая";
        if (!this.state.settings.difficulty) this.state.settings.difficulty = "Любая";

         if (this.state.shoppingList) {
             this.state.shoppingList.forEach(cat => {
                (cat.items || []).forEach(item => {
                    if (!item.id) item.id = `item-${Date.now()}-${Math.random()}`;
                    if (item.purchases === undefined) item.purchases = item.completed ? [{ qty: item.shoppingSuggestion?.qty || 1, price: item.price }] : [];
                });
             });
         } else {
             this.state.shoppingList = [];
         }
    },

    resetState() {
        localStorage.clear();
        window.location.reload();
    },
    
    showScreen(screenId) {
        this.dom.screens.forEach(screen => {
            const isTarget = screen.id === screenId;
            screen.classList.toggle('hidden', !isTarget);
            if (screen.id === 'recipe-screen' || screen.id === 'splash-screen') {
                screen.classList.toggle('active', isTarget);
            }
        });
        if (screenId === 'main-screen') {
            document.getElementById('main-screen').classList.remove('hidden');
            this.renderAll();
        } else if (screenId === 'setup-screen' || screenId === 'welcome-screen') {
             document.getElementById(screenId).classList.remove('hidden');
        }
    },

    showWizard() {
        this.showScreen('setup-screen');
        this.wizard.currentStep = 1;
        this.renderWizard();
    },

    renderWizard() {
        const { currentStep, totalSteps } = this.wizard;
        
        this.dom.apiKeyInput.value = this.state.settings.geminiApiKey || '';
        this.dom.wizardJsonBinBinId.value = this.state.settings.jsonBin.binId || '';
        this.dom.wizardJsonBinApiKey.value = this.state.settings.jsonBin.apiKey || '';
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

        this.dom.wizardBackBtn.disabled = currentStep === 1;
        this.dom.wizardNextBtn.textContent = currentStep === totalSteps ? 'Начать генерацию' : 'Далее';
        
        if (currentStep === 3) {
            this.renderFamilyMembers(true);
        }
    },

    async navigateWizard(direction) {
        const { currentStep, totalSteps } = this.wizard;
        if (direction > 0) { // Moving forward
            if (currentStep === 1) {
                const apiKey = this.dom.apiKeyInput.value.trim();
                if (!apiKey) { this.showNotification('Пожалуйста, введите Gemini API ключ.', 'error'); return; }
                this.state.settings.geminiApiKey = apiKey;
            } else if (currentStep === 2) {
                const binId = this.dom.wizardJsonBinBinId.value.trim();
                const apiKey = this.dom.wizardJsonBinApiKey.value.trim();
                if(apiKey) {
                    this.state.settings.jsonBin = { enabled: true, binId: binId || null, apiKey };
                } else {
                    this.state.settings.jsonBin = { enabled: false, binId: null, apiKey: null };
                }
            } else if (currentStep === 3) {
                if (this.state.settings.family.length === 0) { this.showNotification('Добавьте хотя бы одного члена семьи.', 'error'); return; }
            } else if (currentStep === 4) {
                this.state.settings.menuDuration = parseInt(this.dom.wizardDuration.value) || 7;
                this.state.settings.totalBudget = parseInt(this.dom.wizardBudget.value) || 10000;
                this.state.settings.preferences = this.dom.wizardPreferences.value;
                this.state.settings.cuisine = this.dom.wizardCuisine.value;
                this.state.settings.difficulty = this.dom.wizardDifficulty.value;
            } else if (currentStep === totalSteps) {
                this.saveStateToLocal();
                await this.startGenerationProcess();
                return;
            }
        }
        
        this.wizard.currentStep += direction;
        if (this.wizard.currentStep < 1) this.wizard.currentStep = 1;
        this.renderWizard();
    },

    async startGenerationProcess(isRegenerating = false, purchasedItems = '') {
        if (!this.state.settings.geminiApiKey) {
            alert('API ключ не найден.');
            this.showWizard();
            return;
        }
        
        this.dom.setupWizard.classList.add('hidden');
        this.dom.wizardNav.classList.add('hidden');
        this.dom.wizardStepCounter.classList.add('hidden');
        this.dom.generationProgress.classList.remove('hidden');
        if (isRegenerating) this.showScreen('setup-screen');
        
        try {
            // If sync is enabled but no binId, create one now.
            if (this.state.settings.jsonBin.enabled && !this.state.settings.jsonBin.binId) {
                const newBinId = await this.createNewBin();
                if (newBinId) {
                    this.state.settings.jsonBin.binId = newBinId;
                } else {
                    throw new Error("Failed to create a new online storage bin.");
                }
            }

            this.ai = new GoogleGenAI({ apiKey: this.state.settings.geminiApiKey });
            await this.updateProgress(1, 5, "Подключение к Google Gemini…", "Проверка ключа...");
            await this.ai.models.generateContent({model:'gemini-2.5-flash', contents: 'test'});
            this.logToConsole('✅ API KEY VALIDATED');
            this.dom.progressDetails.innerHTML += '<br>✅ Ключ активен. Доступ к Gemini получен.';
            
            await this.generateMenu(purchasedItems);
            if (!this.state.menu || this.state.menu.length === 0) {
                throw new Error("Menu generation failed or returned empty data. Please check your prompt and settings.");
            }
            await this.generateRecipes();
            await this.generateShoppingList();
            
            await this.updateProgress(5, 5, "Готово!", "Добро пожаловать в 'СЕМЕЙНОЕ МЕНЮ'.");
            this.dom.finishSetupBtn.classList.remove('hidden');
            this.dom.finishSetupBtn.classList.add('reveal');
            
            this.state.timestamp = new Date().toISOString();
            await this.saveState();

        } catch (error) {
            console.error("Generation failed:", error);
            this.updateProgress(0, 5, "Ошибка!", `Не удалось сгенерировать меню. ${error.message}`);
            this.dom.finishSetupBtn.textContent = 'Назад к настройкам';
            this.dom.finishSetupBtn.classList.remove('hidden');
            this.dom.finishSetupBtn.onclick = () => window.location.reload();
            if(!isRegenerating) {
                this.state.settings.geminiApiKey = null;
                this.saveStateToLocal();
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
                const result = await this.ai.models.generateContent({
                  model: "gemini-2.5-flash",
                  contents: [{ parts: [{ text: prompt }] }],
                  config: {
                    responseMimeType: "application/json",
                    responseSchema: jsonSchema
                  }
                });
                const jsonText = result.text.trim();
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

    async generateMenu(purchasedItems = '') {
        const { family, menuDuration, preferences, cuisine, difficulty } = this.state.settings;
        await this.updateProgress(2, 5, "Генерация меню...", `Для вашей семьи на ${menuDuration} дней.`);
        const familyDescription = family.map(p => `${p.name} (${p.gender === 'male' ? 'Мужчина' : 'Женщина'}, ${p.age} лет, активность: ${p.activity})`).join('; ');
        
        let prompt = `Сгенерируй разнообразное и сбалансированное меню на ${menuDuration} дней (с воскресенья по субботу) для семьи: ${familyDescription}. 
        Учти их потребности в калориях.
        Общие предпочтения: ${preferences}.
        Предпочитаемая кухня: ${cuisine}.
        Желаемая сложность блюд: ${difficulty}.
        Каждый день должен включать: Завтрак, Перекус, Обед, Полдник, Ужин. Иногда используй остатки от ужина на обед следующего дня (помечай их как "Название блюда (остатки)").`;
        
        if (purchasedItems) {
            prompt += `\nВАЖНО: При составлении меню отдай приоритет блюдам, в которых используются уже купленные продукты. Список купленных продуктов: ${purchasedItems}.`;
        }

        const schema = {type: Type.ARRAY, items: {type: Type.OBJECT, properties: {day: {type: Type.STRING}, meals: {type: Type.OBJECT, properties: {breakfast: {type: Type.STRING}, snack1: {type: Type.STRING}, lunch: {type: Type.STRING}, snack2: {type: Type.STRING}, dinner: {type: Type.STRING}}, required: ["breakfast", "snack1", "lunch", "snack2", "dinner"]}}, required: ["day", "meals"]}};
        this.state.menu = await this.makeGeminiRequest(prompt, schema);
        this.dom.progressDetails.innerHTML += `<br>✅ Сгенерировано меню.`;
    },
    
    async generateRecipes() {
        await this.updateProgress(3, 5, "Генерация рецептов…", "Создаём пошаговые инструкции...");
        const uniqueMeals = [...new Set(this.state.menu.flatMap(d => Object.values(d.meals)))].filter(name => name && !name.includes("(остатки)"));
        if (uniqueMeals.length === 0) {
             this.dom.progressDetails.innerHTML += `<br>⚠️ Не найдено новых блюд для генерации рецептов.`;
             return;
        }
        const familySize = this.state.settings.family.length;
        const schema = {type: Type.OBJECT, properties: {id: {type: Type.STRING}, name: {type: Type.STRING}, ingredients: {type: Type.ARRAY, items: {type: Type.OBJECT, properties: {name: {type: Type.STRING}, quantity: {type: Type.STRING}}, required: ["name", "quantity"]}}, steps: {type: Type.ARRAY, items: {type: Type.OBJECT, properties: {description: {type: Type.STRING}, time: {type: Type.NUMBER, description: "Время в минутах. 0 если таймер не нужен."}, ingredients: {type: Type.ARRAY, items: {type: Type.OBJECT, properties: { name: {type: Type.STRING}, quantity: {type: Type.STRING, description: "Количество и единица измерения, например '200 г' или '1 шт'"} }, required: ["name", "quantity"] }}}, required: ["description", "time", "ingredients"]}}}, required: ["id", "name", "ingredients", "steps"]}};
        
        this.state.recipes = {};
        for (const mealName of uniqueMeals) {
            this.dom.progressDetails.textContent = `Обрабатывается: "${mealName}"...`;
            const prompt = `Создай детальный рецепт для блюда "${mealName}" для семьи из ${familySize} человек (${this.state.settings.family.length} порции). В каждом шаге укажи конкретное количество ингредиентов, используемых на этом шаге.`;
            const recipeData = await this.makeGeminiRequest(prompt, schema);
            this.state.recipes[recipeData.id] = recipeData;
        }
        this.dom.progressDetails.innerHTML += `<br>✅ Все ${uniqueMeals.length} рецептов сгенерированы.`;
    },

    async generateShoppingList() {
        await this.updateProgress(4, 5, "Формирование списка покупок…", "Собираем все ингредиенты...");
        if (Object.keys(this.state.recipes).length === 0) {
            this.dom.progressDetails.innerHTML += `<br>⚠️ Нет рецептов для создания списка покупок.`;
            this.state.shoppingList = [];
            return;
        }
        const allIngredients = Object.values(this.state.recipes).flatMap(r => r.ingredients);
        const prompt = `Сгруппируй и суммируй этот список ингредиентов. Категории: "Мясо и птица", "Молочные и яйца", "Овощи и зелень", "Фрукты и орехи", "Бакалея", "Хлеб и выпечка", "Напитки", "Прочее". Для каждого ингредиента верни общее необходимое количество (totalNeeded). Затем предложи разумное количество для покупки в магазине (shoppingSuggestion), округляя в большую сторону до стандартной упаковки (например, для 750г муки предложи купить 1кг). Укажи примерную цену в рублях за предложенное количество для покупки. Ингредиенты: ${JSON.stringify(allIngredients)}`;
        const schema = { type: Type.ARRAY, items: { type: Type.OBJECT, properties: { category: { type: Type.STRING }, items: { type: Type.ARRAY, items: { type: Type.OBJECT, properties: { name: { type: Type.STRING }, totalNeeded: { type: Type.OBJECT, properties: { qty: { type: Type.NUMBER }, unit: { type: Type.STRING }}}, shoppingSuggestion: { type: Type.OBJECT, properties: { qty: { type: Type.NUMBER }, unit: { type: Type.STRING }}}, price: { type: Type.NUMBER } }, required: ["name", "totalNeeded", "shoppingSuggestion", "price"] } } }, required: ["category", "items"] } };
        const shoppingListData = await this.makeGeminiRequest(prompt, schema);
        
        shoppingListData.forEach(category => {
            category.items.forEach(item => {
                item.id = `item-${Date.now()}-${Math.random()}`;
                item.purchases = [];
            });
        });
        
        this.state.shoppingList = shoppingListData;
        const totalCost = shoppingListData.flatMap(c => c.items).reduce((sum, item) => sum + item.price, 0);
        this.dom.progressDetails.innerHTML += `<br>✅ Список из ${shoppingListData.flatMap(c => c.items).length} продуктов сгруппирован. Итого: ${totalCost} ₽`;
    },
    
    renderAll() {
        this.renderSettings();
        this.renderMenu();
        this.renderShoppingList();
        this.renderBudget();
    },

    renderMenu() {
        if (!this.state.menu || this.state.menu.length === 0) return;
        this.dom.dayScroller.innerHTML = '';
        const daysOrder = ["ВОСКРЕСЕНЬЕ", "ПОНЕДЕЛЬНИК", "ВТОРНИК", "СРЕДА", "ЧЕТВЕРГ", "ПЯТНИЦА", "СУББОТА"];
        
        const validMenuData = this.state.menu.filter(day => day && day.day && day.meals);
        
        const sortedMenu = [...validMenuData].sort((a, b) => {
            return daysOrder.indexOf(a.day.toUpperCase()) - daysOrder.indexOf(b.day.toUpperCase());
        });
        
        sortedMenu.forEach((dayData) => {
            const dayCard = document.createElement('div');
            dayCard.className = 'day-card';
            
            const mealHtml = (icon, mealName, mealKey, dayName) => {
                const cleanName = (mealName || 'Не указано').replace(/\s*\(остатки\)/i, '');
                const isLeftover = (mealName || '').includes('(остатки)');
                const hasContent = mealName && mealName.trim() !== '' && mealName.trim() !== 'Не указано';
                const hasRecipe = !isLeftover && hasContent;
                const isCooked = this.state.cookedMeals[dayName] && this.state.cookedMeals[dayName].includes(mealKey);
                
                return `
                <div class="meal ${hasRecipe ? 'clickable' : ''} ${isCooked ? 'cooked' : ''}" data-meal-name="${mealName || ''}" data-meal-key="${mealKey}" data-day-name="${dayName}">
                    <button class="cooked-toggle" aria-label="Отметить как приготовленное">
                        <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    </button>
                    <span class="meal-icon">${icon}</span>
                    <span class="meal-name">${cleanName}</span>
                    ${isLeftover ? '<span class="leftover-icon">🔄</span>' : ''}
                    ${hasContent ? `<button class="regenerate-btn" title="Перегенерировать блюдо">🔄</button>` : ''}
                </div>`;
            };

            dayCard.innerHTML = `
                <div class="day-title-container">
                    <h3 class="day-title">${dayData.day}</h3>
                    <button class="regenerate-btn" data-day-name="${dayData.day}" title="Перегенерировать день">🔄</button>
                </div>
                ${mealHtml('☀️', dayData.meals.breakfast, 'breakfast', dayData.day)}
                ${mealHtml('🍎', dayData.meals.snack1, 'snack1', dayData.day)}
                ${mealHtml('🍲', dayData.meals.lunch, 'lunch', dayData.day)}
                ${mealHtml('🥛', dayData.meals.snack2, 'snack2', dayData.day)}
                ${mealHtml('🌙', dayData.meals.dinner, 'dinner', dayData.day)}
            `;
            this.dom.dayScroller.appendChild(dayCard);
        });
    },

    toggleCookedStatus(dayName, mealKey) {
        if (!this.state.cookedMeals[dayName]) {
            this.state.cookedMeals[dayName] = [];
        }
        const mealIndex = this.state.cookedMeals[dayName].indexOf(mealKey);
        if (mealIndex > -1) {
            this.state.cookedMeals[dayName].splice(mealIndex, 1);
        } else {
            this.state.cookedMeals[dayName].push(mealKey);
        }
        this.saveState();
        this.renderMenu(); // Re-render to update the view
    },

    renderShoppingList() {
        if (!this.state.shoppingList) return;
        this.dom.shoppingListContainer.innerHTML = '';
        
        this.state.shoppingList.forEach((category) => {
            const categoryElement = document.createElement('div');
            categoryElement.className = 'category-group';

            const sortedItems = [...category.items].sort((a, b) => {
                const isACompleted = (a.purchases || []).reduce((s, p) => s + p.qty, 0) >= a.shoppingSuggestion.qty;
                const isBCompleted = (b.purchases || []).reduce((s, p) => s + p.qty, 0) >= b.shoppingSuggestion.qty;
                if (isACompleted === isBCompleted) return 0;
                return isACompleted ? 1 : -1;
            });
            
            const itemsHtml = sortedItems.map((item) => {
                const totalPurchased = (item.purchases || []).reduce((sum, p) => sum + p.qty, 0);
                const isCompleted = totalPurchased >= item.shoppingSuggestion.qty;
                const progressPercent = Math.min((totalPurchased / item.shoppingSuggestion.qty) * 100, 100);

                const radius = 10;
                const circumference = 2 * Math.PI * radius;
                const offset = circumference - (progressPercent / 100) * circumference;

                return `
                <li class="shopping-item ${isCompleted ? 'completed' : ''}" data-item-id="${item.id}">
                    <div class="item-checkbox-progress">
                        <svg viewBox="0 0 24 24">
                          <circle class="bg" cx="12" cy="12" r="${radius}"></circle>
                          <circle class="progress" cx="12" cy="12" r="${radius}" stroke-dasharray="${circumference}" stroke-dashoffset="${offset}"></circle>
                        </svg>
                        <span class="checkmark">✔</span>
                    </div>
                    <div class="item-details">
                        <span class="item-name">${item.name}</span>
                        <div class="item-quantity">Купить: ${item.shoppingSuggestion.qty.toLocaleString()} ${item.shoppingSuggestion.unit}</div>
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
        const spentPercent = totalBudget > 0 ? (spentOnProducts / totalBudget) * 100 : 0;
        
        this.dom.budget.pieProducts.style.strokeDasharray = `${spentPercent} 100`;
        this.dom.budget.spentTotal.innerHTML = `${spentOnProducts.toLocaleString('ru-RU')} ₽ <span>потрачено</span>`;
        this.dom.budget.total.textContent = `${totalBudget.toLocaleString('ru-RU')} ₽`;
        this.dom.budget.remaining.textContent = `${remaining.toLocaleString('ru-RU')} ₽`;
        this.dom.budget.remaining.className = `amount ${remaining >= 0 ? 'ok' : 'warning'}`;
    },
    
    checkIngredientsForRecipe(recipeId) {
        const recipe = this.state.recipes[recipeId];
        if (!recipe || !recipe.ingredients) {
            this.showRecipe(recipeId);
            return;
        }

        const flatShoppingList = this.state.shoppingList.flatMap(c => c.items);
        const missingIngredients = [];

        recipe.ingredients.forEach(ing => {
            const shopItem = flatShoppingList.find(item => item.name.toLowerCase() === ing.name.toLowerCase());
            if (shopItem) {
                 const totalPurchased = (shopItem.purchases || []).reduce((sum, p) => sum + p.qty, 0);
                 if (totalPurchased < shopItem.totalNeeded.qty) {
                     missingIngredients.push(shopItem);
                 }
            } else {
                missingIngredients.push({name: ing.name, shoppingSuggestion: {qty: 1, unit: 'шт'}});
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
            const flatShoppingList = this.state.shoppingList.flatMap(c => c.items);
            stepData.ingredients.forEach(ing => {
                const li = document.createElement('li');
                const shopItem = flatShoppingList.find(item => item.name.toLowerCase().includes(ing.name.toLowerCase()) || ing.name.toLowerCase().includes(item.name.toLowerCase()));
                let statusClass = 'unknown';
                let statusIcon = '❔';
                if (shopItem) {
                    const totalPurchased = (shopItem.purchases || []).reduce((sum, p) => sum + p.qty, 0);
                    if (totalPurchased >= shopItem.totalNeeded.qty) {
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
        if (!this.ai) return;
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
            const { dayName, mealKey } = mealInfo;
            if (!this.state.cookedMeals[dayName]) {
                this.state.cookedMeals[dayName] = [];
            }
            if (!this.state.cookedMeals[dayName].includes(mealKey)) {
                this.state.cookedMeals[dayName].push(mealKey);
                this.saveState();
            }
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
            this.showSystemNotification("Таймер завершен!", `Можно переходить к следующему шагу приготовления.`);
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
        if (contentId === 'settings-content') this.renderSettings();
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
    
    openPurchaseModal(catIndex, itemIndex) {
        const item = this.state.shoppingList[catIndex].items[itemIndex];
        const remainingQty = item.shoppingSuggestion.qty - (item.purchases || []).reduce((s,p) => s + p.qty, 0);
        const body = `
            <div class="modal-form-group">
                <label for="purchase-qty">Количество (${item.shoppingSuggestion.unit})</label>
                <input type="number" id="purchase-qty" class="modal-input" value="${remainingQty}">
            </div>
            <div class="modal-form-group">
                <label for="purchase-price">Общая цена, ₽</label>
                <input type="number" id="purchase-price" class="modal-input" value="${item.price}">
            </div>`;

        this.showModal(`Покупка: ${item.name}`, body, [
            { text: "Отмена", class: "secondary", action: () => {} },
            { text: "Куплено", class: "primary", action: () => {
                const qty = parseFloat(document.getElementById('purchase-qty').value);
                const price = parseFloat(document.getElementById('purchase-price').value);
                if (isNaN(qty) || isNaN(price) || qty <= 0) {
                    this.showNotification("Введите корректные данные", "error");
                    return;
                }
                if (!this.state.shoppingList[catIndex].items[itemIndex].purchases) {
                    this.state.shoppingList[catIndex].items[itemIndex].purchases = [];
                }
                this.state.shoppingList[catIndex].items[itemIndex].purchases.push({ qty, price, date: new Date().toISOString() });
                this.saveState();
                this.renderShoppingList();
                this.renderBudget();
            }}
        ]);
    },

    openUndoPurchaseModal(catIndex, itemIndex) {
        const item = this.state.shoppingList[catIndex].items[itemIndex];
        let purchasesHtml = (item.purchases || []).map((p, index) => `
            <li class="family-member-card">
                <span>${p.qty} ${item.shoppingSuggestion.unit} - ${p.price} ₽</span>
                <button data-purchase-index="${index}">❌</button>
            </li>`).join('');
        if (!purchasesHtml) purchasesHtml = "<p>Нет записей о покупках.</p>";

        const body = `<ul style="list-style: none; padding: 0;">${purchasesHtml}</ul>`;
        this.showModal("Отменить покупку?", body, [{ text: "Закрыть", class: "primary", action: () => {} }]);

        document.querySelectorAll('[data-purchase-index]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const purchaseIndex = parseInt(e.target.dataset.purchaseIndex);
                this.state.shoppingList[catIndex].items[itemIndex].purchases.splice(purchaseIndex, 1);
                this.saveState();
                this.renderShoppingList();
                this.renderBudget();
                this.hideModal();
            });
        });
    },
    
    showMissingIngredientsWarning(missingItems, recipeId) {
        const itemsList = missingItems.map(item => `<li>${item.name}</li>`).join('');
        const body = `
            <p>Для приготовления этого блюда не хватает следующих ингредиентов:</p>
            <ul>${itemsList}</ul>
            <p>Хотите всё равно открыть рецепт?</p>
        `;
        this.showModal("Не хватает ингредиентов!", body, [
            { text: 'Отмена', class: 'secondary', action: () => {} },
            { text: 'Продолжить', class: 'primary', action: () => this.showRecipe(recipeId) }
        ]);
    },

    // SETTINGS LOGIC
    renderSettings() {
        const s = this.state.settings;
        this.dom.settings.duration.value = s.menuDuration;
        this.dom.settings.budget.value = s.totalBudget;
        this.dom.settings.preferences.value = s.preferences;
        this.dom.settings.cuisine.value = s.cuisine;
        this.dom.settings.difficulty.value = s.difficulty;
        this.dom.settings.geminiApiKeyInput.value = s.geminiApiKey || '';
        this.dom.settings.jsonBinBinId.value = s.jsonBin.binId || '';
        this.dom.settings.jsonBinApiKey.value = s.jsonBin.apiKey || '';
        this.dom.settings.appVersionInfo.textContent = `Версия приложения: ${this.version}`;
        this.renderFamilyMembers();
    },
    saveSettings() {
        const s = this.state.settings;
        s.menuDuration = parseInt(this.dom.settings.duration.value) || 7;
        s.totalBudget = parseInt(this.dom.settings.budget.value) || 10000;
        s.preferences = this.dom.settings.preferences.value;
        s.cuisine = this.dom.settings.cuisine.value;
        s.difficulty = this.dom.settings.difficulty.value;
        this.saveState();
        this.renderBudget(); 
        this.showNotification("Настройки сохранены. Чтобы они применились, перегенерируйте меню.");
    },
    async saveApiKey() {
        const newApiKey = this.dom.settings.geminiApiKeyInput.value.trim();
        if (!newApiKey) { this.showNotification('API ключ не может быть пустым', 'error'); return; }
        this.showNotification('Проверка ключа...', 'loading');
        try {
            const testAI = new GoogleGenAI({ apiKey: newApiKey });
            await testAI.models.generateContent({model:'gemini-2.5-flash', contents: 'test'});
            
            this.state.settings.geminiApiKey = newApiKey;
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
        this.state.settings.family.forEach((person, index) => {
            const card = document.createElement('div');
            card.className = 'family-member-card';
            const genderText = person.gender === 'male' ? 'Мужчина' : 'Женщина';
            card.innerHTML = `
                <span>${person.name} (${genderText}, ${person.age} лет)</span>
                <button data-index="${index}">❌</button>
            `;
            card.querySelector('button').addEventListener('click', () => {
                this.state.settings.family.splice(index, 1);
                this.renderFamilyMembers(isWizard);
                if (!isWizard) {
                    this.saveState();
                    this.showNotification("Состав семьи обновлен.");
                }
            });
            container.appendChild(card);
        });
    },
    openFamilyMemberModal(isWizard = false, person = null, index = -1) {
        const title = person ? "Редактировать" : "Добавить члена семьи";
        const body = `
            <div class="modal-form-group">
                <label for="member-name">Имя</label>
                <input type="text" id="member-name" class="modal-input" value="${person?.name || ''}" placeholder="Евгений">
            </div>
            <div class="modal-form-group">
                <label for="member-gender">Пол</label>
                <select id="member-gender" class="modal-input">
                    <option value="male" ${person?.gender === 'male' ? 'selected' : ''}>Мужской</option>
                    <option value="female" ${person?.gender === 'female' ? 'selected' : ''}>Женский</option>
                </select>
            </div>
            <div class="modal-form-group">
                <label for="member-age">Возраст</label>
                <input type="number" id="member-age" class="modal-input" value="${person?.age || 30}">
            </div>
            <div class="modal-form-group">
                <label for="member-activity">Уровень активности</label>
                 <select id="member-activity" class="modal-input">
                    <option value="низкий" ${person?.activity === 'низкий' ? 'selected' : ''}>Низкий (сидячая работа)</option>
                    <option value="средний" ${person?.activity === 'средний' ? 'selected' : ''}>Средний (легкие тренировки)</option>
                    <option value="высокий" ${person?.activity === 'высокий' ? 'selected' : ''}>Высокий (физический труд)</option>
                </select>
            </div>
            <div class="modal-form-group">
                <label for="member-contact">Контакт (Telegram username или номер телефона)</label>
                <input type="text" id="member-contact" class="modal-input" value="${person?.contact || ''}" placeholder="eklimov или 79991234567">
            </div>
        `;
        const action = () => {
            const newPerson = {
                name: document.getElementById('member-name').value.trim() || 'Член семьи',
                gender: document.getElementById('member-gender').value,
                age: parseInt(document.getElementById('member-age').value) || 30,
                activity: document.getElementById('member-activity').value,
                contact: document.getElementById('member-contact').value.trim(),
            };
            if (index > -1) {
                this.state.settings.family[index] = newPerson;
            } else {
                this.state.settings.family.push(newPerson);
            }
            this.renderFamilyMembers(isWizard);
            if (!isWizard) {
                this.saveState();
            }
        };
        this.showModal(title, body, [
            { text: "Отмена", class: "secondary", action: () => {} },
            { text: "Сохранить", class: "primary", action: action }
        ]);
    },
    confirmRegenerateAll() {
        this.showModal("Перегенерировать всё меню?",
            "Вы уверены? Это действие создаст совершенно новое меню, рецепты и список покупок на основе ваших текущих настроек.",
            [
                { text: "Отмена", class: "secondary", action: () => {} },
                { text: "Да, перегенерировать", class: "danger", action: async () => {
                    const purchasedItems = this.state.shoppingList
                        .flatMap(c => c.items || [])
                        .filter(i => (i.purchases || []).length > 0)
                        .map(i => i.name)
                        .join(', ');
                    await this.startGenerationProcess(true, purchasedItems);
                }}
            ]
        );
    },
    showChangelogModal() {
        let bodyHtml = '';
        for (const version in this.changelog) {
            bodyHtml += `<h4>Версия ${version}</h4><ul>`;
            this.changelog[version].forEach(change => {
                bodyHtml += `<li>${change}</li>`;
            });
            bodyHtml += '</ul>';
        }
        this.showModal("История изменений", bodyHtml, [{text: 'Закрыть', class: 'primary', action: () => {}}]);
    },
    
    // REGENERATION
    openRegenerateModal(type, data) {
        const title = type === 'meal' ? "Заменить блюдо?" : "Обновить день?";
        const body = type === 'meal' ? `Вы хотите заменить "${this.state.menu.find(d => d.day === data.dayName).meals[data.mealKey]}"?` : `Вы хотите обновить все блюда на ${data.dayName}?`;

        this.showModal(title, body, [
            { text: "Отмена", class: "secondary", action: () => {} },
            { text: "Да, заменить", class: "primary", action: () => this.handleRegeneration(type, data) }
        ]);
    },

    async handleRegeneration(type, data) {
        this.hideModal();
        this.showNotification("Обновляем меню...", 'loading');
        
        try {
            const { dayName, mealKey } = data;
            const currentDay = this.state.menu.find(d => d.day === dayName);
            if (!currentDay) throw new Error("Day not found for regeneration");

            let prompt;
            const mealTypes = { breakfast: 'завтрак', snack1: 'перекус', lunch: 'обед', snack2: 'полдник', dinner: 'ужин' };
            const familyDescription = this.state.settings.family.map(p => `${p.name} (${p.gender === 'male' ? 'Мужчина' : 'Женщина'}, ${p.age} лет, активность: ${p.activity})`).join('; ');
            
            if (type === 'meal') {
                const mealTypeStr = mealTypes[mealKey];
                const otherMeals = Object.values(currentDay.meals).join(', ');
                prompt = `Сгенерируй одно новое блюдо для "${mealTypeStr}" на ${dayName}. Оно должно отличаться от: ${otherMeals}. Учти предпочтения: ${this.state.settings.preferences} и кухню: ${this.state.settings.cuisine}.`;
                const schema = { type: Type.OBJECT, properties: { newMeal: { type: Type.STRING } }, required: ['newMeal'] };
                const result = await this.makeGeminiRequest(prompt, schema);
                currentDay.meals[mealKey] = result.newMeal;
            } else { // regenerate day
                prompt = `Сгенерируй полное меню (Завтрак, Перекус, Обед, Полдник, Ужин) на один день (${dayName}) для семьи: ${familyDescription}. Учти предпочтения: ${this.state.settings.preferences} и кухню: ${this.state.settings.cuisine}.`;
                const schema = {type: Type.OBJECT, properties: {breakfast: {type: Type.STRING}, snack1: {type: Type.STRING}, lunch: {type: Type.STRING}, snack2: {type: Type.STRING}, dinner: {type: Type.STRING}}, required: ["breakfast", "snack1", "lunch", "snack2", "dinner"]};
                const result = await this.makeGeminiRequest(prompt, schema);
                currentDay.meals = result;
            }
            
            // Re-generate recipes and shopping list
            await this.generateRecipes();
            await this.generateShoppingList();

            this.saveState();
            this.renderAll();
            this.showNotification("Меню успешно обновлено!");

        } catch(e) {
            this.showNotification("Ошибка при обновлении.", 'error');
            console.error(e);
        }
    },


    exportData() {
        // Теперь включает учетные данные для синхронизации, как и было запрошено.
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.state));
        const downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href", dataStr);
        downloadAnchorNode.setAttribute("download", `family_menu_backup_${new Date().toISOString().split('T')[0]}.json`);
        document.body.appendChild(downloadAnchorNode);
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
        this.showNotification("Данные экспортированы!");
    },

    importData(event, isQr=false, qrData=null) {
        const importLogic = (dataString) => {
             try {
                let decodedString = dataString;
                // QR data is base64 encoded
                if (isQr) {
                    decodedString = atob(dataString);
                }
                const importedData = JSON.parse(decodedString);

                // Check if it's a sync QR code
                if (importedData.syncCredentials) {
                    this.state.settings.jsonBin = {
                        enabled: true,
                        apiKey: importedData.syncCredentials.apiKey,
                        binId: importedData.syncCredentials.binId
                    };
                    this.showNotification("Настройки синхронизации получены!", "success");
                    this.saveStateToLocal();
                    this.continueInit(); // Reload data from new source
                    return;
                }

                // Standard file import
                if (importedData.settings && importedData.menu && importedData.recipes) {
                    this.showModal("Подтверждение импорта", 
                        "<p>Вы уверены, что хотите импортировать эти данные? Все текущие данные будут перезаписаны.</p>",
                        [
                            { text: "Отмена", class: "secondary", action: () => {} },
                            { text: "Импортировать", class: "primary", action: async () => {
                                this.state = importedData;
                                if (!this.state.settings.jsonBin) {
                                     this.state.settings.jsonBin = { enabled: false, apiKey: null, binId: null };
                                }
                                await this.saveState();
                                this.showNotification("Данные успешно импортированы!");
                                this.showScreen('main-screen');
                                this.renderAll();
                            }}
                        ]
                    );
                } else {
                    throw new Error("Invalid file format");
                }
            } catch (error) {
                console.error("Import error:", error);
                this.showNotification("Ошибка импорта: неверный формат данных.", 'error');
            }
        };

        if (isQr) {
            importLogic(qrData);
        } else {
            const file = event.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = (e) => {
                importLogic(e.target.result);
                event.target.value = '';
            };
            reader.readAsText(file);
        }
    },

    showQrCode() {
        try {
            const { enabled, apiKey, binId } = this.state.settings.jsonBin;
            if (!enabled || !apiKey || !binId) {
                this.showNotification("Сначала настройте онлайн-синхронизацию.", "warning");
                return;
            }
            const dataToEncode = {
                syncCredentials: { apiKey, binId }
            };
            const dataString = btoa(JSON.stringify(dataToEncode));
            const qr = qrcode(0, 'L');
            qr.addData(dataString);
            qr.make();
            const qrImgTag = qr.createImgTag(4, 8);

            const body = `
                <p>Отсканируйте этот QR-код на другом устройстве, чтобы подключить его к этому же онлайн-хранилищу.</p>
                <div id="qr-code-container">${qrImgTag}</div>
                <p style="font-size: 12px; color: var(--warning-color);"><b>Внимание:</b> QR-код содержит ключи доступа к вашим данным. Не делитесь им с посторонними.</p>
            `;
            this.showModal("Синхронизация", body, [{ text: "Закрыть", class: "primary", action: () => {} }]);
        } catch(e) {
            this.showNotification("Ошибка при генерации QR-кода.", "error");
            console.error(e);
        }
    },
    
    async startQrScanner() {
        this.dom.qrScannerOverlay.classList.remove('hidden');
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
            this.showNotification("Ваш браузер не поддерживает доступ к камере.", "error");
            this.stopQrScanner();
            return;
        }
        try {
            this.qrScanner.stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
            this.dom.qrVideo.srcObject = this.qrScanner.stream;
            this.dom.qrVideo.setAttribute("playsinline", true);
            await this.dom.qrVideo.play();
            this.qrScanner.animationFrameId = requestAnimationFrame(this.scanTick.bind(this));
        } catch (err) {
            console.error("QR Scanner Error:", err);
            let message = "Не удалось получить доступ к камере.";
            if (err.name === 'NotAllowedError') {
                message = "Вы не разрешили доступ к камере. Проверьте настройки браузера.";
            } else if (err.name === 'NotFoundError') {
                message = "Камера не найдена на вашем устройстве.";
            }
            this.showNotification(message, "error");
            this.stopQrScanner();
        }
    },


    stopQrScanner() {
        if (this.qrScanner.stream) {
            this.qrScanner.stream.getTracks().forEach(track => track.stop());
        }
        if (this.qrScanner.animationFrameId) {
            cancelAnimationFrame(this.qrScanner.animationFrameId);
        }
        this.dom.qrScannerOverlay.classList.add('hidden');
    },

    scanTick() {
        if (this.dom.qrVideo.readyState === this.dom.qrVideo.HAVE_ENOUGH_DATA) {
            const canvas = this.dom.qrCanvas;
            const video = this.dom.qrVideo;
            canvas.height = video.videoHeight;
            canvas.width = video.videoWidth;
            const ctx = canvas.getContext("2d");
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const code = jsQR(imageData.data, imageData.width, imageData.height, {
                inversionAttempts: "dontInvert",
            });

            if (code) {
                this.stopQrScanner();
                this.importData(null, true, code.data);
            }
        }
        this.qrScanner.animationFrameId = requestAnimationFrame(this.scanTick.bind(this));
    },

    // PWA & NOTIFICATIONS
    registerServiceWorker() {
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js').then(registration => {
                    console.log('SW registered: ', registration);
                }).catch(registrationError => {
                    console.log('SW registration failed: ', registrationError);
                });
            });
        }
    },
    
    async requestNotificationPermission() {
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
        if (isIOS && !navigator.standalone) {
            this.showModal(
                "Уведомления на iPhone/iPad",
                "<p>Чтобы включить push-уведомления на вашем устройстве, сначала необходимо добавить приложение на экран 'Домой'.</p><p>Для этого нажмите кнопку 'Поделиться' в браузере Safari, а затем выберите 'На экран 'Домой''.</p>",
                [{ text: "Понятно", class: "primary", action: () => {} }]
            );
            return;
        }

        if (!("Notification" in window)) {
            this.showNotification("Уведомления не поддерживаются на вашем устройстве.", "error");
            return;
        }
        
        if (Notification.permission === "granted") {
            this.showNotification("Уведомления уже включены. Отправляем тестовое.", "success");
            this.showSystemNotification("Тестовое уведомление", "Если вы видите это, все работает отлично!");
            return;
        }
        
        if (Notification.permission === "denied") {
            this.showNotification("Уведомления заблокированы. Измените настройки браузера.", "error");
            return;
        }

        const permission = await Notification.requestPermission();
        if (permission === "granted") {
            this.showNotification("Уведомления успешно включены!", "success");
            this.showSystemNotification("Проверка", "Теперь вы будете получать уведомления от приложения.");
        } else {
             this.showNotification("Вы не разрешили отправку уведомлений.", "warning");
        }
    },

    showSystemNotification(title, body) {
        if ("Notification" in window && Notification.permission === "granted") {
            navigator.serviceWorker.ready.then(reg => {
                reg.showNotification(title, { body });
            });
        }
    },

    // SYNC
    setSyncStatus(status) {
        this.sync.status = status;
        this.dom.syncStatusIndicator.className = status;
    },

    async syncDataUp() {
        const { enabled, apiKey, binId } = this.state.settings.jsonBin;
        if (!enabled || !apiKey || !binId) return;

        clearTimeout(this.sync.timeout);
        this.setSyncStatus('syncing');

        this.sync.timeout = setTimeout(async () => {
            try {
                const response = await fetch(`https://api.jsonbin.io/v3/b/${binId}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Master-Key': apiKey,
                        'X-Bin-Versioning': 'false'
                    },
                    body: JSON.stringify(this.state)
                });
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                this.logToConsole('⬆️ Data synced up.');
                this.setSyncStatus('synced');
            } catch (e) {
                this.setSyncStatus('error');
                console.error('Sync Up failed', e);
            }
        }, 500); // Debounce saves
    },

    async syncDataDown() {
        const { enabled, apiKey, binId } = this.state.settings.jsonBin;
        if (!enabled || !apiKey || !binId) return;
        this.setSyncStatus('syncing');
        try {
            const response = await fetch(`https://api.jsonbin.io/v3/b/${binId}/latest`, {
                headers: { 'X-Master-Key': apiKey }
            });
            if (!response.ok) {
                 if (response.status === 404) { // This Bin does not exist for this key
                    this.logToConsole('ℹ️ Bin not found. Creating a new one.');
                    await this.syncDataUp(); // Initial push to create it
                    return;
                }
                throw new Error('Failed to fetch from JSONBin');
            }
            const data = await response.json();
            if (data.record && data.record.timestamp) {
                // Only update if remote is newer
                if (!this.state.timestamp || new Date(data.record.timestamp) > new Date(this.state.timestamp)) {
                    this.state = data.record;
                    this.saveStateToLocal();
                    this.logToConsole('⬇️ Data synced down.');
                }
            }
            this.setSyncStatus('synced');
        } catch(e) {
            this.setSyncStatus('error');
            console.error('Sync Down failed', e);
        }
    },
    
    async createNewBin() {
        this.showNotification("Создание нового онлайн-хранилища...", 'loading');
        const { apiKey } = this.state.settings.jsonBin;
        if (!apiKey) {
            this.showNotification("X-Master-Key не найден", "error");
            return null;
        }
        try {
            const response = await fetch('https://api.jsonbin.io/v3/b', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Master-Key': apiKey,
                    'X-Bin-Name': `FamilyMenu_${Date.now()}`
                },
                body: JSON.stringify(this.state) // Push initial state
            });
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const result = await response.json();
            this.logToConsole(`📦 New Bin created: ${result.metadata.id}`);
            this.showNotification("Новое хранилище успешно создано!", "success");
            return result.metadata.id;
        } catch(e) {
            this.showNotification("Ошибка создания хранилища.", 'error');
            console.error('Failed to create new Bin', e);
            return null;
        }
    },


    async saveSyncSettings() {
        const binId = this.dom.settings.jsonBinBinId.value.trim();
        const apiKey = this.dom.settings.jsonBinApiKey.value.trim();

        if (!apiKey) {
            this.state.settings.jsonBin = { enabled: false, apiKey: null, binId: null };
            await this.saveState();
            this.showNotification("Синхронизация отключена (нет X-Master-Key).");
            return;
        }

        this.showNotification("Проверка ключей JSONBin...", 'loading');
        
        // Case 1: Create a new Bin
        if (apiKey && !binId) {
            this.state.settings.jsonBin = { enabled: true, apiKey, binId: null };
            const newBinId = await this.createNewBin();
            if (newBinId) {
                this.state.settings.jsonBin.binId = newBinId;
                this.dom.settings.jsonBinBinId.value = newBinId;
                await this.saveState();
            }
            return; // Exit after creation
        }

        // Case 2: Connect to an existing Bin
        try {
             const response = await fetch(`https://api.jsonbin.io/v3/b/${binId}/latest`, {
                headers: { 'X-Master-Key': apiKey }
            });

            if (!response.ok && response.status !== 404) {
                 throw new Error(`Неверные ключи или проблема с доступом. Статус: ${response.status}`);
            }

            this.state.settings.jsonBin = { enabled: true, apiKey, binId };
            this.saveStateToLocal();
            await this.syncDataDown();
            await this.syncDataUp(); 
            this.showNotification("Настройки синхронизации сохранены!", "success");
            this.renderAll();

        } catch (e) {
            this.showNotification(e.message, 'error');
            console.error(e);
        }
    },
    
    showJsonBinHelpModal() {
        const bodyHtml = `
            <p>JSONBin.io — это бесплатный сервис, который мы используем для безопасного хранения ваших данных онлайн.</p>
            <ol>
                <li>Перейдите на сайт <a href="https://jsonbin.io/" target="_blank">jsonbin.io</a> и зарегистрируйтесь.</li>
                <li>Нажмите на иконку аватара в правом верхнем углу и выберите <strong>API Keys</strong>.</li>
                <li>Скопируйте ваш <strong>X-Master-Key</strong> — это ваш главный ключ доступа.</li>
                <li><b>Чтобы создать новое хранилище,</b> просто вставьте X-Master-Key в настройки и оставьте поле ID хранилища пустым.</li>
                <li><b>Чтобы подключиться к существующему,</b> вставьте X-Master-Key и ID хранилища (Bin ID), который вам передали.</li>
            </ol>
            <p>ID хранилища (Bin ID) можно найти в адресной строке браузера на странице хранилища. Это строка вида <code>/b/66a123...</code>. Нужна только сама строка, без <code>/b/</code>.</p>
        `;
        this.showModal("Как настроить JSONBin.io?", bodyHtml, [{text: 'Понятно', class:'primary', action: ()=>{}}]);
    },
    
    showApiKeyHelpModal() {
        const bodyHtml = `
            <p>Для работы приложения требуется API ключ от сервиса Google AI Studio (Gemini).</p>
            <ol>
                <li>Перейдите на сайт <a href="https://aistudio.google.com/" target="_blank">Google AI Studio</a>.</li>
                <li>Войдите в свой Google аккаунт.</li>
                <li>Нажмите на кнопку <strong>"Get API key"</strong> в левом меню.</li>
                <li>В открывшемся окне нажмите <strong>"Create API key in new project"</strong>.</li>
                <li>Скопируйте сгенерированный ключ и вставьте его в поле ввода в приложении.</li>
            </ol>
            <p style="font-size: 12px; color: var(--warning-color);"><b>Важно:</b> Храните ваш ключ в безопасности и не передавайте его третьим лицам.</p>
        `;
        this.showModal("Как получить API ключ?", bodyHtml, [{text: 'Понятно', class:'primary', action: ()=>{}}]);
    },

    // NEW "ASK TO BUY" FEATURE
    openAskToBuyModal() {
        const familyWithContacts = this.state.settings.family.filter(p => p.contact);
        
        const unpurchasedItems = this.state.shoppingList
            .flatMap(c => c.items)
            .filter(item => {
                const totalPurchased = (item.purchases || []).reduce((sum, p) => sum + p.qty, 0);
                return totalPurchased < item.shoppingSuggestion.qty;
            });

        if (unpurchasedItems.length === 0) {
            this.showNotification("Все товары уже куплены!", "success");
            return;
        }

        if (familyWithContacts.length === 0) {
            this.showNotification("Сначала добавьте контакты членам семьи в настройках.", "warning");
            return;
        }

        const shoppingListText = "Привет! Нужно купить продукты по списку:\n" + unpurchasedItems.map(item => `- ${item.name} (${item.shoppingSuggestion.qty} ${item.shoppingSuggestion.unit})`).join('\n');
        
        let familyButtonsHtml = familyWithContacts.map(person => {
            let link = '#';
            const encodedText = encodeURIComponent(shoppingListText);
            const contact = person.contact.replace(/\s+/g, '');

            if (/^\+?\d+$/.test(contact)) { // Phone number for WhatsApp
                link = `https://wa.me/${contact}?text=${encodedText}`;
            } else { // Assume Telegram username
                link = `https://t.me/${contact.replace('@', '')}`; // A share link is more complex, this opens a chat
            }
            return `<a href="${link}" target="_blank" class="modal-button secondary" style="text-decoration: none;">Отправить ${person.name}</a>`;
        }).join('');

        const body = `
            <p>Кому отправить список покупок?</p>
            <div class="modal-buttons">${familyButtonsHtml}</div>
        `;

        this.showModal("Попросить купить", body, [
            { text: "Отмена", class: "primary", action: () => {} }
        ], false);
    },

    // ADMIN FUNCTIONS
    async loadAdminBin() {
        const binId = this.dom.settings.adminBinIdInput.value.trim();
        const masterKey = this.state.settings.jsonBin.apiKey;
        if (!binId || !masterKey) {
            this.showNotification("Введите Bin ID и убедитесь, что ваш X-Master-Key сохранен.", "warning");
            return;
        }
        this.showNotification(`Загрузка данных из ${binId}...`, "loading");
        try {
            const response = await fetch(`https://api.jsonbin.io/v3/b/${binId}/latest`, {
                headers: { 'X-Master-Key': masterKey }
            });
            if (!response.ok) throw new Error(`Ошибка загрузки: ${response.statusText}`);
            const data = await response.json();
            
            // Temporarily replace state and re-render
            const originalState = JSON.parse(JSON.stringify(this.state));
            this.state = data.record;
            this.renderAll();
            this.hideNotification();
            
            this.showModal("Данные загружены", 
                `<p>Вы просматриваете данные из хранилища <strong>${binId}</strong>. Ваши локальные данные не изменены.</p>`,
                [{ text: "Вернуться к моим данным", class: "primary", action: () => {
                    this.state = originalState;
                    this.renderAll();
                    this.showNotification("Вы вернулись к своим данным.");
                }}]
            );

        } catch(e) {
            this.showNotification(e.message, "error");
        }
    },

    deleteAdminBin() {
        const binId = this.dom.settings.adminDeleteBinIdInput.value.trim();
        const masterKey = this.state.settings.jsonBin.apiKey;
        if (!binId || !masterKey) {
            this.showNotification("Введите Bin ID для удаления и убедитесь, что ваш X-Master-Key сохранен.", "warning");
            return;
        }

        this.showModal("Подтвердите удаление",
            `<p>Вы уверены, что хотите <strong>БЕЗВОЗВРАТНО</strong> удалить хранилище с ID:</p><p style="font-weight: bold; word-wrap: break-word;">${binId}</p><p>Это действие нельзя отменить.</p>`,
            [
                { text: "Отмена", class: "secondary", action: () => {} },
                { text: "Да, удалить", class: "danger", action: async () => {
                    this.showNotification(`Удаление ${binId}...`, "loading");
                     try {
                        const response = await fetch(`https://api.jsonbin.io/v3/b/${binId}`, {
                            method: 'DELETE',
                            headers: { 'X-Master-Key': masterKey }
                        });
                        if (!response.ok) throw new Error(`Ошибка удаления: ${response.statusText}`);
                        this.showNotification(`Хранилище ${binId} успешно удалено.`, "success");
                        this.dom.settings.adminDeleteBinIdInput.value = '';
                     } catch(e) {
                        this.showNotification(e.message, "error");
                     }
                }}
            ]
        );
    },
    
    toggleDevConsole() {
        this.dom.devConsole.classList.toggle('visible');
    },
    logToConsole(message) {
        const p = document.createElement('p');
        p.textContent = `> ${message}`;
        this.dom.logOutput.appendChild(p);
        this.dom.logOutput.scrollTop = this.dom.logOutput.scrollHeight;
    },
    executeCommand(commandStr) {
        this.logToConsole(commandStr);
        const [command, ...args] = commandStr.split(' ');
        switch(command) {
            case 'state':
                console.log(this.state);
                this.logToConsole('Current state logged to browser console.');
                break;
            case 'reset':
                this.resetState();
                break;
            case 'notify':
                this.showNotification(args.join(' ') || 'Test notification');
                break;
            default:
                this.logToConsole('Unknown command.');
        }
        this.dom.commandInput.value = '';
    }
};

document.addEventListener('DOMContentLoaded', () => app.init());