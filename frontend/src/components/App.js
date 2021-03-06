import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { createPost } from '../actions/posts';
import CategoriesList from './CategoriesList';
import PostsList from './PostsList';
import Post from './Post';
import CreateEditPost from './CreateEditPost';
import CreateEditComment from './CreateEditComment';
import * as ReadableAPI from '../utils/ReadableAPI';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' render={() => {
              return (
                <div>
                  <CategoriesList/>
                  <PostsList/>
                  <CreateEditPost/>
                </div>
              );
            }
          }/>
          <Route exact path='/:category' component={PostsList}/>
          <Route exact path='/:category/:postId' component={Post}/>
          <Route exact path='/:category/:postId/:operation' component={CreateEditPost}/>
          <Route exact path='/:category/:postId/:commentId/:operation' component={CreateEditComment}/>
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
