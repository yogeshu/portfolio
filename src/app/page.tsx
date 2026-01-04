import type { ReactNode } from 'react';

/**
 * Type definition for feature cards
 */
interface Feature {
  title: string;
  description: string;
  icon: string;
}

/**
 * Feature card component demonstrating TypeScript props and Tailwind styling
 */
function FeatureCard({ title, description, icon }: Feature): ReactNode {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg dark:border-gray-800 dark:bg-gray-900">
      <div className="mb-4 text-4xl">{icon}</div>
      <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400">
        {description}
      </p>
    </div>
  );
}

/**
 * Home page component
 * Demonstrates responsive design with Tailwind CSS utility classes
 */
export default function Home(): ReactNode {
  const features: Feature[] = [
    {
      title: 'TypeScript',
      description: 'Full TypeScript support with strict type checking for better code quality.',
      icon: '📘',
    },
    {
      title: 'Tailwind CSS',
      description: 'Utility-first CSS framework for rapid UI development with responsive design.',
      icon: '🎨',
    },
    {
      title: 'Next.js 14',
      description: 'Latest Next.js with App Router, Server Components, and optimized performance.',
      icon: '⚡',
    },
    {
      title: 'Modern Stack',
      description: 'Production-ready setup with ESLint, PostCSS, and optimized build configuration.',
      icon: '🚀',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            Welcome to Your{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 dark:text-gray-400 sm:text-xl">
            A modern Next.js starter template with TypeScript and Tailwind CSS.
            Start building your amazing portfolio today!
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#features"
              className="rounded-lg bg-blue-600 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            >
              Get Started
            </a>
            <a
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Features Section */}
        <div id="features" className="mt-20">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-white">
            Features
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </div>
        </div>

        {/* Getting Started Section */}
        <div className="mt-20 rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 p-8 dark:from-gray-800 dark:to-gray-900 sm:p-12">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
            Quick Start Guide
          </h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                1
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-gray-900 dark:text-white">
                  Start Development Server
                </h3>
                <code className="block rounded bg-gray-900 px-4 py-2 text-sm text-gray-100 dark:bg-gray-950">
                  npm run dev
                </code>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                2
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-gray-900 dark:text-white">
                  Build Your Components
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Create reusable components in <code className="rounded bg-gray-200 px-1 dark:bg-gray-700">src/components/</code>
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                3
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-gray-900 dark:text-white">
                  Deploy to Production
                </h3>
                <code className="block rounded bg-gray-900 px-4 py-2 text-sm text-gray-100 dark:bg-gray-950">
                  npm run build && npm start
                </code>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 border-t border-gray-200 pt-8 text-center dark:border-gray-800">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
          </p>
        </footer>
      </div>
    </main>
  );
}
