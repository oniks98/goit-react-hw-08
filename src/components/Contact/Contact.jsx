import { HiUser } from 'react-icons/hi';
import { BsFillTelephoneFill } from 'react-icons/bs';
import css from './Contact.module.css';

function Contact({ id, name, number, onDelete }) {
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

      <button className={css.btn} type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}

export default Contact;
