import React from 'react';

import styles from './home.scss';
import Hero from '../../hero/hero';
import About from '../../about/about';
import Jobs from '../../jobs/jobs';
import Work from '../../work/work';
import Projects from '../../projects/projects';
import Contact from '../../contact/contact';

class Home extends React.PureComponent {
  render() {
    return (
      <div id="home" className={styles.home}>
        <Hero />
        <About />
        <Jobs />
        <Work />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default Home;
