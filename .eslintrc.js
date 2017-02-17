module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb-base',
  plugins: [
    'import',
    'flowtype',
  ],
  env: {
    browser: true,
    es6: true,
    mocha: true,
    node: true,
  },
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: [
          'node_modules',
          'src',
        ],
      },
    },
  },
};
