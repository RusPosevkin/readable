import {
  GET_CATEGORIES,
} from '../actions/categories';

export default function categories(state = [], action) {
  const { data } = action;

  switch (action.type) {
    case GET_CATEGORIES:
      return data;
    default:
      return state;
  }
};
