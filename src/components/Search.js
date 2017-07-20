import React from 'react';

const Search = ({
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

Search.defaultProps = {
  label: 'Search:',
  size: 400
}
Search.propTypes = {
  handleChange: React.PropTypes.func,
  handleSubmit: React.PropTypes.func
}

export default Search;