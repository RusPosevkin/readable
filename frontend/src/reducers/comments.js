import {
  GET_COMMENTS
} from '../actions/comments';

export default function comments(state = {}, action) {
  const { data } = action;

  switch (action.type) {
    case GET_COMMENTS:
      return { ...state, [data.id]: data.data };
    default:
      return state;
  }
};
