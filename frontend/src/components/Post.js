import React, { Component } from 'react';
import { getPost } from '../actions/posts';
import { getComments } from '../actions/comments';
import { connect } from 'react-redux';
import _ from 'lodash';


class Post extends Component {
  componentDidMount() {
    const postId = _.get(this.props, 'match.params.postId');
    this.props.getPost(postId);
  };

  render() {
    const getDate = (timestamp) => {
      const date = new Date();
      date.setTime(timestamp);

      return [
        date.getDate(),
        date.getMonth(),
        date.getFullYear(),
      ].join('/');
    };

    const postId = _.get(this.props, 'match.params.postId');
    const content = this.props.posts[postId];
    const commentsData = _.get(this.props, 'comments', {});
    const comments = commentsData[postId];

    return (
      <div className="post">
        {content && (
          <div>
            <h1>{content.title}</h1>
            <h2>{content.author} {content.timestamp ? (getDate(content.timestamp)) : ''}</h2>
            <p>{content.body}</p>
          </div>
        )}
        {comments && comments.length ? (
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

function mapStateToProps(state, ownProps) {
  console.log('Post mapStateToProps', state, ownProps);
  const { posts, comments } = state;
  return {
    posts,
    comments,
  };
};

export default connect(mapStateToProps, {
  getPost,
  getComments,
})(Post);
