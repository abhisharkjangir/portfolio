import image from '../assets/images/abhishar.jpg';
const description =
  'Abhishar Jangir is a software engineer based in Gurgaon, IN, who specializes in developing websites.';

export default {
  default: {
    title: 'Abhishar Jangir',
    description,
    image,
    twitter: '@abhishar_jangir',
    sep: ' | ',
    siteURL: 'https://abhisharjangir.com',
    keywords:
      'Abhishar Jangir, Abhishar, Jangir, Front end developer, reactjs developer, web developer, mern developer, javascript developer, abhisharkjangir,abhishar.jangir',
    facebookAppId: 'XXXXXXXXX',
    updated: new Date().toDateString(),
    published: new Date().toDateString(),
    contentType: 'website',
  },
  '/': {
    id: 'home',
    title: 'Software Engineer',
    description,
  },
  '/home': {
    id: 'home',
    title: 'Home',
    description,
  },
  '/about': {
    id: 'about',
    title: 'About',
    description,
  },
  '/work': {
    id: 'work',
    title: 'Work',
    description,
  },
  '/contact': {
    id: 'contact',
    title: 'Contact',
    description,
  },
  '/experience': {
    id: 'experience',
    title: 'Experience',
    description,
  },
  '/app/international-space-station': {
    pathname: '/404',
    id: 'iss',
    title: 'International Space Station',
    description:
      'Live location of international space station, astros in space station and pass through infomation based on location.',
  },
  '/404': {
    pathname: '/404',
    id: 'notfound',
    title: 'oh! no',
    description: 'There&lsquo;s not much left here for you.',
  },
};
