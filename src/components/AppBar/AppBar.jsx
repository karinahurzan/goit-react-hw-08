import { useSelector } from 'react-redux';
import Navigate from '../Navigate/Navigate';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

export default function AppBar() {
  const isLogged = useSelector(selectIsLoggedIn);

  return (
    <header>
      <Navigate />
      {isLogged ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
