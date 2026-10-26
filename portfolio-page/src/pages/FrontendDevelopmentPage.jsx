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
  HelpCircle,
  AlertCircle,
  Sparkles,
  GitPullRequest,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SEO from '@/components/SEO';
import { logServicePageView, logCtaClick } from '@/utils/analytics';

const hiringPains = [
  {
    title: "The 4-Month Full-Time Hiring Drag",
    problem: "Sourcing, interviewing, and negotiating with a senior frontend engineer takes 3–6 months plus 20% recruiter fees. Meanwhile, critical roadmap features slip and backend APIs sit idle.",
    solution: "Plug in an experienced Senior Frontend Engineer immediately. I onboard asynchronously and ship your first production-ready pull request within 48 hours."
  },
  {
    title: "The Junior Freelancer Refactor Tax",
    problem: "Hiring cheap contractors often backfires: fragile state logic, missing edge cases, zero automated tests, and PRs that your existing staff engineers spend hours reviewing and rewriting.",
    solution: "Get senior-level craftsmanship: strict TypeScript, 90%+ unit test coverage with Jest and React Testing Library, accessible semantic HTML, and zero technical debt."
  },
  {
    title: "Figma-to-Code Translation Gap",
    problem: "Designs look slick in Figma, but the delivered web app feels clunky, unresponsive on mobile, and stutters during user interactions.",
    solution: "I bridge design and engineering seamlessly: pixel-perfect UI, fluid responsive breakpoints, micro-interactions, and reusable component libraries (Tailwind / Radix UI)."
  }
];

const engagementModels = [
  {
    badge: "Most Flexible",
    title: "Embedded Sprint Capacity",
    subtitle: "For startups and product teams needing high-velocity feature delivery",
    description: "Join your existing Agile sprints (20–40 hours/week). I integrate into your Slack, Linear/Jira, and GitHub to tackle roadmap tickets autonomously.",
    features: [
      "Zero onboarding friction — shipping code in sprint 1",
      "Daily asynchronous updates & standup participation",
      "Thorough PR descriptions with video walkthroughs",
      "Flexible monthly commitment with 2 weeks notice"
    ]
  },
  {
    badge: "Fixed Milestones",
    title: "Fixed-Scope Feature or MVP Build",
    subtitle: "For defined deliverables like dashboards, portals, or new product modules",
    description: "Turn your Figma specs and API endpoints into a finished, battle-tested React/Next.js frontend with clear milestones and guaranteed delivery dates.",
    features: [
      "Comprehensive architectural plan before writing code",
      "Component library & design system setup",
      "Full API integration & robust error handling",
      "Automated test suite & post-launch warranty"
    ]
  },
  {
    badge: "High-Leverage",
    title: "Codebase Modernization & Cleanup",
    subtitle: "For legacy React applications slowing down developer velocity",
    description: "Safely untangle spaghetti code, migrate from legacy SPAs or Create React App to modern Next.js/Vite, and establish rigid linting and state standards.",
    features: [
      "Eliminate unnecessary re-renders & state waterfalls",
      "Migrate to strict TypeScript & modular components",
      "Optimize bundle sizes and cut initial load times by 40%+",
      "Establish automated CI/CD lint and test quality gates"
    ]
  }
];

const technicalArsenal = [
  { category: "Core Frameworks & Languages", items: ["React 18 / 19", "Next.js (App & Pages)", "TypeScript", "JavaScript (ESNext)", "HTML5 / Semantic DOM"] },
  { category: "State & Data Layer", items: ["Redux Toolkit", "Zustand", "TanStack React Query", "Context API", "REST & GraphQL APIs"] },
  { category: "Styling & Design Systems", items: ["Tailwind CSS", "Modular CSS", "Radix UI Primitives", "shadcn/ui", "Framer Motion", "Figma Handoff"] },
  { category: "Testing & Code Quality", items: ["Jest", "React Testing Library", "ESLint / Prettier", "Husky Git Hooks", "WCAG 2.1 AA Accessibility"] }
];

const comparisonMatrix = [
  {
    metric: "Onboarding Time",
    yogesh: "Under 48 hours (Async & autonomous)",
    fullTime: "3 to 6 months (Recruiting + ramp)",
    juniorContractor: "1 to 2 weeks (Heavy guidance needed)"
  },
  {
    metric: "Code Quality & Tests",
    yogesh: "Strict TypeScript, 90%+ Jest/RTL coverage",
    fullTime: "Varies by candidate seniority",
    juniorContractor: "Rarely tests; fragile state logic"
  },
  {
    metric: "Commitment & Risk",
    yogesh: "Sprint-to-sprint or milestone-based",
    fullTime: "Permanent payroll, benefits & equity",
    juniorContractor: "Unpredictable delivery & ghosting risk"
  },
  {
    metric: "Management Overhead",
    yogesh: "Zero babysitting; self-directed execution",
    fullTime: "Requires ongoing 1-on-1s & HR overhead",
    juniorContractor: "High PR review and hand-holding time"
  }
];

const faqs = [
  {
    q: "How does hiring a freelance senior frontend developer compare to hiring full-time?",
    a: "Hiring a full-time senior engineer typically takes 3 to 6 months of interviewing, tens of thousands in recruitment fees, plus permanent salary, equity, and benefits. Engaging me as a senior freelance contractor gives you immediate senior engineering capacity within days. You get enterprise-grade output for your critical sprints or project milestones without long-term overhead or hiring lock-in."
  },
  {
    q: "What is your remote availability and timezone overlap?",
    a: "I work remotely from India (IST, GMT+5:30) with established, flexible overlap hours for North American (EST/PST), European/UK (GMT/CET), and APAC teams. I emphasize asynchronous excellence—delivering crystal-clear daily summaries, detailed PR documentation, and Loom video walkthroughs so your team never waits on me."
  },
  {
    q: "How quickly can you onboard into our codebase and start shipping code?",
    a: "Typically within 24 to 48 hours of receiving GitHub repository and documentation access. With 7+ years across enterprise platforms like Reach Plc and Jio, I am accustomed to jumping into large, unfamiliar codebases, spinning up local environments quickly, and picking up Jira/Linear backlog tickets without hand-holding."
  },
  {
    q: "Do you write automated tests and documentation for the code you deliver?",
    a: "Yes, non-negotiable. I write automated unit and integration tests using Jest and React Testing Library, aiming for 90%+ coverage on critical user flows and state logic. Every pull request includes a comprehensive description, testing instructions, and relevant documentation."
  },
  {
    q: "How do we handle intellectual property, contracts, and NDAs?",
    a: "All intellectual property created during our engagement belongs 100% to your company upon payment. I routinely sign standard NDAs, contractor agreements, and IP assignment contracts before starting any technical engagement."
  }
];

const FrontendDevelopmentPage = () => {
  useEffect(() => {
    logServicePageView('freelance-frontend-development');
  }, []);

  const serviceSchema = {
    "@type": "Service",
    "@id": "https://yogeshbhavsar.com/frontend-development/#service",
    "name": "Freelance Frontend Development",
    "serviceType": "Senior Frontend Engineering Services",
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
        title="Freelance Frontend Developer | React & Next.js — Yogesh Bhavsar"
        description="Hire Yogesh Bhavsar, Senior Freelance Frontend Developer & Architect. 7+ years building scalable React, Next.js, and TypeScript applications for global startups and product teams."
        canonical="/frontend-development"
        schema={[serviceSchema, breadcrumbsSchema, faqSchema]}
        keywords="freelance frontend developer, hire freelance senior react developer, frontend developer for hire, senior frontend engineer contract, remote frontend developer, frontend engineer for startups, hire react typescript developer, contract frontend engineer"
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
              <Terminal size={14} className="text-primary" />
              <span>Senior Freelance Frontend Engineer for Hire</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-foreground">
              Senior Frontend Engineering for <br className="hidden sm:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-accent">
                Fast-Moving Product Teams
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Skip the 4-month hiring search. I partner with founders, CTOs, and engineering leaders as an autonomous senior contributor—shipping clean, tested, and scalable <strong>React, Next.js, and TypeScript</strong> code directly to your repositories.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
              <Button asChild size="lg" className="w-full sm:w-auto text-base h-12 px-8 shadow-lg shadow-primary/20 font-semibold">
                <Link 
                  to="/contact"
                  onClick={() => logCtaClick('fe_hero_contact', '/contact')}
                >
                  Hire for Your Next Sprint
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto text-base h-12 px-8 font-semibold">
                <Link to="/experience">
                  Inspect Experience & Track Record
                </Link>
              </Button>
            </div>

            <p className="text-xs text-muted-foreground pt-1">
              ✓ 7+ Years Experience &nbsp;|&nbsp; ✓ 90%+ Test Coverage &nbsp;|&nbsp; ✓ US / EU / APAC Timezone Overlap
            </p>
          </motion.header>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Experience", value: "7+ Years", detail: "Senior engineering roles" },
              { label: "High-Scale Proof", value: "Reach Plc & Jio", detail: "Millions of active users" },
              { label: "Test Rigor", value: "90%+ Tests", detail: "Jest & React Testing Library" },
              { label: "Collaboration", value: "Async-First", detail: "Clear PRs, daily async updates" }
            ].map((stat, i) => (
              <Card key={i} className="text-center p-4 bg-card/60 border-muted/60 shadow-sm">
                <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">{stat.label}</p>
                <p className="text-2xl font-black text-primary mt-1">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{stat.detail}</p>
              </Card>
            ))}
          </div>

          {/* Indirect Sales Pitch: Why Hiring a Senior Freelancer Solves Real Leadership Headaches */}
          <section className="rounded-2xl border border-border/80 bg-muted/20 p-8 sm:p-12 space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <Badge variant="outline" className="text-primary border-primary/30 font-semibold">Why Engineering Leaders Bring Me In</Badge>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
                Eliminate the Engineering Bottleneck Without Full-Time Drag
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                When your product roadmap is under pressure, you can't afford months of recruitment or codebases clogged with sloppy contractor code.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {hiringPains.map((item, idx) => (
                <div key={idx} className="p-6 rounded-xl bg-card border border-border/80 shadow-sm space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-amber-500 font-bold text-base">
                      <AlertCircle className="h-5 w-5 flex-shrink-0" />
                      <span>{item.title}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.problem}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-border/60">
                    <p className="text-xs font-bold uppercase tracking-wider text-primary mb-1">How I Solve It:</p>
                    <p className="text-sm text-foreground/90 font-medium leading-relaxed">
                      {item.solution}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Comparison: Yogesh vs Full-Time vs Upwork Freelancer */}
          <section className="space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <Badge variant="outline" className="text-primary border-primary/30 font-semibold">Clear Comparison</Badge>
              <h2 className="text-3xl font-extrabold text-foreground">Comparing Your Frontend Hiring Options</h2>
              <p className="text-muted-foreground text-sm sm:text-base">
                Why forward-thinking startups and product teams choose high-leverage contract engineering over lengthy hiring cycles.
              </p>
            </div>

            <div className="overflow-x-auto rounded-xl border border-border/70 bg-card shadow-sm">
              <table className="w-full text-left text-sm">
                <thead className="bg-muted/50 border-b border-border/70 text-xs uppercase tracking-wider text-muted-foreground font-bold">
                  <tr>
                    <th className="py-4 px-6">Evaluation Factor</th>
                    <th className="py-4 px-6 text-primary font-extrabold bg-primary/5">Yogesh Bhavsar (Senior Contract)</th>
                    <th className="py-4 px-6">Full-Time Senior Hire</th>
                    <th className="py-4 px-6">Generic Marketplace Freelancer</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {comparisonMatrix.map((row, idx) => (
                    <tr key={idx} className="hover:bg-muted/20 transition-colors">
                      <td className="py-4 px-6 font-semibold text-foreground">{row.metric}</td>
                      <td className="py-4 px-6 font-bold text-primary bg-primary/5">{row.yogesh}</td>
                      <td className="py-4 px-6 text-muted-foreground">{row.fullTime}</td>
                      <td className="py-4 px-6 text-muted-foreground">{row.juniorContractor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Engagement Models */}
          <section className="space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-3xl font-extrabold text-foreground">Flexible Ways to Work Together</h2>
              <p className="text-muted-foreground text-sm sm:text-base">
                Choose the model that fits your team's rhythm, whether you need continuous sprint capacity or a defined milestone.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {engagementModels.map((model, index) => (
                <Card key={index} className="border-border/80 bg-card flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                  <div>
                    <CardHeader className="space-y-2 pb-4">
                      <Badge variant="secondary" className="w-fit font-semibold text-xs text-primary">
                        {model.badge}
                      </Badge>
                      <CardTitle className="text-xl font-bold">{model.title}</CardTitle>
                      <p className="text-xs text-muted-foreground font-medium">{model.subtitle}</p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {model.description}
                      </p>
                      <div className="space-y-2 pt-2 border-t border-border/60">
                        <p className="text-xs font-bold uppercase tracking-wider text-foreground">Highlights:</p>
                        <ul className="space-y-2">
                          {model.features.map((feat, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-2 text-xs sm:text-sm text-foreground/90">
                              <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </div>
                  <div className="p-6 pt-0">
                    <Button asChild className="w-full" variant="outline">
                      <Link to="/contact">Discuss Availability</Link>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Technical Stack Grid */}
          <section className="rounded-2xl border border-border/80 bg-muted/20 p-8 sm:p-10 space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <Badge variant="outline" className="mb-2 text-primary border-primary/30 font-semibold">Technical Depth</Badge>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">The Tech Stack I Work In Every Day</h2>
              <p className="text-muted-foreground mt-2 text-sm sm:text-base">
                Tools selected for maximum developer velocity, runtime performance, and zero regression risk.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {technicalArsenal.map((category, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-card border border-border/70 space-y-3">
                  <h3 className="font-bold text-xs uppercase tracking-wider text-primary">{category.category}</h3>
                  <div className="flex flex-wrap gap-1.5">
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

          {/* FAQ Section */}
          <section className="space-y-6 max-w-4xl mx-auto">
            <div className="text-center space-y-2">
              <Badge variant="outline" className="text-primary border-primary/30 font-semibold">Frequently Asked Questions</Badge>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
                What Engineering Leaders Ask Before Engaging
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base">
                Answers regarding remote workflows, test coverage, code ownership, and availability.
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

          {/* Final Conversion Section */}
          <div className="text-center bg-gradient-to-r from-card via-card/90 to-card border border-border/80 rounded-2xl p-8 sm:p-12 space-y-5 shadow-sm">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
              Need Senior Frontend Velocity for Your Next Milestone?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              Share your project requirements, current tech stack, or roadmap bottleneck. I'll get back to you within 24 hours with my availability and a straightforward proposal.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="px-8 h-12 text-base font-semibold shadow-md shadow-primary/20">
                <Link to="/contact">Schedule a Technical Call</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-8 h-12 text-base font-semibold">
                <Link to="/experience">Review Full Work History</Link>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default FrontendDevelopmentPage;
