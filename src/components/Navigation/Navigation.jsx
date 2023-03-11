import { NavLink } from 'react-router-dom';
import { NavigationAuth } from './NavigationAuth/NavigationAuth';
import { NavigationUser } from './NavigationUser/NavigationUser';

import s from './navigation.module.scss';

export const Navigation = () => {
  return (
    <nav className={s.navigation}>
      <ul className={s.navigationList}>
        <NavLink className={s.navigationItem} to="/">
          Home
        </NavLink>
        <NavLink className={s.navigationItem} to="/contacts">
          Contacts
        </NavLink>
      </ul>
      <ul>
        <NavigationAuth />
        <NavigationUser />
      </ul>
    </nav>
  );
};
