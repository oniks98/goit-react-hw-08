import { configureStore } from '@reduxjs/toolkit'; // Імпортуємо функцію для налаштування Redux store
import contactsReducer from './contactsSlice'; // Імпортуємо редюсер для контактів
import filtersReducer from './filtersSlice'; // Імпортуємо редюсер для фільтрів
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

// Конфігурація для збереження частини стейту (контактів)
const contactsPersistConfig = {
  key: 'contacts', // Ключ для збереження в localStorage
  storage, // Використовуємо localStorage для збереження
  whitelist: ['items'], // Вибірково зберігаємо лише поле items (список контактів)
};

// Створюємо персистований редюсер для контактів
const persistedContactsReducer = persistReducer(
  contactsPersistConfig,
  contactsReducer
);

// Налаштовуємо Redux store
export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer, // Використовуємо персистований редюсер для контактів
    filters: filtersReducer, // Редюсер для фільтрів
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER], // Ігноруємо ці екшени для серіалізації
      },
    }),
});

// Створюємо persistor для відновлення збереженого стану
export const persistor = persistStore(store);
