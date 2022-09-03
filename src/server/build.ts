/* eslint-disable import/extensions */
/* eslint-disable global-require */
import fs from 'fs';
import express from 'express';
import webpack from 'webpack';
import bodyParser from 'body-parser';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import APIRoutes from './routes/index';
import webpackConfig from '../../webpack/webpack.config';

const clientConfigProd: any = webpackConfig('production', 'client');
const {
  output: { publicPath, path },
} = clientConfigProd;

const app = express();
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/a/', APIRoutes);

webpack([clientConfigProd, webpackConfig('production', 'server')]).run(
  (err, stats: any) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.log(':::::::: Error ocurred ::::::::', err);
      return false;
    }
    const clientStats = stats.toJson().children[0];

    fs.writeFile(
      `${process.cwd()}/public/dist/client/clientstats.json`,
      JSON.stringify(clientStats),
      'utf8',
      (error) => {
        if (error) {
          // eslint-disable-next-line no-console
          console.log(error);
        }
        // eslint-disable-next-line global-require
        // eslint-disable-next-line import/no-unresolved
        // eslint-disable-next-line global-require
        const serverRender =
          require('../../public/dist/server/main.js').default;
        app.use(publicPath, express.static(path));
        app.use(serverRender({ clientStats }));
        return false;
      }
    );
    return false;
  }
);
