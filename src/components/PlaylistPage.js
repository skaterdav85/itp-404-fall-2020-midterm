import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TrackList from "../TrackList";
import Loading from "./Loading";
import { fetchPlaylist } from "../api";

export default function PlaylistPage() {
  const [playlistName, setPlaylistName] = useState();
  const [tracks, setTracks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const params = useParams();

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    fetchPlaylist(params.id).then(
      (json) => {
        setPlaylistName(json.data.attributes.name);
        setTracks(json.included || []);
        setIsLoading(false);
      },
      (error) => {
        setIsError(true);
      }
    );
  }, [params.id]);

  if (isError) {
    return (
      <div className="alert alert-secondary" role="alert">
        Playlist not found.
      </div>
    );
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <h2>{playlistName}</h2>
      <TrackList tracks={tracks} />
    </>
  );
}
