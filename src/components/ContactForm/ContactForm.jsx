import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import css from './ContactForm.module.css';

const ContactFormSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  phone: Yup.string()
    .matches(
      /^\d{3}-\d{3}-\d{4}$/,
      'Phone number must be in the format XXX-XXX-XXXX'
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

  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
        name: values.username,
        number: values.phone,
      })
    );

    toast.success(`Contact ${values.username} added successfully!`); // Відображаємо сповіщення

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
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
            autoComplete="name"
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
            autoComplete="tel"
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
