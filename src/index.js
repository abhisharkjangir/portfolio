/* eslint-disable no-unused-vars */
import React, { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './containers/app';
import createStore from './store';

// Create a store and get back itself and its history object
const { store, history } = createStore();

const Application = () => (
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter history={history}>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);

// Root Node
const rootNode = document.getElementById('root');
if (process.env.NODE_ENV === 'development' && module.hot) {
  const root = createRoot(rootNode);
  module.hot.accept('./components/app/index', () => {
    root.render(<Application />);
  });
}

if (rootNode.hasChildNodes()) {
  // If it's an SSR, we use hydrate to get fast page loads by just
  // attaching event listeners after the initial render
  hydrateRoot(rootNode, <Application />);
} else {
  const root = createRoot(rootNode);
  //  If we're not running on the server, just render like normal
  root.render(<Application />);
}
