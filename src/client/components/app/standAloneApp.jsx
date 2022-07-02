import React from 'react';
import { Outlet } from 'react-router-dom';
import Helmet from '../common/helmet/helmet';
function StandAloneApp() {
  return (
    <>
      <main id="main-content">
        <Outlet />
      </main>
      <Helmet />
    </>
  );
}

StandAloneApp.propTypes = {};

StandAloneApp.defaultProps = {};

export default StandAloneApp;
