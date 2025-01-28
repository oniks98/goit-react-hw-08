import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { logIn } from '../../redux/auth/operations';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values))
      .unwrap()
      .then(() => {
        console.log('Login success');
      })
      .catch(() => {
        console.log('Login error');
      });
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
            Email
            <Field type="email" name="email" autoComplete="email" />
            <ErrorMessage component="div" name="email" className={css.error} />
          </label>
          <label className={css.label}>
            Password
            <Field
              type="password"
              name="password"
              autoComplete="current-password"
            />
            <ErrorMessage
              component="div"
              name="password"
              className={css.error}
            />
          </label>
          <button className={css.button} type="submit">
            Log In
          </button>
        </Form>
      )}
    </Formik>
  );
};
