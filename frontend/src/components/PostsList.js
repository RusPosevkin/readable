import React, { Component } from 'react';
import { getAllPosts } from '../actions/posts';
import { connect } from 'react-redux';
import Vote from './Vote';
import _ from 'lodash';
import Delete from './Delete';
import { Link } from 'react-router-dom';
import Sort from './Sort';

class PostsList extends Component {
  componentDidMount() {
    this.props.getAllPosts();
  };

  render() {
    const { posts, category, sort } = this.props;
    console.log('render ->', posts);

    const sortedPosts = _.sortBy(posts, [sort]);

    const header = category ? `All posts in category "${category}"`: 'All Posts List';
    return (
      <div className="posts">
        {this.props.category && (
          <nav className="navigation">
            <Link to="/">Main</Link>
          </nav>
        )}
        <h1>{header}</h1>
        <div>
          <Sort />
          {sortedPosts.length ? sortedPosts.map((post) => {
            const url = ['/', post.category, '/', post.id].join('');
            return (
              <div key={post.id} className="post-item">
                <div>
                  <a href={url}>{post.title}</a>
                  <span> | </span>
                  <Delete source={post} type="post"/>
                  <span> | </span>
                  <Vote source={post} type="post"/>
                </div>
                <span>by {post.author}</span>
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
