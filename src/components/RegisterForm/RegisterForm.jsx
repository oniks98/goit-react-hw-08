import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { register } from '../../redux/auth/operations';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Name must be at least 3 characters')
      .max(50, 'Name must be 50 characters or less')
      .required('Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className={css.form} autoComplete="on">
          <label className={css.label}>
            Username
            <Field type="text" name="name" autoComplete="username" />
            <ErrorMessage component="div" name="name" className={css.error} />
          </label>
          <label className={css.label}>
            Email
            <Field type="email" name="email" autoComplete="email" />
            <ErrorMessage component="div" name="email" className={css.error} />
          </label>
          <label className={css.label}>
            Password
            <Field
              type="password"
              name="password"
              autoComplete="new-password"
            />
            <ErrorMessage
              component="div"
              name="password"
              className={css.error}
            />
          </label>
          <button className={css.button} type="submit">
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
};
