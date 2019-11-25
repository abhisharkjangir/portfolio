/* eslint-disable no-unused-vars */
import React from 'react';
import { render, hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router/immutable';
import App from './containers/app';
import * as serviceWorker from './serviceWorker';
import createStore from './store';
import rootSaga from './rootSaga';

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

// Create a store and get back itself and its history object
const { store, history } = createStore();

// Run Saga through store object
store.runSaga(rootSaga);

const Application = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
);

// Root Node
const rootNode = document.getElementById('root');

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./containers/app', () => {
    // eslint-disable-next-line global-require
    const webApp = require('./containers/app').default; // eslint-ignore-line
    render(webApp);
  });
}

if (rootNode.hasChildNodes()) {
  // If it's an SSR, we use hydrate to get fast page loads by just
  // attaching event listeners after the initial render
  hydrate(<Application />, rootNode);
} else {
  // If we're not running on the server, just render like normal
  render(<Application />, rootNode);
}
