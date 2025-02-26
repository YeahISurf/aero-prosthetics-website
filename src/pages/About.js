import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Import placeholder data
import { teamMembers, coreValues } from '../data/aboutData';

const MissionBanner = () => {
  const { t } = useTranslation();
  
  return (
    <section className="relative bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
            Our Mission
          </h1>
          <p className="text-xl">
            To empower individuals through personalized, innovative prosthetic solutions that enhance mobility, restore confidence, and improve quality of life. We are committed to exceptional patient care, cutting-edge technology, and comprehensive support throughout each patient's journey.
          </p>
        </div>
      </div>
    </section>
  );
};

const StorySection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 font-heading">The Aero Prosthetics Story</h2>
            <p className="mb-4">
              Founded in 2015, Aero Prosthetics emerged from a vision to transform the prosthetic care experience. Our founders recognized that patients needed more than just technical solutions - they needed comprehensive care that addressed the physical, emotional, and lifestyle aspects of living with prosthetics.
            </p>
            <p className="mb-4">
              With locations in Anaheim Hills and Victorville, we've built a team of dedicated professionals who combine clinical expertise with genuine compassion. Our practice has grown through word-of-mouth referrals from satisfied patients who have experienced the Aero difference.
            </p>
            <p>
              Today, we continue to push the boundaries of what's possible in prosthetic care, incorporating the latest technologies while never losing sight of the individual needs of each patient we serve.
            </p>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://via.placeholder.com/600x400?text=Our+Story" 
              alt="Aero Prosthetics team and facility" 
              className="rounded-lg shadow-md w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const CoreValuesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 font-heading">Our Core Values</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreValues.map((value) => (
            <div key={value.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="text-primary text-4xl mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 font-heading">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const DifferenceSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 font-heading">What Sets Us Apart</h2>
        
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <img 
              src="https://via.placeholder.com/600x400?text=Our+Difference" 
              alt="Patient receiving care" 
              className="rounded-lg shadow-md w-full"
            />
          </div>
          <div className="md:w-1/2">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 font-heading">Personalized Care Plan</h3>
                <p className="text-gray-600">
                  We develop individualized treatment plans based on your unique needs, lifestyle, and goals. No two patients are alike, and we ensure your prosthetic solution is specifically designed for you.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 font-heading">Advanced Technology</h3>
                <p className="text-gray-600">
                  We invest in cutting-edge technology and techniques to provide you with the most advanced prosthetic options available, from microprocessor-controlled devices to custom 3D-printed solutions.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 font-heading">Comprehensive Support</h3>
                <p className="text-gray-600">
                  Our care extends beyond the fitting room. We offer ongoing support, adjustments, and education to ensure you achieve optimal function and comfort with your prosthetic device.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 font-heading">Multi-Disciplinary Approach</h3>
                <p className="text-gray-600">
                  We collaborate with a network of healthcare professionals including physical therapists, surgeons, and primary care providers to ensure coordinated, holistic care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TeamOverview = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 font-heading">Meet Our Expert Team</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.slice(0, 6).map((member) => (
            <div key={member.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <img 
                src={member.image || `https://via.placeholder.com/300x300?text=${member.name}`} 
                alt={member.name} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 font-heading">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.position}</p>
                <p className="text-gray-600 mb-4 line-clamp-3">{member.shortBio}</p>
                <Link 
                  to={`/about/team/${member.id}`}
                  className="text-primary hover:text-blue-700 font-medium"
                >
                  Read Full Bio
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/about/team" 
            className="bg-primary hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition duration-300 inline-block"
          >
            View All Team Members
          </Link>
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="py-12 bg-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6 font-heading">Experience the Aero Prosthetics Difference</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Our team is ready to help you achieve your mobility goals with personalized care and innovative solutions.
        </p>
        <Link 
          to="/contact" 
          className="bg-white text-primary hover:bg-gray-100 font-medium py-3 px-8 rounded-md transition duration-300 inline-block"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
};

const About = () => {
  const location = useLocation();
  const [activePage, setActivePage] = useState('about');
  
  useEffect(() => {
    // Extract the current section from the URL path
    const path = location.pathname;
    if (path.includes('/mission')) {
      setActivePage('mission');
    } else if (path.includes('/difference')) {
      setActivePage('difference');
    } else if (path.includes('/team')) {
      setActivePage('team');
    } else {
      setActivePage('about');
    }
  }, [location.pathname]);
  
  return (
    <div>
      <MissionBanner />
      
      {/* Render sections based on active page */}
      {activePage === 'about' || activePage === 'mission' ? (
        <StorySection />
      ) : null}
      
      {activePage === 'about' || activePage === 'mission' ? (
        <CoreValuesSection />
      ) : null}
      
      {activePage === 'about' || activePage === 'difference' ? (
        <DifferenceSection />
      ) : null}
      
      {activePage === 'about' || activePage === 'team' ? (
        <TeamOverview />
      ) : null}
      
      <CTASection />
    </div>
  );
};

export default About;