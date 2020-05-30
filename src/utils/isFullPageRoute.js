const routeListforFullPage = ['/app/international-space-station'];

const isFullPageRoute = location => {
  return routeListforFullPage.includes(location.pathname);
};

export default isFullPageRoute;
