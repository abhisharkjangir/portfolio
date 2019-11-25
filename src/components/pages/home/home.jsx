import React from 'react';
import styles from './home.scss';
import Section from '../../section';

class Home extends React.PureComponent {
  render() {
    return (
      <div id="home" className={styles.home}>
        <Section>
          <h1 className={styles.overline}>Hi, my name is</h1>
          <h2 className={styles.title}>Abhishar Jangir.</h2>
          <h3 className={styles.subtitle}>I build things for the web.</h3>
          <div className={styles.description}>
            <p>
              {`I'm a software engineer based in India, MA specializing in building
          (and occasionally designing) exceptional, high-quality websites and
          applications.`}
            </p>
          </div>
          <div>
            <a className={styles.getintouch} href="/">
              Get In Touch
            </a>
          </div>
        </Section>
        <Section>
          <h1 className={styles.overline}>Hi, my name is</h1>
          <h2 className={styles.title}>Abhishar Jangir.</h2>
          <h3 className={styles.subtitle}>I build things for the web.</h3>
          <div className={styles.description}>
            <p>
              {`I'm a software engineer based in India, MA specializing in building
          (and occasionally designing) exceptional, high-quality websites and
          applications.`}
            </p>
          </div>
          <div>
            <a className={styles.getintouch} href="/">
              Get In Touch
            </a>
          </div>
        </Section>
      </div>
    );
  }
}

export default Home;
