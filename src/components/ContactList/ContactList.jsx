import ContactListItem from 'components/ContactListItem/ContactListItem';
import { Component } from 'react';
import css from './ContactList.module.css';

class ContactList extends Component {
  render() {
    const { contacts, onDeleteHandler } = this.props;
    return (
      <>
        <ul className={css.contactlist}>
          {contacts.map(contact => {
            return (
              <ContactListItem
                contact={contact}
                key={contact.id}
                onDeleteHandler={onDeleteHandler}
              />
            );
          })}
        </ul>
      </>
    );
  }
}

export default ContactList;
