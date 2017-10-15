import * as ReadableAPI from '../utils/ReadableAPI';

export const GET_COMMENTS = 'GET_CATEGORIES';

export function getComments(postId) {
  return dispatch => {
    ReadableAPI.getPostComments(postId).then((data) => {
      console.log('getComments action', data);
      return dispatch({
        type: GET_COMMENTS,
        data: {
          data,
          id: postId
        },
      });
    }).then((data) => console.log('getComments done', data));
  };
};
