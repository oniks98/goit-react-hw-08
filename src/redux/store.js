import { configureStore } from '@reduxjs/toolkit'; // Імпортуємо функцію для налаштування Redux store
import contactsReducer from './contactsSlice'; // Імпортуємо редюсер для контактів
import filtersReducer from './filtersSlice'; // Імпортуємо редюсер для фільтрів

// Налаштування Redux store за допомогою функції configureStore з @reduxjs/toolkit
export const store = configureStore({
  reducer: {
    contacts: contactsReducer, // Стан контактів керується через редюсер contactsReducer
    filters: filtersReducer, // Стан фільтрів керується через редюсер filtersReducer
  },
});
