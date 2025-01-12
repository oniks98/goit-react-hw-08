import css from './SearchBox.module.css';

function SearchBox({ value, onSearch }) {
  return (
    <div className={css.findblock}>
      <p>Find contacts by name</p>
      <input
        type="text"
        className={css.inputblock}
        value={value}
        onChange={e => onSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBox;
