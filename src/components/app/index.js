import React from 'react';
import { useLocation } from 'react-router-dom';
import AppComponent from './app';
import PortfolioApp from './portfolioApp';
import isFullPageRoute from '../../utils/isFullPageRoute';
import '../../styles/global.css';

const App = props => {
  const location = useLocation();
  const isPortfolioApp = !isFullPageRoute(location);
  return isPortfolioApp ? (
    <PortfolioApp {...props} location={location} />
  ) : (
    <AppComponent {...props} location={location} />
  );
};

export default App;
