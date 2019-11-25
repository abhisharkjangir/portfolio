import React from 'react';
import PropTypes from 'prop-types';
import GitHub from './github';
import Linkedin from './linkedin';
import Instagram from './instagram';
import Twitter from './twitter';
import Codepen from './codepen';
import Logo from './logo';

const Icon = ({ name }) => {
  switch (name) {
    case 'logo':
      return <Logo />;
    case 'github':
      return <GitHub />;
    case 'linkedin':
      return <Linkedin />;
    case 'instagram':
      return <Instagram />;
    case 'twitter':
      return <Twitter />;
    case 'codepen':
      return <Codepen />;
    default:
      return <GitHub />;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
