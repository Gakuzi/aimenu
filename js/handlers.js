import { GoogleGenAI } from "https://esm.run/@google/genai";
import { dom } from './dom.js';
import { state, wizardState, recipeState, saveStateToLocal, setState } from './state.js';
import { ai, initializeAi, syncDataUp } from './api.js';
import { showScreen, renderAll, showNotification, renderMenu, renderFamilyMembers, renderRecipeStep, renderShoppingList, renderBudget, hideModal } from './ui.js';
import { showWizard, navigateWizard } from './generation.js';
import { requestNotificationPermission, showSystemNotification } from './pwa.js';
import { exportData, importData, showQrCode, startQrScanner, stopQrScanner } from './data.js';
import { showApiKeyHelpModal, showJsonBinHelpModal, openFamilyMemberModal, openPurchaseModal, openUndoPurchaseModal, confirmRegenerateAll, showChangelogModal, openAskToBuyModal, handleAdminLoad, handleAdminDelete, showMissingIngredientsWarning } from './modals.js';
import { toggleDevConsole, executeCommand } from './utils.js';
import { continueInit } from './main.js';
import { handleRegeneration, startGenerationProcess } from './generation.js';

export async function saveState() {
    saveStateToLocal();
    await syncDataUp();
}

async function handleStartApp() {
    dom.startAppBtn.disabled = true;
    dom.startAppBtn.textContent = 'Загрузка...';

    try {
        await continueInit();
    } catch (error) {
        console.error("Initialization failed:", error);
        showNotification("Произошла ошибка при загрузке. Попробуйте еще раз.", "error");
        dom.startAppBtn.disabled = false;
        dom.startAppBtn.textContent = 'Начать';
    }
    // Кнопка останется неактивной, так как произойдет переход на другой экран
}


function handleNav(e) {
    const button = e.target.closest('.nav-button');
    if (!button) return;
    
    dom.bottomNav.querySelectorAll('.nav-button').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    
    const contentId = button.dataset.content;
    dom.mainHeaderTitle.textContent = button.dataset.title;
    dom.mainContents.forEach(content => {
        content.classList.toggle('active', content.id === contentId);
    });
    if (contentId === 'settings-content') {
        renderAll(); // Re-render settings to ensure it's up to date
    }
}

async function handleStartSetup() {
    if (state.settings.geminiApiKey) {
        showNotification('Проверка API ключа...', 'loading');
        try {
            initializeAi(state.settings.geminiApiKey);
            await ai.models.generateContent({model:'gemini-2.5-flash', contents: 'test'});
            hideNotification();
            if (state.menu && state.menu.length > 0) {
                 showScreen('main-screen');
                 renderAll();
            } else {
                showWizard();
                wizardState.currentStep = 2; 
                renderWizard();
            }
        } catch (e) {
            showNotification('API ключ недействителен. Введите новый.', 'error');
            state.settings.geminiApiKey = null; 
            saveStateToLocal();
            showWizard();
        }
    } else {
        showWizard();
    }
}

function saveSettings() {
    const s = state.settings;
    s.menuDuration = parseInt(dom.settings.duration.value) || 7;
    s.totalBudget = parseInt(dom.settings.budget.value) || 10000;
    s.preferences = dom.settings.preferences.value;
    s.cuisine = dom.settings.cuisine.value;
    s.difficulty = dom.settings.difficulty.value;
    saveState();
    renderBudget(); 
    showNotification("Настройки сохранены. Чтобы они применились, перегенерируйте меню.");
}

async function saveApiKey() {
    const newApiKey = dom.settings.geminiApiKeyInput.value.trim();
    if (!newApiKey) { showNotification('API ключ не может быть пустым', 'error'); return; }
    showNotification('Проверка ключа...', 'loading');
    try {
        const testAI = new GoogleGenAI({ apiKey: newApiKey });
        await testAI.models.generateContent({model:'gemini-2.5-flash', contents: 'test'});
        
        state.settings.geminiApiKey = newApiKey;
        initializeAi(newApiKey);
        saveState();
        showNotification('API ключ успешно сохранен и проверен!');
    } catch (error) {
        console.error("API Key validation failed:", error);
        showNotification('Неверный API ключ. Проверьте его и попробуйте снова.', 'error');
    }
}

async function saveSyncSettings() {
    const binId = dom.settings.jsonBinBinId.value.trim();
    const apiKey = dom.settings.jsonBinApiKey.value.trim();
    
    const { enabled, binId: oldBinId, apiKey: oldApiKey } = state.settings.jsonBin;
    
    state.settings.jsonBin.enabled = !!apiKey;
    state.settings.jsonBin.apiKey = apiKey;
    state.settings.jsonBin.binId = binId;

    if (state.settings.jsonBin.enabled) {
        if (!binId) {
            await startGenerationProcess(true); // This will create a new bin
        } else {
            await saveState();
        }
    } else {
       await saveState();
    }

    renderAll();
}

function toggleCookedStatus(dayName, mealKey) {
    if (!state.cookedMeals[dayName]) {
        state.cookedMeals[dayName] = [];
    }
    const mealIndex = state.cookedMeals[dayName].indexOf(mealKey);
    if (mealIndex > -1) {
        state.cookedMeals[dayName].splice(mealIndex, 1);
    } else {
        state.cookedMeals[dayName].push(mealKey);
    }
    saveState();
    renderMenu();
}

function checkIngredientsForRecipe(recipeId) {
    const recipe = state.recipes[recipeId];
    if (!recipe || !recipe.ingredients) {
        showRecipe(recipeId);
        return;
    }
    const flatShoppingList = state.shoppingList.flatMap(c => c.items);
    const missingIngredients = [];
    recipe.ingredients.forEach(ing => {
        const shopItem = flatShoppingList.find(item => item.name.toLowerCase() === ing.name.toLowerCase());
        if (shopItem) {
             const totalPurchased = (shopItem.purchases || []).reduce((s, p) => s + p.qty, 0);
             if (totalPurchased < shopItem.totalNeeded.qty) {
                 missingIngredients.push(shopItem);
             }
        } else {
            missingIngredients.push({name: ing.name, shoppingSuggestion: {qty: 1, unit: 'шт'}});
        }
    });

    if (missingIngredients.length > 0) {
        showMissingIngredientsWarning(missingIngredients, recipeId);
    } else {
        showRecipe(recipeId);
    }
}

export function showRecipe(recipeId) {
    recipeState.id = recipeId;
    recipeState.step = 0;
    const recipe = state.recipes[recipeId];
    if (!recipe) {
        showNotification(`Не удалось найти рецепт с ID: ${recipeId}.`, 'error');
        return;
    }
    resetTimer();
    const stepData = recipe.steps[0];
    if (stepData.time && stepData.time > 0) {
        recipeState.timer.initialTime = stepData.time * 60;
        recipeState.timer.timeLeft = recipeState.timer.initialTime;
    }
    showScreen('recipe-screen');
    renderRecipeStep();
}

function navigateRecipeStep(direction) {
    const { id, step } = recipeState;
    const recipe = state.recipes[id];
    
    if (direction > 0 && step === recipe.steps.length - 1) {
        finishCooking();
        return;
    }
    
    const newStep = step + direction;
    if (newStep >= 0 && newStep < recipe.steps.length) {
        recipeState.step = newStep;
        resetTimer();
        const stepData = recipe.steps[newStep];
        if (stepData.time && stepData.time > 0) {
            recipeState.timer.initialTime = stepData.time * 60;
            recipeState.timer.timeLeft = recipeState.timer.initialTime;
        }
        renderRecipeStep();
    }
}

function finishCooking() {
    const { id } = recipeState;
    const recipe = state.recipes[id];
    let mealInfo = null;
    for (const day of state.menu) {
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
        toggleCookedStatus(mealInfo.dayName, mealInfo.mealKey);
    }
    showNotification(`"${recipe.name}" приготовлено!`, 'success');
    showScreen('main-screen');
}


// --- Timer Logic ---
function startTimer() {
    const timer = recipeState.timer;
    if (timer.isRunning || timer.timeLeft <= 0) return;
    timer.isRunning = true;
    timer.interval = setInterval(() => {
        timer.timeLeft--;
        updateTimerDisplay();
        if (timer.timeLeft <= 0) {
            stopTimer(true);
        }
    }, 1000);
}

function pauseTimer() {
    const timer = recipeState.timer;
    timer.isRunning = false;
    clearInterval(timer.interval);
}

function stopTimer(finished = false) {
    pauseTimer();
    if (finished) {
        dom.timerDisplay.textContent = "Готово!";
        showSystemNotification("Таймер завершен!", "Можно переходить к следующему шагу приготовления.");
        dom.notificationSound.play().catch(e => console.log("Audio play failed", e));
    }
}

function resetTimer() {
    const timer = recipeState.timer;
    stopTimer();
    timer.timeLeft = timer.initialTime;
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const timer = recipeState.timer;
    const minutes = Math.floor(timer.timeLeft / 60);
    const seconds = timer.timeLeft % 60;
    dom.timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}


export function initializeEventListeners() {
    dom.startAppBtn.addEventListener('click', handleStartApp);
    dom.startSetupWizardBtn.addEventListener('click', handleStartSetup);
    dom.loadFromFileBtn.addEventListener('click', () => dom.importFileInput.click());
    dom.scanQrBtn.addEventListener('click', startQrScanner);
    dom.cancelScanBtn.addEventListener('click', stopQrScanner);
    dom.backToWelcomeBtn.addEventListener('click', () => showScreen('welcome-screen'));
    dom.bottomNav.addEventListener('click', handleNav);
    dom.backToMenuBtn.addEventListener('click', () => showScreen('main-screen'));

    dom.wizardNextBtn.addEventListener('click', () => navigateWizard(1));
    dom.wizardBackBtn.addEventListener('click', () => navigateWizard(-1));
    dom.finishSetupBtn.addEventListener('click', async () => {
        dom.generationProgress.classList.add('hidden');
        dom.finishSetupBtn.classList.add('hidden');
        await syncDataUp();
        showScreen('main-screen');
        renderAll();
    });

    dom.apiKeyHelpLink.addEventListener('click', (e) => { e.preventDefault(); showApiKeyHelpModal(); });
    dom.jsonbinHelpLink.addEventListener('click', (e) => { e.preventDefault(); showJsonBinHelpModal(); });
    dom.settings.jsonBinHelpLinkSettings.addEventListener('click', (e) => { e.preventDefault(); showJsonBinHelpModal(); });

    dom.dayScrollerContainer.addEventListener('click', (e) => {
        const mealElement = e.target.closest('.meal');
        const dayRegenButton = e.target.closest('.day-title-container .regenerate-btn');

        if (mealElement) {
            const { dayName, mealKey, mealName } = mealElement.dataset;
            if (e.target.closest('.cooked-toggle')) {
                toggleCookedStatus(dayName, mealKey);
            } else if (e.target.closest('.regenerate-btn')) {
                handleRegeneration('meal', { dayName, mealKey });
            } else if (mealElement.classList.contains('clickable')) {
                const cleanMealName = mealName.replace(/\s*\(остатки\)/i, '').trim();
                const recipe = Object.values(state.recipes).find(r => r.name === cleanMealName);
                if (recipe) {
                    checkIngredientsForRecipe(recipe.id);
                } else if (cleanMealName) {
                    showNotification(`Рецепт для "${cleanMealName}" не найден.`, 'error');
                }
            }
        } else if (dayRegenButton) {
            handleRegeneration('day', { dayName: dayRegenButton.dataset.dayName });
        }
    });

    dom.shoppingListContainer.addEventListener('click', (e) => {
        const itemElement = e.target.closest('.shopping-item');
        const categoryToggle = e.target.closest('.category-toggle');
        if (itemElement) {
            const { itemId } = itemElement.dataset;
            let foundItem, catIndex, itemIndex;
            for (let i = 0; i < state.shoppingList.length; i++) {
                const foundIdx = state.shoppingList[i].items.findIndex(it => it.id === itemId);
                if (foundIdx !== -1) {
                    foundItem = state.shoppingList[i].items[foundIdx];
                    catIndex = i; itemIndex = foundIdx; break;
                }
            }
            if (foundItem) {
                const totalPurchased = (foundItem.purchases || []).reduce((s, p) => s + p.qty, 0);
                (totalPurchased >= foundItem.shoppingSuggestion.qty) ? openUndoPurchaseModal(catIndex, itemIndex) : openPurchaseModal(catIndex, itemIndex);
            }
        } else if (categoryToggle) {
            const list = categoryToggle.nextElementSibling;
            list.classList.toggle('collapsed');
            categoryToggle.innerHTML = list.classList.contains('collapsed') ? categoryToggle.innerHTML.replace('▼', '▶') : categoryToggle.innerHTML.replace('▶', '▼');
        }
    });

    dom.settings.familyContainer.addEventListener('click', (e) => {
        const removeBtn = e.target.closest('.remove-family-member-btn');
        if (removeBtn) {
            const index = parseInt(removeBtn.dataset.index);
            state.settings.family.splice(index, 1);
            renderFamilyMembers();
            saveState();
            showNotification("Состав семьи обновлен.");
        }
    });

    dom.prevStepBtn.addEventListener('click', () => navigateRecipeStep(-1));
    dom.nextStepBtn.addEventListener('click', () => navigateRecipeStep(1));
    dom.startTimerBtn.addEventListener('click', startTimer);
    dom.pauseTimerBtn.addEventListener('click', pauseTimer);
    dom.resetTimerBtn.addEventListener('click', resetTimer);

    dom.settings.saveBtn.addEventListener('click', saveSettings);
    dom.settings.addMemberBtn.addEventListener('click', () => openFamilyMemberModal());
    dom.wizardAddFamilyMemberBtn.addEventListener('click', () => openFamilyMemberModal(true));
    dom.settings.regenerateAllBtn.addEventListener('click', confirmRegenerateAll);
    dom.settings.saveApiKeyBtn.addEventListener('click', saveApiKey);
    dom.settings.saveSyncSettingsBtn.addEventListener('click', saveSyncSettings);
    dom.settings.runWizardBtn.addEventListener('click', showWizard);
    dom.settings.showChangelogBtn.addEventListener('click', showChangelogModal);
    dom.settings.enableNotificationsBtn.addEventListener('click', requestNotificationPermission);
    dom.settings.scanQrFromSettingsBtn.addEventListener('click', startQrScanner);

    dom.exportBtn.addEventListener('click', exportData);
    dom.importBtn.addEventListener('click', () => dom.importFileInput.click());
    dom.importFileInput.addEventListener('change', importData);
    dom.shareQrBtn.addEventListener('click', showQrCode);
    dom.askToBuyBtn.addEventListener('click', openAskToBuyModal);

    let versionClickCount = 0;
    let versionClickTimer = null;
    dom.settings.appVersionInfo.addEventListener('click', () => {
        versionClickCount++;
        clearTimeout(versionClickTimer);
        versionClickTimer = setTimeout(() => { versionClickCount = 0; }, 1000);
        if (versionClickCount === 5) {
            versionClickCount = 0;
            dom.settings.adminPanel.classList.toggle('hidden');
            showNotification('Панель администратора ' + (dom.settings.adminPanel.classList.contains('hidden') ? 'скрыта' : 'открыта'), 'success');
        }
    });
    dom.settings.adminLoadBtn.addEventListener('click', handleAdminLoad);
    dom.settings.adminDeleteBtn.addEventListener('click', handleAdminDelete);

    let longPressTimer;
    document.body.addEventListener('touchstart', e => { if (e.touches.length === 3) longPressTimer = setTimeout(toggleDevConsole, 1000); });
    document.body.addEventListener('touchend', () => clearTimeout(longPressTimer));
    dom.commandInput.addEventListener('keydown', e => { if (e.key === 'Enter') executeCommand(e.target.value); });
    
    dom.modalOverlay.addEventListener('click', (e) => { if (e.target === dom.modalOverlay) hideModal(); });
}