import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import Routes from '../../routes';
import styles from '../../styles/main.scss';
import Helmet from '../../containers/common/helmet/helmet';
import Social from '../social/social.async';
import Email from '../email/email.async';
import Footer from '../footer/footer.async';

const PortfolioApp = ({ location }) => {
  return (
    <div id="PortfolioApp" className={styles.portfolioPortfolioApp}>
      <Header />
      <main id="main-content" className={styles.main}>
        <Routes location={location} />
      </main>
      <Helmet />
      <Social />
      <Email />
      <Footer />
    </div>
  );
};

PortfolioApp.propTypes = {
  location: PropTypes.object.isRequired,
};

PortfolioApp.defaultProps = {};

export default PortfolioApp;
