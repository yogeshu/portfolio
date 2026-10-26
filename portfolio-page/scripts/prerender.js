import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.resolve(__dirname, '../dist');
const BASE_HTML_PATH = path.join(DIST_DIR, 'index.html');
const SITE_URL = 'https://yogeshbhavsar.com';
const OG_IMAGE = `${SITE_URL}/og-image.png`;

const basePerson = {
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  "name": "Yogesh Bhavsar",
  "url": `${SITE_URL}/`,
  "image": `${SITE_URL}/YogeshBhavsar.png`,
  "jobTitle": "Senior Frontend Engineer & Technical Architect",
  "description": "Senior Frontend Engineer with 7+ years of experience building scalable, high-performance web applications using React, Next.js, and modern frontend architecture.",
  "worksFor": {
    "@type": "Organization",
    "name": "Millipixels Interactive (Reach Plc)",
    "url": "https://www.reachplc.com/"
  },
  "knowsAbout": [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Frontend Architecture",
    "Web Performance Optimization",
    "Core Web Vitals",
    "Design Systems"
  ],
  "sameAs": [
    "https://www.linkedin.com/in/yogeshbhavsarui",
    "https://github.com/yogeshu",
    "https://twitter.com/Yogesh04rock",
    "https://www.instagram.com/the.makhanchor",
    "https://consult.yogeshbhavsar.com/"
  ],
  "subjectOf": {
    "@type": "CreativeWork",
    "name": "Love, Loss and Life",
    "url": "https://makhanchor.in/"
  }
};

const baseWebSite = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  "url": `${SITE_URL}/`,
  "name": "Yogesh Bhavsar — Senior Frontend Engineer & Technical Architect",
  "publisher": { "@id": `${SITE_URL}/#person` },
  "inLanguage": "en-US"
};

const routes = [
  {
    path: '/',
    title: 'Yogesh Bhavsar | Senior Frontend Engineer & Technical Architect',
    description: 'Senior Frontend Engineer with 7+ years of experience in React, Next.js, and scalable UI architecture. Available for web development, freelance frontend engineering, and performance consulting.',
    schema: [
      basePerson,
      baseWebSite,
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#service`,
        "name": "Yogesh Bhavsar - Frontend Architecture & Web Development",
        "provider": { "@id": `${SITE_URL}/#person` },
        "url": `${SITE_URL}/`,
        "areaServed": "Worldwide",
        "serviceType": [
          "Small Business Website Development",
          "Freelance Frontend Engineering",
          "React and Next.js Development",
          "Next.js Performance Audit",
          "Frontend Architecture Consulting"
        ]
      }
    ]
  },
  {
    path: '/web-development',
    title: 'Web Developer for Small Business | Fast Custom Websites — Yogesh Bhavsar',
    description: 'Hire Yogesh Bhavsar, Senior Web Developer for small businesses and founders. Fast, mobile-responsive custom websites with 95+ PageSpeed, zero agency overhead, and built-in Google SEO.',
    schema: [
      basePerson,
      baseWebSite,
      {
        "@type": "Service",
        "@id": `${SITE_URL}/web-development/#service`,
        "name": "Web Developer for Small Business",
        "serviceType": "Small Business Website Development",
        "provider": { "@id": `${SITE_URL}/#person` },
        "description": "Custom website development for small businesses, founders, and growing companies. High performance, mobile-first design, and built-in technical SEO."
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
          { "@type": "ListItem", "position": 2, "name": "Web Development for Small Business", "item": `${SITE_URL}/web-development` }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Why hire a custom web developer instead of using WordPress or Wix for a small business?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Generic page-builders load dozens of unoptimized plugins, resulting in slow load times (hurting Google rankings and mobile bounce rates) and security vulnerabilities. A custom-built website by a senior engineer is lightweight, loads in under 1 second, scores 95+ on Google PageSpeed, and converts visitors directly into leads."
            }
          },
          {
            "@type": "Question",
            "name": "How long does a small business website project take to build?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most focused small business websites and landing pages are designed, developed, audited, and deployed within 2 to 4 weeks with transparent sprint milestones."
            }
          },
          {
            "@type": "Question",
            "name": "Will my small business website be mobile-friendly and optimized for Google search?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Every website is built mobile-first and tested across all screen resolutions. Technical SEO (clean semantic HTML, JSON-LD schema, open graph tags, sitemaps, and Core Web Vitals) is built directly into the codebase from day one."
            }
          }
        ]
      }
    ]
  },
  {
    path: '/frontend-development',
    title: 'Freelance Frontend Developer | React & Next.js — Yogesh Bhavsar',
    description: 'Hire Yogesh Bhavsar, Senior Freelance Frontend Developer & Architect. 7+ years building scalable React, Next.js, and TypeScript applications for global startups and product teams.',
    schema: [
      basePerson,
      baseWebSite,
      {
        "@type": "Service",
        "@id": `${SITE_URL}/frontend-development/#service`,
        "name": "Freelance Frontend Development",
        "serviceType": "Frontend Engineering",
        "provider": { "@id": `${SITE_URL}/#person` },
        "description": "Senior freelance frontend engineering in React, Next.js, and TypeScript for startups, SaaS products, and engineering teams."
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
          { "@type": "ListItem", "position": 2, "name": "Frontend Development", "item": `${SITE_URL}/frontend-development` }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How does hiring a freelance senior frontend developer compare to hiring full-time?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Hiring a full-time senior engineer typically takes 3 to 6 months of interviewing, tens of thousands in recruitment fees, plus permanent salary, equity, and benefits. Engaging me as a senior freelance contractor gives you immediate senior engineering capacity within days. You get enterprise-grade output for your critical sprints or project milestones without long-term overhead or hiring lock-in."
            }
          },
          {
            "@type": "Question",
            "name": "What is your remote availability and timezone overlap?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "I work remotely from India (IST, GMT+5:30) with established, flexible overlap hours for North American (EST/PST), European/UK (GMT/CET), and APAC teams. I emphasize asynchronous excellence—delivering crystal-clear daily summaries, detailed PR documentation, and Loom video walkthroughs so your team never waits on me."
            }
          },
          {
            "@type": "Question",
            "name": "How quickly can you onboard into our codebase and start shipping code?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Typically within 24 to 48 hours of receiving GitHub repository and documentation access. With 7+ years across enterprise platforms like Reach Plc and Jio, I am accustomed to jumping into large, unfamiliar codebases, spinning up local environments quickly, and picking up Jira/Linear backlog tickets without hand-holding."
            }
          }
        ]
      }
    ]
  },
  {
    path: '/react-nextjs-development',
    title: 'React & Next.js Development Services | Yogesh Bhavsar',
    description: 'Production React and Next.js engineering by Senior Frontend Architect Yogesh Bhavsar. Next.js App Router, Server Components, TypeScript, SSR/SSG caching, and Core Web Vitals optimization.',
    schema: [
      basePerson,
      baseWebSite,
      {
        "@type": "Service",
        "@id": `${SITE_URL}/react-nextjs-development/#service`,
        "name": "React & Next.js Development Services",
        "serviceType": "Next.js & React Engineering",
        "provider": { "@id": `${SITE_URL}/#person` },
        "description": "Production React and Next.js engineering specializing in App Router, Server Components, SSR/SSG, and Core Web Vitals."
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
          { "@type": "ListItem", "position": 2, "name": "React & Next.js Development", "item": `${SITE_URL}/react-nextjs-development` }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Why should we migrate from a React SPA (Create React App / Vite) to Next.js?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Standard client-side SPAs ship an empty HTML shell. The user's device must download, parse, and execute megabytes of JavaScript before anything appears on screen. This destroys your mobile conversion rate, produces poor Core Web Vitals (slow LCP), and prevents search engines and social platforms from reliably indexing your pages. Next.js delivers fully formed HTML from the server in milliseconds, dramatically improving SEO, perceived performance, and user retention."
            }
          },
          {
            "@type": "Question",
            "name": "How do you prevent the common pitfalls of Next.js App Router (like caching bugs and hydration errors)?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "App Router requires a disciplined mental model. I enforce strict boundaries: all data fetching and heavy business logic remain in React Server Components, while 'use client' is pushed down to the smallest interactive UI leaves (buttons, modals, dropdowns). I configure deterministic caching with explicit fetch tags, avoiding unintentional stale data."
            }
          }
        ]
      }
    ]
  },
  {
    path: '/frontend-consulting',
    title: 'Frontend Architecture & Performance Consulting | Yogesh Bhavsar',
    description: 'Senior Frontend Architecture & Core Web Vitals Consulting by Yogesh Bhavsar. Fix INP/LCP regressions, optimize Next.js App Router performance, and audit React codebases for scale.',
    schema: [
      basePerson,
      baseWebSite,
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/frontend-consulting/#service`,
        "name": "Frontend Architecture & Performance Consulting",
        "provider": { "@id": `${SITE_URL}/#person` },
        "url": `${SITE_URL}/frontend-consulting`,
        "areaServed": "Worldwide",
        "serviceType": [
          "Core Web Vitals Optimization",
          "Next.js Performance Audit",
          "Frontend Architecture Consulting",
          "Fractional Frontend Leadership",
          "Frontend Codebase Audit"
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
          { "@type": "ListItem", "position": 2, "name": "Frontend Consulting", "item": `${SITE_URL}/frontend-consulting` }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How does failing Core Web Vitals in Google Search Console impact our business?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Google officially uses Core Web Vitals (LCP, INP, and CLS) as a ranking signal in search results. Failing URLs are demoted in mobile rankings, reducing organic search traffic. Furthermore, slow landing page experience increases Google Ads Cost-Per-Click (CPC) and lowers Quality Scores, directly increasing your customer acquisition costs while mobile conversion rates drop."
            }
          },
          {
            "@type": "Question",
            "name": "What is Interaction to Next Paint (INP) and why are our React apps failing it?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "INP replaced FID (First Input Delay) as a Core Web Vital. It measures the latency of every single user interaction across the entire page lifecycle. In React applications, INP usually fails due to heavy CPU-bound re-renders, bloated component trees, un-memoized context updates, or excessive JavaScript executing during hydration. I specialize in profiling these long tasks and decomposing them so interactions respond in under 200ms."
            }
          }
        ]
      }
    ]
  },
  {
    path: '/projects',
    title: 'Selected Work & Engineering Case Studies | Yogesh Bhavsar',
    description: "Products built, engineering problems solved, and systems made better by Senior Frontend Engineer Yogesh Bhavsar. Featuring FrontendYogi, Writer Mirror, Her Sanctuary, and technical case studies.",
    schema: [
      basePerson,
      baseWebSite,
      {
        "@type": "CollectionPage",
        "@id": `${SITE_URL}/projects/#collection`,
        "name": "Selected Work & Engineering Case Studies — Yogesh Bhavsar"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
          { "@type": "ListItem", "position": 2, "name": "Selected Work", "item": `${SITE_URL}/projects` }
        ]
      }
    ]
  },
  {
    path: '/experience',
    title: 'Work Experience | Yogesh Bhavsar — Senior Frontend Engineer',
    description: '7+ years of senior frontend engineering impact across Millipixels Interactive (Reach Plc), Jio, and TISS. Specialized in React, Next.js, and Core Web Vitals optimization.',
    schema: [
      basePerson,
      baseWebSite,
      {
        "@type": "ProfilePage",
        "@id": `${SITE_URL}/experience/#profile`,
        "name": "Work Experience of Yogesh Bhavsar"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
          { "@type": "ListItem", "position": 2, "name": "Experience", "item": `${SITE_URL}/experience` }
        ]
      }
    ]
  },
  {
    path: '/about',
    title: 'About Yogesh Bhavsar | Senior Frontend Engineer & Architect',
    description: "Learn about Yogesh Bhavsar's 7+ year engineering journey from mechanical systems thinking to senior frontend architecture at Millipixels Interactive (Reach Plc) and Jio.",
    schema: [
      basePerson,
      baseWebSite,
      {
        "@type": "AboutPage",
        "@id": `${SITE_URL}/about/#about`,
        "name": "About Yogesh Bhavsar"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
          { "@type": "ListItem", "position": 2, "name": "About", "item": `${SITE_URL}/about` }
        ]
      }
    ]
  },
  {
    path: '/skills',
    title: 'Technical Skills & Architecture | Yogesh Bhavsar',
    description: 'Comprehensive technical skills of Yogesh Bhavsar: React, Next.js, TypeScript, Redux Toolkit, Tailwind CSS, Webpack/Vite, Core Web Vitals, and CI/CD.',
    schema: [
      basePerson,
      baseWebSite,
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/skills/#webpage`,
        "name": "Technical Skills Matrix"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
          { "@type": "ListItem", "position": 2, "name": "Skills", "item": `${SITE_URL}/skills` }
        ]
      }
    ]
  },
  {
    path: '/contact',
    title: 'Contact Yogesh Bhavsar | Hire for Web & Frontend Engineering',
    description: 'Get in touch with Yogesh Bhavsar for small business web development, freelance frontend engineering, React/Next.js projects, or architecture consulting.',
    schema: [
      basePerson,
      baseWebSite,
      {
        "@type": "ContactPage",
        "@id": `${SITE_URL}/contact/#contact`,
        "name": "Contact Yogesh Bhavsar"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
          { "@type": "ListItem", "position": 2, "name": "Contact", "item": `${SITE_URL}/contact` }
        ]
      }
    ]
  },
  // Featured Products
  {
    path: '/projects/frontendyogi',
    title: 'FrontendYogi | Privacy-First Browser Tools & Developer Workspaces',
    description: 'Privacy-first browser tools and developer workspaces by Yogesh Bhavsar. Local-only file processing, SVG tools, and image diffing running entirely in the browser.',
    schema: [
      basePerson,
      baseWebSite,
      {
        "@type": "SoftwareApplication",
        "@id": `${SITE_URL}/projects/frontendyogi/#app`,
        "name": "FrontendYogi",
        "description": "Privacy-first collection of browser-based tools and workspaces.",
        "applicationCategory": "DeveloperApplication"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
          { "@type": "ListItem", "position": 2, "name": "Selected Work", "item": `${SITE_URL}/projects` },
          { "@type": "ListItem", "position": 3, "name": "FrontendYogi", "item": `${SITE_URL}/projects/frontendyogi` }
        ]
      }
    ]
  },
  {
    path: '/projects/writer-mirror',
    title: 'Writer Mirror | Focused Writing & Diagnostic Text Workspace',
    description: 'Writer Mirror by Yogesh Bhavsar: A focused workspace for writing, real-time linguistic analysis, readability diagnostics, and distraction-free document editing.',
    schema: [
      basePerson,
      baseWebSite,
      {
        "@type": "SoftwareApplication",
        "@id": `${SITE_URL}/projects/writer-mirror/#app`,
        "name": "Writer Mirror",
        "description": "A focused workspace for writing and text improvement.",
        "applicationCategory": "WritingApplication"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
          { "@type": "ListItem", "position": 2, "name": "Selected Work", "item": `${SITE_URL}/projects` },
          { "@type": "ListItem", "position": 3, "name": "Writer Mirror", "item": `${SITE_URL}/projects/writer-mirror` }
        ]
      }
    ]
  },
  {
    path: '/projects/her-sanctuary',
    title: 'Her Sanctuary | Content-Led Digital Experience & Website',
    description: 'Her Sanctuary: A content-led digital publication and community sanctuary engineered with accessible typography, responsive design, and sub-second Next.js delivery.',
    schema: [
      basePerson,
      baseWebSite,
      {
        "@type": "SoftwareApplication",
        "@id": `${SITE_URL}/projects/her-sanctuary/#app`,
        "name": "Her Sanctuary",
        "description": "A content-led digital experience built around thoughtful design.",
        "applicationCategory": "PublishingApplication"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
          { "@type": "ListItem", "position": 2, "name": "Selected Work", "item": `${SITE_URL}/projects` },
          { "@type": "ListItem", "position": 3, "name": "Her Sanctuary", "item": `${SITE_URL}/projects/her-sanctuary` }
        ]
      }
    ]
  },
  // Engineering Case Studies
  {
    path: '/case-studies/privacy-first-browser-tools',
    title: 'Building Privacy-First Browser Tools | Case Study by Yogesh Bhavsar',
    description: 'Architecting local-only file processing, zero-upload pipelines, Web Workers, and memory-safe streaming for browser developer utilities.',
    schema: [
      basePerson,
      baseWebSite,
      {
        "@type": "TechArticle",
        "@id": `${SITE_URL}/case-studies/privacy-first-browser-tools/#article`,
        "headline": "Building Privacy-First Browser Tools: Zero-Upload Client-Side Architecture",
        "description": "Architecting local-only file processing, zero-upload pipelines, and Web Workers for browser developer tools."
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
          { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": `${SITE_URL}/projects` },
          { "@type": "ListItem", "position": 3, "name": "Privacy-First Browser Tools", "item": `${SITE_URL}/case-studies/privacy-first-browser-tools` }
        ]
      }
    ]
  },
  {
    path: '/case-studies/image-comparison-ux',
    title: 'Designing a Better Image Comparison Tool | Case Study by Yogesh Bhavsar',
    description: 'Reworking image comparison UX: Synchronized coordinate zooming, GPU-accelerated canvas panning, diff heatmaps, and sub-pixel visual regression inspection.',
    schema: [
      basePerson,
      baseWebSite,
      {
        "@type": "TechArticle",
        "@id": `${SITE_URL}/case-studies/image-comparison-ux/#article`,
        "headline": "Designing a Better Image Comparison Tool: Synchronized Viewports & Diff UX",
        "description": "Reworking image comparison UX: Synchronized coordinate zooming, canvas panning, and difference overlays."
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
          { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": `${SITE_URL}/projects` },
          { "@type": "ListItem", "position": 3, "name": "Image Comparison UX", "item": `${SITE_URL}/case-studies/image-comparison-ux` }
        ]
      }
    ]
  },
  {
    path: '/case-studies/local-first-document-workflows',
    title: 'Building a Local-First Document and Presentation Workflow | Yogesh Bhavsar',
    description: 'Architectural trade-offs of converting documents into presentation decks while keeping sensitive corporate files local using OPFS and IndexedDB.',
    schema: [
      basePerson,
      baseWebSite,
      {
        "@type": "TechArticle",
        "@id": `${SITE_URL}/case-studies/local-first-document-workflows/#article`,
        "headline": "Building a Local-First Document and Presentation Workflow",
        "description": "Architectural trade-offs of converting documents into presentation decks while keeping sensitive data local."
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
          { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": `${SITE_URL}/projects` },
          { "@type": "ListItem", "position": 3, "name": "Local-First Document Workflows", "item": `${SITE_URL}/case-studies/local-first-document-workflows` }
        ]
      }
    ]
  },
  {
    path: '/case-studies/local-photo-processing',
    title: 'Processing and Organizing Large Photo Collections Locally | Yogesh Bhavsar',
    description: 'High-throughput Node.js image processing pipeline using TypeScript worker threads, ONNX Runtime face detection, and memory-safe batch streaming.',
    schema: [
      basePerson,
      baseWebSite,
      {
        "@type": "TechArticle",
        "@id": `${SITE_URL}/case-studies/local-photo-processing/#article`,
        "headline": "Processing and Organizing Large Photo Collections Locally",
        "description": "High-throughput Node.js image processing using worker threads and ONNX Runtime face detection."
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
          { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": `${SITE_URL}/projects` },
          { "@type": "ListItem", "position": 3, "name": "Local Photo Processing", "item": `${SITE_URL}/case-studies/local-photo-processing` }
        ]
      }
    ]
  },
  {
    path: '/case-studies/react-application-architecture',
    title: 'Frontend Architecture for Complex Interactive Applications | Yogesh Bhavsar',
    description: 'Senior engineer playbook: structuring React and Next.js applications, server vs client boundaries, state management hierarchy, and eliminating re-render cascades.',
    schema: [
      basePerson,
      baseWebSite,
      {
        "@type": "TechArticle",
        "@id": `${SITE_URL}/case-studies/react-application-architecture/#article`,
        "headline": "Frontend Architecture for Complex Interactive Applications",
        "description": "Structuring production React and Next.js applications: state boundaries, rendering strategies, and performance."
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
          { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": `${SITE_URL}/projects` },
          { "@type": "ListItem", "position": 3, "name": "React Application Architecture", "item": `${SITE_URL}/case-studies/react-application-architecture` }
        ]
      }
    ]
  },
  {
    path: '/case-studies/research-workflow-engineering',
    title: 'Building a Reliable Research Ingestion Workflow | Yogesh Bhavsar',
    description: 'Designing resilient, fault-tolerant research data ingestion pipelines: source deduplication, rate-limit resilience, structured validation, and privacy isolation.',
    schema: [
      basePerson,
      baseWebSite,
      {
        "@type": "TechArticle",
        "@id": `${SITE_URL}/case-studies/research-workflow-engineering/#article`,
        "headline": "Building a Reliable Research Ingestion Workflow",
        "description": "Source collection, deduplication, structured persistence, and failure handling in research pipelines."
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
          { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": `${SITE_URL}/projects` },
          { "@type": "ListItem", "position": 3, "name": "Research Workflow Engineering", "item": `${SITE_URL}/case-studies/research-workflow-engineering` }
        ]
      }
    ]
  }
];

function generateHtmlForRoute(templateHtml, route) {
  const canonicalUrl = `${SITE_URL}${route.path === '/' ? '/' : route.path}`;
  const graph = {
    "@context": "https://schema.org",
    "@graph": route.schema
  };

  let html = templateHtml;

  // Replace Title
  html = html.replace(/<title>.*?<\/title>/i, `<title>${route.title}</title>`);

  // Replace Meta Description
  html = html.replace(
    /<meta\s+name="description"[\s\S]*?>/i,
    `<meta name="description" content="${route.description}" />`
  );

  // Replace Canonical Tag
  if (/<link\s+rel="canonical"[\s\S]*?>/i.test(html)) {
    html = html.replace(
      /<link\s+rel="canonical"[\s\S]*?>/i,
      `<link rel="canonical" href="${canonicalUrl}" />`
    );
  } else {
    html = html.replace('</head>', `\t<link rel="canonical" href="${canonicalUrl}" />\n</head>`);
  }

  // Replace Open Graph Tags
  html = html.replace(
    /<meta\s+property="og:title"[\s\S]*?>/i,
    `<meta property="og:title" content="${route.title}" />`
  );
  html = html.replace(
    /<meta\s+property="og:description"[\s\S]*?>/i,
    `<meta property="og:description" content="${route.description}" />`
  );
  html = html.replace(
    /<meta\s+property="og:url"[\s\S]*?>/i,
    `<meta property="og:url" content="${canonicalUrl}" />`
  );

  // Replace Twitter Tags
  html = html.replace(
    /<meta\s+name="twitter:title"[\s\S]*?>/i,
    `<meta name="twitter:title" content="${route.title}" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:description"[\s\S]*?>/i,
    `<meta name="twitter:description" content="${route.description}" />`
  );

  // Replace JSON-LD Structured Data
  const jsonLdBlock = `<script type="application/ld+json">\n${JSON.stringify(graph, null, 2)}\n\t</script>`;
  html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/i, jsonLdBlock);

  return html;
}

function prerender() {
  if (!fs.existsSync(BASE_HTML_PATH)) {
    console.error(`Base template not found at ${BASE_HTML_PATH}. Run vite build first.`);
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(BASE_HTML_PATH, 'utf-8');
  console.log(`Pre-rendering ${routes.length} static routes for YogeshBhavsar.com...`);

  for (const route of routes) {
    const routeHtml = generateHtmlForRoute(baseHtml, route);

    if (route.path === '/') {
      fs.writeFileSync(BASE_HTML_PATH, routeHtml, 'utf-8');
      console.log(`  ✓ Root route rendered -> dist/index.html`);
    } else {
      const routeDir = path.join(DIST_DIR, route.path.replace(/^\//, ''));
      if (!fs.existsSync(routeDir)) {
        fs.mkdirSync(routeDir, { recursive: true });
      }
      const targetFilePath = path.join(routeDir, 'index.html');
      fs.writeFileSync(targetFilePath, routeHtml, 'utf-8');
      console.log(`  ✓ Route rendered -> dist${route.path}/index.html`);
    }
  }

  console.log('Pre-rendering complete: All routes have static HTML with unique metadata and schema.');
}

prerender();
