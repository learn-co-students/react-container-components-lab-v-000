import React from 'react'

const SearchBox = ( {handleSubmit, handleChange} ) => {
  return (
    <form onSubmit={handleSubmit}>
    <input type="text" onChange={handleChange} />
    <input type="submit" />
    </form>
  )
}

module.exports = SearchBox