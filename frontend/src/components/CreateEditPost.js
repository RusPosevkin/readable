import React, { Component } from 'react';
import * as ReadableAPI from '../utils/ReadableAPI';
import { createPost, updatePost } from '../actions/posts';
import { connect } from 'react-redux';
import { getPost } from '../actions/posts';
import _ from 'lodash';

const DEFAULT_STATE = {
  title: '',
  body: '',
  category: 'redux',
  author: '',
  isEditMode: false,
};

class CreateEditPost extends Component {
  state = {};

  componentDidMount() {
    this.setDefaultState();
    const operation = _.get(this.props, 'match.params.operation');
    if (operation === 'edit') {
      this.setState({ isEditMode: true });
      const postId = _.get(this.props, 'match.params.postId');
      this.props.getPost(postId);
    }
  };

  componentWillReceiveProps(nextProps) {
    if (!this.state.isEditMode) {
      return;
    }
    const postId = _.get(this.props, 'match.params.postId');
    const { title, body, category, author } = nextProps.posts[postId];
    this.setState({ title, body, category, author });
  };

  setDefaultState() {
    this.setState(DEFAULT_STATE);
  };

  onSubmit(event) {
    (this.state.isEditMode) ? this.updatePost() : this.createPost();
    event.preventDefault();
  };

  updatePost() {
    console.log('updatePost');
    const { title, body, category, author } = this.state;
    const timestamp = Date.now();
    const post = {
      title,
      body,
      category,
      author,
      timestamp,
    };
    const postId = _.get(this.props, 'match.params.postId');
    this.props.updatePost(postId, post);

    // create new URL if category was changed
    if (post.category !== this.props.posts[postId].category) {
      this.props.history.push(`/${post.category}/${postId}`);
    } else {
      this.props.history.goBack();
    }
  };

  createPost() {
    const timestamp = Date.now();
    const { title, body, category, author } = this.state;
    const post = {
      title,
      body,
      category,
      author,
      timestamp,
      id: Math.random().toString(36).substr(-8),
    };
    this.props.createPost(post);
    this.setDefaultState();
  };

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const actionVerb = this.state.isEditMode ? 'Update' : 'Create';
    return (
      <div className="create-post">
        <h3>{`${actionVerb} Post`}</h3>
        <form onSubmit={this.onSubmit.bind(this)}>
          <p>
            <label htmlFor="title">Post Title: </label>
            <input name="title" id="title"  value={this.state.title} onChange={this.handleChange.bind(this)}/>
          </p>
          <p>
            <label htmlFor="author">Your name: </label>
            <input name="author" id="author" value={this.state.author} onChange={this.handleChange.bind(this)}/>
          </p>
          <p>
            <label htmlFor="category">Post Category: </label>
            <select id="category" name="category" value={this.state.category} onChange={this.handleChange.bind(this)}>
              <option value="redux">Redux</option>
              <option value="react">React</option>
              <option value="udacity">Udacity</option>
           </select>
          </p>
          <p>
            <label htmlFor="body">Post Content: </label>
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
            value={`${actionVerb} Post`}
          />
        </form>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  console.log('CreateEditPost mapStateToProps', state, ownProps);

  const { posts } = state;
  return {
    posts,
  };
};

export default connect(mapStateToProps, {
  createPost,
  getPost,
  updatePost,
})(CreateEditPost);
