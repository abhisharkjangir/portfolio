import React from 'react';
import Icon from '@shared/icon/icon';
import PrimaryLink from '@shared/PrimaryLink/PrimaryLink';
import { socialList } from '../../constants';
import styles from './social.scss';

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
