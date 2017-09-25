import React, { Component } from 'react';
import * as ReadableAPI from './ReadableAPI';
import { withRouter } from 'react-router';

class Post extends Component {
  state = {
    content: {},
  };

  componentDidMount() {
    this.getPost();
  };

  getPost= () => {
    const postId = this.props.match.params.post_id;

    ReadableAPI.getPost(postId).then((content) => {
      this.setState({ content });
    });
  };

  render() {
    const content = this.state.content;
    let dateString = '';
    if (content.timestamp) {
      const date = new Date();
      date.setTime(content.timestamp);
      dateString = [
        date.getDate(),
        date.getMonth(),
        date.getFullYear(),
      ].join('/');
    }

    return (
      <div className="post">
        {content.body && (
          <div>
            <h1>{content.title}</h1>
            <h3>{content.author} ({dateString})</h3>
            <p>{content.body}</p>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(Post);
