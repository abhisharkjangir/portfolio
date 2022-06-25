import React from 'react'
import PropTypes from 'prop-types'
import Header from '../header/header'
import Routes from '../../routes'
import styles from './portfolioApp.scss'
import Helmet from '../common/helmet/helmet'
import Social from '../social/social.async'
import Email from '../email/email.async'
import Footer from '../footer/footer.async'

const PortfolioApp = ({ location }) => {
  return (
    <>
      <Header />
      <main id="main-content" className={styles.main}>
        <Routes location={location} />
      </main>
      <Helmet />
      <Social />
      <Email />
      <Footer />
    </>
  )
}

PortfolioApp.propTypes = {
  location: PropTypes.object.isRequired
}

PortfolioApp.defaultProps = {}

export default PortfolioApp
