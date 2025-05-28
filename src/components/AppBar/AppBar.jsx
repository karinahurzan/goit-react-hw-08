import { useDispatch, useSelector } from 'react-redux';
import Navigate from '../Navigate/Navigate';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { useEffect } from 'react';
import { toggleMenu, closeMenu, setIsMobile } from '../../redux/menuSlice';
import { RxHamburgerMenu } from 'react-icons/rx';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import css from './AppBar.module.css';

export default function AppBar() {
  const dispatch = useDispatch();
  const isLogged = useSelector(selectIsLoggedIn);
  const isMobile = useSelector(state => state.menu.isMobile);
  const isOpen = useSelector(state => state.menu.isOpen);

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    const handleResize = () => {
      const isNowMobile = window.innerWidth < 768;
      dispatch(setIsMobile(isNowMobile));
      if (!isNowMobile) {
        dispatch(closeMenu());
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [dispatch]);

  return (
    <header>
      <div className={css.header}>
        {isMobile && (
          <button onClick={handleToggleMenu} className={css.burgerButton}>
            <RxHamburgerMenu size={30} />
          </button>
        )}

        {!isMobile && <Navigate />}
        {isMobile && isOpen && <BurgerMenu />}

        {isLogged ? <UserMenu /> : <AuthNav />}
      </div>
    </header>
  );
}
