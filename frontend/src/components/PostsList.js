import React, { Component } from 'react';
import { getAllPosts } from '../actions';
import { connect } from 'react-redux';
import _ from 'lodash';

class PostsList extends Component {
  componentDidMount() {
    this.props.getAllPosts();
  };

  render() {
    const { posts } = this.props;

    // TODO: change sortBy method based on user's choice
    const sortedPosts = _.sortBy(posts, (post) => post.timeStamp );

    return (
      <div className="posts">
        <h1>All Posts List</h1>
        <div>
          {sortedPosts.map((post) => {
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

function mapStateToProps(state, ownProps) {
  console.log('PostsList mapStateToProps', state, ownProps);
  return { posts: state.posts };
};

export default connect(mapStateToProps, {
  getAllPosts,
})(PostsList);
