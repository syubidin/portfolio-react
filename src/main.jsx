import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { initMediaProtection } from './lib/mediaProtection.js';
import './styles.css';

// Protect all media assets from click-hold-drag across the entire website
initMediaProtection();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
