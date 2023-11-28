import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Sidebar from "../../Components/Sidebar";
import "./FAQ.css";
import blendifyLogo from "../../logo.png";

const FAQ = ({ onLogout }) => {
  const navigate = useNavigate();

  const milestones = [
    { title: "Searching a Song", description: `From the Homepage, click on the searchbar on the center of the screen and input your desired song/artist. Afterwards, click "Search" or press enter and a list of songs will appear. From the list, choose the song you wish to find results for!`, backgroundImage: "url-to-background-1.jpg" },
    { title: "Interpretting Results", description: "After choosing your desire song, a list of recommendations will appear based on the BPM of the given song. Clicking one of the songs will play a small snippet of the song! Use the buttons on the right of each song title to be forwarded to the songs on Google, Youtube, and Spotify respectively!", backgroundImage: "url-to-background-2.jpg" },
  ];

  return (
    <div className="faq-wrapper">
      <Sidebar />
      <header>
        <a href="/home" rel="noreferrer" className="blendify-logo">
         <img className="blendifylogo" src={blendifyLogo} alt="Blendify Logo" />
        </a>
        <a href="/home" rel="noreferrer" className="blendify-text">
          Blendify
        </a>
        <nav>
          <button
            onClick={() => {
              // onLogout(); pages missing access token/login info
              navigate("/signin");
            }}
            className="logout-button"
          >
            Log Out
          </button>
        </nav>
      </header>
      <div className="faq-content"> 
            <h2>How to Use Blendify</h2>
      </div>
      <div className="parallax">
        {milestones.map((milestone, index) => (
          <div key={index} className="parallax__group">
            <div className="parallax__layer parallax__layer--back" style={{ backgroundImage: milestone.backgroundImage }}>
              {/* Background for each section */}
            </div>
            <div className="parallax__layer parallax__layer--base">
              <h2>{milestone.title}</h2>
              <p>{milestone.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
