/* eslint-disable no-unused-vars */
import React, { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router/immutable';
import App from './containers/app';
import createStore from './store';
import rootSaga from './rootSaga';

// Create a store and get back itself and its history object
const { store, history } = createStore();

// Run Saga through store object
store.runSaga(rootSaga);

const Application = () => (
  <StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  </StrictMode>
);

// Root Node
const rootNode = document.getElementById('root');
const root = createRoot(rootNode);
if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./containers/app/index', () => {
    root.render(<Application />);
  });
}

if (rootNode.hasChildNodes()) {
  // If it's an SSR, we use hydrate to get fast page loads by just
  // attaching event listeners after the initial render
  hydrateRoot(rootNode, <Application />);
} else {
  // If we're not running on the server, just render like normal
  root.render(<Application />);
}
