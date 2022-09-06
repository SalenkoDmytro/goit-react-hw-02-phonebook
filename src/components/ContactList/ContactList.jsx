import PropTypes from 'prop-types';
import ContactListItem from 'components/ContactListItem';

function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul>
      {contacts.length > 0 &&
        contacts.map(({ id, name, number }) => {
          return (
            <ContactListItem
              key={id}
              name={name}
              number={number}
              id={id}
              onDeleteContact={onDeleteContact}
            />
          );
        })}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
