import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactsOps';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(
          contact => contact.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, handleRejected);
  },
});

export default contactsSlice.reducer;

//  2 -й варіант  з addMatcher
// import { createSlice, isAnyOf } from '@reduxjs/toolkit';
// import { fetchContacts, addContact, deleteContact } from './contactsOps';

// const handlePending = state => {
//   state.isLoading = true;
// };

// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

// const handleFulfilledFetchContacts = (state, action) => {
//   state.isLoading = false;
//   state.error = null;
//   state.items = action.payload;
// };

// const handleFulfilledAddContact = (state, action) => {
//   state.isLoading = false;
//   state.error = null;
//   state.items.push(action.payload);
// };

// const handleFulfilledDeleteContact = (state, action) => {
//   state.isLoading = false;
//   state.error = null;
//   state.items = state.items.filter(contact => contact.id !== action.payload.id);
// };

// // Створюємо slice для управління контактами
// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     items: [],
//     isLoading: false,
//     error: null,
//   },
//   extraReducers: builder => {
//     builder
//       .addMatcher(
//         isAnyOf(fetchContacts.pending, addContact.pending, deleteContact.pending),
//         handlePending
//       )
//       .addMatcher(
//         isAnyOf(fetchContacts.rejected, addContact.rejected, deleteContact.rejected),
//         handleRejected
//       )
//       .addMatcher(
//         isAnyOf(fetchContacts.fulfilled),
//         handleFulfilledFetchContacts
//       )
//       .addMatcher(
//         isAnyOf(addContact.fulfilled),
//         handleFulfilledAddContact
//       )
//       .addMatcher(
//         isAnyOf(deleteContact.fulfilled),
//         handleFulfilledDeleteContact
//       );
//   },
// });

//
// export default contactsSlice.reducer;
