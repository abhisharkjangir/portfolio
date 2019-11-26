import React from 'react';
import PropTypes from 'prop-types';
import styles from './section.scss';

const Section = ({ children, style }) => {
  const classNames = styles.section;
  return (
    <div className={classNames} style={style}>
      {children}
    </div>
  );
};

Section.propTypes = {
  children: PropTypes.object.isRequired,
  style: PropTypes.object,
};

Section.defaultProps = {
  style: {},
};

export default Section;
