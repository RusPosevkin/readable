import _ from 'lodash';
import {
  CREATE_POST,
  GET_POSTS,
  GET_POST,
} from '../actions/posts';

export default function posts(state = {}, action) {
  console.log('posts reducer', state, action);
  const { data } = action;

  switch (action.type) {
    case CREATE_POST :
      console.log('CREATE_POST', state, data);
      return { ...state, [data.id]: data };
    case GET_POSTS:
      console.log('GET_POSTS', state, data);
      return _.mapKeys(data, 'id');
    case GET_POST :
      console.log('GET_POST', state, data);
      return { ...state, [data.id]: data };
    default:
      return state;
  }
};
