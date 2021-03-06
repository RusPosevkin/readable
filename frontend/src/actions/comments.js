import * as ReadableAPI from '../utils/ReadableAPI';

export const GET_COMMENTS = 'GET_COMMENTS';
export const GET_COMMENT = 'GET_COMMENT';
export const CREATE_COMMENT = 'CREATE_COMMENT';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const VOTE_COMMENT = 'VOTE_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

export function getComments(postId) {
  return dispatch => {
    ReadableAPI.getPostComments(postId).then((data) => {
      return dispatch({
        type: GET_COMMENTS,
        data: {
          data,
          id: postId
        },
      });
    });
  };
};

export function getComment(commentId) {
  return dispatch => {
    ReadableAPI.getComment(commentId).then((data) => {
      return dispatch({
        type: GET_COMMENT,
        data: {
          data,
          id: commentId
        },
      });
    });
  };
};

export function createComment(comment) {
  return dispatch => {
    ReadableAPI.createComment(comment).then((data) => {
      dispatch({
        type: CREATE_COMMENT,
        data,
      });
    }).then(() => {dispatch(getComments(comment.parentId))});
  };
};

export function updateComment(commentId, comment) {
  return dispatch => {
    ReadableAPI.updateComment(commentId, comment).then((data) => {
      dispatch({
        type: UPDATE_COMMENT,
        data,
      });
    });
  };
};

export function voteComment(commentId, comment) {
  return dispatch => {
    ReadableAPI.voteComment(commentId, comment).then((data) => {
      dispatch({
        type: VOTE_COMMENT,
        data,
      });
    }).then(() => {dispatch(getComment(commentId))});
  };
};

export function deleteComment(commentId, parentId) {
  return dispatch => {
    ReadableAPI.deleteComment(commentId).then((data) => {
      dispatch({
        type: DELETE_COMMENT,
        data,
      });
    }).then(() => {dispatch(getComments(parentId))});
  };
};
