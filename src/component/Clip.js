import React, { Component } from "react";
import Views from "../assets/icons/SVG/Icon-views.svg";
import Likes from "../assets/icons/SVG/Icon-likes.svg";

class Clip extends Component {
  render() {
    return (
      <section className="clip">
        <div className="clip__title">{this.props.videos.title}</div>
        <div id="clip">
          <div className="clip__letters">
            <div id="channel">{this.props.videos.channel}</div>
            <div id="date">{this.props.videos.timestamp}</div>
          </div>
          <div className="clip__likes">
            <div id="views">
              <img src={Views} alt="views" />
              {this.props.videos.views}
            </div>
            <div id="hearts">
              <img src={Likes} alt="likes" />
              {this.props.videos.likes}
            </div>
          </div>
        </div>
        <div className="clip__description">{this.props.videos.description}</div>
      </section>
    );
  }
}

export default Clip;
