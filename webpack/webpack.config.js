const webpackHelper = require('./webpack.helper');
const webpackConfig = (env, type) => {
  const isProduction = env === 'production';
  return {
    name: type,
    target: type === 'client' ? 'web' : 'node',
    devtool: 'source-map',
    entry: webpackHelper[type].entry(isProduction),
    output: webpackHelper[type].output(isProduction),
    stats: 'verbose',
    mode: isProduction ? 'production' : 'development',
    module: webpackHelper[type].module(isProduction),
    resolve: webpackHelper.common.resolve(),
    plugins: webpackHelper[type].plugins(isProduction),
    optimization: webpackHelper[type].optimization(isProduction),
    performance: isProduction || false,
  };
};
module.exports = webpackConfig;
