import React from 'react';
import { Routes } from 'react-router-dom';
import '../../styles/global.css';
import RouteList from '../../routes';
import getNestedRoutes from '../../utils/getNestedRoutes';
import Page from '../common/helmet/helmet';

function App() {
  return (
    <Page>
      <Routes>{RouteList.map((route) => getNestedRoutes(route))}</Routes>
    </Page>
  );
}

export default App;
