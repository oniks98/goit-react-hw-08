import { createSelector } from '@reduxjs/toolkit'; // Імпортуємо функцію createSelector з бібліотеки @reduxjs/toolkit для створення мемоізованих селекторів
import { selectContacts } from '../contacts/selectors';

// Селектор для отримання значення фільтра за ім'ям
export const selectNameFilter = state => state.filters.name;
// Вибирає значення фільтра за ім'ям з об'єкта filters (state.filters.name)

// Створюємо мемоізований селектор для отримання видимих контактів, які відповідають фільтру
export const selectVisibleContacts = createSelector(
  [selectContacts, selectNameFilter], // Массив селекторів, які передаються в createSelector
  (contacts, nameFilter) => {
    // Функція, яка буде обробляти ці дані
    return contacts.filter(
      (
        contact // Фільтруємо контакти
      ) => contact.name.toLowerCase().includes(nameFilter.toLowerCase()) // Перевіряємо, чи містить ім'я контакту значення фільтра (не чутливе до регістру)
    );
  }
);
