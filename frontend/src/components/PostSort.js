import React, { Component } from 'react';
import { changeSort } from '../actions/sort';
import { connect } from 'react-redux';

class PostSort extends Component {

  changeSort(event) {
    this.props.changeSort(event.target.value);
  };

  render() {
    const { sort } = this.props;
    return (
      <span className="sort-posts">
        <label htmlFor="sort-posts">Post Category: </label>
        <select id="sort-posts" name="sort-posts" value={sort} onChange={this.changeSort.bind(this)}>
          <option value="timestamp">By Last Edit Time</option>
          <option value="voteScore">By Vote Score</option>
       </select>
      </span>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return { sort: state.sort };
};

export default connect(mapStateToProps, {
  changeSort,
})(PostSort);
