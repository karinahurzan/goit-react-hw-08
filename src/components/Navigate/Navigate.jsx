import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import css from './Navigate.module.css';

export default function Navigate() {
  const isLogged = useSelector(selectIsLoggedIn);

  const builtClassName = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <nav>
      <NavLink to="/" className={builtClassName}>
        Home
      </NavLink>
      {isLogged && (
        <NavLink to="/contacts" className={builtClassName}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
