import React from 'react';

const InputSearch = ({ handleChange, handleSubmit }) => {
  return (<form onSubmit={handleSubmit}>
    <label>Search Movie Reviews</label>
    <input type="text" onChange={handleChange} />
    <button type="submit">Submit</button>
  </form>
  );
};

export default InputSearch;
