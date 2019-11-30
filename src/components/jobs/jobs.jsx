/* eslint-disable react/no-danger */
import React, { useState } from 'react';
import Section from '../section';
import styles from './jobs.scss';
import Heading from '../heading/heading';

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

export default Jobs;
