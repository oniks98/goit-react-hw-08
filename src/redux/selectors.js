import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectNameFilter = state => state.filters.name;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, nameFilter) => {
    // Використовуємо вже існуючі селектори
    //   const contacts = selectContacts(state);
    //   const nameFilter = selectNameFilter(state);

    const getVisibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(nameFilter.toLowerCase())
    );

    return getVisibleContacts;
  }
);
