import React from 'react';
import styles from './notfound.scss';
import Section from '../../section/section';
import Heading from '../../heading/heading';
import PrimaryLink from '../../common/PrimaryLink/PrimaryLink';
class NotFound extends React.PureComponent {
  render() {
    return (
      <Section>
        <div id="notfound" className={styles.notfound}>
          <Heading text="oh! no" center />
          <h1 className={styles.title}>
            There&lsquo;s not much left here for you.
          </h1>
          <PrimaryLink href="/" className={styles.bigButton}>
            Go Home
          </PrimaryLink>
        </div>
      </Section>
    );
  }
}

export default NotFound;
