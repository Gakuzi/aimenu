document.addEventListener('DOMContentLoaded', () => {

    // --- DATABASE (Fallback) ---
    const LOCAL_RECIPES_DB = [
        { id: 'r1', name: 'Овсяная каша с ягодами', type: 'breakfast', ingredients: [{ name: 'Овсянка', amount: 50, unit: 'г' }, { name: 'Молоко', amount: 150, unit: 'мл' }, { name: 'Свежие ягоды', amount: 50, unit: 'г' }] , steps: [{ instruction: 'Сварите овсянку на молоке.', time: 5 }, { instruction: 'Добавьте ягоды.' }] },
        { id: 'r2', name: 'Греческий салат', type: 'lunch', ingredients: [{ name: 'Огурцы', amount: 1, unit: 'шт' }, { name: 'Помидоры', amount: 2, unit: 'шт' }, { name: 'Сыр Фета', amount: 50, unit: 'г' }, { name: 'Оливковое масло', amount: 1, unit: 'ст.л.' }], steps: [{ instruction: 'Нарежьте овощи и сыр, заправьте маслом.' }] },
        { id: 'r3', name: 'Куриная грудка с рисом', type: 'dinner', ingredients: [{ name: 'Куриная грудка', amount: 150, unit: 'г' }, { name: 'Рис', amount: 70, unit: 'г' }, { name: 'Брокколи', amount: 100, unit: 'г' }], steps: [{ instruction: 'Отварите рис.', time: 15 }, { instruction: 'Обжарьте куриную грудку.', time: 10 }, { instruction: 'Приготовьте брокколи на пару.', time: 7 }] },
        { id: 'r4', name: 'Скрэмбл с тостом', type: 'breakfast', ingredients: [{ name: 'Яйцо', amount: 2, unit: 'шт' }, { name: 'Хлеб цельнозерновой', amount: 1, unit: 'ломтик' }, { name: 'Авокадо', amount: 0.5, unit: 'шт' }], steps: [{ instruction: 'Приготовьте скрэмбл.' }, { instruction: 'Подсушите хлеб и намажьте авокадо.' }] },
        { id: 'r5', name: 'Чечевичный суп', type: 'lunch', ingredients: [{ name: 'Красная чечевица', amount: 100, unit: 'г' }, { name: 'Морковь', amount: 1, unit: 'шт' }, { name: 'Лук', amount: 1, unit: 'шт' }], steps: [{ instruction: 'Обжарьте лук и морковь.' }, { instruction: 'Добавьте чечевицу и воду, варите до готовности.', time: 25 }] },
        { id: 'r6', name: 'Запеченный лосось со спаржей', type: 'dinner', ingredients: [{ name: 'Филе лосося', amount: 150, unit: 'г' }, { name: 'Спаржа', amount: 100, unit: 'г' }, { name: 'Лимон', amount: 0.5, unit: 'шт' }], steps: [{ instruction: 'Запекайте лосось со спаржей и лимоном в духовке.', time: 20 }] },
    ];
    
    let activeRecipes = [...LOCAL_RECIPES_DB];

    // --- STATE MANAGEMENT ---
    let state = {
        settings: {
            people: 2,
            days: 7,
            preferences: [],
            useGemini: false,
            apiKey: '',
        },
        menu: null,
        shoppingList: null,
        currentRecipeId: null,
    };

    const alarmSound = new Audio('data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YU9vT18=');

    const loadState = () => {
        const savedState = localStorage.getItem('familyMenuState');
        if (savedState) {
            const loaded = JSON.parse(savedState);
            state = { ...state, ...loaded };
            if (loaded.activeRecipes) {
                activeRecipes = loaded.activeRecipes;
            }
        }
    };

    const saveState = () => {
        const stateToSave = { ...state, activeRecipes };
        localStorage.setItem('familyMenuState', JSON.stringify(stateToSave));
    };

    // --- UI SELECTORS ---
    const screens = document.querySelectorAll('.screen');
    const navButtons = document.querySelectorAll('.nav-btn');
    const settingsForm = document.getElementById('settings-form');
    const createMenuBtn = document.getElementById('create-menu-btn');
    // ... other selectors
    const peopleCountInput = document.getElementById('people-count');
    const dayCountInput = document.getElementById('day-count');
    const peopleValueSpan = document.getElementById('people-value');
    const daysValueSpan = document.getElementById('days-value');
    const geminiToggle = document.getElementById('gemini-toggle');
    const geminiApiKeyInput = document.getElementById('gemini-api-key');

    // --- NAVIGATION ---
    const showScreen = (screenId) => {
        let currentActive = document.querySelector('.screen.active');
        if (currentActive && currentActive.id !== `${screenId}-screen`) {
            currentActive.classList.remove('active');
            currentActive.classList.add('exiting');
            
            // Wait for animation to finish before hiding
            setTimeout(() => {
                currentActive.classList.add('hidden');
                currentActive.classList.remove('exiting');
            }, 300);
        }
        
        const targetScreen = document.getElementById(`${screenId}-screen`);
        if (targetScreen) {
            targetScreen.classList.remove('hidden');
            // Timeout to allow display property to apply before transition
            setTimeout(() => {
                targetScreen.classList.add('active');
            }, 10);
        }

        navButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.target === screenId);
        });
    };

    // --- RENDERING ---
    const renderSettings = () => {
        peopleCountInput.value = state.settings.people;
        peopleValueSpan.textContent = state.settings.people;
        dayCountInput.value = state.settings.days;
        daysValueSpan.textContent = state.settings.days;
        geminiToggle.checked = state.settings.useGemini;
        geminiApiKeyInput.value = state.settings.apiKey;
        document.querySelectorAll('#settings-form input[name="preference"]').forEach(cb => {
            cb.checked = state.settings.preferences.includes(cb.value);
        });
    };

    const renderMenu = () => {
        const grid = document.getElementById('menu-grid');
        if (!state.menu) {
            grid.innerHTML = '<p class="card">Меню еще не создано. Перейдите в настройки, чтобы сгенерировать план питания.</p>';
            return;
        }
        grid.innerHTML = '';
        const weekdays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
        Object.keys(state.menu).sort().forEach((dateStr) => {
            const dayData = state.menu[dateStr];
            const date = new Date(dateStr);
            const dayCard = document.createElement('div');
            dayCard.className = 'card';
            
            const lunchRecipe = activeRecipes.find(r => r.name === dayData.lunch);
            const dinnerRecipe = activeRecipes.find(r => r.name === dayData.dinner);
            
            dayCard.innerHTML = `
                <h2>${weekdays[date.getDay()]}, ${date.toLocaleDateString('ru-RU')}</h2>
                ${lunchRecipe ? `<div class="meal-item" data-recipe-id="${lunchRecipe.id}"><span>Обед</span><p>${lunchRecipe.name}</p></div>` : ''}
                ${dinnerRecipe ? `<div class="meal-item" data-recipe-id="${dinnerRecipe.id}"><span>Ужин</span><p>${dinnerRecipe.name}</p></div>` : ''}
            `;
            grid.appendChild(dayCard);
        });
    };
    
    const renderRecipe = (recipeId) => {
        state.currentRecipeId = recipeId;
        saveState();
        const recipe = activeRecipes.find(r => r.id === recipeId);
        if (!recipe) return;

        document.getElementById('recipe-name').textContent = recipe.name;
        document.getElementById('recipe-image').src = `https://placeholder.co/600x300/${'D4A373'}/${'F9F7F4'}?text=${encodeURIComponent(recipe.name)}`;
        
        const ingredientsList = document.getElementById('recipe-ingredients');
        ingredientsList.innerHTML = recipe.ingredients.map(ing => `<li>${ing.name} - ${ing.amount * state.settings.people} ${ing.unit}</li>`).join('');
        
        const stepsList = document.getElementById('recipe-steps');
        stepsList.innerHTML = recipe.steps.map(step => `<li>${step.instruction} ${step.time ? `(${step.time} мин)`: ''}</li>`).join('');
        
        showScreen('recipe');
    };
    
    const renderShoppingList = () => {
        const container = document.getElementById('shopping-list-container');
        if (!state.shoppingList || state.shoppingList.length === 0) {
            container.innerHTML = '<p class="card">Список покупок пуст. Сначала сгенерируйте меню.</p>';
            updateProgress(0, 0);
            return;
        }
        container.innerHTML = '';
        let purchasedCount = 0;
        state.shoppingList.forEach((item, index) => {
            const listItem = document.createElement('div');
            listItem.className = `list-item ${item.purchased ? 'purchased' : ''}`;
            listItem.dataset.index = index;
            listItem.innerHTML = `
                <div class="checkbox"></div>
                <div class="item-details">
                    <div class="item-name">${item.name}</div>
                    <div class="item-amount">${item.totalAmount.toFixed(1)} ${item.unit}</div>
                </div>
            `;
            container.appendChild(listItem);
            if (item.purchased) purchasedCount++;
        });
        updateProgress(purchasedCount, state.shoppingList.length);
    };

    const updateProgress = (purchased, total) => {
        const percentage = total > 0 ? (purchased / total) * 100 : 0;
        document.getElementById('progress-fill').style.height = `${percentage}%`;
        document.getElementById('progress-text').textContent = `${Math.round(percentage)}% куплено`;
    };
    
    const renderCookingScreen = (recipeId) => {
        const recipe = activeRecipes.find(r => r.id === recipeId);
        if (!recipe) return;
        
        document.getElementById('cooking-recipe-name').textContent = `Готовим: ${recipe.name}`;
        const container = document.getElementById('cooking-steps-container');
        container.innerHTML = '';
        
        recipe.steps.forEach((step, index) => {
            const stepEl = document.createElement('div');
            stepEl.className = 'cooking-step' + (index === 0 ? ' active' : '');
            stepEl.innerHTML = `<p>${index + 1}. ${step.instruction}</p>`;
            if (step.time) {
                stepEl.innerHTML += `<div class="timer" id="timer-${index}">00:00</div>
                <button class="btn start-timer-btn" data-time="${step.time}" data-timer-id="${index}">Запустить таймер</button>`;
            }
            container.appendChild(stepEl);
        });
        showScreen('cooking');
    };

    // --- LOGIC ---
    const handleCreateMenu = async () => {
        createMenuBtn.disabled = true;
        createMenuBtn.textContent = 'Генерация...';
        
        if (state.settings.useGemini && state.settings.apiKey) {
            try {
                await generatePlanWithGemini();
            } catch (error) {
                console.error("Gemini AI Error:", error);
                alert("Ошибка при генерации с помощью Gemini AI. Используется локальная база рецептов.");
                generatePlanLocally();
            }
        } else {
            generatePlanLocally();
        }

        createMenuBtn.disabled = false;
        createMenuBtn.textContent = 'Создать меню';
        saveState();
        renderMenu();
        renderShoppingList();
        showScreen('menu');
    };

    const generatePlanLocally = () => {
        activeRecipes = [...LOCAL_RECIPES_DB];
        const { days } = state.settings;
        state.menu = {};
        const lunchOptions = activeRecipes.filter(r => r.type === 'lunch');
        const dinnerOptions = activeRecipes.filter(r => r.type === 'dinner');

        for (let i = 0; i < days; i++) {
            const date = new Date();
            date.setDate(date.getDate() + i);
            const dateString = date.toISOString().split('T')[0];
            state.menu[dateString] = {
                lunch: lunchOptions[i % lunchOptions.length].name,
                dinner: dinnerOptions[i % dinnerOptions.length].name,
            };
        }
        generateShoppingList();
    };

    const generatePlanWithGemini = async () => {
        const { GoogleGenAI, Type } = genai;
        const ai = new GoogleGenAI({ apiKey: state.settings.apiKey });
        
        const prompt = `
            Создай план питания (обед и ужин) на ${state.settings.days} дней для ${state.settings.people} человек.
            Учти предпочтения: ${state.settings.preferences.join(', ') || 'нет'}.
            Не повторяй блюда.
            
            Верни ответ СТРОГО в формате JSON. JSON должен содержать два ключа: "menu" и "recipes".
            - "menu": объект, где ключ - дата "YYYY-MM-DD", а значение - объект { "lunch": "Название блюда", "dinner": "Название блюда" }.
            - "recipes": массив объектов, где каждый объект - это рецепт с полями: "id" (уникальная строка, например "g1"), "name" (строка), "type" ("lunch" или "dinner"), "ingredients" (массив объектов { "name": "...", "amount": ..., "unit": "..." } где amount - на ОДНОГО человека), и "steps" (массив объектов { "instruction": "...", "time": ... } где time - опциональное число в минутах).
            
            Пример структуры рецепта:
            { "id": "g1", "name": "Курица с овощами", "type": "dinner", "ingredients": [{"name": "Куриное филе", "amount": 150, "unit": "г"}], "steps": [{"instruction": "Нарежьте курицу", "time": 5}] }
        `;
        
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: { responseMimeType: "application/json" }
        });
        
        const data = JSON.parse(response.text);

        if (data.menu && data.recipes) {
            activeRecipes = data.recipes;
            state.menu = data.menu;
            generateShoppingList();
        } else {
            throw new Error("Invalid JSON structure from Gemini");
        }
    };

    const generateShoppingList = () => {
        const requiredIngredients = {};
        if (!state.menu) return;

        Object.values(state.menu).forEach(day => {
            const lunch = activeRecipes.find(r => r.name === day.lunch);
            const dinner = activeRecipes.find(r => r.name === day.dinner);

            [lunch, dinner].forEach(recipe => {
                if (!recipe || !recipe.ingredients) return;
                recipe.ingredients.forEach(ing => {
                    const key = `${ing.name}-${ing.unit}`;
                    if (!requiredIngredients[key]) {
                        requiredIngredients[key] = { name: ing.name, unit: ing.unit, totalAmount: 0 };
                    }
                    requiredIngredients[key].totalAmount += ing.amount * state.settings.people;
                });
            });
        });
        state.shoppingList = Object.values(requiredIngredients).map(item => ({...item, purchased: false}));
    };
    
    // --- TIMERS ---
    let activeTimers = {};
    const startTimer = (durationMinutes, timerId) => {
        if (activeTimers[timerId]) clearInterval(activeTimers[timerId].interval);

        let totalSeconds = durationMinutes * 60;
        const timerEl = document.getElementById(`timer-${timerId}`);
        
        const update = () => {
            const minutes = Math.floor(totalSeconds / 60);
            const seconds = totalSeconds % 60;
            timerEl.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
            
            if (totalSeconds <= 0) {
                clearInterval(activeTimers[timerId].interval);
                timerEl.textContent = 'Готово!';
                alarmSound.play();
            }
            totalSeconds--;
        };
        
        update();
        const interval = setInterval(update, 1000);
        activeTimers[timerId] = { interval };
    };

    // --- DATA SYNC ---
    const exportData = () => {
        const dataStr = JSON.stringify({
            menu: state.menu,
            shoppingList: state.shoppingList,
            activeRecipes: activeRecipes,
            settings: state.settings
        });
        navigator.clipboard.writeText(dataStr).then(() => {
            alert('Данные плана скопированы в буфер обмена!');
        }).catch(err => {
            console.error('Could not copy text: ', err);
            prompt("Не удалось скопировать автоматически. Скопируйте вручную:", dataStr);
        });
    };

    const importData = () => {
        const dataStr = prompt("Вставьте данные вашего плана для импорта:");
        if (dataStr) {
            try {
                const importedData = JSON.parse(dataStr);
                if (importedData.menu && importedData.shoppingList && importedData.activeRecipes) {
                    state.menu = importedData.menu;
                    state.shoppingList = importedData.shoppingList;
                    state.settings = importedData.settings || state.settings;
                    activeRecipes = importedData.activeRecipes;
                    saveState();
                    renderSettings();
                    renderMenu();
                    renderShoppingList();
                    showScreen('menu');
                    alert('План успешно импортирован!');
                } else {
                    alert('Ошибка: неверный формат данных.');
                }
            } catch (e) {
                alert('Ошибка: не удалось прочитать данные.');
                console.error("Import error:", e);
            }
        }
    };
    
    // --- EVENT LISTENERS ---
    navButtons.forEach(button => {
        button.addEventListener('click', () => showScreen(button.dataset.target));
    });

    settingsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        handleCreateMenu();
    });

    const updateSettings = () => {
        state.settings.people = parseInt(peopleCountInput.value);
        state.settings.days = parseInt(dayCountInput.value);
        state.settings.useGemini = geminiToggle.checked;
        state.settings.apiKey = geminiApiKeyInput.value;
        state.settings.preferences = [...document.querySelectorAll('#settings-form input[name="preference"]:checked')].map(cb => cb.value);
        saveState();
    };

    settingsForm.addEventListener('input', updateSettings);

    document.getElementById('menu-grid').addEventListener('click', (e) => {
        const mealItem = e.target.closest('.meal-item');
        if (mealItem && mealItem.dataset.recipeId) {
            renderRecipe(mealItem.dataset.recipeId);
        }
    });
    
    document.body.addEventListener('click', (e) => {
        if (e.target.classList.contains('back-btn')) {
            const targetScreen = e.target.dataset.target;
            if (targetScreen === 'recipe') {
                renderRecipe(state.currentRecipeId);
            } else {
               showScreen(targetScreen);
            }
        }
        if (e.target.id === 'start-cooking-btn') renderCookingScreen(state.currentRecipeId);
        if (e.target.classList.contains('start-timer-btn')) {
            const time = e.target.dataset.time;
            const timerId = e.target.dataset.timerId;
            startTimer(parseInt(time), timerId);
            e.target.disabled = true;
            e.target.textContent = "Таймер запущен";
        }
    });

    document.getElementById('shopping-list-container').addEventListener('click', (e) => {
        const listItem = e.target.closest('.list-item');
        if (listItem) {
            const index = parseInt(listItem.dataset.index);
            if (state.shoppingList[index]) {
                state.shoppingList[index].purchased = !state.shoppingList[index].purchased;
                saveState();
                renderShoppingList();
            }
        }
    });
    
    document.getElementById('export-btn').addEventListener('click', exportData);
    document.getElementById('import-btn').addEventListener('click', importData);

    // --- INITIALIZATION ---
    const init = () => {
        loadState();
        renderSettings();
        if (state.menu) {
            renderMenu();
            renderShoppingList();
            showScreen('menu');
        } else {
            showScreen('settings');
        }
    };

    init();
});