import React from 'react';
import { Routes } from 'react-router-dom';
import '../../styles/global.css';
import RouteList from '../../routes';
import getNestedRoutes from '../../utils/getNestedRoutes';

function App() {
  return <Routes>{RouteList.map((route) => getNestedRoutes(route))}</Routes>;
}

export default App;
