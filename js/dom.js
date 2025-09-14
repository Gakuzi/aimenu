export const dom = {};

export function cacheDom() {
    const ids = [
        // Screens
        'welcome-screen', 'setup-screen', 'main-screen', 'recipe-screen',
        // Buttons
        'start-setup-wizard-btn', 'load-from-file-btn', 'scan-qr-btn', 'back-to-welcome-btn',
        'wizard-back-btn', 'wizard-next-btn', 'finish-setup-btn', 'back-to-menu-btn', 'prev-step-btn', 'next-step-btn',
        'start-timer-btn', 'pause-timer-btn', 'reset-timer-btn', 'save-settings-btn', 'add-family-member-btn',
        'wizard-add-family-member-btn', 'regenerate-all-btn', 'save-api-key-btn', 'save-sync-settings-btn',
        'run-wizard-btn', 'show-changelog-btn', 'enable-notifications-btn', 'scan-qr-from-settings-btn',
        'export-btn', 'import-btn', 'share-qr-btn', 'cancel-scan-btn', 'ask-to-buy-btn',
        'admin-load-bin-btn', 'admin-delete-bin-btn',
        // Inputs & Areas
        'api-key-input', 'wizard-jsonbin-api-key', 'wizard-jsonbin-bin-id', 'wizard-menu-duration',
        'wizard-total-budget', 'wizard-preferences', 'wizard-cuisine', 'wizard-difficulty',
        'settings-menu-duration', 'settings-total-budget', 'settings-preferences', 'settings-cuisine',
        'settings-difficulty', 'settings-api-key', 'settings-jsonbin-api-key', 'settings-jsonbin-bin-id',
        'import-file-input', 'command-input', 'admin-bin-id', 'admin-delete-bin-id',
        // Containers & Displays
        'app', 'setup-wizard', 'wizard-family-members-container', 'generation-progress', 'main-header-title',
        'sync-status-indicator', 'day-scroller-container', 'shopping-list-container', 'shopping-list-total',
        'recipe-title', 'step-indicator', 'step-image', 'step-description', 'timer-section', 'timer-display',
        'step-ingredients', 'step-ingredients-title', 'family-members-container', 'app-version-info',
        'admin-panel', 'qr-scanner-overlay', 'qr-video', 'qr-canvas', 'dev-console', 'log-output',
        'notification', 'modal-overlay', 'modal-title', 'modal-body', 'modal-buttons', 'wizard-nav',
        'wizard-step-counter', 'progress-bar', 'progress-status', 'progress-details', 'shopping-progress-text',
        'shopping-progress', 'pie-products', 'budget-spent-total', 'budget-total', 'budget-remaining',
        // Help Links
        'api-key-help-link', 'jsonbin-help-link', 'jsonbin-help-link-settings',
        // Audio
        'notification-sound'
    ];
    
    ids.forEach(id => {
        // Преобразуем kebab-case в camelCase для ключей объекта
        const camelCaseId = id.replace(/-([a-z])/g, g => g[1].toUpperCase());
        dom[camelCaseId] = document.getElementById(id);
    });

    // Добавляем элементы, которые выбираются по селекторам
    dom.screens = document.querySelectorAll('.screen');
    dom.wizardSteps = document.querySelectorAll('.wizard-step');
    dom.bottomNav = document.querySelector('.bottom-nav');
    dom.mainContents = document.querySelectorAll('.main-content');
    
    // Для удобства создаем вложенные объекты
    dom.budget = {
        pieProducts: dom.pieProducts,
        spentTotal: dom.budgetSpentTotal,
        total: dom.budgetTotal,
        remaining: dom.budgetRemaining,
    };
    
    dom.settings = {
        duration: dom.settingsMenuDuration,
        budget: dom.settingsTotalBudget,
        preferences: dom.settingsPreferences,
        cuisine: dom.settingsCuisine,
        difficulty: dom.settingsDifficulty,
        saveBtn: dom.saveSettingsBtn,
        familyContainer: dom.familyMembersContainer,
        addMemberBtn: dom.addFamilyMemberBtn,
        regenerateAllBtn: dom.regenerateAllBtn,
        geminiApiKeyInput: dom.settingsApiKey,
        saveApiKeyBtn: dom.saveApiKeyBtn,
        jsonBinBinId: dom.settingsJsonbinBinId,
        jsonBinApiKey: dom.settingsJsonbinApiKey,
        saveSyncSettingsBtn: dom.saveSyncSettingsBtn,
        jsonBinHelpLinkSettings: dom.jsonbinHelpLinkSettings,
        runWizardBtn: dom.runWizardBtn,
        appVersionInfo: dom.appVersionInfo,
        showChangelogBtn: dom.showChangelogBtn,
        enableNotificationsBtn: dom.enableNotificationsBtn,
        scanQrFromSettingsBtn: dom.scanQrFromSettingsBtn,
        adminPanel: dom.adminPanel,
        adminBinIdInput: dom.adminBinId,
        adminLoadBtn: dom.adminLoadBinBtn,
        adminDeleteBinIdInput: dom.adminDeleteBinId,
        adminDeleteBtn: dom.adminDeleteBinBtn,
    };
}