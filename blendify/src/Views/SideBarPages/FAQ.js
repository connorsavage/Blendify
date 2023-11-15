// faq.js
import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../Components/Sidebar";
import "./FAQ.css";

const FAQ = ({ onLogout }) => {
  const navigate = useNavigate();

  return (
    <div className="faq-wrapper">
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
      <div className="faq-content">
        <h2>faq Page</h2>
        {/* Add your content for the faq page here */}
        <p>This is the faq page content.</p>
      </div>
    </div>
  );
};

export default FAQ;
