const React = require('react');

const SearchField = ({
  label,
  size,
  handleChange,
  handleSubmit
}) => (
  <form onSubmit={handleSubmit}>
    <label htmlFor='search-field'>{label}</label>
    <input id='search-field' type="text" style={{width: size}} onChange={handleChange} />
    <button type="submit">Submit</button> 
  </form>
);

SearchField.defaultProps = {
  label: 'Search:',
  size: 400
};
SearchField.propTypes = {
  handleChange: React.PropTypes.func,
  handleSubmit: React.PropTypes.func
};

module.exports = SearchField;