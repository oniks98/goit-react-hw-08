import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

const getVisibleContacts = (contacts, nameFilter) =>
  contacts.filter(contact =>
    contact.name.toLowerCase().includes(nameFilter.toLowerCase())
  );

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const nameFilter = useSelector(state => state.filters.name);
  const visibleContacts = getVisibleContacts(contacts, nameFilter);

  return (
    <ul className={css.list}>
      {visibleContacts.map(contact => (
        <li className={css.item} key={contact.id}>
          <Contact {...contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
