import React from 'react'

const SearchBar = ({handleTextChange, handleFormSubmit})=>{
  return (
    <form onSubmit={handleFormSubmit}>
      Search: <input type="text" onChange={handleTextChange}/>
    <button type="Submit">Submit</button>
    </form>
  );
}
SearchBar.propTypes = {
  handleTextChange : React.PropTypes.func,
  handleFormSubmit: React.PropTypes.func,
}

export default SearchBar
