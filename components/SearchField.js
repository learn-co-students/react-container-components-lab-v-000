'use strict'

import React from 'react';

const SearchField = ({
  label,
  size,
  handleChange,
  handleSubmit
}) => (
  <form onSubmit={handleSubmit}>
    <label htmlFor='search-field'>{label}</label>
    <input id='search-field'
          type='text'
          style={{width: size}}
          onChange={handleChange}>
    </input>
    <button type='submit'>Submit</button>
  </form>
)

SearchField.defaultProps = {
  label: 'Search:',
  size: 400
}
SearchField.propTypes = {
  handleChange: React.PropTypes.func,
  handleSubmit: React.PropTypes.func
}

export default SearchField;
