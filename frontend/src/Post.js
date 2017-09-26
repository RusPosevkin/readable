import React, { Component } from 'react';
import * as ReadableAPI from './ReadableAPI';
import { withRouter } from 'react-router';

class Post extends Component {
  state = {
    content: {},
    comments: [],
  };

  componentDidMount() {
    this.getPost();
    this.getPostComments();
  };

  getPost = () => {
    const postId = this.props.match.params.post_id;

    ReadableAPI.getPost(postId).then((content) => {
      this.setState({ content });
    });
  };

  getPostComments = () => {
    const postId = this.props.match.params.post_id;

    ReadableAPI.getPostComments(postId).then((comments) => {
      this.setState({ comments });
    });
  };

  render() {
    const content = this.state.content;

    const getDate = (timestamp) => {
      const date = new Date();
      date.setTime(timestamp);

      return [
        date.getDate(),
        date.getMonth(),
        date.getFullYear(),
      ].join('/');
    };

    const comments = this.state.comments;
    return (
      <div className="post">
        {content.body && (
          <div>
            <h1>{content.title}</h1>
            <h2>{content.author} {content.timestamp ? (getDate(content.timestamp)) : ''}</h2>
            <p>{content.body}</p>
          </div>
        )}
        {comments.length ? (
          <div className="comments">
            <h3>Comments</h3>
            {comments.map((comment) => (
              <div key={comment.id}>
                <h5>{comment.author} ({getDate(comment.timestamp)})</h5>
                <p>{comment.body}</p>
              </div>
            ))}
          </div>
        ) : ''}
      </div>
    );
  }
}

export default withRouter(Post);
