import React, { Component } from 'react';
import { getPost } from '../actions/posts';
import { getComments } from '../actions/comments';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import CreateEditComment from './CreateEditComment';
import Vote from './Vote';
import Delete from './Delete';
import Sort from './Sort';

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
    const sortedComments = _.sortBy(comments, [this.props.sort]);
    const category = this.props.match.params.category;
    return (
      <div className="post">
        {content && !content.deleted ? (
          <div>
          <nav className="navigation">
            <Link to="/">Main</Link>
            <span> –> </span>
            <Link to={`/${category}`}>{category}</Link>
          </nav>
            <div>
              <h1>{content.title}</h1>
              <h2>{content.author} {content.timestamp ? (getDate(content.timestamp)) : ''}</h2>
                <Link to={`${this.props.match.url}/edit`}>[Edit post]</Link>
                <span> | </span>
                <Vote source={content} type="post"/>

              <p>{content.body}</p>
            </div>
            {sortedComments && sortedComments.length ? (
              <div className="comments">
                <h3>Comments ({sortedComments.length} total)</h3>
                <Sort />
                {sortedComments.map((comment) => (
                  <div key={comment.id} className="comment-item">
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
  const { posts, comments, sort } = state;
  return {
    posts,
    comments,
    sort,
  };
};

export default connect(mapStateToProps, {
  getPost,
  getComments,
})(Post);
