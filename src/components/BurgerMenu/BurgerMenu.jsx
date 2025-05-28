import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { closeMenu } from '../../redux/menuSlice';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import css from './BurgerMenu.module.css';
import { RxCross2 } from 'react-icons/rx';

const BurgerMenu = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector(selectIsLoggedIn);

  const builtClassName = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  const handleClose = () => {
    dispatch(closeMenu());
  };

  return (
    <div className={css.modaloverlay} onClick={handleClose}>
      <div className={css.modal} onClick={e => e.stopPropagation()}>
        <button className={css.closeButton} onClick={handleClose}>
          <RxCross2 size={24} />
        </button>
        <nav className={css.nav}>
          <NavLink to="/" onClick={handleClose} className={builtClassName}>
            Home
          </NavLink>
          {isLogged && (
            <NavLink to="/contacts" onClick={handleClose} className={builtClassName}>
              Contacts
            </NavLink>
          )}
        </nav>
      </div>
    </div>
  );
};

export default BurgerMenu;
