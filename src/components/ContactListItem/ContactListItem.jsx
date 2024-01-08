import { Component } from 'react';
import css from './ContactListItem.module.css';
class ContactListItem extends Component {
  render() {
    const contact = this.props.contact;
    const onDeleteHandler = this.props.onDeleteHandler;
    return (
      <li className={css['contact-list']}>
        <span className={css.name}>{contact.name}</span>
        <span className={css.phone}>
          {contact.number}
          <button
            className={css['delete-btn']}
            onClick={() => onDeleteHandler(contact.id)}
          >
            Delete
          </button>
        </span>
      </li>
    );
  }
}

export default ContactListItem;
