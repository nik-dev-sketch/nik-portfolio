module.exports = {
  semi: true,
  singleQuote: true,
  trailingComma: 'es5',
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'avoid',
  endOfLine: 'lf',
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindConfig: './packages/vite-portfolio/tailwind.config.js',
  overrides: [
    {
      files: '*.{ts,tsx}',
      options: {
        parser: 'typescript',
      },
    },
  ],
};