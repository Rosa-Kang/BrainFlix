import React, { Component } from "react";
import Videos from "../component/Videos";

class VideoList extends Component {
  render() {
    return (
      <div className="videos">
        <div className="videos__next">NEXT VIDEO</div>
        {this.props.videos.map(video => (
          <Videos
            title={this.props.title}
            channel={this.props.channel}
            image={this.props.image}
            id={this.props.id}
          />
        ))}
      </div>
    );
  }
}

export default VideoList;
