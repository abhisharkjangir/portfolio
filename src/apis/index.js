const API_ENDPOINTS = {
  users: 'api/users?page=1&per_page=20',
};

const getApiEndPoint = name => (name && API_ENDPOINTS[name]) || '';

export default getApiEndPoint;
