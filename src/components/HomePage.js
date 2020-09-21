import React, { useState, useEffect } from "react";
import TrackList from "../TrackList";
import Loading from "./Loading";
import { fetchTracksByPage } from "../api";

export default function HomePage() {
  const initialPage = 1;
  const [page, setPage] = useState(initialPage);
  const [tracks, setTracks] = useState([]);
  const [totalPages, setTotalPages] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchTracksByPage(initialPage).then((json) => {
      setIsLoading(false);
      setTracks(json.data);
      setTotalPages(json.meta.pages);
    });
  }, []);

  function handlePageInputChange(event) {
    setPage(event.target.value);
  }

  function goToPage() {
    setIsLoading(true);
    fetchTracksByPage(page).then((json) => {
      setIsLoading(false);
      setTracks(json.data);
      setTotalPages(json.meta.pages);
    });
  }

  return (
    <div>
      <h2>My Library</h2>
      <div className="row mb-3">
        <div className="col-8">Total Pages: {totalPages}</div>
        <div className="col-4 text-right">
          <div className="input-group">
            <input
              className="form-control"
              value={page}
              onChange={handlePageInputChange}
            />
            <div className="input-group-prepend">
              <button type="button" onClick={goToPage}>
                Jump to Page
              </button>
            </div>
          </div>
        </div>
      </div>
      {isLoading ? <Loading /> : <TrackList tracks={tracks} />}
    </div>
  );
}
