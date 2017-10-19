import React, { Component } from 'react';
import { getPost } from '../actions/posts';
import { getComments } from '../actions/comments';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import CreateEditComment from './CreateEditComment';
import Vote from './Vote';
import Delete from './Delete';

class Post extends Component {
  componentDidMount() {
    const postId = _.get(this.props, 'match.params.postId');
    this.props.getPost(postId);
    this.props.getComments(postId);
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
        {content && !content.deleted ? (
          <div>
            <div>
              <h1>{content.title}</h1>
              <h2>{content.author} {content.timestamp ? (getDate(content.timestamp)) : ''}</h2>
                <Link to={`${this.props.match.url}/edit`}>[Edit post]</Link>
                <span> | </span>
                <Vote source={content} type="post"/>

              <p>{content.body}</p>
            </div>
            {comments && comments.length ? (
              <div className="comments">
                <h3>Comments</h3>
                <PostSort />
                {comments.map((comment) => (
                  <div key={comment.id}>
                    <h5>{comment.author} ({getDate(comment.timestamp)})</h5>
                    <Delete source={comment} type="comment"/>
                    <span> | </span>
                    <Link to={`${this.props.match.url}/${comment.id}/edit`}>[Edit comment]</Link>
                    <span> | </span>
                    <Vote source={comment} type="comment"/>
                    <p>{comment.body}</p>
                  </div>
                ))}
              </div>
            ) : ''}
            <CreateEditComment postId={postId}/>
          </div>
        ) : (
          <div>
            <p>Post Not Found</p>
            <Link to="/">Back to Main</Link>
          </div>
        )}
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
