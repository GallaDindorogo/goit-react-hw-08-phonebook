import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { current } from 'redux/auth/auth-operation';

const AuthLayout = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return <>{children}</>;
};

export default AuthLayout;
