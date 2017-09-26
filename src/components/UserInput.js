import React from 'react';

const UserInput = ({handleUserInput, handleSearchTermChange}) => {
  return(<form onSubmit={handleUserInput}>
    <input type="text" onChange={handleSearchTermChange} placeholder="Enter Review Name" />
    <button type="submit">Submit</button>
  </form>)
}
export default UserInput;
