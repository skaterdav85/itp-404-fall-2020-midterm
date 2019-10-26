import React from "react";
import TrackList from "./TrackList";
import Loading from "./Loading";
import { getTracksByPage } from "./api";

export default class HomePage extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      page: 1,
      tracks: [],
      loading: true
    };
  }
  async componentDidMount() {
    const json = await getTracksByPage(this.state.page);
    this.setState({
      tracks: json.data,
      totalPages: json.meta.pages,
      loading: false
    });
  }
  handlePageInputChange = event => {
    this.setState({ page: event.target.value });
  };
  goToPage = async () => {
    this.setState({ loading: true });
    const json = await getTracksByPage(this.state.page);
    this.setState({
      tracks: json.data,
      totalPages: json.meta.pages,
      loading: false
    });
  };
  render() {
    return (
      <div>
        <h2>My Library</h2>
        <div className="row mb-3">
          <div className="col-8">Total Pages: {this.state.totalPages}</div>
          <div className="col-4 text-right">
            <div className="input-group">
              <input
                className="form-control"
                value={this.state.page}
                onChange={this.handlePageInputChange}
              />
              <div className="input-group-prepend">
                <button type="button" onClick={this.goToPage}>
                  Jump to Page
                </button>
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
