import {
  GET_COMMENTS,
  GET_COMMENT,
  CREATE_COMMENT,
  UPDATE_COMMENT,
} from '../actions/comments';

export default function comments(state = {}, action) {
  const { data } = action;

  switch (action.type) {
    case GET_COMMENTS:
      return { ...state, [data.id]: data.data };
    case GET_COMMENT:
      return { ...state, [data.id]: data.data };
    case CREATE_COMMENT:
      return { ...state, [data.id]: data.data };
    case UPDATE_COMMENT:
      return { ...state, [data.id]: data.data };
    default:
      return state;
  }
};
