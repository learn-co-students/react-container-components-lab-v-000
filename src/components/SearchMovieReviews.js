import React from 'react'

const SearchMovieReviews = (props) => {
  return(
    <div>
      <form onSubmit={props.handleSearch}>
        <input onChange={props.handleQueryChange} type='text' name='searchTerm' value={props.searchTerm}/>
        <button type='submit'>Search</button>
      </form>
    </div>
  )
}

export default SearchMovieReviews
