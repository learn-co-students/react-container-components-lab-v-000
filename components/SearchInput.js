const React = require('react');

// Search Form
const SearchInput = ({
  label,
  size,
  handleChange,
  handleSubmit
}) => (
  <form onSubmit={handleSubmit}>
    <label htmlFor='search-input'>{label}</label>
    <input id='search-input' type='text' style={{ width: size }} onChange={handleChange} />
    <button type='submit'>Submit</button>
  </form>
);

// Sets default for search form
SearchInput.defaultProps = {
  label: 'Search:',
  size: 300
};

// Sets prop requirements for search form
// handleChange and handleSubmit must be functions
SearchInput.propTypes = {
  handleChange: React.PropTypes.func,
  handleSubmit: React.PropTypes.func
};

module.exports = SearchInput;
