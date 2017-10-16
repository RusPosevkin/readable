import React, { Component } from 'react';
import { deletePost } from '../actions/posts';
import { deleteComment } from '../actions/comments';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Delete extends Component {
  deleteItem() {
    const { id, parentId } = this.props.source;
    const { deletePost, deleteComment, type } = this.props;
    (type === 'post') ? deletePost(id) : deleteComment(id, parentId);
  };

  render() {
    const { voteScore } = this.props.source;
    return (
      <span className="delete-item">
        <Link onClick={() => this.deleteItem()} to="#">[Delete]</Link>
      </span>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {};
};

export default connect(mapStateToProps, {
  deletePost,
  deleteComment,
})(Delete);
