import * as ReadableAPI from '../utils/ReadableAPI';

export const GET_CATEGORIES = 'GET_CATEGORIES';

export function getCategories() {
  return dispatch => {
    ReadableAPI.getCategories().then((data) => {
      console.log('getCategories action', data);
      return dispatch({
        type: GET_CATEGORIES,
        data,
      });
    }).then((data) => console.log('getCategories done', data));
  };
};
