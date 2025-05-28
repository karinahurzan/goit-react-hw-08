import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import {Button} from '@mui/material';
import { logout } from '../../redux/auth/operations';

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div>
      <p>Welcome, {user.name}</p>
      <Button
        variant="outlined"
        color="secondary"
        sx={{ padding: '0 8px' }}
        type="button"
        onClick={() => dispatch(logout())}
      >
        LogOut
      </Button>
    </div>
  );
}
