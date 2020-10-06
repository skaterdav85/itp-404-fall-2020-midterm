import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import HomePage from "./components/HomePage";
import PlaylistPage from "./components/PlaylistPage";
import "./App.css";
import PlaylistsNavigation from "./components/PlaylistsNavigation";

export default function App() {
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
            <PlaylistsNavigation />
          </div>
          <main className="col-10">
            <Switch>
              <Route exact={true} path="/">
                <HomePage />
              </Route>
              <Route exact={true} path="/playlists/:id/tracks">
                <PlaylistPage />
              </Route>
              <Route path="*">
                <p>Page not found.</p>
              </Route>
            </Switch>
          </main>
        </div>
      </div>
    </Router>
  );
}
