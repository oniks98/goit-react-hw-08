import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL = 'https://678ccb0ef067bf9e24e83c86.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      // При успішному запиті повертаємо проміс із даними
      return response.data;
    } catch (e) {
      // При помилці запиту повертаємо проміс
      // який буде відхилений з текстом помилки
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact', // Тип дії (тип може використовуватись для відслідковування стану)
  async ({ name, number }, thunkAPI) => {
    // Функція, яка виконується асинхронно. Отримує параметри: name та number
    try {
      // Відправка POST запиту на сервер для додавання нового контакту
      const response = await axios.post('/contacts', { name, number });
      return response.data; // Повертає дані, які повертаються з сервера (наприклад, контакт з ID)
    } catch (e) {
      // Якщо сталася помилка, повертає reject з повідомленням про помилку
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact', // Тип дії (тип може використовуватись для відслідковування стану)
  async (id, thunkAPI) => {
    // Функція, яка виконується асинхронно. Отримує параметр id контакту для видалення
    try {
      // Відправка DELETE запиту на сервер для видалення контакту за id
      const response = await axios.delete(`/contacts/${id}`);
      return response.data; // Повертає дані, які повертаються з сервера (можливо, підтвердження видалення)
    } catch (e) {
      // Якщо сталася помилка, повертає reject з повідомленням про помилку
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
