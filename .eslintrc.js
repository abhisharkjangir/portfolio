module.exports = {
  parser: '@babel/eslint-parser',
  extends: ['airbnb', 'prettier'],
  env: {
    browser: true,
    node: true,
    mocha: true,
    es6: true,
  },
  globals: {
    expect: true,
  },
  plugins: ['react', 'react-hooks', 'jsx-a11y', 'prettier', 'extra-rules'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'max-params': ['error', { max: 7 }],
    'max-statements': ['error', { max: 100 }],
    'max-lines': ['error', { max: 1000 }],
    'max-len': 0,
    complexity: ['error', { max: 10 }],
    'object-shorthand': ['warn', 'properties'],
    'array-callback-return': 'error',
    'no-undef': 'error',
    'extra-rules/no-commented-out-code': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 0,
    'react/jsx-props-no-spreading': 0,
    'arrow-body-style': 0,
    'import/imports-first': 0,
    'import/newline-after-import': 0,
    'import/no-dynamic-require': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default': 0,
    'default-param-last': 0,
    'no-unsafe-optional-chaining': 0,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'jsx-a11y/aria-props': 2,
    'jsx-a11y/heading-has-content': 0,
    'jsx-a11y/href-no-hash': 0,
    'jsx-a11y/label-has-for': 2,
    'jsx-a11y/mouse-events-have-key-events': 2,
    'jsx-a11y/role-has-required-aria-props': 2,
    'jsx-a11y/role-supports-aria-props': 2,
    'newline-per-chained-call': 0,
    'no-confusing-arrow': 0,
    'import/no-import-module-exports': 0,
    'no-console': 1,
    'no-use-before-define': 0,
    'prefer-template': 2,
    'class-methods-use-this': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-no-target-blank': 0,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/jsx-closing-bracket-location': 0,
    'react/jsx-curly-spacing': 0,
    'react/jsx-equals-spacing': 0,
    'react/jsx-first-prop-new-line': 0,
    'react/jsx-indent': 0,
    'react/jsx-indent-props': 0,
    'react/jsx-space-before-closing': 0,
    'react/jsx-wrap-multilines': 0,
    'react/require-extension': 0,
    'react/self-closing-comp': 0,
    'require-yield': 0,
    'import/no-webpack-loader-syntax': 0,
    'prettier/prettier': [
      1,
      {
        singleQuote: true,
        trailingComma: 'es5',
      },
    ],
    'linebreak-style': 0,
  },
};
