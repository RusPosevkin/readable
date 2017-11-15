import React, { Component } from 'react';
import { getCategories } from '../actions/categories';
import { connect } from 'react-redux';

class CategoriesList extends Component {
  componentDidMount() {
    this.props.getCategories();
  };

  render() {
    const { categories } = this.props;

    return (
      <div className="categories">
        <h1>Categories List</h1>
        {categories.length && categories.map((category) => (
          <div key={category.name}>
            <a href={category.path}>{category.name}</a>
          </div>
        ))}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return { categories: state.categories, posts: state.posts };
};

export default connect(mapStateToProps, {
  getCategories,
})(CategoriesList);
