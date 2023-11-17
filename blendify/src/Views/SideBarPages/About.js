import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Sidebar from "../../Components/Sidebar";
import "./About.css";
import blendifyLogo from "../../logo.png";

const About = ({ onLogout }) => {
  const navigate = useNavigate();

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
      <div className="about-content">
        <h2>What is Blendify?</h2>
        {/* Add your content for the About page here */}
        <p>
            Blendify is a web application for DJs of any level that aims to simplify the time-consuming
process of searching for songs to mix by automatically recommending songs that match an
inputted song based on its BPM. Our application also allows for users to
get song recommendations based on their own music library.
<br />
<br />
Currently, DJs both professional and amateurs often spend a significant amount of time and
effort manually searching for songs that are a good match in terms of BPM (beats per minute)
when they are looking to create a seamless mix of songs. This process is
often done through trial and error, and involves the use of multiple software and platforms,
making it cumbersome and time-consuming.
<br />
<br />
Blendify aims to simplify and expedite this process by automatically recom-
mending songs that are a good match in terms of BPM and key, based on an inputted current
song or artist. The app will use data from the user’s own music library as
well as suggest new songs, making the process of song selection quicker, easier, and more
efficient for DJs of all levels.
<br />
<br />
Blendify caters towards amateur, intermediate, and professional DJs as they can expedite their music search mid-set, or prior to the set. Blendify is also for regular
music listeners looking to expand their library based on specific criteria.
        </p>
      </div>
    </div>
  );
};

export default About;
