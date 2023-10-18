import React, { useEffect, useState } from "react"
import "./SearchBar.css"
import Info from "../Info"

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("")

  const baseUrl = "https://api.spotify.com/v1"

  // search - q and type required
  // q filters: artist, track, year, upc, tag:hipster, tag:new, isrc, genre
  // tag:new - albums released in past two weeks
  // tag:hipster - albums with lowest 10% popularity
  // type filters: album, artist, playlist, track, show, episode, audiobook

  const clientId = "7853b4c9dc604b2ea9b7f1cc305d1e86"
  const clientSecret = "cad3689f3ed5446596b7105deed6497f"

  const _getToken = async () => {
    const result = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
      },
      body: "grant_type=client_credentials",
    })
    const data = await result.json()
    console.log("NEW TOKEN THAT WORKS!!!: " + data.access_token)
    return data.access_token
  }

  const handleSubmit = async (event) => {
    const token = await _getToken()

    event.preventDefault()
    try {
      const response = await fetch(`${baseUrl}/search?q=${searchTerm}&type=track`, {
        // ,album,artist,playlist
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (!response.ok) {
        throw new Error("Could not retrieve data")
      }
      const data = await response.json()
      onSearch(data)
      console.log("HERE'S SEARCH TERM!!!: " + searchTerm)
      console.log(
        "HERE'S THE MOST RECENT ALBUM NAME!!!: " + data.tracks.items[0].album.name
      )

      //history.push(`/search/${encodeURIComponent(searchTerm)}&type=track}`);
    } catch (error) {
      console.error("Error during API request: ", error)
    }
  }

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
        onChange={(e) => setSearchTerm(e.target.value)}
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
  )
}

export default SearchBar
