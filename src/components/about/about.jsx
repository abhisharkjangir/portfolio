import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../section/section';
import styles from './about.scss';
import abhishar from '../../assets/images/abhishar.jpg';
import Heading from '../heading/heading';
import Image from '../common/image/image';

const About = () => {
  const Skills = [
    'JavaScript (ES6+)',
    'ReactJS',
    'React Native',
    'Redux',
    'Webpack',
    'Angular v1',
    'HTML5 & CSS3',
    'NodeJS',
    'MongoDB',
  ];
  return (
    <Section id="about" style={{ position: 'relative' }}>
      <Heading text="About Me" />
      <div className={styles.aboutFlexContainer}>
        <div className={styles.aboutContent}>
          <p>
            Hello! I&lsquo;m Abhishar, a front-end developer based in Gurgaon,
            India, who is happily writing code for mobile, tablet & desktop
            websites since 2015.
          </p>
          <p>
            After my graduation from
            <a
              href="https://bkbiet.ac.in/"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              BKBIET, Pilani
            </a>
            , I started my career as a web designer and today, after 4+ years,
            as a front-end developer, I worked on a wide variety of web apps.
          </p>
          <p>
            Currently, I&lsquo;m working with
            <a
              href="https://www.bedbathandbeyond.com/"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              Bed Bath & Beyond
            </a>
            .
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
          <Link to="/" aria-label="Display Picture">
            <Image src={abhishar} alt="Abhishar Jangir" />
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default About;
