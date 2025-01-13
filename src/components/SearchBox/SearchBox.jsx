import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from './../redux/filtersSlice';

import css from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const name = useSelector(state => state.filters.name);

  const onSearch = name => dispatch(changeFilter(name));

  return (
    <div className={css.findblock}>
      <p>Find contacts by name</p>
      <input
        type="text"
        className={css.inputblock}
        value={name}
        onChange={e => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
