import React, { Component } from 'react';
import * as ReadableAPI from '../utils/ReadableAPI';
import { createComment, updateComment, getComment } from '../actions/comments';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Redirect } from 'react-router';
import { browserHistory } from 'react-router';

const DEFAULT_STATE = {
  body: '',
  author: '',
  isEditMode: false,
};

class CreateEditComment extends Component {
  state = {};

  componentDidMount() {
    this.setDefaultState();
    const operation = _.get(this.props, 'match.params.operation');
    if (operation === 'edit') {
      this.setState({ isEditMode: true });
      const commentId = _.get(this.props, 'match.params.commentId');
      this.props.getComment(commentId);
    }
  };

  componentWillReceiveProps(nextProps) {
    if (!this.state.isEditMode) {
      return;
    }
    const commentId = _.get(this.props, 'match.params.commentId');
    const { body, author } = nextProps.comments[commentId];
    this.setState({ body, author });
  };

  setDefaultState() {
    this.setState(DEFAULT_STATE);
  };

  onSubmit(event) {
    (this.state.isEditMode) ? this.updateComment() : this.createComment();
    event.preventDefault();
  };

  updateComment() {
    const { body, author } = this.state;
    const timestamp = Date.now();
    const comment = {
      body,
      author,
      timestamp,
    };
    const commentId = _.get(this.props, 'match.params.commentId');
    this.props.updateComment(commentId, comment);
    this.props.history.goBack();
  };

  createComment() {
    const timestamp = Date.now();
    const { title, body, category, author } = this.state;
    const comment = {
      body,
      author,
      timestamp,
      id: Math.random().toString(36).substr(-8),
      parentId: this.props.postId,
    };
    this.props.createComment(comment);
    this.setDefaultState();
  };

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const actionVerb = this.state.isEditMode ? 'Update' : 'Create';
    return (
      <div className="create-comment">
        <h3>{`${actionVerb} Comment`}</h3>
        <form onSubmit={this.onSubmit.bind(this)}>
          <p>
            <label htmlFor="author">Your name: </label>
            <input name="author" id="author" value={this.state.author} onChange={this.handleChange.bind(this)}/>
          </p>
          <p>
            <label htmlFor="body">Comment Content: </label>
            <textarea
              name="body"
              id="body"
              cols="30"
              rows="10"
              value={this.state.body}
              onChange={this.handleChange.bind(this)}
            ></textarea>
          </p>
          <input
            type="submit"
            value={`${actionVerb} Comment`}
          />
        </form>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  console.log('CreateEditComment mapStateToProps', state, ownProps);

  const { comments } = state;
  return {
    comments,
  };
};

export default connect(mapStateToProps, {
  createComment,
  getComment,
  updateComment,
})(CreateEditComment);
