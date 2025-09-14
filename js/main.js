import { state, loadState, saveState, currentRecipe, timer } from './state.js';
import { dom, cacheDom } from './dom.js';
import { ui } from './ui.js';
import { initEventHandlers } from './handlers.js';
import { api } from './api.js';

export const wizard = {
    currentStep: 1,
    totalSteps: 4,
};

const app = {
    version: '1.2.0',
    changelog: {
        '1.2.0': [
            'Рефакторинг: всё приложение переписано на модульную структуру.',
            'Новинка: ✨ Генерация изображений для шагов рецепта!',
            'Исправлено: Устранены критические ошибки с неработающими кнопками.',
            'Улучшено: Стабильность и производительность приложения.',
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
    
    init() {
        cacheDom();
        initEventHandlers();
        loadState();

        ui.startFeatureShowcaseAnimation();

        const hasSeenSplash = localStorage.getItem('hasSeenSplash');
        const hasData = state.get().settings.apiKey && state.get().menu.length > 0;

        if (hasData) {
            ui.showScreen('main-screen');
            ui.renderAll();
            api.initAi();
        } else if (hasSeenSplash) {
            ui.showScreen('welcome-screen');
        } else {
            ui.showScreen('splash-screen');
        }
    },
    
    async handleStartSetup() {
        if (state.get().settings.apiKey) {
            ui.showNotification('Проверка API ключа...', 'loading');
            try {
                api.initAi();
                await api.makeGeminiRequest('test', { type: 'STRING' }); // Simple test
                ui.hideNotification();
                if (state.get().menu && state.get().menu.length > 0) {
                     ui.showScreen('main-screen');
                     ui.renderAll();
                } else {
                    wizard.currentStep = 2; 
                    ui.showWizard();
                }
            } catch (e) {
                ui.showNotification('API ключ недействителен. Введите новый.', 'error');
                state.update(s => s.settings.apiKey = null);
                saveState();
                ui.showWizard();
            }
        } else {
            ui.showWizard();
        }
    },
    
    async startGenerationProcess(isRegenerating = false, purchasedItems = '') {
        if (!state.get().settings.apiKey) {
            alert('API ключ не найден.');
            ui.showWizard();
            return;
        }
        
        dom.setupWizard.classList.add('hidden');
        dom.wizardNav.classList.add('hidden');
        dom.wizardStepCounter.classList.add('hidden');
        dom.generationProgress.classList.remove('hidden');
        if (isRegenerating) ui.showScreen('setup-screen');
        
        try {
            api.initAi();
            await ui.updateProgress(1, 5, "Подключение к Google Gemini…", "Проверка ключа...");
            await api.makeGeminiRequest('test', { type: 'STRING' });
            state.logToConsole('✅ API KEY VALIDATED');
            ui.updateProgressDetails('✅ Ключ активен. Доступ к Gemini получен.');
            
            await api.generateMenu(purchasedItems);
            if (!state.get().menu || state.get().menu.length === 0) {
                throw new Error("Menu generation failed or returned empty data.");
            }
            await api.generateRecipes();
            await api.generateShoppingList();
            
            await ui.updateProgress(5, 5, "Готово!", "Добро пожаловать в 'СЕМЕЙНОЕ МЕНЮ'.");
            dom.finishSetupBtn.classList.remove('hidden');
            dom.finishSetupBtn.classList.add('reveal');
            
            state.update(s => s.timestamp = new Date().toISOString());
            saveState();

        } catch (error) {
            console.error("Generation failed:", error);
            ui.updateProgress(0, 5, "Ошибка!", `Не удалось сгенерировать меню. ${error.message}`);
            dom.finishSetupBtn.textContent = 'Назад к настройкам';
            dom.finishSetupBtn.classList.remove('hidden');
            dom.finishSetupBtn.onclick = () => window.location.reload();
            if(!isRegenerating) {
                state.update(s => s.settings.apiKey = null);
                saveState();
            }
        }
    },

    toggleCookedStatus(dayName, mealKey) {
        state.update(s => {
            if (!s.cookedMeals[dayName]) {
                s.cookedMeals[dayName] = [];
            }
            const mealIndex = s.cookedMeals[dayName].indexOf(mealKey);
            if (mealIndex > -1) {
                s.cookedMeals[dayName].splice(mealIndex, 1);
            } else {
                s.cookedMeals[dayName].push(mealKey);
            }
        });
        saveState();
        ui.renderMenu();
    },

    checkIngredientsForRecipe(recipeId) {
        const recipe = state.get().recipes[recipeId];
        if (!recipe || !recipe.ingredients) {
            this.showRecipe(recipeId);
            return;
        }

        const flatShoppingList = state.get().shoppingList.flatMap(c => c.items);
        const missingIngredients = [];

        recipe.ingredients.forEach(ing => {
            const shopItem = flatShoppingList.find(item => item.name.toLowerCase() === ing.name.toLowerCase());
            if (shopItem) {
                 const totalPurchased = shopItem.purchases.reduce((sum, p) => sum + p.qty, 0);
                 if (totalPurchased < shopItem.totalNeeded.qty) {
                     missingIngredients.push(shopItem);
                 }
            } else {
                missingIngredients.push({name: ing.name, shoppingSuggestion: {qty: 1, unit: 'шт'}});
            }
        });

        if (missingIngredients.length > 0) {
            ui.showMissingIngredientsWarning(missingIngredients, recipeId);
        } else {
            this.showRecipe(recipeId);
        }
    },

    showRecipe(recipeId) {
        currentRecipe.id = recipeId;
        currentRecipe.step = 0;
        const recipe = state.get().recipes[recipeId];
        if (!recipe) {
            ui.showNotification(`Не удалось найти рецепт с ID: ${recipeId}.`, 'error');
            return;
        }
        ui.showScreen('recipe-screen');
        ui.renderRecipeStep();
    },
    
    navigateRecipeStep(direction) {
        const { id, step } = currentRecipe;
        const recipe = state.get().recipes[id];
        
        if (direction > 0 && step === recipe.steps.length - 1) {
            this.finishCooking();
            return;
        }
        
        const newStep = step + direction;
        if (newStep >= 0 && newStep < recipe.steps.length) {
            currentRecipe.step = newStep;
            ui.renderRecipeStep();
        }
    },

    finishCooking() {
        const { id } = currentRecipe;
        const recipe = state.get().recipes[id];

        let mealInfo = null;
        for (const day of state.get().menu) {
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
            state.update(s => {
                if (!s.cookedMeals[dayName]) {
                    s.cookedMeals[dayName] = [];
                }
                if (!s.cookedMeals[dayName].includes(mealKey)) {
                    s.cookedMeals[dayName].push(mealKey);
                }
            });
            saveState();
        }
        
        ui.showNotification(`"${recipe.name}" приготовлено!`, 'success');
        ui.showScreen('main-screen');
    },

    saveSettings() {
        state.update(s => {
            const settings = s.settings;
            settings.menuDuration = parseInt(dom.settings.duration.value) || 7;
            settings.totalBudget = parseInt(dom.settings.budget.value) || 10000;
            settings.preferences = dom.settings.preferences.value;
            settings.cuisine = dom.settings.cuisine.value;
            settings.difficulty = dom.settings.difficulty.value;
        });
        saveState();
        ui.renderBudget(); 
        ui.showNotification("Настройки сохранены. Чтобы они применились, перегенерируйте меню.");
    },
    
    async saveApiKey() {
        const newApiKey = dom.settings.apiKeyInput.value.trim();
        if (!newApiKey) {
            ui.showNotification('API ключ не может быть пустым', 'error');
            return;
        }
        ui.showNotification('Проверка ключа...', 'loading');
        try {
            const tempAi = new api.GoogleGenAI({ apiKey: newApiKey });
            await tempAi.models.generateContent({model:'gemini-2.5-flash', contents: 'test'});
            
            state.update(s => s.settings.apiKey = newApiKey);
            api.initAi(); // Re-initialize with the new key
            saveState();
            ui.showNotification('API ключ успешно сохранен и проверен!');
        } catch (error) {
            console.error("API Key validation failed:", error);
            ui.showNotification('Неверный API ключ. Проверьте его и попробуйте снова.', 'error');
        }
    },

    exportData() {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state.get()));
        const downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href", dataStr);
        downloadAnchorNode.setAttribute("download", `family_menu_backup_${new Date().toISOString().split('T')[0]}.json`);
        document.body.appendChild(downloadAnchorNode);
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
        ui.showNotification("Данные экспортированы!");
    },

    importData(event) {
        const file = event.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const importedState = JSON.parse(e.target.result);
                if (importedState.settings && importedState.menu && importedState.recipes) {
                    state.set(importedState);
                    saveState();
                    ui.showNotification("Данные успешно импортированы!");
                    ui.showScreen('main-screen');
                    ui.renderAll();
                } else {
                    throw new Error("Invalid file format");
                }
            } catch (error) {
                ui.showNotification("Ошибка импорта: неверный формат файла.", 'error');
            }
        };
        reader.readAsText(file);
        event.target.value = '';
    },
    
    executeCommand(commandStr) {
        state.logToConsole(`> ${commandStr}`);
        try {
            switch(commandStr.toLowerCase()) {
                case 'clear':
                    dom.logOutput.innerHTML = '';
                    break;
                case 'state':
                    console.log(state.get());
                    state.logToConsole('State logged to browser console.');
                    break;
                case 'reset':
                    state.reset();
                    break;
                default:
                    state.logToConsole('Unknown command. Available: clear, state, reset');
            }
        } catch (e) {
            state.logToConsole(`Error: ${e.message}`);
        }
        dom.commandInput.value = '';
    }
};

document.addEventListener('DOMContentLoaded', () => app.init());
