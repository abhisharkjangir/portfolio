import React from 'react';
import styles from './social.scss';
import { socialList } from '../../constants';
import Icon from '../common/icon/icon';
import PrimaryLink from '../common/PrimaryLink/PrimaryLink';

function Social() {
  return (
    <div id="social" className={styles.social}>
      <ul>
        {socialList.map(({ name, url }) => (
          <li key={name}>
            <PrimaryLink
              href={url}
              target="_blank"
              rel="nofollow noopener noreferrer"
              aria-label={name}
            >
              <Icon name={name} />
            </PrimaryLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Social;
