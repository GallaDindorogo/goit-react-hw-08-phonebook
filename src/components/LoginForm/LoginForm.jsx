import useForm from 'schare/Hooks/useForm';

import TextField from 'schare/TextField/TextField.jsx';
import Button from '../../schare/Button/Button';

import initialState from './initialState';
import fields from './fields';

import s from './loginForm.module.scss';

const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { email, password } = state;
  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <TextField value={email} handleChange={handleChange} {...fields.email} />
      <TextField
        value={password}
        handleChange={handleChange}
        {...fields.password}
      />
      <Button>LOG IN</Button>
    </form>
  );
};

export default LoginForm;
