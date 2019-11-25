export default {
  default: {
    title: 'React Go',
    description: 'A starter kit for react app with all the best practices.',
    image: 'https://reactgo.abhijangir.me/logo512.png',
    twitter: '@abhishar_jangir',
    sep: ' - ',
    siteURL: 'https://reactgo.abhijangir.me',
    keywords:
      'react-redux, react starter kit, react redux boilerplate, boilderplate, react server side rendering, react ssr',
    facebookAppId: 'XXXXXXXXX',
    updated: new Date().toDateString(),
    published: new Date().toDateString(),
    contentType: 'website',
  },
  '/': {
    id: 'home',
    title: 'Home',
    description: 'Dynamic data rendering from server side.',
  },
  '/404': {
    pathname: '/404',
    id: 'notfound',
    title: 'Oops! 404',
    description: 'This is not the web page you are lokking for.',
  },
};
