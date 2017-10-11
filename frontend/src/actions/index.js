export const CREATE_POST = 'CREATE_POST';

export function createPost(post) {
  console.log('createPost action');
  return {
    type: CREATE_POST,
    post,
  };
};
