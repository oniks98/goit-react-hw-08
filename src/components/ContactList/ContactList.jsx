import { useSelector } from 'react-redux'; // Хук для отримання даних зі сховища Redux
import Contact from '../Contact/Contact'; // Імпортуємо компонент Contact
import { selectContacts } from '../../redux/contactsSlice'; // Імпортуємо селектор контактів
import { selectNameFilter } from '../../redux/filtersSlice'; // Імпортуємо селектор фільтрації контактів
import css from './ContactList.module.css';

// Компонент ContactList відображає список контактів
const ContactList = () => {
  const contacts = useSelector(selectContacts); // Отримуємо список контактів із Redux
  const nameFilter = useSelector(selectNameFilter); // Отримуємо значення фільтра з Redux

  // Фільтруємо контакти за ім’ям
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(nameFilter.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {visibleContacts.map(contact => (
        <li className={css.item} key={contact.id}>
          <Contact {...contact} /> {/* Передаємо контакт у компонент Contact */}
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
