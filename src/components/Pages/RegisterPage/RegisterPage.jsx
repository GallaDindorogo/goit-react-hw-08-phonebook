import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { signup } from 'redux/auth/auth-operation';
import { isUserLogin } from 'redux/auth/auth-selector';

import s from './registerPage.module.scss';

import RegisterForm from 'components/RegisterForm/RegisterForm';

const RegisterPage = () => {
  const isLogin = useSelector(isUserLogin);
  const dispatch = useDispatch();

  const handleSignup = data => {
    dispatch(signup(data));
  };

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }

  return (
    <>
      <h1>Register</h1>
      <RegisterForm onSubmit={handleSignup} />
      <div></div>
    </>
  );
};

export default RegisterPage;
