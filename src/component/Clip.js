import React, { Component } from "react";
import Views from "../assets/icons/SVG/Icon-views.svg";
import Likes from "../assets/icons/SVG/Icon-likes.svg";

class Clip extends Component {
  state = {
    mainVideo: {
      id: "",
      title: "BMX Rampage: 2018 Highlights",
      description: "",
      channel: "By Red Cow",
      image: "",
      views: "1,001,023",
      likes: "110,985",
      duration: "",
      video: "",
      timestamp: "",
      comments: `On a gusty day in Southern Utah, a group of 25 daring mountain 
        bikers blew the doors off what is possible on two wheels, unleashing 
        some of the biggest moments the sport has ever seen.While mother nature 
        only allowed for one full run before the conditions made it impossible to
        ride, that was all that was needed for event veteran Kyle Strait, who
        won the event for the second time -- eight years after his first Red
        Cow Rampage title`
    }
  };
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
              <img src={Views} />
              {mainVideo.views}
            </div>
            <div id="hearts">
              <img src={Likes} />
              {mainVideo.likes}
            </div>
          </div>
        </div>
        <div className="clip__comment">{mainVideo.comments}</div>
      </section>
    );
  }
}

export default Clip;
