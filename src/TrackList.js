import React from "react";

function millisecondsToMinutes(milliseconds) {
  const minutes = Math.floor(milliseconds / 1000 / 60);
  const seconds = Math.floor((milliseconds / 1000) % 60);
  return `${minutes} minutes and ${seconds} seconds`;
}

export default function TrackList({ tracks }) {
  return tracks.length ? (
    <table className="table table-dark">
      <thead>
        <tr>
          <th>Name</th>
          <th>Minutes</th>
        </tr>
      </thead>
      <tbody>
        {tracks.map((track) => {
          const duration = millisecondsToMinutes(track.attributes.milliseconds);
          return (
            <tr key={track.id}>
              <td>{track.attributes.name}</td>
              <td>{duration}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  ) : (
    <p>No tracks in this playlist</p>
  );
}
