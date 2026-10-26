import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Code2, 
  Terminal, 
  Cpu, 
  Layers, 
  Gauge, 
  ArrowRight, 
  CheckCircle2, 
  Workflow, 
  Zap, 
  Server, 
  ShieldCheck, 
  HelpCircle,
  Sparkles,
  AlertCircle,
  Database,
  Search,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SEO from '@/components/SEO';
import { logServicePageView, logCtaClick } from '@/utils/analytics';

const architecturalTraps = [
  {
    title: "The 'use client' Sprawl Trap",
    problem: "Many teams adopt Next.js App Router only to add 'use client' to top-level layouts and pages. This wipes out the benefits of Server Components, sending massive JavaScript bundles to mobile devices.",
    solution: "I architect strict component separation: data fetching and heavy dependencies stay on the server, while client components are isolated strictly to interactive leaf nodes."
  },
  {
    title: "Hydration Mismatches & Caching Bugs",
    problem: "App Router's multi-layered caching (Router Cache, Full Route Cache, Data Cache) often serves stale data or triggers jarring hydration errors that break user trust.",
    solution: "I configure clear, deterministic caching with granular on-demand tag revalidation, Suspense boundaries, and zero-waterfall parallel data fetching."
  },
  {
    title: "Legacy React SPA SEO Penalties",
    problem: "Client-only Single-Page Applications (Create React App, Webpack) deliver empty HTML shells. Search crawlers and social share scrapers struggle to index dynamic content.",
    solution: "I execute low-risk migrations to Next.js Server-Side Rendering (SSR) or Static Site Generation (SSG), unlocking immediate search visibility and sub-second Largest Contentful Paint."
  }
];

const capabilities = [
  {
    icon: Server,
    badge: "Modern Architecture",
    title: "Next.js App Router & Server Components",
    description: "Design clean architectures leveraging React Server Components (RSC), Server Actions, nested layouts, and streaming SSR to slash client-side bundle size by up to 60%."
  },
  {
    icon: Zap,
    badge: "Scale & Speed",
    title: "Hybrid Rendering: SSR, SSG & ISR",
    description: "Implement tailored rendering and caching strategies (Incremental Static Regeneration, Edge runtime, and on-demand revalidation) perfectly matched to your data freshness requirements."
  },
  {
    icon: Workflow,
    badge: "Zero-Downtime",
    title: "React SPA to Next.js Migration",
    description: "Safely transition legacy Create React App, Vite, or Pages Router codebases to modern Next.js without service disruption, regression bugs, or loss of organic search rankings."
  },
  {
    icon: Gauge,
    badge: "Passing Metrics",
    title: "Core Web Vitals & Hydration Tuning",
    description: "Eliminate long tasks blocking the main thread, slash Interaction to Next Paint (INP), eradicate Cumulative Layout Shift (CLS), and deliver sub-second LCP on real mobile connections."
  }
];

const technicalHighlights = [
  {
    title: "Zero-Waterfall Parallel Fetching",
    description: "Restructuring component data dependencies to resolve concurrently at the server layer, eliminating sequential client-side network roundtrips."
  },
  {
    title: "Micro-Bundle Client Interactivity",
    description: "Pushing state and browser APIs to the extreme edges of your DOM tree so 80%+ of your page renders without client JavaScript overhead."
  },
  {
    title: "Type-Safe Server Actions & APIs",
    description: "End-to-end type safety connecting your backend services, database mutations, and UI forms with Zod validation and structured error handling."
  },
  {
    title: "Server-Rendered Dynamic Open Graph & SEO",
    description: "Automated server-side generation of social preview cards, Schema.org JSON-LD structured data, and clean semantic markup for every dynamic route."
  }
];

const faqs = [
  {
    q: "Why should we migrate from a React SPA (Create React App / Vite) to Next.js?",
    a: "Standard client-side SPAs ship an empty HTML shell. The user's device must download, parse, and execute megabytes of JavaScript before anything appears on screen. This destroys your mobile conversion rate, produces poor Core Web Vitals (slow LCP), and prevents search engines and social platforms from reliably indexing your pages. Next.js delivers fully formed HTML from the server in milliseconds, dramatically improving SEO, perceived performance, and user retention."
  },
  {
    q: "How do you prevent the common pitfalls of Next.js App Router (like caching bugs and hydration errors)?",
    a: "App Router requires a disciplined mental model. I enforce strict boundaries: all data fetching and heavy business logic remain in React Server Components, while 'use client' is pushed down to the smallest interactive UI leaves (buttons, modals, dropdowns). I configure deterministic caching with explicit fetch tags, avoiding unintentional stale data."
  },
  {
    q: "Can you migrate an existing production application without downtime or losing SEO rankings?",
    a: "Yes. I use an incremental migration strategy. We can run Next.js alongside your existing application using reverse-proxy routing (or micro-frontends), migrating one high-value route at a time. All existing canonical URLs, meta tags, and 301 redirects are strictly preserved so your organic traffic continues uninterrupted."
  },
  {
    q: "What state management approach do you recommend in modern Next.js?",
    a: "In Next.js App Router, much of what used to live in client state (Redux/Zustand) is handled natively by Server Components and URL search parameters. For client-side interactive state, I prefer lightweight solutions like Zustand or TanStack React Query for asynchronous server synchronization, keeping client bundle footprints minimal."
  },
  {
    q: "What kind of speed and performance improvements can we realistically expect?",
    a: "Teams typically see a 40% to 70% reduction in initial client JavaScript bundle size, a 2x to 3x improvement in Largest Contentful Paint (LCP), and a clean pass on Google Core Web Vitals (INP < 200ms, CLS < 0.1)."
  }
];

const ReactNextjsDevelopmentPage = () => {
  useEffect(() => {
    logServicePageView('react-nextjs-development');
  }, []);

  const serviceSchema = {
    "@type": "Service",
    "@id": "https://yogeshbhavsar.com/react-nextjs-development/#service",
    "name": "React & Next.js Development Services",
    "serviceType": "Next.js & React Engineering",
    "provider": {
      "@type": "Person",
      "@id": "https://yogeshbhavsar.com/#person",
      "name": "Yogesh Bhavsar"
    },
    "description": "Production React and Next.js engineering for web applications, SaaS platforms, and enterprise dashboards. Specialized in App Router, Server Components, and Core Web Vitals.",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "React & Next.js Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Next.js App Router Application Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "React SPA to Next.js Migration"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SSR / SSG Performance Optimization"
          }
        }
      ]
    }
  };

  const breadcrumbsSchema = {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://yogeshbhavsar.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "React & Next.js Development",
        "item": "https://yogeshbhavsar.com/react-nextjs-development"
      }
    ]
  };

  const faqSchema = {
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <>
      <SEO
        title="React & Next.js Development Services | Yogesh Bhavsar"
        description="Production React and Next.js engineering by Senior Frontend Architect Yogesh Bhavsar. Next.js App Router, Server Components, TypeScript, SSR/SSG caching, and Core Web Vitals optimization."
        canonical="/react-nextjs-development"
        schema={[serviceSchema, breadcrumbsSchema, faqSchema]}
        keywords="React Next.js development services, hire next.js developer, next.js app router developer, migrate react to next.js, fix next.js slow ssr, react server components architect, hire senior react engineer, next.js core web vitals"
      />

      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-background selection:bg-primary/20">
        <div className="max-w-6xl mx-auto space-y-20">

          {/* Hero */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto space-y-6 pt-4"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-semibold border border-primary/25 shadow-sm">
              <Server size={14} className="text-primary" />
              <span>Next.js App Router & React Architecture</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-foreground">
              Production React & Next.js <br className="hidden sm:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-accent">
                Built for Speed, SEO & Scale
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Unlock the true power of <strong>Next.js App Router and React Server Components</strong>. I help engineering teams and founders build new web apps, migrate legacy SPAs, and resolve complex performance and caching bottlenecks.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
              <Button asChild size="lg" className="w-full sm:w-auto text-base h-12 px-8 shadow-lg shadow-primary/20 font-semibold">
                <Link 
                  to="/contact"
                  onClick={() => logCtaClick('nextjs_hero_contact', '/contact')}
                >
                  Discuss Your Next.js Architecture
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto text-base h-12 px-8 font-semibold">
                <Link to="/case-studies/react-application-architecture">
                  Read Architecture Case Study
                </Link>
              </Button>
            </div>

            <p className="text-xs text-muted-foreground pt-1">
              ✓ Server Components Specialist &nbsp;|&nbsp; ✓ Zero-Downtime SPA Migrations &nbsp;|&nbsp; ✓ 90+ Core Web Vitals Guarantee
            </p>
          </motion.header>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Bundle Reduction", value: "40% - 70%", sub: "Via React Server Components" },
              { label: "Rendering", value: "Hybrid SSR / SSG", sub: "Streaming with Suspense" },
              { label: "Data Architecture", value: "Zero Waterfalls", sub: "Parallel server data fetching" },
              { label: "Type Safety", value: "100% TypeScript", sub: "Server Actions & Zod contracts" }
            ].map((stat, i) => (
              <Card key={i} className="text-center p-4 bg-card/60 border-muted/60 shadow-sm">
                <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">{stat.label}</p>
                <p className="text-2xl font-black text-primary mt-1">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{stat.sub}</p>
              </Card>
            ))}
          </div>

          {/* The Indirect Sales Pitch: Traps Teams Fall Into with Next.js */}
          <section className="rounded-2xl border border-border/80 bg-muted/20 p-8 sm:p-12 space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <Badge variant="outline" className="text-primary border-primary/30 font-semibold">Common Architectural Traps</Badge>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
                Why Many Next.js Deployments Still Feel Sluggish
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Adopting Next.js doesn't automatically make your app fast. Without proper boundaries between Server and Client Components, complexity and latency quickly compound.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {architecturalTraps.map((item, idx) => (
                <div key={idx} className="p-6 rounded-xl bg-card border border-border/80 shadow-sm space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-rose-500 font-bold text-base">
                      <AlertCircle className="h-5 w-5 flex-shrink-0" />
                      <span>{item.title}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.problem}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-border/60">
                    <p className="text-xs font-bold uppercase tracking-wider text-primary mb-1">Architectural Solution:</p>
                    <p className="text-sm text-foreground/90 font-medium leading-relaxed">
                      {item.solution}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Core Capabilities */}
          <section className="space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-3xl font-extrabold text-foreground">Specialized Next.js & React Services</h2>
              <p className="text-muted-foreground text-sm sm:text-base">
                Deep architectural expertise to help your team ship fast, reliable, and easily maintainable web products.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {capabilities.map((service, index) => (
                <Card key={index} className="border-border/80 bg-card shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="flex flex-row items-start justify-between pb-2">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary flex-shrink-0">
                        <service.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-lg sm:text-xl font-bold">{service.title}</CardTitle>
                        <Badge variant="secondary" className="mt-1 text-xs text-primary font-medium">{service.badge}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Technical Principles */}
          <section className="rounded-2xl border border-border/80 bg-muted/20 p-8 sm:p-10 space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <Badge variant="outline" className="mb-2 text-primary border-primary/30 font-semibold">Engineering Standards</Badge>
              <h2 className="text-2xl sm:text-3xl font-extrabold">How I Build Next.js Applications</h2>
              <p className="text-muted-foreground mt-2 text-sm sm:text-base">
                Battle-tested patterns that guarantee maintainability, high lighthouse scores, and smooth developer ergonomics.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {technicalHighlights.map((tech, idx) => (
                <div key={idx} className="p-6 rounded-xl bg-card border border-border/70 space-y-2">
                  <h3 className="font-bold text-base text-foreground flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    {tech.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed pl-6">
                    {tech.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="space-y-6 max-w-4xl mx-auto">
            <div className="text-center space-y-2">
              <Badge variant="outline" className="text-primary border-primary/30 font-semibold">Technical Questions</Badge>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
                Frequently Asked Next.js & React Questions
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base">
                Answers regarding App Router migrations, caching strategies, and performance expectations.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              {faqs.map((faq, idx) => (
                <div key={idx} className="p-6 rounded-xl border border-border/70 bg-card/80 space-y-2">
                  <h3 className="font-bold text-base sm:text-lg text-foreground flex items-center gap-2.5">
                    <HelpCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    {faq.q}
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base pl-7 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Bottom Conversion Section */}
          <div className="text-center bg-gradient-to-r from-card via-card/90 to-card border border-border/80 rounded-2xl p-8 sm:p-12 space-y-5 shadow-sm">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
              Ready to Upgrade or Scale Your Next.js Application?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              Whether you need to migrate from a slow legacy SPA, unblock App Router caching issues, or architect a greenfield product, let's talk through your technical requirements.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="px-8 h-12 text-base font-semibold shadow-md shadow-primary/20">
                <Link to="/contact">Get in Touch About Your Project</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-8 h-12 text-base font-semibold">
                <Link to="/projects">Explore Architecture Case Studies</Link>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default ReactNextjsDevelopmentPage;
