import PropTypes from 'prop-types';
import s from './ContactListItem.module.css';

function ContactListItem({ name, number, id, onDeleteContact }) {
  return (
    <li className={s.item}>
      {name}: {number}
      <button
        className={s.button}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;
