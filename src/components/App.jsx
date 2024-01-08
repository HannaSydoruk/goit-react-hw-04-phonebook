import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts') || [])
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = data => {
    const hasDuplicates = contacts.some(
      contact => contact.name.toLowerCase() === data.name.toLocaleLowerCase()
    );
    if (hasDuplicates) {
      alert(`${data.name} is already in contacts!`);
      return;
    }
    const contact = {
      id: nanoid(),
      ...data,
    };

    setContacts(prevState => [...prevState, contact]);
  };

  const onChangeFilter = e => {
    setFilter(_ => e.target.value);
  };

  const onDeleteHandler = contactId => {
    setContacts(prevState => [
      ...prevState.filter(contact => contact.id !== contactId),
    ]);
  };

  const filteredContacts = contacts.filter(contact => {
    return contact.name
      .toLowerCase()
      .includes(filter.trim().toLocaleLowerCase());
  });
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandler} />
      <h2>Contacts</h2>
      <Filter onChangeFilter={onChangeFilter} filter={filter} />
      <ContactList
        contacts={filteredContacts}
        onDeleteHandler={onDeleteHandler}
      />
    </div>
  );
};
