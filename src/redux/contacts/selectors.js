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
