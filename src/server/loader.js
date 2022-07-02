/* eslint-disable no-console */
import fs from 'fs';
import path from 'path';
// React requirements
import React, { StrictMode } from 'react';
import { matchPath } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import { StaticRouter } from 'react-router-dom/server';
import { ChunkExtractor, ChunkExtractorManager } from '@loadable/server';

import createStore from '../client/store';
import App from '../client/components/app';
import RouteList from '../client/routes';
import { setHelmetInfo } from '../client/components/common/helmet/actions';
import Meta from '../client/utils/meta';

const isDev = process.env.NODE_ENV === 'development';

const getRouteActions = (route, req, actions = [], parentPath = '') => {
  const fullPath = (parentPath !== '/' ? parentPath : '') + (route.path || '');
  if (route) {
    const match = matchPath({ ...route, path: fullPath }, req.path);
    if (match && route.fetchRouteData) {
      route.fetchRouteData.forEach((action) => actions.push(action));
    }
    if (route.childRoutes) {
      route.childRoutes.forEach((childRoute) =>
        getRouteActions(childRoute, req, actions, fullPath)
      );
    }
  }
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
  data = data.replace('</head>', `${meta}${preloadScripts}${style}</head>`);
  data = data.replace(
    '<div id="root"></div>',
    `<div id="root">${body}</div><script>window.__PRELOADED_STATE__ = ${state}</script>`
  );
  data = data.replace('</body>', `${scripts}${googleAnalyticsScripts}</body>`);

  return data;
};

// LOADER
export default ({ clientStats }) =>
  (req, res) => {
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
        const context = {};
        const extractor = new ChunkExtractor({ stats: clientStats });

        const actions = RouteList.reduce((routeActions, route) => {
          getRouteActions(route, req, routeActions);
          return routeActions;
        }, []);

        const promises = actions.map((action) => store.dispatch(action()));

        // Helmet Action to set meta info based on the URL
        if (Meta[req.url]) {
          promises.push(store.dispatch(setHelmetInfo(Meta[req.url])));
        }

        return Promise.allSettled(promises)
          .then(async () => {
            const markup = renderToString(
              <ChunkExtractorManager extractor={extractor}>
                <StrictMode>
                  <Provider store={store}>
                    <StaticRouter location={req.url} context={context}>
                      <App />
                    </StaticRouter>
                  </Provider>
                </StrictMode>
              </ChunkExtractorManager>
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
              const state = JSON.stringify(store.getState()).replace(
                /</g,
                '\\u003c'
              );
              const preloadScripts = extractor
                .getLinkTags()
                ?.split('\n')
                ?.filter((link) => link?.includes('as="script"'))
                ?.join('');
              // Pass all this nonsense into our HTML formatting function above
              const html = injectHTML(htmlFileData, {
                html: helmet.htmlAttributes.toString(),
                title: helmet.title.toString(),
                meta: helmet.meta.toString(),
                body: markup,
                scripts: extractor.getScriptTags(),
                style: extractor.getStyleTags(),
                state,
                preloadScripts,
                theme: req.path === '/test/theme/light' ? 'light' : 'dark',
              });
              res.setHeader('Cache-Control', 'max-age=86400');
              res.send(html);
            }
          })
          .catch((error) => console.error('::::: Error :::::', error));
      }
    );
  };
