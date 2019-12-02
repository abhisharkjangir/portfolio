import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.scss';
import Icon from '../common/icon';
import throttle from '../../utils/throttle';
import isServer from '../../utils/isServer';
import resume from '../../assets/resume.pdf';
const Navigation = [
  {
    name: 'About',
    to: '/#about',
  },
  {
    name: 'Experience',
    to: '/#experience',
  },
  {
    name: 'Work',
    to: '/#work',
  },
  {
    name: 'Contact',
    to: '/#contact',
  },
];

class Header extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      scrollDirection: 'none',
      lastScrollTop: 0,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', () => throttle(this.handleScroll()));
  }

  handleScroll = () => {
    if (isServer) return;
    const DELTA = 5;
    const { scrollDirection, lastScrollTop } = this.state;
    const { scrollY, innerHeight } = window;
    if (Math.abs(lastScrollTop - scrollY) <= DELTA) return;
    if (scrollY < DELTA) {
      this.setState({ scrollDirection: 'none' });
    } else if (scrollY > lastScrollTop && scrollY > 100) {
      if (scrollDirection !== 'down')
        this.setState({ scrollDirection: 'down' });
    } else if (scrollY + innerHeight < document.body.scrollHeight) {
      if (scrollDirection !== 'up') this.setState({ scrollDirection: 'up' });
    }
    this.setState({ lastScrollTop: scrollY });
  };

  getHeaderStyle = () => {
    const { scrollDirection } = this.state;
    return {
      height: scrollDirection === 'none' ? '100px' : '70px',
      boxShadow:
        scrollDirection === 'up' ? `0 10px 30px -10px #020c1bb3` : 'none',
      transform: `translateY(${scrollDirection === 'down' ? '-70px' : '0px'})`,
    };
  };

  render() {
    return (
      <div id="Header" className={styles.header} style={this.getHeaderStyle()}>
        <nav>
          <div className={styles.logo}>
            <Link to="/" aria-label="home">
              <Icon name="logo" />
              <span>A</span>
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
              <a href={resume}>Resume</a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
