/* eslint-disable react/no-danger */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Section from '../section';
import styles from './projects.scss';
import Icon from '../common/icon';

const Projects = () => {
  const List = [
    {
      name: 'Building a Headless Mobile App CMS From Scratch',
      description:
        'Find out how we built a custom headless CMS with Node, Express, and Firebase for a client project at Upstatement',
      tech: ['node', 'express'],
      links: [
        {
          iconName: 'github',
          url: '',
        },
        {
          iconName: 'github',
          url: '',
        },
      ],
    },
    {
      name: 'Building a Headless Mobile App CMS From Scratch',
      description:
        'Find out how we built a custom headless CMS with Node, Express, and Firebase for a client project at Upstatement',
      tech: ['node', 'express'],
      links: [
        {
          iconName: 'github',
          url: '',
        },
        {
          iconName: 'github',
          url: '',
        },
      ],
    },
    {
      name: 'Building a Headless Mobile App CMS From Scratch',
      description:
        'Find out how we built a custom headless CMS with Node, Express, and Firebase for a client project at Upstatement',
      tech: ['node', 'express'],
      links: [
        {
          iconName: 'github',
          url: '',
        },
        {
          iconName: 'github',
          url: '',
        },
      ],
    },
    {
      name: 'Building a Headless Mobile App CMS From Scratch',
      description:
        'Find out how we built a custom headless CMS with Node, Express, and Firebase for a client project at Upstatement',
      tech: ['node', 'express'],
      links: [
        {
          iconName: 'github',
          url: '',
        },
        {
          iconName: 'github',
          url: '',
        },
      ],
    },
    {
      name: 'Building a Headless Mobile App CMS From Scratch',
      description:
        'Find out how we built a custom headless CMS with Node, Express, and Firebase for a client project at Upstatement',
      tech: ['node', 'express'],
      links: [
        {
          iconName: 'github',
          url: '',
        },
        {
          iconName: 'github',
          url: '',
        },
      ],
    },
    {
      name: 'Building a Headless Mobile App CMS From Scratch',
      description:
        'Find out how we built a custom headless CMS with Node, Express, and Firebase for a client project at Upstatement Find out how we built a custom headless CMS with Node, Express, and Firebase for a client project at Upstatement',
      tech: ['node', 'express'],
      links: [
        {
          iconName: 'github',
          url: '',
        },
        {
          iconName: 'github',
          url: '',
        },
      ],
    },
    {
      name: 'Building a Headless Mobile App CMS From Scratch',
      description:
        'Find out how we built a custom headless CMS with Node, Express, and Firebase for a client project at Upstatement',
      tech: ['node', 'express'],
      links: [
        {
          iconName: 'github',
          url: '',
        },
        {
          iconName: 'github',
          url: '',
        },
      ],
    },
    {
      name: 'Building a Headless Mobile App CMS From Scratch',
      description:
        'Find out how we built a custom headless CMS with Node, Express, and Firebase for a client project at Upstatement',
      tech: ['node', 'express'],
      links: [
        {
          iconName: 'github',
          url: '',
        },
        {
          iconName: 'github',
          url: '',
        },
      ],
    },
  ];
  const preSetVal = List.length > 6 ? 6 : List.length;
  const [count, toggleShow] = useState(preSetVal);
  const sliceValue = count === preSetVal ? preSetVal : List.length;
  return (
    <Section
      id="projects"
      style={{ flexDirection: 'column', alignItems: 'flex-start' }}
    >
      <div className={styles.Project}>
        <h4>Other Noteworthy Projects</h4>

        <div className={styles.center}>
          <Link to="/" className={styles.view}>
            view the archive
          </Link>
        </div>

        <div className={styles.grid}>
          <div className={styles.projects}>
            {List.slice(0, sliceValue).map(
              ({ name, description, tech, links }) => (
                <div className={styles.project}>
                  <div className={styles.projectInner}>
                    <div className={styles.projectHeader}>
                      <div className={styles.folder}>
                        <Icon name="folder" />
                      </div>
                      <div className={styles.projectLinks}>
                        {links.map(({ iconName, url }) => (
                          <a
                            key={iconName}
                            href={url}
                            className={styles.iconLink}
                          >
                            <Icon name={iconName} />
                          </a>
                        ))}
                      </div>
                    </div>
                    <h5 className={styles.projectName}>{name}</h5>
                    <div className={styles.projectDescription}>
                      {description}
                    </div>
                    <ul className={styles.techList}>
                      {tech.map(t => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
        {List.length > 6 && (
          <button
            type="button"
            onClick={() => toggleShow(count === preSetVal ? 'all' : preSetVal)}
            className={styles.moreButton}
          >
            {count === preSetVal ? 'Show More' : 'Show Less'}
          </button>
        )}
      </div>
    </Section>
  );
};

export default Projects;
