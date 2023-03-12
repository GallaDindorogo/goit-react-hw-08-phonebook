import { useSelector } from 'react-redux';

import { getUser } from 'redux/auth/auth-selector';

export const NavigationUser = () => {
  const { name } = useSelector(getUser);
  return (
    <div>
      <p>{name}</p>
      <button>Logout</button>
    </div>
  );
};
