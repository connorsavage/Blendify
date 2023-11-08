import React, { useState, useEffect } from "react";
import "./Info.css";

export default function Info({ searchId, musicData }) {
  const [selectedSong, setSelectedSong] = useState(null);
  const [songRecs, setSongRecs] = useState(null);
  const baseUrl = "https://api.spotify.com/v1"
  const clientId = "7853b4c9dc604b2ea9b7f1cc305d1e86"
  const clientSecret = "cad3689f3ed5446596b7105deed6497f"

  const handleSongClick = async (song) => {
    setSelectedSong(song);
    console.log("song", song);
    if (song.bpm) {
      const bpm = song.bpm;
      try {
        const recs = await getSongsByBpm(song.id, song.bpm);
        setSongRecs(recs);
      } catch (error) {
        console.error("Error fetching song recommendations:", error);
      }
    }
  };

  const goBack = () => {
    setSelectedSong(null);
    setSongRecs(null);
  };

  useEffect(() => {
    console.log("selectedSong", selectedSong); // Add this line for debugging
  }, [selectedSong]);

  const getSongsByBpm = async (id, bpm) => {
    const _getToken = async () => {
      const result = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
        },
        body: "grant_type=client_credentials",
      })
      const data = await result.json()
      console.log("NEW TOKEN THAT WORKS!!!: " + data.access_token)
      return data.access_token
    }
    const token = await _getToken()
    
    const genres = "club%2Cdance%2Cedm%2Ctechno%2Chouse"

    const songRecs = await fetch(`${baseUrl}/recommendations?/seed_genres=${genres}&seed_tracks=${id}&target_tempo=${bpm}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!songRecs.ok) {
      throw new Error("Could not retrieve data");
    }
    const songRecsJson = await songRecs.json();
    return songRecsJson
  }
  
  
  return (
    <div>
      {!selectedSong ? (
        !musicData ? (
          <p>No data for {searchId}</p>
        ) : (
          <div>
            <h2 className="searchTitle">Showing Results For: {searchId}</h2>
            <div className="searchSongName">
              {musicData.map((item) => (
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
          <p>
            <span className="song-name">{selectedSong.name}</span> by{" "}
            <span className="artist-name">{selectedSong.artists.map((artist) => artist.name).join(", ")}</span>
          </p>  
          {console.log("song recs", songRecs)}
          {songRecs && (
            <div>
              <h3>Song Recommendations</h3>
              <ul>
                {songRecs.tracks.map((rec) => (
                  <li key={rec.id}>{rec.name}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}