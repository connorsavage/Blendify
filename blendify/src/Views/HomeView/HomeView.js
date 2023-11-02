import React, { useEffect, useState } from "react"
import "./HomeView.css"
import { useNavigate } from "react-router-dom"
import SearchBar from "../../Components/SearchBar/SearchBar" // Make sure the path is correct
import Navbar from "../../Components/Navbar"
import {GiHamburgerMenu} from 'react-icons/gi'

export function HomeView({ onLogout, processSignIn }) {
  const [ showNav, setShowNav ] = useState(false)


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
      <header>
        <GiHamburgerMenu onClick={() => setShowNav(!showNav)}/>
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
      <Navbar show={showNav} />
      <div className="home-view">
        <div className="search-text">Find Your Blend</div>
        <SearchBar onSearch={handleSearch} />
      </div>
    </div>
  )
}
