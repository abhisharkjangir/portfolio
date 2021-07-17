/* eslint-disable jsx-a11y/href-no-hash */
const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const APIRoutes = require('./routes/index');
const getClientConfigProd = require('../webpack/client.prod.config');
const getClientConfigDev = require('../webpack/client.dev.config');
const clientStats = require('../build/bundlestats.json');
const isProduction = process.env.NODE_ENV === 'production';

const { publicPath, path } = isProduction
  ? getClientConfigProd().output
  : getClientConfigDev().output;

const PORT = process.env.PORT || 7000;

const app = express();
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/a/', APIRoutes);

let isBuilt = false;
const done = () =>
  !isBuilt &&
  app.listen(PORT, () => {
    isBuilt = true;
    // eslint-disable-next-line no-console
    console.log(
      `:::::::: Portfolio is runnig at http://localhost:${PORT} ::::::::`
    );
  });
// eslint-disable-next-line global-require
const serverRender = require('../compiledServer/main.js').default;
app.use(publicPath, express.static(path));
app.use(serverRender({ clientStats }));
done();
