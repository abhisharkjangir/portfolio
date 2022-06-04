/* eslint-disable jsx-a11y/href-no-hash */
import fs from 'fs';
import path from 'path';
// React requirements
import React, { StrictMode } from 'react';
import { matchPath } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import Helmet from 'react-helmet';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import { StaticRouter } from 'react-router-dom/server';
import { flushChunkNames } from 'react-universal-component/server';
import flushChunks from 'webpack-flush-chunks';

import createStore from '../src/store';
import App from '../src/components/app';
import { RouteList } from '../src/routes';
import { setHelmetInfo } from '../src/components/common/helmet/actions';
import Meta from '../src/utils/meta';

const isDev = process.env.NODE_ENV === 'development';

const inlineResource = (resourcePath, encoding = 'utf8') => {
  let resource = '';

  try {
    resource = fs.readFileSync(
      path.resolve(process.cwd(), `./public/dist/client/${resourcePath}`),
      encoding
    );
  } catch (e) {
    console.log('Error loading:', resourcePath, e.stack); // eslint-disable-line no-console
  }
  return resource;
};

const googleAnalyticsScripts = !isDev
  ? `
<script>
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-155127051-1');
</script> <script async src="https://www.googletagmanager.com/gtag/js?id=UA-155127051-1"></script>
`
  : '';

/*
    A simple helper function to prepare the HTML markup. This loads:
      - Page title
      - SEO meta tags
      - Preloaded state (for Redux) depending on the current route
      - Code-split script tags depending on the current route
  */
export const injectHTML = (
  htmlData,
  {
    html,
    title,
    meta,
    body,
    scripts = '',
    state,
    style = '',
    preloadScripts,
    theme,
  }
) => {
  let data = htmlData;
  data = data.replace('<body>', `<body class="${theme}">`);
  data = data.replace('<html>', `<html ${html}>`);
  data = data.replace(/<title>.*?<\/title>/g, title);
  data = data.replace(
    '</head>',
    `${meta}${preloadScripts}<style>${style}</style></head>`
  );
  data = data.replace(
    '<div id="root"></div>',
    `<div id="root">${body}</div><script>window.__PRELOADED_STATE__ = ${state}</script>`
  );
  data = data.replace('</body>', `${scripts}${googleAnalyticsScripts}</body>`);

  return data;
};

// LOADER
export default ({ clientStats }) => (req, res) => {
  fs.readFile(
    path.resolve(process.cwd(), './public/index.html'),
    'utf8',
    // eslint-disable-next-line consistent-return
    (err, htmlFileData) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.error(
          '::::::: Error while reading index.html file from /public',
          err
        );
        return res.status(404).end();
      }

      const history = createMemoryHistory({
        initialEntries: [`${req.path}?ssr=true`],
      });
      // Create a store (with a memory history) from our current url
      const { store } = createStore(history);
      let theme = 'dark';
      const context = {};
      let actions = [];
      RouteList.some(route => {
        const match = matchPath(route, req.path);
        if (match) {
          if (route.fetchRouteData) {
            actions = [...actions, ...route.fetchRouteData];
          }
        }
        return match;
      });

      const promises = actions.map(action => store.dispatch(action()));

      // Helmet Action to set meta info based on the URL
      if (Meta[req.url]) {
        promises.push(store.dispatch(setHelmetInfo(Meta[req.url])));
      }

      // Load theme for dark/light page
      if (req.path === '/theme/light') theme = 'light';
      else if (req.path === '/theme/dark') theme = 'dark';

      return Promise.allSettled(promises)
        .then(() => {
          const markup = renderToString(
            <StrictMode>
              <Provider store={store}>
                <StaticRouter location={req.url} context={context}>
                  <App />
                </StaticRouter>
              </Provider>
            </StrictMode>
          );

          if (context.url) {
            // If context has a url property, then we need to handle a redirection in Redux Router
            res.writeHead(302, {
              Location: context.url,
            });
            res.end();
          } else {
            // Otherwise, we carry on...
            // We need to tell Helmet to compute the right meta tags, title, and such
            const helmet = Helmet.renderStatic();
            const chunkNames = flushChunkNames();
            const { js, stylesheets, scripts } = flushChunks(clientStats, {
              chunkNames,
            });

            // Find Js chunks for preloading... ex: main, vendors

            let preloadScripts = '';
            scripts.map(script => {
              if (script.includes('main') || script.includes('vendor')) {
                preloadScripts += `<link rel="preload" href="/${script}" as="script">`;
              }
              return script;
            });

            let inlineCss = '';
            stylesheets.map(ss => {
              inlineCss += inlineResource(ss);
              return ss;
            });

            const state = JSON.stringify(store.getState()).replace(
              /</g,
              '\\u003c'
            );

            // Pass all this nonsense into our HTML formatting function above
            const html = injectHTML(htmlFileData, {
              html: helmet.htmlAttributes.toString(),
              title: helmet.title.toString(),
              meta: helmet.meta.toString(),
              body: markup,
              scripts: js,
              style: inlineCss.replace(/\n|\t/g, ''), // Minify ,
              state,
              preloadScripts,
              theme,
            });
            res.setHeader('Cache-Control', 'max-age=86400');
            res.send(html);
          }
        })
        .catch(error => console.error('::::: Error :::::', error));
    }
  );
};
