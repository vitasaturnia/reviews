/** @type {import("eslint").Linter.Config} */
const config = {
  extends: ["next/core-web-vitals"],
  rules: {
    // Add any ESLint rules you want to enable here
  },
  ignorePatterns: ["_app.js", "index.js", "next.config.js", "public/*", "out/*"],
};

module.exports = config;
