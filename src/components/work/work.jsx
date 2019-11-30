/* eslint-disable react/no-danger */
import React from 'react';
import Section from '../section';
import styles from './work.scss';
import Heading from '../heading/heading';
import Icon from '../common/icon';
import featured1 from '../../assets/images/featured_1.png';

const Work = () => {
  const projects = [
    {
      title: 'OctoProfile',
      description:
        'A nicer look at your GitHub profile and repo stats. Includes data visualizations of your top languages, starred repositories, and sort through your top repos by number of stars, forks, and size.',
      tech: ['Next.js', 'Chart.js', 'GitHub API'],
      links: [
        {
          url: '',
          iconName: 'github',
        },
        {
          url: '',
          iconName: 'external',
        },
      ],
      image: featured1,
      type: 'Featured Project',
    },
    {
      title: 'OctoProfile2',
      description:
        'A nicer look at your GitHub profile and repo stats. Includes data visualizations of your top languages, starred repositories, and sort through your top repos by number of stars, forks, and size.',
      tech: ['Next.js', 'Chart.js', 'GitHub API'],
      links: [
        {
          url: '',
          iconName: 'github',
        },
        {
          url: '',
          iconName: 'external',
        },
      ],
      image: featured1,
      type: 'Featured Project',
    },
  ];

  return (
    <Section id="work">
      <Heading text="Some Things I've Built" />
      {projects.map(({ type, title, description, links, image, tech }) => (
        <div className={styles.work}>
          <div className={styles.content}>
            <h4>{type}</h4>
            <h5>{title}</h5>
            <div className={styles.description}>{description}</div>
            <ul className={styles.list}>
              {tech.map(t => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <div className={styles.link}>
              {links.map(({ url, iconName }) => (
                <a
                  href={url}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  aria-label="GitHub Link"
                >
                  <Icon name={iconName} />
                </a>
              ))}
            </div>
          </div>
          <a href="/" className={styles.imgContainer}>
            <img src={image} className={styles.imgage} alt="" />
          </a>
        </div>
      ))}
    </Section>
  );
};

export default Work;
