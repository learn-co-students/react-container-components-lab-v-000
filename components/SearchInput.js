import React from 'react';

const SearchInput = ({
  label,
  size,
  handleChange,
  handleSubmit
}) => (
  <form onSubmit={handleSubmit}>
    <label htmlFor='search-input'>{label}</label>
    <input id='search-input' type='text' size={{width: size}} onChange={handleChange} />
    <button type='submit'>Submit</button>
  </form>
);

SearchInput.defaultProps = {
  lable: 'Search:',
  size: 300
};

SearchInput.propTypes = {
  handleChange: React.PropTypes.func,
  handleSubmit: React.PropTypes.func
};

module.exports = 'SearchInput';
