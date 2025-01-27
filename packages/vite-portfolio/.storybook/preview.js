import '../src/index.css'; // your tailwind css import

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: '#111827',
      },
      {
        name: 'light',
        value: '#ffffff',
      },
    ],
  },
};

// Global decorators
export const decorators = [
  (Story) => (
    <div className="min-h-screen">
      <Story />
    </div>
  ),
];