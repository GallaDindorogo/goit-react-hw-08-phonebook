import { useDispatch } from 'react-redux';

import { signup } from 'redux/auth/auth-operation';

import s from './registerPage.module.scss';

import RegisterForm from 'components/RegisterForm/RegisterForm';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleSignup = data => {
    dispatch(signup(data));
  };

  return (
    <div className={s.registerPageBody}>
      <RegisterForm onSubmit={handleSignup} />
      <div className={s.registerPageImg}></div>
    </div>
  );
};

export default RegisterPage;
