import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './Home';

// Mock framer-motion to avoid animation issues in tests
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
    h1: ({ children, ...props }) => <h1 {...props}>{children}</h1>,
    p: ({ children, ...props }) => <p {...props}>{children}</p>,
  },
}));

// Mock lucide-react icons
jest.mock('lucide-react', () => ({
  Github: () => <div data-testid="github-icon" />,
  Linkedin: () => <div data-testid="linkedin-icon" />,
  Users: () => <div data-testid="users-icon" />,
}));

describe('Home Component', () => {
  beforeEach(() => {
    render(<Home />);
  });

  // Test main heading
  test('renders main heading with correct text', () => {
    const heading = screen.getByRole('heading', { 
      name: /Dr\. Nireekshan Sodavaram/i 
    });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass('text-5xl md:text-7xl font-bold text-white');
  });

  // Test subtitle/description
  test('renders professional description', () => {
    const description = screen.getByText(
      /Senior Full Stack Developer \| AI\/ML Enthusiast \| FPGA Expert/i
    );
    expect(description).toBeInTheDocument();
    expect(description).toHaveClass('text-xl md:text-2xl text-gray-300');
  });

  // Test social links
  describe('Social Links', () => {
    test('renders GitHub link with correct attributes', () => {
      const githubLink = screen.getByRole('link', { name: /github-icon/i });
      expect(githubLink).toHaveAttribute('href', 'https://github.com/nik-dev-sketch');
      expect(githubLink).toHaveAttribute('target', '_blank');
      expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
    });

    test('renders LinkedIn link with correct attributes', () => {
      const linkedinLink = screen.getByRole('link', { name: /linkedin-icon/i });
      expect(linkedinLink).toHaveAttribute(
        'href', 
        'https://www.linkedin.com/in/dr-nireekshan-sodavaram-651525151/'
      );
      expect(linkedinLink).toHaveAttribute('target', '_blank');
      expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer');
    });

    test('renders Meetup link with correct attributes', () => {
      const meetupLink = screen.getByRole('link', { name: /users-icon/i });
      expect(meetupLink).toHaveAttribute('href', 'https://meetup.com/your-profile');
      expect(meetupLink).toHaveAttribute('target', '_blank');
      expect(meetupLink).toHaveAttribute('rel', 'noopener noreferrer');
    });

    test('renders all social icons', () => {
      expect(screen.getByTestId('github-icon')).toBeInTheDocument();
      expect(screen.getByTestId('linkedin-icon')).toBeInTheDocument();
      expect(screen.getByTestId('users-icon')).toBeInTheDocument();
    });
  });

  // Test service cards
  describe('Service Cards', () => {
    test('renders Full Stack Development card', () => {
      const title = screen.getByText('Full Stack Development');
      const description = screen.getByText(
        'Modern web applications with cutting-edge technologies'
      );
      expect(title).toBeInTheDocument();
      expect(description).toBeInTheDocument();
      expect(title.closest('div')).toHaveClass('bg-gray-800 p-6 rounded-lg');
    });

    test('renders FPGA Design card', () => {
      const title = screen.getByText('FPGA Design');
      const description = screen.getByText(
        'Hardware acceleration and digital system design'
      );
      expect(title).toBeInTheDocument();
      expect(description).toBeInTheDocument();
      expect(title.closest('div')).toHaveClass('bg-gray-800 p-6 rounded-lg');
    });

    test('renders AI/ML Integration card', () => {
      const title = screen.getByText('AI/ML Integration');
      const description = screen.getByText(
        'Intelligent systems and machine learning solutions'
      );
      expect(title).toBeInTheDocument();
      expect(description).toBeInTheDocument();
      expect(title.closest('div')).toHaveClass('bg-gray-800 p-6 rounded-lg');
    });
  });

  // Test layout and structure
  test('renders with correct layout structure', () => {
    const section = screen.getByRole('region');
    expect(section).toHaveAttribute('id', 'home');
    expect(section).toHaveClass('min-h-screen flex items-center justify-center bg-gray-900 pt-16');
  });

  // Test responsive classes
  test('contains responsive design classes', () => {
    const container = screen.getByRole('region');
    expect(container).toHaveClass('min-h-screen');
    
    const mainContent = container.firstChild;
    expect(mainContent).toHaveClass('max-w-7xl mx-auto px-4 sm:px-6 lg:px-8');
  });
});