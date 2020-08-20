import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './home.scss';
import Hero from '../../hero/hero';
import About from '../../about/about';
import Jobs from '../../jobs/jobs';
import Work from '../../work/work';
import Contact from '../../contact/contact';

const Home = () => {
  // Scroll into view for hash location
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1); // location.hash without the '#'
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 100);
    }
  });

  return (
    <div id="home" className={styles.home}>
      <Hero />
      <About />
      <Jobs />
      <Work />
      <Contact />
    </div>
  );
};

export default Home;
