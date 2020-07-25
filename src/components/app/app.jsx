import React from 'react';
import PropTypes from 'prop-types';
import Routes from '../../routes';
import '../../styles/bootstrap.css';

const App = ({ location }) => {
  return (
    <div id="main-content">
      <Routes location={location} />
    </div>
  );
};

App.propTypes = {
  location: PropTypes.object.isRequired,
};

App.defaultProps = {};

export default App;
