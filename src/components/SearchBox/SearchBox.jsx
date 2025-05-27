import { useDispatch, useSelector } from 'react-redux';
import { setNameFilter } from '../../redux/filtersSlice';
import { selectNameFilter } from '../../redux/filtersSlice';

function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
    <input
      type="text"
      placeholder="Search contacts"
      value={filter}
      onChange={e => dispatch(setNameFilter(e.target.value))}
    />
  );
}

export default SearchBox;
