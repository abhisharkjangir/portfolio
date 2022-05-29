/* eslint-disable extra-rules/no-commented-out-code */
/* eslint-disable jsx-a11y/href-no-hash */
const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin'); // here so you can see what chunks are built
const WebpackBar = require('webpackbar');
const paths = require('./paths');

const res = p => path.resolve(__dirname, p);
const nodeModules = res('../node_modules');
const entry = res('../server/loader.js');
const devOutput = res('../public/dist/server');

// if you're specifying externals to leave unbundled, you need to tell Webpack
// to still bundle `react-universal-component`, `webpack-flush-chunks` and
// `require-universal-module` so that they know they are running
// within Webpack and can properly make connections to client modules:
const externals = fs
  .readdirSync(nodeModules)
  .filter(x => !/\.bin|react-universal-component|webpack-flush-chunks/.test(x))
  .reduce((external, mod) => {
    const etrnls = external;
    etrnls[mod] = `commonjs ${mod}`;
    return etrnls;
  }, {});

externals['react-dom/server'] = 'commonjs react-dom/server';

const getModule = () => {
  return {
    rules: [
      // First, run the linter.
      // It's important to do this before Babel processes the JS.
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        enforce: 'pre',
        use: [
          {
            options: {
              formatter: require.resolve('react-dev-utils/eslintFormatter'),
              eslintPath: require.resolve('eslint'),
              resolvePluginsRelativeTo: __dirname,
            },
            loader: require.resolve('eslint-loader'),
          },
        ],
        include: paths.appSrc,
      },
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
              cacheCompression: false,

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

          // Loading PDF file
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
              /\.(js|mjs|jsx|ts|tsx|scss|css|ico)$/,
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
        test: /\.styl|.(scss|sass)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: true,
              exportOnlyLocals: true,
              localIdentName: '[name]-[hash:base64:5]', // To include filename -[name]-[local]-[hash:base64:5]
            },
          },
          {
            loader: 'sass-loader',
          },
          {
            loader: 'postcss-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
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
    extensions: ['.js', '.jsx', '.css'],
  };
};

const getPlugins = () => {
  return [
    new WebpackBar({
      name: 'Client | Development:',
      color: 'orange',
    }),
    new WriteFilePlugin(),
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
  ];
};

const getServerConfig = () => {
  return {
    name: 'server',
    target: 'node',
    devtool: 'source-map',
    entry: ['babel-polyfill', 'regenerator-runtime/runtime.js', entry],
    externals,
    output: {
      path: devOutput,
      filename: '[name].js',
      libraryTarget: 'commonjs2',
    },
    module: getModule(),
    mode: 'development', // Keep development for now for production as well
    resolve: getResolve(),
    plugins: getPlugins(),
    optimization: {
      minimize: false,
      minimizer: [
        new CssMinimizerPlugin({
          sourceMap: true,
          minimizerOptions: {
            preset: [
              'default',
              {
                discardComments: { removeAll: true },
              },
            ],
          },
        }),
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: true,
          extractComments: 'all',
        }),
      ],
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendor',
            chunks: 'all',
          },
          chunks: 'all',
        },
      },
    },
    // Some libraries import Node modules but don't use them in the browser.
    // Tell Webpack to provide empty mocks for them so importing them works.
    node: {
      module: 'empty',
      dgram: 'empty',
      dns: 'mock',
      fs: 'empty',
      http2: 'empty',
      net: 'empty',
      tls: 'empty',
      child_process: 'empty',
    },
    performance: false,
  };
};

module.exports = getServerConfig;
