import React, { useEffect, useState } from "react"
import "./HomeView.css"
import { useNavigate } from "react-router-dom"
import { getMusicInfo } from "../../Api.js"
import Info from "../../Components/Info.js"
import SearchBar from "../../Components/SearchBar/SearchBar"

export function HomeView({ onLogout, processSignIn }) {
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
        <SearchBar search={setSearchId} />
        {loading && <p>loading...</p>}
        {error ? (
          <span>Sorry there was an error</span>
        ) : (
          <Info searchId={searchId} musicData={musicData} />
        )}
      </div>
    </div>
  )
}
