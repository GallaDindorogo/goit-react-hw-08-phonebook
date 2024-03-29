import { useSelector, useDispatch } from 'react-redux';

import { setFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';

import styles from './contactFilter.module.scss';

const ContactFilter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleFilter = ({ target }) => dispatch(setFilter(target.value));

  return (
    <div className={styles.formGroup}>
      <h4>Filtr contact</h4>
      <input
        className={styles.inputStyle}
        name="filter"
        value={filter}
        onChange={handleFilter}
        placeholder="find tel.number"
      />
    </div>
  );
};

export default ContactFilter;
