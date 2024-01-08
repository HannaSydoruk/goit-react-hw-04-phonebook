import { useState } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const formKey = { name: setName, number: setNumber };

  const onChangeHandler = e => {
    const { name, value } = e.currentTarget;
    formKey[name](_ => value);
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    onSubmit({ name, number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={onSubmitHandler} className={css['form-input']}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={onChangeHandler}
        placeholder="Name"
        id={nanoid()}
        required
      />
      <input
        type="tel"
        name="number"
        value={number}
        onChange={onChangeHandler}
        placeholder="Phone"
        id={nanoid()}
        required
      />
      <button type="submit" className={css['form-button']}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
