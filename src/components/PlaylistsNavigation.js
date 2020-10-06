import React, { useState, useEffect } from "react";
import { fetchPlaylists } from "./../api";
import { NavLink } from "react-router-dom";

export default function PlaylistsNavigation() {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    fetchPlaylists().then((playlists) => {
      setPlaylists(playlists);
    });
  }, []);

  function hidePlaylist(playlistToHide) {
    const filteredPlaylists = playlists.filter((playlist) => {
      return playlist.id !== playlistToHide.id;
    });

    setPlaylists(filteredPlaylists);
  }

  return (
    <ul className="nav flex-column">
      {playlists.map((playlist) => {
        return (
          <li
            key={playlist.id}
            className="nav-item d-flex justify-content-between"
          >
            <NavLink
              to={`/playlists/${playlist.id}/tracks`}
              className="nav-link"
            >
              {playlist.attributes.name}
            </NavLink>
            <button
              type="button"
              className="btn btn-link"
              onClick={() => {
                hidePlaylist(playlist);
              }}
            >
              <small>(hide)</small>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
