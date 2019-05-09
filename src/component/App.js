import React, { Component } from "react";
import "../styles/main.css";
import Header from "./Header";
import Hero from "./Hero";
import Clip from "./Clip";
import NewComment from "./NewComment";
import CommentList from "../container/CommentList";
import VideoList from "../container/VideoList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header history={this.props.history} />
        <Hero />
        <div className="box">
          <div className="boxClip">
            <Clip />
            <NewComment />
            <CommentList />
          </div>
          <VideoList />
        </div>
      </div>
    );
  }
}

export default App;
