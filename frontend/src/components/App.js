import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
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

  getAllPosts= () => {
    ReadableAPI.getAllPosts().then((posts) => {
      this.setState({ posts });
    });
  };

  render() {
    const { categories, posts } = this.state;

    return (
      <div className="App">
        <Switch>
          <Route exact path='/' render={() => {
              this.getCategories();
              this.getAllPosts();
              return (
                <div>
                  <CategoriesList
                    categories={categories}
                  />
                  <PostsList
                    posts={posts}
                  />
                  <CreatePost />
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

export default App;
