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
  FileCode,
  Sparkles,
  TrendingUp,
  Clock,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SEO from '@/components/SEO';
import { logServicePageView, logCtaClick } from '@/utils/analytics';

const businessRisks = [
  {
    title: "Google Search Console 'Failing URLs' Penalty",
    problem: "When Google flags your site for failing Core Web Vitals (especially INP or LCP), your organic search rankings take a direct hit, and paid Google Ads cost more due to low landing page experience scores.",
    solution: "I perform deep lab and real-user (CrUX) profiling to pinpoint the exact scripts, re-renders, and network waterfalls dragging down your scores, bringing your URLs into the green."
  },
  {
    title: "Mobile Bounce Rates Bleeding Conversions",
    problem: "Every 1-second delay in mobile responsiveness decreases conversion rates by up to 20%. If buttons lag when tapped or layouts shift unexpectedly, users bounce to competitors.",
    solution: "I isolate main-thread blocking tasks, untangle heavy hydration loops, and optimize asset delivery so interactions feel instant on mobile networks."
  },
  {
    title: "Roadmap Stagnation from Technical Debt",
    problem: "Your internal engineering team wants to fix performance, but they are under pressure to ship product features. Without dedicated senior performance expertise, issues linger for quarters.",
    solution: "Get a senior, independent diagnostic without pulling your team off sprint work. I deliver a prioritized, high-ROI action plan and can author the remediation PRs directly."
  }
];

const consultingOfferings = [
  {
    badge: "Most Requested",
    title: "Core Web Vitals & INP/LCP Audit",
    duration: "5 to 7 business days",
    description: "A comprehensive investigation of your real-user performance data (CrUX), lab traces, and bundle bottlenecks with guaranteed root-cause diagnosis.",
    deliverables: [
      "In-depth analysis of Interaction to Next Paint (INP) delays and main-thread long tasks",
      "Largest Contentful Paint (LCP) optimization for critical hero assets and server TTFB",
      "Cumulative Layout Shift (CLS) eradication and font/image stabilization",
      "Executive summary for leadership + prioritized code-level task list for engineers"
    ]
  },
  {
    badge: "Architecture & Scale",
    title: "Next.js & React Codebase Health Check",
    duration: "1 to 2 weeks",
    description: "An exhaustive architectural evaluation of your React/Next.js repository before product scale, major feature launches, or investor technical due diligence.",
    deliverables: [
      "Server vs Client component boundary inspection and hydration audit",
      "State management analysis (identifying unnecessary re-render cascades)",
      "Bundle size breakdown and tree-shaking dead-dependency cleanup",
      "Automated testing gap analysis (Jest, RTL, CI/CD regression protection)"
    ]
  },
  {
    badge: "Ongoing Advisory",
    title: "Fractional Frontend Technical Leadership",
    duration: "Flexible monthly retainer",
    description: "Senior architectural oversight for engineering teams that need senior direction without the $250k+ overhead of a full-time Staff/Principal hire.",
    deliverables: [
      "Weekly architectural RFC reviews and technology selection guidance",
      "High-standard code reviews on critical, high-risk pull requests",
      "Developer mentorship on performance, accessibility (WCAG), and modern standards",
      "Bi-weekly syncs with CTO / Head of Engineering on frontend roadmap risks"
    ]
  }
];

const comparisonMatrix = [
  {
    factor: "Focus & Depth",
    yogesh: "Specialized React, Next.js & Web Performance expert",
    bigFirm: "Generalist management consultants; theoretical reports",
    internalTeam: "Distracted by ongoing sprint features and backlog"
  },
  {
    factor: "Actionability",
    yogesh: "Prioritized PR-ready remediation code & file breakdowns",
    bigFirm: "High-level 80-page slide deck with generic advice",
    internalTeam: "Trial-and-error guessing without dedicated profiling"
  },
  {
    factor: "Implementation",
    yogesh: "Can author & verify the PRs directly in your repo",
    bigFirm: "Hands off report; leaves implementation to you",
    internalTeam: "Often postponed due to tight product deadlines"
  },
  {
    factor: "Turnaround Time",
    yogesh: "5 to 7 business days from repository access",
    bigFirm: "4 to 8 weeks of workshops and overhead",
    internalTeam: "Takes months of ad-hoc investigation"
  }
];

const faqs = [
  {
    q: "How does failing Core Web Vitals in Google Search Console impact our business?",
    a: "Google officially uses Core Web Vitals (LCP, INP, and CLS) as a ranking signal in search results. Failing URLs are demoted in mobile rankings, reducing organic search traffic. Furthermore, slow landing page experience increases Google Ads Cost-Per-Click (CPC) and lowers Quality Scores, directly increasing your customer acquisition costs while mobile conversion rates drop."
  },
  {
    q: "What is Interaction to Next Paint (INP) and why are our React apps failing it?",
    a: "INP replaced FID (First Input Delay) as a Core Web Vital. It measures the latency of every single user interaction (clicks, taps, keystrokes) across the entire page lifecycle. In React applications, INP usually fails due to heavy CPU-bound re-renders, bloated component trees, un-memoized context updates, or excessive JavaScript executing during hydration. I specialize in profiling these long tasks and decomposing them so interactions respond in under 200ms."
  },
  {
    q: "Can you implement the recommended fixes yourself, or do you only deliver an audit report?",
    a: "I offer both paths. Many engineering leaders prefer an initial standalone audit with an executive summary and prioritized remediation roadmap for their in-house team. However, I am also frequently engaged to author the pull requests directly, refactor bottleneck components, and verify the performance improvements in production."
  },
  {
    q: "How long does a frontend performance audit take?",
    a: "A focused Core Web Vitals or Next.js architecture audit typically takes 5 to 7 business days from the moment repository and telemetry access is granted. You receive an initial briefing call, the complete diagnostic roadmap, and an engineering walkthrough."
  },
  {
    q: "What do you need from our team to get started?",
    a: "To conduct a thorough audit, I typically need read-only access to your frontend GitHub repository, access to Google Search Console (or CrUX / analytics telemetry if available), and a brief 30-minute kickoff conversation to understand your key conversion paths and business priorities."
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
        title="Frontend Architecture & Performance Consulting | Yogesh Bhavsar"
        description="Senior Frontend Architecture & Core Web Vitals Consulting by Yogesh Bhavsar. Fix INP/LCP regressions, optimize Next.js App Router performance, and audit React codebases for scale."
        canonical="/frontend-consulting"
        schema={[serviceSchema, breadcrumbsSchema, faqSchema]}
        keywords="frontend architecture consulting, core web vitals consultant, fix failing core web vitals, interaction to next paint optimization, next.js performance audit, fractional frontend architect, react codebase audit"
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
              <Gauge size={14} className="text-primary" />
              <span>Core Web Vitals & Frontend Advisory</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-foreground">
              Frontend Architecture & <br className="hidden sm:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-accent">
                Core Web Vitals Consulting
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Stop guessing why your React or Next.js application feels sluggish. I help CTOs and product teams <strong>diagnose root-cause bottlenecks, fix failing Core Web Vitals (INP & LCP)</strong>, and modernize fragile frontend architectures.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
              <Button asChild size="lg" className="w-full sm:w-auto text-base h-12 px-8 shadow-lg shadow-primary/20 font-semibold">
                <Link 
                  to="/contact"
                  onClick={() => logCtaClick('consulting_hero_contact', '/contact')}
                >
                  Book a Performance Diagnostic
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto text-base h-12 px-8 font-semibold">
                <a 
                  href="https://consult.yogeshbhavsar.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  Visit Dedicated Advisory Portal
                  <ExternalLink size={14} />
                </a>
              </Button>
            </div>

            <p className="text-xs text-muted-foreground pt-1">
              ✓ 5–7 Day Diagnostic Turnaround &nbsp;|&nbsp; ✓ Actionable PR-Ready Fixes &nbsp;|&nbsp; ✓ Zero Guesswork
            </p>
          </motion.header>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Target INP", value: "< 200ms", sub: "Green status in Search Console" },
              { label: "Target LCP", value: "< 2.0s", sub: "Fast mobile first-content" },
              { label: "Audit Timeline", value: "5-7 Days", sub: "From repo access to roadmap" },
              { label: "Implementation", value: "Direct PRs", sub: "Verified production improvements" }
            ].map((stat, i) => (
              <Card key={i} className="text-center p-4 bg-card/60 border-muted/60 shadow-sm">
                <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">{stat.label}</p>
                <p className="text-2xl font-black text-primary mt-1">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{stat.sub}</p>
              </Card>
            ))}
          </div>

          {/* Indirect Sales Pitch: The Business Cost of Slow Frontend Performance */}
          <section className="rounded-2xl border border-border/80 bg-muted/20 p-8 sm:p-12 space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <Badge variant="outline" className="text-primary border-primary/30 font-semibold">The High Cost of Sluggish Frontends</Badge>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
                Slow Performance Isn't Just Tech Debt — It's Lost Revenue
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Google penalties, climbing customer acquisition costs, and frustrated users are the direct result of unoptimized frontends. Here is what is quietly hurting your growth:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {businessRisks.map((item, idx) => (
                <div key={idx} className="p-6 rounded-xl bg-card border border-border/80 shadow-sm space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-rose-500 font-bold text-base">
                      <AlertTriangle className="h-5 w-5 flex-shrink-0" />
                      <span>{item.title}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.problem}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-border/60">
                    <p className="text-xs font-bold uppercase tracking-wider text-primary mb-1">How I Intervene:</p>
                    <p className="text-sm text-foreground/90 font-medium leading-relaxed">
                      {item.solution}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Comparison Matrix */}
          <section className="space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <Badge variant="outline" className="text-primary border-primary/30 font-semibold">Comparison Matrix</Badge>
              <h2 className="text-3xl font-extrabold text-foreground">Why Engage a Dedicated Performance Specialist?</h2>
              <p className="text-muted-foreground text-sm sm:text-base">
                How working with a senior frontend practitioner beats generic consulting slides and unblocks your internal team.
              </p>
            </div>

            <div className="overflow-x-auto rounded-xl border border-border/70 bg-card shadow-sm">
              <table className="w-full text-left text-sm">
                <thead className="bg-muted/50 border-b border-border/70 text-xs uppercase tracking-wider text-muted-foreground font-bold">
                  <tr>
                    <th className="py-4 px-6">Approach</th>
                    <th className="py-4 px-6 text-primary font-extrabold bg-primary/5">Yogesh Bhavsar (Specialist)</th>
                    <th className="py-4 px-6">Generic Consulting Agency</th>
                    <th className="py-4 px-6">Internal Team Tasking</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {comparisonMatrix.map((row, idx) => (
                    <tr key={idx} className="hover:bg-muted/20 transition-colors">
                      <td className="py-4 px-6 font-semibold text-foreground">{row.factor}</td>
                      <td className="py-4 px-6 font-bold text-primary bg-primary/5">{row.yogesh}</td>
                      <td className="py-4 px-6 text-muted-foreground">{row.bigFirm}</td>
                      <td className="py-4 px-6 text-muted-foreground">{row.internalTeam}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Consulting Offerings */}
          <section className="space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-3xl font-extrabold text-foreground">Consulting & Advisory Engagements</h2>
              <p className="text-muted-foreground text-sm sm:text-base">
                Structured scopes designed to deliver immediate, high-ROI engineering clarity.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {consultingOfferings.map((pkg, index) => (
                <Card key={index} className="border-border/80 bg-card flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                  <div>
                    <CardHeader className="space-y-2 pb-4">
                      <div className="flex justify-between items-center">
                        <Badge variant="secondary" className="font-semibold text-xs text-primary">
                          {pkg.badge}
                        </Badge>
                        <span className="text-xs text-muted-foreground font-medium flex items-center gap-1">
                          <Clock size={12} /> {pkg.duration}
                        </span>
                      </div>
                      <CardTitle className="text-xl font-bold">{pkg.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {pkg.description}
                      </p>
                      <div className="space-y-2 pt-2 border-t border-border/60">
                        <p className="text-xs font-bold uppercase tracking-wider text-foreground">Deliverables:</p>
                        <ul className="space-y-2">
                          {pkg.deliverables.map((item, dIdx) => (
                            <li key={dIdx} className="flex items-start gap-2 text-xs sm:text-sm text-foreground/90">
                              <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </div>
                  <div className="p-6 pt-0">
                    <Button asChild className="w-full" variant="outline">
                      <Link to="/contact">Request Scope & Availability</Link>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="space-y-6 max-w-4xl mx-auto">
            <div className="text-center space-y-2">
              <Badge variant="outline" className="text-primary border-primary/30 font-semibold">Consulting FAQs</Badge>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
                Everything Leaders Ask About Frontend Audits
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base">
                Clear answers regarding methodology, deliverables, and implementation support.
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

          {/* Final CTA */}
          <div className="text-center bg-gradient-to-r from-card via-card/90 to-card border border-border/80 rounded-2xl p-8 sm:p-12 space-y-5 shadow-sm">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
              Ready to Fix Your Core Web Vitals & Frontend Performance?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              Send me your application URL or describe your performance bottleneck. I will review it and reply with initial diagnostic observations and recommended next steps.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="px-8 h-12 text-base font-semibold shadow-md shadow-primary/20">
                <Link to="/contact">Request Your Performance Audit</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-8 h-12 text-base font-semibold">
                <a href="mailto:yogeshbhavsar1994@gmail.com">Email Me Directly</a>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default FrontendConsultingPage;
