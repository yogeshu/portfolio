import React from 'react';
import { ThemeStudioProvider } from './context/ThemeStudioContext';
import ThemeStudioLayout from './components/ThemeStudioLayout';
import SEO from '@/components/SEO';

const ThemeStudioPage = () => {
  return (
    <>
      <SEO
        title="Theme Studio | Design System & Token Architecture — Yogesh Bhavsar"
        description="Development and preview studio for experimenting with design tokens, typography scales, contrast validation, and CSS custom properties."
        canonical="/theme-studio"
        robots="noindex, nofollow"
      />
      <ThemeStudioProvider>
        <ThemeStudioLayout />
      </ThemeStudioProvider>
    </>
  );
};

export default ThemeStudioPage;
