import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Code2, 
  Layers, 
  Gauge, 
  Boxes, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Cpu, 
  Terminal, 
  Users, 
  Workflow, 
  Clock, 
  HelpCircle 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SEO from '@/components/SEO';
import { logServicePageView, logCtaClick } from '@/utils/analytics';

const engineeringServices = [
  {
    icon: Code2,
    title: "Production Feature Delivery",
    description: "Translate complex product requirements and Figma design files into robust, maintainable React and TypeScript code that integrates smoothly with your backend APIs."
  },
  {
    icon: Layers,
    title: "Design Systems & Component Libraries",
    description: "Build accessible, themeable, and reusable UI components using Tailwind CSS, Radix UI primitives, and Storybook to accelerate your entire engineering team."
  },
  {
    icon: Gauge,
    title: "Web Performance & Core Web Vitals",
    description: "Diagnose and eliminate real-world bottlenecks: reduce hydration penalties, optimize Interaction to Next Paint (INP), and implement smart asset and caching strategies."
  },
  {
    icon: Boxes,
    title: "Frontend Refactoring & Modernization",
    description: "Safely untangle legacy frontends, migrate styled-components to modular CSS, split monolithic client bundles, and establish rigid linting and test coverage standards."
  }
];

const technicalArsenal = [
  { category: "Core Languages & Frameworks", items: ["React 18 / 19", "Next.js (App & Pages Router)", "TypeScript", "JavaScript (ESNext)", "HTML5 / Semantic Web"] },
  { category: "State & Data Layer", items: ["Redux Toolkit", "Context API", "Zustand", "TanStack React Query", "REST & GraphQL APIs"] },
  { category: "Styling & UI Systems", items: ["Tailwind CSS", "Modular CSS", "Radix UI", "Material UI", "Framer Motion", "Responsive Design"] },
  { category: "Testing & Architecture", items: ["Jest", "React Testing Library", "Husky Pre-commit Hooks", "CI/CD Pipelines", "WCAG 2.1 AA Accessibility"] }
];

const engagementOptions = [
  {
    title: "Dedicated Freelance Sprints",
    subtitle: "For startups and products scaling features",
    details: "Full or part-time embedded engineering capacity inside your Agile sprints. I join your Slack, participate in standups, review PRs, and ship production-ready code."
  },
  {
    title: "Fixed-Scope Projects",
    subtitle: "For clearly defined frontend deliverables",
    details: "Complete frontend architecture, dashboard build, or migration delivered against agreed milestones, automated test criteria, and guaranteed delivery timelines."
  },
  {
    title: "Technical Advisory & Reviews",
    subtitle: "For engineering leaders seeking senior oversight",
    details: "Codebase architecture reviews, performance audits, and guidance on state management, rendering strategy, and team standards."
  }
];

const faqs = [
  {
    q: "What is your remote availability and timezone overlap?",
    a: "I work remotely from India (IST, GMT+5:30) with flexible overlap for North American, European/UK, and APAC engineering teams. I have extensive experience working asynchronously with distributed teams across multiple continents."
  },
  {
    q: "How do you integrate with our existing engineering team?",
    a: "I adopt your existing tooling and workflows immediately: GitHub/GitLab, Jira/Linear, Slack, and Figma. I prioritize clear daily documentation, thorough PR descriptions, and clean git history."
  },
  {
    q: "Do you write tests for the code you deliver?",
    a: "Yes. I emphasize automated testing with Jest and React Testing Library, targeting 90%+ test coverage for critical business logic and state management flows to prevent future regressions."
  },
  {
    q: "Can you help optimize a slow React application?",
    a: "Absolutely. I specialize in diagnosing performance bottlenecks—analyzing render cycles, bundle sizes, memory leaks, and Core Web Vitals (INP, LCP) to deliver measurable speed improvements."
  }
];

const FrontendDevelopmentPage = () => {
  useEffect(() => {
    logServicePageView('freelance-frontend-development');
  }, []);

  const serviceSchema = {
    "@type": "Service",
    "@id": "https://yogeshbhavsar.com/frontend-development/#service",
    "name": "Freelance Frontend Development Services",
    "serviceType": "Frontend Engineering Services",
    "provider": {
      "@type": "Person",
      "@id": "https://yogeshbhavsar.com/#person",
      "name": "Yogesh Bhavsar"
    },
    "description": "Senior freelance frontend developer specializing in React, Next.js, TypeScript, and scalable UI systems for startups, SaaS products, and engineering teams.",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Frontend Engineering Offerings",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Freelance React & TypeScript Engineering"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Design Systems & Component Libraries"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Core Web Vitals & Frontend Performance Optimization"
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
        "name": "Frontend Development",
        "item": "https://yogeshbhavsar.com/frontend-development"
      }
    ]
  };

  return (
    <>
      <SEO
        title="Freelance Frontend Developer | React & Next.js — Yogesh Bhavsar"
        description="Hire Yogesh Bhavsar, Senior Freelance Frontend Developer & Architect. 7+ years building scalable React, Next.js, and TypeScript applications for global startups and product teams."
        canonical="/frontend-development"
        schema={[serviceSchema, breadcrumbsSchema]}
        keywords="freelance frontend developer, frontend developer for hire, frontend development services, senior frontend engineer freelance, remote frontend developer, frontend engineer for startups, frontend developer for SaaS, React TypeScript developer"
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
              <Terminal size={14} />
              <span>Senior Freelance Engineering</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Senior Frontend Engineering for <br className="hidden sm:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-accent">
                Products & Growing Teams
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I partner with founders, CTOs, and product teams to engineer fast, resilient, and scalable 
              user interfaces using <strong>React, Next.js, and TypeScript</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button asChild size="lg" className="w-full sm:w-auto text-base h-12 px-8 shadow-lg shadow-primary/20">
                <Link 
                  to="/contact"
                  onClick={() => logCtaClick('fe_hero_contact', '/contact')}
                >
                  Hire for Your Next Sprint
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto text-base h-12 px-8">
                <Link to="/experience">
                  Explore Experience Timeline
                </Link>
              </Button>
            </div>
          </motion.header>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Experience", value: "7+ Years", detail: "Senior technical roles" },
              { label: "Companies", value: "Reach Plc & Jio", detail: "High-scale platforms" },
              { label: "Code Quality", value: "90%+ Tests", detail: "Jest & strict linting" },
              { label: "Timezone", value: "Global / Remote", detail: "US/EU/APAC overlap" }
            ].map((stat, i) => (
              <Card key={i} className="text-center p-4 bg-card/60 border-muted/60">
                <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">{stat.label}</p>
                <p className="text-2xl font-black text-primary mt-1">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{stat.detail}</p>
              </Card>
            ))}
          </div>

          {/* Core Services */}
          <section className="space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-extrabold text-foreground">Core Frontend Engineering Services</h2>
              <p className="text-muted-foreground mt-2">
                Delivering reliable, production-tested frontend solutions with deep technical rigor.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {engineeringServices.map((service, index) => (
                <Card key={index} className="border-border/70 bg-card/80 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
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

          {/* Technical Stack Grid */}
          <section className="rounded-2xl border border-border/80 bg-muted/20 p-8 sm:p-10 space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <Badge variant="outline" className="mb-2 text-primary border-primary/30">Technical Depth</Badge>
              <h2 className="text-2xl sm:text-3xl font-extrabold">The Tech Stack I Work In Every Day</h2>
              <p className="text-muted-foreground mt-2 text-sm sm:text-base">
                Modern tools chosen for developer velocity, runtime speed, and long-term maintainability.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {technicalArsenal.map((category, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-card border border-border/70 space-y-3">
                  <h3 className="font-bold text-sm uppercase tracking-wider text-primary">{category.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <Badge key={item} variant="secondary" className="text-xs font-medium">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Engagement Models */}
          <section className="space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-extrabold text-foreground">Flexible Engagement Models</h2>
              <p className="text-muted-foreground mt-2">
                Straightforward collaboration options shaped around your team's stage and timeline.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {engagementOptions.map((model, idx) => (
                <Card key={idx} className="flex flex-col justify-between border-border/70 bg-card/80 p-6">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{model.title}</h3>
                    <p className="text-xs font-semibold text-primary mt-1 uppercase tracking-wider">{model.subtitle}</p>
                    <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{model.details}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-border/60">
                    <Button asChild variant="outline" className="w-full text-sm">
                      <Link to="/contact">Inquire About This Option</Link>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Real Work Proof */}
          <section className="rounded-2xl border border-primary/20 bg-primary/5 p-8 sm:p-10 space-y-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold">Real Enterprise & Startup Track Record</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              At <strong>Millipixels Interactive (Reach Plc)</strong>, I lead frontend performance and modular CSS architecture 
              for major media properties. Previously at <strong>Jio</strong>, I delivered mission-critical IoT dashboards and 
              consumer portals serving millions of daily requests.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Button asChild>
                <Link to="/projects">Review Selected Projects & Code</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/experience">Read Full Professional Journey</Link>
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

          {/* CTA Banner */}
          <div className="text-center bg-card border border-border/70 rounded-2xl p-10 space-y-4">
            <h2 className="text-3xl font-extrabold text-foreground">Need Senior Frontend Capacity for Your Product?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Share your project scope, timeline, and current tech stack. I'll get back to you promptly with availability and next steps.
            </p>
            <div className="pt-2">
              <Button asChild size="lg" className="px-8 h-12 text-base">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default FrontendDevelopmentPage;
