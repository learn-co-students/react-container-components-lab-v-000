import React from 'react'

const SearchForm = ({ handleSubmit, handleInputChange }) => (
  <form onSubmit={handleSubmit}>
    <label htmlFor="search-input">Search Movie Reviews</label>
    <input
      id="search-input"
      type="text"
      style={{ width: 300 }}
      onChange={handleInputChange}
    />
    <button type="submit">Submit</button>
  </form>
)

export default SearchForm
