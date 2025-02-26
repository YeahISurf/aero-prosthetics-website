import React from 'react';
import { FaLaptopMedical, FaHandHoldingHeart, FaUserMd, FaTools } from 'react-icons/fa';

export const differenceItems = [
  {
    id: 1,
    title: 'Cutting-Edge Technology',
    description: 'We utilize the latest advancements in prosthetic technology to provide you with optimal function and comfort.',
    icon: <FaLaptopMedical />,
    link: '/about/difference'
  },
  {
    id: 2,
    title: 'Personalized Care',
    description: 'Each solution is custom-designed to meet your unique needs, lifestyle, and goals.',
    icon: <FaHandHoldingHeart />,
    link: '/about/difference'
  },
  {
    id: 3,
    title: 'Experienced Team',
    description: 'Our certified prosthetists and orthotists bring decades of combined experience to your care.',
    icon: <FaUserMd />,
    link: '/about/team'
  },
  {
    id: 4,
    title: 'Comprehensive Support',
    description: 'From initial consultation through ongoing adjustments, we\'re with you every step of the way.',
    icon: <FaTools />,
    link: '/services'
  }
];

export const servicesOverview = [
  {
    id: 1,
    title: 'Lower Limb Solutions',
    description: 'Advanced prosthetic options for below-knee, above-knee, and partial foot amputations.',
    image: 'https://via.placeholder.com/400x300?text=Lower+Limb',
    link: '/services/lower-limb'
  },
  {
    id: 2,
    title: 'Upper Limb Solutions',
    description: 'Functional and cosmetic options for partial hand, below-elbow, and above-elbow amputations.',
    image: 'https://via.placeholder.com/400x300?text=Upper+Limb',
    link: '/services/upper-limb'
  },
  {
    id: 3,
    title: 'Pediatric Solutions',
    description: 'Specialized prosthetic and orthotic care designed specifically for children and adolescents.',
    image: 'https://via.placeholder.com/400x300?text=Pediatric',
    link: '/services/pediatric'
  },
  {
    id: 4,
    title: 'Spinal Orthotics',
    description: 'Custom-designed braces to support, correct, and assist with spinal conditions.',
    image: 'https://via.placeholder.com/400x300?text=Spinal',
    link: '/services/spinal'
  },
  {
    id: 5,
    title: 'Compression & Mastectomy',
    description: 'Specialized garments and prosthetics for post-surgical recovery and ongoing care.',
    image: 'https://via.placeholder.com/400x300?text=Compression',
    link: '/services/compression-mastectomy'
  },
  {
    id: 6,
    title: 'Custom Bracing Solutions',
    description: 'Individualized orthotic devices to improve function and reduce pain for various conditions.',
    image: 'https://via.placeholder.com/400x300?text=Bracing',
    link: '/services/custom-bracing'
  }
];

export const testimonials = [
  {
    id: 1,
    name: 'Michael Johnson',
    service: 'Lower Limb Prosthetic User',
    image: 'https://via.placeholder.com/150?text=MJ',
    quote: 'After my accident, I never thought I\'d run again. The team at Aero Prosthetics not only got me walking comfortably but helped me train for and complete a 5K race. Their expertise and encouragement changed my life.'
  },
  {
    id: 2,
    name: 'Sarah Williams',
    service: 'Custom Bracing Patient',
    image: 'https://via.placeholder.com/150?text=SW',
    quote: 'The custom knee brace I received has allowed me to continue hiking and enjoying the outdoors without pain. The attention to detail in the fitting process ensured perfect comfort and support.'
  },
  {
    id: 3,
    name: 'David Martinez',
    service: 'Upper Limb Prosthetic User',
    image: 'https://via.placeholder.com/150?text=DM',
    quote: 'As a musician, I was devastated after losing part of my arm. Aero Prosthetics created a solution that allows me to play guitar again. Their innovative approach and understanding of my specific needs was remarkable.'
  },
  {
    id: 4,
    name: 'Jennifer Lee',
    service: 'Parent of Pediatric Patient',
    image: 'https://via.placeholder.com/150?text=JL',
    quote: 'Finding proper care for my daughter was overwhelming until we discovered Aero Prosthetics. Their pediatric specialists made her feel comfortable and confident. They\'ve adjusted her prosthesis as she\'s grown, always ensuring perfect fit and function.'
  },
  {
    id: 5,
    name: 'Robert Thompson',
    service: 'Spinal Orthotic Patient',
    image: 'https://via.placeholder.com/150?text=RT',
    quote: 'After years of back pain and limited mobility, the custom spinal brace from Aero Prosthetics has given me back my independence. I can now enjoy time with my grandchildren without constant discomfort.'
  }
];