import { GoogleGenAI } from "https://esm.run/@google/genai";
import { state, setState, saveStateToLocal } from './state.js';
import { logToConsole } from './utils.js';
import { showNotification, setSyncStatus } from './ui.js';

export let ai;

export function initializeAi(apiKey) {
    ai = new GoogleGenAI({ apiKey });
}

export async function makeGeminiRequest(prompt, jsonSchema) {
    logToConsole(`🟡 REQUEST: ${prompt.substring(0, 50)}...`);
    let retries = 3;
    while (retries > 0) {
        try {
            const result = await ai.models.generateContent({
              model: "gemini-2.5-flash",
              contents: [{ parts: [{ text: prompt }] }],
              config: {
                responseMimeType: "application/json",
                responseSchema: jsonSchema
              }
            });
            const jsonText = result.text.trim();
            const data = JSON.parse(jsonText);
            logToConsole(`✅ RESPONSE RECEIVED`);
            return data;
        } catch (error) {
            retries--;
            logToConsole(`🔴 ERROR: ${error}. Retrying... (${retries} left)`);
            if (retries === 0) throw error;
            await new Promise(res => setTimeout(res, 1000));
        }
    }
}

export async function generateStepImage(recipeId, stepIndex) {
    if (!ai) return;
    try {
        const recipe = state.recipes[recipeId];
        const stepDescription = recipe.steps[stepIndex].description;
        const prompt = `Food photography, realistic, high-detail photo of a cooking step: "${stepDescription}"`;
        
        const response = await ai.models.generateImages({
            model: 'imagen-4.0-generate-001',
            prompt: prompt,
            config: {
              numberOfImages: 1,
              outputMimeType: 'image/jpeg',
              aspectRatio: '4:3',
            },
        });

        const base64ImageBytes = response.generatedImages[0].image.imageBytes;
        return `data:image/jpeg;base64,${base64ImageBytes}`;
    } catch (error) {
        console.error("Image generation failed:", error);
        return null;
    }
}

// --- SYNC FUNCTIONS ---

let syncTimeout = null;

export async function syncDataUp() {
    const { enabled, apiKey, binId } = state.settings.jsonBin;
    if (!enabled || !apiKey || !binId) return;

    clearTimeout(syncTimeout);
    setSyncStatus('syncing');

    syncTimeout = setTimeout(async () => {
        try {
            const response = await fetch(`https://api.jsonbin.io/v3/b/${binId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Master-Key': apiKey,
                    'X-Bin-Versioning': 'false'
                },
                body: JSON.stringify(state)
            });
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            logToConsole('⬆️ Data synced up.');
            setSyncStatus('synced');
        } catch (e) {
            setSyncStatus('error');
            console.error('Sync Up failed', e);
        }
    }, 500); // Debounce saves
}

export async function syncDataDown() {
    const { enabled, apiKey, binId } = state.settings.jsonBin;
    if (!enabled || !apiKey || !binId) return;
    setSyncStatus('syncing');
    try {
        const response = await fetch(`https://api.jsonbin.io/v3/b/${binId}/latest`, {
            headers: { 'X-Master-Key': apiKey }
        });
        if (!response.ok) {
             if (response.status === 404) {
                logToConsole('ℹ️ Bin not found. Creating a new one by pushing current state.');
                await syncDataUp(); // Initial push to create it
                return;
            }
            throw new Error('Failed to fetch from JSONBin');
        }
        const data = await response.json();
        if (data.record && data.record.timestamp) {
            // Обновляем состояние, только если на сервере более новая версия
            if (!state.timestamp || new Date(data.record.timestamp) > new Date(state.timestamp)) {
                setState(data.record);
                saveStateToLocal();
                logToConsole('⬇️ Data synced down.');
            }
        }
        setSyncStatus('synced');
    } catch(e) {
        setSyncStatus('error');
        console.error('Sync Down failed', e);
    }
}

export async function createNewBin() {
    showNotification("Создание нового онлайн-хранилища...", 'loading');
    const { apiKey } = state.settings.jsonBin;
    if (!apiKey) {
        showNotification("X-Master-Key не найден", "error");
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
            body: JSON.stringify(state)
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const result = await response.json();
        logToConsole(`📦 New Bin created: ${result.metadata.id}`);
        showNotification("Новое хранилище успешно создано!", "success");
        return result.metadata.id;
    } catch(e) {
        showNotification("Ошибка создания хранилища.", 'error');
        console.error('Failed to create new Bin', e);
        return null;
    }
}
