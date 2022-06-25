/* eslint-disable jsx-a11y/href-no-hash */
const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const LoadablePlugin = require('@loadable/webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const TerserPlugin = require('terser-webpack-plugin');
const WebpackBar = require('webpackbar');

const paths = require('./paths');

const getOutput = () => ({
  filename: 'static/js/[name].[chunkhash].js',
  chunkFilename: 'static/js/[name].[chunkhash].js',
  path: path.resolve(__dirname, '../public/dist/client'),
  publicPath: '/',
});

const getModule = () => {
  return {
    rules: [
      // First, run the linter.
      // It's important to do this before Babel processes the JS.

      {
        oneOf: [
          // "url" loader works like "file" loader except that it embeds assets
          // smaller than specified limit in bytes as data URLs to avoid requests.
          // A missing `test` is equivalent to a match.
          {
            test: [
              /\.bmp$/,
              /\.gif$/,
              /\.jpe?g$/,
              /\.png$/,
              /\.jpg$/,
              /\.svg$/,
              /\.ico$/,
            ],
            loader: require.resolve('url-loader'),
            options: {
              limit: '10000',
              name: 'static/assets/[name].[hash:8].[ext]',
            },
          },
          {
            test: /\.(js|mjs|jsx|ts|tsx)$/,
            include: [paths.appSrc, paths.appPublic, paths.serverPath],
            loader: require.resolve('babel-loader'),
            options: {
              customize: require.resolve(
                'babel-preset-react-app/webpack-overrides'
              ),

              plugins: [
                [
                  require.resolve('babel-plugin-named-asset-import'),
                  {
                    loaderMap: {
                      svg: {
                        ReactComponent:
                          '@svgr/webpack?-svgo,+titleProp,+ref![path]',
                      },
                    },
                  },
                ],
              ],
              // This is a feature of `babel-loader` for webpack (not Babel itself).
              // It enables caching results in ./node_modules/.cache/babel-loader/
              // directory for faster rebuilds.
              cacheDirectory: true,
              cacheCompression: true,
              compact: true,
            },
          },
          // Process any JS outside of the app with Babel.
          // Unlike the application JS, we only compile the standard ES features.
          {
            test: /\.(js|mjs)$/,
            exclude: /@babel(?:\/|\\{1,2})runtime/,
            loader: require.resolve('babel-loader'),
            options: {
              babelrc: false,
              configFile: false,
              compact: false,
              presets: [
                [
                  require.resolve('babel-preset-react-app/dependencies'),
                  { helpers: true },
                ],
              ],
              cacheDirectory: true,
              cacheCompression: true,

              // If an error happens in a package, it's possible to be
              // because it was compiled. Thus, we don't want the browser
              // debugger to show the original code. Instead, the code
              // being evaluated would be much more helpful.
              sourceMaps: false,
            },
          },
          // "file" loader makes sure those assets get served by WebpackDevServer.
          // When you `import` an asset, you get its (virtual) filename.
          // In production, they would get copied to the `build` folder.
          // This loader doesn't use a "test" so it will catch all modules
          // that fall through the other loaders.
          {
            test: [/\.pdf$/],
            loader: require.resolve('file-loader'),
            options: {
              name: 'static/assets/[name].[ext]',
            },
          },
          {
            loader: require.resolve('file-loader'),
            // Exclude `js` files to keep "css" loader working as it injects
            // its runtime that would otherwise be processed through "file" loader.
            // Also exclude `html` and `json` extensions so they get processed
            // by webpacks internal loaders.
            exclude: [
              /\.(js|mjs|jsx|ts|tsx|scss|css|ico|)$/,
              /\.html$/,
              /\.json$/,
            ],
            options: {
              name: 'static/assets/[name].[hash:8].[ext]',
            },
          },
          // ** STOP ** Are you adding a new loader?
          // Make sure to add the new loader(s) before the "file" loader.
        ],
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require.resolve('sass'),
            },
          },
        ],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
          },
        ],
      },
    ],
  };
};

const getResolve = () => {
  return {
    extensions: ['.js', '.jsx', '.css', '.scss', '.sass'],
    fallback: {
      fs: false,
      module: false,
      dgram: false,
      dns: 'mock',
      http2: false,
      net: false,
      tls: false,
      child_process: false,
      path: require.resolve('path-browserify'),
    },
  };
};

const getPlugins = () => {
  return [
    new WebpackBar({
      name: 'Client | Production:',
      color: 'green',
    }),
    new CompressionPlugin(),
    new LoadablePlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
      generateStatsFile: true,
      reportFilename: 'bundlereport.html',
      statsFilename: 'bundlestats.json',
    }),

    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[fullhash:8].css',
      chunkFilename: 'static/css/[name].[fullhash:8].css',
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    // new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    // new webpack.HashedModuleIdsPlugin(), // not needed for strategy to work (just good practice)
    // new ImageminPlugin({
    //   test: /\.(jpe?g|png|gif|svg|ico)$/i,
    //   disable: false, // Disable during development
    //   pngquant: {
    //     progressive: true,
    //     quality: '50',
    //   },
    //   jpegtran: { progressive: true },
    // }),
    new CopyPlugin({
      patterns: [
        { from: 'public/manifest.json', to: 'static/js' },
        { from: 'public/robots.txt', to: '' },
        { from: 'public/sitemap.xml', to: '' },
        { from: 'public/favicon.ico', to: 'static/assets' },
        { from: 'public/logo512.png', to: 'static/assets' },
        { from: 'public/logo192.png', to: 'static/assets' },
        { from: 'public/service-worker.js', to: '' },
        { from: 'public/asset-manifest.json', to: '' },
      ],
    }),
  ];
};

const getClientConfig = () => {
  return {
    name: 'client',
    target: 'web',
    devtool: 'source-map',
    entry: ['babel-polyfill', path.resolve(__dirname, '../src/index.js')],
    output: getOutput(),
    stats: 'verbose',
    mode: 'production',
    module: getModule(),
    resolve: getResolve(),
    plugins: getPlugins(),
    optimization: {
      minimize: true,
      runtimeChunk: false,
      minimizer: [
        new CssMinimizerPlugin({
          minimizerOptions: {
            preset: [
              'default',
              {
                discardComments: { removeAll: true },
              },
            ],
          },
        }),
        new TerserPlugin({
          parallel: true,
          extractComments: 'all',
        }),
      ],
      splitChunks: {
        cacheGroups: {
          defaultVendors: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendor',
            chunks: 'all',
          },
          chunks: 'all',
        },
      },
      emitOnErrors: true,
    },
    performance: false,
  };
};
module.exports = getClientConfig;
