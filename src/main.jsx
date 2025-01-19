import React from 'react';
import ReactDOM from 'react-dom/client';
import 'modern-normalize';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* Обгортає застосунок у Redux store, щоб зробити сховище доступним у всіх компонентах */}
      <App />
    </Provider>
  </React.StrictMode>
);
