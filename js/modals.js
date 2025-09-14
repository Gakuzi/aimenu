import { dom } from './dom.js';
import { state, setState, saveStateToLocal } from './state.js';
import { showModal, hideModal, showNotification, renderFamilyMembers, renderShoppingList, renderBudget, renderAll } from './ui.js';
import { saveState } from './handlers.js';
import { startGenerationProcess } from './generation.js';
import { VERSION, CHANGELOG } from './config.js';
import { showRecipe } from './handlers.js';

export function openPurchaseModal(catIndex, itemIndex) {
    const item = state.shoppingList[catIndex].items[itemIndex];
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
    showModal(`Покупка: ${item.name}`, body, [
        { text: "Отмена", class: "secondary", action: () => {} },
        { text: "Куплено", class: "primary", action: () => {
            const qty = parseFloat(document.getElementById('purchase-qty').value);
            const price = parseFloat(document.getElementById('purchase-price').value);
            if (isNaN(qty) || isNaN(price) || qty <= 0) {
                showNotification("Введите корректные данные", "error");
                return;
            }
            if (!item.purchases) item.purchases = [];
            item.purchases.push({ qty, price, date: new Date().toISOString() });
            saveState();
            renderShoppingList();
            renderBudget();
        }}
    ]);
}

export function openUndoPurchaseModal(catIndex, itemIndex) {
    const item = state.shoppingList[catIndex].items[itemIndex];
    let purchasesHtml = (item.purchases || []).map((p, index) => `
        <li class="family-member-card">
            <span>${p.qty} ${item.shoppingSuggestion.unit} - ${p.price} ₽</span>
            <button data-purchase-index="${index}">❌</button>
        </li>`).join('') || "<p>Нет записей о покупках.</p>";
    const body = `<ul style="list-style: none; padding: 0;">${purchasesHtml}</ul>`;
    showModal("Отменить покупку?", body, [{ text: "Закрыть", class: "primary", action: () => {} }]);
    
    document.querySelectorAll('[data-purchase-index]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const purchaseIndex = parseInt(e.currentTarget.dataset.purchaseIndex);
            item.purchases.splice(purchaseIndex, 1);
            saveState();
            renderShoppingList();
            renderBudget();
            hideModal();
        });
    });
}

export function showMissingIngredientsWarning(missingItems, recipeId) {
    const itemsList = missingItems.map(item => `<li>${item.name}</li>`).join('');
    const body = `<p>Не хватает:</p><ul>${itemsList}</ul><p>Хотите всё равно открыть рецепт?</p>`;
    showModal("Не хватает ингредиентов!", body, [
        { text: 'Отмена', class: 'secondary', action: () => {} },
        { text: 'Продолжить', class: 'primary', action: () => showRecipe(recipeId) }
    ]);
}

export function openFamilyMemberModal(isWizard = false, person = null, index = -1) {
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
        if (index > -1) state.settings.family[index] = newPerson;
        else state.settings.family.push(newPerson);
        renderFamilyMembers(isWizard);
        if (!isWizard) saveState();
    };
    showModal(title, body, [
        { text: "Отмена", class: "secondary", action: () => {} },
        { text: "Сохранить", class: "primary", action: action }
    ]);
}

export function confirmRegenerateAll() {
    showModal("Перегенерировать всё меню?",
        "Это создаст новое меню, рецепты и список покупок на основе текущих настроек.",
        [
            { text: "Отмена", class: "secondary", action: () => {} },
            { text: "Да, перегенерировать", class: "danger", action: async () => {
                const purchasedItems = state.shoppingList
                    .flatMap(c => c.items || [])
                    .filter(i => (i.purchases || []).length > 0)
                    .map(i => i.name)
                    .join(', ');
                await startGenerationProcess(true, purchasedItems);
            }}
        ]
    );
}

export function showChangelogModal() {
    let bodyHtml = '';
    for (const version in CHANGELOG) {
        bodyHtml += `<h4>Версия ${version}</h4><ul>${CHANGELOG[version].map(c => `<li>${c}</li>`).join('')}</ul>`;
    }
    showModal("История изменений", bodyHtml, [{text: 'Закрыть', class: 'primary', action: () => {}}]);
}

export function showJsonBinHelpModal() {
    const body = `<p>JSONBin.io — это бесплатный сервис для безопасного хранения данных онлайн.</p><ol><li>Перейдите на <a href="https://jsonbin.io/" target="_blank">jsonbin.io</a> и зарегистрируйтесь.</li><li>Нажмите на аватар и выберите <strong>API Keys</strong>.</li><li>Скопируйте ваш <strong>X-Master-Key</strong>.</li><li><b>Для нового хранилища,</b> вставьте X-Master-Key и оставьте поле ID хранилища пустым.</li><li><b>Для подключения к существующему,</b> вставьте X-Master-Key и ID хранилища.</li></ol>`;
    showModal("Как настроить JSONBin.io?", body, [{text: 'Понятно', class:'primary', action: ()=>{}}]);
}
    
export function showApiKeyHelpModal() {
    const body = `<p>Для работы нужен API ключ от Google AI Studio (Gemini).</p><ol><li>Перейдите на <a href="https://aistudio.google.com/" target="_blank">Google AI Studio</a>.</li><li>Войдите в Google аккаунт.</li><li>Нажмите <strong>"Get API key"</strong> в меню слева.</li><li>Нажмите <strong>"Create API key in new project"</strong>.</li><li>Скопируйте ключ и вставьте его в приложении.</li></ol><p style="font-size: 12px; color: var(--warning-color);"><b>Важно:</b> Храните ваш ключ в безопасности.</p>`;
    showModal("Как получить API ключ?", body, [{text: 'Понятно', class:'primary', action: ()=>{}}]);
}

export function openAskToBuyModal() {
    const familyWithContacts = state.settings.family.filter(p => p.contact);
    const unpurchasedItems = state.shoppingList.flatMap(c => c.items).filter(i => (i.purchases || []).reduce((s, p) => s + p.qty, 0) < i.shoppingSuggestion.qty);

    if (unpurchasedItems.length === 0) {
        showNotification("Все товары уже куплены!", "success");
        return;
    }
    if (familyWithContacts.length === 0) {
        showNotification("Сначала добавьте контакты членам семьи в настройках.", "warning");
        return;
    }

    const shoppingListText = "Привет! Нужно купить продукты по списку:\n" + unpurchasedItems.map(item => `- ${item.name} (${item.shoppingSuggestion.qty} ${item.shoppingSuggestion.unit})`).join('\n');
    
    const familyButtonsHtml = familyWithContacts.map(person => {
        const encodedText = encodeURIComponent(shoppingListText);
        const contact = person.contact.replace(/\s+/g, '');
        const link = /^\+?\d+$/.test(contact) ? `https://wa.me/${contact}?text=${encodedText}` : `https://t.me/${contact.replace('@', '')}`;
        return `<a href="${link}" target="_blank" class="modal-button secondary" style="text-decoration: none;">Отправить ${person.name}</a>`;
    }).join('');

    showModal("Попросить купить", `<p>Кому отправить список покупок?</p><div class="modal-buttons">${familyButtonsHtml}</div>`, [
        { text: "Отмена", class: "primary", action: () => {} }
    ]);
}

// Admin Modals
export async function handleAdminLoad() {
    const binId = dom.settings.adminBinIdInput.value.trim();
    const masterKey = state.settings.jsonBin.apiKey;
    if (!binId || !masterKey) {
        showNotification("Введите Bin ID и убедитесь, что ваш X-Master-Key сохранен.", "warning");
        return;
    }
    showNotification(`Загрузка данных из ${binId}...`, "loading");
    try {
        const response = await fetch(`https://api.jsonbin.io/v3/b/${binId}/latest`, { headers: { 'X-Master-Key': masterKey } });
        if (!response.ok) throw new Error(`Ошибка загрузки: ${response.statusText}`);
        const data = await response.json();
        
        const originalState = JSON.parse(JSON.stringify(state));
        setState(data.record);
        renderAll();
        hideNotification();
        
        showModal("Данные загружены", `<p>Вы просматриваете данные из хранилища <strong>${binId}</strong>.</p>`,
            [{ text: "Вернуться к моим данным", class: "primary", action: () => {
                setState(originalState);
                renderAll();
                showNotification("Вы вернулись к своим данным.");
            }}]
        );
    } catch(e) {
        showNotification(e.message, "error");
    }
}

export function handleAdminDelete() {
    const binId = dom.settings.adminDeleteBinIdInput.value.trim();
    const masterKey = state.settings.jsonBin.apiKey;
    if (!binId || !masterKey) {
        showNotification("Введите Bin ID для удаления.", "warning");
        return;
    }
    showModal("Подтвердите удаление",
        `<p>Вы уверены, что хотите <strong>БЕЗВОЗВРАТНО</strong> удалить хранилище с ID: <strong>${binId}</strong>?</p>`,
        [
            { text: "Отмена", class: "secondary", action: () => {} },
            { text: "Да, удалить", class: "danger", action: async () => {
                showNotification(`Удаление ${binId}...`, "loading");
                 try {
                    const response = await fetch(`https://api.jsonbin.io/v3/b/${binId}`, { method: 'DELETE', headers: { 'X-Master-Key': masterKey } });
                    if (!response.ok) throw new Error(`Ошибка удаления: ${response.statusText}`);
                    showNotification(`Хранилище ${binId} успешно удалено.`, "success");
                    dom.settings.adminDeleteBinIdInput.value = '';
                 } catch(e) { showNotification(e.message, "error"); }
            }}
        ]
    );
}
