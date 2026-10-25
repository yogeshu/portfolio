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
  Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SEO from '@/components/SEO';
import { logServicePageView, logCtaClick } from '@/utils/analytics';

const capabilities = [
  {
    icon: Server,
    title: "Next.js App Router & Server Components",
    description: "Leverage React Server Components (RSC), nested layouts, streaming SSR, and suspense boundaries to slash client-side JavaScript payloads and boost first-load performance."
  },
  {
    icon: Zap,
    title: "Hybrid Rendering: SSR, SSG & ISR",
    description: "Select and configure optimal caching strategies (Static Site Generation, Incremental Static Regeneration, and dynamic server-rendering) matched to your specific content freshness and scale needs."
  },
  {
    icon: Layers,
    title: "TypeScript & Robust State Architecture",
    description: "Strictly typed components, custom hooks, and thoughtful state management with Redux Toolkit, Zustand, or TanStack Query to ensure rock-solid data consistency."
  },
  {
    icon: Workflow,
    title: "Migrations & Modernization",
    description: "Upgrade legacy SPAs (Create React App, Webpack) to Next.js or migrate Pages Router to App Router without downtime, regression bugs, or SEO disruption."
  }
];

const technicalHighlights = [
  {
    title: "Zero-Waterfall Data Fetching",
    description: "Parallel data fetching and edge caching that eliminates sequential request waterfalls, delivering instant TTFB (Time to First Byte)."
  },
  {
    title: "Hydration Optimization",
    description: "Isolating client components strictly where user interactivity is needed, drastically lowering INP (Interaction to Next Paint) and CPU parse times."
  },
  {
    title: "Automated Regression Shield",
    description: "Comprehensive Jest and React Testing Library suites verifying UI behavior and state transitions before code ever reaches production."
  },
  {
    title: "SEO & Social Sharing Built-In",
    description: "Dynamic metadata generation, Open Graph image rendering, and Schema.org structured data embedded cleanly in server routes."
  }
];

const faqs = [
  {
    q: "Why should we choose Next.js over a standard React SPA?",
    a: "Standard Single-Page Applications (SPAs) ship an empty HTML shell and require the client browser to download, parse, and execute heavy JavaScript before displaying content. Next.js solves this with server-side rendering (SSR) and static generation (SSG), delivering fully formed HTML instantly to users and search engine crawlers, resulting in superior SEO, faster LCP, and better mobile UX."
  },
  {
    q: "Can you help migrate our existing React app to Next.js?",
    a: "Yes. I have guided multiple migrations from legacy React setups (such as Create React App, custom Webpack, or Django/template hybrids) to modern Next.js. We establish a low-risk, incremental migration strategy that maintains business continuity and protects existing search rankings."
  },
  {
    q: "Do you have experience with Next.js App Router and Server Components?",
    a: "Yes. I work extensively with the App Router architecture, Server Actions, suspense boundaries, streaming, and caching semantics, ensuring clean separation between Server Components and Client Components."
  },
  {
    q: "How do we collaborate on a project?",
    a: "We begin with a technical discovery call or async review of your repository and product spec. From there, I provide an architectural plan, milestone estimates, and sprint deliverables with direct GitHub integration."
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

  return (
    <>
      <SEO
        title="React & Next.js Development Services | Yogesh Bhavsar"
        description="Production React and Next.js engineering by Senior Frontend Architect Yogesh Bhavsar. Next.js App Router, Server Components, TypeScript, SSR/SSG caching, and Core Web Vitals optimization."
        canonical="/react-nextjs-development"
        schema={[serviceSchema, breadcrumbsSchema]}
        keywords="React developer for hire, freelance React developer, Next.js developer for hire, Next.js development services, React application development, remote Next.js developer, Next.js App Router consultant, React TypeScript developer"
      />

      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-background selection:bg-primary/20">
        <div className="max-w-6xl mx-auto space-y-16">

          {/* Hero */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto space-y-6 pt-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20">
              <Cpu size={14} />
              <span>Next.js & React Specialization</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
              React & Next.js Engineering for <br className="hidden sm:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-accent">
                Production Applications
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Build fast, scalable, and resilient web applications. From Next.js App Router architecture 
              and Server Components to high-throughput React dashboards.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button asChild size="lg" className="w-full sm:w-auto text-base h-12 px-8 shadow-lg shadow-primary/20">
                <Link 
                  to="/contact"
                  onClick={() => logCtaClick('react_hero_contact', '/contact')}
                >
                  Discuss Your React / Next.js Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto text-base h-12 px-8">
                <Link to="/projects">
                  Explore Next.js Work
                </Link>
              </Button>
            </div>
          </motion.header>

          {/* Architecture Pillars */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Rendering", value: "App Router & RSC", detail: "Streaming SSR & Suspense" },
              { label: "Performance", value: "Sub-Second TTFB", detail: "Edge caching & SSG/ISR" },
              { label: "Type Safety", value: "100% TypeScript", detail: "End-to-end interface integrity" },
              { label: "Testing", value: "Jest & RTL", detail: "Automated regression defense" }
            ].map((pillar, i) => (
              <Card key={i} className="text-center p-4 bg-card/60 border-muted/60">
                <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">{pillar.label}</p>
                <p className="text-xl sm:text-2xl font-black text-primary mt-1">{pillar.value}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{pillar.detail}</p>
              </Card>
            ))}
          </div>

          {/* Core Capabilities */}
          <section className="space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-extrabold text-foreground">Next.js & React Specialized Capabilities</h2>
              <p className="text-muted-foreground mt-2">
                Delivering senior engineering judgment across the modern React ecosystem.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {capabilities.map((cap, index) => (
                <Card key={index} className="border-border/70 bg-card/80 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <cap.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl font-bold">{cap.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                      {cap.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Technical Highlights / Engineering Focus */}
          <section className="rounded-2xl border border-border/80 bg-muted/20 p-8 sm:p-10 space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <Badge variant="outline" className="mb-2 text-primary border-primary/30">Architecture Principles</Badge>
              <h2 className="text-2xl sm:text-3xl font-extrabold">How I Engineer High-Speed React Systems</h2>
              <p className="text-muted-foreground mt-2 text-sm sm:text-base">
                Focusing on measurable performance, predictable state flow, and low maintenance overhead.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {technicalHighlights.map((tech, idx) => (
                <div key={idx} className="p-6 rounded-xl bg-card border border-border/70 space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <h3 className="font-bold text-lg text-foreground">{tech.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed pl-7">
                    {tech.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Case Study Callout */}
          <section className="rounded-2xl border border-primary/20 bg-primary/5 p-8 sm:p-10 space-y-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold">Featured Production Evidence</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Discover how <strong>Jio Gau Samriddhi</strong> was architected using Next.js and the Jio Design System to achieve 
              flawless 100% SEO scores and deliver critical information across rural India, or how 
              complex Redux state management powers the <strong>Cattle Management Enterprise Portal</strong>.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Button asChild>
                <Link to="/projects">View Projects & Architecture Details</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/contact">Inquire for Your Next.js Build</Link>
              </Button>
            </div>
          </section>

          {/* FAQs */}
          <section className="space-y-6 max-w-4xl mx-auto">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="p-6 rounded-xl border border-border/70 bg-card/70">
                  <h3 className="font-bold text-lg text-foreground flex items-center gap-2">
                    <HelpCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    {faq.q}
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base mt-2 pl-7 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Bottom Banner */}
          <div className="text-center bg-card border border-border/70 rounded-2xl p-10 space-y-4">
            <h2 className="text-3xl font-extrabold text-foreground">Ready to Build or Scale Your React / Next.js Application?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Get senior-level React & Next.js execution for your team. Reach out with your project details to get started.
            </p>
            <div className="pt-2">
              <Button asChild size="lg" className="px-8 h-12 text-base">
                <Link to="/contact">Schedule Technical Discussion</Link>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default ReactNextjsDevelopmentPage;
