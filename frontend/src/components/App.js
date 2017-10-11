import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { createPost } from '../actions';
import CategoriesList from './CategoriesList';
import PostsList from './PostsList';
import Category from './Category';
import Post from './Post';
import CreatePost from './CreatePost';
import * as ReadableAPI from '../utils/ReadableAPI';

class App extends Component {
  state = {
    categories: [],
    posts: [],
  };

  getCategories = () => {
    ReadableAPI.getCategories().then((categories) => {
      this.setState({ categories });
    });
  };

  getAllPosts = () => {
    ReadableAPI.getAllPosts().then((posts) => {
      this.setState({ posts });
    });
  };

  createPost = (post) => {
    ReadableAPI.createPost(post).then((response) => {
      const posts = this.state.posts;
      posts.push(response);
      this.setState({ posts });
    });
  };

  componentDidMount() {
    this.getCategories();
    this.getAllPosts();
  };

  render() {
    const { categories, posts } = this.state;

    return (
      <div className="App">
        <Switch>
          <Route exact path='/' render={() => {
              return (
                <div>
                  <CategoriesList
                    categories={categories}
                  />
                  <PostsList
                    posts={posts}
                  />
                  <CreatePost
                    createPost={this.createPost}
                  />
                </div>
              );
            }
          }/>
          <Route exact path='/:category' render={() => (
              <Category
              />
            )}/>
          <Route exact path='/:category/:post_id' render={() => (
              <Post
              />
            )}/>
        </Switch>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createPost: (data) => dispatch(createPost(data)),
  };
};

export default connect(mapDispatchToProps)(App);
