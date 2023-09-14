import logo from './logo.svg';
import { useEffect, useState } from "react"
import { HomeView } from './Views/HomeView';
import './App.css';

function App() {
  return (
    <div className="App" id="App">
      <header>
        Welcome to Blendify
      </header>
      <HomeView />
    </div>
  );
}

export default App;
