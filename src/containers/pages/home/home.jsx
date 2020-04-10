import React from 'react';
import HomeComponent from '../../../components/pages/home/home';

class Home extends React.PureComponent {
  render() {
    return <HomeComponent {...this.props} />;
  }
}

Home.propTypes = {};

export default Home;
