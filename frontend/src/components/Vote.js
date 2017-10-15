import React, { Component } from 'react';
import { votePost } from '../actions/posts';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Vote extends Component {
  state: { score: 0 };

  voteItem(option) {
    const { id } = this.props.source;
    this.props.votePost(id, { option });
  };

  render() {
    const { voteScore } = this.props.source;
    return (
      <span className="vote-item">
        <Link onClick={() => this.voteItem('downVote')} to="#">[-]</Link>
        <b> {voteScore} </b>
        <Link onClick={() => this.voteItem('upVote')} to="#">[+]</Link>
      </span>
    );
  }
}

function mapStateToProps() {
  return {};
};

export default connect(mapStateToProps, {
  votePost,
})(Vote);
