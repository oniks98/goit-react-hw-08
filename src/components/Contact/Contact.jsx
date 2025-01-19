import { useDispatch } from 'react-redux'; // Хук для відправлення екшенів у Redux
import { deleteContact } from '../../redux/contactsOps'; // Імпортуємо екшен для видалення контакту

import { HiUser } from 'react-icons/hi'; // Іконка користувача
import { BsFillTelephoneFill } from 'react-icons/bs'; // Іконка телефону
import css from './Contact.module.css';

// Компонент Contact відображає окремий контакт у списку
const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch(); // Отримуємо функцію dispatch для відправлення екшенів у Redux

  const handleDelete = () => {
    dispatch(deleteContact(id)); // Викликаємо екшен для видалення контакту за його ID
  };

  return (
    <div className={css.item}>
      <div className={css.datablock}>
        <p className={css.text}>
          <HiUser />
          {name}
        </p>
        <p className={css.text}>
          <BsFillTelephoneFill />
          {number}
        </p>
      </div>
      <button className={css.btn} type="button" onClick={handleDelete}>
        Delete {/* Кнопка для видалення контакту */}
      </button>
    </div>
  );
};

export default Contact;
