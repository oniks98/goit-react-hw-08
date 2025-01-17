import { createSlice } from '@reduxjs/toolkit'; // Імпортуємо функцію createSlice для створення Redux slice

// Створюємо slice для управління фільтром контактів
const filtersSlice = createSlice({
  name: 'filters', // Назва slice
  initialState: {
    name: '', // Початкове значення фільтра (порожнє)
  },
  reducers: {
    // Змінює значення фільтра
    changeFilter(state, action) {
      state.name = action.payload; // Оновлює фільтр на нове значення
    },
  },
});

// Експортуємо екшен для зміни фільтра
export const { changeFilter } = filtersSlice.actions;

// Селектор для отримання значення фільтра з Redux стану
export const selectNameFilter = state => state.filters.name;

// Експортуємо редюсер для додавання в store
export default filtersSlice.reducer;
