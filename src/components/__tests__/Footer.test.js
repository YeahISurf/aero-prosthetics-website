import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../layout/Footer';

// Mock the useTranslation hook
jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: (str) => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
        language: 'en'
      },
    };
  },
}));

// Mock the Google Maps component since we don't want to load the actual maps in tests
jest.mock('@react-google-maps/api', () => ({
  GoogleMap: ({ children }) => <div data-testid="google-map">{children}</div>,
  LoadScript: ({ children }) => <>{children}</>,
  Marker: () => <div data-testid="map-marker"></div>
}));

describe('Footer Component', () => {
  test('renders contact information', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    
    // Check for phone numbers
    expect(screen.getByText(/714-385-1000/)).toBeInTheDocument();
    expect(screen.getByText(/760-245-1000/)).toBeInTheDocument();
    
    // Check for addresses
    expect(screen.getByText(/Anaheim Hills/)).toBeInTheDocument();
    expect(screen.getByText(/Victorville/)).toBeInTheDocument();
  });

  test('renders copyright information', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    
    expect(screen.getByText('footer.copyright')).toBeInTheDocument();
  });

  test('renders quick links section', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    
    expect(screen.getByText('footer.quickLinks')).toBeInTheDocument();
  });
});
