import React from 'react';
// import { Link } from 'react-router-dom';
import styles from './footer.scss';
import Icon from '../common/icon';

class Footer extends React.PureComponent {
  render() {
    return (
      <div id="Footer" className={styles.footer}>
        <div className={styles.content}>
          <a href="/" aria-label="github">
            <span>Designed & Built by Abhishar Jangir</span>
            <div>
              <span>
                <Icon name="github" />
                <span>400</span>
              </span>
              <span>
                <Icon name="github" />
                <span>400</span>
              </span>
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
