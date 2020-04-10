import React from 'react';
import Header from '../header/header';
import Routes from '../../routes';
import styles from '../../styles/main.scss';
import Helmet from '../../containers/common/helmet/helmet';
import Social from '../social/social';
import Email from '../email/email';
import Footer from '../footer/footer';

class App extends React.PureComponent {
  render() {
    return (
      <div id="app" className={styles.app}>
        <Header />
        <div id="main-content" className={styles.main}>
          <Routes />
        </div>
        <Helmet />
        <Social />
        <Email />
        <Footer />
      </div>
    );
  }
}

export default App;
