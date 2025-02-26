import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaQuestionCircle, FaCheck, FaTimes } from 'react-icons/fa';

// Components
import PageHeader from '../components/PageHeader';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    preferredLocation: '',
    reason: '',
    insurance: '',
    message: '',
    formSubmitted: false,
    formError: false
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this would send the data to a server
    // For this example, we'll just simulate success
    setTimeout(() => {
      setFormData(prevState => ({
        ...prevState,
        formSubmitted: true,
        formError: false
      }));
    }, 1000);
  };
  
  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      preferredLocation: '',
      reason: '',
      insurance: '',
      message: '',
      formSubmitted: false,
      formError: false
    });
  };
  
  const breadcrumbs = [
    { label: 'Home', url: '/' },
    { label: 'Contact Us', url: null }
  ];
  
  const locations = [
    {
      name: 'Anaheim Hills',
      address: '1001 N Weir Canyon Road, Anaheim Hills, CA 92807',
      phone: '714-385-1000',
      email: 'anaheim@aeroprosthetics.com',
      mapUrl: 'https://maps.google.com/?q=1001+N+Weir+Canyon+Road,+Anaheim+Hills,+CA+92807'
    },
    {
      name: 'Victorville',
      address: '17189 Yuma Street, Victorville, CA 92395',
      phone: '760-245-1000',
      email: 'victorville@aeroprosthetics.com',
      mapUrl: 'https://maps.google.com/?q=17189+Yuma+Street,+Victorville,+CA+92395'
    }
  ];
  
  const faqs = [
    {
      question: 'What should I bring to my first appointment?',
      answer: 'Please bring your insurance card, photo ID, referral (if required by your insurance), relevant medical records, and a list of current medications. If you have any previous prosthetic or orthotic devices, bring those as well.'
    },
    {
      question: 'How long will it take to get my prosthetic/orthotic device?',
      answer: 'The timeline varies depending on the type of device and your specific needs. Generally, it takes 2-4 weeks from initial consultation to final delivery, with several fitting appointments in between.'
    },
    {
      question: 'Does insurance cover prosthetic/orthotic devices?',
      answer: 'Most insurance plans provide some coverage for prosthetic and orthotic devices, but coverage varies widely. We work with most major insurance providers and can help verify your coverage before treatment begins.'
    },
    {
      question: 'Do I need a doctor\'s referral?',
      answer: 'Many insurance plans require a doctor\'s referral for prosthetic and orthotic services. We recommend checking with your insurance provider or contacting us to help determine if a referral is needed.'
    }
  ];
  
  return (
    <div>
      <PageHeader 
        title="Contact Us"
        subtitle="We're here to answer your questions and help you take the next step"
        breadcrumbs={breadcrumbs}
        backgroundImage="https://via.placeholder.com/1920x600?text=Contact+Us"
      />
      
      {/* Contact Methods */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-block p-4 bg-primary text-white rounded-full mb-4">
                <FaPhone className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 font-heading">Call Us</h3>
              <p className="mb-2">Anaheim Hills: <a href="tel:7143851000" className="text-primary hover:underline">714-385-1000</a></p>
              <p>Victorville: <a href="tel:7602451000" className="text-primary hover:underline">760-245-1000</a></p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-block p-4 bg-primary text-white rounded-full mb-4">
                <FaEnvelope className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 font-heading">Email Us</h3>
              <p className="mb-2">General Inquiries: <a href="mailto:info@aeroprosthetics.com" className="text-primary hover:underline">info@aeroprosthetics.com</a></p>
              <p>Patient Support: <a href="mailto:support@aeroprosthetics.com" className="text-primary hover:underline">support@aeroprosthetics.com</a></p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-block p-4 bg-primary text-white rounded-full mb-4">
                <FaMapMarkerAlt className="text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3 font-heading">Visit Us</h3>
              <p className="mb-2">Monday - Friday</p>
              <p>9:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form and Location Info */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Form */}
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold mb-8 font-heading">Send Us a Message</h2>
              
              {!formData.formSubmitted ? (
                <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="firstName" className="block mb-2 font-medium">First Name *</label>
                      <input 
                        type="text" 
                        id="firstName" 
                        name="firstName" 
                        value={formData.firstName} 
                        onChange={handleChange} 
                        required 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block mb-2 font-medium">Last Name *</label>
                      <input 
                        type="text" 
                        id="lastName" 
                        name="lastName" 
                        value={formData.lastName} 
                        onChange={handleChange} 
                        required 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="email" className="block mb-2 font-medium">Email *</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block mb-2 font-medium">Phone Number *</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleChange} 
                        required 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="preferredLocation" className="block mb-2 font-medium">Preferred Location</label>
                    <select 
                      id="preferredLocation" 
                      name="preferredLocation" 
                      value={formData.preferredLocation} 
                      onChange={handleChange} 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Please select...</option>
                      <option value="Anaheim Hills">Anaheim Hills</option>
                      <option value="Victorville">Victorville</option>
                      <option value="No Preference">No Preference</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="reason" className="block mb-2 font-medium">Reason for Contact *</label>
                    <select 
                      id="reason" 
                      name="reason" 
                      value={formData.reason} 
                      onChange={handleChange} 
                      required 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Please select...</option>
                      <option value="New Patient Inquiry">New Patient Inquiry</option>
                      <option value="Appointment Request">Appointment Request</option>
                      <option value="Insurance Question">Insurance Question</option>
                      <option value="Existing Patient Support">Existing Patient Support</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="insurance" className="block mb-2 font-medium">Insurance Provider</label>
                    <input 
                      type="text" 
                      id="insurance" 
                      name="insurance" 
                      value={formData.insurance} 
                      onChange={handleChange} 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Enter your insurance provider if applicable"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block mb-2 font-medium">Message *</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      value={formData.message} 
                      onChange={handleChange} 
                      required 
                      rows="5" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Please provide details about your inquiry"
                    ></textarea>
                  </div>
                  
                  <div className="mb-6">
                    <label className="flex items-start">
                      <input 
                        type="checkbox" 
                        required 
                        className="mt-1 mr-3" 
                      />
                      <span className="text-sm text-gray-600">
                        I consent to Aero Prosthetics collecting and storing the information provided on this form. For details on how we use your information, please see our <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
                      </span>
                    </label>
                  </div>
                  
                  <div>
                    <button 
                      type="submit" 
                      className="w-full bg-accent hover:bg-yellow-500 text-white font-medium py-3 px-4 rounded-md transition duration-300"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              ) : (
                <div className="bg-white p-8 rounded-lg shadow-md text-center">
                  <div className="inline-block p-4 bg-green-100 text-green-500 rounded-full mb-4">
                    <FaCheck className="text-3xl" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 font-heading">Message Sent Successfully!</h3>
                  <p className="mb-6">Thank you for contacting Aero Prosthetics. We've received your message and will get back to you shortly.</p>
                  <button 
                    onClick={resetForm} 
                    className="bg-primary hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition duration-300"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>
            
            {/* Location Information */}
            <div className="lg:w-1/3">
              <h2 className="text-3xl font-bold mb-8 font-heading">Our Locations</h2>
              
              <div className="space-y-8">
                {locations.map((location, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4 font-heading">{location.name}</h3>
                    
                    <div className="flex items-start mb-3">
                      <FaMapMarkerAlt className="text-primary mt-1 mr-3" />
                      <p>{location.address}</p>
                    </div>
                    
                    <div className="flex items-center mb-3">
                      <FaPhone className="text-primary mr-3" />
                      <p><a href={`tel:${location.phone.replace(/-/g, '')}`} className="hover:text-primary">{location.phone}</a></p>
                    </div>
                    
                    <div className="flex items-center mb-4">
                      <FaEnvelope className="text-primary mr-3" />
                      <p><a href={`mailto:${location.email}`} className="hover:text-primary">{location.email}</a></p>
                    </div>
                    
                    <div className="h-48 bg-gray-200 mb-4 rounded overflow-hidden">
                      {/* Placeholder for Google Map */}
                      <img 
                        src={`https://via.placeholder.com/600x300?text=${location.name}+Map`}
                        alt={`Map of ${location.name} location`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <a 
                      href={location.mapUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-block text-primary hover:text-blue-700 font-medium"
                    >
                      Get Directions
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQs */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-heading">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="flex items-center text-lg font-semibold mb-3 font-heading">
                  <FaQuestionCircle className="text-primary mr-3" />
                  {faq.question}
                </h3>
                <p className="pl-8 text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <p className="mb-4">Don't see your question? Contact us directly and we'll be happy to help.</p>
            <a 
              href="tel:7143851000" 
              className="bg-primary hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition duration-300 inline-block"
            >
              Call Us: 714-385-1000
            </a>
          </div>
        </div>
      </section>
      
      {/* Insurance Banner */}
      <section className="py-10 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 font-heading">Insurance Information</h3>
            <p className="text-lg mb-6">
              We accept most major insurance plans including Medicare, Medicaid, and private insurance. Contact us to verify your coverage.
            </p>
            <div className="flex justify-center space-x-4 flex-wrap">
              <img src="https://via.placeholder.com/120x60?text=Insurance" alt="Insurance provider" className="h-10 bg-white rounded p-1" />
              <img src="https://via.placeholder.com/120x60?text=Insurance" alt="Insurance provider" className="h-10 bg-white rounded p-1" />
              <img src="https://via.placeholder.com/120x60?text=Insurance" alt="Insurance provider" className="h-10 bg-white rounded p-1" />
              <img src="https://via.placeholder.com/120x60?text=Insurance" alt="Insurance provider" className="h-10 bg-white rounded p-1" />
              <img src="https://via.placeholder.com/120x60?text=Insurance" alt="Insurance provider" className="h-10 bg-white rounded p-1" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;