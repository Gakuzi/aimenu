import { dom } from './dom.js';
import { state, resetState } from './state.js';
import { showNotification } from './ui.js';

export function logToConsole(message) {
    if (dom.logOutput) {
        const p = document.createElement('p');
        p.textContent = `> ${new Date().toLocaleTimeString()}: ${message}`;
        dom.logOutput.appendChild(p);
        dom.logOutput.scrollTop = dom.logOutput.scrollHeight;
    }
    console.log(message);
}

export function toggleDevConsole() {
    dom.devConsole.classList.toggle('visible');
}

export function executeCommand(commandStr) {
    logToConsole(commandStr);
    const [command, ...args] = commandStr.split(' ');
    switch(command) {
        case 'state':
            console.log(state);
            logToConsole('Current state logged to browser console.');
            break;
        case 'reset':
            resetState();
            break;
        case 'notify':
            showNotification(args.join(' ') || 'Test notification');
            break;
        default:
            logToConsole('Unknown command.');
    }
    dom.commandInput.value = '';
}
