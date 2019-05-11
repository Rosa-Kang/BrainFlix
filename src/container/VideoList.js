import React, { Component } from "react";
import Videos from "../component/Videos";

class VideoList extends Component {
  render() {
    return (
      <div className="videos">
        <div className="videos__next">NEXT VIDEO</div>
        {this.props.videos.map(video => (
          <Videos
            title={this.props.videos.title}
            channel={this.props.videos.channel}
            image={this.props.videos.image}
            id={this.props.videos.id}
          />
        ))}
      </div>
    );
  }
}

export default VideoList;
