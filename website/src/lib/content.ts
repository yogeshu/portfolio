export interface Project {
  slug: string;
  title: string;
  category: string;
  role: string;
  duration: string;
  company: string;
  summary: string;
  challenge: string;
  solution: string;
  responsibilities: string[];
  architectureDecisions: string[];
  techStack: string[];
  metrics: Record<string, string>;
  image?: string;
  liveUrl: string | null;
  repoUrl?: string | null;
  featured: boolean;
  testimonialSnippet?: string;
}

export interface ExperienceItem {
  company: string;
  parent?: string;
  role: string;
  duration: string;
  current: boolean;
  description: string;
  deliverables: string[];
  techStack: string[];
}

export interface ServiceItem {
  id: string;
  tag: string;
  title: string;
  price: string;
  deliverable: string;
  popular?: boolean;
  description: string;
  features: string[];
  idealFor: string;
  deliverablesList: string[];
}

export interface ProductItem {
  name: string;
  description: string;
  rationale: string;
  techStack: string[];
  status: string;
  url: string | null;
}

export interface ArticleItem {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  excerpt: string;
  takeaways: string[];
  content: string[];
}

export const siteConfig = {
  name: "Yogesh Bhavsar",
  role: "Senior Frontend Engineer & Technical Architect",
  location: "India · Worldwide Remote",
  summary: "Senior Frontend Engineer with 7+ years of production experience across React, Next.js, web performance engineering, and scalable frontend architectures.",
  title: "Yogesh Bhavsar — Senior Frontend Engineer & Technical Architect",
  description: "Specializing in React, Next.js, Core Web Vitals optimization, frontend architecture audits, and production UI systems.",
  url: "https://yogeshbhavsar.com",
  ogImage: "/og-image.png",
  avatarImage: "/YogeshBhavsar.jpg",
  email: "yogeshbhavsar1994@gmail.com",
  social: {
    github: "https://github.com/yogeshu",
    linkedin: "https://www.linkedin.com/in/yogeshbhavsarui",
    twitter: "https://twitter.com/Yogesh04rock",
  },
  analytics: {
    gaId: "G-899C2G4NC8",
    consultGaId: "G-16CGV8G7LW",
  },
  calUrl: "https://app.cal.eu/yogeshbhavsar/discovery-call-project-fit",
  resumePath: "/Yogesh_Bhavsar-React-Next_Developer.pdf",
};

export const projects: Project[] = [
  {
    slug: "jio-gau-samriddhi",
    title: "Jio Gau Samriddhi",
    category: "Enterprise Scale",
    role: "Lead Frontend Engineer",
    duration: "2022–2024",
    company: "Jio (via Quest Global)",
    summary: "High-performance Next.js web platform engineered for rural India, delivering instant load times and resilient lead capture over volatile 4G mobile networks.",
    challenge: "Jio required a digital lead-generation and engagement ecosystem targeted at rural livestock owners across India. End users relied on entry-level Android devices and constrained 4G cellular data connections with erratic latency.",
    solution: "Architected a Next.js static-first application with minimal client-side hydration cost. Integrated the enterprise Jio Design System for brand coherence while enforcing strict asset budgets and aggressive image compression strategies.",
    responsibilities: [
      "Led frontend architecture decisions, page structuring, and build pipeline configuration",
      "Enforced static generation (SSG) with ISR where appropriate for sub-second page loads",
      "Implemented responsive components strictly aligned with the Jio Design System",
      "Audited and optimized Web Vitals, achieving 100% SEO audit score and fast LCP on mobile"
    ],
    architectureDecisions: [
      "Static Generation over SSR: Removed runtime Node.js compute overhead at edge for informational pages",
      "Decoupled Form Submissions: Background queued offline-tolerant lead submissions with immediate optimistic UI feedback",
      "Asset Budget Enforcement: Strict 120KB initial JS execution cap for the critical entry path"
    ],
    techStack: ["Next.js", "React", "Context API", "Jio Design System", "Modular CSS"],
    metrics: {
      "SEO Audit": "100%",
      "Projects Led": "4 Initiatives",
      "Geographic Reach": "Pan-India Rural",
      "Mobile Performance": "Sub-2s LCP on 4G"
    },
    image: "/gausamriddhi_website.png",
    liveUrl: "https://www.jiogausamriddhi.com/",
    featured: true
  },
  {
    slug: "uk-publication-platform",
    title: "UK News & Media Network",
    category: "High-Traffic Publishing",
    role: "Senior Frontend Developer",
    duration: "Aug 2024–Present",
    company: "MilliPixels Interactive (Reach Plc)",
    summary: "Large-scale media publication network deployed across 80+ active production domains serving over 4 million daily readers with strict Core Web Vitals SLA.",
    challenge: "Legacy styled-components implementations and heavy ad-tech integrations introduced severe runtime CSS overhead, layout shifts (CLS), and interaction delays (INP) across dozens of regional and national newspaper brands.",
    solution: "Spearheaded the systematic migration from runtime CSS-in-JS to zero-runtime modular CSS. Refactored critical article layouts to eliminate render-blocking waterfalls and stabilized editorial components.",
    responsibilities: [
      "Own core frontend module delivery for business-as-usual editorial workflows",
      "Lead migration from styled-components to modular CSS, cutting bundle execution time by 25%",
      "Safeguard 90+ Lighthouse performance scores against continuous third-party ad script insertions",
      "Conduct rigorous code reviews and maintain strict automated Husky pre-commit hooks"
    ],
    architectureDecisions: [
      "Zero-Runtime CSS: Abandoned runtime CSS parser injection in favor of build-time modular CSS",
      "Content Visibility & Deferral: Implemented content-visibility and priority hints for below-the-fold media",
      "Strict Visual Regression: Integrated automated visual regression checks preventing editorial style breakage"
    ],
    techStack: ["React", "Next.js", "Modular CSS", "Jest", "Husky", "CI/CD Pipelines"],
    metrics: {
      "Production Sites": "80+ Regional Domains",
      "Daily Engagement": "4M+ Active Readers",
      "Bundle Reduction": "25% Smaller Initial JS",
      "Lighthouse Score": "90+ Stable Score"
    },
    liveUrl: null, // Enterprise NDA
    featured: true
  },
  {
    slug: "krishi-bazaar",
    title: "Krishi Bazaar (IMP)",
    category: "AgriTech Marketplace",
    role: "Frontend Developer",
    duration: "2022–2023",
    company: "Jio (via Quest Global)",
    summary: "Real-time agricultural input marketplace connecting rural farmers with regional input suppliers, transparent price discovery, and integrated logistics.",
    challenge: "Farmers struggled with volatile middleman pricing and fragmented logistics. The web client required dependable real-time price feeds, transactional trust, and complex role-based inventory views.",
    solution: "Engineered a performant React administration and merchant interface with optimized GraphQL queries and resilient state management, keeping catalog updates immediate without browser sluggishness.",
    responsibilities: [
      "Engineered merchant catalog management and inventory dashboard workflows",
      "Integrated GraphQL endpoints with optimistic cache updates for rapid browsing",
      "Constructed transactional flow views with detailed client-side validation and error recovery",
      "Adapted complex table views into accessible, touch-friendly interfaces for low-resolution tablets"
    ],
    architectureDecisions: [
      "Normalized Client Caching: Utilized normalized cache trees to eliminate redundant network roundtrips",
      "Granular Component Boundaries: Isolated volatile live price tickers so table rerenders remained local",
      "Defensive Network Handling: Gracefully displayed cached prices during transient connectivity drops"
    ],
    techStack: ["React", "Redux Toolkit", "GraphQL", "Material UI", "REST APIs"],
    metrics: {
      "Active Farmers & Dealers": "50,000+",
      "Catalog Listings": "200+ Agricultural SKUs",
      "Catalog Update Latency": "< 400ms",
      "Accessibility": "Accessible Touch Targets"
    },
    image: "/imp.png",
    liveUrl: "https://www.jiokrishi.com/krishi-bazar",
    featured: true
  },
  {
    slug: "yogimetrics",
    title: "Yogimetrics",
    category: "Performance Diagnostic Utility",
    role: "Independent Builder",
    duration: "2024–Present",
    company: "Independent Product",
    summary: "Specialist developer diagnostic tool engineered to uncover runtime bottlenecks, hydration debt, and memory leaks that standard Lighthouse audits miss.",
    challenge: "Synthetic single-page Lighthouse runs frequently miss real-user friction points: memory bloat from long-lived single-page sessions, script execution micro-stutters, and unmeasured Interaction to Next Paint (INP) spikes.",
    solution: "Built a diagnostic harness utilizing native PerformanceObserver APIs, recording real-time long tasks, script evaluation durations, DOM node counts, and memory heap trajectories with actionable remediation advice.",
    responsibilities: [
      "Conceived, architected, and programmed the complete diagnostic framework",
      "Designed metric translation algorithms converting raw microsecond timings into ranked fix checklists",
      "Created an interactive timeline visualizer to inspect long frames without DevTools complexity"
    ],
    architectureDecisions: [
      "Zero-Overhead Profiling: Structured data collection via requestIdleCallback to avoid observer-induced jank",
      "Local-First Telemetry: All performance metrics remain client-side; no third-party telemetry leakage",
      "Deterministic Action Scoring: Findings are ranked by estimated developer effort versus user impact"
    ],
    techStack: ["React", "TypeScript", "Web Vitals API", "Performance Timeline API", "Tailwind CSS"],
    metrics: {
      "Developers Tested": "500+ Engineers",
      "Audit Runs Executed": "1,000+ Traces",
      "Overhead Impact": "< 0.8% CPU footprint",
      "License": "Independent Tool"
    },
    liveUrl: null,
    featured: true
  },
  {
    slug: "cattle-management-portal",
    title: "Enterprise Cattle Management Portal",
    category: "Enterprise IoT & Records",
    role: "Frontend Engineer",
    duration: "2022–2024",
    company: "Jio (via Quest Global)",
    summary: "Mission-critical veterinary and livestock dashboard handling dense tabular medical histories, RFID tagging, and role-based permissions.",
    challenge: "Field veterinary supervisors and enterprise farm managers required simultaneous access to dense health logs, milk yield charts, and breeding records with strict role separation and zero tolerance for erroneous submissions.",
    solution: "Developed a bulletproof React architecture with Redux Toolkit, automated Jest test suites covering form states, and accessible data-density tables with instant filtering.",
    responsibilities: [
      "Architected global state normalization handling nested relational animal records",
      "Wrote comprehensive unit and integration tests with Jest and React Testing Library",
      "Implemented strict client-side validation rules preventing invalid veterinary dosages",
      "Collaborated with IoT hardware backend teams for asynchronous RFID scan imports"
    ],
    architectureDecisions: [
      "Strict Schema Validation: Used runtime type decoders to guarantee corrupted server payloads never crashed UI",
      "Virtual Scrolling: Virtualized large herd inventory lists of 10,000+ rows keeping frame rates locked at 60 FPS"
    ],
    techStack: ["React", "Redux Toolkit", "Material UI", "Jest", "Firebase"],
    metrics: {
      "Records Managed": "100K+ Tagged Livestock",
      "Test Coverage": "90%+ Core Logic Coverage",
      "Form Error Reduction": "Zero Data Loss Reported"
    },
    image: "/gausamriddhi_portal.png",
    liveUrl: "https://www.jiogausamriddhi.com/portal/login",
    featured: false
  },
  {
    slug: "clix-dashboard",
    title: "TISS CLIx Educational Dashboard",
    category: "EdTech & Analytics",
    role: "Software Engineer (UI/UX)",
    duration: "2019–2021",
    company: "Tata Institute of Social Sciences (TISS)",
    summary: "Offline-tolerant academic progress analytics platform deployed across state schools in rural and semi-urban India.",
    challenge: "School teachers and educational researchers needed actionable visibility into student computer literacy and STEM module completion. Most school labs experienced frequent power outages and zero internet for weeks.",
    solution: "Built a React-based data aggregation dashboard integrated with local school server synchronization, transforming raw student telemetry logs into clean visual progress indicators.",
    responsibilities: [
      "Migrated outdated server-rendered Django templates into reactive, maintainable React components",
      "Created interactive student achievement charts utilizing Chart.js with high-contrast accessibility",
      "Bridged pedagogical researchers and engineering requirements into intuitive user journeys",
      "Optimized offline asset caching to ensure seamless dashboard launch without upstream connectivity"
    ],
    architectureDecisions: [
      "Decoupled Presentation Layer: Separated analytics calculation into web workers, maintaining smooth UI responsiveness",
      "Progressive Synchronization: Stored local interactions in IndexedDB with automated push sync on network restoration"
    ],
    techStack: ["React", "Redux", "Material UI", "Chart.js", "Django REST"],
    metrics: {
      "Maintenance Reduction": "40% Lower Maintenance Cost",
      "Student Beneficiaries": "Thousands across 4 States",
      "Bug Frequency": "50% Drop in Reported Defects"
    },
    image: "/clix_dashboard.png",
    liveUrl: "https://clixdashboard.tiss.edu/home",
    featured: false
  },
  {
    slug: "sangam-biodata",
    title: "Sangam Biodata Builder",
    category: "Consumer Utility",
    role: "Solo Creator",
    duration: "2024",
    company: "Independent Product",
    summary: "Culturally sensitive matrimony biodata generator for non-technical users, featuring mobile-first forms and client-side PDF compilation.",
    challenge: "Non-technical users in India routinely struggled with clunky desktop Word documents or paid photo studios merely to format matrimonial biodatas for family circulation on WhatsApp.",
    solution: "Created an effortless mobile-first web tool featuring intuitive progressive disclosure forms, instant live layout preview, and browser-side vector PDF generation that runs without server dependencies.",
    responsibilities: [
      "Researched cultural layout conventions and crafted 4 distinct print-ready typography templates",
      "Programmed vector PDF document generation entirely within the browser via client-side workers",
      "Implemented Firebase authentication and profile persistence for returning users",
      "Maintained zero-server-compute infrastructure, keeping operating overhead at exactly zero"
    ],
    architectureDecisions: [
      "Client-Side PDF Synthesis: Avoided costly headless Chromium servers by synthesizing clean PDFs in-browser",
      "Privacy by Architecture: Personal biodata photos and contact information never touch external processing queues"
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Client-Side PDF", "Firebase"],
    metrics: {
      "Operating Cost": "$0/mo Serverless Architecture",
      "Mobile Usage": "88% Mobile Traffic",
      "Export Latency": "< 1.5s Client-Side PDF"
    },
    image: "/sangam.png",
    liveUrl: "https://sangam-biodata.vercel.app/",
    repoUrl: "https://github.com/yogeshu/sangam-biodata",
    featured: false
  }
];

export const experience: ExperienceItem[] = [
  {
    company: "MilliPixels Interactive",
    parent: "Reach Plc",
    role: "Senior Frontend Developer",
    duration: "Aug 2024 – Present",
    current: true,
    description: "Leading frontend architecture and technical delivery across Reach Plc's news network spanning 80+ high-traffic digital publications.",
    deliverables: [
      "Spearheading the systematic migration from legacy styled-components to modular CSS, cutting page render overhead by 25%",
      "Securing consistent 90+ Lighthouse performance scores across editorial templates laden with dynamic programmatic ad slots",
      "Refactoring complex article component hierarchies to guarantee 100% visual regression test pass rates across viewport sizes",
      "Standardizing TypeScript interfaces, code quality guardrails, and mentoring mid-level engineers through detailed code reviews"
    ],
    techStack: ["React", "Next.js", "Modular CSS", "TypeScript", "Jest", "Husky", "CI/CD"]
  },
  {
    company: "Jio",
    parent: "via Quest Global",
    role: "Senior Software Engineer",
    duration: "Aug 2021 – Aug 2024",
    current: false,
    description: "Delivered strategic enterprise and consumer web platforms for Jio's agricultural, retail, and veterinary divisions across India.",
    deliverables: [
      "Led frontend engineering across 4 major commercial initiatives including Jio Gau Samriddhi and the Cattle Management Portal",
      "Designed and deployed enterprise state management architectures utilizing Redux Toolkit and Context API",
      "Constructed reusable, accessible components for KaiOS and modern mobile browsers conforming to the Jio Design System",
      "Mentored 5+ junior engineers and enforced strict ESLint/Prettier workflows in a high-velocity agile deployment cycle"
    ],
    techStack: ["React", "Next.js", "Redux Toolkit", "Jio Design System", "KaiOS", "Webpack", "Azure DevOps"]
  },
  {
    company: "Tata Institute of Social Sciences (TISS)",
    parent: "CLIx Project",
    role: "Software Engineer (UI/UX)",
    duration: "Jan 2019 – Jul 2021",
    current: false,
    description: "Engineered responsive, accessible educational software and data visualization dashboards for rural schools with constrained hardware.",
    deliverables: [
      "Executed the migration of legacy server-rendered Django templates to React SPA components, cutting ongoing maintenance by 40%",
      "Increased mobile interface engagement by 30% through strict touch ergonomics and adaptive responsive breakpoints",
      "Integrated Chart.js telemetry dashboards for pedagogical researchers monitoring module completion across four states",
      "Developed offline-resilient modules capable of syncing educational progress whenever intermittent internet connectivity returned"
    ],
    techStack: ["React", "Redux", "Django REST", "Bootstrap", "Material UI", "Chart.js", "jQuery"]
  }
];

export const services: ServiceItem[] = [
  {
    id: "performance-audit",
    tag: "DIAGNOSTIC",
    title: "Next.js Performance & Core Web Vitals Audit",
    price: "Fixed-Scope Engagement",
    deliverable: "Comprehensive Written Diagnostic + 45-Min Team Walkthrough",
    popular: true,
    description: "A deep, forensic investigation of your production Next.js or React application. We trace real-user monitoring (RUM) regressions, interaction delays (INP), slow LCP boundaries, server response bottlenecks, and bloated client hydration trees.",
    features: [
      "Real-User Performance (RUM) & WebPageTest waterfall breakdown",
      "LCP element discovery, image strategy & critical rendering path map",
      "Interaction to Next Paint (INP) analysis & JavaScript long-task profiling",
      "Next.js App Router vs Pages Router rendering boundaries audit",
      "Client bundle composition analysis & duplicate package isolation",
      "Prioritized, code-level remediation roadmap ranked by effort vs. CWV impact"
    ],
    idealFor: "Teams experiencing conversion drop-offs, SEO ranking penalties, or sluggish user feedback after scaling their Next.js codebase.",
    deliverablesList: [
      "Executive summary for product leadership detailing revenue/SEO risks",
      "Full technical audit document with exact file paths and code snippets to change",
      "Direct guidance on caching headers, CDN rules, and image pipeline settings",
      "Interactive 45-minute Q&A call with your engineering team"
    ]
  },
  {
    id: "codebase-audit",
    tag: "ARCHITECTURE",
    title: "Frontend Architecture & Maintainability Review",
    price: "Fixed-Scope Engagement",
    deliverable: "Structural Health Assessment + Refactoring Roadmap",
    popular: false,
    description: "An unsparing evaluation of your frontend repository before scaling your team or embarking on major feature initiatives. We expose technical debt, brittle state topologies, hidden dependency risks, and unstandardized patterns.",
    features: [
      "Component boundaries, prop drilling & state management architecture review",
      "Data-fetching strategies: SSR, Server Actions, React Query vs. useEffect patterns",
      "TypeScript coverage, type safety leaks & strictness configuration",
      "Design system foundations, token consistency & CSS architectural hygiene",
      "Test coverage evaluation (unit, integration & visual regression)",
      "Build pipeline, linting, CI/CD, and dependency vulnerability assessment"
    ],
    idealFor: "Founders, CTOs, and engineering leads who sense their frontend is becoming brittle, slow to modify, or difficult for new hires to navigate.",
    deliverablesList: [
      "Architecture health score across 6 key engineering disciplines",
      "Categorized list of high-risk files and refactoring priorities",
      "Concrete blueprint for state management and data fetching modernization",
      "Template Architecture Decision Records (ADRs) tailored for your stack"
    ]
  },
  {
    id: "fractional-architecture",
    tag: "EMBEDDED",
    title: "Fractional Frontend Architecture & Advisory",
    price: "Monthly Retainer",
    deliverable: "Embedded Senior Direction (10–15 Hours / Week)",
    popular: false,
    description: "Senior technical judgment and architectural governance embedded directly into your weekly development rhythm—without the multi-month search and overhead of a full-time principal engineering salary.",
    features: [
      "Participation in technical design reviews, sprint planning, and architecture spikes",
      "Direct code reviews on high-risk pull requests and fundamental foundational PRs",
      "Authoring Architecture Decision Records (ADRs) to eliminate repeated team debates",
      "Hands-on implementation of challenging, foundational frontend primitives",
      "Mentoring engineers on performance, modern React patterns, and accessibility",
      "Continuous performance budget monitoring against Core Web Vitals regressions"
    ],
    idealFor: "Growth-stage startups and engineering teams shipping fast who need experienced technical leadership to prevent expensive architectural missteps.",
    deliverablesList: [
      "Dedicated Slack/Discord presence and weekly architecture sync",
      "Guaranteed 24-hour review turnarounds on critical pull requests",
      "Active guidance on library selection, framework upgrades, and technical debt retirement",
      "Flexible month-to-month commitment after initial 60-day alignment"
    ]
  }
];

export const products: ProductItem[] = [
  {
    name: "FrontendYogi",
    description: "A growing collection of free, privacy-friendly browser tools for students, developers, and professionals who need everyday tasks done quickly without ads or paywalls (Image Compressor, PDF Split/Merge, JSON Formatter, Base64 Decoder).",
    rationale: "Most online utilities (PDF tools, image converters) sell data, bombard users with intrusive popups, or demand recurring subscriptions for basic browser compute. FrontendYogi executes operations locally in-browser.",
    techStack: ["Next.js", "TypeScript", "WebAssembly", "Canvas API", "PWA"],
    status: "Active / Shipped",
    url: "https://frontendyogi.com"
  },
  {
    name: "Writer Mirror",
    description: "A distraction-free writing and editing workbench featuring structural grammar guidance, readability pacing metrics, and stylistic suggestions without clutter.",
    rationale: "Traditional word processors are weighed down by bloated menus, while modern AI editors frequently rewrite text without consent. Writer Mirror preserves human voice while catching syntax friction.",
    techStack: ["Next.js", "React", "Tailwind CSS", "Local-First"],
    status: "Shipped Beta",
    url: null
  },
  {
    name: "InterviewPrep_OS",
    description: "A structured engineering repository and systematic study framework to organize, collect, and retain real frontend interview experiences, algorithmic patterns, and architecture flashcards.",
    rationale: "Scattered notes across Notion and bookmarks make recall unreliable under pressure. Built a focused personal operating system for systematic frontend interview readiness.",
    techStack: ["Next.js", "Prisma", "Markdown", "TypeScript"],
    status: "Internal Beta / Active",
    url: null
  },
  {
    name: "Sangam Biodata",
    description: "Culturally refined, zero-server matrimonial biodata creator delivering instantaneous vector PDF exports directly in the browser.",
    rationale: "Eliminated the privacy and expense hurdles faced by non-technical families needing formatted biodatas for WhatsApp distribution.",
    techStack: ["React", "TypeScript", "Client-Side PDF", "Firebase"],
    status: "Live in Production",
    url: "https://sangam-biodata.vercel.app/"
  },
  {
    name: "fastdlcli",
    description: "Lightweight, resilient Node.js command-line file downloader featuring auto-retries, chunk progress, and configurable timeouts.",
    rationale: "Built out of personal frustration with brittle curl/wget downloads over spotty network connections during large dataset transfers.",
    techStack: ["Node.js", "CLI", "Streams API"],
    status: "Published on NPM",
    url: "https://www.npmjs.com/package/fastdlcli"
  },
  {
    name: "Yogimetrics",
    description: "Developer-focused web performance diagnostics utility uncovering runtime cost, hydration delays, and memory trajectory.",
    rationale: "Standard Lighthouse passes give generic scores without pinpointing long tasks or explaining why an interactive button took 320ms to respond.",
    techStack: ["React", "TypeScript", "PerformanceObserver API"],
    status: "Experimental",
    url: null
  }
];

export const articles: ArticleItem[] = [
  {
    slug: "debugging-inp-in-production-nextjs",
    title: "Debugging Interaction to Next Paint (INP) in Heavy Next.js Applications",
    date: "February 2025",
    readTime: "7 min read",
    category: "Performance",
    excerpt: "Why synthetic Lighthouse audits fail to catch real-world INP regressions, and how to instrument PerformanceObserver to isolate long frame culprits.",
    takeaways: [
      "Lighthouse measures Total Blocking Time (TBT) before user interaction, not true post-hydration interaction responsiveness",
      "Heavy React re-render cascades triggered by top-level Context updates are the primary source of INP violations",
      "Use React 18 transitions (useTransition) to yield to the main browser thread before processing heavy state transformations"
    ],
    content: [
      "Interaction to Next Paint (INP) replaced First Input Delay (FID) as a Core Web Vital because FID only measured the first user tap. On content-rich media or e-commerce sites, the most frustrating stutters happen minutes into a browsing session.",
      "In our work across high-traffic publication networks, we repeatedly observe that synthetic lab tests report green scores while real users on mid-tier mobile hardware experience sluggish 300ms delays when tapping navigation drawers or comment filters.",
      "The culprit is rarely network latency; it is main-thread saturation caused by oversized client component trees re-rendering during state updates. By profiling long tasks with PerformanceObserver and moving non-urgent updates into React transitions, you yield control back to the browser compositor instantly."
    ]
  },
  {
    slug: "the-trade-offs-of-modular-css-vs-css-in-js",
    title: "Why We Migrated 80 Production Domains from Styled-Components to Modular CSS",
    date: "December 2024",
    readTime: "9 min read",
    category: "Architecture",
    excerpt: "A practical post-mortem on cutting 25% of runtime bundle execution by abandoning runtime CSS injection in favor of zero-runtime modular styling.",
    takeaways: [
      "Runtime CSS-in-JS libraries must parse, hash, and inject stylesheet rules on the client thread during initial mount",
      "Modular CSS compiles entirely at build time, yielding static stylesheets cached aggressively by CDNs and edge layers",
      "Developer ergonomics do not need to suffer: CSS modules provide scoping guarantees without runtime execution overhead"
    ],
    content: [
      "For years, styled-components was the default choice for React styling. It provided component-scoped CSS, dynamic prop interpolation, and great developer ergonomics. But at scale, every abstraction comes with a bill that the browser must pay.",
      "When managing editorial layouts serving millions of daily visitors, every millisecond of script evaluation delays Time to Interactive and First Contentful Paint. With runtime CSS-in-JS, the browser cannot begin rendering styled HTML until the JavaScript engine downloads the bundle, parses the style definitions, hashes class names, and injects `<style>` tags into the DOM.",
      "By transitioning to standard modular CSS and compile-time utility systems, we eliminated this entire runtime computation cycle. The browser parses standard CSS sheets in parallel with HTML decoding, dramatically improving rendering speed on mid-range devices."
    ]
  },
  {
    slug: "building-for-resilience-in-low-bandwidth-markets",
    title: "Engineering Resilient Frontend Architectures for Rural 4G Networks",
    date: "October 2024",
    readTime: "8 min read",
    category: "Case Study & Systems",
    excerpt: "Architectural lessons from building Jio Gau Samriddhi for rural agricultural users with unpredictable cellular connectivity.",
    takeaways: [
      "Assume the network connection will drop mid-request and design optimistic, background-retry form workflows",
      "Eliminate client-side hydration for content pages: static HTML renders even when script bundles fail to download",
      "Strict image budgets and adaptive quality downgrades are more effective than relying on standard responsive srcset tags"
    ],
    content: [
      "Building web software in tech hubs with fiber internet blinds engineering teams to how most of the world experiences the web. In rural agricultural regions, mobile data isn't just slower—it is highly volatile. A user might experience momentary 4G bursts followed by minutes of complete packet loss.",
      "When we engineered Jio Gau Samriddhi, our primary design constraint was zero blank-screen failures. If a user taps a link while traveling through a weak cell zone, the critical content and contact mechanisms must remain visible and interactive.",
      "We adopted a static-first Next.js architecture where every public informational view is pre-rendered into pure HTML. Crucially, lead generation forms were structured to store inputs locally in session memory with clear visual confirmation, executing asynchronous sync attempts whenever network packets successfully transmitted."
    ]
  }
];

export const technicalSkills = [
  { name: "React & Next.js", level: "Senior Architect", category: "Core Frameworks", detail: "App Router, Server Components, SSR/SSG/ISR, React 19 Actions" },
  { name: "TypeScript & JavaScript", level: "Production Expert", category: "Core Language", detail: "Strict typing, generics, AST analysis, ESNext features" },
  { name: "Web Performance (CWV)", level: "Specialist", category: "Optimization", detail: "LCP, INP, CLS forensics, bundle analysis, RUM telemetry, WebPageTest" },
  { name: "Frontend Architecture", level: "Senior Architect", category: "System Design", detail: "State topology, modular CSS, micro-frontends, component libraries" },
  { name: "Design Systems & UI", level: "Senior Engineer", category: "Interface Design", detail: "Design tokens, accessibility (WCAG AA), semantic HTML, Tailwind CSS" },
  { name: "Testing & Reliability", level: "Proficient", category: "Quality Assurance", detail: "Jest, React Testing Library, visual regression, Husky git hooks" },
  { name: "Build Tooling & CI/CD", level: "Proficient", category: "DevOps / DX", detail: "Vite, Turbopack, Webpack, GitHub Actions, Vercel edge deployment" },
  { name: "Data Fetching & APIs", level: "Proficient", category: "Data Layer", detail: "GraphQL, RESTful design, React Query, optimistic UI patterns" }
];
