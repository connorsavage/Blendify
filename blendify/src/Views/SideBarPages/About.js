// About.js
import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../Components/Sidebar";
import "./About.css";

const About = ({ onLogout }) => {
  const navigate = useNavigate();

  return (
    <div className="about-wrapper">
      <Sidebar />
      <header>
        <nav>
          <button
            onClick={() => {
              onLogout();
              navigate("/signin");
            }}
            className="logout-button"
          >
            Log Out
          </button>
        </nav>
      </header>
      <div className="about-content">
        <h2>About Page</h2>
        {/* Add your content for the About page here */}
        <p>This is the About page content.</p>
      </div>
    </div>
  );
};

export default About;
