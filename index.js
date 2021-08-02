module.exports = {
  extends: [
    'eslint:all',
    'plugin:@typescript-eslint/all',
    'plugin:@ridedott/all',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:jest/all',
    './rules/array-func.js',
    './rules/eslint-comments.js',
    './rules/eslint.js',
    './rules/functional.js',
    './rules/import.js',
    './rules/jest.js',
    './rules/ridedott.js',
    './rules/simple-import-sort.js',
    './rules/sort-keys-fix.js',
    './rules/typescript.js',
    './rules/unicorn.js',
    'prettier',
    './rules/overrides.js',
  ],
  plugins: [
    '@ridedott',
    '@typescript-eslint',
    'array-func',
    'eslint-comments',
    'functional',
    'import',
    'jest',
    'simple-import-sort',
    'sort-keys-fix',
    'unicorn',
  ],
  parser: '@typescript-eslint/parser',
};
