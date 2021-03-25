import React from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import AppComponent from '../../components/app';
import PortfolioApp from '../../components/app/portfolioApp';
import isFullPageRoute from '../../utils/isFullPageRoute';
import '../../styles/global.css';
import '../../styles/common.css';

const App = props => {
  const location = useLocation();
  const isPortfolioApp = !isFullPageRoute(location);
  return isPortfolioApp ? (
    <PortfolioApp {...props} location={location} />
  ) : (
    <AppComponent {...props} location={location} />
  );
};

export default connect(null, null)(App);
