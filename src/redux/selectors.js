import { createSelector } from '@reduxjs/toolkit'; // Імпортуємо функцію createSelector з бібліотеки @reduxjs/toolkit для створення мемоізованих селекторів

// Селектор для отримання всіх контактів із state
export const selectContacts = state => state.contacts.items;
// Вибирає список контактів з об'єкта contacts (state.contacts.items)

// Селектор для перевірки, чи завантажуються контакти
export const selectIsLoading = state => state.contacts.isLoading;
// Вибирає значення isLoading з об'єкта contacts (state.contacts.isLoading),
// яке відображає, чи йде завантаження контактів

// Селектор для отримання помилки під час завантаження контактів
export const selectError = state => state.contacts.error;
// Вибирає значення error з об'єкта contacts (state.contacts.error),
// яке містить повідомлення про помилку, якщо вона сталася під час завантаження контактів

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
