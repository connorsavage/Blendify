import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Sidebar from "../../Components/Sidebar";
import "./Devs.css";
import blendifyLogo from "../../logo.png";

const Devs = ({ onLogout }) => {
  const navigate = useNavigate();

  const developers = [
    { name: "Developer 1", role: "Role", description: "Brief description..." },
    { name: "Developer 2", role: "Role", description: "Brief description..." },
    { name: "Developer 3", role: "Role", description: "Brief description..." },
    { name: "Developer 4", role: "Role", description: "Brief description..." },
    { name: "Developer 5", role: "Role", description: "Brief description..." },
    { name: "Developer 6", role: "Role", description: "Brief description..." },
  ];

  return (
    <div className="dev-wrapper">
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
      <div className="dev-content">
        <h2>Meet Our Team</h2>
        <div className="developer-profiles">
          {developers.map((dev, index) => (
            <div key={index} className="developer-profile">
              <h3>{dev.name}</h3>
              <p><strong>Role:</strong> {dev.role}</p>
              <p>{dev.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Devs;
