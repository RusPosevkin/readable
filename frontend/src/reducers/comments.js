import {
  GET_COMMENTS,
  GET_COMMENT,
  CREATE_COMMENT,
  UPDATE_COMMENT,
  VOTE_COMMENT,
  DELETE_COMMENT,
} from '../actions/comments';
import _ from 'lodash';

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
    case VOTE_COMMENT:
      const comment = state[data.parentId];
      const index = _.findIndex(comment, (item) => item.id === data.id);
      comment.splice(index, 1, data);
      return { ...state, [data.parentId]: comment };
    case DELETE_COMMENT :
      return { ...state, [data.id]: data };
    default:
      return state;
  }
};
