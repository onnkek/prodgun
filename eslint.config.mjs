import pluginJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import i18next from 'eslint-plugin-i18next';
import reactHooks from 'eslint-plugin-react-hooks';

export default [
  {
    ignores: ['.fttemplates/*']
  },
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
      indent: ['error', 2, {
        'SwitchCase': 1
      }],
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      'computed-property-spacing': ['error', 'never'],
      quotes: ['error', 'single'],
      'react/react-in-jsx-scope': 'off',
      'react-hooks/rules-of-hooks': ['warn'],
      // 'no-unused-vars': ['warn'],
      '@typescript-eslint/no-unused-vars': ['warn'],
      // 'object-curly-newline': [
      //   'error',
      //   {
      //     ExportDeclaration: 'always',
      //   },
      // ],
      'i18next/no-literal-string': ['error', {
        markupOnly: true,
        ignoreAttribute: ['data-testid', 'to', 'target'],
      }],
      'react/display-name': 'off',
      'react/prop-types': ['warn'],
      '@typescript-eslint/no-explicit-any': ['warn'],
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
