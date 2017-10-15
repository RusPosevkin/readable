import React, { Component } from 'react';
import { getAllPosts } from '../actions/posts';
import { connect } from 'react-redux';
import _ from 'lodash';

class PostsList extends Component {
  componentDidMount() {
    this.props.getAllPosts();
  };

  render() {
    const { posts, category } = this.props;
    console.log('render ->', posts);

    // TODO: change sortBy method based on user's choice
    const sortedPosts = _.sortBy(posts, (post) => post.timeStamp );

    const header = category ? `All posts in category "${category}"`: 'All Posts List';
    return (
      <div className="posts">
        <h1>{header}</h1>
        <div>
          {sortedPosts.length ? sortedPosts.map((post) => {
            const url = ['/', post.category, '/', post.id].join('');
            return (
              <div key={post.id}>
                <a href={url}>{post.title}</a>
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
  if (category) {
    return {
        posts: _.pickBy(state.posts, (post) => post.category === category),
        category,
    };
  }

  return { posts: state.posts };
};

export default connect(mapStateToProps, {
  getAllPosts,
})(PostsList);
