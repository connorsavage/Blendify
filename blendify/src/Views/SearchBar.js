import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const baseUrl = "https://api.spotify.com/v1";
  const token = "BQAH0G5tccZR5-hr7nIHWAb_69RzOcfpV10pq_IPQANjShdoiBAKd_NcC9lkMX52Yg3nOyE27aIyqiQS2pw5dWOxr2tJAgq7o4FhCOl9vFVLSFC4nxM";

  // search - q and type required
    // q filters: artist, track, year, upc, tag:hipster, tag:new, isrc, genre
      // tag:new - albums released in past two weeks
      // tag:hipster - albums with lowest 10% popularity
    // type filters: album, artist, playlist, track, show, episode, audiobook

  const handleChange = (event) => {
    setSearchTerm(event.target.value);    
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`${baseUrl}/search?q=${searchTerm}&type=track,album,artist,playlist`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error('Could not retrieve data');
      }

      const data = await response.json();
      // onSearch(data);
      setSearchResults(data.tracks.items.name)

    } catch (error) {
      console.error('Error during API request: ', error);
    }
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   onSearch(searchTerm);
  // };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Search..." 
        value={searchTerm} 
        onChange={handleChange}
      />
      <button type="submit">Search</button>

      {searchResults.length > 0 && (
        <div className="dropdown">
          <ul>
            {searchResults.map((track) => (
              <li key={track.id}>{track.name}</li>
            ))}
          </ul>
        </div>
      )}
    </form>
  );
};

export default SearchBar;