// Devs.js
import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../Components/Sidebar";
import "./Devs.css";

const Devs = ({ onLogout }) => {
  const navigate = useNavigate();

  return (
    <div className="devs-wrapper">
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
      <div className="devs-content">
        <h2>Devs Page</h2>
        {/* Add your content for the Devs page here */}
        <p>This is the Devs page content.</p>
      </div>
    </div>
  );
};

export default Devs;
