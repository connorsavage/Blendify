import "./Info.css"

export default function Info({ searchId, musicData }) {
  return !musicData ? (
    <p></p>
  ) : !musicData ? (
    <p>No data for {searchId}</p>
  ) : (
    <div>
      <h2 className="searchTitle">Showing results for: {searchId}</h2>
      {/* <p className="searchAlbumName">{musicData.tracks.items[0].album.name}</p> */}
      <div className="searchAlbumName">
        {musicData.tracks.items.map((item) => (
          <div key={item.id}>
            {console.log(item)}
            {/* <p className="searchAlbumInfo">{item.album.name} by {item.artists.map((artist) => artist.name).join(", ")} </p> */}
            <p className="searchAlbumInfo">
              <span className="album-name">{item.album.name}</span> by{" "}
              <span className="artist-name">{item.artists.map((artist) => artist.name).join(", ")}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
