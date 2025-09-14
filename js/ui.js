import { dom } from './dom.js';
import { state, currentRecipe, timer } from './state.js';
import { wizard, app } from './main.js';
import { api } from './api.js';

let featureAnimationInterval;

const ui = {
    showScreen(screenId) {
        dom.screens.forEach(screen => {
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
        wizard.currentStep = 1;
        this.renderWizard();
    },

    renderWizard() {
        const { currentStep, totalSteps } = wizard;
        const appState = state.get();
        
        dom.apiKeyInput.value = appState.settings.apiKey || '';
        dom.wizardDuration.value = appState.settings.menuDuration;
        dom.wizardBudget.value = appState.settings.totalBudget;
        dom.wizardPreferences.value = appState.settings.preferences;
        dom.wizardCuisine.value = appState.settings.cuisine;
        dom.wizardDifficulty.value = appState.settings.difficulty;
        
        dom.wizardNav.classList.remove('hidden');
        dom.generationProgress.classList.add('hidden');
        dom.setupWizard.classList.remove('hidden');
        dom.wizardStepCounter.classList.remove('hidden');

        dom.wizardStepCounter.textContent = `Шаг ${currentStep} из ${totalSteps}`;

        dom.wizardSteps.forEach(step => {
            step.classList.toggle('active', parseInt(step.dataset.step) === currentStep);
        });

        dom.wizardBackBtn.classList.toggle('hidden', currentStep === 1);
        dom.wizardNextBtn.textContent = currentStep === totalSteps ? 'Начать генерацию' : 'Далее';
        
        if (currentStep === 2) {
            this.renderFamilyMembers(true);
        }
    },
    
    async updateProgress(step, totalSteps, status, details) {
        return new Promise(resolve => {
            const percent = (step / totalSteps) * 100;
            dom.progressBar.style.width = `${percent}%`;
            dom.progressStatus.textContent = `Шаг ${step}/${totalSteps}: ${status}`;
            dom.progressDetails.innerHTML = details;
            setTimeout(resolve, 300);
        });
    },

    updateProgressDetails(details, append = false) {
        if (append) {
            dom.progressDetails.innerHTML += `<br>${details}`;
        } else {
            dom.progressDetails.textContent = details;
        }
    },
    
    renderAll() {
        this.renderMenu();
        this.renderShoppingList();
        this.renderBudget();
        this.renderSettings();
    },

    renderMenu() {
        const appState = state.get();
        if (!appState.menu || appState.menu.length === 0) return;
        dom.dayScroller.innerHTML = '';
        const daysOrder = ["ВОСКРЕСЕНЬЕ", "ПОНЕДЕЛЬНИК", "ВТОРНИК", "СРЕДА", "ЧЕТВЕРГ", "ПЯТНИЦА", "СУББОТА"];
        
        const validMenuData = appState.menu.filter(day => day && day.day && day.meals);
        
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
                const isCooked = appState.cookedMeals[dayName] && appState.cookedMeals[dayName].includes(mealKey);
                
                return `
                <div class="meal ${hasRecipe ? 'clickable' : ''} ${isCooked ? 'cooked' : ''}" data-meal-name="${mealName || ''}" data-meal-key="${mealKey}" data-day-name="${dayName}">
                    <button class="cooked-toggle" data-day-name="${dayName}" data-meal-key="${mealKey}" aria-label="Отметить как приготовленное">
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
            dom.dayScroller.appendChild(dayCard);
        });
    },

    renderShoppingList() {
        const appState = state.get();
        if (!appState.shoppingList) return;
        dom.shoppingListContainer.innerHTML = '';
        
        appState.shoppingList.forEach((category, catIndex) => {
            const categoryElement = document.createElement('div');
            categoryElement.className = 'category-group';
            
            const itemsHtml = category.items.map((item, itemIndex) => {
                const totalPurchased = (item.purchases || []).reduce((sum, p) => sum + p.qty, 0);
                const isCompleted = totalPurchased >= item.shoppingSuggestion.qty;
                const progressPercent = Math.min((totalPurchased / item.shoppingSuggestion.qty) * 100, 100);

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
        
        this.updateShoppingProgress();
        const estimatedCost = appState.shoppingList.flatMap(c => c.items).reduce((sum, item) => sum + (item.price || 0), 0);
        dom.shoppingListTotal.innerHTML = `<span>Примерная сумма:</span> ${estimatedCost.toLocaleString('ru-RU')} ₽`;
    },

    updateShoppingProgress() {
        const appState = state.get();
        if (!appState.shoppingList) return;
        const allItems = appState.shoppingList.flatMap(c => c.items || []);
        if (allItems.length === 0) {
            dom.shoppingProgress.style.width = `0%`;
            dom.shoppingProgressText.textContent = `0/0 куплено`;
            return;
        };
        const totalItems = allItems.length;
        const completedItems = allItems.filter(i => {
            const totalPurchased = (i.purchases || []).reduce((sum, p) => sum + p.qty, 0);
            return totalPurchased >= i.shoppingSuggestion.qty;
        }).length;
        const percent = totalItems > 0 ? (completedItems / totalItems) * 100 : 0;
        dom.shoppingProgress.style.width = `${percent}%`;
        dom.shoppingProgressText.textContent = `${completedItems}/${totalItems} куплено`;
    },

    renderBudget() {
        const appState = state.get();
        const totalBudget = appState.settings.totalBudget;
        const spentOnProducts = (appState.shoppingList || [])
            .flatMap(c => c.items || [])
            .flatMap(item => item.purchases || [])
            .reduce((sum, purchase) => sum + purchase.price, 0);

        const remaining = totalBudget - spentOnProducts;
        const spentPercent = totalBudget > 0 ? Math.min((spentOnProducts / totalBudget) * 100, 100) : 0;
        
        dom.budget.pieProducts.style.strokeDasharray = `${spentPercent} 100`;
        dom.budget.spentTotal.innerHTML = `${spentOnProducts.toLocaleString('ru-RU')} ₽ <span>потрачено</span>`;
        dom.budget.total.textContent = `${totalBudget.toLocaleString('ru-RU')} ₽`;
        dom.budget.remaining.textContent = `${remaining.toLocaleString('ru-RU')} ₽`;
        dom.budget.remaining.className = `amount ${remaining >= 0 ? 'ok' : 'warning'}`;
    },
    
    renderRecipeStep() {
        const { id, step } = currentRecipe;
        const recipe = state.get().recipes[id];
        if (!recipe || !recipe.steps || !recipe.steps[step]) {
            console.error('Invalid recipe or step:', id, step);
            this.showNotification('Ошибка при загрузке рецепта.', 'error');
            this.showScreen('main-screen');
            return;
        }

        const stepData = recipe.steps[step];

        dom.recipeTitle.textContent = recipe.name;
        dom.stepIndicator.textContent = `Шаг ${step + 1}/${recipe.steps.length}`;
        dom.stepDescription.textContent = stepData.description;
        
        if (stepData.imageUrl) {
            this.setRecipeImageState('loaded', stepData.imageUrl);
        } else {
            this.setRecipeImageState('placeholder');
        }

        if (stepData.time && stepData.time > 0) {
            timer.reset(stepData.time * 60);
            dom.timerSection.classList.remove('hidden');
        } else {
            dom.timerSection.classList.add('hidden');
        }

        dom.stepIngredientsList.innerHTML = '';
        if (stepData.ingredients && stepData.ingredients.length > 0) {
            dom.stepIngredientsTitle.classList.remove('hidden');
            const flatShoppingList = state.get().shoppingList.flatMap(c => c.items);
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
                dom.stepIngredientsList.appendChild(li);
            });
        } else {
            dom.stepIngredientsTitle.classList.add('hidden');
        }

        dom.prevStepBtn.disabled = step === 0;
        dom.nextStepBtn.textContent = (step === recipe.steps.length - 1) ? 'Завершить ✅' : 'Далее →';
    },

    setRecipeImageState(imgState, imageUrl = '') {
        dom.stepImage.classList.add('hidden');
        dom.stepImagePlaceholder.classList.add('hidden');
        dom.stepImageLoader.classList.add('hidden');

        switch (imgState) {
            case 'loading':
                dom.stepImageLoader.classList.remove('hidden');
                break;
            case 'loaded':
                dom.stepImage.src = imageUrl;
                dom.stepImage.alt = dom.stepDescription.textContent;
                dom.stepImage.classList.remove('hidden');
                break;
            case 'placeholder':
            default:
                dom.stepImagePlaceholder.classList.remove('hidden');
                break;
        }
    },
    
    updateTimerDisplay(timeLeft) {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        dom.timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    },

    renderSettings() {
        const s = state.get().settings;
        dom.settings.duration.value = s.menuDuration;
        dom.settings.budget.value = s.totalBudget;
        dom.settings.preferences.value = s.preferences;
        dom.settings.cuisine.value = s.cuisine;
        dom.settings.difficulty.value = s.difficulty;
        dom.settings.apiKeyInput.value = s.apiKey || '';
        dom.settings.appVersionInfo.textContent = `Версия приложения: ${app.version}`;
        this.renderFamilyMembers();
    },

    renderFamilyMembers(isWizard = false) {
        const container = isWizard ? dom.wizardFamilyContainer : dom.settings.familyContainer;
        container.innerHTML = '';
        const family = state.get().settings.family;
        if (family.length === 0) {
            container.innerHTML = '<p style="font-size:14px; color: var(--soft-text);">Добавьте членов семьи для расчета рациона.</p>';
            return;
        }
        family.forEach((person, index) => {
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
    },

    // MODALS and NOTIFICATIONS
    showNotification(message, type = 'success') {
        dom.notification.textContent = message;
        dom.notification.className = type;
        dom.notification.classList.add('show');

        if (type !== 'loading') {
            setTimeout(() => {
                dom.notification.classList.remove('show');
            }, 3000);
        }
    },

    hideNotification() {
        dom.notification.classList.remove('show');
    },

    showModal(title, bodyHtml, buttons) {
        dom.modalTitle.textContent = title;
        dom.modalBody.innerHTML = bodyHtml;
        dom.modalButtons.innerHTML = '';
        buttons.forEach(btn => {
            const buttonEl = document.createElement('button');
            buttonEl.textContent = btn.text;
            buttonEl.className = `modal-button ${btn.class}`;
            buttonEl.addEventListener('click', () => {
                btn.action();
                if (btn.closes !== false) this.hideModal();
            });
            dom.modalButtons.appendChild(buttonEl);
        });
        dom.modalOverlay.classList.add('visible');
    },

    hideModal() {
        dom.modalOverlay.classList.remove('visible');
    },
    
    showApiKeyHelpModal() {
        const bodyHtml = `
            <style>
                .help-step { margin-bottom: 20px; } .help-step h5 { font-family: var(--font-nunito); font-weight: 700; color: var(--accent-color); margin: 0 0 8px 0; font-size: 18px; } .help-step p { margin: 0 0 10px 0; line-height: 1.5; font-size: 15px; } .help-step a { color: var(--accent-color); font-weight: 600; } .connection-check { background-color: var(--card-accent-bg); padding: 15px; border-radius: 12px; text-align: center; } #connection-status { font-weight: 600; margin-top: 10px; min-height: 20px; }
            </style>
            <div class="help-step">
                <h5>Шаг 1: Получение ключа</h5>
                <p>1. Перейдите на сайт <a href="https://aistudio.google.com/app/apikey" target="_blank">Google AI Studio</a>.</p>
                <p>2. Нажмите <strong>"Create API key in new project"</strong>.</p>
                <p>3. Скопируйте ключ и вставьте его в поле на предыдущем экране.</p>
            </div>
        `;

        this.showModal('Как получить API ключ?', bodyHtml, [{ text: 'Понятно', class: 'primary', action: () => {} }]);
    },

    openPurchaseModal(catIndex, itemIndex) {
        const item = state.get().shoppingList[catIndex].items[itemIndex];
        const totalPurchased = (item.purchases || []).reduce((sum, p) => sum + p.qty, 0);
        const remainingQty = item.shoppingSuggestion.qty - totalPurchased;

        const bodyHtml = `
            <p>Нужно купить: ${item.shoppingSuggestion.qty} ${item.shoppingSuggestion.unit}. Осталось: ${remainingQty > 0 ? remainingQty : 0} ${item.shoppingSuggestion.unit}</p>
            <div class="modal-form-group"> <label for="purchase-qty">Сколько купили (${item.shoppingSuggestion.unit})</label> <input type="number" id="purchase-qty" class="modal-input" value="${remainingQty > 0 ? remainingQty : ''}" placeholder="0"> </div>
            <div class="modal-form-group"> <label for="purchase-price">Цена за эту покупку (₽)</label> <input type="number" id="purchase-price" class="modal-input" placeholder="0"> </div>
        `;

        const buttons = [
            { text: 'Отмена', class: 'secondary', action: () => {} },
            { text: 'Сохранить', class: 'primary', action: () => {
                const qty = parseFloat(document.getElementById('purchase-qty').value) || 0;
                const price = parseFloat(document.getElementById('purchase-price').value) || 0;
                if (qty > 0) {
                    state.update(s => {
                        const currentItem = s.shoppingList[catIndex].items[itemIndex];
                        if(!currentItem.purchases) currentItem.purchases = [];
                        currentItem.purchases.push({ qty, price });
                    });
                    state.save();
                    this.renderShoppingList();
                    this.renderBudget();
                }
            }},
        ];
        this.showModal(`Покупка: ${item.name}`, bodyHtml, buttons);
    },

    showMissingIngredientsWarning(missingItems, recipeId) {
        const bodyHtml = `
            <p>Для приготовления этого блюда вам не хватает следующих продуктов:</p>
            <ul>${missingItems.map(item => `<li>${item.name}</li>`).join('')}</ul>
        `;
        const buttons = [
             { text: 'Все равно готовить', class: 'primary', action: () => app.showRecipe(recipeId) },
             { text: 'Назад к меню', class: 'secondary', action: () => {} },
        ];
        this.showModal("Не хватает ингредиентов", bodyHtml, buttons);
    },

    openFamilyMemberModal(isWizard = false) {
        const bodyHtml = `
            <div class="modal-form-group"> <label for="member-age">Возраст</label> <input type="number" id="member-age" class="modal-input" placeholder="30"> </div>
            <div class="modal-form-group"> <label for="member-gender">Пол</label> <select id="member-gender" class="modal-select"> <option value="female">Женский</option> <option value="male">Мужской</option> </select> </div>
            <div class="modal-form-group"> <label for="member-activity">Уровень активности</label> <select id="member-activity" class="modal-select"> <option value="sedentary">Сидячий</option> <option value="light">Легкая</option> <option value="moderate">Умеренная</option> <option value="high">Высокая</option> </select> </div>
        `;
        const buttons = [
            { text: 'Отмена', class: 'secondary', action: () => {} },
            { text: 'Добавить', class: 'primary', action: () => {
                const newMember = {
                    age: parseInt(document.getElementById('member-age').value) || 30,
                    gender: document.getElementById('member-gender').value,
                    activity: document.getElementById('member-activity').value,
                };
                state.update(s => s.settings.family.push(newMember));
                if (isWizard) state.save();
                this.renderFamilyMembers(isWizard);
                if (!isWizard) this.renderFamilyMembers(false);
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
                    const purchasedItems = state.get().shoppingList
                        .flatMap(c => c.items || [])
                        .filter(item => (item.purchases || []).length > 0)
                        .map(item => `${item.name} (${item.purchases.reduce((sum, p) => sum + p.qty, 0)} ${item.shoppingSuggestion.unit})`)
                        .join(', ');

                    state.update(s => {
                        s.menu = [];
                        s.recipes = {};
                        s.shoppingList = [];
                    });
                    app.startGenerationProcess(true, purchasedItems);
                }}
            ]
        );
    },
    
    async handleRegeneration(type, data) {
        this.hideModal();
        this.showNotification("Обновляем меню...", 'loading');
        
        try {
            if (type === 'meal') {
                const { dayName, mealKey } = data;
                const appState = state.get();
                const originalDayIndex = appState.menu.findIndex(d => d && d.day === dayName);
                if (originalDayIndex === -1) throw new Error("Day not found");

                const oldMealName = appState.menu[originalDayIndex].meals[mealKey];
                const customPrompt = document.getElementById('regen-prompt').value;
                
                const familyDescription = appState.settings.family.map(p => `${p.gender === 'male' ? 'Мужчина' : 'Женщина'}, ${p.age} лет`).join('; ');
                const prompt = `Замени одно блюдо: ${mealKey} в ${appState.menu[originalDayIndex].day}. Старое блюдо: "${oldMealName}". Сгенерируй новое, учитывая общие предпочтения: "${appState.settings.preferences}" и пожелание: "${customPrompt}". Рассчитай на семью: ${familyDescription}. Верни только название нового блюда.`;
                const schema = {type: Type.OBJECT, properties: { newMealName: {type: Type.STRING}}};
                const result = await api.makeGeminiRequest(prompt, schema);
                
                state.update(s => {
                    s.menu[originalDayIndex].meals[mealKey] = result.newMealName;
                });
            } else { 
                await api.generateMenu();
            }
            
            await api.generateRecipes();
            await api.generateShoppingList();

            state.save();
            this.renderAll();
            this.showNotification("Меню успешно обновлено!");

        } catch(e) {
            this.showNotification("Ошибка при обновлении.", 'error');
            console.error(e);
        }
    },

    showChangelogModal() {
        const versions = Object.keys(app.changelog).sort((a,b) => b.localeCompare(a, undefined, {numeric: true}));
        const bodyHtml = versions.map(version => `
            <h4>Версия ${version}</h4>
            <ul>
                ${app.changelog[version].map(change => `<li>${change}</li>`).join('')}
            </ul>
        `).join('');
        this.showModal('История изменений', bodyHtml, [{text: 'Закрыть', class: 'primary', action: () => {}}]);
    },
    
    toggleDevConsole() {
        dom.devConsole.classList.toggle('visible');
    },

    startFeatureShowcaseAnimation() {
        const features = [
            { icon: '🗓️', text: 'Планируйте меню на неделю' },
            { icon: '🛒', text: 'Составляйте умный список покупок' },
            { icon: '👩‍🍳', text: 'Готовьте легко по шагам' },
        ];
        let currentIndex = 0;
        
        const showcaseContainer = dom.featureShowcase;
        if (!showcaseContainer) return;

        showcaseContainer.innerHTML = features.map((f, index) => `
            <div class="feature-slide ${index === 0 ? 'active' : ''}" data-index="${index}">
                <div class="feature-icon">${f.icon}</div>
                <div class="feature-text">${f.text}</div>
            </div>
        `).join('');
        
        const slides = showcaseContainer.querySelectorAll('.feature-slide');

        if (featureAnimationInterval) clearInterval(featureAnimationInterval);

        featureAnimationInterval = setInterval(() => {
            slides[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % features.length;
            slides[currentIndex].classList.add('active');
        }, 3000);
    }
};

// Export the ui object to be used in other modules
export { ui };
