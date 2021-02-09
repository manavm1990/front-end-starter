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
    "import/extensions": 0,
    "import/prefer-default-export": "warn",
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
    "no-unused-expressions": ["error", { allowShortCircuit: true }],
    "no-unused-vars": "warn",
    "prefer-arrow-callback": "warn",
  },
};
