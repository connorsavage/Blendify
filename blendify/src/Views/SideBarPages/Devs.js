import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Sidebar from "../../Components/Sidebar";
import "./Devs.css";
import blendifyLogo from "../../logo.png";

const Devs = ({ onLogout }) => {
  const navigate = useNavigate();

  const developers = [
    { name: "Mitchell Cootauco", role: "Role", description: "Brief description..." },
    { name: "Sebastian Cruz", role: "Project Manager, Front-End Developer", description: "Big Dogs is my favorite T-shirt brand" },
    { name: "Anna Garren", role: "Role", description: "Brief description..." },
    { name: "Owen Hunger", role: "Role", description: "Brief description..." },
    { name: "Erin Hurlburt", role: "Role", description: "Brief description..." },
    { name: "Connor Savage", role: "Role", description: "Brief description..." },
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
