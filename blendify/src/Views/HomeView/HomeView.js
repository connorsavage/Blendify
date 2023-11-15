import React, { useEffect, useState } from "react"
import "./HomeView.css"
import { useNavigate } from "react-router-dom"
import { getMusicInfo } from "../../Api.js"
import Info from "../../Components/Info.js"
import SearchBar from "../../Components/SearchBar/SearchBar"
import Sidebar from "../../Components/Sidebar"
import blendifyLogo from "../../logo.png"

export function HomeView({ onLogout, processSignIn }) {
  const [ showNav, setShowNav ] = useState(false)


  const [searchId, setSearchId] = useState("")
  const [musicData, setMusicData] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const navigate = useNavigate()

  useEffect(() => {
    processSignIn()
    //new URLSearchParams(window.location.search)
    if (!searchId) {
      return
    }
    async function fetchData() {
      try {
        const musicData = await getMusicInfo(searchId)
        setMusicData(musicData)
        setLoading(false)
      } catch (error) {
        setError(error)
      }
    }
    setLoading(true)
    setMusicData(null)
    //resets error message
    setError(null)
    fetchData()
  }, [searchId])

  return (
    <div className="home-view-wrapper">
      <Sidebar/>
      <header>
        <a href="/home" rel="noreferrer" className="blendify-logo">
          <img className="blendifylogo" src={blendifyLogo} alt="Blendify Logo"></img>
        </a>
        <nav>
          <button
            onClick={() => {
              onLogout()
              navigate("/signin")
            }}
              className="logout-button"
          >
            Log Out
          </button>
        </nav>
      </header>
      <div className="home-view">
        <div className="search-text">Find Your Blend</div>
        <SearchBar search={setSearchId} />
        {loading && <img classname="loading-symbol" src="https://i.pinimg.com/originals/49/23/29/492329d446c422b0483677d0318ab4fa.gif" alt="Loading..." />}
        {error ? (
          <span>Sorry there was an error</span>
        ) : (
          <Info id="info1" searchId={searchId} musicData={musicData} />
        )}
      </div>
    </div>
  )
}
