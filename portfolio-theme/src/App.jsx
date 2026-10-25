import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from '@/components/Layout';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ExperiencePage from '@/pages/ExperiencePage';
import ProjectsPage from '@/pages/ProjectsPage';
import SkillsPage from '@/pages/SkillsPage';
import TestimonialsPage from '@/pages/TestimonialsPage';
import ContactPage from '@/pages/ContactPage';
import { initGA, logPageView } from '@/utils/analytics';
import SEO from './components/SEO';

const AnimatedRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    try {
      initGA();
    } catch (e) {
      // Ignore GA errors in local dev
    }
  }, []);

  useEffect(() => {
    try {
      logPageView(location.pathname + location.search);
    } catch (e) {
      // Ignore GA errors in local dev
    }
  }, [location]);

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/experience" element={<ExperiencePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/skills" element={<SkillsPage />} />
      <Route path="/testimonials" element={<TestimonialsPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
};

function App() {
  return (
    <HelmetProvider>
      <Router>
        <SEO />
        <Layout>
          <AnimatedRoutes />
        </Layout>
      </Router>
    </HelmetProvider>
  );
}

export default App;
