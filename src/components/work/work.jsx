/* eslint-disable no-shadow */
/* eslint-disable react/no-danger */
import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../section/section';
import styles from './work.scss';
import Heading from '../heading/heading';
import Icon from '../common/icon/icon';
import meuzic from '../../assets/images/meuzic.png';
import wordbook from '../../assets/images/wordbook.png';
import nasa from '../../assets/images/nasa.png';
import iss from '../../assets/images/iss.png';
import json from '../../assets/images/json.png';
import Image from '../common/image/image';

const Work = () => {
  const projects = [
    {
      title: 'International Space Station',
      description:
        'A simple map visual app for current location of space station, astros in space and pass thorough information.',
      tech: ['Open Notify APIs', 'Leaflet JS'],
      image: iss,
      type: 'Latest Project',
      internal: true,
      url: '/app/international-space-station',
      links: [
        {
          url: '/app/international-space-station',
          iconName: 'external',
        },
      ],
      rel: '',
    },

    {
      title: 'JSON Key Path Finder',
      description:
        'An utility to search path of specified key in the given JSON.',
      tech: [],
      image: json,
      type: 'Latest Project',
      internal: true,
      url: '/app/json-key-path-finder',
      links: [
        {
          url: '/app/json-key-path-finder',
          iconName: 'external',
        },
      ],
      rel: '',
    },
    {
      title: 'Meuzic',
      description:
        'Meuzic is a proressive web app for downloading music in MP3 and MP4 format with create playlist feature without signin/signup.',
      tech: ['ReactJS', 'Redux', 'SASS', 'NodeJS'],
      links: [
        {
          url: 'https://meuzic.abhisharjangir.com',
          iconName: 'external',
        },
      ],
      image: meuzic,
      type: 'Featured Project',
      url: 'https://meuzic.abhisharjangir.com',
      rel: 'nofollow noopener noreferrer',
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
      rel: 'nofollow noopener noreferrer',
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
      rel: 'nofollow noopener noreferrer',
    },
  ];

  return (
    <Section id="work">
      <Heading text="Some Things I've Built" />
      {projects.map(
        ({
          type,
          title,
          description,
          links,
          image,
          tech,
          url,
          rel,
          internal,
        }) => (
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
                {links &&
                  links.map(({ url, iconName }) => (
                    <React.Fragment>
                      {!internal ? (
                        <a
                          href={url}
                          target="_blank"
                          rel={rel}
                          aria-label={title}
                        >
                          <Icon name={iconName} />
                        </a>
                      ) : (
                        <Link to={url}>
                          <Icon name={iconName} />
                        </Link>
                      )}
                    </React.Fragment>
                  ))}
              </div>
            </div>
            {!internal ? (
              <a
                href={url}
                target="_blank"
                rel={rel}
                aria-label={title}
                className={styles.imgContainer}
              >
                <Image src={image} className={styles.image} alt={title} />
              </a>
            ) : (
              <Link to={url} className={styles.imgContainer}>
                <Image src={image} className={styles.image} alt={title} />
              </Link>
            )}
          </div>
        )
      )}
    </Section>
  );
};

export default Work;
