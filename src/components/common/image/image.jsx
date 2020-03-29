import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';
import './image.scss';

const Image = ({ src, alt, lazy, className, lazyloadOptions }) => {
  if (lazy) {
    return (
      <LazyLoad {...lazyloadOptions} once>
        <img alt={alt} className={className} src={src} {...lazyloadOptions} />
      </LazyLoad>
    );
  }
  return <img src={src} alt={alt} className={className} />;
};

Image.propTypes = {
  lazy: PropTypes.bool,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  className: PropTypes.string.isRequired,
  lazyloadOptions: PropTypes.object,
};

Image.defaultProps = {
  lazy: true,
  alt: '',
  lazyloadOptions: {},
};

export default Image;
