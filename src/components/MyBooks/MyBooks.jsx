import ContactList from './ContactList/ContactList';
import ContactFilter from './ContactFilter/ContactFilter';
import ContactForm from './ContactForm/ContactForm';

import styles from './my-books.module.scss';

const MyBooks = () => {
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.block}>
          <h4 className={styles.titleContacts}>Add new contact</h4>
          <ContactForm />
        </div>
        <div>
          <div className={styles.block}>
            <h4 className={styles.titleContacts}>Contacts List:</h4>
            <div className={styles.form}>
              <ContactFilter />
              <ContactList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyBooks;
