import type { Config } from 'tailwindcss';

const config: Config = {
  // Content paths - Tailwind will scan these files for class names
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Extend default theme with custom values
      colors: {
        // Add custom colors here
        // Example: 'brand': '#007bff',
      },
      fontFamily: {
        // Add custom fonts here
        // Example: sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        // Add custom spacing values here
      },
      animation: {
        // Add custom animations here
      },
      keyframes: {
        // Add custom keyframes here
      },
    },
  },
  plugins: [
    // Add Tailwind plugins here
    // Example: require('@tailwindcss/forms'),
  ],
};

export default config;
