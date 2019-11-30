import image from '../assets/images/abhishar.jpg';
const description =
  'Abhishar Jangir is a software engineer based in Gurgaon, IN, who specializes in developing websites.';

export default {
  default: {
    title: 'Software Engineer',
    description,
    image,
    twitter: '@abhishar_jangir',
    sep: ' | ',
    siteURL: 'https://abhijangir.me',
    keywords:
      'Abhishar Jangir, Abhishar, Jangir, Front end developer, reactjs developer, web developer, mern developer, javascript developer, abhisharkjangir,abhishar.jangir',
    facebookAppId: 'XXXXXXXXX',
    updated: new Date().toDateString(),
    published: new Date().toDateString(),
    contentType: 'website',
  },
  '/': {
    id: 'home',
    title: 'Abhishar Jangir',
    description,
  },
  '/404': {
    pathname: '/404',
    id: 'notfound',
    title: 'Oops! 404',
    description: 'This is not the web page you are looking for.',
  },
};
