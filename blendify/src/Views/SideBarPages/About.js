import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Sidebar from "../../Components/Sidebar";
import "./About.css";
import blendifyLogo from "../../logo.png";

const About = ({ onLogout }) => {
  const navigate = useNavigate();

  const milestones = [
    { title: "What is Blendify?", description: `Blendify is a web application for DJs of any level that aims to simplify the time-consuming process of searching for 
    songs to mix by automatically recommending songs that match an inputted song based on its BPM (beats per minute). Currently, DJs both professional and amateurs often spend a significant amount of time and effort manually searching for songs 
    that are a good match in terms of BPM when they are looking to create a seamless mix of songs. This process is often done through trial and 
    error, and involves the use of multiple software and platforms, making it cumbersome and time-consuming. Blendify aims to simplify and expedite this process by 
    automatically recommending songs that are a good match in terms of BPM, based on an inputted current song or artist. The app will use data from the user’s 
    own music library as well as suggest new songs, making the process of song selection quicker, easier, and more efficient for DJs of all levels. Blendify caters 
    towards amateur, intermediate, and professional DJs as they can expedite their music search mid-set, or prior to the set. Blendify is also for regularmusic 
    listeners looking to expand their library based on specific criteria.`, backgroundImage: "url-to-background-1.jpg" },
    { 
      title: "Development Timeline - September",
      description: [
        " Sept 18: Obtained Spotify API access token; instructions added; login access created; PR pending",
        " Sept 19: Sign-in page created; app view order organized; dynamic background styled",
        " Sept 20: Initiated website design in Figma; flow chart and tab layout started",
    ] , backgroundImage: "url-to-background-2.jpg" },
    { 
      title: "October",
      description: [
        " Oct 2: Logo design; search bar page transition fixed",
        " Oct 3: Navigation to home page fixed; search bar populates with Spotify API results",
        " Oct 16: Spotify API data displayed on front end",
        " Oct 23: API search results fully displayed and styled",
        " Oct 29: Search results converted into navigational buttons",
    ] , backgroundImage: "url-to-background-3.jpg" },
    { 
      title: "November",
      description: [
        " Nov 1: Homepage sidebar with CSS created",
        " Nov 7: HTTP request for song recommendations based on selected song implemented",
        " Nov 14: Homepage sidebar redesigned; logo integrated; CSS tweaks",
        " Nov 28: Logo turned into home button; sidebar CSS and JS formatted; menu styling updated",
    ] , backgroundImage: "url-to-background-4.jpg" },
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
              {Array.isArray(milestone.description) ? (
          <ul>
            {milestone.description.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        ) : (
              <p>{milestone.description}</p>
        )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
