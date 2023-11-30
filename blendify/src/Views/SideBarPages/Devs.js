import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Sidebar from "../../Components/Sidebar";
import "./Devs.css";
import blendifyLogo from "../../logo.png";

const Devs = ({ onLogout }) => {
  const navigate = useNavigate();

  const developers = [
    { Name: "Mitchell Cootauco", Role: "Role", Fact: "Brief description..." },
    { Name: "Sebastian Cruz", Role: "Project Manager, Front-End Developer", Fact: "Big Dogs is my favorite T-shirt brand" },
    { Name: "Anna Garren", Role: "Role", Fact: "Brief description..." },
    { Name: "Owen Hunger", Role: "Role", Fact: "Brief description..." },
    { Name: "Erin Hurlburt", Role: "Role", Fact: "Brief description..." },
    { Name: "Connor Savage", Role: "Front-End Developer", Fact: "i love code" },
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
              <h3>{dev.Name}</h3>
              <p><strong>Role:</strong> {dev.Role}</p>
              <p>{dev.Fact}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Devs;
