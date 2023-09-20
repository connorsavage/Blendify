import logo from './logo.svg';
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { HomeView } from './Views/HomeView';
import { SignInView } from './Views/SignInView'; // Corrected import here.
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div className="App" id="App">
        <header>
          Welcome to Blendify
        </header>
        
        <Routes>
          <Route path="/signin" element={isAuthenticated ? <Navigate to="/" /> : <SignInView onSignIn={() => setIsAuthenticated(true)} />} />
          <Route path="/" element={isAuthenticated ? <HomeView /> : <Navigate to="/signin" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
