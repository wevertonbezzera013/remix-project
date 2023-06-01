/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ["@remix-run/eslint-config", "@remix-run/eslint-config/node"],
  plugins: ["jest", "jsx"],
  env: {
    "jest/globals": true
  },
  overrides: [
    {
      files: ["**/*.test.jsx"],
      env: {
        jest: true
      },
      parserOptions: {
        babelOptions: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: {
                  node: "current",
                },
              },
            ],
          ],
          plugins: ["@babel/plugin-syntax-jsx"]
        }
      },
      rules: {
        "node/no-missing-import": [
          "error",
          {
            "allowModules": ["@babel/plugin-syntax-jsx"]
          }
        ]
      }
    }
  ]
};
