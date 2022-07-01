import React from 'react';
import PropTypes from 'prop-types';

function Heading({ level, className, children }) {
  const Tag = `h${level}`;
  return <Tag className={className}>{children}</Tag>;
}

Heading.propTypes = {
  children: PropTypes.object.isRequired,
  level: PropTypes.any,
  className: PropTypes.string,
};

Heading.defaultProps = {
  level: 3,
  className: '',
};

export default Heading;
