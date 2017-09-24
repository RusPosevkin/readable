import React, { Component } from 'react';
import * as ReadableAPI from './ReadableAPI';

class CategoriesList extends Component {
  state = {
    categories: [],
  };

  componentDidMount() {
    this.getCategories();
  };

  getCategories = () => {
    ReadableAPI.getCategories().then((categories) => {
      this.setState({ categories });
    });
  };

  render() {
    return (
      <div className="categories">
        <h1>Categories List</h1>
        <ul>
          {this.state.categories.map((category) => (
            <li key={category.name}>{category.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CategoriesList;
