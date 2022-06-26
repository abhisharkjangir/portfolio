import React from 'react';
import PropTypes from 'prop-types';
import AppRoutes from '../../routes';
import Helmet from '../common/helmet/helmet';
function App({ location }) {
  return (
    <>
      <main id="main-content">
        <AppRoutes location={location} />
      </main>
      <Helmet />
    </>
  );
}

App.propTypes = {
  location: PropTypes.object.isRequired,
};

App.defaultProps = {};

export default App;
