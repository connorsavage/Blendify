import React, { useEffect, useState } from "react"
import "./SearchBar.css"

export default function SearchBar({ search }) {
  const [searchTerm, setSearchTerm] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    search(searchTerm)
    setSearchTerm("")
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  )
}
