import React from 'react';
import PropTypes from 'prop-types';
import Routes from '../../routes';
import '../../styles/bootstrap.css'; // Uncomment if you really want to use bootstrap
import Helmet from '../../containers/common/helmet/helmet';
const App = ({ location }) => {
  return (
    <React.Fragment>
      <div id="main-content">
        <Routes location={location} />
      </div>
      <Helmet />
    </React.Fragment>
  );
};

App.propTypes = {
  location: PropTypes.object.isRequired,
};

App.defaultProps = {};

export default App;
