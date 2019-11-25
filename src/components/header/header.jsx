import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.scss';
import Icon from '../common/icon';

const Navigation = [
  {
    name: 'About',
    to: '/',
  },
  {
    name: 'Experience',
    to: '/',
  },
  {
    name: 'Work',
    to: '/',
  },
  {
    name: 'Contact',
    to: '/',
  },
];

class Header extends React.PureComponent {
  render() {
    return (
      <div id="Header" className={styles.header}>
        <nav>
          <div className={styles.logo}>
            <Link to="/" aria-label="home">
              <Icon name="logo" />
            </Link>
          </div>

          <div className={styles.links}>
            <ol>
              {Navigation.map(({ name, to }) => (
                <li key={name}>
                  <Link to={to}>{name}</Link>
                </li>
              ))}
            </ol>
            <div className={styles.resumeButton}>
              <a href="/">Resume</a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
