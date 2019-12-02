import React from 'react';
import { Link } from 'react-router-dom';
import styles from './notfound.scss';
import Section from '../../section';
import Heading from '../../heading/heading';
class NotFound extends React.PureComponent {
  render() {
    return (
      <Section>
        <div id="notfound" className={styles.notfound}>
          <Heading text="oh! no" center />
          <h1 className={styles.title}>
            There&lsquo;s not much left here for you.
          </h1>
          <Link to="/" className={styles.bigButton}>
            Go Home
          </Link>
        </div>
      </Section>
    );
  }
}

export default NotFound;
