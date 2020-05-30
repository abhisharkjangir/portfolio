const API_ENDPOINTS = {
  now: '/api/open-notify/iss-now',
  people: '/api/open-notify/astros',
  pass: 'https://api.abhisharjangir.com/open-notify/pass', // Specify lat,long in Query Params
};

const getApiEndPoint = name => (name && API_ENDPOINTS[name]) || '';

export default getApiEndPoint;
