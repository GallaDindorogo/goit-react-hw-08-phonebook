import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { login } from 'redux/auth/auth-operation';
import { isUserLogin } from 'redux/auth/auth-selector';

// import s from './loginPage.module.scss';

import LoginForm from 'components/LoginForm/LoginForm';

const LoginPage = () => {
  const isLogin = useSelector(isUserLogin);
  const dispatch = useDispatch();

  const handleLogin = data => {
    dispatch(login(data));
  };

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }

  return (
    <>
      <h1>LOG IN</h1>
      <LoginForm onSubmit={handleLogin} />
      <div></div>
    </>
  );
};

export default LoginPage;
