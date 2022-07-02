/* eslint-disable extra-rules/no-commented-out-code */
import React from 'react';
import loadable from '@loadable/component';
import { getSSRData } from './components/pages/ssr/actions';
import PortfolioApp from './components/app/portfolioApp';
import StandAloneApp from './components/app/standAloneApp';

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
      path: '/components',
      element: <Comoponents />,
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
