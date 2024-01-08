import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  formSubmitHandler = data => {
    const hasDuplicates = this.state.contacts.some(
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

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contact],
      };
    });
  };

  onChangeFilter = e => {
    const value = e.target.value;
    this.setState({ filter: value });
  };

  onDeleteHandler = contactId => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== contactId),
    });
  };

  render() {
    const filteredContacts = this.state.contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(this.state.filter.trim().toLocaleLowerCase());
    });
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter
          onChangeFilter={this.onChangeFilter}
          filter={this.state.filter}
        />
        <ContactList
          contacts={filteredContacts}
          onDeleteHandler={this.onDeleteHandler}
        />
      </div>
    );
  }
}
