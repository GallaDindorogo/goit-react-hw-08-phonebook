import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import styles from './contactForm.module.scss';

import { fetchAllContacts, fetchAddContact } from 'redux/contactsOperations';
import Btn from 'schare/Button/Button';

const ContactForm = () => {
  let inputValues = {
    name: '',
    number: '',
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const handleChange = e => {
    const objectKey = e.target.name;
    inputValues[objectKey] = e.target.value;
    console.log(objectKey);
    return;
  };

  const handleAddContact = data => {
    const name = data.name;
    const number = data.number;
    const action = fetchAddContact({ name, number });
    dispatch(action);
  };

  const clearForm = e => {
    e.target.elements.name.value = '';
    e.target.elements.number.value = '';
  };

  return (
    <form
      className={styles.form}
      onSubmit={e => {
        e.preventDefault();
        handleAddContact(inputValues);
        clearForm(e);
      }}
    >
      <div className={styles.formGroup}>
        <label>Name</label>
        <input
          className={styles.inputName}
          name="name"
          onChange={handleChange}
          placeholder="Enter name"
          type="text"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          size="50"
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label>Number</label>
        <input
          className={styles.inputNumber}
          name="number"
          onChange={handleChange}
          placeholder="Enter tel.number"
          type="tel"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          size="50"
          required
        />
      </div>
      <Btn className={styles.contactFormButton} type="submit">
        Add contact
      </Btn>
    </form>
  );
};

export default ContactForm;
