const HOST = "https://chinook-api.herokuapp.com";

export async function fetchPlaylists() {
  const response = await fetch(`${HOST}/api/playlists`);
  const json = await response.json();
  return json.data;
}
