import {
  GET_CATEGORIES,
} from '../actions/categories';

export default function categories(state = [], action) {
  const { data } = action;

  switch (action.type) {
    case GET_CATEGORIES:
      console.log('GET_CATEGORIES', state, data);
      return data;
    default:
      return state;
  }
};
