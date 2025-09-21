import React from 'react';
import ReactDOM from 'react-dom/client';
import './src/index.css';
import App from './src/App';

const container = document.getElementById('root');
if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error('Failed to find the root element');
}
