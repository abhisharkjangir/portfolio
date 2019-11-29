/* eslint-disable react/no-danger */
import React, { useState } from 'react';
import styles from './home.scss';
import Section from '../../section';
import abhishar from '../../../assets/images/abhishar.jpg';
import Icon from '../../common/icon';
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

// eslint-disable-next-line react/prop-types
const Heading = ({ text, center }) => {
  return (
    <h3 className={center ? styles.headingCenter : styles.heading}>{text}</h3>
  );
};

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

const Jobs = () => {
  const [selectedTab, selectTab] = useState(1);
  const TabList = [
    {
      company: 'Upstatement',
      title: ' Engineer',
      url: '',
      range: 'May 2018 - Present',
      html:
        '<ul><li>Write modern, performant, maintainable code for a diverse array of client and internal projects</li><li>Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, Wordpress, Prismic, and Netlify</li><li>Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis</li></ul>',
    },
    {
      company: 'Scout',
      title: ' av',
      url: '',
      range: '10-13',
    },
    {
      company: 'Apple',
      title: ' av',
      url: '',
      range: '10-13',
    },
    {
      company: 'Scout',
      title: ' av',
      url: '',
      range: '10-13',
    },
    {
      company: 'Starry',
      title: ' av',
      url: '',
      range: '10-13',
    },
    {
      company: 'MullenLowe',
      title: ' av',
      url: '',
      range: '10-13',
    },
  ];
  const { title, company, url, range, html } = TabList[selectedTab - 1];

  return (
    <Section
      id="experience"
      style={{ position: 'relative', maxWidth: '700px' }}
    >
      <Heading text="Where I've Worked" />
      <div className={styles.jobTabs}>
        <ul>
          {TabList.map((tab, i) => (
            <li>
              <button
                onClick={() => selectTab(i + 1)}
                type="button"
                className={
                  selectedTab === i + 1 ? styles.buttonActive : undefined
                }
              >
                {tab.company}
              </button>
            </li>
          ))}
        </ul>
        <div className={styles.jobContent}>
          <div className={styles.jobTabContent}>
            <h4 className={styles.jobTitle}>
              <span>{title}</span>
              <span className={styles.jobCompany}>
                <span>&nbsp;@&nbsp;</span>
                <a
                  href={url}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  {company}
                </a>
              </span>
            </h4>
            <h5 className={styles.jobDetail}>
              <span>{range}</span>
            </h5>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>
      </div>
    </Section>
  );
};

const Work = () => {
  return (
    <Section id="work">
      <Heading text="Some Things I've Built" />
      <div className={styles.work}>
        <h4>Featured Project</h4>
        <h5>OctoProfile</h5>
        <div className={styles.description}>
          A nicer look at your GitHub profile and repo stats. Includes data
          visualizations of your top languages, starred repositories, and sort
          through your top repos by number of stars, forks, and size.
        </div>
        <ul className={styles.list}>
          <li>Next.js</li>
          <li>Chart.js</li>
          <li>GitHub API</li>
        </ul>
        <div className={styles.link}>
          <a
            href="/"
            target="_blank"
            rel="nofollow noopener noreferrer"
            aria-label="GitHub Link"
          >
            <Icon name="github" />
          </a>
        </div>
      </div>
    </Section>
  );
};

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
class Home extends React.PureComponent {
  render() {
    return (
      <div id="home" className={styles.home}>
        <Hero />
        <About />
        <Jobs />
        <Work />
        <Contact />
      </div>
    );
  }
}

export default Home;
