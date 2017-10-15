import * as ReadableAPI from '../utils/ReadableAPI';
import { getComments } from './comments';

export const CREATE_POST = 'CREATE_POST';
export const GET_POSTS = 'GET_POSTS';
export const GET_POST = 'GET_POST';

export function createPost(post) {
  console.log('createPost action');
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
      console.log('getAllPosts action', data);
      return dispatch({
        type: GET_POSTS,
        data,
      });
    }).then((data) => console.log('getAllPosts done', data));
  };
};

export function getPost(postId) {
  return dispatch => {
    ReadableAPI.getPost(postId).then((data) => {
      console.log('getPost action', data);
      dispatch({
        type: GET_POST,
        data,
      });
      dispatch(getComments(postId));
    }).then((data) => console.log('getPost done', data));
  };
};
