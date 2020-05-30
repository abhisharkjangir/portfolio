import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../header/header';
import Routes from '../../routes';
import styles from '../../styles/main.scss';
import Helmet from '../../containers/common/helmet/helmet';
import Social from '../social/social.async';
import Email from '../email/email.async';
import Footer from '../footer/footer.async';
import isFullPageRoute from '../../utils/isFullPageRoute';
// const styles = {};
const App = () => {
  const location = useLocation();
  const isFullPage = isFullPageRoute(location);
  return (
    <div id="app" className={styles.app}>
      {!isFullPage && <Header />}
      <div id="main-content" className={!isFullPage && styles.main}>
        <Routes location={location} />
      </div>
      <Helmet />
      {!isFullPage && <Social />}
      {!isFullPage && <Email />}
      {!isFullPage && <Footer />}
    </div>
  );
};

export default App;
