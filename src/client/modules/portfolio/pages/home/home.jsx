import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './home.scss';
import Hero from '../../components/hero/hero';
import About from '../../components/about/about';
import Jobs from '../../components/jobs/jobs';
// import Work from '../../components/work/work';
import Contact from '../../components/contact/contact';

function Home() {
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
      {/* <Work /> */}
      <Contact />
    </div>
  );
}

export default Home;
