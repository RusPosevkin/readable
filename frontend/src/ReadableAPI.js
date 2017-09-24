const api = "http://localhost:3001";

const headers = {
  'Accept': 'application/json',
  'Authorization': Math.random().toString(36).substr(-8)
};

export const getCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories);
