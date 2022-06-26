import React from 'react';
import styles from './components.scss';
import Hero from '../../hero/hero';
import About from '../../about/about';
import Jobs from '../../jobs/jobs';
import Work from '../../work/work';
import Contact from '../../contact/contact';
import Email from '../../email/email';
import Heading from '../../common/heading/heading';
import Button from '../../common/button/button';
import Image from '../../common/image/image';
import Input from '../../common/Input/input';
import Textarea from '../../common/textarea/textarea';
import SimpleIcon from '../../common/simpleicon/simpleicon';
import Footer from '../../footer/footer';
import SectionHeading from '../../heading/heading';
import Menu from '../../menu/menu';
import Projects from '../../projects/projects';
import Social from '../../social/social';
// import Header from '../../header/header';
// import Icon from '../../common/icon/icon';

// eslint-disable-next-line react/prop-types
function ComponentWrapper({ name, description, children }) {
  return (
    <div className={styles.component}>
      <Heading level={2} className={styles.componentName}>
        {name}
      </Heading>
      {description || null}
      {children}
    </div>
  );
}

function Components() {
  return (
    <div id="components" className={styles.components}>
      <ComponentWrapper name="common/button">
        <Button label="Primary Button" />
        <br />
        <Button theme="secondary" label="Secondary Button" />
      </ComponentWrapper>
      <ComponentWrapper name="common/heading">
        <Heading level={1}>h1 heading</Heading>
        <Heading level={2}>h2 heading</Heading>
        <Heading level={3}>h3 heading</Heading>
        <Heading level={4}>h4 heading</Heading>
        <Heading level={5}>h5 heading</Heading>
        <Heading level={6}>h6 heading</Heading>
      </ComponentWrapper>
      <ComponentWrapper name="common/icon" description="need correction">
        {/* <Icon name="fork" /> */}
      </ComponentWrapper>
      <ComponentWrapper name="common/image">
        <Image
          src="https://images.unsplash.com/photo-1611095788646-86737a001141?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          lazy
          alt="demo_image"
        />
      </ComponentWrapper>
      <ComponentWrapper name="common/input">
        <Input placeholder="Enter your name" name="test" id="test" />
      </ComponentWrapper>
      <ComponentWrapper name="common/textarea">
        <Textarea placeholder="Enter your address" name="test" id="test" />
      </ComponentWrapper>
      <ComponentWrapper
        name="common/simpleicon"
        description="Refer simpleicons.scss for available icons. few examples: "
      >
        <SimpleIcon name="user" />
        <SimpleIcon name="people" />
        <SimpleIcon name="calculator" />
        <SimpleIcon name="user-follow" />
        <SimpleIcon name="fire" />
      </ComponentWrapper>
      <ComponentWrapper name="Contact">
        <Contact />
      </ComponentWrapper>

      <ComponentWrapper
        name="Email"
        description="It will render at bottom-right of the page"
      >
        <Email />
      </ComponentWrapper>
      <ComponentWrapper
        name="Social"
        description="It will render at bottom-left of the page"
      >
        <Social />
      </ComponentWrapper>
      <ComponentWrapper name="Footer">
        <Footer />
      </ComponentWrapper>
      <ComponentWrapper
        name="Header"
        description="Header position is fixed so you can see it at top og the page"
      >
        {/* <Header /> */}
      </ComponentWrapper>

      <ComponentWrapper name="Heading">
        <SectionHeading text="Hi there" />
      </ComponentWrapper>
      <ComponentWrapper name="Hero">
        <Hero />
      </ComponentWrapper>
      <ComponentWrapper name="Jobs">
        <Jobs />
      </ComponentWrapper>
      <ComponentWrapper name="Menu" description="Only visible in mobile view">
        <Heading level={5}>Opened Menu</Heading>
        <Menu
          isMenuOpen
          links={[{ name: 'home', to: '/home' }]}
          toggleMenu={() => {}}
        />
        <Heading level={5}>Closed Menu</Heading>
        <Menu
          isMenuOpen={false}
          links={[{ name: 'home', to: '/home' }]}
          toggleMenu={() => {}}
        />
      </ComponentWrapper>
      <ComponentWrapper name="About">
        <Projects />
      </ComponentWrapper>
      <ComponentWrapper name="About">
        <About />
      </ComponentWrapper>

      <ComponentWrapper name="Work">
        <Work />
      </ComponentWrapper>
    </div>
  );
}

export default Components;
