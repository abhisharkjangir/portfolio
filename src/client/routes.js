/* eslint-disable extra-rules/no-commented-out-code */
import React from 'react';
import loadable from '@loadable/component';
import { getSSRData } from './modules/portfolio/pages/ssr/actions';
import PortfolioApp from './modules/portfolio/portfolio';
import StandAloneApp from './modules/standAloneApp/standAloneApp';

const Home = loadable(() =>
  import(
    /* webpackChunkName: "home-page" */ './modules/portfolio/pages/home/home'
  )
);

const About = loadable(() =>
  import(
    /* webpackChunkName: "about-page" */ './modules/portfolio/components/about/about'
  )
);

const Experience = loadable(() =>
  import(
    /* webpackChunkName: "experience-page" */ './modules/portfolio/components/jobs/jobs'
  )
);

const Work = loadable(() =>
  import(
    /* webpackChunkName: "work-page" */ './modules/portfolio/components/work/work'
  )
);

const Contact = loadable(() =>
  import(
    /* webpackChunkName: "contact-page" */ './modules/portfolio/components/contact/contact'
  )
);

const Json = loadable(() =>
  import(
    /* webpackChunkName: "json-page" */ './modules/standAloneApp/json/Json'
  )
);

const Notfound = loadable(() =>
  import(
    /* webpackChunkName: "notfound-page" */ './modules/portfolio/pages/notfound/notfound'
  )
);

const SSR = loadable(() =>
  import(/* webpackChunkName: "ssr-page" */ './modules/portfolio/pages/ssr/ssr')
);

const portfolio = {
  path: '/',
  element: <PortfolioApp />,
  childRoutes: [
    {
      element: <Home />,
      index: true,
    },
    {
      path: '/home',
      element: <Home />,
      index: true,
    },
    {
      path: '/about',
      element: <About />,
    },
    {
      path: '/experience',
      element: <Experience />,
    },
    {
      path: '/work',
      element: <Work />,
    },
    {
      path: '/contact',
      element: <Contact />,
    },
    {
      path: '*',
      element: <Notfound />,
    },
  ],
};

const test = {
  path: '/test',
  element: <PortfolioApp />,
  childRoutes: [
    {
      index: true,
      element: <SSR />,
      fetchRouteData: [getSSRData],
    },
    {
      path: '/ssr',
      element: <SSR />,
      fetchRouteData: [getSSRData],
    },
    {
      path: '/theme/:theme',
      element: <Home />,
    },
    {
      path: '*',
      element: <Notfound />,
    },
  ],
};

const app = {
  path: '/app',
  element: <StandAloneApp />,
  childRoutes: [
    {
      element: <Json />,
      index: true,
    },
    {
      path: '/json-key-path-finder',
      element: <Json />,
    },
  ],
};

const RouteList = [portfolio, test, app];

export default RouteList;
