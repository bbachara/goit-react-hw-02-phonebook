import React from 'react';

function Filter({ filter, handleChange }) {
  return (
    <input
      className="search-input"
      type="text"
      name="filter"
      placeholder="Search by name"
      value={filter}
      onChange={handleChange}
    />
  );
}

export default Filter;
