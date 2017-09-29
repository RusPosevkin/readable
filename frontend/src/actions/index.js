export const CREATE_POST = 'CREATE_POST';

export function createPost (post) {
  return {
    type: CREATE_POST,
    post,
  }
};
