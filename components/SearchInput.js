const React = require('react');

const SearchInput = ({
  label,
  size,
  processChange,
  processSubmit
}) => (
  <form key="1" onSubmit={processSubmit}>
    <label htmlFor='search-input'>{label}</label>
    <input id='search-input' type="text" style={{width: size}} onChange={processChange} />
    <button type="submit">Submit</button>
  </form>
);
SearchInput.defaultProps = {
  label: 'Search:',
  size: 300
};
SearchInput.propTypes = {
  processChange: React.PropTypes.func,
  processSubmit: React.PropTypes.func
};

module.exports = SearchInput;
