module.exports = {
    '*.{js,jsx,ts,tsx}': [
      'eslint --fix',
      'prettier --write',
    ],
    '*.{json,yml,yaml,md}': [
      'prettier --write',
    ],
    '*.{css,scss}': [
      'prettier --write',
    ],
  };