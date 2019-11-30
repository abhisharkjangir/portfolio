import React from 'react';
import Section from '../section';
import styles from './hero.scss';

const Hero = () => {
  return (
    <Section id="hero">
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
  );
};

export default Hero;
