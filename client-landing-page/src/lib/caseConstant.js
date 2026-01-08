export const projects = [
    {
        name: 'Jio Gau Samriddhi Platform',
        tag: 'Enterprise Scale',
        description:
            'A high-performance lead generation platform targeting rural India, built with Next.js and optimized for low-bandwidth devices.',
        highlights: [
            'Next.js static site for instant load times',
            'Integrated Jio Design System for consistent UX',
            'Optimized assets for rural 4G networks',
        ],
        tech: ['Next.js', 'Jio Design System', 'Performance Optimization'],
        cta: 'View Project →',
        link: 'https://www.jiogausamriddhi.com/',
    },
    {
        name: 'Krishi Bazaar (IMP)',
        tag: 'AgriTech Platform',
        description:
            'A comprehensive marketplace platform connecting farmers with buyers, featuring real-time pricing, logistics support, and secure transactions.',
        highlights: [
            'Real-time market price updates',
            'Integrated logistics and supply chain management',
            'Secure payment gateway for transactions',
        ],
        tech: ['React.js', 'Jio Design System', 'Performance Optimization', 'GraphQL'],
        cta: 'View Project →',
        link: 'https://www.jiokrishi.com/krishi-bazar',
    },
    {
        name: 'Yogimetrics',
        tag: 'Web Performance',
        description:
            'A real-world web performance and diagnostics tool to analyze Core Web Vitals, memory usage, runtime cost, and rendering bottlenecks.',
        highlights: [
            'Core Web Vitals & runtime metrics',
            'Frontend-first performance insights',
            'Built for developers, not reports',
        ],
        tech: ['React', 'Web Vitals', 'Performance API'],
        cta: 'View Project →',
        link: '#',
    },
    {
        name: 'Beyond Lighthouse',
        tag: 'DX Tooling',
        description:
            'An advanced performance analyzer that goes beyond Lighthouse scores and focuses on real bottlenecks affecting users.',
        highlights: [
            'Memory & JS execution analysis',
            'UX-impact driven metrics',
            'Actionable fixes, not scores',
        ],
        tech: ['React', 'Chrome APIs', 'Custom Audits'],
        cta: 'In Progress',
    },
    {
        name: 'Portfolio Architecture System',
        tag: 'Frontend Architecture',
        description:
            'A modular, scalable portfolio system designed to sell expertise, not just showcase projects.',
        highlights: [
            'Glassmorphism + motion system',
            'SEO + performance focused',
            'Conversion-oriented layout',
        ],
        tech: ['React', 'Tailwind', 'Framer Motion'],
        cta: 'Live Site →',
        link: '/',
    },
    {
        name: 'AI Resource Awareness Extension',
        tag: 'Experimental',
        description:
            'A browser extension concept that shows estimated water and energy cost per AI prompt to raise awareness.',
        highlights: [
            'Non-preachy awareness design',
            'Runs without using AI itself',
            'Privacy-first approach',
        ],
        tech: ['Browser APIs', 'UX Research'],
        cta: 'Concept',
    },
    {
        name: 'fastdlcli',
        tag: 'Open Source',
        description: "A fast, reliable Node.js CLI tool for downloading files — built for stability, simplicity, and speed.",
        highlights: [
            'Robust error handling & retries',
            'Progress bars & download stats',
            'Configurable options via CLI',
        ],
        tech: ['Node.js', 'CLI Development'],
        cta: 'View on NPM →',
        link: 'https://www.npmjs.com/package/fastdlcli',
    },
  {
    name: 'Sangam Biodata',
    tag: 'Market-Focused Product',
    description:
      'A structured biodata builder that helps users create clean, professional matrimonial biodata in PDF format for real-world use.',
    highlights: [
      'Form-heavy UX with validation',
      'PDF generation & formatting',
      'Designed for non-technical users',
    ],
    tech: ['React', 'Forms', 'PDF Generation'],
    status: 'Live',
    type: 'Product',
  },
  {
    name: 'Japa Mala Counter',
    tag: 'Utility Tool',
    description:
      'A minimal, distraction-free counter built for daily spiritual practice, focused on clarity, speed, and simplicity.',
    highlights: [
      'Single-purpose UX',
      'Offline-friendly',
      'Zero learning curve',
    ],
    tech: ['React', 'State Management'],
    status: 'Live',
    type: 'Utility',
  },
  {
    name: 'UK New Publication Platform',
    tag: 'Professional Experience',
    description:
      'Frontend contributor on a large-scale UK-based platform deployed across 80+ production sites.',
    highlights: [
      'BAU ownership of critical frontend modules',
      'Long-term maintenance & feature delivery',
      'Deep understanding of most system flows',
    ],
    tech: ['React', 'Large Codebases', 'Production Debugging'],
    status: 'Ongoing',
    type: 'Experience',
    note: 'Company name withheld due to NDA',
  },
  {
    name: 'AI Resource Awareness Extension',
    tag: 'Experiment',
    description:
      'A browser extension concept to show estimated energy and water cost per AI prompt to encourage mindful usage.',
    highlights: [
      'Awareness-first UX',
      'Runs without AI usage',
      'Privacy-focused design',
    ],
    tech: ['Browser APIs', 'UX Research'],
    status: 'Concept',
    type: 'Experiment',
  },
];

export const projectMix =[
          {
            id: 1,
            badgeBg: "bg-blue-500/10",
            badgeText: "text-blue-400",
            badgeLabel: "Enterprise Scale",
            title: "Jio Gau Samriddhi Platform",
            challenge: "Needed to expand digital presence across rural India with high-performance lead generation. Users had low-bandwidth devices.",
            solution: "The Architecture",
            solutionDesc: "Built a Next.js static site for instant load times. Integrated Jio Design System for consistent UX. Optimized assets for rural 4G networks.",
            stats: [
              { val: "100%", label: "SEO Score" },
              { val: "4", label: "Projects Led" },
              { val: "Pan-India", label: "Scale" }
            ],
            rightIcon: "trending",
            rightText: "Targeting millions of rural users with accessible UI.",
            mb: "mb-8"
          },
          {
            id: 2,
            badgeBg: "bg-green-500/10",
            badgeText: "text-green-400",
            badgeLabel: "AgriTech Platform",
            title: "Krishi Bazaar (IMP)",
            challenge: "Create a marketplace connecting farmers with buyers, featuring real-time pricing, logistics support, and secure transactions.",
            solution: "The Architecture",
            solutionDesc: "Implemented real-time market price updates. Integrated logistics and supply chain management. Developed a secure payment gateway for transactions.",
            stats: [
              { val: "50K+", label: "Active Users" },
              { val: "200+", label: "Products Listed" },
              { val: "24/7", label: "Support" }
            ],
            rightIcon: "trending",
            rightText: "Facilitating seamless transactions in the agricultural sector.",
            mb: "mb-8"
          },
          {
            id: 3,
            badgeBg: "bg-purple-500/10",
            badgeText: "text-purple-400",
            badgeLabel: "Web Performance",
            title: "Yogimetrics",
            challenge: "Build a web performance and diagnostics tool to analyze Core Web Vitals, memory usage, runtime cost, and rendering bottlenecks.",
            solution: "The Architecture",
            solutionDesc: "Developed Core Web Vitals & runtime metrics tracking. Focused on frontend-first performance insights. Created actionable fixes, not just reports.",
            stats: [
              { val: "500+", label: "Users" },
              { val: "1000+", label: "Analyses Run" },
              { val: "In process", label: "Revenue Model" }
            ],
            rightIcon: "trending",
            rightText: "Empowering developers with actionable performance insights.",
            mb: ""
          },
          // do. it for other projects as needed
          { id: 4, 
            badgeBg: "bg-yellow-500/10",
            badgeText: "text-yellow-400",
            badgeLabel: "Frontend Architecture",
            title: "Portfolio Architecture System",
            challenge: "Design a modular, scalable portfolio system to sell expertise, not just showcase projects.",
            solution: "The Architecture",
            solutionDesc: "Implemented Glassmorphism + motion system. Focused on SEO + performance. Created a conversion-oriented layout.",
            stats: [
              { val: "95+", label: "Performance Score" },
              { val: "10+", label: "Projects Showcased" },
              { val: "Ongoing", label: "Improvements" }
            ],
            rightIcon: "trending",
            rightText: "Showcasing expertise through a high-performance portfolio.",
            mb: ""
          },
          {
            id: 5,
            badgeBg: "bg-red-500/10",
            badgeText: "text-red-400",
            badgeLabel: "Open Source",
            title: "fastdlcli",
            challenge: "Create a fast, reliable Node.js CLI tool for downloading files with stability, simplicity, and speed.",
            solution: "The Architecture",
            solutionDesc: "Developed robust error handling & retries. Implemented progress bars & download stats. Provided configurable options via CLI.",
            stats: [
              { val: "1K+", label: "Downloads" },
              { val: "4.8", label: "NPM Rating" },
              { val: "Active", label: "Maintenance" }
            ],
            rightIcon: "trending",
            rightText: "Simplifying file downloads with a reliable CLI tool.",
            mb: ""
          },
          {
            id: 6, 
            badgeBg: "bg-teal-500/10",
            badgeText: "text-teal-400",
            badgeLabel: "Utility Tool",
            title: "Japa Mala Counter",
            challenge: "Develop a minimal, distraction-free counter for daily spiritual practice, focused on clarity, speed, and simplicity.",
            solution: "The Architecture",
            solutionDesc: "Created a single-purpose UX. Ensured offline-friendliness. Designed for zero learning curve.",
            stats: [
              { val: "10K+", label: "Downloads" },
              { val: "4.7", label: "User Rating" },
              { val: "Regular", label: "Updates" }
            ],
            rightIcon: "trending",
            rightText: "Facilitating spiritual practice with a simple counter tool.",
            mb: ""  
          },
          {
            id: 7,
            badgeBg: "bg-indigo-500/10",
            badgeText: "text-indigo-400",
            badgeLabel: "Professional Experience",
            title: "UK New Publication Platform",
            challenge: "Contribute to a large-scale UK-based platform deployed across 80+ production sites, ensuring long-term maintenance and feature delivery.",
            solution: "The Architecture",
            solutionDesc: "Owned critical frontend modules for BAU. Delivered long-term maintenance & new features. Gained deep understanding of system flows.",
            stats: [
              { val: "80+", label: "Production Sites" },
              { val: "2", label: "Years of Contribution" },
              { val: "4M+ Daily", label: "Engagement" }
            ],
            rightIcon: "trending",
            rightText: "Maintaining and enhancing a large-scale publication platform.",
            mb: ""
          },
          
        ]