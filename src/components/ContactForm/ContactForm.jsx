import { useDispatch } from 'react-redux';
import { addContact } from './../redux/contactsSlice';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import { nanoid } from 'nanoid/non-secure';
import css from './ContactForm.module.css';

const ContactFormSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  phone: Yup.string()
    .matches(
      /^\d{3}-\d{2}-\d{2}$/,
      'Phone number must be in the format XXX-XX-XX'
    )
    .required('Required'),
});

const initialValues = {
  username: '',
  phone: '',
};

const ContactForm = () => {
  const dispatch = useDispatch();

  const nameFieldId = useId();
  const phoneFieldId = useId();

  const handleSumbit = (values, actions) => {
    dispatch(
      addContact({
        id: nanoid(),
        name: values.username,
        number: values.phone,
      })
    );

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSumbit}
      validationSchema={ContactFormSchema}
    >
      <Form className={css.form}>
        <div>
          <label className={css.label} htmlFor={nameFieldId}>
            Name
          </label>
          <Field
            className={css.field}
            type="text"
            name="username"
            id={nameFieldId}
          />
          <ErrorMessage
            name="username"
            component="span"
            className={css.spanMessage}
          />
        </div>

        <div>
          <label className={css.label} htmlFor={phoneFieldId}>
            Number
          </label>
          <Field
            className={css.field}
            type="tel"
            name="phone"
            id={phoneFieldId}
          />
          <ErrorMessage
            name="phone"
            component="span"
            className={css.spanMessage}
          />
        </div>

        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
