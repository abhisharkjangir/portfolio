import React from 'react';
import styles from './social.scss';
import { socailList } from './constants';
import Icon from '../common/icon';

class Social extends React.PureComponent {
  render() {
    return (
      <div id="social" className={styles.social}>
        <ul>
          {socailList.map(({ name, url }) => (
            <li key={name}>
              <a
                href={url}
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label={name}
              >
                <Icon name={name} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Social;
