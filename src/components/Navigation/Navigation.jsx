import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { NavigationAuth } from './NavigationAuth/NavigationAuth';
import { NavigationUser } from './NavigationUser/NavigationUser';
import { isUserLogin } from '../../redux/auth/auth-selector';

import s from './navigation.module.scss';

export const Navigation = () => {
  const isLogin = useSelector(isUserLogin);
  console.log('Navig', isLogin);

  return (
    <nav className={s.navigation}>
      <p className={s.navigationList}>
        <NavLink className={s.navigationItem} to="/">
          Home
        </NavLink>
        <NavLink className={s.navigationItem} to="/contacts">
          Contacts
        </NavLink>
      </p>
      <ul>
        {!isLogin && <NavigationAuth />}
        {isLogin && <NavigationUser />}
      </ul>
    </nav>
  );
};
