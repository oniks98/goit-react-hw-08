import { createSlice } from '@reduxjs/toolkit'; // Імпортуємо функцію createSlice для створення Redux slice

// Створюємо slice для управління контактами
const contactsSlice = createSlice({
  name: 'contacts', // Назва slice
  initialState: {
    items: [
      // Початковий список контактів
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  },
  reducers: {
    // Додає новий контакт до списку
    addContact(state, action) {
      state.items.push(action.payload);
    },
    // Видаляє контакт за його ID
    deleteContact(state, action) {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

// Експортуємо екшени для використання в компонентах
export const { addContact, deleteContact } = contactsSlice.actions;

// Селектор для отримання списку контактів зі стану Redux
export const selectContacts = state => state.contacts.items;

// Експортуємо редюсер для додавання в store
export default contactsSlice.reducer;
