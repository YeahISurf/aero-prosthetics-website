import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaArrowRight, FaCogs, FaUserCheck } from 'react-icons/fa';

// Components
import PageHeader from '../components/PageHeader';

// Mock data
import { servicesOverview } from '../data/homeData';

const Services = () => {
  const { t } = useTranslation();
  
  const breadcrumbs = [
    { label: 'Home', url: '/' },
    { label: 'Services', url: null }
  ];
  
  return (
    <div>
      <PageHeader 
        title="Comprehensive Prosthetic & Orthotic Solutions"
        subtitle="Innovative, personalized care for enhanced mobility and improved quality of life"
        breadcrumbs={breadcrumbs}
        backgroundImage="https://via.placeholder.com/1920x600?text=Prosthetic+Services"
      />
      
      {/* Introduction */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg mb-6">
              At Aero Prosthetics, we provide a full spectrum of prosthetic and orthotic services using the latest technology and techniques. Our team of certified professionals works closely with you to create custom solutions that meet your unique needs and goals.            
            </p>
            <p className="text-lg">
              Each patient receives a personalized care plan, from initial consultation through ongoing adjustments and support. We're committed to helping you achieve optimal comfort, function, and mobility.
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
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
        </div>
      </section>
      
      {/* Technology Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 font-heading">Advanced Technology for Superior Outcomes</h2>
              <p className="mb-4">
                We leverage cutting-edge technology throughout our practice to deliver the best possible outcomes for our patients. From 3D scanning and printing to microprocessor-controlled components, we integrate the latest innovations into our custom solutions.
              </p>
              <p className="mb-6">
                Our investment in advanced fabrication techniques allows us to create lighter, stronger, and more comfortable devices that better mimic natural movement and function.
              </p>
              <div className="flex items-center text-primary">
                <FaCogs className="text-3xl mr-4" />
                <p className="font-medium">Precision engineering for optimal performance</p>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://via.placeholder.com/600x400?text=Advanced+Technology" 
                alt="Advanced prosthetic technology" 
                className="rounded-lg shadow-md w-full"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Patient Journey */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-heading">Your Path to Enhanced Mobility</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary"></div>
              
              {/* Timeline items */}
              <div className="space-y-16">
                {/* Item 1 */}
                <div className="relative">
                  <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">1</div>
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                      <h3 className="text-xl font-semibold mb-2 font-heading">Initial Consultation</h3>
                      <p className="text-gray-600">We'll discuss your needs, goals, and medical history to develop an understanding of your unique situation.</p>
                    </div>
                    <div className="md:w-1/2 md:pl-12">
                      <img 
                        src="https://via.placeholder.com/300x200?text=Consultation" 
                        alt="Initial consultation" 
                        className="rounded-lg shadow-sm w-full"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Item 2 */}
                <div className="relative">
                  <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">2</div>
                  <div className="flex flex-col md:flex-row-reverse items-center">
                    <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0">
                      <h3 className="text-xl font-semibold mb-2 font-heading">Assessment & Design</h3>
                      <p className="text-gray-600">Our team will conduct a thorough evaluation and create a custom design plan tailored to your body and lifestyle.</p>
                    </div>
                    <div className="md:w-1/2 md:pr-12 md:text-right">
                      <img 
                        src="https://via.placeholder.com/300x200?text=Assessment" 
                        alt="Assessment and design" 
                        className="rounded-lg shadow-sm w-full"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Item 3 */}
                <div className="relative">
                  <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">3</div>
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                      <h3 className="text-xl font-semibold mb-2 font-heading">Fabrication</h3>
                      <p className="text-gray-600">Using advanced techniques, we'll create your custom prosthetic or orthotic device with precision and care.</p>
                    </div>
                    <div className="md:w-1/2 md:pl-12">
                      <img 
                        src="https://via.placeholder.com/300x200?text=Fabrication" 
                        alt="Fabrication process" 
                        className="rounded-lg shadow-sm w-full"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Item 4 */}
                <div className="relative">
                  <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">4</div>
                  <div className="flex flex-col md:flex-row-reverse items-center">
                    <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0">
                      <h3 className="text-xl font-semibold mb-2 font-heading">Fitting & Adjustments</h3>
                      <p className="text-gray-600">We'll ensure your device fits perfectly and make any necessary adjustments for optimal comfort and function.</p>
                    </div>
                    <div className="md:w-1/2 md:pr-12 md:text-right">
                      <img 
                        src="https://via.placeholder.com/300x200?text=Fitting" 
                        alt="Fitting and adjustments" 
                        className="rounded-lg shadow-sm w-full"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Item 5 */}
                <div className="relative">
                  <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">5</div>
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                      <h3 className="text-xl font-semibold mb-2 font-heading">Training & Education</h3>
                      <p className="text-gray-600">We'll provide comprehensive training on using and caring for your device to maximize its benefits.</p>
                    </div>
                    <div className="md:w-1/2 md:pl-12">
                      <img 
                        src="https://via.placeholder.com/300x200?text=Training" 
                        alt="Training and education" 
                        className="rounded-lg shadow-sm w-full"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Item 6 */}
                <div className="relative">
                  <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">6</div>
                  <div className="flex flex-col md:flex-row-reverse items-center">
                    <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0">
                      <h3 className="text-xl font-semibold mb-2 font-heading">Follow-up & Support</h3>
                      <p className="text-gray-600">Our care continues with ongoing support, maintenance, and adjustments to ensure long-term success.</p>
                    </div>
                    <div className="md:w-1/2 md:pr-12 md:text-right">
                      <img 
                        src="https://via.placeholder.com/300x200?text=Follow-up" 
                        alt="Follow-up and support" 
                        className="rounded-lg shadow-sm w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Insurance Banner */}
      <section className="py-10 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 font-heading">Insurance Information</h3>
            <p className="text-lg mb-6">
              Subject to prior approval and copays, we accept most insurances including Medicare, Medicaid, and private plans.
            </p>
            <Link 
              to="/contact" 
              className="bg-white text-primary hover:bg-gray-100 font-medium py-3 px-6 rounded-md transition duration-300 inline-block"
            >
              Contact us to verify coverage
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-heading">Patient Success Stories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="italic mb-4">"After my below-knee amputation, I was concerned about returning to my active lifestyle. The team at Aero Prosthetics designed a solution that has allowed me to not only walk comfortably but return to hiking and cycling."</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src="https://via.placeholder.com/100?text=JD" 
                    alt="John D." 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold">John D.</p>
                  <p className="text-sm text-gray-600">Lower Limb Prosthetic User</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="italic mb-4">"The custom spinal brace I received has dramatically reduced my pain and improved my posture. The team took the time to understand my specific needs and created a solution that works perfectly for my daily activities."</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src="https://via.placeholder.com/100?text=LP" 
                    alt="Lisa P." 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold">Lisa P.</p>
                  <p className="text-sm text-gray-600">Spinal Orthotic Patient</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link 
              to="/resources/testimonials" 
              className="inline-flex items-center text-primary hover:text-blue-700 font-medium"
            >
              View more patient testimonials
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 font-heading">Ready to Discuss Your Needs?</h2>
            <p className="text-lg mb-8">
              Our team is ready to help you explore the prosthetic and orthotic options that best suit your unique situation.
            </p>
            <div className="flex justify-center">
              <FaUserCheck className="text-5xl text-primary mr-6" />
            </div>
            <Link 
              to="/contact" 
              className="mt-6 bg-accent hover:bg-yellow-500 text-white font-medium py-3 px-8 rounded-md transition duration-300 inline-block"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;