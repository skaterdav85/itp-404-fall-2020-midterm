import React from "react";
import TrackList from "./TrackList";
import Loading from "./Loading";
import { fetchPlaylist } from "./api";

export default class PlaylistPage extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      tracks: [],
      loading: true
    };
  }
  async componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.setState({ loading: true });
      const json = await fetchPlaylist(this.props.match.params.id);
      this.setState({
        playlistName: json.data.attributes.name,
        tracks: json.included || [],
        loading: false
      });
    }
  }
  async componentDidMount() {
    const json = await fetchPlaylist(this.props.match.params.id);
    this.setState({
      playlistName: json.data.attributes.name,
      tracks: json.included || [],
      loading: false
    });
  }
  render() {
    return this.state.loading ? (
      <Loading />
    ) : (
      <>
        <h2>{this.state.playlistName}</h2>
        <TrackList tracks={this.state.tracks} />
      </>
    );
  }
}
