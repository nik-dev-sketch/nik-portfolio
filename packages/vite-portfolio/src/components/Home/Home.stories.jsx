import React from 'react';
import Home from './Home';

export default {
  title: 'Pages/Home',
  component: Home,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#111827', // matches bg-gray-900
        },
        {
          name: 'light',
          value: '#ffffff',
        },
      ],
    },
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: {
            width: '375px',
            height: '812px',
          },
        },
        tablet: {
          name: 'Tablet',
          styles: {
            width: '768px',
            height: '1024px',
          },
        },
        desktop: {
          name: 'Desktop',
          styles: {
            width: '1440px',
            height: '900px',
          },
        },
      },
    },
  },
  // Mock the framer-motion animations for consistent snapshots
  decorators: [
    (Story) => (
      <div className="min-h-screen">
        <Story />
      </div>
    ),
  ],
};

// Default view
export const Default = {
  args: {},
};

// Mobile view
export const Mobile = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile',
    },
  },
};

// Tablet view
export const Tablet = {
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
};

// Desktop view
export const Desktop = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};

// Without animations (for testing purposes)
export const NoAnimations = {
  decorators: [
    (Story) => (
      <div className="prefers-reduced-motion">
        <Story />
      </div>
    ),
  ],
};

// Social Links Hover State
export const SocialLinksHovered = {
  decorators: [
    (Story) => (
      <div className="social-links-hovered">
        <style>
          {`
            .social-links-hovered a {
              color: white !important;
            }
          `}
        </style>
        <Story />
      </div>
    ),
  ],
};

// Service Cards Highlighted
export const ServiceCardsHighlighted = {
  decorators: [
    (Story) => (
      <div className="service-cards-highlighted">
        <style>
          {`
            .service-cards-highlighted .bg-gray-800 {
              transform: scale(1.02);
              transition: transform 0.2s;
              box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            }
          `}
        </style>
        <Story />
      </div>
    ),
  ],
};

// Different background colors
export const CustomBackground = {
  decorators: [
    (Story) => (
      <div style={{ background: 'linear-gradient(to right, #1a202c, #2d3748)' }}>
        <Story />
      </div>
    ),
  ],
};

// Loading state (if implemented)
export const Loading = {
  decorators: [
    (Story) => (
      <div className="loading-state">
        <style>
          {`
            .loading-state {
              opacity: 0.7;
              pointer-events: none;
            }
          `}
        </style>
        <Story />
      </div>
    ),
  ],
};

// With different content (for demonstration)
export const CustomContent = {
  decorators: [
    (Story) => (
      <div className="custom-content">
        <style>
          {`
            .custom-content h1 {
              background: linear-gradient(to right, #60a5fa, #34d399);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }
          `}
        </style>
        <Story />
      </div>
    ),
  ],
};

// Responsive Grid Layout Demo
export const ResponsiveGridDemo = {
  decorators: [
    (Story) => (
      <div className="responsive-grid-demo">
        <style>
          {`
            .responsive-grid-demo .grid {
              border: 1px dashed rgba(255,255,255,0.2);
              padding: 1rem;
            }
          `}
        </style>
        <Story />
      </div>
    ),
  ],
};