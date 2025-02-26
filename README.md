# Aero Prosthetics Website

A modern, responsive website for Aero Prosthetics, a division of Aero Mobility Inc. This project is designed to provide a comprehensive web presence for a prosthetics and orthotics provider, featuring multiple locations, services, and patient resources.

## Features

- Modern React-based frontend
- Responsive design that works on all devices
- Comprehensive content management
- Dual-language support (English/Spanish)
- Interactive location maps
- Accessible design following WCAG 2.1 AA standards
- Service information and educational resources
- Patient testimonials and team profiles
- Automated testing setup
- Deployment configuration for Netlify

## Pages

- Home
- About Us (Mission, Our Difference, Team)
- Services (Lower Limb, Upper Limb, Pediatric, Spinal, Compression & Mastectomy, Custom Bracing)
- Patient Resources (Insurance, Testimonials, FAQs, Educational Resources)
- Locations
- Contact Us
- Legal Pages (Privacy Policy, Terms of Use, Accessibility Statement)

## Getting Started

### Prerequisites

- Node.js 14.0 or later
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/YeahISurf/aero-prosthetics-website.git
cd aero-prosthetics-website
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm start
# or
yarn start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser

### Testing

Run tests with:
```bash
npm test
```

### Deployment

This project is configured for easy deployment to Netlify. Simply connect your GitHub repository to Netlify, and it will automatically deploy when changes are pushed to the main branch.

To build for production manually:
```bash
npm run build
```

## Project Structure

```
/src
  /components      # Reusable UI components
    /layout        # Layout components like Header and Footer
    /__tests__     # Component tests
  /pages           # Page components
  /data            # Mock data for development
  /assets          # Static assets like images
  /styles          # Global styles and Tailwind configuration
  /i18n.js         # Internationalization configuration
```

## Built With

- [React](https://reactjs.org/) - Frontend framework
- [React Router](https://reactrouter.com/) - For routing
- [Tailwind CSS](https://tailwindcss.com/) - For styling
- [i18next](https://www.i18next.com/) - For internationalization
- [Google Maps API](https://developers.google.com/maps) - For location maps
- [React Icons](https://react-icons.github.io/react-icons/) - For iconography
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) - For testing

## License

This project is licensed under the MIT License