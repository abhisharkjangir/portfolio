import React from 'react';
import PropTypes from 'prop-types';
import styles from './section.scss';

function Section({ children, style, id, className }) {
  let classNames = '';
  if (className) {
    classNames = `${styles.section} ${className}`;
  } else {
    classNames = styles.section;
  }
  return (
    <div id={id} className={classNames} style={style}>
      {children}
    </div>
  );
}

Section.propTypes = {
  children: PropTypes.object.isRequired,
  style: PropTypes.object,
  id: PropTypes.object,
  className: PropTypes.string,
};

Section.defaultProps = {
  style: {},
  id: '',
  className: null,
};

export default Section;
