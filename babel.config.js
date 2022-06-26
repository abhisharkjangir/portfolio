/* eslint-disable prettier/prettier */
module.exports = api => {
  const config = {
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: [
      '@babel/plugin-syntax-dynamic-import',
      '@loadable/babel-plugin',
      [
        '@babel/plugin-proposal-decorators',
        {
          legacy: true
        }
      ],
      '@babel/plugin-proposal-function-sent',
      '@babel/plugin-proposal-numeric-separator',
      '@babel/plugin-proposal-throw-expressions',
      '@babel/plugin-proposal-export-default-from',
      '@babel/plugin-proposal-optional-chaining',
      [
        '@babel/plugin-proposal-pipeline-operator',
        {
          proposal: 'minimal'
        }
      ],
      '@babel/plugin-proposal-do-expressions',
      '@babel/plugin-proposal-function-bind'
    ],
    env: {
      development: {
        plugins: ['react-refresh/babel']
      }
    }
  }
  api.cache(true)
  return config
}
