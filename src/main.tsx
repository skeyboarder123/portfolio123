import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './01-app/App';
import './01-app/styles/globals.css';
import { BrowserRouter } from 'react-router-dom';
import i18n from './01-app/providers/i18nProvider/config/i18n';
import { I18nextProvider } from 'react-i18next';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <BrowserRouter basename="/portfolio123">
        <App />
      </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode>
);
