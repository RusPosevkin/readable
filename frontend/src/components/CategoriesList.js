import React, { Component } from 'react';

class CategoriesList extends Component {
  render() {
    return (
      <div className="categories">
        <h1>Categories List</h1>
        {this.props.categories.map((category) => (
          <div key={category.name}>
            <a href={category.path}>{category.name}</a>
          </div>
        ))}
      </div>
    );
  }
}

export default CategoriesList;
