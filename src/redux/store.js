import { configureStore } from '@reduxjs/toolkit'; // Імпортуємо функцію для налаштування Redux store

import { persistStore, persistReducer } from 'redux-persist'; // Імпортуємо функції для збереження стану
import storage from 'redux-persist/lib/storage'; // Імпортуємо сховище для збереження в localStorage
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'; // Імпортуємо постійні значення для роботи з персистенцією

import contactsReducer from './contacts/slice';
import filtersReducer from './filters/slice';
import authReducer from './auth/slice';

const authPersistConfig = {
  key: 'auth', // Ключ для збереження в localStorage
  storage, // Використовуємо localStorage для збереження
  whitelist: ['token'],
};

// Налаштовуємо Redux store
export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
    filters: filtersReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: import.meta.env.MODE === 'development',
});

// Створюємо persistor для відновлення збереженого стану
export const persistor = persistStore(store);
