const HOST = "https://chinook-api.herokuapp.com";

export async function fetchPlaylists() {
  const response = await fetch(`${HOST}/api/playlists`);
  const json = await response.json();
  return json.data;
}

export async function fetchTracksByPage(page) {
  const response = await fetch(`${HOST}/api/tracks?page=${page}`);
  return response.json();
}

export async function fetchPlaylist(id) {
  const response = await fetch(`${HOST}/api/playlists/${id}`);

  if (response.status >= 400) {
    return Promise.reject(`Playlist ${id} not found`);
  }

  return response.json();
}
