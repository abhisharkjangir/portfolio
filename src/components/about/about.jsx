import React from 'react';
import Section from '../section';
import styles from './about.scss';
import abhishar from '../../assets/images/abhishar.jpg';
import Heading from '../heading/heading';
const About = () => {
  const Skills = [
    'JavaScript (ES6+)',
    'HTML & (S)CSS',
    'React',
    'Vue',
    'Node.js',
    'Express',
    'GraphQL',
    'NativeScript',
  ];
  return (
    <Section id="about" style={{ position: 'relative' }}>
      <Heading text="About Me" />
      <div className={styles.aboutFlexContainer}>
        <div className={styles.aboutContent}>
          <p>
            Hello! I&lsquo;m Abhishar, a software engineer based in Boston, MA
            who enjoys building things that live on the internet. I develop
            exceptional websites and web apps that provide intuitive,
            pixel-perfect user interfaces with efficient and modern backends.
          </p>
          <p>
            Shortly after graduating from
            <a
              href="https://www.ccis.northeastern.edu/"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              Northeastern University
            </a>
            , I joined the engineering team at
            <a
              href="https://www.upstatement.com/"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              Upstatement
            </a>
            where I work on a wide variety of interesting and meaningful
            projects on a daily basis.
          </p>
          <p>
            Here are a few technologies I&lsquo;ve been working with recently:
          </p>
          <ul>
            {Skills.map(skill => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className={styles.aboutPic}>
          <a href="/">
            <img src={abhishar} alt="" />
          </a>
        </div>
      </div>
    </Section>
  );
};

export default About;
