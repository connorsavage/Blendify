export default function Info({ searchId, musicData }) {
  return !musicData ? (
    <p></p>
  ) : !musicData ? (
    <p>No data for {searchId}</p>
  ) : (
    <div>
      <h2 className="searchTitle"> {searchId}</h2>
      <p className="searchAlbumName">{musicData.tracks.items[0].album.name}</p>
    </div>
  )
}
