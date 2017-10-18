import _ from 'lodash';
import {
  CHANGE_SORT,
} from '../actions/sort';

export default function sort(state = 'voteScore', action) {
  console.log('posts reducer', state, action);
  const { data } = action;

  switch (action.type) {
    case CHANGE_SORT :
      console.log('CHANGE_SORT', state, data);
      return data;
    default:
      return state;
  }
};
