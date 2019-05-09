import React, { Component } from "react";
import Comments from "../container/Comments";
import axios from "axios";

const commentsUrl =
  "https://project-1-api.herokuapp.com/comments?api_key=labKey";

class CommentList extends Component {
  state = {
    commentContents: []
  };
  componentDidMount() {
    axios.get(commentsUrl).then(response => {
      const newComments = response.data.map(comment => {
        return {
          Comment: comment.comment,
          Name: comment.name,
          Date: comment.timestamp
        };
      });

      this.setState({
        commentContents: newComments
      });
    });
  }

  render() {
    return (
      <div>
        {this.state.commentContents.map(content => (
          <Comments
            Name={content.Name}
            Date={content.Date}
            Comment={content.Comment}
          />
        ))}
      </div>
    );
  }
}

export default CommentList;
