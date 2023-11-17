import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Sidebar from "../../Components/Sidebar";
import "./Devs.css";
import blendifyLogo from "../../logo.png";

const Devs = ({ onLogout }) => {
  const navigate = useNavigate();

  return (
    <div className="devs-wrapper">
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
      <div className="devs-content">
        <h2>Meet the Developers!</h2>
        {/* Add your content for the devs page here */}
        <p>
          Among us
        </p>
      </div>
    </div>
  );
};

export default Devs;
