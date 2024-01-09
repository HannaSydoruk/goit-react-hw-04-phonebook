import ContactListItem from 'components/ContactListItem/ContactListItem';
import css from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteHandler }) => {
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
};

export default ContactList;
