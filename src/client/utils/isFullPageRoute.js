const isFullPageRoute = (location) => {
  return location && location.pathname.startsWith('/app/');
};

export default isFullPageRoute;
