import React, { Component } from 'react';
import * as ReadableAPI from '../utils/ReadableAPI';
import CreatePost from './CreatePost';

class CategoriesList extends Component {
  state = {
    categories: [],
    posts: [],
  };

  componentDidMount() {
    this.getAllPosts();
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
          {this.props.categories.map((category) => (
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
        <CreatePost />
      </div>
    );
  }
}

export default CategoriesList;
