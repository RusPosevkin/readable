import _ from 'lodash';
import {
  CHANGE_SORT,
} from '../actions/sort';

export default function sort(state = 'voteScore', action) {
  const { data } = action;

  switch (action.type) {
    case CHANGE_SORT :
      return data;
    default:
      return state;
  }
};
