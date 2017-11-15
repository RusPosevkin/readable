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
  const { data } = action;

  switch (action.type) {
    case CREATE_POST :
      return { ...state, [data.id]: data };
    case GET_POSTS:
      return _.mapKeys(data, 'id');
    case GET_POST :
      return { ...state, [data.id]: data };
    case UPDATE_POST :
      return { ...state, [data.id]: data };
    case VOTE_POST :
      return { ...state, [data.id]: data };
    case DELETE_POST :
      return { ...state, [data.id]: data };
    default:
      return state;
  }
};
