/* eslint-disable extra-rules/no-commented-out-code */
import React from 'react';
import universal from 'react-universal-component';
import { Route, Routes } from 'react-router-dom';
import universalOptions from './utils/universalOptions';

const Home = universal(
  import(/* webpackChunkName: "home-page" */ './containers/pages/home/home'),
  universalOptions
);

const About = universal(
  import(/* webpackChunkName: "about-page" */ './components/about/about'),
  universalOptions
);

const Experience = universal(
  import(/* webpackChunkName: "experience-page" */ './components/jobs/jobs'),
  universalOptions
);

const Work = universal(
  import(/* webpackChunkName: "work-page" */ './components/work/work'),
  universalOptions
);

const Contact = universal(
  import(/* webpackChunkName: "contact-page" */ './components/contact/contact'),
  universalOptions
);

const Json = universal(
  import(/* webpackChunkName: "json-page" */ './components/pages/json/Json'),
  universalOptions
);

const Comoponents = universal(
  import(
    /* webpackChunkName: "comoponents-page" */ './components/pages/components/components'
  ),
  universalOptions
);

const Notfound = universal(
  import(
    /* webpackChunkName: "notfound-page" */ './components/pages/notfound/notfound'
  ),
  universalOptions
);

export const RouteList = [
  {
    path: '/',
    element: Home,
    exact: true,
  },
  {
    path: '/home',
    element: Home,
    exact: true,
  },
  {
    path: '/about',
    element: About,
    exact: true,
  },
  {
    path: '/theme/:theme',
    element: Home,
    exact: true,
  },
  {
    path: '/experience',
    element: Experience,
    exact: true,
  },
  {
    path: '/work',
    element: Work,
    exact: true,
  },
  {
    path: '/contact',
    element: Contact,
    exact: true,
  },
  {
    path: '/app/json-key-path-finder',
    element: Json,
    exact: true,
  },
  {
    path: '/components',
    element: Comoponents,
    exact: true,
  },
  {
    path: '*',
    element: Notfound,
  },
];

const getElement = route => {
  const Element = route.element;
  return <Element />;
};

export default () => (
  <Routes>
    {RouteList.map((route, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <Route key={index} {...route} element={getElement(route)} />
    ))}
  </Routes>
);
