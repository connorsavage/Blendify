import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Search..." 
        value={searchTerm} 
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;