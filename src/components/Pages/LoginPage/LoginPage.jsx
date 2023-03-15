import { useDispatch } from 'react-redux';

import { login } from 'redux/auth/auth-operation';

import s from './loginPage.module.scss';

import LoginForm from 'components/LoginForm/LoginForm';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLogin = data => {
    dispatch(login(data));
  };

  return (
    <div className={s.loginPageBody}>
      <LoginForm onSubmit={handleLogin} />
      <div className={s.loginPageImg}></div>
    </div>
  );
};

export default LoginPage;
