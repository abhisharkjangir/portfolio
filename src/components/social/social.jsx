import React from 'react';
import styles from './social.scss';
import { socialList } from '../../constants';
import Icon from '../common/icon/icon';

class Social extends React.PureComponent {
  render() {
    return (
      <div id="social" className={styles.social}>
        <ul>
          {socialList.map(({ name, url }) => (
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
