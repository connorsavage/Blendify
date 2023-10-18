export default function Info({ name, data }) {
  return !data ? (
    <p></p>
  ) : !data?.data[0] ? (
    <p>No data for {name}</p>
  ) : (
    <div>
      <h2 className="searchTitle"> {name}</h2>
      <p className="searchAlbumName">{data.tracks.items[0].album.name}</p>
    </div>
  )
}
