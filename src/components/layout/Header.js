import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaPhone, FaSearch, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';

const TopBar = () => {
  const { t, i18n } = useTranslation();
  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  
  return (
    <div className="bg-secondary text-white py-2">
      <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
        <div className="flex flex-wrap items-center space-x-6">
          <div className="flex items-center">
            <FaPhone className="mr-2" />
            <span className="text-sm">Anaheim Hills: 714-385-1000</span>
          </div>
          <div className="flex items-center">
            <FaPhone className="mr-2" />
            <span className="text-sm">Victorville: 760-245-1000</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <button 
              onClick={() => changeLanguage('en')} 
              className={`text-sm ${i18n.language === 'en' ? 'font-bold underline' : ''}`}
            >
              EN
            </button>
            <span>|</span>
            <button 
              onClick={() => changeLanguage('es')} 
              className={`text-sm ${i18n.language === 'es' ? 'font-bold underline' : ''}`}
            >
              ES
            </button>
          </div>
          
          <div className="flex items-center space-x-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
          
          <div className="relative">
            <input 
              type="text" 
              placeholder={t('header.search')} 
              className="text-sm py-1 px-3 pr-8 rounded text-black focus:outline-none focus:ring-2 focus:ring-primary w-32"
            />
            <FaSearch className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

const DropdownMenu = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  return (
    <div 
      className="relative group" 
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button 
        className="flex items-center px-4 py-2 hover:text-primary focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {title}
        <svg 
          className={`ml-1 h-4 w-4 transform ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute left-0 mt-1 w-56 bg-white shadow-lg rounded-md z-50 border border-gray-200">
          <div className="py-1">
            {items.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-4 py-2 text-sm hover:bg-gray-100 ${location.pathname === item.path ? 'bg-gray-100 text-primary font-medium' : 'text-gray-700'}`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const MobileMenu = ({ isOpen, toggleMenu, menuItems }) => {
  const { t } = useTranslation();
  const [expandedSections, setExpandedSections] = useState({});
  
  if (!isOpen) return null;
  
  const toggleSection = (key) => {
    setExpandedSections(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };
  
  return (
    <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-6">
          <Link to="/" className="text-2xl font-bold text-primary" onClick={toggleMenu}>
            Aero Prosthetics
          </Link>
          <button 
            className="text-gray-700 hover:text-primary focus:outline-none"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <FaTimes className="h-6 w-6" />
          </button>
        </div>
        
        <div className="space-y-4">
          {menuItems.map((item) => {
            if (item.children) {
              return (
                <div key={item.path} className="border-b border-gray-200 pb-2">
                  <button 
                    className="flex justify-between items-center w-full py-2 text-left font-medium"
                    onClick={() => toggleSection(item.path)}
                  >
                    {item.label}
                    <svg 
                      className={`h-4 w-4 transform ${expandedSections[item.path] ? 'rotate-180' : ''}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {expandedSections[item.path] && (
                    <div className="pl-4 mt-2 space-y-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block py-1 text-gray-600 hover:text-primary"
                          onClick={toggleMenu}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className="block py-2 font-medium border-b border-gray-200"
                onClick={toggleMenu}
              >
                {item.label}
              </Link>
            );
          })}
          
          <Link 
            to="/contact" 
            className="block w-full text-center py-3 px-4 bg-accent text-white font-medium rounded-md hover:bg-yellow-500 transition duration-300 mt-6"
            onClick={toggleMenu}
          >
            {t('cta.requestInfo')}
          </Link>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const menuItems = [
    { label: t('nav.home'), path: '/' },
    { 
      label: t('nav.about'), 
      path: '/about',
      children: [
        { label: t('nav.about.mission'), path: '/about/mission' },
        { label: t('nav.about.difference'), path: '/about/difference' },
        { label: t('nav.about.team'), path: '/about/team' },
      ] 
    },
    { 
      label: t('nav.services'), 
      path: '/services',
      children: [
        { label: t('nav.services.lowerLimb'), path: '/services/lower-limb' },
        { label: t('nav.services.upperLimb'), path: '/services/upper-limb' },
        { label: t('nav.services.pediatric'), path: '/services/pediatric' },
        { label: t('nav.services.spinal'), path: '/services/spinal' },
        { label: t('nav.services.compression'), path: '/services/compression-mastectomy' },
        { label: t('nav.services.bracing'), path: '/services/custom-bracing' },
      ] 
    },
    { 
      label: t('nav.resources'), 
      path: '/resources',
      children: [
        { label: t('nav.resources.insurance'), path: '/resources/insurance' },
        { label: t('nav.resources.testimonials'), path: '/resources/testimonials' },
        { label: t('nav.resources.faqs'), path: '/resources/faqs' },
        { label: t('nav.resources.education'), path: '/resources/education' },
      ] 
    },
    { label: t('nav.locations'), path: '/locations' },
    { label: t('nav.contact'), path: '/contact' },
  ];
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (!mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };
  
  return (
    <header className="relative z-50 shadow-sm bg-white">
      <TopBar />
      
      <div 
        className={`${isScrolled ? 'py-2 shadow-md fixed top-0 left-0 right-0 bg-white' : 'py-4'} transition-all duration-300`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/logo-placeholder.png" 
                alt="Aero Prosthetics" 
                className="h-12 w-auto" 
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/150x50?text=Aero+Prosthetics';
                }}
              />
              <div className="ml-4 hidden md:block">
                <p className="text-xs text-gray-500">Innovative Prosthetic Solutions for Enhanced Mobility</p>
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-2">
              {menuItems.map((item) => {
                if (item.children) {
                  return (
                    <DropdownMenu 
                      key={item.path}
                      title={item.label}
                      items={item.children}
                    />
                  );
                }
                
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`px-4 py-2 hover:text-primary ${location.pathname === item.path ? 'text-primary font-medium' : ''}`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              
              <Link 
                to="/contact" 
                className="ml-4 py-2 px-4 bg-accent hover:bg-yellow-500 text-white rounded-md transition duration-300"
              >
                {t('cta.requestInfo')}
              </Link>
            </nav>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-700 hover:text-primary focus:outline-none"
              onClick={toggleMobileMenu}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle menu"
            >
              <FaBars className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={mobileMenuOpen} 
        toggleMenu={toggleMobileMenu} 
        menuItems={menuItems}
      />
    </header>
  );
};

export default Header;