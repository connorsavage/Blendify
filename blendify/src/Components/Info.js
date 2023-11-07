import React, { useState, useEffect } from "react";
import "./Info.css";

export default function Info({ searchId, musicData }) {
  const [selectedSong, setSelectedSong] = useState(null);

  const handleSongClick = (song) => {
    setSelectedSong(song);
  };

  const goBack = () => {
    setSelectedSong(null);
  };

  useEffect(() => {
    console.log("selectedSong", selectedSong); // Add this line for debugging
  }, [selectedSong]);

  return (
    <div>
      {!selectedSong ? (
        !musicData ? (
          <p>No data for {searchId}</p>
        ) : (
          <div>
            <h2 className="searchTitle">Showing Results For: {searchId}</h2>
            <div className="searchSongName">
              {musicData.tracks.items.map((item) => (
                <div key={item.id}>
                  <button className="searchSongInfo" onClick={() => handleSongClick(item)}>
                    <span className="song-name">{item.name}</span> by{" "}
                    <span className="artist-name">{item.artists.map((artist) => artist.name).join(", ")}</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )
      ) : (
        <div>
          <button onClick={goBack}>Back</button>
          <h2 className="titletext">ADD NEW LIST HERE YUH</h2>
          <p>
            <span className="song-name">{selectedSong.name}</span> by{" "}
            <span className="artist-name">{selectedSong.artists.map((artist) => artist.name).join(", ")}</span>
            {/* THIS SECTION DOES NOT WORK. SEPERATE API STUFF */}
            {musicData.tempo !== undefined ? (
              <span>
                {" "}
                - BPM: <span className="bpm">{selectedSong.tempo}</span>
              </span>
            ) : (
              <span> - BPM not available</span>
            )}
          </p>
          {/* Add more details about the song here */}
        </div>
      )}
    </div>
  );
}