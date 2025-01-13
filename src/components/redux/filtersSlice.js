import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'filters',
  initialState: {
    name: '',
  },
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

// Експортуємо фабрики екшенів
export const { changeFilter } = slice.actions;

// Експортуємо редюсер слайсу
export default slice.reducer;
