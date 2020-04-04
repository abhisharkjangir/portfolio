import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';

const Placeholder = () => (
  <div
    style={{ minHeight: '250px', width: '100%', backgroundColor: '#0a192fb5' }}
  />
);

const Image = ({ src, alt, lazy, className, lazyloadOptions }) => {
  if (lazy) {
    return (
      <LazyLoad {...lazyloadOptions} once>
        <img alt={alt} className={className} src={src} />
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
  lazyloadOptions: {
    offset: 100,
    placeholder: <Placeholder />,
  },
};

export default Image;
