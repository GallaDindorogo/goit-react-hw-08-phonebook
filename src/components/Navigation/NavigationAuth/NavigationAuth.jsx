import { NavLink } from 'react-router-dom';
import s from '../../Navigation/navigation.module.scss';

export const NavigationAuth = () => {
  return (
    <div className={s.navigationList}>
      <NavLink className={s.navigationItem} to="/register">
        Sign Up
      </NavLink>
      <NavLink className={s.navigationItem} to="/login">
        Log in
      </NavLink>
    </div>
  );
};
