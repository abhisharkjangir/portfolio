const API_ENDPOINTS = {};

const getApiEndPoint = name => (name && API_ENDPOINTS[name]) || '';

export default getApiEndPoint;
