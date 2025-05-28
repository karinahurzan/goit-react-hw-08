import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../redux/filters/selectors';
import { changeFilter } from '../../redux/filters/slice';
import css from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectFilter);

  const handleChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <section className={css.sectionSearchBox}>
      <div className="container">
        <h2>Find contacts</h2>
        <input
          className={css.inputName}
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Search contacts"
        />
      </div>
    </section>
  );
};

export default SearchBox;
