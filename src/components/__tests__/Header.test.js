import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';
import Header from '../layout/Header';

// Mock the useTranslation hook
jest.mock('react-i18next', () => ({
  // this mock makes sure any components using the translate hook can use it without a warning being shown
  useTranslation: () => {
    return {
      t: (str) => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
        language: 'en'
      },
    };
  },
  I18nextProvider: ({ children }) => children
}));

describe('Header Component', () => {
  test('renders the Aero Prosthetics name', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    
    const nameElement = screen.getByText(/Aero Prosthetics/i);
    expect(nameElement).toBeInTheDocument();
  });

  test('renders navigation links', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    
    // Since we're using the mock, these will be the key names rather than translated text
    expect(screen.getByText('nav.home')).toBeInTheDocument();
    expect(screen.getByText('nav.about')).toBeInTheDocument();
    expect(screen.getByText('nav.services')).toBeInTheDocument();
    expect(screen.getByText('nav.resources')).toBeInTheDocument();
    expect(screen.getByText('nav.locations')).toBeInTheDocument();
    expect(screen.getByText('nav.contact')).toBeInTheDocument();
  });
});
