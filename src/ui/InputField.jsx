import PropTypes from 'prop-types';

const InputField = ({ type, name, placeholder, value, onChange, className = '' }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 ${className}`}
    />
  );
};

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default InputField;
