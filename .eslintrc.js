module.exports = {
  env: {
    es2021: true
  },
  extends: ['plugin:react/recommended', 'prettier/standard', 'prettier/react'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', 'prettier', '@typescript-eslint'],
  rules: {
    'space-before-function-paren': 'off',
    'prettier/prettier': 'error',
    'react/prop-types': 'off'
  }
}
