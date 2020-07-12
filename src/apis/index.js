const API_ENDPOINTS = {
  now: 'open-notify/iss-now',
  people: 'open-notify/astros',
  pass: 'open-notify/pass', // Specify lat,long in Query Params
};

const getApiEndPoint = name => (name && API_ENDPOINTS[name]) || '';

export default getApiEndPoint;
