import React from 'react';
import { HelmetProvider } from 'react-helmet-async'; // Бібліотека для керування мета-тегами в <head> (наприклад, заголовки сторінок)
import ReactDOM from 'react-dom/client'; // API для рендерингу React-компонентів у DOM
import { BrowserRouter } from 'react-router-dom'; // Компонент для керування маршрутизацією у додатку
import { PersistGate } from 'redux-persist/integration/react'; // Обгортка для збереження (persist) стану Redux у локальному сховищі
import { Provider } from 'react-redux'; // Обгортка для підключення Redux-стану до React-додатка
import { App } from './components/App/App'; // Головний компонент додатка
import { store, persistor } from './redux/store'; // Імпорт Redux store та persistor (механізм збереження стану)
import 'modern-normalize'; // Скидання стилів (нормалізація CSS) для узгодженого відображення у різних браузерах
import './index.css'; // Основні стилі додатка

// Рендеринг головного React-компонента у DOM
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* StrictMode допомагає виявляти потенційні проблеми у React-додатку під час розробки */}
    <Provider store={store}>
      {/* Надає доступ до Redux store для всіх компонентів у додатку */}
      <PersistGate loading={null} persistor={persistor}>
        {/* Забезпечує збереження стану Redux у локальному сховищі */}
        <BrowserRouter>
          {/* Додає підтримку маршрутизації (URL-навігації) у додатку */}
          <HelmetProvider>
            {/* Дозволяє керувати SEO-оптимізацією через зміну мета-тегів у <head> */}
            <App />
            {/* Головний компонент додатка */}
          </HelmetProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
