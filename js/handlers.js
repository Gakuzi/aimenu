import { dom } from './dom.js';
import { state, app, currentRecipe, timer } from './state.js';
import { ui } from './ui.js';
import { wizard } from './main.js';
import { api } from './api.js';

function navigateWizard(direction) {
    const { currentStep, totalSteps } = wizard;

    if (direction > 0) {
        if (currentStep === 1) {
            const apiKey = dom.apiKeyInput.value.trim();
            if (!apiKey) {
                ui.showNotification('Пожалуйста, введите API ключ.', 'error');
                return;
            }
            state.update(s => s.settings.apiKey = apiKey);
        } else if (currentStep === 2) {
            if (state.get().settings.family.length === 0) {
                ui.showNotification('Пожалуйста, добавьте хотя бы одного члена семьи.', 'error');
                return;
            }
        } else if (currentStep === 3) {
            state.update(s => {
                s.settings.menuDuration = parseInt(dom.wizardDuration.value) || 7;
                s.settings.totalBudget = parseInt(dom.wizardBudget.value) || 10000;
                s.settings.preferences = dom.wizardPreferences.value;
                s.settings.cuisine = dom.wizardCuisine.value;
                s.settings.difficulty = dom.wizardDifficulty.value;
            });
        } else if (currentStep === totalSteps) {
            state.save();
            app.startGenerationProcess();
            return;
        }
    }
    
    wizard.currentStep += direction;
    ui.renderWizard();
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
    if (contentId === 'settings-content') ui.renderSettings();
    if (contentId === 'budget-content') ui.renderBudget();
    if (contentId === 'shopping-list-content') ui.renderShoppingList();

}

function handleMenuClick(e) {
    const mealElement = e.target.closest('.meal');
    if (!mealElement) return;

    const { mealName, mealKey, dayName } = mealElement.dataset;
    
    if (e.target.closest('.cooked-toggle')) {
        e.stopPropagation();
        app.toggleCookedStatus(dayName, mealKey);
        return;
    }
    
    if (e.target.closest('.regenerate-btn')) {
        e.stopPropagation();
        ui.openRegenerateModal('meal', { dayName, mealKey });
        return;
    }

    if (mealElement.classList.contains('clickable')) {
        const cleanName = mealName.replace(/\s*\(остатки\)/i, '').trim();
        const recipe = Object.values(state.get().recipes).find(r => r.name === cleanName);
        if (recipe) {
            app.checkIngredientsForRecipe(recipe.id);
        } else if (cleanName) {
            ui.showNotification(`Рецепт для "${cleanName}" не найден.`, 'error');
        }
    }
}

function handleDayCardClick(e) {
    const regenerateBtn = e.target.closest('.regenerate-btn');
    if (regenerateBtn && !regenerateBtn.closest('.meal')) {
        e.stopPropagation();
        const dayName = regenerateBtn.dataset.dayName;
        ui.openRegenerateModal('day', { dayName });
    }
}

function handleShoppingListClick(e) {
    const itemEl = e.target.closest('.shopping-item');
    if(itemEl) {
        const { catIndex, itemIndex } = itemEl.dataset;
        ui.openPurchaseModal(parseInt(catIndex), parseInt(itemIndex));
        return;
    }

    const categoryToggle = e.target.closest('.category-toggle');
    if (categoryToggle) {
        const list = categoryToggle.nextElementSibling;
        list.classList.toggle('collapsed');
        categoryToggle.innerHTML = list.classList.contains('collapsed') ? categoryToggle.innerHTML.replace('▼', '▶') : categoryToggle.innerHTML.replace('▶', '▼');
    }
}

async function handleGenerateImage() {
    const { id, step } = currentRecipe;
    if (id === null) return;

    ui.setRecipeImageState('loading');
    const imageUrl = await api.generateStepImage(id, step);
    
    if (currentRecipe.id === id && currentRecipe.step === step) {
        if (imageUrl) {
            ui.setRecipeImageState('loaded', imageUrl);
        } else {
            ui.showNotification('Не удалось сгенерировать изображение.', 'error');
            ui.setRecipeImageState('placeholder');
        }
    }
}

export function initEventHandlers() {
    dom.startAppBtn.addEventListener('click', () => {
        localStorage.setItem('hasSeenSplash', 'true');
        ui.showScreen('welcome-screen');
    });
    
    dom.startSetupWizardBtn.addEventListener('click', () => app.handleStartSetup());
    dom.loadFromFileBtn.addEventListener('click', () => dom.importFileInput.click());

    dom.wizardNextBtn.addEventListener('click', () => navigateWizard(1));
    dom.wizardBackBtn.addEventListener('click', () => navigateWizard(-1));
    dom.apiKeyHelpLink.addEventListener('click', (e) => {
        e.preventDefault();
        ui.showApiKeyHelpModal();
    });

    dom.finishSetupBtn.addEventListener('click', () => {
        dom.generationProgress.classList.add('hidden');
        dom.finishSetupBtn.classList.add('hidden');
        ui.showScreen('main-screen');
        ui.renderAll();
    });

    dom.bottomNav.addEventListener('click', handleNav);
    dom.dayScroller.addEventListener('click', handleMenuClick);
    dom.dayScroller.addEventListener('click', handleDayCardClick);
    dom.shoppingListContainer.addEventListener('click', handleShoppingListClick);

    dom.backToMenuBtn.addEventListener('click', () => ui.showScreen('main-screen'));
    
    dom.prevStepBtn.addEventListener('click', () => app.navigateRecipeStep(-1));
    dom.nextStepBtn.addEventListener('click', () => app.navigateRecipeStep(1));

    dom.startTimerBtn.addEventListener('click', () => timer.start());
    dom.pauseTimerBtn.addEventListener('click', () => timer.pause());
    dom.resetTimerBtn.addEventListener('click', () => timer.reset());

    dom.generateImageBtn.addEventListener('click', handleGenerateImage);

    // Settings Listeners
    dom.settings.saveBtn.addEventListener('click', () => app.saveSettings());
    dom.settings.addMemberBtn.addEventListener('click', () => ui.openFamilyMemberModal());
    dom.settings.familyContainer.addEventListener('click', (e) => {
        if(e.target.classList.contains('delete-member-btn')) {
            state.update(s => s.settings.family.splice(e.target.dataset.index, 1));
            state.save();
            ui.renderFamilyMembers(false);
        }
    });
    dom.settings.regenerateAllBtn.addEventListener('click', () => ui.confirmRegenerateAll());
    dom.settings.saveApiKeyBtn.addEventListener('click', () => app.saveApiKey());
    dom.wizardAddMemberBtn.addEventListener('click', () => ui.openFamilyMemberModal(true));
    dom.wizardFamilyContainer.addEventListener('click', (e) => {
        if(e.target.classList.contains('delete-member-btn')) {
            state.update(s => s.settings.family.splice(e.target.dataset.index, 1));
            ui.renderFamilyMembers(true);
        }
    });
    dom.settings.runWizardBtn.addEventListener('click', () => ui.showWizard());
    dom.settings.showChangelogBtn.addEventListener('click', () => ui.showChangelogModal());

    dom.exportBtn.addEventListener('click', () => app.exportData());
    dom.importBtn.addEventListener('click', () => dom.importFileInput.click());
    dom.importFileInput.addEventListener('change', (e) => app.importData(e));

    let longPressTimer;
    document.body.addEventListener('touchstart', e => {
        if (e.touches.length === 3) {
            longPressTimer = setTimeout(() => ui.toggleDevConsole(), 1000);
        }
    });
    document.body.addEventListener('touchend', () => clearTimeout(longPressTimer));
    dom.commandInput.addEventListener('keydown', e => {
        if (e.key === 'Enter') app.executeCommand(e.target.value);
    });

    dom.modalOverlay.addEventListener('click', (e) => {
        if (e.target === dom.modalOverlay) {
            ui.hideModal();
        }
    });
}
