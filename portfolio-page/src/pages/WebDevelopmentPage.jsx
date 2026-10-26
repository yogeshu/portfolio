import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  Zap, 
  Search, 
  Smartphone, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Gauge, 
  Code2, 
  HelpCircle,
  Clock,
  Sparkles,
  AlertCircle,
  XCircle,
  DollarSign,
  Layers,
  FileCheck,
  Send
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SEO from '@/components/SEO';
import { logServicePageView, logCtaClick } from '@/utils/analytics';

const painPoints = [
  {
    title: "The Bloated Plugin Trap",
    problem: "Most WordPress or Wix sites start fast, but after 15 plugins, page builders (Elementor/Divi), and cheap hosting, mobile load time creeps to 5–8 seconds.",
    solution: "I write clean, custom React code with zero plugin bloat. Your pages load in under 1 second, keeping visitors engaged instead of bouncing."
  },
  {
    title: "The Opaque Agency Markup",
    problem: "Traditional web design agencies charge $10,000–$25,000, hand your project off to junior interns, and lock you into $300/month retainers for simple text edits.",
    solution: "You work directly with a Senior Frontend Engineer with 7+ years of experience. Transparent fixed pricing, zero middleman markups, and fast 2–4 week delivery."
  },
  {
    title: "Losing Google Rankings & Ad Clicks",
    problem: "Google penalizes slow websites on mobile. When visitors click your Google Ads or organic links and face a sluggish page, you pay for clicks that never convert.",
    solution: "Every site is engineered to hit 95+ on Google PageSpeed and pass Core Web Vitals, maximizing your organic search visibility and ad ROI."
  }
];

const servicePackages = [
  {
    badge: "Most Popular",
    title: "Custom Business Website",
    idealFor: "Professional services, consultants, local businesses, and growing companies.",
    deliverables: [
      "3 to 6 custom-designed, fast-loading pages (Home, About, Services, Case Studies, Contact)",
      "Mobile-first responsive design tested on real iOS & Android devices",
      "95+ Google PageSpeed score & guaranteed Core Web Vitals pass",
      "Built-in technical SEO: Schema.org structured data, sitemap, meta tags",
      "Direct lead capture forms connected to your email, CRM, or WhatsApp",
      "100% code ownership with modern cloud hosting setup (Vercel/Netlify)"
    ],
    timeline: "2 to 3 weeks"
  },
  {
    badge: "Speed & Conversion",
    title: "High-Converting Landing Page",
    idealFor: "Product launches, paid advertising campaigns, and direct lead generation.",
    deliverables: [
      "Single-page, laser-focused layout engineered for high conversion rates",
      "Compelling value proposition sections, social proof, and clear CTA paths",
      "Sub-second load times to capture maximum traffic from paid ads",
      "Custom analytics & event tracking (Google Analytics 4, Meta Pixel)",
      "Interactive FAQ accordion and smooth section navigation"
    ],
    timeline: "7 to 10 days"
  },
  {
    badge: "Modernization",
    title: "Website Speed & Redesign Overhaul",
    idealFor: "Businesses with slow WordPress, Wix, or outdated legacy websites.",
    deliverables: [
      "Rebuild your existing design into a modern, lightning-fast React application",
      "Preserve existing SEO URLs and search rankings with clean 301 redirects",
      "Eliminate fragile plugins, security vulnerabilities, and database maintenance",
      "Upgrade typography, mobile layouts, and interactive user experience",
      "Slash ongoing maintenance costs to virtually $0 on modern static hosting"
    ],
    timeline: "2 to 4 weeks"
  }
];

const comparisonMatrix = [
  {
    feature: "Mobile Load Speed",
    custom: "Under 1.2s (95+ PageSpeed)",
    agency: "3.5s - 6s (Average)",
    builder: "4s - 8s (Plugin drag)"
  },
  {
    feature: "Code Ownership & Freedom",
    custom: "100% yours forever. Zero lock-in.",
    agency: "Often tied to proprietary CMS",
    builder: "Locked inside their platform"
  },
  {
    feature: "Monthly Maintenance Fees",
    custom: "$0 mandatory fees. Modern serverless.",
    agency: "$250 - $1,000/month retainers",
    builder: "$25 - $80/month recurring fees"
  },
  {
    feature: "Who Actually Builds It",
    custom: "Senior Engineer (7+ yrs exp)",
    agency: "Junior developers / interns",
    builder: "You do it yourself"
  },
  {
    feature: "Security & Vulnerabilities",
    custom: "Static/JAMstack (virtually unhackable)",
    agency: "Varies by platform & CMS",
    builder: "Frequent plugin exploit targets"
  },
  {
    feature: "Technical SEO & Schema",
    custom: "Custom JSON-LD schema & clean HTML",
    agency: "Basic plugin configuration",
    builder: "Generic automated tags"
  }
];

const faqs = [
  {
    q: "Why hire a custom web developer instead of using WordPress, Wix, or Squarespace for my small business?",
    a: "Website builders are fine for hobbies, but they come with severe trade-offs for commercial businesses. They generate bloated, messy code that takes 4 to 8 seconds to load on mobile phones. Google prioritizes speed and Core Web Vitals when ranking sites, and half of all mobile visitors bounce if a site takes more than 3 seconds. A custom-built website is lightweight, loads in under 1 second, scores 95+ on Google PageSpeed, and converts more visitors into paying customers. You also avoid monthly platform subscription fees and plugin update headaches."
  },
  {
    q: "How much does a custom small business website cost, and are there hidden fees?",
    a: "Every project is quoted with fixed, transparent pricing based on your exact scope, pages, and functionality—no surprise hourly billing and no monthly maintenance retainers. Most small business websites range between $1,200 and $3,500 depending on complexity. Hosting on modern cloud networks like Vercel or Netlify is typically $0/month for standard small-business traffic."
  },
  {
    q: "How long does a website project take from start to launch?",
    a: "A focused high-converting landing page is typically completed in 7 to 10 days. A full multi-page small business website takes between 2 and 4 weeks. I work in transparent, weekly milestones so you review progress at every step."
  },
  {
    q: "Can I make text and content updates to my website after launch?",
    a: "Yes. I can integrate lightweight, user-friendly headless CMS solutions (such as Sanity or Markdown-based editing), or set up simple content configs so you can easily update text, testimonials, pricing, and images without touching code or breaking layouts."
  },
  {
    q: "Will my website be mobile-friendly and optimized for Google search?",
    a: "Yes, 100%. Every site is built mobile-first and tested rigorously on real mobile devices. I embed full technical SEO fundamentals from Day 1: Schema.org structured data, XML sitemaps, Open Graph social share cards, clean semantic HTML5, and automated image compression in modern WebP format."
  },
  {
    q: "What happens after the website is launched? Do I own the code?",
    a: "You own 100% of the code, design assets, and repository. I provide 30 days of complimentary post-launch support to ensure everything runs smoothly. After that, because there are no fragile WordPress databases or plugin updates to manage, maintenance is virtually zero."
  }
];

const WebDevelopmentPage = () => {
  useEffect(() => {
    logServicePageView('small-business-web-development');
  }, []);

  const serviceSchema = {
    "@type": "Service",
    "@id": "https://yogeshbhavsar.com/web-development/#service",
    "name": "Web Developer for Small Business",
    "serviceType": "Small Business Website Development",
    "provider": {
      "@type": "Person",
      "@id": "https://yogeshbhavsar.com/#person",
      "name": "Yogesh Bhavsar"
    },
    "description": "Custom website development for small businesses, founders, and growing brands. High performance, mobile-first design, 95+ Google PageSpeed, and built-in technical SEO.",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Small Business Web Development Packages",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Small Business Website"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "High-Converting Landing Page Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Website Speed Redesign & WordPress Migration"
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
        "name": "Web Development for Small Business",
        "item": "https://yogeshbhavsar.com/web-development"
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
        title="Web Developer for Small Business | Fast Custom Websites — Yogesh Bhavsar"
        description="Hire Yogesh Bhavsar, Senior Web Developer for small businesses and founders. Fast, mobile-responsive custom websites with 95+ PageSpeed, zero agency overhead, and built-in Google SEO."
        canonical="/web-development"
        schema={[serviceSchema, breadcrumbsSchema, faqSchema]}
        keywords="web developer for small business, small business website development, hire web developer for small business, custom website vs wordpress, affordable senior web developer, small business landing page developer, replace slow wordpress website, freelance web developer for small business"
      />

      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-background selection:bg-primary/20">
        <div className="max-w-6xl mx-auto space-y-20">
          
          {/* Hero Section */}
          <motion.header 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto space-y-6 pt-4"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-semibold border border-primary/25 shadow-sm">
              <Sparkles size={14} className="text-primary" />
              <span>Senior Web Developer for Small Businesses & Founders</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-foreground">
              Web Developer for <br className="hidden sm:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-accent">
                Small Businesses & Growing Brands
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Stop losing potential clients to slow, outdated websites. I engineer <strong>custom, lightning-fast websites</strong> that establish instant credibility, rank higher on Google, and convert clicks into phone calls and paying customers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
              <Button asChild size="lg" className="w-full sm:w-auto text-base h-12 px-8 shadow-lg shadow-primary/20 font-semibold">
                <Link 
                  to="/contact" 
                  onClick={() => logCtaClick('hero_contact', '/contact')}
                >
                  Get a Free Project Estimate
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto text-base h-12 px-8 font-semibold">
                <Link to="/projects">
                  View Live Case Studies
                </Link>
              </Button>
            </div>

            <p className="text-xs text-muted-foreground pt-1">
              ✓ Direct access to a Senior Engineer &nbsp;|&nbsp; ✓ 95+ PageSpeed Guarantee &nbsp;|&nbsp; ✓ 100% Code Ownership
            </p>
          </motion.header>

          {/* Quick Credibility Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Google PageSpeed", value: "95+ Score", sub: "Loads in < 1 second on mobile" },
              { label: "Code Quality", value: "100% Custom", sub: "No heavy page-builder drag" },
              { label: "Search Visibility", value: "Built-In SEO", sub: "Schema markup & XML sitemaps" },
              { label: "Direct Partner", value: "Zero Middlemen", sub: "Direct collaboration with Yogesh" }
            ].map((item, idx) => (
              <Card key={idx} className="text-center p-4 bg-card/60 border-muted/60 shadow-sm">
                <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">{item.label}</p>
                <p className="text-xl sm:text-2xl font-black text-primary mt-1">{item.value}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{item.sub}</p>
              </Card>
            ))}
          </div>

          {/* The Indirect Sales Pitch: The Real Pain Small Businesses Face */}
          <section className="rounded-2xl border border-border/80 bg-muted/20 p-8 sm:p-12 space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <Badge variant="outline" className="text-primary border-primary/30 font-semibold">The Cost of an Ineffective Website</Badge>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
                Why Most Small Business Websites Fail to Generate Leads
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Most small business owners don't realize their website is quietly costing them thousands in lost sales every month. Here is what typically goes wrong—and how we fix it.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {painPoints.map((item, idx) => (
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
                    <p className="text-xs font-bold uppercase tracking-wider text-primary mb-1">The Senior Fix:</p>
                    <p className="text-sm text-foreground/90 font-medium leading-relaxed">
                      {item.solution}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Comparison Matrix: Why Choose Custom Senior Dev Over Agencies or DIY */}
          <section className="space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <Badge variant="outline" className="text-primary border-primary/30 font-semibold">Make an Informed Decision</Badge>
              <h2 className="text-3xl font-extrabold text-foreground">How My Service Compares</h2>
              <p className="text-muted-foreground text-sm sm:text-base">
                See how partnering directly with a senior independent engineer gives you better results at a fraction of the agency overhead.
              </p>
            </div>

            <div className="overflow-x-auto rounded-xl border border-border/70 bg-card shadow-sm">
              <table className="w-full text-left text-sm">
                <thead className="bg-muted/50 border-b border-border/70 text-xs uppercase tracking-wider text-muted-foreground font-bold">
                  <tr>
                    <th className="py-4 px-6">Criteria</th>
                    <th className="py-4 px-6 text-primary font-extrabold bg-primary/5">Yogesh Bhavsar (Senior Dev)</th>
                    <th className="py-4 px-6">Typical Web Agency</th>
                    <th className="py-4 px-6">DIY Builders (Wix/WP)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {comparisonMatrix.map((row, idx) => (
                    <tr key={idx} className="hover:bg-muted/20 transition-colors">
                      <td className="py-4 px-6 font-semibold text-foreground">{row.feature}</td>
                      <td className="py-4 px-6 font-bold text-primary bg-primary/5">{row.custom}</td>
                      <td className="py-4 px-6 text-muted-foreground">{row.agency}</td>
                      <td className="py-4 px-6 text-muted-foreground">{row.builder}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Offerings & Packages */}
          <section className="space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-3xl font-extrabold text-foreground">Services Tailored for Small Businesses</h2>
              <p className="text-muted-foreground text-sm sm:text-base">
                Whether you need a complete digital storefront or want to rescue a slow site, every project is delivered with enterprise-grade quality.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {servicePackages.map((pkg, index) => (
                <Card key={index} className="border-border/80 bg-card flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                  <div>
                    <CardHeader className="space-y-2 pb-4">
                      <div className="flex justify-between items-center">
                        <Badge variant="secondary" className="font-semibold text-xs text-primary">
                          {pkg.badge}
                        </Badge>
                        <span className="text-xs text-muted-foreground font-medium flex items-center gap-1">
                          <Clock size={12} /> {pkg.timeline}
                        </span>
                      </div>
                      <CardTitle className="text-xl font-bold">{pkg.title}</CardTitle>
                      <p className="text-xs text-muted-foreground leading-relaxed pt-1">
                        <strong>Best for:</strong> {pkg.idealFor}
                      </p>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-xs font-bold uppercase tracking-wider text-foreground">What's Included:</p>
                      <ul className="space-y-2.5">
                        {pkg.deliverables.map((item, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90">
                            <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </div>
                  <div className="p-6 pt-0">
                    <Button asChild className="w-full" variant="outline">
                      <Link to="/contact">Discuss This Package</Link>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Demonstrated Real-World Experience */}
          <section className="rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/5 via-card to-background p-8 sm:p-10 space-y-6">
            <div className="max-w-3xl space-y-3">
              <Badge variant="outline" className="text-primary border-primary/30 font-semibold">Verified Track Record</Badge>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
                Senior Rigor Applied to Your Small Business
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                I’ve architected web platforms for companies ranging from nationwide consumer initiatives like <strong>Jio Gau Samriddhi</strong> (serving millions of users across India with 100% SEO audit scores) to high-throughput UK digital platforms at <strong>Reach Plc</strong>.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                When you hire me, you don't get a template or an outsourced junior. You get that same senior architectural rigor applied directly to your business website.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button asChild variant="outline">
                <Link to="/projects">Inspect Real Case Studies</Link>
              </Button>
              <Button asChild>
                <Link to="/contact">Check Availability & Get a Quote</Link>
              </Button>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="space-y-6 max-w-4xl mx-auto">
            <div className="text-center space-y-2">
              <Badge variant="outline" className="text-primary border-primary/30 font-semibold">Common Questions</Badge>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
                Everything Small Business Owners Ask Before Hiring
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base">
                Clear, honest answers about pricing, timelines, technology, and ownership.
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
              Ready to Upgrade to a Website That Actually Drives Revenue?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              Send me a quick note about your business, current website, or timeline. I personally review every message and reply within 24 hours with an honest assessment and clear next steps.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="px-8 h-12 text-base font-semibold shadow-md shadow-primary/20">
                <Link to="/contact">Get Your Free 15-Min Site Review</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-8 h-12 text-base font-semibold">
                <a href="mailto:yogeshbhavsar1994@gmail.com">Email Me Directly</a>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground pt-1">
              No pressure, no aggressive sales pitch. Just practical advice from a senior engineer.
            </p>
          </div>

        </div>
      </div>
    </>
  );
};

export default WebDevelopmentPage;
