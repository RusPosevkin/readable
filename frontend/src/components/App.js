import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { createPost } from '../actions/posts';
import CategoriesList from './CategoriesList';
import PostsList from './PostsList';
import Category from './Category';
import Post from './Post';
import CreatePost from './CreatePost';
import * as ReadableAPI from '../utils/ReadableAPI';

class App extends Component {
  state = {
    categories: [],
  };

  getCategories = () => {
    ReadableAPI.getCategories().then((categories) => {
      this.setState({ categories });
    });
  };

  componentDidMount() {
    this.getCategories();
  };

  render() {
    const { categories } = this.state;

    return (
      <div className="App">
        <Switch>
          <Route exact path='/' render={() => {
              return (
                <div>
                  <CategoriesList
                    categories={categories}
                  />
                  <PostsList/>
                  <CreatePost
                    createPost={createPost}
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

export default App;
