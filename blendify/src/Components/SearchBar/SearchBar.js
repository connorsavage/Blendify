import React, { useEffect, useState } from "react"
import "./SearchBar.css"
import Info from "../Info"

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [data, setData] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const baseUrl = "https://api.spotify.com/v1"
  //const token = "BQCC1dphvrPli2wJ1wDQV8uOT3Iuf5ExzUoPRt7xIiQzFsrBnZU1_8u6MIKK8_fYcLCzYSmJIyMh3xL3tdcHuE7zxa7cTQ3Z8ewx1smeNBPbM86RkoA"
  // const token = "BQBRDZw3ez4njbowbl-aGObMeQFAIQ5r800YrqRwEbMPS77LCagFIgqy4wHxZwtuuWlpjzjalzdYjnMtQIln0YrdoXDNJuSd_OaOQTYJr7wsupzr-KiFsjqvxWqA7M98ySrP-us5en9Pt2D6uG3F37q75UYBfTbtxY79Gl-11RoJeD1c6xSowrJ6VfCoWs0kUg"

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
      setLoading(false)
      const data = await response.json()
      onSearch(data)
      setData(data.tracks.items[0].album.name)
      console.log("HERE'S SEARCH TERM!!!: " + searchTerm)
      console.log(
        "HERE'S THE MOST RECENT ALBUM NAME!!!: " + data.tracks.items[0].album.name
      )
      setSearchResults(data.tracks.items.name)

      //history.push(`/search/${encodeURIComponent(searchTerm)}&type=track}`);
    } catch (error) {
      console.error("Error during API request: ", error)
      setError(error)
    }
    console.log("bruh")
    setData(null)
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
