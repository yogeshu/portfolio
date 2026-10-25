import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Gauge, 
  Layers, 
  Search, 
  ShieldCheck, 
  ArrowRight, 
  ExternalLink, 
  CheckCircle2, 
  HelpCircle, 
  Cpu, 
  Workflow, 
  AlertTriangle, 
  Zap, 
  FileCode 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SEO from '@/components/SEO';
import { logServicePageView, logCtaClick } from '@/utils/analytics';

const consultingPillars = [
  {
    icon: Gauge,
    title: "Core Web Vitals & Performance Audit",
    description: "In-depth profiling of real-user performance: resolving high Interaction to Next Paint (INP), slow Largest Contentful Paint (LCP), and Cumulative Layout Shift (CLS) on mobile devices."
  },
  {
    icon: Layers,
    title: "Next.js & React Architecture Review",
    description: "Evaluate your rendering strategies (RSC, SSR, SSG), boundary separation between Server and Client Components, caching policies, and bundle splitting to eliminate architectural debt."
  },
  {
    icon: Search,
    title: "Frontend Codebase & Health Audit",
    description: "Comprehensive code quality inspection: identifying re-render loops, dead code, dependency bloat, fragile state logic, and accessibility (a11y) barriers across your application."
  },
  {
    icon: ShieldCheck,
    title: "Fractional Technical Leadership",
    description: "Provide senior technical direction, architectural RFC reviews, developer mentorship, and high-standard PR reviews for engineering teams without full-time headcount cost."
  }
];

const auditDeliverables = [
  {
    title: "Executive Performance Diagnostic",
    description: "A clear, plain-language assessment of your application's current health, Core Web Vitals status, and real business impact on conversions and bounce rates."
  },
  {
    title: "Technical Findings & Root-Cause Breakdown",
    description: "Granular, code-level analysis showing the exact files, component re-renders, bundle bloat, and network waterfalls causing performance drag."
  },
  {
    title: "Prioritized Remediation Roadmap",
    description: "A step-by-step implementation guide ranked by business impact versus engineering effort, enabling your team to tackle the highest-ROI fixes immediately."
  },
  {
    title: "Implementation Pairing & Verification",
    description: "Hands-on guidance and pull requests delivering verified performance gains with before-and-after benchmark proofs."
  }
];

const symptoms = [
  "Your application feels sluggish on mobile devices or lower-powered laptops.",
  "Google Search Console shows failing Core Web Vitals (especially INP or LCP) hurting your SEO rankings.",
  "Your JavaScript bundle has ballooned, causing slow initial page loads and high memory usage.",
  "Engineers are reluctant to touch legacy components due to fragile state management and lack of tests.",
  "Your team is struggling with Next.js App Router caching, hydration errors, or Server/Client component boundaries."
];

const faqs = [
  {
    q: "How does a Frontend Performance Audit work?",
    a: "We begin by collecting real-user telemetry (CrUX / Core Web Vitals) and replicating bottlenecks in lab environments using Chrome DevTools, performance traces, and bundle analyzers. I then inspect your repository to identify root causes and deliver a prioritized remediation roadmap."
  },
  {
    q: "Can you implement the recommended fixes yourself, or just provide a report?",
    a: "I offer both. You can engage me solely for an independent audit and architectural roadmap, or have me stay on to author PRs, pair with your engineering team, and verify the performance improvements in production."
  },
  {
    q: "What is the difference between this page and consult.yogeshbhavsar.com?",
    a: "This page provides an overview of consulting capabilities on my primary portfolio domain. For specialized fractional architecture packages, deep advisory scopes, and enterprise consulting retainers, you can also explore my dedicated portal at consult.yogeshbhavsar.com."
  },
  {
    q: "How long does a typical frontend audit take?",
    a: "A focused Core Web Vitals or Next.js architecture audit typically takes 5 to 7 business days from repository access to final deliverable presentation and roadmap walkthrough."
  }
];

const FrontendConsultingPage = () => {
  useEffect(() => {
    logServicePageView('frontend-architecture-consulting');
  }, []);

  const serviceSchema = {
    "@type": "ProfessionalService",
    "@id": "https://yogeshbhavsar.com/frontend-consulting/#service",
    "name": "Frontend Architecture & Performance Consulting",
    "provider": {
      "@type": "Person",
      "@id": "https://yogeshbhavsar.com/#person",
      "name": "Yogesh Bhavsar"
    },
    "url": "https://yogeshbhavsar.com/frontend-consulting",
    "areaServed": "Worldwide",
    "serviceType": [
      "Core Web Vitals Optimization",
      "Next.js Performance Audit",
      "Frontend Architecture Consulting",
      "Fractional Frontend Leadership",
      "Frontend Codebase Audit"
    ],
    "description": "Senior frontend architecture and performance consulting by Yogesh Bhavsar. Specializing in Core Web Vitals (INP/LCP), React/Next.js performance audits, and codebase modernization."
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
        "name": "Frontend Consulting",
        "item": "https://yogeshbhavsar.com/frontend-consulting"
      }
    ]
  };

  return (
    <>
      <SEO
        title="Frontend Architecture & Performance Consulting | Yogesh Bhavsar"
        description="Senior Frontend Architecture & Core Web Vitals Consulting by Yogesh Bhavsar. Fix INP/LCP regressions, optimize Next.js App Router performance, and audit React codebases for scale."
        canonical="/frontend-consulting"
        schema={[serviceSchema, breadcrumbsSchema]}
        keywords="frontend architecture consultant, React performance optimization, Next.js performance audit, Core Web Vitals consulting, Core Web Vitals optimization, frontend codebase audit, design system development, frontend consulting services"
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
              <Gauge size={14} />
              <span>Fractional Architecture & Advisory</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Frontend Consulting for <br className="hidden sm:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-accent">
                Performance, Architecture & UI Systems
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Resolve Core Web Vitals regressions, eliminate React/Next.js technical debt, 
              and scale frontend architectures with direct senior engineering judgment.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button asChild size="lg" className="w-full sm:w-auto text-base h-12 px-8 shadow-lg shadow-primary/20">
                <Link 
                  to="/contact"
                  onClick={() => logCtaClick('consulting_hero_contact', '/contact')}
                >
                  Request a Codebase Audit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto text-base h-12 px-8">
                <a 
                  href="https://consult.yogeshbhavsar.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => logCtaClick('consulting_portal_link', 'consult.yogeshbhavsar.com')}
                >
                  Explore Dedicated Consulting Portal
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.header>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Core Web Vitals", value: "INP & LCP", detail: "Diagnose & fix field regressions" },
              { label: "Bundle Reductions", value: "Up to 30%", detail: "Splitting & modular CSS" },
              { label: "Audit Timeline", value: "5-7 Days", detail: "Fast, comprehensive delivery" },
              { label: "Engagement", value: "Fractional / Sprint", detail: "No long-term lock-in" }
            ].map((stat, i) => (
              <Card key={i} className="text-center p-4 bg-card/60 border-muted/60">
                <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">{stat.label}</p>
                <p className="text-xl sm:text-2xl font-black text-primary mt-1">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{stat.detail}</p>
              </Card>
            ))}
          </div>

          {/* When to Bring in a Consultant */}
          <section className="rounded-2xl border border-border/80 bg-muted/20 p-8 sm:p-10 space-y-6">
            <div className="max-w-2xl">
              <Badge variant="outline" className="mb-2 text-primary border-primary/30">Common Challenges</Badge>
              <h2 className="text-2xl sm:text-3xl font-extrabold">When Teams Bring Me In</h2>
              <p className="text-muted-foreground mt-2 text-sm sm:text-base">
                Engineering teams hire me when performance debt is impacting conversions, user satisfaction, or developer velocity:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              {symptoms.map((symptom, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border/60">
                  <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-foreground/90 font-medium">{symptom}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Core Consulting Pillars */}
          <section className="space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-extrabold text-foreground">Consulting Capabilities</h2>
              <p className="text-muted-foreground mt-2">
                Actionable technical guidance backed by 7+ years of building production frontend architectures.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {consultingPillars.map((pillar, index) => (
                <Card key={index} className="border-border/70 bg-card/80 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <pillar.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl font-bold">{pillar.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                      {pillar.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* What You Receive */}
          <section className="space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-extrabold text-foreground">What You Receive in an Audit</h2>
              <p className="text-muted-foreground mt-2">
                Every audit produces tangible, engineering-ready documentation and concrete code solutions.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {auditDeliverables.map((deliv, idx) => (
                <div key={idx} className="p-6 rounded-xl border border-border/70 bg-card space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <h3 className="font-bold text-lg text-foreground">{deliv.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed pl-7">
                    {deliv.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Dedicated Portal Callout */}
          <section className="rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-8 sm:p-10 space-y-6">
            <div className="max-w-2xl space-y-3">
              <Badge className="bg-primary text-primary-foreground">Specialized Consulting Portal</Badge>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
                Explore consult.yogeshbhavsar.com
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                For detailed audit tiers, fractional architecture scopes, and in-depth case analyses of Next.js performance tuning, 
                visit my specialized consulting sub-property.
              </p>
            </div>
            <div>
              <Button asChild size="lg" className="gap-2">
                <a href="https://consult.yogeshbhavsar.com/" target="_blank" rel="noopener noreferrer">
                  Visit consult.yogeshbhavsar.com <ExternalLink size={16} />
                </a>
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
            <h2 className="text-3xl font-extrabold text-foreground">Ready to Solve Your Frontend Performance Bottlenecks?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Send me your website URL or a brief description of the technical challenges your team is facing.
            </p>
            <div className="pt-2">
              <Button asChild size="lg" className="px-8 h-12 text-base">
                <Link to="/contact">Request Architectural Consultation</Link>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default FrontendConsultingPage;
