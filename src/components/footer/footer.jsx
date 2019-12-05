import React from 'react';
import styles from './footer.scss';
import Icon from '../common/icon';
import { socialList } from '../../constants';

class Footer extends React.PureComponent {
  render() {
    const date = new Date();

    return (
      <div id="Footer" className={styles.footer}>
        <div className={styles.socialContainer}>
          <ul className={styles.list}>
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
        <div className={styles.content}>
          <a href="/" aria-label="github">
            <span>Made with &#10084; by Abhishar Jangir</span>
            <div>
              <span>
                Copyright &copy;
                {date.getFullYear()}
              </span>
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
