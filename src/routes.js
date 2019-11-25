/* eslint-disable extra-rules/no-commented-out-code */
import React from 'react';
import universal from 'react-universal-component';
import { Route, Switch } from 'react-router-dom';
import universalOptions from './utils/universalOptions';
import { fetchUsers } from './containers/pages/home/actions';

const Home = universal(
  import(/* webpackChunkName: "home-page" */ './containers/pages/home/home'),
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
    fetchRouteData: [fetchUsers],
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
