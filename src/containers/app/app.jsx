import React from 'react';
import { connect } from 'react-redux';
import AppComponent from '../../components/app';

const App = props => {
  return <AppComponent {...props} />;
};

export default connect(null, null)(App);
