import React from 'react';
import PropTypes from 'prop-types';
import styles from './section.scss';

const Section = ({ children }) => {
  return <div className={styles.section}>{children}</div>;
};

Section.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Section;
