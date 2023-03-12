// import PropTypes from 'prop-types';
import styles from './button.module.scss';

const Btn = ({ children, type = 'submit' }) => {
  return (
    <div className={styles.ButtonContainer}>
      <button type={type} className={styles.Button}>
        {children}
      </button>
    </div>
  );
};

export default Btn;

// Btn.propTypes = {
//   onClick: PropTypes.func.isRequired,
//   type: PropTypes.oneOf(['button', 'submit', 'reset']).isRequired,
// };
