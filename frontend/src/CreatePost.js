import React, { Component } from 'react';
import * as ReadableAPI from './ReadableAPI';

class CreatePost extends Component {
  state = {
    title: '',
    body: '',
    category: 'redux',
  };

  createPost(event) {
    const timestamp = Date.now();
    const post = {
      ...this.state,
      timestamp,
      id: timestamp,
    };
    console.log(post);
    ReadableAPI.createPost(post).then((response) => {
      console.log(response);
      //TODO: we should save this post in redux state
      //because server doesn't save it
    });

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
            <input name="title" id="title" onChange={this.handleChange.bind(this)}/>
          </p>
          <p>
            <label htmlFor="author">Your name: </label>
            <input name="author" id="author" onChange={this.handleChange.bind(this)}/>
          </p>
          <p>
            <label htmlFor="category">Post Category: </label>
            <select id="category" name="category" onChange={this.handleChange.bind(this)}>
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

export default CreatePost;
