import React, { useState, useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaFilePdf, FaExternalLinkAlt, FaQuoteRight, FaQuestion, FaInfoCircle, FaIdCard, FaBookMedical, FaHandHoldingHeart } from 'react-icons/fa';

// Components
import PageHeader from '../components/PageHeader';

const Resources = () => {
  const { t } = useTranslation();
  const { resourceType } = useParams();
  const location = useLocation();
  
  const [activeTab, setActiveTab] = useState('insurance');
  
  useEffect(() => {
    if (resourceType) {
      setActiveTab(resourceType);
    } else if (location.hash) {
      setActiveTab(location.hash.substring(1));
    }
  }, [resourceType, location.hash]);
  
  const breadcrumbs = [
    { label: 'Home', url: '/' },
    { label: 'Patient Resources', url: null }
  ];
  
  const tabContent = {
    insurance: <InsuranceInfo />,
    testimonials: <Testimonials />,
    faqs: <FAQs />,
    education: <EducationalResources />,
    care: <PatientCare />,
    links: <UsefulLinks />
  };
  
  return (
    <div>
      <PageHeader 
        title="Patient Resources"
        subtitle="Helpful information to support your prosthetic and orthotic journey"
        breadcrumbs={breadcrumbs}
        backgroundImage="https://via.placeholder.com/1920x600?text=Patient+Resources"
      />
      
      {/* Tabs Navigation */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto pb-3 md:pb-0 -mx-4 px-4 md:px-0">
            <TabButton 
              label="Insurance Information" 
              icon={<FaIdCard />} 
              isActive={activeTab === 'insurance'} 
              onClick={() => setActiveTab('insurance')} 
            />
            <TabButton 
              label="Testimonials" 
              icon={<FaQuoteRight />} 
              isActive={activeTab === 'testimonials'} 
              onClick={() => setActiveTab('testimonials')} 
            />
            <TabButton 
              label="FAQs" 
              icon={<FaQuestion />} 
              isActive={activeTab === 'faqs'} 
              onClick={() => setActiveTab('faqs')} 
            />
            <TabButton 
              label="Educational Resources" 
              icon={<FaBookMedical />} 
              isActive={activeTab === 'education'} 
              onClick={() => setActiveTab('education')} 
            />
            <TabButton 
              label="Patient Care" 
              icon={<FaHandHoldingHeart />} 
              isActive={activeTab === 'care'} 
              onClick={() => setActiveTab('care')} 
            />
            <TabButton 
              label="Useful Links" 
              icon={<FaExternalLinkAlt />} 
              isActive={activeTab === 'links'} 
              onClick={() => setActiveTab('links')} 
            />
          </div>
        </div>
      </section>
      
      {/* Tab Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {tabContent[activeTab]}
        </div>
      </section>
    </div>
  );
};

const TabButton = ({ label, icon, isActive, onClick }) => (
  <button 
    className={`flex items-center whitespace-nowrap px-4 py-2 mr-2 rounded-md transition-colors ${isActive ? 'bg-primary text-white' : 'text-gray-600 hover:bg-gray-100'}`}
    onClick={onClick}
  >
    <span className="mr-2">{icon}</span>
    {label}
  </button>
);

const InsuranceInfo = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 font-heading">Insurance Information</h2>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-10">
        <h3 className="text-xl font-semibold mb-4 font-heading">Insurance Coverage for Prosthetics & Orthotics</h3>
        <p className="mb-4">
          Aero Prosthetics works with most major insurance providers to help you maximize your coverage benefits. We understand that navigating insurance can be challenging, and our dedicated insurance specialists are here to assist you throughout the process.
        </p>
        <p className="mb-6">
          We verify your benefits before treatment begins and provide clear information about your coverage, including any deductibles, copayments, or out-of-pocket expenses you may incur. Our goal is to ensure you have a complete understanding of your financial responsibilities.
        </p>
        
        <h4 className="text-lg font-semibold mb-3">Insurance Plans We Accept</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-50 p-3 rounded text-center">Medicare</div>
          <div className="bg-gray-50 p-3 rounded text-center">Medicaid/Medi-Cal</div>
          <div className="bg-gray-50 p-3 rounded text-center">Blue Cross/Blue Shield</div>
          <div className="bg-gray-50 p-3 rounded text-center">United Healthcare</div>
          <div className="bg-gray-50 p-3 rounded text-center">Aetna</div>
          <div className="bg-gray-50 p-3 rounded text-center">Cigna</div>
          <div className="bg-gray-50 p-3 rounded text-center">Kaiser Permanente</div>
          <div className="bg-gray-50 p-3 rounded text-center">Tricare</div>
          <div className="bg-gray-50 p-3 rounded text-center">Workers' Compensation</div>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="text-lg font-semibold mb-2 text-primary">Need Help With Coverage Verification?</h4>
          <p className="mb-3">
            Contact our insurance specialists to verify your coverage before your appointment.
          </p>
          <div className="flex items-center">
            <FaInfoCircle className="text-primary mr-2" />
            <span>714-385-1000 (Anaheim Hills) | 760-245-1000 (Victorville)</span>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-10">
        <h3 className="text-xl font-semibold mb-4 font-heading">The Insurance Process</h3>
        
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 mr-4">
              1
            </div>
            <div>
              <h4 className="font-semibold mb-1">Benefit Verification</h4>
              <p>We contact your insurance provider to verify your coverage for prosthetic and orthotic services, including any prior authorization requirements.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 mr-4">
              2
            </div>
            <div>
              <h4 className="font-semibold mb-1">Prior Authorization</h4>
              <p>If required, we submit clinical documentation to your insurance company to obtain approval before providing services.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 mr-4">
              3
            </div>
            <div>
              <h4 className="font-semibold mb-1">Financial Consultation</h4>
              <p>We provide a clear explanation of your estimated out-of-pocket costs based on your insurance benefits and the recommended treatment plan.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 mr-4">
              4
            </div>
            <div>
              <h4 className="font-semibold mb-1">Claim Submission</h4>
              <p>After providing services, we submit claims directly to your insurance company with all necessary documentation.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 mr-4">
              5
            </div>
            <div>
              <h4 className="font-semibold mb-1">Appeal Assistance</h4>
              <p>If your claim is denied, our team will work with you to appeal the decision, providing additional documentation as needed.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-10">
        <h3 className="text-xl font-semibold mb-4 font-heading">Frequently Asked Insurance Questions</h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold mb-1">Do I need a doctor's referral for insurance coverage?</h4>
            <p>Many insurance plans require a physician's referral or prescription for prosthetic and orthotic services. We can help determine if this is required by your specific plan.</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-1">How often will insurance cover a new prosthesis?</h4>
            <p>Most insurance plans provide coverage for a replacement prosthesis every 3-5 years, depending on your plan and medical necessity. Components like liners may be covered more frequently.</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-1">Will insurance cover repairs to my device?</h4>
            <p>Many insurance plans cover reasonable repairs to prosthetic and orthotic devices. Coverage for adjustments and modifications varies by plan.</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-1">What if I have Medicare as my primary insurance?</h4>
            <p>Medicare typically covers 80% of the allowed amount for prosthetic and orthotic devices that are deemed medically necessary. A secondary insurance may cover the remaining 20%, or you may be responsible for this portion.</p>
          </div>
        </div>
      </div>
      
      <div className="bg-primary text-white p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4 font-heading">Need More Information?</h3>
        <p className="mb-4">
          Our insurance specialists are available to answer your specific questions about coverage and benefits. Contact us for personalized assistance.
        </p>
        <Link 
          to="/contact" 
          className="inline-block bg-white text-primary hover:bg-gray-100 font-medium py-2 px-6 rounded-md transition duration-300"
        >
          Contact Us for Insurance Help
        </Link>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Michael Johnson',
      age: 45,
      service: 'Lower Limb Prosthetics',
      quote: 'After my accident, I never thought I'd run again. The team at Aero Prosthetics not only got me walking comfortably but helped me train for and complete a 5K race. Their expertise and encouragement changed my life.',
      image: 'https://via.placeholder.com/150?text=MJ'
    },
    {
      id: 2,
      name: 'Sarah Williams',
      age: 38,
      service: 'Custom Bracing',
      quote: 'The custom knee brace I received has allowed me to continue hiking and enjoying the outdoors without pain. The attention to detail in the fitting process ensured perfect comfort and support.',
      image: 'https://via.placeholder.com/150?text=SW'
    },
    {
      id: 3,
      name: 'David Martinez',
      age: 29,
      service: 'Upper Limb Prosthetics',
      quote: 'As a musician, I was devastated after losing part of my arm. Aero Prosthetics created a solution that allows me to play guitar again. Their innovative approach and understanding of my specific needs was remarkable.',
      image: 'https://via.placeholder.com/150?text=DM'
    },
    {
      id: 4,
      name: 'Jennifer Lee',
      age: 41,
      service: 'Pediatric Services',
      quote: 'Finding proper care for my daughter was overwhelming until we discovered Aero Prosthetics. Their pediatric specialists made her feel comfortable and confident. They've adjusted her prosthesis as she's grown, always ensuring perfect fit and function.',
      image: 'https://via.placeholder.com/150?text=JL'
    },
    {
      id: 5,
      name: 'Robert Thompson',
      age: 62,
      service: 'Spinal Orthotics',
      quote: 'After years of back pain and limited mobility, the custom spinal brace from Aero Prosthetics has given me back my independence. I can now enjoy time with my grandchildren without constant discomfort.',
      image: 'https://via.placeholder.com/150?text=RT'
    },
    {
      id: 6,
      name: 'Maria Garcia',
      age: 34,
      service: 'Compression Therapy',
      quote: 'Following my mastectomy, the compression garments and prosthetic options provided by Aero Prosthetics helped me regain confidence and comfort. Their compassionate care made a difficult time much easier to navigate.',
      image: 'https://via.placeholder.com/150?text=MG'
    }
  ];
  
  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 font-heading">Patient Testimonials</h2>
      
      <div className="mb-8">
        <p className="text-lg text-center max-w-3xl mx-auto">
          Hear from our patients about their experiences and outcomes with Aero Prosthetics. These testimonials reflect real journeys and results, though individual experiences may vary.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-start mb-4">
              <div className="mr-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                <p className="text-gray-600">{testimonial.service}</p>
              </div>
            </div>
            
            <div className="relative">
              <FaQuoteRight className="absolute -top-2 -left-2 text-gray-200 text-4xl z-0" />
              <p className="relative z-10 italic mb-4 pl-6">"{testimonial.quote}"</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 bg-gray-50 p-6 rounded-lg text-center">
        <h3 className="text-xl font-semibold mb-4 font-heading">Share Your Story</h3>
        <p className="mb-6">
          Would you like to share your experience with Aero Prosthetics? Your story could inspire others on similar journeys.
        </p>
        <Link 
          to="/contact" 
          className="inline-block bg-primary hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition duration-300"
        >
          Submit Your Testimonial
        </Link>
      </div>
    </div>
  );
};

const FAQs = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  
  const toggleFaq = (index) => {
    if (activeFaq === index) {
      setActiveFaq(null);
    } else {
      setActiveFaq(index);
    }
  };
  
  const faqCategories = [
    {
      title: 'General Questions',
      questions: [
        {
          question: 'Do I need a doctor\'s referral to schedule an appointment?',
          answer: 'While we can schedule a consultation without a referral, most insurance plans require a physician\'s referral or prescription for coverage of prosthetic and orthotic services. We recommend checking with your insurance provider or contacting us to help determine what's required for your specific plan.'
        },
        {
          question: 'How long does the process take from initial consultation to receiving my device?',
          answer: 'The timeline varies depending on the type of device and your specific needs. Generally, prosthetics take 3-4 weeks from initial consultation to delivery, with several fitting appointments in between. Orthotics may take 1-3 weeks depending on complexity. Rush services are available in certain situations when medically necessary.'
        },
        {
          question: 'What should I bring to my first appointment?',
          answer: 'Please bring your insurance card, photo ID, doctor\'s prescription or referral (if you have one), relevant medical records, and a list of current medications. If you have any previous prosthetic or orthotic devices, bring those as well. Wear comfortable clothing that allows easy access to the affected area.'
        }
      ]
    },
    {
      title: 'Prosthetic Questions',
      questions: [
        {
          question: 'How long will my prosthesis last?',
          answer: 'Most prosthetic devices last 3-5 years, depending on your activity level, weight changes, and how well the device is maintained. Components like liners typically need replacement every 6-12 months. Children may need more frequent replacements due to growth. We recommend regular check-ups to ensure your prosthesis remains in optimal condition.'
        },
        {
          question: 'Can I shower or swim with my prosthesis?',
          answer: 'Standard prostheses are not waterproof and should be protected from water exposure. However, we offer specialized water-resistant or waterproof options designed specifically for showering and swimming. These can be prescribed as a primary device or as a secondary water activity prosthesis depending on your lifestyle needs.'
        },
        {
          question: 'Will my prosthesis look natural?',
          answer: 'We offer various cosmetic options ranging from functional covers to high-definition silicone covers that closely match your skin tone, texture, and appearance. The level of cosmetic detail depends on your preference and, in some cases, insurance coverage. Many patients also embrace the modern, technical appearance of their devices.'
        }
      ]
    },
    {
      title: 'Orthotic Questions',
      questions: [
        {
          question: 'Do I need to wear my brace all the time?',
          answer: 'Wearing schedules for orthotic devices depend on your specific condition and treatment goals. Some devices are designed for full-time wear, while others are only needed during certain activities or times of day. Your orthotist will provide a detailed wearing schedule and gradually increase wear time as appropriate for your situation.'
        },
        {
          question: 'Can I wear regular shoes with my ankle or foot orthosis?',
          answer: 'Many ankle-foot orthoses (AFOs) and foot orthoses are designed to fit inside standard shoes, though you may need to select shoes with removable insoles or extra depth. We provide guidance on appropriate footwear and can make recommendations based on your specific device and needs. Some patients find they need shoes that are a half to full size larger to accommodate their orthosis.'
        },
        {
          question: 'How often should my orthosis be adjusted?',
          answer: 'Follow-up appointments are typically scheduled 2-4 weeks after receiving your device, then every 3-6 months for routine check-ups. Growing children may need more frequent adjustments. You should also schedule an appointment if you experience any discomfort, skin irritation, or notice changes in how the device fits or functions.'
        }
      ]
    },
    {
      title: 'Insurance & Financial Questions',
      questions: [
        {
          question: 'Will my insurance cover my prosthetic or orthotic device?',
          answer: 'Most insurance plans provide some coverage for medically necessary prosthetic and orthotic devices, but benefits vary widely. Medicare typically covers 80% of the approved amount. We verify your benefits before treatment begins and provide an estimate of your out-of-pocket costs. Our insurance specialists can help you understand your coverage and explore financial options.'
        },
        {
          question: 'What if I don\'t have insurance coverage?',
          answer: 'For patients without insurance or with limited coverage, we offer a variety of financial options including payment plans, care credit financing, and in some cases, assistance programs. We work with several charitable organizations that may provide funding assistance for qualified individuals. Our team will help you explore all available options.'
        }
      ]
    }
  ];
  
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 font-heading">Frequently Asked Questions</h2>
      
      <div className="mb-10">
        <p className="text-lg text-center max-w-3xl mx-auto">
          Find answers to commonly asked questions about prosthetic and orthotic care. If you don't see your question addressed here, please <Link to="/contact" className="text-primary hover:underline">contact us</Link> directly.
        </p>
      </div>
      
      {faqCategories.map((category, categoryIndex) => (
        <div key={categoryIndex} className="mb-10">
          <h3 className="text-2xl font-semibold mb-4 font-heading border-b pb-2">{category.title}</h3>
          
          <div className="space-y-4">
            {category.questions.map((faq, faqIndex) => {
              const index = `${categoryIndex}-${faqIndex}`;
              return (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button 
                    className="flex justify-between items-center w-full p-4 text-left font-medium focus:outline-none"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={activeFaq === index}
                  >
                    <span className="flex items-center">
                      <FaQuestion className="text-primary mr-3 flex-shrink-0" />
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
              );
            })}
          </div>
        </div>
      ))}
      
      <div className="bg-primary text-white p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4 font-heading">Have More Questions?</h3>
        <p className="mb-4">
          Our team is available to answer any questions you may have about prosthetic and orthotic care, insurance coverage, or our services.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link 
            to="/contact" 
            className="inline-block bg-white text-primary hover:bg-gray-100 font-medium py-2 px-6 rounded-md transition duration-300"
          >
            Contact Us
          </Link>
          <a 
            href="tel:7143851000" 
            className="inline-block bg-transparent border border-white text-white hover:bg-white hover:text-primary font-medium py-2 px-6 rounded-md transition duration-300"
          >
            Call: 714-385-1000
          </a>
        </div>
      </div>
    </div>
  );
};

const EducationalResources = () => {
  const resourceCategories = [
    {
      title: 'Understanding Prosthetics',
      resources: [
        {
          title: 'Introduction to Prosthetic Limbs',
          description: 'An overview of modern prosthetic technology and components.',
          link: '/resources/education/intro-to-prosthetics',
          type: 'article'
        },
        {
          title: 'Prosthetic Care and Maintenance',
          description: 'Guidelines for daily care of your prosthesis to ensure longevity and optimal function.',
          link: '/resources/education/prosthetic-care',
          type: 'guide'
        },
        {
          title: 'Adapting to Your New Prosthesis',
          description: 'Helpful tips for the adjustment period when beginning to use a prosthetic device.',
          link: '/resources/education/adapting-to-prosthesis.pdf',
          type: 'pdf'
        }
      ]
    },
    {
      title: 'Orthotic Information',
      resources: [
        {
          title: 'Types of Orthotic Devices',
          description: 'Explanation of different orthotic solutions and their applications.',
          link: '/resources/education/orthotic-types',
          type: 'article'
        },
        {
          title: 'Scoliosis Bracing Guide',
          description: 'Comprehensive information about scoliosis treatment using orthotic bracing.',
          link: '/resources/education/scoliosis-bracing.pdf',
          type: 'pdf'
        }
      ]
    },
    {
      title: 'Pediatric Resources',
      resources: [
        {
          title: 'Growing with Prosthetics',
          description: 'Information for parents of children with prosthetic needs throughout development.',
          link: '/resources/education/pediatric-prosthetics',
          type: 'article'
        },
        {
          title: 'School Adaptation Guide',
          description: 'Helping children integrate prosthetic and orthotic devices into the school environment.',
          link: '/resources/education/school-adaptation.pdf',
          type: 'pdf'
        }
      ]
    },
    {
      title: 'Activity & Lifestyle',
      resources: [
        {
          title: 'Sports and Recreation with Prosthetics',
          description: 'Guide to participating in various athletic activities with a prosthesis.',
          link: '/resources/education/sports-prosthetics',
          type: 'article'
        },
        {
          title: 'Returning to Work',
          description: 'Considerations and adaptations for returning to employment after amputation.',
          link: '/resources/education/returning-to-work.pdf',
          type: 'pdf'
        }
      ]
    }
  ];
  
  const getResourceIcon = (type) => {
    switch (type) {
      case 'pdf':
        return <FaFilePdf className="text-red-500" />;
      case 'article':
        return <FaInfoCircle className="text-primary" />;
      case 'guide':
        return <FaBookMedical className="text-green-600" />;
      default:
        return <FaInfoCircle className="text-primary" />;
    }
  };
  
  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 font-heading">Educational Resources</h2>
      
      <div className="mb-10">
        <p className="text-lg text-center max-w-3xl mx-auto">
          Browse our collection of educational materials designed to help you better understand prosthetic and orthotic care. These resources provide valuable information for patients and caregivers throughout the treatment journey.
        </p>
      </div>
      
      {resourceCategories.map((category, index) => (
        <div key={index} className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 font-heading border-b pb-2">{category.title}</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {category.resources.map((resource, resourceIndex) => (
              <div key={resourceIndex} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="flex items-center mb-3">
                  <div className="mr-3">
                    {getResourceIcon(resource.type)}
                  </div>
                  <h4 className="font-semibold text-lg">{resource.title}</h4>
                </div>
                
                <p className="mb-4 text-gray-600">{resource.description}</p>
                
                <Link 
                  to={resource.link} 
                  className="inline-flex items-center text-primary hover:text-blue-700"
                >
                  {resource.type === 'pdf' ? 'Download PDF' : 'Read More'}
                  <FaExternalLinkAlt className="ml-2 text-sm" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
      
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4 font-heading">Request Custom Educational Materials</h3>
        <p className="mb-6">
          Need information on a specific topic? Our clinical team can provide personalized educational materials tailored to your unique needs or condition.
        </p>
        <Link 
          to="/contact" 
          className="inline-block bg-primary hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition duration-300"
        >
          Request Materials
        </Link>
      </div>
    </div>
  );
};

const PatientCare = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 font-heading">Patient Care Information</h2>
      
      <div className="mb-10">
        <p className="text-lg text-center max-w-3xl mx-auto">
          Find important information about preparing for appointments, what to expect during your care journey, and guidelines for optimal outcomes with your prosthetic or orthotic device.
        </p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-10">
        <h3 className="text-xl font-semibold mb-4 font-heading">Preparing for Your Appointment</h3>
        
        <h4 className="font-semibold mb-2">For Your First Visit</h4>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Bring your insurance card and photo ID</li>
          <li>Bring your physician's prescription or referral (if applicable)</li>
          <li>Bring relevant medical records and recent imaging results</li>
          <li>Wear comfortable clothing that allows easy access to the affected area</li>
          <li>Bring any current or previous prosthetic/orthotic devices</li>
          <li>Bring appropriate footwear if you're being evaluated for foot orthotics or lower limb prosthetics</li>
          <li>Allow approximately 60-90 minutes for your initial consultation</li>
        </ul>
        
        <h4 className="font-semibold mb-2">For Follow-Up Appointments</h4>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Bring your prosthetic/orthotic device and any related components</li>
          <li>Wear the same shoes you typically wear with your device (if applicable)</li>
          <li>Prepare notes about any issues or concerns you've experienced</li>
          <li>Allow 30-45 minutes for fitting appointments</li>
        </ul>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-10">
        <h3 className="text-xl font-semibold mb-4 font-heading">The Care Process</h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold mb-2">1. Initial Evaluation</h4>
            <p>During your first appointment, we'll assess your condition, discuss your goals and lifestyle needs, take measurements, and develop a treatment plan. We'll also verify your insurance benefits and discuss any financial considerations.</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2">2. Device Design & Fabrication</h4>
            <p>Based on your evaluation, we'll create a custom design for your prosthetic or orthotic device. This may involve digital scanning, casting, or other measurement techniques. The fabrication process typically takes 1-3 weeks depending on complexity.</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2">3. Initial Fitting</h4>
            <p>Once your device is fabricated, you'll return for an initial fitting. We'll make adjustments as needed to ensure proper fit and function. For prosthetic patients, this may be the first of several fitting appointments to achieve optimal comfort and alignment.</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2">4. Training & Education</h4>
            <p>We'll provide comprehensive training on how to use, care for, and maintain your device. For prosthetic patients, this may include gait training and coordination with physical therapy. For orthotic patients, we'll review wearing schedules and proper application techniques.</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2">5. Final Delivery</h4>
            <p>Once all adjustments are complete and you're comfortable with your device, you'll receive your finalized prosthesis or orthosis. We'll provide written care instructions and schedule follow-up appointments as needed.</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2">6. Ongoing Care</h4>
            <p>We recommend regular check-up appointments (typically every 3-6 months) to ensure your device continues to function optimally and to address any changes in your condition or needs. More frequent follow-ups may be needed for growing children or patients with changing residual limbs.</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-10">
        <h3 className="text-xl font-semibold mb-4 font-heading">Care Guidelines & Tips</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-2">Prosthetic Care</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Inspect your residual limb daily for signs of irritation or skin breakdown</li>
              <li>Clean your prosthetic socket daily with mild soap and water</li>
              <li>Replace prosthetic socks regularly and maintain proper sock management</li>
              <li>Keep prosthetic components away from water unless specifically designed for water use</li>
              <li>Schedule prompt adjustments if you experience discomfort or changes in fit</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2">Orthotic Care</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Follow your prescribed wearing schedule carefully</li>
              <li>Inspect your skin regularly for signs of excessive pressure or irritation</li>
              <li>Clean plastic components with mild soap and water; use leather cleaner for leather parts</li>
              <li>Allow devices to thoroughly dry between wearings</li>
              <li>Contact us promptly if you notice wear, cracks, or breakage</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-primary text-white p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4 font-heading">Need Assistance?</h3>
        <p className="mb-4">
          If you have questions about your care or are experiencing issues with your device, please don't hesitate to contact us.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link 
            to="/contact" 
            className="inline-block bg-white text-primary hover:bg-gray-100 font-medium py-2 px-6 rounded-md transition duration-300"
          >
            Contact Our Care Team
          </Link>
          <a 
            href="tel:7143851000" 
            className="inline-block bg-transparent border border-white text-white hover:bg-white hover:text-primary font-medium py-2 px-6 rounded-md transition duration-300"
          >
            Call: 714-385-1000
          </a>
        </div>
      </div>
    </div>
  );
};

const UsefulLinks = () => {
  const linkCategories = [
    {
      title: 'Amputee Resources',
      links: [
        {
          title: 'Amputee Coalition',
          url: 'https://www.amputee-coalition.org/',
          description: 'National nonprofit organization serving people with limb loss, offering support, education, and advocacy.'
        },
        {
          title: 'Challenged Athletes Foundation',
          url: 'https://www.challengedathletes.org/',
          description: 'Provides opportunities and support to people with physical challenges to pursue active lifestyles.'
        },
        {
          title: 'Limbs for Life Foundation',
          url: 'https://limbsforlife.org/',
          description: 'Nonprofit organization providing financial assistance for prosthetic care to individuals in need.'
        }
      ]
    },
    {
      title: 'Professional Organizations',
      links: [
        {
          title: 'American Academy of Orthotists and Prosthetists (AAOP)',
          url: 'https://www.oandp.org/',
          description: 'Professional society representing certified practitioners who design and fabricate orthotic and prosthetic devices.'
        },
        {
          title: 'American Orthotic and Prosthetic Association (AOPA)',
          url: 'https://www.aopanet.org/',
          description: 'Trade association representing orthotic and prosthetic facilities, suppliers, and practitioners.'
        }
      ]
    },
    {
      title: 'Government Resources',
      links: [
        {
          title: 'Medicare Coverage for Prosthetic Devices',
          url: 'https://www.medicare.gov/coverage/prosthetic-devices',
          description: 'Information about Medicare coverage for prosthetic devices and related supplies.'
        },
        {
          title: 'Veterans Affairs Prosthetic and Sensory Aids Service',
          url: 'https://www.prosthetics.va.gov/',
          description: 'Information about prosthetic services available to veterans through the VA healthcare system.'
        }
      ]
    },
    {
      title: 'Support Groups',
      links: [
        {
          title: 'Amputee Support Group Network',
          url: 'https://www.amputee-coalition.org/support-groups-peer-support/support-group-network/',
          description: 'Directory of local support groups for amputees across the United States.'
        },
        {
          title: 'National Scoliosis Foundation',
          url: 'https://www.scoliosis.org/',
          description: 'Organization providing education, support, and resources for individuals with scoliosis.'
        }
      ]
    }
  ];
  
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 font-heading">Useful Links</h2>
      
      <div className="mb-10">
        <p className="text-lg text-center max-w-3xl mx-auto">
          We've compiled these links to trusted external resources to help you find additional information and support. While we strive to provide comprehensive care, these organizations offer valuable supplementary resources.
        </p>
        <p className="text-sm text-center text-gray-600 mt-2">
          Note: Aero Prosthetics is not responsible for the content of external websites and does not endorse all opinions or recommendations found on these sites.
        </p>
      </div>
      
      {linkCategories.map((category, index) => (
        <div key={index} className="mb-10">
          <h3 className="text-2xl font-semibold mb-6 font-heading border-b pb-2">{category.title}</h3>
          
          <div className="space-y-6">
            {category.links.map((link, linkIndex) => (
              <div key={linkIndex} className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold mb-2">
                  <a 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-primary hover:text-blue-700"
                  >
                    {link.title}
                    <FaExternalLinkAlt className="ml-2 text-sm" />
                  </a>
                </h4>
                <p className="text-gray-600">{link.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
      
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4 font-heading">Suggest a Resource</h3>
        <p className="mb-6">
          Know of a helpful resource that should be included in our list? We welcome your suggestions for additional links that may benefit our patients and their families.
        </p>
        <Link 
          to="/contact" 
          className="inline-block bg-primary hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition duration-300"
        >
          Suggest a Link
        </Link>
      </div>
    </div>
  );
};

export default Resources;