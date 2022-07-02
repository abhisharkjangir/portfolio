import React from 'react';
import { Outlet } from 'react-router-dom';
function StandAloneApp() {
  return (
    <main id="main-content">
      <Outlet />
    </main>
  );
}

StandAloneApp.propTypes = {};

StandAloneApp.defaultProps = {};

export default StandAloneApp;
