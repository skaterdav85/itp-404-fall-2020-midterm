import React from "react";
import { fetchPlaylists } from "./api";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import HomePage from "./HomePage";
import PlaylistPage from "./PlaylistPage";
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
      <Router>
        <header className="ml-3 mt-3">
          <h1>My Music App</h1>
        </header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-2">
              <nav>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <NavLink to="/" exact={true} className="nav-link">
                      Library
                    </NavLink>
                  </li>
                </ul>
              </nav>
              <hr />
              <ul className="nav flex-column">
                {this.state.playlists.map(playlist => {
                  return (
                    <li key={playlist.id} className="nav-item">
                      <NavLink
                        to={`/playlists/${playlist.id}/tracks`}
                        className="nav-link"
                      >
                        {playlist.attributes.name}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
            <main className="col-10">
              <Switch>
                <Route exact={true} path="/" component={HomePage} />
                <Route path="/playlists/:id/tracks" component={PlaylistPage} />
              </Switch>
            </main>
          </div>
        </div>
      </Router>
    );
  }
}
