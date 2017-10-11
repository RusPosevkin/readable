import React, { Component } from 'react';

class PostsList extends Component {
  render() {
    return (
      <div className="posts">
        <h1>All Posts List</h1>
        <div>
          {this.props.posts.map((post) => {
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

export default PostsList;
