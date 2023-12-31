import logo from "./logo.svg"
//import { useEffect, useState } from "react";
import { useState } from "react"
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import { HomeView } from "./Views/HomeView/HomeView"
import { SignInView } from "./Views/SignInView/SignInView" // Corrected import here.
import "./App.css"
import ResultsPage from "./Views/Results/ResultsPage"
import About from "./Views/SideBarPages/About"
import Devs from "./Views/SideBarPages/Devs"
import FAQ from "./Views/SideBarPages/FAQ"

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [accessToken, setAccessToken] = useState(null)
  //const [setAccessToken] = useState(null)
  const handleLogout = () => {
    setAccessToken(null)
    setIsAuthenticated(false)
  }
  return (
    <Router>
      <div className="App" id="App">
        <Routes>
          <Route
            path="/signin"
            element={
              isAuthenticated ? (
                <Navigate to="/home" />
              ) : (
                <SignInView onSignIn={() => setIsAuthenticated(true)} />
              )
            }
          />
          <Route
            path="/"
            element={
              isAuthenticated ? <Navigate to="/home" /> : <Navigate to="/signin" />
            }
          />
          <Route
            path="/home"
            element={
              <HomeView
                onLogout={handleLogout}
                processSignIn={() => {
                  setIsAuthenticated(true)
                }}
              />
            }
          />
          <Route path="/search/:query" component={ResultsPage} />

          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Devs />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </div>
    </Router>
  )
}
export default App

// Access Token (Bearer):
// BQB2oWW6x_SJrg72mLVImQKWziO4AVaVzinlFTSbICB86Gv9i0Yi8p9joqxVqlC6SFpxhm3fi-iX80sJUoIB-l1UWFWUlaVNbuPhigYx54u--5ygpps

// curl command to generate new acces token:
// curl -X POST "https://accounts.spotify.com/api/token" \
// -H "Content-Type: application/x-www-form-urlencoded" \
// -d "grant_type=client_credentials&client_id=7853b4c9dc604b2ea9b7f1cc305d1e86&client_secret=cad3689f3ed5446596b7105deed6497f"

// client id: 7853b4c9dc604b2ea9b7f1cc305d1e86
// client secret: cad3689f3ed5446596b7105deed6497f
