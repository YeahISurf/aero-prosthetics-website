import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NotFound = () => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-6 font-heading">404</h1>
        <h2 className="text-3xl font-semibold mb-4 font-heading">Page Not Found</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto">
          We're sorry, the page you are looking for cannot be found. It might have been moved or doesn't exist.
        </p>
        <div className="space-x-4">
          <Link 
            to="/" 
            className="bg-primary hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition duration-300 inline-block"
          >
            Return Home
          </Link>
          <Link 
            to="/contact" 
            className="bg-secondary hover:bg-gray-600 text-white font-medium py-3 px-6 rounded-md transition duration-300 inline-block"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;