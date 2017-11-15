import * as ReadableAPI from '../utils/ReadableAPI';
import { getComments } from './comments';
import { getCategories } from './categories';

export const CREATE_POST = 'CREATE_POST';
export const GET_POSTS = 'GET_POSTS';
export const GET_POST = 'GET_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const VOTE_POST = 'VOTE_POST';
export const DELETE_POST = 'DELETE_POST';

export function createPost(post) {
  return dispatch => {
    ReadableAPI.createPost(post).then((data) => {
      dispatch({
        type: CREATE_POST,
        data,
      });
    }).then(() => {dispatch(getAllPosts())});
  };
};

export function getAllPosts() {
  return dispatch => {
    ReadableAPI.getAllPosts().then((data) => {
      return dispatch({
        type: GET_POSTS,
        data,
      });
    });
  };
};

export function getPost(postId) {
  return dispatch => {
    ReadableAPI.getPost(postId).then((data) => {
      dispatch({
        type: GET_POST,
        data,
      });
    });
  };
};

export function updatePost(postId, post) {
  return dispatch => {
    ReadableAPI.updatePost(postId, post).then((data) => {
      dispatch({
        type: UPDATE_POST,
        data,
      });
    });
  };
};

export function votePost(postId, post) {
  return dispatch => {
    ReadableAPI.votePost(postId, post).then((data) => {
      dispatch({
        type: VOTE_POST,
        data,
      });
    }).then(() => {dispatch(getPost(postId))});
  };
};

export function deletePost(postId) {
  return dispatch => {
    ReadableAPI.deletePost(postId).then((data) => {
      dispatch({
        type: DELETE_POST,
        data,
      });
    }).then(() => {dispatch(getAllPosts())});
  };
};
