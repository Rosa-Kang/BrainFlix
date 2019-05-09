import React, { Component } from "react";
import Views from "../assets/icons/SVG/Icon-views.svg";
import Likes from "../assets/icons/SVG/Icon-likes.svg";
import Play from "../assets/icons/SVG/Icon-play.svg";
import Fullscreen from "../assets/icons/SVG/Icon-fullscreen.svg";
import Volume from "../assets/icons/SVG/Icon-volume.svg";

const url =
  "https://project-2-api.herokuapp.com/videos/1af0jruup5gu?api_key=46a5c4b9-e4ed-4f7e-bbf7-be32f1a02279";

class Hero extends Component {
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
    return (
      <section id="background">
        <div className="hero">
          <div className="hero__play">
            <video poster="./assets/images/video-list-0.jpg" />
          </div>
          <div className="hero__scroll">
            <img id="play" src={Play} />
            <div className="hero__scroll--hr">
              <hr /> <p>0:00 / 0:42</p>
            </div>
            <div className="hero__scroll--stuffs">
              <img id="fullscreen" src={Fullscreen} />
              <img id="volume" src={Volume} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
