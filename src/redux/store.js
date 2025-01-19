import { configureStore } from '@reduxjs/toolkit'; // Імпортуємо функцію для налаштування Redux store
import contactsReducer from './contactsSlice'; // Імпортуємо редюсер для контактів
import filtersReducer from './filtersSlice'; // Імпортуємо редюсер для фільтрів

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});
