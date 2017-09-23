import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import CategoriesList from './CategoriesList';
import Category from './Category';
import Post from './Post';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' render={() => (
              <CategoriesList
              />
            )}/>
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
