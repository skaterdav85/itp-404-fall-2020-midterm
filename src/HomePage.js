import React from "react";
import TrackList from "./TrackList";
import Loading from "./Loading";
import { getTracksByPage } from "./api";

export default class HomePage extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      tracks: [],
      loading: true
    };
  }
  async componentDidMount() {
    const json = await getTracksByPage(1);
    this.setState({
      tracks: json.data,
      totalPages: json.meta.pages,
      loading: false
    });
  }
  render() {
    return (
      <div>
        <h2>My Library</h2>
        <div className="row mb-3">
          <div className="col-8">Total Pages: {this.state.totalPages}</div>
          <div className="col-4 text-right">
            <div className="input-group">
              <input className="form-control" value={this.state.page} />
              <div className="input-group-prepend">
                <button type="button">Jump to Page</button>
              </div>
            </div>
          </div>
        </div>
        {this.state.loading ? (
          <Loading />
        ) : (
          <TrackList tracks={this.state.tracks} />
        )}
      </div>
    );
  }
}
