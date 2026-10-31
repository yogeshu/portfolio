import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from '@/context/ThemeContext';
import Layout from '@/components/Layout';
import { AnimatePresence } from 'framer-motion';
import { initGA, logPageView } from '@/utils/analytics';
import { AdminProtectedRoute } from '@/features/blog/admin/AdminLayout';

// Route Code Splitting: Lazy-load all pages to minimize initial bundle size and eliminate unused JavaScript
const HomePage = lazy(() => import('@/pages/HomePage'));
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

// Blog System Routes
const BlogHomePage = lazy(() => import('@/pages/blog/BlogHomePage'));
const ArticleDetailPage = lazy(() => import('@/pages/blog/ArticleDetailPage'));
const CategoryArchivePage = lazy(() => import('@/pages/blog/CategoryArchivePage'));
const TagArchivePage = lazy(() => import('@/pages/blog/TagArchivePage'));
const BlogSearchPage = lazy(() => import('@/pages/blog/BlogSearchPage'));

// Admin CMS Routes
const AdminLayout = lazy(() => import('@/features/blog/admin/AdminLayout'));
const AdminLoginPage = lazy(() => import('@/features/blog/admin/AdminLoginPage'));
const AdminDashboardPage = lazy(() => import('@/features/blog/admin/AdminDashboardPage'));
const AdminEditorPage = lazy(() => import('@/features/blog/admin/AdminEditorPage'));
const AdminTaxonomyPage = lazy(() => import('@/features/blog/admin/AdminTaxonomyPage'));
const AdminSettingsPage = lazy(() => import('@/features/blog/admin/AdminSettingsPage'));

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

          {/* Public-Facing Blog Routes */}
          <Route path="/blog" element={<BlogHomePage />} />
          <Route path="/blog/:slug" element={<ArticleDetailPage />} />
          <Route path="/blog/category/:slug" element={<CategoryArchivePage />} />
          <Route path="/blog/tags/:slug" element={<TagArchivePage />} />
          <Route path="/blog/search" element={<BlogSearchPage />} />

          {/* Development & Design Systems Studio (Safe Preview Route) */}
          <Route path="/theme-studio" element={<ThemeStudioPage />} />

          {/* CMS Admin Routes */}
          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route
            path="/admin"
            element={
              <AdminProtectedRoute>
                <AdminLayout />
              </AdminProtectedRoute>
            }
          >
            <Route index element={<AdminDashboardPage />} />
            <Route path="editor" element={<AdminEditorPage />} />
            <Route path="editor/:id" element={<AdminEditorPage />} />
            <Route path="taxonomy" element={<AdminTaxonomyPage />} />
            <Route path="settings" element={<AdminSettingsPage />} />
          </Route>

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
