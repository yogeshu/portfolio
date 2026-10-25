import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from '@/context/ThemeContext';
import Layout from '@/components/Layout';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ExperiencePage from '@/pages/ExperiencePage';
import ProjectsPage from '@/pages/ProjectsPage';
import ProductDetailPage from '@/pages/ProductDetailPage';
import CaseStudyDetailPage from '@/pages/CaseStudyDetailPage';
import SkillsPage from '@/pages/SkillsPage';
import ContactPage from '@/pages/ContactPage';
import WebDevelopmentPage from '@/pages/WebDevelopmentPage';
import FrontendDevelopmentPage from '@/pages/FrontendDevelopmentPage';
import ReactNextjsDevelopmentPage from '@/pages/ReactNextjsDevelopmentPage';
import FrontendConsultingPage from '@/pages/FrontendConsultingPage';
import ThemeStudioPage from '@/features/theme-studio/ThemeStudioPage';
import { AnimatePresence } from 'framer-motion';
import { initGA, logPageView } from '@/utils/analytics';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    initGA();
  }, []);

  useEffect(() => {
    logPageView(location.pathname + location.search);
  }, [location]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Core Personal Brand & Portfolio Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:slug" element={<ProductDetailPage />} />
        <Route path="/case-studies/:slug" element={<CaseStudyDetailPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Commercial Service Landing Pages */}
        <Route path="/web-development" element={<WebDevelopmentPage />} />
        <Route path="/frontend-development" element={<FrontendDevelopmentPage />} />
        <Route path="/react-nextjs-development" element={<ReactNextjsDevelopmentPage />} />
        <Route path="/frontend-consulting" element={<FrontendConsultingPage />} />

        {/* Development & Design Systems Studio (Safe Preview Route) */}
        <Route path="/theme-studio" element={<ThemeStudioPage />} />

        {/* Fallback route back to home */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <ScrollToTop />
          <Layout>
            <AnimatedRoutes />
          </Layout>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
