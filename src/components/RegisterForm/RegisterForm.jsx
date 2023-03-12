import useForm from 'schare/Hooks/useForm';

import TextField from 'schare/TextField/TextField.jsx';
import Button from '../../schare/Button/Button';

import initialState from './initialState';
import fields from './fields.js';

import s from './registerForm.module.scss';

const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { name, email, password } = state;
  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <TextField value={name} handleChange={handleChange} {...fields.name} />
      <TextField value={email} handleChange={handleChange} {...fields.email} />
      <TextField
        value={password}
        handleChange={handleChange}
        {...fields.password}
      />
      <Button>Register</Button>
    </form>
  );
};

export default RegisterForm;
