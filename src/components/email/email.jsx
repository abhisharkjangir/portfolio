import React from 'react';
import styles from './email.scss';

class Email extends React.PureComponent {
  render() {
    return (
      <div id="email" className={styles.email}>
        <div>
          <a href="mailto:abhisharjangir@ymail.com">abhisharjangir@ymail.com</a>
        </div>
      </div>
    );
  }
}

export default Email;
