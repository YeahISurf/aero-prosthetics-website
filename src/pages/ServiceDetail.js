import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaCheckCircle, FaArrowRight, FaQuestionCircle, FaPrint, FaShare } from 'react-icons/fa';

// Components
import PageHeader from '../components/PageHeader';

// Mock data
import { servicesData } from '../data/servicesData';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);
  
  useEffect(() => {
    // In a real application, this would be an API call
    const foundService = servicesData.find(s => s.slug === serviceId);
    
    if (foundService) {
      setService(foundService);
      setLoading(false);
    } else {
      // Service not found, redirect to services page
      navigate('/services');
    }
  }, [serviceId, navigate]);
  
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }
  
  const toggleFaq = (index) => {
    if (activeFaq === index) {
      setActiveFaq(null);
    } else {
      setActiveFaq(index);
    }
  };
  
  const breadcrumbs = [
    { label: 'Home', url: '/' },
    { label: 'Services', url: '/services' },
    { label: service.title, url: null }
  ];
  
  return (
    <div>
      <PageHeader 
        title={service.title}
        subtitle={service.shortDescription}
        breadcrumbs={breadcrumbs}
        backgroundImage={service.headerImage}
      />
      
      {/* Overview */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold mb-6 font-heading">Overview</h2>
              {service.overview.map((paragraph, index) => (
                <p key={index} className="mb-4">{paragraph}</p>
              ))}
              
              <div className="mt-8 flex items-center">
                <button 
                  onClick={() => window.print()} 
                  className="flex items-center text-gray-600 hover:text-primary mr-6"
                >
                  <FaPrint className="mr-2" />
                  Print Information
                </button>
                <button 
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: service.title,
                        text: service.shortDescription,
                        url: window.location.href,
                      })
                    }
                  }} 
                  className="flex items-center text-gray-600 hover:text-primary"
                >
                  <FaShare className="mr-2" />
                  Share
                </button>
              </div>
            </div>
            
            <div className="md:w-1/3 bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 font-heading">Quick Info</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FaCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <span>Initial consultation: {service.initialConsultationTime}</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <span>Follow-up appointments: {service.followUpTime}</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <span>Insurance: {service.insuranceInfo}</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <span>Available at: {service.availableLocations.join(', ')}</span>
                </li>
              </ul>
              
              <div className="mt-6">
                <Link 
                  to="/contact" 
                  className="block w-full text-center bg-accent hover:bg-yellow-500 text-white font-medium py-3 px-4 rounded-md transition duration-300"
                >
                  Request Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Types/Options */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-heading">{service.typesTitle}</h2>
          
          <div className="max-w-4xl mx-auto">
            {/* Tabs Navigation */}
            <div className="flex flex-wrap border-b border-gray-200 mb-8">
              {service.types.map((type, index) => (
                <button
                  key={index}
                  className={`py-2 px-4 font-medium text-lg ${activeTab === index ? 'text-primary border-b-2 border-primary' : 'text-gray-600 hover:text-primary'}`}
                  onClick={() => setActiveTab(index)}
                >
                  {type.name}
                </button>
              ))}
            </div>
            
            {/* Active Tab Content */}
            <div className="mb-8">
              <div className="flex flex-col md:flex-row items-center gap-8 mb-6">
                <div className="md:w-1/2">
                  <img 
                    src={service.types[activeTab].image} 
                    alt={service.types[activeTab].name} 
                    className="rounded-lg shadow-md w-full"
                  />
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4 font-heading">{service.types[activeTab].name}</h3>
                  <p className="mb-4">{service.types[activeTab].description}</p>
                  <ul className="space-y-2">
                    {service.types[activeTab].features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <FaCheckCircle className="text-primary mt-1 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-heading">Benefits</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {service.benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300">
                <div className="text-primary text-3xl mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 font-heading">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Technology */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-heading">{service.technologyTitle}</h2>
          
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <img 
                src={service.technologyImage} 
                alt="Advanced technology" 
                className="rounded-lg shadow-md w-full"
              />
            </div>
            <div className="md:w-1/2">
              {service.technologyDescription.map((paragraph, index) => (
                <p key={index} className="mb-4">{paragraph}</p>
              ))}
              
              <div className="mt-6">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center text-primary hover:text-blue-700 font-medium"
                >
                  Contact us to learn more
                  <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQs */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 font-heading">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              {service.faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button 
                    className="flex justify-between items-center w-full p-4 text-left font-medium focus:outline-none"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="flex items-center">
                      <FaQuestionCircle className="text-primary mr-3" />
                      {faq.question}
                    </span>
                    <svg 
                      className={`w-5 h-5 transform transition-transform ${activeFaq === index ? 'rotate-180' : ''}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {activeFaq === index && (
                    <div className="p-4 bg-gray-50 border-t border-gray-200">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <p className="mb-4">Still have questions? We're here to help.</p>
              <Link 
                to="/contact" 
                className="bg-primary hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition duration-300 inline-block"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Case Studies/Testimonials */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-heading">Patient Success Stories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {service.caseStudies.map((caseStudy, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                {caseStudy.image && (
                  <img 
                    src={caseStudy.image} 
                    alt={`Case study ${index + 1}`} 
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                )}
                <h3 className="text-xl font-semibold mb-2 font-heading">{caseStudy.title}</h3>
                <p className="text-gray-600 mb-4">{caseStudy.description}</p>
                <div className="text-sm text-gray-500 italic">{caseStudy.patient}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Related Services */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-heading">Related Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {service.relatedServices.map((relatedService, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition duration-300">
                <div className="h-40 bg-gray-200 flex items-center justify-center">
                  <img 
                    src={relatedService.image} 
                    alt={relatedService.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 font-heading">{relatedService.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{relatedService.description}</p>
                  <Link 
                    to={relatedService.link} 
                    className="inline-flex items-center text-primary hover:text-blue-700 text-sm font-medium"
                  >
                    Learn more
                    <FaArrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-12 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 font-heading">Take the First Step Toward Improved Mobility</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to schedule a consultation and explore how our {service.title.toLowerCase()} can help you achieve your mobility goals.
          </p>
          <Link 
            to="/contact" 
            className="bg-white text-primary hover:bg-gray-100 font-medium py-3 px-8 rounded-md transition duration-300 inline-block"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;