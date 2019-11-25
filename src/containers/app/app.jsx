import React from 'react';
import { connect } from 'react-redux';
import AppComponent from '../../components/app';

class App extends React.PureComponent {
  render() {
    return <AppComponent {...this.props} />;
  }
}

export default connect(null, null)(App);
