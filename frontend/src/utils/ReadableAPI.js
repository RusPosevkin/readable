const api = 'http://localhost:3001';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  Authorization: 'cqhou44yhla8ib4f',
};

export const getCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories);

export const getAllPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json());

export const getPostsByCategory = (category) =>
  fetch(`${api}/${category}/posts`, { headers })
    .then(res => res.json());

export const getPost = (id) =>
  fetch(`${api}/posts/${id}`, { headers })
    .then(res => res.json());

export const deletePost = (id) =>
  fetch(`${api}/posts/${id}`, {
      method: 'DELETE',
      headers,
    })
    .then(res => res.json());

export const createPost = (post) =>
  fetch(`${api}/posts/`, {
      method: 'POST',
      headers,
      body: JSON.stringify(post),
    })
    .then(res => res.json());

export const votePost = (id, post) =>
  fetch(`${api}/posts/${id}`, {
      method: 'POST',
      headers,
      body: JSON.stringify(post),
    })
    .then(res => res.json());

export const updatePost = (id, data) =>
  fetch(`${api}/posts/${id}`, {
      method: 'PUT',
      headers,
      body: JSON.stringify(data),
    })
    .then(res => res.json());

export const getPostComments = (id) =>
  fetch(`${api}/posts/${id}/comments`, { headers })
    .then(res => res.json());

export const getComment = (id) =>
  fetch(`${api}/comments/${id}`, { headers })
    .then(res => res.json());

export const updateComment = (id, data) =>
    fetch(`${api}/comments/${id}`, {
        method: 'PUT',
        headers,
        body: JSON.stringify(data),
      })
      .then(res => res.json());

export const createComment = (comment) =>
  fetch(`${api}/comments`, {
      method: 'POST',
      headers,
      body: JSON.stringify(comment),
    })
    .then(res => res.json());

export const voteComment = (id, comment) =>
  fetch(`${api}/comments/${id}`, {
      method: 'POST',
      headers,
      body: JSON.stringify(comment),
    })
    .then(res => res.json());

export const deleteComment = (id) =>
  fetch(`${api}/comments/${id}`, {
      method: 'DELETE',
      headers,
    })
    .then(res => res.json());
