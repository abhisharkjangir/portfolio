import fs from 'fs';
import path from 'path';
import webpack from 'webpack';
import WebpackBar from 'webpackbar';
import CompressionPlugin from 'compression-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';

const appDirectory = fs.realpathSync(process.cwd());

export const pathResolve = (pathString) => path.resolve(__dirname, pathString);

export const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

export const webpackBar = (isProduction, isServer = false) => {
  return new WebpackBar({
    name: `${isServer ? 'Server' : 'Client'} | ${isProduction ? 'Production' : 'Development'
      }:`,
    color: isServer ? 'orange' : 'green',
  });
};

export const webpackDefinePlugin = (isProduction) => {
  return new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(isProduction ? 'production' : 'development'),
    },
  });
};

export const eslintPlugin = () => {
  return new ESLintPlugin({
    extensions: ['js', 'jsx'],
    fix: true,
    outputReport: {},
  });
};

export const webpackModuleConcatenationPlugin = () =>
  new webpack.optimize.ModuleConcatenationPlugin();

export const compressionPlugin = () => new CompressionPlugin();

export const loaders = {
  urlLoader: {
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
  babelLoader: {
    test: /\.(js|mjs|jsx|ts|tsx)$/,
    include: [resolveApp('src'), resolveApp('public')],
    loader: require.resolve('babel-loader'),
    options: {
      customize: require.resolve('babel-preset-react-app/webpack-overrides'),

      plugins: [
        [
          require.resolve('babel-plugin-named-asset-import'),
          {
            loaderMap: {
              svg: {
                ReactComponent: '@svgr/webpack?-svgo,+titleProp,+ref![path]',
              },
            },
          },
        ],
      ],
      cacheDirectory: true,
      cacheCompression: true,
      compact: true,
    },
  },
  babelLoaderPresetReactEnv: {
    test: /\.(js|mjs|ts)$/,
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
  pdfLoader: {
    test: [/\.pdf$/],
    loader: require.resolve('file-loader'),
    options: {
      name: 'static/assets/[name].[ext]',
    },
  },
  fileLoader: {
    loader: require.resolve('file-loader'),
    exclude: [/\.(js|mjs|jsx|ts|tsx|scss|css|ico)$/, /\.html$/, /\.json$/],
    options: {
      name: 'static/assets/[name].[hash:8].[ext]',
    },
  },
  sassLoader: (isServer?: boolean) => {
    const config: any = {
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
    };
    if (!isServer) {
      config.use[0].options.modules = {};
      config.use.unshift(MiniCssExtractPlugin.loader);
    }
    config.use[isServer ? 0 : 1].options.modules.localIdentName =
      '[name]_[local]_[hash:base64:5]';
    return config;
  },
  cssLoader: (isServer?: boolean) => {
    const config = {
      test: /\.css$/,
      exclude: /node_modules/,
      use: ['css-loader', 'postcss-loader'],
    };
    if (!isServer) {
      config.use.unshift(MiniCssExtractPlugin.loader);
    }
    return config;
  },
};

export const cssMinimizerPlugin = () => {
  return new CssMinimizerPlugin({
    minimizerOptions: {
      preset: [
        'default',
        {
          discardComments: { removeAll: true },
        },
      ],
    },
  });
};

export const terserPlugin = () => {
  return new TerserPlugin({
    parallel: true,
    extractComments: 'all',
  });
};

export const splitChunksConfig = () => {
  return {
    cacheGroups: {
      defaultVendors: {
        test: /[\\/]node_modules[\\/]/,
        name: 'vendor',
        chunks: 'all',
      },
      chunks: 'all',
    },
  };
};

export const resolve = () => {
  return {
    extensions: ['.js', '.jsx', '.css', '.scss', '.sass', '.ts', '.tsx'],
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
    alias: {
      '@client': resolveApp('src/client'),
      '@server': resolveApp('src/server'),
      '@utils': resolveApp('src/client/utils'),
      '@webpack': resolveApp('webpack'),
      '@components': resolveApp('src/client/components'),
      '@modules': resolveApp('src/client/modules'),
      '@assets': resolveApp('src/client/assets'),
    },
  };
};

// export default = {
//   pathResolve,
//   resolveApp,
//   webpackBar,
//   webpackDefinePlugin,
//   eslintPlugin,
//   webpackModuleConcatenationPlugin,
//   compressionPlugin,
//   loaders,
//   cssMinimizerPlugin,
//   terserPlugin,
//   splitChunksConfig,
//   resolve,
// };
