import * as ReadableAPI from '../utils/ReadableAPI';

export const CREATE_POST = 'CREATE_POST';
export const GET_POSTS = 'GET_POSTS';

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
