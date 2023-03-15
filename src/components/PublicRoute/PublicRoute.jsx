import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getAuth } from 'redux/auth/auth-selector';
import Loader from 'schare/Loader/Loader';

const PublicRoute = () => {
  const { isLogin, token } = useSelector(getAuth);

  if (!isLogin && token) {
    return <Loader />;
  }
  if (isLogin) {
    return <Navigate to={'/contacts'} />;
  }
  return <Outlet />;
};

export default PublicRoute;
