/* eslint-disable extra-rules/no-commented-out-code */
import React from 'react';
import universal from 'react-universal-component';
import { Route, Switch } from 'react-router-dom';
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

const Notfound = universal(
  import(
    /* webpackChunkName: "notfound-page" */ './components/pages/notfound/notfound'
  ),
  universalOptions
);

export const RouteList = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/about',
    component: About,
    exact: true,
  },
  {
    path: '/experience',
    component: Experience,
    exact: true,
  },
  {
    path: '/work',
    component: Work,
    exact: true,
  },
  {
    path: '/contact',
    component: Contact,
    exact: true,
  },
  {
    component: Notfound,
  },
];

export default () => (
  <Switch>
    {RouteList.map((route, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <Route key={index} {...route} />
    ))}
  </Switch>
);
