import { useMemo } from 'react';
import { nanoid } from 'nanoid';

import s from './textField.module.scss';

const TextField = ({ label, handleChange, ...props }) => {
  const id = useMemo(() => nanoid(), []);

  return (
    <div className={s.wrapper}>
      <label htmlFor={id} className={s.label}>
        {label}
      </label>
      <input className={s.field} id={id} onChange={handleChange} {...props} />
    </div>
  );
};

export default TextField;
