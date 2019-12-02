import React from 'react';
// import { Link } from 'react-router-dom';
import styles from './footer.scss';
// import Icon from '../common/icon';

class Footer extends React.PureComponent {
  render() {
    const date = new Date();

    return (
      <div id="Footer" className={styles.footer}>
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
