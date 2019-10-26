import React from "react";

export default function TrackList(props) {
  return props.tracks.length ? (
    <table className="table table-dark">
      <thead>
        <tr>
          <th>Name</th>
          <th>Minutes</th>
        </tr>
      </thead>
      <tbody>
        {props.tracks.map(track => {
          return (
            <tr key={track.id}>
              <td>{track.attributes.name}</td>
              <td>{track.attributes.milliseconds}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  ) : (
    <p>No tracks in this playlist</p>
  );
}
