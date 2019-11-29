import React from 'react';
import PropTypes from 'prop-types';
import styles from './section.scss';

const Section = ({ children, style, id }) => {
  const classNames = styles.section;
  return (
    <div id={id} className={classNames} style={style}>
      {children}
    </div>
  );
};

Section.propTypes = {
  children: PropTypes.object.isRequired,
  style: PropTypes.object,
  id: PropTypes.object,
};

Section.defaultProps = {
  style: {},
  id: '',
};

export default Section;
