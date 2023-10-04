import React, { useEffect } from "react"
import "./HomeView.css"
import { useNavigate } from "react-router-dom"
import SearchBar from "./SearchBar" // Make sure the path is correct

export function HomeView({ onLogout, processSignIn }) {
  const navigate = useNavigate()
  const handleSearch = (searchTerm) => {
    console.log("Searching for:", searchTerm)
    // Implement your search logic here
  }

  useEffect(() => {
    processSignIn()
    //new URLSearchParams(window.location.search)
  }, [])

  return (
    <div className="home-view-wrapper">
      <div>
        <h2>Home View!</h2>
        <header>
          <nav>
            <button
              onClick={() => {
                onLogout()
                navigate("/signin")
              }}
            >
              Log Out
            </button>
          </nav>
        </header>
        <SearchBar onSearch={handleSearch} />
      </div>
    </div>
  )
}
