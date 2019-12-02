import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import AppComponent from '../../components/app';

const App = props => {
  // Scroll into view for hash location
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1); // location.hash without the '#'
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 100);
    }
  });
  return <AppComponent {...props} />;
};

export default connect(null, null)(App);
