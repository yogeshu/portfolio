import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from '@/context/ThemeContext';
import Layout from '@/components/Layout';
import HomePage from '@/pages/HomePage';
import { AnimatePresence } from 'framer-motion';
import { initGA, logPageView } from '@/utils/analytics';

// Route Code Splitting: Lazy-load subpages to reduce initial bundle size for Core Web Vitals
const AboutPage = lazy(() => import('@/pages/AboutPage'));
const ExperiencePage = lazy(() => import('@/pages/ExperiencePage'));
const ProjectsPage = lazy(() => import('@/pages/ProjectsPage'));
const ProductDetailPage = lazy(() => import('@/pages/ProductDetailPage'));
const CaseStudyDetailPage = lazy(() => import('@/pages/CaseStudyDetailPage'));
const SkillsPage = lazy(() => import('@/pages/SkillsPage'));
const ContactPage = lazy(() => import('@/pages/ContactPage'));
const WebDevelopmentPage = lazy(() => import('@/pages/WebDevelopmentPage'));
const FrontendDevelopmentPage = lazy(() => import('@/pages/FrontendDevelopmentPage'));
const ReactNextjsDevelopmentPage = lazy(() => import('@/pages/ReactNextjsDevelopmentPage'));
const FrontendConsultingPage = lazy(() => import('@/pages/FrontendConsultingPage'));
const ThemeStudioPage = lazy(() => import('@/features/theme-studio/ThemeStudioPage'));

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
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
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
    </Suspense>
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
