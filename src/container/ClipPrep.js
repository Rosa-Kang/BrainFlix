import React from "react";
import "./App.css";
import axios from "axios";
import { Switch, Route, Link } from "react-router-dom";

class ClipPrep extends Component {
  state = {
    main: []
  };

  componentDidMount() {
    const videoUrl = `https://project-2-api.herokuapp.com/video/?api_key=46a5c4b9-e4ed-4f7e-bbf7-be32f1a02279`;
    axios.get(videoUrl).then(response => {
      this.setState({
        main: response.data
      });
    });
  }

  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/">Home</Link> |
          <Link to="/about">About</Link>
        </nav>
        <Switch>
          <Route path="/" exact render={(props) => {
            console.log(props)
            return <HomePage users={this.state.users} />
          }} />
          <Route path="/about" exact component={AboutPage} />
          <Route path="/user/:username" exact render={(props) => {

            console.log(props)

  render() {
    const mainVideo = this.state.mainVideo;
    return (
      <section className="clip">
        <div className="clip__title">{mainVideo.title}</div>
        <div id="clip">
          <div className="clip__letters">
            <div id="name">{mainVideo.channel}</div>
            <div id="date">12/18/2018</div>
          </div>
          <div className="clip__likes">
            <div id="views">
              <img src={Views} alt="views" />
              {mainVideo.views}
            </div>
            <div id="hearts">
              <img src={Likes} alt="likes" />
              {mainVideo.likes}
            </div>
          </div>
        </div>
        <div className="clip__comment">{mainVideo.comments}</div>
      </section>
    );
  }
}

export default ClipPrep;
