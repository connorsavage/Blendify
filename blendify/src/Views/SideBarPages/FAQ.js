import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Sidebar from "../../Components/Sidebar";
import "./FAQ.css";
import blendifyLogo from "../../logo.png";

const FAQ = ({ onLogout }) => {
  const navigate = useNavigate();

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
        {/* Add your content for the faq page here */}
        <p>
          Among us
        </p>
      </div>
    </div>
  );
};

export default FAQ;
