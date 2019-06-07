module.exports = {
  extends: [
    'eslint:recommended'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  env: {
    browser: true,
    node: true,
    commonjs: true
  },
  plugins: ["jsx-a11y"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module' // Allows for the use of imports
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        'no-unused-vars': ['off', "error", {"varsIgnorePattern": "_"}] // Allows for use of '_' as a not-needed variable.
      }
    }
  ]
};
