import React from 'react';
import PropTypes from 'prop-types';
import styles from './container.scss';

const Container = ({ fluid = false, children }) => {
  const className = fluid ? styles['container-fluid'] : styles.container;
  return <div className={className}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.object.isRequired,
  fluid: PropTypes.bool,
};

Container.defaultProps = {
  fluid: false,
};

export default Container;
