module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['xo', 'prettier'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {'no-console': 1, 'no-unused-vars': 1},
};
