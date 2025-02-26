import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          // Navigation
          'nav.home': 'Home',
          'nav.about': 'About Us',
          'nav.services': 'Services',
          'nav.resources': 'Patient Resources',
          'nav.locations': 'Locations',
          'nav.contact': 'Contact Us',
          
          // About Submenu
          'nav.about.mission': 'Our Mission',
          'nav.about.difference': 'Our Difference',
          'nav.about.team': 'Our Team',
          
          // Services Submenu
          'nav.services.lowerLimb': 'Lower Limb Solutions',
          'nav.services.upperLimb': 'Upper Limb Solutions',
          'nav.services.pediatric': 'Pediatric Solutions',
          'nav.services.spinal': 'Spinal Orthotics',
          'nav.services.compression': 'Compression & Mastectomy',
          'nav.services.bracing': 'Custom Bracing Solutions',
          
          // Resources Submenu
          'nav.resources.insurance': 'Insurance Information',
          'nav.resources.testimonials': 'Testimonials',
          'nav.resources.faqs': 'FAQs',
          'nav.resources.education': 'Educational Resources',
          
          // Common Elements
          'cta.requestInfo': 'Request Information',
          'cta.contactUs': 'Contact Us',
          'cta.learnMore': 'Learn More',
          
          // Footer
          'footer.quickLinks': 'Quick Links',
          'footer.locations': 'Our Locations',
          'footer.copyright': '© 2025 Aero Prosthetics, a Division of Aero Mobility Inc. All Rights Reserved.',
          'footer.hours': 'Mon-Fri: 9 AM - 5 PM',
          
          // Home Page
          'home.hero.title': 'Empowering Mobility, Enhancing Lives',
          'home.hero.subtitle': 'Advanced prosthetic solutions personalized for your unique needs',
          'home.difference.title': 'The Aero Prosthetics Difference',
          'home.services.title': 'Comprehensive Prosthetic & Orthotic Solutions',
          'home.testimonials.title': 'What Our Patients Say',
          'home.locations.title': 'Visit Our Clinics',
          'home.cta.title': 'Ready to Take the Next Step?',
          'home.cta.subtitle': 'Contact us today to schedule a consultation...',
          
          // Add more translations as needed
        },
      },
      es: {
        translation: {
          // Navigation
          'nav.home': 'Inicio',
          'nav.about': 'Sobre Nosotros',
          'nav.services': 'Servicios',
          'nav.resources': 'Recursos para Pacientes',
          'nav.locations': 'Ubicaciones',
          'nav.contact': 'Contáctenos',
          
          // About Submenu
          'nav.about.mission': 'Nuestra Misión',
          'nav.about.difference': 'Nuestra Diferencia',
          'nav.about.team': 'Nuestro Equipo',
          
          // Services Submenu
          'nav.services.lowerLimb': 'Soluciones para Extremidades Inferiores',
          'nav.services.upperLimb': 'Soluciones para Extremidades Superiores',
          'nav.services.pediatric': 'Soluciones Pediátricas',
          'nav.services.spinal': 'Ortopedia Espinal',
          'nav.services.compression': 'Compresión y Mastectomía',
          'nav.services.bracing': 'Soluciones de Aparatos Ortopédicos Personalizados',
          
          // Resources Submenu
          'nav.resources.insurance': 'Información de Seguros',
          'nav.resources.testimonials': 'Testimonios',
          'nav.resources.faqs': 'Preguntas Frecuentes',
          'nav.resources.education': 'Recursos Educativos',
          
          // Common Elements
          'cta.requestInfo': 'Solicitar Información',
          'cta.contactUs': 'Contáctenos',
          'cta.learnMore': 'Más Información',
          
          // Footer
          'footer.quickLinks': 'Enlaces Rápidos',
          'footer.locations': 'Nuestras Ubicaciones',
          'footer.copyright': '© 2025 Aero Prosthetics, una División de Aero Mobility Inc. Todos los derechos reservados.',
          'footer.hours': 'Lun-Vie: 9 AM - 5 PM',
          
          // Home Page
          'home.hero.title': 'Potenciando la Movilidad, Mejorando Vidas',
          'home.hero.subtitle': 'Soluciones protésicas avanzadas personalizadas para sus necesidades únicas',
          'home.difference.title': 'La Diferencia de Aero Prosthetics',
          'home.services.title': 'Soluciones Protésicas y Ortopédicas Integrales',
          'home.testimonials.title': 'Lo Que Dicen Nuestros Pacientes',
          'home.locations.title': 'Visite Nuestras Clínicas',
          'home.cta.title': '¿Listo para Dar el Siguiente Paso?',
          'home.cta.subtitle': 'Contáctenos hoy para programar una consulta...',
          
          // Add more translations as needed
        },
      },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;