module.exports = {
  plugins: ["prettier"],
  extends: ["eslint:recommended", "prettier", "plugin:prettier/recommended"],
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    //"indent": ["error", 2],
    //"linebreak-style": ["error", "unix"],
    //quotes: ["error", "double"],
    //semi: ["error", "always"],
    "no-unused-vars": 0,
    "prefer-const": 0,
    "prettier/prettier": "error",
  },
};
