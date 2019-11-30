/* eslint-disable react/no-danger */
import React from 'react';
import Section from '../section';
import styles from './contact.scss';
import Heading from '../heading/heading';

const Contact = () => {
  return (
    <Section id="contact">
      <div className={styles.contact}>
        <Heading text="What's Next?" center />
        <h4 className={styles.title}>Get In Touch</h4>
        <p>
          Although I&lsquo;m not currently looking for freelance opportunities,
          my inbox is always open. Whether for a potential project or just to
          say hi, I&lsquo;ll try my best to answer your email!
        </p>
        <a href="/" className={styles.bigButton}>
          Say Hello
        </a>
      </div>
    </Section>
  );
};

export default Contact;
