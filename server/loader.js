/* eslint-disable no-console */
import fs from 'fs';
import path from 'path';
// React requirements
import React, { StrictMode } from 'react';
import { matchPath } from 'react-router-dom';
import { renderToNodeStream } from 'react-dom/server';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import { StaticRouter } from 'react-router-dom/server';
import { ChunkExtractor, ChunkExtractorManager } from '@loadable/server';

import createStore from '../src/store';
import App from '../src/components/app';
import { RouteList } from '../src/routes';
import { setHelmetInfo } from '../src/components/common/helmet/actions';
import Meta from '../src/utils/meta';

const isDev = process.env.NODE_ENV === 'development';

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
    `${meta}${preloadScripts}${style}<script>window.__PRELOADED_STATE__ = ${state}</script></head>`
  );
  data = data.replace(`<div id="root"></div>`, `<div id="root">${body}</div>`);
  data = data.replace('</body>', `${scripts}${googleAnalyticsScripts}</body>`);

  return data;
};

const readHtmlFileData = (res) => {
  return new Promise((resolve) => {
    fs.readFile(
      path.resolve(process.cwd(), './public/index.html'),
      'utf8',
      // eslint-disable-next-line consistent-return
      (err, htmlFileData) => {
        if (err) {
          // eslint-disable-next-line no-console
          console.error(
            '::::::: Error while reading index.html file from /public :::::::',
            err
          );
          return res.status(404).end();
        }
        resolve(htmlFileData);
      }
    );
  });
};

let htmlFileData;
// LOADER
export default ({ clientStats }) =>
  (req, res) => {
    (async () => {
      const history = createMemoryHistory({
        initialEntries: [`${req.path} ? ssr = true`],
      });
      const { store } = createStore(history);
      let theme = 'dark';
      const context = {};
      const extractor = new ChunkExtractor({ stats: clientStats });
      let actions = [];
      RouteList.some((route) => {
        const match = matchPath(route, req.path);
        if (match) {
          if (route.fetchRouteData) {
            actions = [...actions, ...route.fetchRouteData];
          }
        }
        return match;
      });

      const promises = actions.map((action) => store.dispatch(action()));

      // Helmet Action to set meta info based on the URL
      if (Meta[req.url]) {
        promises.push(store.dispatch(setHelmetInfo(Meta[req.url])));
      }

      // Load theme for dark/light page
      if (req.path === '/theme/light') theme = 'light';
      else if (req.path === '/theme/dark') theme = 'dark';

      return Promise.allSettled(promises)
        .then(async () => {
          if (context.url) {
            // If context has a url property, then we need to handle a redirection in Redux Router
            res.writeHead(302, {
              Location: context.url,
            });
            res.end();
          } else {
            try {
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

              if (!htmlFileData) {
                htmlFileData = await readHtmlFileData(res);
              }
              const markup = '';
              // eslint-disable-next-line no-unused-vars
              const html = injectHTML(htmlFileData, {
                html: helmet.htmlAttributes.toString(),
                title: helmet.title.toString(),
                meta: helmet.meta.toString(),
                body: markup,
                scripts: extractor.getScriptTags(),
                style: extractor.getStyleTags(),
                state,
                preloadScripts,
                theme,
              });

              const [part0, part1] = html.split('[partition]');
              res.write(part0);
              const stream = renderToNodeStream(
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
              stream.pipe(res, { end: false });
              stream.on('end', () => {
                res.write(part1);
                res.end();
              });
            } catch (error) {
              console.error('::::: Error :::::', error);
            }
          }
        })
        .catch((error) => console.error('::::: Error :::::', error));
    })();
  };
