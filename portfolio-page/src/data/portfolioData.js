// src/data/portfolioData.js

export const featuredProducts = [
  {
    id: "frontendyogi",
    slug: "frontendyogi",
    title: "FrontendYogi",
    badge: "Open Website • Live",
    category: "Developer Tools & Workspaces",
    tagline: "An open, client-side developer workstation and web utility toolbox.",
    description: "Built to empower developers, designers, and writers with fast, high-performance web utilities. FrontendYogi is an open website providing device mockups, image privacy tools, PDF utilities, diff checkers, and code generators—processing files 100% locally in the browser with zero server latency.",
    url: "/projects/frontendyogi",
    externalUrl: "https://frontendyogi.com/",
    highlights: [
      "Open-access developer workstation with browser-side Web Workers processing",
      "Suite of in-browser studios: Device Mockups, Image Compression, Local PDF, and Diff Checker",
      "Instant client-side execution with zero upload latency and complete data privacy"
    ],
    stack: ["React", "TypeScript", "Next.js", "Web Workers", "Canvas API", "Tailwind CSS"],
    caseStudySlug: "privacy-first-browser-tools",
    caseStudyTitle: "Building privacy-first browser tools →"
  },
  {
    id: "writer-mirror",
    slug: "writer-mirror",
    title: "Writer Mirror",
    badge: "Featured Product",
    category: "Writing & Text Diagnostics",
    tagline: "A focused workspace for writing, editing, and diagnostic text improvement.",
    description: "A distraction-free writing environment engineered with real-time text diagnostics, readability scoring, and client-side linguistic analysis. Designed to help authors, essayists, and technical writers hone their craft with zero latency.",
    url: "/projects/writer-mirror",
    externalUrl: "#",
    highlights: [
      "Rich text engine and structured document workflows",
      "Real-time writing diagnostics, syllable counting, and readability indices",
      "Minimalist interface design with responsive keyboard shortcuts"
    ],
    stack: ["React", "TypeScript", "Lexical / ProseMirror", "Tailwind CSS", "Framer Motion"],
    caseStudySlug: "local-first-document-workflows",
    caseStudyTitle: "Building local-first document workflows →"
  },
  {
    id: "her-sanctuary",
    slug: "her-sanctuary",
    title: "Her Sanctuary",
    badge: "Featured Product",
    category: "Content & Community Platform",
    tagline: "A content-led digital experience built around thoughtful design and empathy.",
    description: "An end-to-end digital publication and community sanctuary. Engineered from initial brand identity and information architecture to high-speed responsive delivery, accessible typography, and SEO discoverability.",
    url: "/projects/her-sanctuary",
    externalUrl: "#",
    highlights: [
      "Thoughtful content architecture and intuitive editorial navigation",
      "Accessible design system with responsive typography and dark mode",
      "Flawless Core Web Vitals scores and organic search engine discovery"
    ],
    stack: ["Next.js", "React", "Tailwind CSS", "Contentlayer", "SEO Schema", "Vercel"],
    caseStudySlug: "react-application-architecture",
    caseStudyTitle: "Frontend architecture for content-led web apps →"
  }
];

export const engineeringCaseStudies = [
  {
    slug: "privacy-first-browser-tools",
    title: "Building Privacy-First Browser Tools",
    subtitle: "Architecting local-only file processing, zero-upload pipelines, and high-performance Web Workers.",
    status: "Public",
    targetKeywords: "browser-based file processing, client-side file processing, privacy-first developer tools",
    summary: "How FrontendYogi evolved from individual utilities into rich browser workspaces. Detailed architectural breakdown of client-side file manipulation, memory management for large inputs, and local export streams without server latency or data leaks.",
    topics: [
      "Why browser-side processing wins for privacy, speed, and zero server infrastructure cost",
      "Offloading CPU-intensive parsing and conversion to dedicated Web Workers",
      "Handling large binary buffers and memory cleanup in JavaScript",
      "SEO architecture for utility discoverability without duplicate content penalties"
    ],
    relatedService: { name: "Next.js & React Engineering", path: "/react-nextjs-development" }
  },
  {
    slug: "image-comparison-ux",
    title: "Designing a Better Image Comparison Tool",
    subtitle: "Reworking inspection UX: Synchronized zoom, panning, difference overlays, and sub-pixel alignment.",
    status: "Public",
    targetKeywords: "image comparison tool, compare two images online, image diff viewer",
    summary: "An exploration of UX and rendering bottlenecks in web-based image diffing. Documenting the shift from cramped side-by-side viewports to synchronized multi-mode inspection (split slider, opacity blending, difference heatmap) with GPU-accelerated canvas transforms.",
    topics: [
      "Identifying usability failures in existing web comparison tools",
      "Mathematical synchronization of coordinate spaces during zoom & pan",
      "Canvas 2D vs WebGL rendering for instant visual difference detection",
      "Touch gesture ergonomics for mobile and high-DPI displays"
    ],
    relatedService: { name: "Frontend Development", path: "/frontend-development" }
  },
  {
    slug: "local-first-document-workflows",
    title: "Building a Local-First Document and Presentation Workflow",
    subtitle: "Architectural trade-offs of converting documents into interactive decks while keeping sensitive data local.",
    status: "In Progress / Architecture RFC",
    targetKeywords: "local-first web applications, browser-based document processing, privacy-first document tools",
    summary: "Designing a document-to-presentation pipeline operating primarily on-device. Explores state persistence using IndexedDB/OPFS, CRDTs for future collaboration, and privacy guarantees when dealing with confidential corporate decks.",
    topics: [
      "Local-First software principles: user ownership, instant offline load, zero cloud dependence",
      "Origin Private File System (OPFS) and IndexedDB for high-capacity local storage",
      "Client-side Markdown / HTML parsing into presentation slide nodes",
      "Graceful degradation when exporting to PDF and standard presentation formats"
    ],
    relatedService: { name: "Web Development", path: "/web-development" }
  },
  {
    slug: "local-photo-processing",
    title: "Processing and Organizing Large Photo Collections Locally",
    subtitle: "Exploring Node.js image processing pipelines, ONNX Runtime face detection, and bulk tagging.",
    status: "Technical Case Study",
    targetKeywords: "Node.js image processing, ONNX face detection, large-scale photo organization",
    summary: "Technical notes from building an offline photo organization pipeline in TypeScript. Covers batch pipeline concurrency, ONNX Runtime embeddings for facial clustering, EXIF metadata extraction, and streaming thousands of files without memory exhaustion.",
    topics: [
      "Node.js streams and worker thread pools for high-throughput I/O",
      "Running lightweight ONNX machine learning models locally on the CPU/GPU",
      "Handling EXIF orientation, timestamps, and deduplication hashing at scale",
      "Benchmarking throughput: processing 10,000 photos without UI lockups"
    ],
    relatedService: { name: "Frontend Architecture Consulting", path: "/frontend-consulting" }
  },
  {
    slug: "react-application-architecture",
    title: "Frontend Architecture for Complex Interactive Applications",
    subtitle: "State boundaries, rendering strategies, accessibility, and long-term codebase maintainability.",
    status: "Public Engineering Guide",
    targetKeywords: "React application architecture, scalable frontend architecture, frontend performance optimization",
    summary: "A senior engineer's playbook for structuring production React applications. How to define clean component boundaries, avoid state synchronization traps, enforce strict TypeScript domain types, and protect teams from architectural drift.",
    topics: [
      "Server vs Client component demarcation in modern React / Next.js",
      "Pragmatic state management: Server state vs Local state vs Global cache",
      "Eliminating re-render cascades using memoization and layout boundaries",
      "Architectural guardrails: ESLint rules, Husky hooks, and component contracts"
    ],
    relatedService: { name: "Frontend Architecture Consulting", path: "/frontend-consulting" }
  },
  {
    slug: "research-workflow-engineering",
    title: "Building a Reliable Research Ingestion Workflow",
    subtitle: "Source collection, deduplication, structured persistence, and failure recovery in content pipelines.",
    status: "Private Engineering RFC",
    targetKeywords: "research workflow applications, source management, reliable data ingestion",
    summary: "Engineering reliable data extraction and synthesis workflows for multi-source research tasks. Focuses on deterministic caching, rate-limit resilience, structured validation, and privacy-preserving storage of personal inputs.",
    topics: [
      "Deterministic data normalization across heterogenous external APIs",
      "Resilient queue architecture with exponential backoff and jitter",
      "Strict data sanitization and isolation of confidential entities",
      "State reconciliation when resuming interrupted research pipelines"
    ],
    relatedService: { name: "Frontend Development", path: "/frontend-development" }
  }
];

export const privateWorkCaseStudies = [
  {
    id: "enterprise-react-performance",
    badge: "Anonymized Enterprise Case Study",
    title: "Improving the Performance of a Large React Application",
    context: "A confidential enterprise publishing and media application with complex editorial workflows, hundreds of thousands of daily active users, and high rendering demands.",
    challenge: "Maintain sub-second page transitions and responsive user interactions while managing complex UI state, large datasets, third-party analytics, and evolving product requirements.",
    contribution: [
      "Analyzed rendering and state-management bottlenecks using Chrome DevTools performance traces.",
      "Re-evaluated component boundaries, replaced heavyweight CSS-in-JS (styled-components) with modular CSS, reducing JavaScript execution time by 25%.",
      "Eliminated render cascades across core layout trees, bringing Interaction to Next Paint (INP) into Google's 'Good' threshold (<200ms).",
      "Established reusable component architecture patterns and automated visual regression testing."
    ],
    evidence: "Verified Core Web Vitals improvements in field data; 25% bundle size reduction; zero proprietary client source code disclosed."
  },
  {
    id: "iot-telemetry-state",
    badge: "Anonymized Telecommunications / IoT Case Study",
    title: "High-Throughput State Architecture for Real-Time Telemetry Dashboards",
    context: "Large-scale agricultural and livestock monitoring systems tracking thousands of IoT sensors across distributed geographic regions.",
    challenge: "Consuming rapid sensor data streams with role-based access controls for enterprise administrators, without triggering UI lag or memory leaks on low-powered client devices.",
    contribution: [
      "Architected normalized Redux state slices with memoized Reselect selectors to prevent unnecessary dashboard rerenders.",
      "Optimized API query cadence and implemented client-side data buffering, cutting redundant network requests by 30%.",
      "Created reusable UI components compatible with both modern Web browsers and KaiOS low-spec mobile devices.",
      "Enforced 90%+ automated test coverage with Jest to guarantee data integrity across mission-critical livestock tracking."
    ],
    evidence: "100% audit scores on lead-generation web views; deployed to nationwide operational teams with zero data desync incidents."
  }
];
