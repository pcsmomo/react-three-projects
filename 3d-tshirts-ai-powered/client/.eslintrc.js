export default {
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
    "plugin:valtio/recommended",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "prettier", "react-refresh"],
  ignorePatterns: [".eslintrc.js"],
  rules: {
    "react-refresh/only-export-components": "warn",
  },
};

// Vite original setup
// module.exports = {
//   env: { browser: true, es2020: true },
//   extends: [
//     "eslint:recommended",
//     "plugin:@typescript-eslint/recommended",
//     "plugin:react-hooks/recommended",
//   ],
//   parser: "@typescript-eslint/parser",
//   parserOptions: { ecmaVersion: "latest", sourceType: "module" },
//   plugins: ["react-refresh"],
//   rules: {
//     "react-refresh/only-export-components": "warn",
//   },
// };
