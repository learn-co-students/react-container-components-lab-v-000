import React from 'react';

const Input = ({
  handleChange,
  handleSubmit
}) => (

<form onSubmit={handleSubmit}>
  <label htmlFor='search-input'>Search</label>
  <input id='search-input' type="text" onChange={handleChange}/>
  <button type="submit">Submit</button>
</form>
);

Input.propTypes = {
  handleChange: React.PropTypes.func,
  handleSubmit: React.PropTypes.func
}



export default Input;