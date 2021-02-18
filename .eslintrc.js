module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "array-callback-return": "warn",
    "arrow-body-style": 1,
    "import/extensions": 0,
    "import/prefer-default-export": "warn",
    "no-param-reassign": 1,
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
    "no-unused-expressions": ["error", { allowShortCircuit: true }],
    "no-unused-vars": "warn",
    "object-shorthand": 1,
    "prefer-arrow-callback": "warn",
  },
};
