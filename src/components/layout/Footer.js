import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaClock } from 'react-icons/fa';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const LocationMap = ({ location, center }) => {
  const mapContainerStyle = {
    width: '100%',
    height: '150px',
  };
  
  const options = {
    disableDefaultUI: true,
    zoomControl: true,
  };
  
  return (
    <div className="mt-2 rounded-md overflow-hidden">
      <LoadScript googleMapsApiKey="YOUR_API_KEY_HERE">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={15}
          options={options}
        >
          <Marker position={center} title={location} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

const Footer = () => {
  const { t, i18n } = useTranslation();
  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  
  const anaheimsLocation = {
    address: '1001 N Weir Canyon Road, Anaheim Hills, CA 92807',
    center: { lat: 33.8600, lng: -117.7500 }, // Placeholder coordinates, replace with actual
    phone: '714-385-1000',
  };
  
  const victorvilleLocation = {
    address: '17189 Yuma Street, Victorville, CA 92395',
    center: { lat: 34.5362, lng: -117.2928 }, // Placeholder coordinates, replace with actual
    phone: '760-245-1000',
  };
  
  const quickLinks = [
    { label: t('nav.home'), path: '/' },
    { label: t('nav.about'), path: '/about' },
    { label: t('nav.services'), path: '/services' },
    { label: t('nav.resources'), path: '/resources' },
    { label: t('nav.locations'), path: '/locations' },
    { label: t('nav.contact'), path: '/contact' },
    { label: t('nav.resources.insurance'), path: '/resources/insurance' },
    { label: 'Privacy Policy', path: '/privacy' },
    { label: 'Terms of Use', path: '/terms' },
  ];
  
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/">
              <img 
                src="/logo-placeholder.png" 
                alt="Aero Prosthetics" 
                className="h-12 w-auto mb-4" 
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/150x50?text=Aero+Prosthetics';
                  e.target.className = 'bg-white p-2 h-12 w-auto mb-4';
                }}
              />
            </Link>
            <p className="mb-4">Empowering lives with innovative prosthetic solutions.</p>
            <div className="flex items-center mb-2">
              <FaPhone className="mr-2 text-accent" />
              <span>Anaheim Hills: {anaheimsLocation.phone}</span>
            </div>
            <div className="flex items-center">
              <FaPhone className="mr-2 text-accent" />
              <span>Victorville: {victorvilleLocation.phone}</span>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-heading font-semibold mb-4 border-b border-gray-700 pb-2">
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="hover:text-accent transition duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Locations */}
          <div>
            <h3 className="text-xl font-heading font-semibold mb-4 border-b border-gray-700 pb-2">
              {t('footer.locations')}
            </h3>
            
            {/* Anaheim Hills */}
            <div className="mb-6">
              <h4 className="font-medium mb-2">Anaheim Hills</h4>
              <div className="flex items-start mb-2">
                <FaMapMarkerAlt className="mr-2 mt-1 text-accent" />
                <span>{anaheimsLocation.address}</span>
              </div>
              <div className="flex items-center mb-2">
                <FaPhone className="mr-2 text-accent" />
                <span>{anaheimsLocation.phone}</span>
              </div>
              <div className="flex items-center mb-2">
                <FaClock className="mr-2 text-accent" />
                <span>{t('footer.hours')}</span>
              </div>
              <LocationMap location="Anaheim Hills" center={anaheimsLocation.center} />
              <a 
                href={`https://maps.google.com/?q=${encodeURIComponent(anaheimsLocation.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-sm text-accent hover:underline"
              >
                Get Directions
              </a>
            </div>
            
            {/* Victorville */}
            <div>
              <h4 className="font-medium mb-2">Victorville</h4>
              <div className="flex items-start mb-2">
                <FaMapMarkerAlt className="mr-2 mt-1 text-accent" />
                <span>{victorvilleLocation.address}</span>
              </div>
              <div className="flex items-center mb-2">
                <FaPhone className="mr-2 text-accent" />
                <span>{victorvilleLocation.phone}</span>
              </div>
              <div className="flex items-center mb-2">
                <FaClock className="mr-2 text-accent" />
                <span>{t('footer.hours')}</span>
              </div>
              <LocationMap location="Victorville" center={victorvilleLocation.center} />
              <a 
                href={`https://maps.google.com/?q=${encodeURIComponent(victorvilleLocation.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-sm text-accent hover:underline"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Footer */}
      <div className="bg-gray-900 py-4">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
          <div className="text-sm mb-4 md:mb-0">
            {t('footer.copyright')}
          </div>
          
          <div className="flex flex-wrap items-center space-x-6">
            <div className="flex items-center space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-accent transition duration-300">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-accent transition duration-300">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-accent transition duration-300">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-accent transition duration-300">
                <FaLinkedin />
              </a>
            </div>
            
            <div className="flex items-center space-x-2 ml-4">
              <button 
                onClick={() => changeLanguage('en')} 
                className={`text-xs ${i18n.language === 'en' ? 'font-bold underline' : ''}`}
              >
                EN
              </button>
              <span>|</span>
              <button 
                onClick={() => changeLanguage('es')} 
                className={`text-xs ${i18n.language === 'es' ? 'font-bold underline' : ''}`}
              >
                ES
              </button>
            </div>
          </div>
          
          <div className="w-full md:w-auto text-xs text-gray-500 mt-4 md:mt-0">
            Website by YeahISurf
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;