import { useSelector, useDispatch } from 'react-redux'; // Імпортуємо хуки для роботи з Redux
import { changeFilter } from '../../redux/filtersSlice'; // Імпортуємо екшен для зміни фільтра

import css from './SearchBox.module.css';

// Компонент для пошуку контактів за іменем
const SearchBox = () => {
  const dispatch = useDispatch(); // Хук для доступу до функцій dispatch
  const name = useSelector(state => state.filters.name); // Отримуємо значення фільтра з Redux стану

  // Функція для обробки зміни значення фільтра
  const onSearch = name => dispatch(changeFilter(name));

  return (
    <div className={css.findblock}>
      <p>Find contacts by name</p>
      <input
        type="text"
        className={css.inputblock}
        value={name}
        onChange={e => onSearch(e.target.value)} // Оновлення фільтра при зміні тексту
      />
    </div>
  );
};

export default SearchBox;
