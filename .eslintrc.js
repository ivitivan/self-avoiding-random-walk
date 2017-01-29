module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    jest: true,
  },
  extends: 'eslint:recommended',
  plugins: [
    'react',
  ],
  rules: {
    semi: ['error', 'never'],
    'eol-last': ['error', 'always'],
    'linebreak-style': ['error', 'unix'],
    'no-multiple-empty-lines': ['error', {max: 1, maxEOF: 1}],
    'no-unexpected-multiline': ['error'],
    'no-trailing-spaces': ['error'],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error'
  },
}

