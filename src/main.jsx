import React from 'react';
import ReactDOM from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';
import 'modern-normalize';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* Обгортає застосунок у Redux store, щоб зробити сховище доступним у всіх компонентах */}
      <PersistGate loading={null} persistor={persistor}>
        {/* PersistGate затримує рендеринг застосунку, поки завантажуються збережені дані з локального сховища */}
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
