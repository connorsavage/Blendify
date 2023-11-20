import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Sidebar from "../../Components/Sidebar";
import "./About.css";
import blendifyLogo from "../../logo.png";

const About = ({ onLogout }) => {
  const navigate = useNavigate();

  const milestones = [
    { title: "Milestone 1", description: "This is where it all began...", backgroundImage: "url-to-background-1.jpg" },
    { title: "Milestone 2", description: "Our first major breakthrough...", backgroundImage: "url-to-background-2.jpg" },
    { title: "Milestone 3", description: "Expanding our horizons...", backgroundImage: "url-to-background-3.jpg" },
  ];

  return (
    <div className="about-wrapper">
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

export default About;
