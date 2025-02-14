import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';


/** @type {import('eslint').Linter.Config[]} */
export default [{
  settings: {
    react: {
      version: 'detect'
    }
  }
},
{ files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
{ languageOptions: { globals: globals.browser } },
{
  'rules': {
    'indent': ['error', 2],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'react/react-in-jsx-scope': ['off']
  }
},
pluginJs.configs.recommended,
...tseslint.configs.recommended,
pluginReact.configs.flat.recommended,

];