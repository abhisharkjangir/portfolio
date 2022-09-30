import React from 'react';
import styles from './notfound.scss';
import Section from '../../components/section/section';
import Heading from '../../components/heading/heading';

class NotFound extends React.PureComponent {
  render() {
    return (
      <Section>
        <div id="notfound" className={styles.notfound}>
          <Heading text="oh! no" center />
          <h1 className={styles.title}>
            There&lsquo;s not much left here for you.
          </h1>
          <a href="/" theme="secondary" className="mt-8" internal>
            Go Home
          </a>
        </div>
      </Section>
    );
  }
}

export default NotFound;
