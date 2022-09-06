import PropTypes from 'prop-types';
import s from './Filter.module.css';

function Filter({ onChange }) {
  return (
    <label>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        name="filter"
        onChange={onChange}
      />
    </label>
  );
}

Filter.propTypes = { onChange: PropTypes.func.isRequired };

export default Filter;
