import type { Metadata } from 'next';
import './globals.css';

/**
 * Metadata for the entire application
 * This will be the default metadata for all pages unless overridden
 */
export const metadata: Metadata = {
  title: 'Portfolio - Next.js Starter',
  description: 'A modern portfolio website built with Next.js, TypeScript, and Tailwind CSS',
  keywords: ['portfolio', 'next.js', 'typescript', 'tailwind css', 'react'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourportfolio.com',
    title: 'Portfolio - Next.js Starter',
    description: 'A modern portfolio website built with Next.js, TypeScript, and Tailwind CSS',
    siteName: 'Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio - Next.js Starter',
    description: 'A modern portfolio website built with Next.js, TypeScript, and Tailwind CSS',
  },
};

/**
 * Root layout component
 * This wraps all pages in the application
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
