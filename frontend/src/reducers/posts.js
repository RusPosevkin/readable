import _ from 'lodash';
import {
  CREATE_POST,
  GET_POSTS,
  GET_POST,
  UPDATE_POST,
  VOTE_POST,
  DELETE_POST,
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
    case UPDATE_POST :
      console.log('UPDATE_POST', state, data);
      return { ...state, [data.id]: data };
    case VOTE_POST :
      console.log('VOTE_POST', state, data);
      return { ...state, [data.id]: data };
    case DELETE_POST :
      console.log('DELETE_POST', state, data);
      debugger;
      return { ...state, [data.id]: data };
    default:
      return state;
  }
};
