const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const WebpackBar = require('webpackbar');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const LoadablePlugin = require('@loadable/webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const paths = require('./paths');

const res = p => path.resolve(__dirname, p);

const webpackHelper = {
  common: {
    resolve: () => {
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
    },
  },
  client: {
    output: (isProduction = false) => {
      return {
        filename: isProduction
          ? 'static/js/[name].[chunkhash].js'
          : '[name].js',
        chunkFilename: isProduction
          ? 'static/js/[name].[chunkhash].js'
          : '[name].chunk.js',
        path: res('../public/dist/client'),
        publicPath: '/',
      };
    },
    plugins: (isProduction = false) => {
      const plugins = [
        new WebpackBar({
          name: `Client | ${isProduction ? 'Production' : 'Development'} :`,
          color: 'green',
        }),
        new LoadablePlugin(),
        new MiniCssExtractPlugin({
          filename: isProduction
            ? 'static/css/[name].[fullhash:8].css'
            : '[name].css',
          chunkFilename: isProduction
            ? 'static/css/[name].[fullhash:8].css'
            : '[name].css',
        }),
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
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: JSON.stringify(
              isProduction ? 'production' : 'development'
            ),
          },
        }),
      ];

      if (isProduction) {
        return [
          ...plugins,
          new CompressionPlugin(),
          new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            openAnalyzer: false,
            generateStatsFile: true,
            reportFilename: 'bundlereport.html',
            statsFilename: 'bundlestats.json',
          }),
          new webpack.optimize.ModuleConcatenationPlugin(),
        ];
      }
      return [
        ...plugins,
        new ReactRefreshWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
      ];
    },
    module: (isProduction = false) => {
      const rules = [
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
      ];

      if (isProduction) {
        return { rules };
      }

      const devOnlyRules = [
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
      ];
      return { rules: [...devOnlyRules, ...rules] };
    },
    optimization: (isProduction = false) => {
      return {
        minimize: isProduction,
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
      };
    },
    entry: (isProduction = false) => {
      return isProduction
        ? ['babel-polyfill', res('../src/index.js')]
        : [
            'babel-polyfill',
            'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=false&quiet=false&noInfo=false',
            res('../src/index.js'),
          ];
    },
  },
  server: {
    output: (isProduction = false) => {
      return {
        path: res('../public/dist/server'),
        filename: isProduction ? 'main.js' : '[name].js',
        libraryTarget: 'commonjs2',
      };
    },
    plugins: (isProduction = false) => {
      const plugins = [
        new WebpackBar({
          name: `Server | ${isProduction ? 'Production' : 'Development'}:`,
          color: 'orange',
        }),
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: JSON.stringify(
              isProduction ? 'production' : 'development'
            ),
          },
        }),
        new webpack.optimize.LimitChunkCountPlugin({
          maxChunks: 1,
        }),
      ];

      if (isProduction) {
        return [
          ...plugins,
          new CompressionPlugin(),
          new webpack.optimize.ModuleConcatenationPlugin(),
        ];
      }
      return plugins;
    },
    module: (isProduction = false) => {
      const rules = [
        {
          oneOf: [
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
                cacheDirectory: true,
                cacheCompression: false,
                compact: false,
              },
            },
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
                sourceMaps: false,
              },
            },
            {
              test: [/\.pdf$/],
              loader: require.resolve('file-loader'),
              options: {
                name: 'static/assets/[name].[ext]',
              },
            },
            {
              loader: require.resolve('file-loader'),
              exclude: [
                /\.(js|mjs|jsx|ts|tsx|scss|css|ico)$/,
                /\.html$/,
                /\.json$/,
              ],
              options: {
                name: 'static/assets/[name].[hash:8].[ext]',
              },
            },
          ],
        },
        {
          test: /\.s(a|c)ss$/,
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: {
                  exportGlobals: true,
                  exportOnlyLocals: true,
                },
              },
            },
            {
              loader: 'postcss-loader',
            },
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
          use: ['css-loader', 'postcss-loader'],
        },
      ];

      if (isProduction) {
        return { rules };
      }

      const devOnlyRules = [
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
      ];
      return { rules: [...devOnlyRules, ...rules] };
    },
    optimization: (isProduction = false) => {
      return {
        minimize: isProduction,
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
      };
    },
    externals: () => {
      const externals = fs
        .readdirSync(res('../node_modules'))
        .filter(
          x => !/\.bin|react-universal-component|webpack-flush-chunks/.test(x)
        )
        .reduce((external, mod) => {
          const etrnls = external;
          etrnls[mod] = `commonjs ${mod}`;
          return etrnls;
        }, {});

      externals['react-dom/server'] = 'commonjs react-dom/server';
      return externals;
    },
    entry: (isProduction = false) => {
      return isProduction
        ? ['babel-polyfill', res('../server/loader.js')]
        : [
            'babel-polyfill',
            'regenerator-runtime/runtime.js',
            res('../server/loader.js'),
          ];
    },
  },
};

module.exports = webpackHelper;
