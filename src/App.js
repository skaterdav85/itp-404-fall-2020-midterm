import React from "react";
import { fetchPlaylists } from "./api";
import "./App.css";

export default class App extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      playlists: []
    };
  }
  async componentDidMount() {
    const playlists = await fetchPlaylists();
    this.setState({ playlists });
  }
  render() {
    return (
      <div>
        <header className="ml-3 mt-3">
          <h1>My Music App</h1>
        </header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-2">
              <nav>
                <ul className="nav flex-column">
                  <li className="nav-item">Library</li>
                </ul>
              </nav>
              <hr />
              <ul className="nav flex-column">
                {this.state.playlists.map(playlist => {
                  return (
                    <li key={playlist.id} className="nav-item">
                      {playlist.attributes.name}
                    </li>
                  );
                })}
              </ul>
            </div>
            <main className="col-10"></main>
          </div>
        </div>
      </div>
    );
  }
}
