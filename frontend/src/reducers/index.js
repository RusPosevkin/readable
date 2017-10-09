import {
  CREATE_POST,
} from '../actions';

function posts(state = {}, action) {
  switch (action.type) {
    case CREATE_POST :
      const { post } = action;
      console.log('CREATE_POST');

      return {
        ...state,
        [post.id]: post,
      };
    default :
      return state;
  }
};

export default posts;
