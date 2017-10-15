import React, { Component } from 'react';
import * as ReadableAPI from '../utils/ReadableAPI';
import { createPost } from '../actions/posts';
import { connect } from 'react-redux';

const DEFAULT_STATE = {
  title: '',
  body: '',
  category: 'redux',
  author: '',
};

class CreatePost extends Component {
  state = {};

  componentDidMount() {
    this.setDefaultState();
  };

  setDefaultState() {
    this.setState(DEFAULT_STATE);
  };

  createPost(event) {
    const timestamp = Date.now();
    const post = {
      ...this.state,
      timestamp,
      id: Math.random().toString(36).substr(-8),
    };
    this.props.createPost(post);
    this.setDefaultState();
    event.preventDefault();
  };

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="create-post">
        <h3>Create New Post</h3>
        <form onSubmit={this.createPost.bind(this)}>
          <p>
            <label htmlFor="title">Post Title: </label>
            <input name="title" id="title" value={this.state.title} onChange={this.handleChange.bind(this)}/>
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
            value="Create"
          />
        </form>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  console.log('CreatePost mapStateToProps', state, ownProps);
  const { posts } = state;
  return {
    posts,
  };
};

export default connect(mapStateToProps, {
  createPost,
})(CreatePost);
