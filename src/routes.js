/* eslint-disable extra-rules/no-commented-out-code */
import React from 'react';
// import universal from 'react-universal-component';
import loadable from '@loadable/component';
import { Route, Routes } from 'react-router-dom';
// import { ReportChunks } from 'react-universal-component';
import { getSSRData } from './components/pages/ssr/actions';

const Home = loadable(() =>
  import(/* webpackChunkName: "home-page" */ './components/pages/home/home')
);

const About = loadable(() =>
  import(/* webpackChunkName: "about-page" */ './components/about/about')
);

const Experience = loadable(() =>
  import(/* webpackChunkName: "experience-page" */ './components/jobs/jobs')
);

const Work = loadable(() =>
  import(/* webpackChunkName: "work-page" */ './components/work/work')
);

const Contact = loadable(() =>
  import(/* webpackChunkName: "contact-page" */ './components/contact/contact')
);

const Json = loadable(() =>
  import(/* webpackChunkName: "json-page" */ './components/pages/json/Json')
);

const Comoponents = loadable(() =>
  import(
    /* webpackChunkName: "comoponents-page" */ './components/pages/components/components'
  )
);

const Notfound = loadable(() =>
  import(
    /* webpackChunkName: "notfound-page" */ './components/pages/notfound/notfound'
  )
);

const SSR = loadable(() =>
  import(/* webpackChunkName: "ssr-page" */ './components/pages/ssr/ssr')
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
    path: '/ssr',
    element: SSR,
    fetchRouteData: [getSSRData],
  },
  {
    path: '*',
    element: Notfound,
  },
];

const getElement = route => {
  const Element = route.element;
  return (
    // <React.Suspense fallback={null}>
    <Element />
    // </React.Suspense>
  );
};

export default () => (
  <Routes>
    {RouteList.map(route => (
      // eslint-disable-next-line react/no-array-index-key
      <Route key={route.path} {...route} element={getElement(route)} />
    ))}
  </Routes>
);
