import React, { useEffect } from "react"
import "./HomeView.css"
import { useNavigate } from "react-router-dom"
import SearchBar from "../../Components/SearchBar/SearchBar" // Make sure the path is correct

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
      <div className="home-view">
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
        <div className="search-text">Find Your Blend</div>
        <SearchBar onSearch={handleSearch} />
      </div>
    </div>
  )
}
