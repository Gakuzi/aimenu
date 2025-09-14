import { dom } from './dom.js';
import { state, recipeState } from './state.js';
import { VERSION } from './config.js';
import { generateStepImage } from './api.js';
import { saveState } from './handlers.js';

// --- Screen Management ---
export function showScreen(screenId) {
    dom.screens.forEach(screen => {
        const isTarget = screen.id === screenId;
        screen.classList.toggle('hidden', !isTarget);
        if (screen.id === 'recipe-screen' || screen.id === 'splash-screen') {
            screen.classList.toggle('active', isTarget);
        }
    });
    if (screenId === 'main-screen') {
        renderAll();
    }
}

// --- Notifications ---
export function showNotification(message, type = 'success') {
    dom.notification.textContent = message;
    dom.notification.className = type;
    dom.notification.classList.add('show');

    if (type !== 'loading') {
        setTimeout(() => {
            dom.notification.classList.remove('show');
        }, 3000);
    }
}

export function hideNotification() {
    dom.notification.classList.remove('show');
}


// --- Modals ---
export function showModal(title, bodyHtml, buttons) {
    dom.modalTitle.textContent = title;
    dom.modalBody.innerHTML = bodyHtml;
    dom.modalButtons.innerHTML = '';
    buttons.forEach(btn => {
        const buttonEl = document.createElement('button');
        buttonEl.textContent = btn.text;
        buttonEl.className = `modal-button ${btn.class}`;
        buttonEl.addEventListener('click', () => {
            btn.action();
            if (btn.closes !== false) hideModal();
        });
        dom.modalButtons.appendChild(buttonEl);
    });
    dom.modalOverlay.classList.add('visible');
}

export function hideModal() {
    dom.modalOverlay.classList.remove('visible');
}

// --- Main Rendering Logic ---
export function renderAll() {
    renderMenu();
    renderShoppingList();
    renderBudget();
    renderSettings();
}

export function renderMenu() {
    if (!state.menu || state.menu.length === 0) return;
    dom.dayScrollerContainer.innerHTML = '';
    const daysOrder = ["ВОСКРЕСЕНЬЕ", "ПОНЕДЕЛЬНИК", "ВТОРНИК", "СРЕДА", "ЧЕТВЕРГ", "ПЯТНИЦА", "СУББОТА"];
    
    const sortedMenu = [...state.menu].filter(day => day && day.day && day.meals).sort((a, b) => {
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
            const isCooked = state.cookedMeals[dayName] && state.cookedMeals[dayName].includes(mealKey);
            
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
        dom.dayScrollerContainer.appendChild(dayCard);
    });
}

export function renderShoppingList() {
    if (!state.shoppingList) return;
    dom.shoppingListContainer.innerHTML = '';
    
    state.shoppingList.forEach((category) => {
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
        dom.shoppingListContainer.appendChild(categoryElement);
    });

    updateShoppingProgress();
    const estimatedCost = state.shoppingList.flatMap(c => c.items).reduce((sum, item) => sum + (item.price || 0), 0);
    dom.shoppingListTotal.innerHTML = `<span>Примерная сумма:</span> ${estimatedCost.toLocaleString('ru-RU')} ₽`;
}

export function updateShoppingProgress() {
    if (!state.shoppingList) return;
    const allItems = state.shoppingList.flatMap(c => c.items || []);
    if (allItems.length === 0) return;
    const totalItems = allItems.length;
    const completedItems = allItems.filter(i => {
        const totalPurchased = (i.purchases || []).reduce((sum, p) => sum + p.qty, 0);
        return totalPurchased >= i.shoppingSuggestion.qty;
    }).length;
    const percent = totalItems > 0 ? (completedItems / totalItems) * 100 : 0;
    dom.shoppingProgress.style.width = `${percent}%`;
    dom.shoppingProgressText.textContent = `${completedItems}/${totalItems} куплено`;
}

export function renderBudget() {
    const totalBudget = state.settings.totalBudget;
    const spentOnProducts = state.shoppingList
        .flatMap(c => c.items || [])
        .flatMap(item => item.purchases || [])
        .reduce((sum, purchase) => sum + purchase.price, 0);

    const remaining = totalBudget - spentOnProducts;
    const spentPercent = totalBudget > 0 ? (spentOnProducts / totalBudget) * 100 : 0;
    
    dom.budget.pieProducts.style.strokeDasharray = `${spentPercent} 100`;
    dom.budget.spentTotal.innerHTML = `${spentOnProducts.toLocaleString('ru-RU')} ₽ <span>потрачено</span>`;
    dom.budget.total.textContent = `${totalBudget.toLocaleString('ru-RU')} ₽`;
    dom.budget.remaining.textContent = `${remaining.toLocaleString('ru-RU')} ₽`;
    dom.budget.remaining.className = `amount ${remaining >= 0 ? 'ok' : 'warning'}`;
}

export function renderSettings() {
    const s = state.settings;
    dom.settings.duration.value = s.menuDuration;
    dom.settings.budget.value = s.totalBudget;
    dom.settings.preferences.value = s.preferences;
    dom.settings.cuisine.value = s.cuisine;
    dom.settings.difficulty.value = s.difficulty;
    dom.settings.geminiApiKeyInput.value = s.geminiApiKey || '';
    dom.settings.jsonBinBinId.value = s.jsonBin.binId || '';
    dom.settings.jsonBinApiKey.value = s.jsonBin.apiKey || '';
    dom.settings.appVersionInfo.textContent = `Версия приложения: ${VERSION}`;
    renderFamilyMembers();
}

export function renderFamilyMembers(isWizard = false) {
    const container = isWizard ? dom.wizardFamilyMembersContainer : dom.settings.familyContainer;
    container.innerHTML = '';
    state.settings.family.forEach((person, index) => {
        const card = document.createElement('div');
        card.className = 'family-member-card';
        const genderText = person.gender === 'male' ? 'Мужчина' : 'Женщина';
        card.innerHTML = `
            <span>${person.name} (${genderText}, ${person.age} лет)</span>
            <button data-index="${index}" class="remove-family-member-btn">❌</button>
        `;
        container.appendChild(card);
    });
}

// --- Recipe Screen UI ---
export async function renderRecipeStep() {
    const { id, step } = recipeState;
    const recipe = state.recipes[id];
    if (!recipe || !recipe.steps || !recipe.steps[step]) {
        console.error('Invalid recipe or step:', id, step);
        showNotification('Ошибка при загрузке рецепта.', 'error');
        showScreen('main-screen');
        return;
    }

    const stepData = recipe.steps[step];

    dom.recipeTitle.textContent = recipe.name;
    dom.stepIndicator.textContent = `Шаг ${step + 1}/${recipe.steps.length}`;
    dom.stepDescription.textContent = stepData.description;

    dom.stepImage.style.opacity = '0.5';
    if (stepData.imageUrl) {
        dom.stepImage.src = stepData.imageUrl;
        dom.stepImage.alt = stepData.description;
        dom.stepImage.style.opacity = '1';
    } else {
        dom.stepImage.src = ''; 
        dom.stepImage.alt = 'Генерация изображения...';
        const imageUrl = await generateStepImage(id, step);
        if (imageUrl) {
            // Убедимся, что мы всё ещё на том же шаге
            if (recipeState.id === id && recipeState.step === step) {
                dom.stepImage.src = imageUrl;
                dom.stepImage.style.opacity = '1';
            }
            state.recipes[id].steps[step].imageUrl = imageUrl;
            saveState();
        } else {
            if (recipeState.id === id && recipeState.step === step) {
               dom.stepImage.alt = 'Не удалось загрузить изображение';
            }
        }
    }

    // Timer logic is now in handlers, this just renders it
    if (stepData.time && stepData.time > 0) {
        dom.timerSection.classList.remove('hidden');
    } else {
        dom.timerSection.classList.add('hidden');
    }

    dom.stepIngredients.innerHTML = '';
    if (stepData.ingredients && stepData.ingredients.length > 0) {
        dom.stepIngredientsTitle.classList.remove('hidden');
        const flatShoppingList = state.shoppingList.flatMap(c => c.items);
        stepData.ingredients.forEach(ing => {
            const li = document.createElement('li');
            const shopItem = flatShoppingList.find(item => item.name.toLowerCase().includes(ing.name.toLowerCase()) || ing.name.toLowerCase().includes(item.name.toLowerCase()));
            let statusClass = 'unknown', statusIcon = '❔';
            if (shopItem) {
                const totalPurchased = (shopItem.purchases || []).reduce((s, p) => s + p.qty, 0);
                statusClass = totalPurchased >= shopItem.totalNeeded.qty ? 'completed' : 'missing';
                statusIcon = totalPurchased >= shopItem.totalNeeded.qty ? '✅' : '⚠️';
            }
            li.innerHTML = `<span><span class="ingredient-status ${statusClass}">${statusIcon}</span> ${ing.name}</span> <span class="ingredient-quantity">${ing.quantity}</span>`;
            dom.stepIngredients.appendChild(li);
        });
    } else {
        dom.stepIngredientsTitle.classList.add('hidden');
    }

    dom.prevStepBtn.disabled = step === 0;
    dom.nextStepBtn.textContent = (step === recipe.steps.length - 1) ? 'Завершить ✅' : 'Далее →';
}

// --- Sync Status ---
let syncStatus = 'idle';
export function getSyncStatus() {
    return syncStatus;
}
export function setSyncStatus(status) {
    syncStatus = status; // idle, syncing, synced, error
    if (dom.syncStatusIndicator) {
        dom.syncStatusIndicator.className = status;
    }
}
