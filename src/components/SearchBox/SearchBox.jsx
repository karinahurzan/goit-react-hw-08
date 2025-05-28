import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../redux/filters/selectors';
import { changeFilter } from '../../redux/filters/slice';

const SearchBox = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectFilter);

  const handleChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div>
      <h2>Find contacts</h2>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Search contacts"
      />
    </div>
  );
};

export default SearchBox;
