import { useSelector, useDispatch } from 'react-redux';

import { getUser } from 'redux/auth/auth-selector';
import { logout } from 'redux/auth/auth-operation';
import s from './navigationUser.module.scss';

export const NavigationUser = () => {
  const { name } = useSelector(getUser);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };
  return (
    <div className={s.navigation}>
      <p className={s.nameUser}>{name}</p>
      <button className={s.Button} onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};
