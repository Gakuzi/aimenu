import qrcode from 'https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/+esm';
import { dom } from './dom.js';
import { state, setState, saveStateToLocal } from './state.js';
import { showModal, showNotification, renderAll } from './ui.js';
import { saveState } from './handlers.js';
import { continueInit } from './main.js';
import { qrScannerState } from './state.js';


export function exportData() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", `family_menu_backup_${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
    showNotification("Данные экспортированы!");
}

function processImportedData(dataString, isQr = false) {
    try {
        let decodedString = isQr ? atob(dataString) : dataString;
        const importedData = JSON.parse(decodedString);

        if (importedData.syncCredentials) { // QR-код для синхронизации
            state.settings.jsonBin = {
                enabled: true,
                apiKey: importedData.syncCredentials.apiKey,
                binId: importedData.syncCredentials.binId
            };
            showNotification("Настройки синхронизации получены!", "success");
            saveStateToLocal();
            continueInit();
            return;
        }

        if (importedData.settings && importedData.menu && importedData.recipes) { // Полный бэкап
            showModal("Подтверждение импорта",
                "<p>Вы уверены, что хотите импортировать эти данные? Все текущие данные будут перезаписаны.</p>",
                [
                    { text: "Отмена", class: "secondary", action: () => {} },
                    { text: "Импортировать", class: "primary", action: async () => {
                        setState(importedData);
                        if (!state.settings.jsonBin) {
                             state.settings.jsonBin = { enabled: false, apiKey: null, binId: null };
                        }
                        await saveState();
                        showNotification("Данные успешно импортированы!");
                        showScreen('main-screen');
                        renderAll();
                    }}
                ]
            );
        } else {
            throw new Error("Invalid file format");
        }
    } catch (error) {
        console.error("Import error:", error);
        showNotification("Ошибка импорта: неверный формат данных.", 'error');
    }
}

export function importData(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        processImportedData(e.target.result, false);
        event.target.value = ''; // Сброс инпута
    };
    reader.readAsText(file);
}

export function showQrCode() {
    try {
        const { enabled, apiKey, binId } = state.settings.jsonBin;
        if (!enabled || !apiKey || !binId) {
            showNotification("Сначала настройте онлайн-синхронизацию.", "warning");
            return;
        }
        const dataToEncode = { syncCredentials: { apiKey, binId } };
        const dataString = btoa(JSON.stringify(dataToEncode));
        const qr = qrcode(0, 'L');
        qr.addData(dataString);
        qr.make();
        const qrImgTag = qr.createImgTag(4, 8);

        const body = `
            <p>Отсканируйте этот QR-код на другом устройстве, чтобы подключить его к этому же онлайн-хранилищу.</p>
            <div id="qr-code-container">${qrImgTag}</div>
            <p style="font-size: 12px; color: var(--warning-color);"><b>Внимание:</b> QR-код содержит ключи доступа. Не делитесь им с посторонними.</p>
        `;
        showModal("Синхронизация", body, [{ text: "Закрыть", class: "primary", action: () => {} }]);
    } catch(e) {
        showNotification("Ошибка при генерации QR-кода.", "error");
        console.error(e);
    }
}

// --- QR Scanner ---
export async function startQrScanner() {
    dom.qrScannerOverlay.classList.remove('hidden');
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        showNotification("Ваш браузер не поддерживает доступ к камере.", "error");
        stopQrScanner();
        return;
    }
    try {
        qrScannerState.stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
        dom.qrVideo.srcObject = qrScannerState.stream;
        dom.qrVideo.setAttribute("playsinline", true);
        await dom.qrVideo.play();
        qrScannerState.animationFrameId = requestAnimationFrame(scanTick);
    } catch (err) {
        console.error("QR Scanner Error:", err);
        let message = "Не удалось получить доступ к камере.";
        if (err.name === 'NotAllowedError') message = "Вы не разрешили доступ к камере. Проверьте настройки браузера.";
        else if (err.name === 'NotFoundError') message = "Камера не найдена на вашем устройстве.";
        showNotification(message, "error");
        stopQrScanner();
    }
}

export function stopQrScanner() {
    if (qrScannerState.stream) {
        qrScannerState.stream.getTracks().forEach(track => track.stop());
    }
    if (qrScannerState.animationFrameId) {
        cancelAnimationFrame(qrScannerState.animationFrameId);
    }
    dom.qrScannerOverlay.classList.add('hidden');
}

function scanTick() {
    if (dom.qrVideo.readyState === dom.qrVideo.HAVE_ENOUGH_DATA) {
        const canvas = dom.qrCanvas;
        canvas.height = dom.qrVideo.videoHeight;
        canvas.width = dom.qrVideo.videoWidth;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(dom.qrVideo, 0, 0, canvas.width, canvas.height);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const code = window.jsQR(imageData.data, imageData.width, imageData.height, { inversionAttempts: "dontInvert" });

        if (code) {
            stopQrScanner();
            processImportedData(code.data, true);
        }
    }
    qrScannerState.animationFrameId = requestAnimationFrame(scanTick);
}
