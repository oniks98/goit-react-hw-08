import { useDispatch } from 'react-redux';
import {
  deleteContact,
  updateContact,
  fetchContacts,
} from '../../redux/contacts/operations';
import Modal from 'react-modal';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { HiUser } from 'react-icons/hi';
import { BsFillTelephoneFill } from 'react-icons/bs';
import css from './Contact.module.css';

Modal.setAppElement('#root');

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleDelete = () => {
    dispatch(deleteContact(id));
    toast.error(`Contact ${name} deleted!`);
    setIsDeleteModalOpen(false);
  };

  const handleEditSubmit = values => {
    dispatch(updateContact({ id, name: values.username, number: values.phone }))
      .then(() => {
        dispatch(fetchContacts()); // Оновлюємо список контактів після успішного редагування
        toast.success(`Contact ${values.username} updated!`);
        setIsEditModalOpen(false);
      })
      .catch(error => {
        toast.error(`Failed to update contact: ${error.message}`);
      });
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
      <div className={css.buttonGroup}>
        <button className={css.btn} onClick={() => setIsEditModalOpen(true)}>
          Edit
        </button>
        <button className={css.btn} onClick={() => setIsDeleteModalOpen(true)}>
          Delete
        </button>
      </div>

      {/* Модальне вікно для видалення */}
      <Modal
        isOpen={isDeleteModalOpen}
        onRequestClose={() => setIsDeleteModalOpen(false)}
        className={css.modal}
        overlayClassName={css.overlay}
      >
        <p>Are you sure you want to delete this contact?</p>
        <button className={css.confirmBtn} onClick={handleDelete}>
          Yes
        </button>
        <button
          className={css.cancelBtn}
          onClick={() => setIsDeleteModalOpen(false)}
        >
          No
        </button>
      </Modal>

      {/* Модальне вікно для редагування */}
      <Modal
        isOpen={isEditModalOpen}
        onRequestClose={() => setIsEditModalOpen(false)}
        className={css.modal}
        overlayClassName={css.overlay}
      >
        <h2>Edit Contact</h2>
        <Formik
          initialValues={{ username: name, phone: number }}
          validationSchema={Yup.object({
            username: Yup.string()
              .min(3, 'Too Short!')
              .max(50, 'Too Long!')
              .required('Required'),
            phone: Yup.string()
              .matches(/^\d{3}-\d{3}-\d{4}$/, 'Format: XXX-XXX-XXXX')
              .required('Required'),
          })}
          onSubmit={handleEditSubmit}
        >
          <Form className={css.form}>
            <label className={css.label}>
              Name:
              <Field className={css.field} type="text" name="username" />
              <ErrorMessage
                name="username"
                component="span"
                className={css.error}
              />
            </label>
            <label className={css.label}>
              Number:
              <Field className={css.field} type="tel" name="phone" />
              <ErrorMessage
                name="phone"
                component="span"
                className={css.error}
              />
            </label>
            <button className={css.btnSave} type="submit">
              Save
            </button>
          </Form>
        </Formik>
        <button
          className={css.cancelBtn}
          onClick={() => setIsEditModalOpen(false)}
        >
          Cancel
        </button>
      </Modal>
    </div>
  );
};

export default Contact;
