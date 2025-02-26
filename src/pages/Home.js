import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaArrowRight, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

// Components imports
import TestimonialSlider from '../components/TestimonialSlider';

// Placeholder data for development
import { differenceItems, servicesOverview, testimonials } from '../data/homeData';

const HeroSection = () => {
  const { t } = useTranslation();
  
  return (
    <section className="relative bg-gray-900 text-white">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: 'url(https://via.placeholder.com/1920x1080)', 
          backgroundPosition: 'center',
          opacity: '0.4'
        }}
        aria-hidden="true"
      ></div>
      
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            {t('home.hero.title')}
          </h1>
          <p className="text-xl mb-8">
            {t('home.hero.subtitle')}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/services" 
              className="bg-primary hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition duration-300"
            >
              {t('nav.services')}
            </Link>
            <Link 
              to="/contact" 
              className="bg-accent hover:bg-yellow-500 text-white font-medium py-3 px-6 rounded-md transition duration-300"
            >
              {t('cta.contactUs')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const DifferenceSection = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 font-heading">
          {t('home.difference.title')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differenceItems.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="text-primary text-4xl mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 font-heading">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <Link 
                to={item.link} 
                className="inline-flex items-center text-primary hover:text-blue-700 font-medium"
              >
                {t('cta.learnMore')}
                <FaArrowRight className="ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServicesOverview = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 font-heading">
          {t('home.services.title')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesOverview.map((service) => (
            <div key={service.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition duration-300">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <img 
                  src={service.image || 'https://via.placeholder.com/400x300?text=Service'} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 font-heading">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link 
                  to={service.link} 
                  className="inline-flex items-center text-primary hover:text-blue-700 font-medium"
                >
                  {t('cta.learnMore')}
                  <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/services" 
            className="bg-primary hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition duration-300 inline-block"
          >
            {t('nav.services')}
          </Link>
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 font-heading">
          {t('home.testimonials.title')}
        </h2>
        
        <TestimonialSlider testimonials={testimonials} />
        
        <div className="text-center mt-12">
          <Link 
            to="/resources/testimonials" 
            className="inline-flex items-center text-primary hover:text-blue-700 font-medium"
          >
            {t('nav.resources.testimonials')}
            <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const LocationsSection = () => {
  const { t } = useTranslation();
  
  const locations = [
    {
      id: 1,
      name: 'Anaheim Hills',
      address: '1001 N Weir Canyon Road, Anaheim Hills, CA 92807',
      phone: '714-385-1000',
      link: '/locations#anaheim'
    },
    {
      id: 2,
      name: 'Victorville',
      address: '17189 Yuma Street, Victorville, CA 92395',
      phone: '760-245-1000',
      link: '/locations#victorville'
    }
  ];
  
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 font-heading">
          {t('home.locations.title')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {locations.map((location) => (
            <div key={location.id} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 font-heading">{location.name}</h3>
              
              <div className="flex items-start mb-3">
                <FaMapMarkerAlt className="text-primary mt-1 mr-3" />
                <p>{location.address}</p>
              </div>
              
              <div className="flex items-center mb-4">
                <FaPhone className="text-primary mr-3" />
                <p>{location.phone}</p>
              </div>
              
              <div className="h-48 bg-gray-200 mb-4 rounded overflow-hidden">
                {/* Placeholder for Google Map */}
                <img 
                  src={`https://via.placeholder.com/600x300?text=${location.name}+Map`}
                  alt={`Map of ${location.name} location`}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <Link 
                to={location.link} 
                className="inline-flex items-center text-primary hover:text-blue-700 font-medium"
              >
                Get Directions
                <FaArrowRight className="ml-2" />
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/locations" 
            className="bg-primary hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition duration-300 inline-block"
          >
            {t('nav.locations')}
          </Link>
        </div>
      </div>
    </section>
  );
};

const CTABanner = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-12 bg-gradient-to-r from-primary to-accent text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 font-heading">
          {t('home.cta.title')}
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          {t('home.cta.subtitle')}
        </p>
        <Link 
          to="/contact" 
          className="bg-white text-primary hover:bg-gray-100 font-medium py-3 px-8 rounded-md transition duration-300 inline-block"
        >
          {t('cta.contactUs')}
        </Link>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <div>
      <HeroSection />
      <DifferenceSection />
      <ServicesOverview />
      <TestimonialsSection />
      <LocationsSection />
      <CTABanner />
    </div>
  );
};

export default Home;