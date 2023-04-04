module.exports = {
  env: {
    browser: true, // browser global variables.
    // "node": true,  // Node.js global variables and Node.js scoping.
    es2022: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "prettier"],
  ignorePatterns: [".eslintrc.js"],
  rules: {},
};
