/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './button.scss';

const Button = ({ id, className, type, label, onClick, disabled, theme }) => {
  const themeClass = styles[theme];
  return (
    // eslint-disable-next-line react/button-has-type
    <button
      id={id}
      disabled={disabled}
      type={type}
      value={label}
      onClick={onClick}
      className={classnames(styles.button, themeClass, className)}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  theme: PropTypes.string,
};

Button.defaultProps = {
  disabled: false,
  type: 'submit',
  theme: 'primary',
};

export default Button;
