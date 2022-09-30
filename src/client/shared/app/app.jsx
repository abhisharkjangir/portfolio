import React from 'react';
import { Routes } from 'react-router-dom';
import getNestedRoutes from '@utils/getNestedRoutes';
import RouteList from '@routes/routes';
import Page from '@shared/helmet/helmet';

function App() {
  return (
    <Page>
      <Routes>{RouteList.map((route) => getNestedRoutes(route))}</Routes>
    </Page>
  );
}

export default App;
