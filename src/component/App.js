import React, { Component } from "react";
import axios from "axios";
import "../styles/main.css";
import Header from "./Header";
import Hero from "./Hero";
import Clip from "./Clip";
import NewComment from "./NewComment";
import CommentList from "../container/CommentList";
import VideoList from "../container/VideoList";

const videoUrl =
  "https://project-2-api.herokuapp.com/videos?api_key=46a5c4b9-e4ed-4f7e-bbf7-be32f1a02279";

class App extends Component {
  state = {
    videos: [],
    mainVideo: {
      id: "",
      title: "",
      description: "",
      channel: "",
      image: "",
      views: "",
      likes: "",
      duration: "",
      video: "",
      timestamp: 0,
      comments: []
    }
  };

  componentDidMount() {
    axios.get(videoUrl).then(video => {
      const mainVideoUrl = `https://project-2-api.herokuapp.com/videos/${
        video.data[0].id
      }?api_key=46a5c4b9-e4ed-4f7e-bbf7-be32f1a02279`;
      axios.get(mainVideoUrl).then(response => {
        console.log(response.data);
        this.setState({
          videos: video.data,
          mainVideo: response.data
        });
      });
    });
  }

  componentDidUpdate() {}

  render() {
    return (
      <div className="App">
        <Header history={this.props.history} />
        <Hero videos={this.state.mainVideo} />
        <div className="box">
          <div className="boxClip">
            <Clip videos={this.state.mainVideo} />
            <NewComment />
            <CommentList videos={this.state.videos} />
          </div>
          <VideoList videos={this.state.videos} />
        </div>
      </div>
    );
  }
}

export default App;
