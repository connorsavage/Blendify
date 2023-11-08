const getMusicInfo = async (idOrName) => {
  const searchId = encodeURIComponent(idOrName.toLowerCase())
  const baseUrl = "https://api.spotify.com/v1"
  const clientId = "7853b4c9dc604b2ea9b7f1cc305d1e86"
  const clientSecret = "cad3689f3ed5446596b7105deed6497f"

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
  const response = await fetch(`${baseUrl}/search?q=${searchId}&type=track`, {
    // ,album,artist,playlist
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  if (!response.ok) {
    throw new Error("Could not retrieve data")
  }
  const json = await response.json()
  console.log("JSON: " + json.stringify)

  const tracks = json.tracks?.items || [];

  // Fetch BPM for each track and add it to the response
  const tracksWithBpm = await Promise.all(
    tracks.map(async (track) => {
      const audioFeaturesResponse = await fetch(`${baseUrl}/audio-analysis/${track.id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!audioFeaturesResponse.ok) {
        throw new Error("Could not retrieve audio features");
      }
      const audioFeaturesJson = await audioFeaturesResponse.json();
      return {
        ...track,
        bpm: audioFeaturesJson.track.tempo,
      };
    })
  );


  return tracksWithBpm
}
export { getMusicInfo }
