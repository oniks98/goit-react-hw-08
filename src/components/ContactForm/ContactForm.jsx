import { useDispatch } from 'react-redux'; // Хук для відправлення екшенів у Redux
import { addContact } from '../../redux/contactsSlice'; // Імпортуємо екшен для додавання контакту
import { Formik, Form, Field, ErrorMessage } from 'formik'; // Бібліотека для керування формами
import { useId } from 'react'; // Хук для генерації унікальних ID
import * as Yup from 'yup'; // Бібліотека для валідації форм
import { nanoid } from 'nanoid/non-secure'; // Генератор унікальних ідентифікаторів
import css from './ContactForm.module.css';

// Схема валідації для форми
const ContactFormSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Too Short!') // Мінімальна довжина 3 символи
    .max(50, 'Too Long!') // Максимальна довжина 50 символів
    .required('Required'), // Поле є обов’язковим
  phone: Yup.string()
    .matches(
      /^\d{3}-\d{2}-\d{2}$/, // Шаблон для номера телефону у форматі XXX-XX-XX
      'Phone number must be in the format XXX-XX-XX'
    )
    .required('Required'), // Поле є обов’язковим
});

// Початкові значення для форми
const initialValues = {
  username: '',
  phone: '',
};

// Компонент ContactForm для додавання контакту
const ContactForm = () => {
  const dispatch = useDispatch(); // Отримуємо dispatch для відправлення екшенів

  const nameFieldId = useId(); // Генеруємо унікальний ID для поля імені
  const phoneFieldId = useId(); // Генеруємо унікальний ID для поля телефону

  const handleSumbit = (values, actions) => {
    dispatch(
      addContact({
        id: nanoid(), // Генеруємо унікальний ID для нового контакту
        name: values.username, // Зберігаємо ім'я
        number: values.phone, // Зберігаємо номер телефону
      })
    );

    actions.resetForm(); // Очищаємо форму після відправлення
  };

  return (
    <Formik
      initialValues={initialValues} // Встановлюємо початкові значення форми
      onSubmit={handleSumbit} // Викликаємо функцію при відправленні форми
      validationSchema={ContactFormSchema} // Додаємо схему валідації
    >
      <Form className={css.form}>
        {' '}
        {/* Форма для додавання контакту */}
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
            className={css.spanMessage} // Відображаємо повідомлення про помилки
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
            className={css.spanMessage} // Відображаємо повідомлення про помилки
          />
        </div>
        <button className={css.btn} type="submit">
          Add contact {/* Кнопка для додавання контакту */}
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
