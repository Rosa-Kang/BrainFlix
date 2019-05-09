import React, { Component } from "react";
import axios from "axios";
import Videos from "../component/Videos";

const videoUrl =
  "https://project-2-api.herokuapp.com/videos?api_key=46a5c4b9-e4ed-4f7e-bbf7-be32f1a02279";

class VideoList extends Component {
  state = {
    videoContents: []
  };

  componentDidMount() {
    axios.get(videoUrl).then(response => {
      const newVideos = response.data.map(video => {
        return {
          id: video.id,
          title: video.title,
          channel: video.channel,
          image: video.image
        };
      });

      this.setState({
        videoContents: newVideos
      });
    });
  }

  render() {
    return (
      <div className="videos">
        <div className="videos__next">NEXT VIDEO</div>
        {this.state.videoContents.map(content => (
          <Videos
            title={content.title}
            channel={content.channel}
            image={content.image}
          />
        ))}
      </div>
    );
  }
}

export default VideoList;
