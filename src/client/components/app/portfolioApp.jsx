import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header/header';
import styles from './portfolioApp.scss';
import Social from '../social/social.async';
import Email from '../email/email.async';
import Footer from '../footer/footer.async';

function PortfolioApp() {
  return (
    <>
      <Header />
      <main id="main-content" className={styles.main}>
        <Outlet />
      </main>
      <Social />
      <Email />
      <Footer />
    </>
  );
}

PortfolioApp.propTypes = {};

PortfolioApp.defaultProps = {};

export default PortfolioApp;
