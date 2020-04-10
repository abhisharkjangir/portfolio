/* eslint-disable no-shadow */
/* eslint-disable react/no-danger */
import React from 'react';
import Section from '../section/section';
import styles from './work.scss';
import Heading from '../heading/heading';
import Icon from '../common/icon/icon';
import meuzic from '../../assets/images/meuzic.png';
import wordbook from '../../assets/images/wordbook.png';
import nasa from '../../assets/images/nasa.png';
import Image from '../common/image/image';

const Work = () => {
  const projects = [
    {
      title: 'Meuzic',
      description:
        'Meuzic is a proressive web app for downloading music in MP3 and MP4 format with create playlist feature without signin/signup.',
      tech: ['ReactJS', 'Redux', 'SASS', 'NodeJS'],
      links: [
        {
          url: 'https://meuzic.com',
          iconName: 'external',
        },
      ],
      image: meuzic,
      type: 'Featured Project',
      url: 'https://meuzic.com',
    },
    {
      title: 'Nasa Explorer',
      description:
        'A web app for exploring Epic, Apod & Earth which comsumes Nasa APIs.',
      tech: ['ReactJS', 'Material UI', 'Nasa APIs'],
      links: [
        {
          url: 'https://nasa.abhisharjangir.com',
          iconName: 'external',
        },
      ],
      image: nasa,
      type: 'Featured Project',
      url: 'https://nasa.abhisharjangir.com',
    },
    {
      title: 'Word Book',
      description:
        'Word book is a web app for learning daily new english words which have features ie storing favrioute word, google translation, word quiz etc.',
      tech: ['ReactJS', 'Wordnik API', 'SASS'],
      links: [
        {
          url: 'https://wordbook.abhisharjangir.com',
          iconName: 'external',
        },
      ],
      image: wordbook,
      type: 'Featured Project',
      url: 'https://wordbook.abhisharjangir.com',
    },
  ];

  return (
    <Section id="work">
      <Heading text="Some Things I've Built" />
      {projects.map(({ type, title, description, links, image, tech, url }) => (
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
                  aria-label={title}
                >
                  <Icon name={iconName} />
                </a>
              ))}
            </div>
          </div>
          <a
            href={url}
            target="_blank"
            rel="nofollow noopener noreferrer"
            aria-label={title}
            className={styles.imgContainer}
          >
            <Image src={image} className={styles.image} alt="" />
          </a>
        </div>
      ))}
    </Section>
  );
};

export default Work;
