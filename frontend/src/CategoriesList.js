import React, { Component } from 'react';
import * as ReadableAPI from './ReadableAPI';

class CategoriesList extends Component {
  state = {
    categories: [],
    posts: [],
  };

  componentDidMount() {
    this.getCategories();
    this.getAllPosts();
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
    return (
      <div>
        <div className="categories">
          <h1>Categories List</h1>
          {this.state.categories.map((category) => (
            <div key={category.name}>
              <a href={category.path}>{category.name}</a>
            </div>
          ))}
        </div>
        <div className="posts">
          <h1>All Posts List</h1>
          <div>
            {this.state.posts.map((post) => {
              const url = ['/', post.category, '/', post.id].join('');
              return (
                <div key={post.id}>
                  <a href={url}>{post.title}</a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default CategoriesList;
