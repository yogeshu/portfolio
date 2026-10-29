import React, { Suspense, lazy } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const Toaster = lazy(() => import('@/components/ui/toaster').then(m => ({ default: m.Toaster })));

const Layout = ({ children }) => {
  const location = useLocation();
  const isThemeStudio = location.pathname.startsWith('/theme-studio');

  if (isThemeStudio) {
    return (
      <>
        {children}
        <Suspense fallback={null}>
          <Toaster />
        </Suspense>
      </>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-background via-background to-secondary/20 dark:from-background dark:via-background dark:to-secondary/10 w-full overflow-x-hidden">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
      <Suspense fallback={null}>
        <Toaster />
      </Suspense>
    </div>
  );
};

export default Layout;
