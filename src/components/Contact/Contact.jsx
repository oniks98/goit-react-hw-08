import { useDispatch } from 'react-redux';
import { deleteContact } from './../redux/actions';

import { HiUser } from 'react-icons/hi';
import { BsFillTelephoneFill } from 'react-icons/bs';
import css from './Contact.module.css';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
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
        Delete
      </button>
    </div>
  );
};

export default Contact;
