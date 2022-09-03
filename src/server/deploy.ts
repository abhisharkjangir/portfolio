import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import APIRoutes from './routes/index';
import webpackConfig from '../../webpack/webpack.config';
// eslint-disable-next-line import/no-unresolved
import clientStats from '../../public/dist/client/clientstats.json';
import CONSTANTS from './constants/constants';

const clientConfigProd: any = webpackConfig('production', 'client');

const {
  output: { publicPath, path },
} = clientConfigProd;
const PORT = process.env.PORT || CONSTANTS.PORT;
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
// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/extensions
const serverRender = require('../../public/dist/server/main.js').default;
app.use(publicPath, express.static(path));
app.use(serverRender({ clientStats }));
done();
