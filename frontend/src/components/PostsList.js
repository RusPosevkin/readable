import React, { Component } from 'react';
import { getAllPosts } from '../actions/posts';
import { connect } from 'react-redux';
import Vote from './Vote';
import _ from 'lodash';
import Delete from './Delete';
import { Link } from 'react-router-dom';
import PostsSort from './PostSort';

class PostsList extends Component {
  componentDidMount() {
    this.props.getAllPosts();
  };

  render() {
    const { posts, category, sort } = this.props;
    console.log('render ->', posts);

    // TODO: change sortBy method based on user's choice
    const sortedPosts = _.sortBy(posts, [sort]);

    const header = category ? `All posts in category "${category}"`: 'All Posts List';
    return (
      <div className="posts">
        <h1>{header}</h1>
        <div>
          <PostsSort />
          {sortedPosts.length ? sortedPosts.map((post) => {
            const url = ['/', post.category, '/', post.id].join('');
            return (
              <div key={post.id}>
                <a href={url}>{post.title}</a>
                <span> | </span>
                <Delete source={post} type="post"/>
                <span> | </span>
                <Vote source={post} type="post"/>
              </div>
            );
          }) : 'There is no any post :('}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  console.log('PostsList mapStateToProps', state, ownProps);
  const category = _.get(ownProps, 'match.params.category');
  const { posts, sort } = state;
  if (category) {
    return {
        posts: _.pickBy(posts, (post) => post.category === category),
        category,
        sort,
    };
  }

  return { posts, sort };
};

export default connect(mapStateToProps, {
  getAllPosts,
})(PostsList);
