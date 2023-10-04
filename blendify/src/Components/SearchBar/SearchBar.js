import React, { useState } from 'react';
import { createBrowserHistory } from 'history';

import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const history = createBrowserHistory();

  const baseUrl = "https://api.spotify.com/v1";
  //const token = "BQCC1dphvrPli2wJ1wDQV8uOT3Iuf5ExzUoPRt7xIiQzFsrBnZU1_8u6MIKK8_fYcLCzYSmJIyMh3xL3tdcHuE7zxa7cTQ3Z8ewx1smeNBPbM86RkoA";
  const token = "BQBRDZw3ez4njbowbl-aGObMeQFAIQ5r800YrqRwEbMPS77LCagFIgqy4wHxZwtuuWlpjzjalzdYjnMtQIln0YrdoXDNJuSd_OaOQTYJr7wsupzr-KiFsjqvxWqA7M98ySrP-us5en9Pt2D6uG3F37q75UYBfTbtxY79Gl-11RoJeD1c6xSowrJ6VfCoWs0kUg";

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
      const response = await fetch(`${baseUrl}/search?q=${searchTerm}&type=track`, { // ,album,artist,playlist
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

      history.push(`/search/${encodeURIComponent(searchTerm)}&type=track}`);

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

      {/* {searchResults.length > 0 && (
        <div className="dropdown">
          <ul>
            {searchResults.map((track) => (
              <li key={track.id}>{track.name}</li>
            ))}
          </ul>
        </div>
      )} */}
    </form>
  );
};

export default SearchBar;