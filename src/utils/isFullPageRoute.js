const routeListforFullPage = [
  '/app/international-space-station',
  '/app/json-key-path-finder',
];

const isFullPageRoute = location => {
  return routeListforFullPage.includes(location.pathname);
};

export default isFullPageRoute;
