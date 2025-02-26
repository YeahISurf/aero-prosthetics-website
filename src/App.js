import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Global Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Resources from './pages/Resources';
import Locations from './pages/Locations';
import Contact from './pages/Contact';
import Legal from './pages/Legal';
import NotFound from './pages/NotFound';

function App() {
  const { t } = useTranslation();
  
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* About Routes */}
            <Route path="/about" element={<About />} />
            <Route path="/about/mission" element={<About />} />
            <Route path="/about/difference" element={<About />} />
            <Route path="/about/team" element={<About />} />
            
            {/* Services Routes */}
            <Route path="/services" element={<Services />} />
            <Route path="/services/:serviceId" element={<ServiceDetail />} />
            
            {/* Resources Routes */}
            <Route path="/resources" element={<Resources />} />
            <Route path="/resources/:resourceType" element={<Resources />} />
            
            {/* Location & Contact Routes */}
            <Route path="/locations" element={<Locations />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Legal Pages */}
            <Route path="/legal" element={<Legal />} />
            <Route path="/legal/:pageType" element={<Legal />} />
            <Route path="/privacy" element={<Legal pageType="privacy" />} />
            <Route path="/terms" element={<Legal pageType="terms" />} />
            <Route path="/accessibility" element={<Legal pageType="accessibility" />} />
            
            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;