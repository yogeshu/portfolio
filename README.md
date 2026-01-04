# Portfolio - Next.js Starter Template

A modern, production-ready portfolio starter template built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## 🚀 Features

- ⚡ **Next.js 14** with App Router for optimal performance
- 📘 **TypeScript** with strict mode for type safety
- 🎨 **Tailwind CSS v3+** for rapid UI development
- 🔍 **ESLint** configured with Next.js standards
- 📦 **Optimized Build** with production-ready configurations
- 🎯 **Path Aliases** (`@/` imports) for cleaner code
- 📱 **Responsive Design** with mobile-first approach
- 🌙 **Dark Mode** ready with CSS variables
- ♿ **Accessible** with semantic HTML and ARIA labels

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/                  # Next.js App Router pages
│   │   ├── layout.tsx       # Root layout with metadata
│   │   ├── page.tsx         # Home page
│   │   └── globals.css      # Global styles with Tailwind
│   ├── components/          # Reusable React components
│   │   └── Button.tsx       # Example button component
│   └── lib/                 # Utility functions and helpers
│       └── utils.ts         # Common utilities
├── public/                  # Static assets (images, fonts, etc.)
├── next.config.ts          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── postcss.config.js       # PostCSS configuration
├── .eslintrc.json          # ESLint configuration
└── package.json            # Dependencies and scripts
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm, yarn, or pnpm

### Installation

1. **Install dependencies:**

```bash
npm install
```

2. **Run the development server:**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Available Scripts

- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## 🎨 Customization

### Tailwind Configuration

Edit `tailwind.config.ts` to customize:
- Colors
- Fonts
- Spacing
- Breakpoints
- Animations

### TypeScript Configuration

The `tsconfig.json` includes:
- Strict type checking enabled
- Path aliases (`@/` points to `src/`)
- Optimized for Next.js

### Metadata & SEO

Update metadata in `src/app/layout.tsx`:
- Title and description
- Open Graph tags
- Twitter cards
- Author information

## 📝 Development Guidelines

### Components

Create reusable components in `src/components/`:

```tsx
// src/components/MyComponent.tsx
import type { ReactNode } from 'react';

interface MyComponentProps {
  title: string;
  children: ReactNode;
}

export default function MyComponent({ title, children }: MyComponentProps) {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">{title}</h2>
      {children}
    </div>
  );
}
```

### Utilities

Add helper functions in `src/lib/`:

```ts
// src/lib/myUtils.ts
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
}
```

### Styling

Use Tailwind's utility classes for styling:

```tsx
<div className="flex items-center justify-center min-h-screen bg-gray-100">
  <h1 className="text-4xl font-bold text-blue-600">Hello World</h1>
</div>
```

## 🚀 Deployment

### Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Vercel will automatically detect Next.js and configure the build

### Other Platforms

- **Netlify**: Supports Next.js with the Netlify adapter
- **Docker**: Use the official Next.js Docker example
- **Self-hosted**: Run `npm run build && npm start`

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
