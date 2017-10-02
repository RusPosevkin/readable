import React, { Component } from 'react';
import { withRouter } from 'react-router';
import * as ReadableAPI from '../utils/ReadableAPI';

class Category extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    this.getPostsByCategory();
  };

  getPostsByCategory= () => {
    const category = this.props.match.params.category;

    ReadableAPI.getPostsByCategory(category).then((posts) => {
      this.setState({ posts });
    });
  };

  render() {
    return (
      <div className="category">
        <h1>{this.props.match.params.category} – all posts</h1>
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
    );
  }
}

export default withRouter(Category);
