import js from '@eslint/js';
import globals from 'globals';

export default [
  {
    // Global ignores
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/build/**',
      '**/.next/**',
      '**/.redwood/**',
      '**/public/**',
      '**/coverage/**',
      '**/.git/**',
      '**/temp.js',
      'config/*'
    ]
  },
  // Base config for all JavaScript/TypeScript files
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      // plugins will be added here
    },
    rules: {
      'semi': ['warn', 'always'],
      'no-unused-vars': ['warn', { 
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_'
      }],
      'no-console': ['warn', { 
        allow: ['warn', 'error'] 
      }],
      'quotes': ['warn', 'single'],
      'indent': ['warn', 2],
      'comma-dangle': ['warn', 'always-multiline']
    },
    linterOptions: {
      reportUnusedDisableDirectives: 'warn'
    }
  },
  // Vite project specific settings
  {
    files: ['packages/vite-portfolio/**/*.{js,jsx,ts,tsx}'],
    rules: {
      // Add Vite-specific rules here
    }
  },
  // RedwoodJS project specific settings
  {
    files: ['packages/redwood-portfolio/**/*.{js,jsx,ts,tsx}'],
    rules: {
      // Add RedwoodJS-specific rules here
    }
  },
  // Test files
  {
    files: ['**/*.test.{js,jsx,ts,tsx}', '**/*.spec.{js,jsx,ts,tsx}'],
    rules: {
      'no-console': 'off'
    }
  }
];