import React from 'react'

const Search = (props) => (
    <form onSubmit={props.handleSubmit}>
        <input onChange={props.handleChange} value={props.value}></input>
        <button type="submit">Search</button>
    </form>
)

export default Search