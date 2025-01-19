import { useSelector } from 'react-redux'; // Хук для отримання даних зі сховища Redux
import Contact from '../Contact/Contact'; // Імпортуємо компонент Contact
import { selectVisibleContacts } from '../../redux/selectors';
import css from './ContactList.module.css';

// Компонент ContactList відображає список контактів
const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <ul className={css.list}>
      {contacts.map(contact => (
        <li className={css.item} key={contact.id}>
          <Contact {...contact} /> {/* Передаємо контакт у компонент Contact */}
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
