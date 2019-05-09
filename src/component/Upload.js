import React, { Component } from "react";
import Header from "./Header";

export default class Upload extends Component {
  render() {
    return (
      <div>
        <Header />
        <h2>Upload Video</h2>
        <div>
          <h3>VIDEO THUMBNAIL</h3>
          <video />
          <lable>TITLE YOUR VIDEO</lable>
          <input />
          <lable>ADD A VIDEO DESCRIPTION</lable>
          <textarea />
        </div>
        <button>PUBLISH</button>
        <button>CANCEL</button>
      </div>
    );
  }
}
