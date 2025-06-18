import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,mjs}'],
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 2022,
      globals: {
        // Node.js globals are included via the env setting below
      }
    },
    env: {
      node: true
    }
  }
];