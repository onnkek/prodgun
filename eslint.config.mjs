import pluginJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import globals from 'globals';
import tseslint, { plugin } from 'typescript-eslint';
import i18next from 'eslint-plugin-i18next';

export default [
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReactConfig,
  eslintConfigPrettier,
  {
    rules: {
      semi: 'error',
      'prefer-const': 'error',
      'react/jsx-indent': [2, 2],
      indent: [2, 2],
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      'computed-property-spacing': ['error', 'never'],
      quotes: ['error', 'single'],
      'react/react-in-jsx-scope': 'off',
      // 'no-unused-vars': ['warn'],
      '@typescript-eslint/no-unused-vars': ['warn'],
      'object-curly-newline': [
        'error',
        {
          ExportDeclaration: 'always',
        },
      ],
      'i18next/no-literal-string': ['error', { markupOnly: true }],
    },
    plugins: {
      i18next
    },

  },
];
