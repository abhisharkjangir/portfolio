import React from 'react';
import PrimaryLink from '../common/PrimaryLink/PrimaryLink';
import Section from '../section/section';
import styles from './hero.scss';

const Hero = () => {
  return (
    <Section id="hero" className={styles.section}>
      <h1 className={styles.overline}>Hi, my name is</h1>
      <h2 className={styles.title}>Abhishar Jangir.</h2>
      <h3 className={styles.subtitle}>
        I write code for websites & mobile apps.
      </h3>
      <div className={styles.description}>
        <p>
          I&lsquo;m a Full Stack developer based in Gurugram, India,
          specializing in developing high-quality websites with latest
          technologies & best practices.
        </p>
      </div>
      <div>
        <PrimaryLink
          className={styles.getintouch}
          href="mailto:abhisharjangir@ymail.com?subject=Get In Touch&body=Hello Abhishar,"
        >
          Get In Touch
        </PrimaryLink>
      </div>
    </Section>
  );
};

export default Hero;
