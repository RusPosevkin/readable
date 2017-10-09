import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import CategoriesList from './CategoriesList';
import Category from './Category';
import Post from './Post';
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

  render() {
    const { categories } = this.state;

    return (
      <div className="App">
        <Switch>
          <Route exact path='/' render={() => {
              this.getCategories();
              return (
                <CategoriesList
                  categories={categories}
                />
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
