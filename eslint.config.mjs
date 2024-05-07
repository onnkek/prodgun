import pluginJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import globals from 'globals';
import tseslint, { plugin } from 'typescript-eslint';
import i18next from 'eslint-plugin-i18next';
import reactHooks from 'eslint-plugin-react-hooks';

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
      'max-len': ['error', { ignoreComments: true, code: 120 }],
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
      'i18next/no-literal-string': [
        'error',
        {
          markupOnly: true,
          ignoreAttribute: ['data-testid', 'to'],
        },
      ],
      'react/display-name': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',
    },
    plugins: {
      i18next,
      'react-hooks': reactHooks
    },
  },
  //overrides
  {
    files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
    rules: {
      'i18next/no-literal-string': 'off',
      'max-len': 'off'
    }
  },
];
