import React from 'react';

const ResultsPage = ({ results }) => {
  return (
    <div>
      <h2>Search Results</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Artist(s)</th>
            <th>Album</th>
            <th>Release Date</th>
            <th>Preview</th>
          </tr>
        </thead>
        <tbody>
          {results.map((track) => (
            <tr key={track.id}>
              <td>{track.name}</td>
              <td>{track.artists.map((artist) => artist.name).join(', ')}</td>
              <td>{track.album.name}</td>
              <td>{track.album.release_date}</td>
              <td>
                {track.preview_url && (
                  <audio controls>
                    <source src={track.preview_url} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResultsPage;
