/* eslint-disable react/no-danger */
import React, { useState } from 'react';
import Section from '../section/section';
import styles from './jobs.scss';
import Heading from '../heading/heading';

const TabList = [
  {
    company: 'Bed Bath & Beyond',
    title: ' System Analyst',
    url: 'https://www.bedbathandbeyond.com',
    range: 'Oct 2k18 - Present',
    html:
      '<ul><li>Create several reusable components in ReactJS.</li><li>Build new features and enhancemnents.</li><li>Communicate with onshore business and design team to collect the requirements.</li><li>Code debugging and bug fixing.</li></ul>',
  },
  {
    company: 'Chimes Group',
    title: ' Front End Developer',
    url: 'https://chimesgroup.in/',
    range: 'Aug 2k16 - Oct 2k18',
    html:
      '<ul><li>Worked on different client&lsquo;s websites from scratch i.e Dauble, Dauble Business.</li><li>Build admin dashboard for MuscleMatics.</li><li>Build hybrid andriod & IOS mobile app for dynamic forms to collect client specific information in react native.</li><li>Build react app to draw the construction pipelines on ESRI & LeafLet map.</li></ul>',
  },
  {
    company: 'Medzin',
    title: ' Front End Developer',
    url: 'https://medzin.in/',
    range: 'Nov 2k15 - Jul 2k16',
    html:
      '<ul><li>Build company&lsquo;s websites ie Medzin, Medzin Business </li><li>Build dashboard to manage Pharmacies, Doctors, Labs, Medicines & orders.</li></ul>',
  },
];

const Jobs = () => {
  const [selectedTab, selectTab] = useState(1);
  const { title, company, url, range, html } = TabList[selectedTab - 1];

  return (
    <Section
      id="experience"
      style={{ position: 'relative', maxWidth: '700px' }}
    >
      <Heading text="Where I've Worked" />
      <div className={styles.jobTabs}>
        <ul className={styles.tablist}>
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
