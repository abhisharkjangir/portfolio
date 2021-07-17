/* eslint-disable jsx-a11y/href-no-hash */
const fs = require('fs');
const express = require('express');
const webpack = require('webpack');
const bodyParser = require('body-parser');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const APIRoutes = require('./routes/index');
const getServerConfigProd = require('../webpack/server.prod.config');
const getClientConfigProd = require('../webpack/client.prod.config');

const clientConfigProd = getClientConfigProd();
const {
  output: { publicPath, path },
} = clientConfigProd;

const app = express();
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/a/', APIRoutes);

webpack([clientConfigProd, getServerConfigProd()]).run((err, stats) => {
  if (err) {
    // eslint-disable-next-line no-console
    console.log(':::::::: Error ocurred ::::::::', err);
    return false;
  }
  const clientStats = stats.toJson().children[0];

  fs.writeFile(
    `${process.cwd()}/build/clientstats.json`,
    JSON.stringify(clientStats),
    'utf8',
    error => {
      if (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
      // eslint-disable-next-line global-require
      const serverRender = require('../compiledServer/main.js').default;
      app.use(publicPath, express.static(path));
      app.use(serverRender({ clientStats }));
      return false;
    }
  );
  return false;
});
