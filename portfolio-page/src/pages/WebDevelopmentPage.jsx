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
  Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SEO from '@/components/SEO';
import { logServicePageView, logCtaClick } from '@/utils/analytics';

const serviceOfferings = [
  {
    icon: Globe,
    title: "Custom Business Websites",
    description: "Bespoke, brand-aligned websites built with React and modern CSS. Fast, responsive, and tailored to convert visitors into inquiries without bulky CMS bloat."
  },
  {
    icon: Zap,
    title: "High-Converting Landing Pages",
    description: "Focused single-page or multi-section landing pages for product launches, marketing campaigns, and lead generation with clear call-to-action paths."
  },
  {
    icon: Gauge,
    title: "Website Redesigns & Speed Fixes",
    description: "Transform outdated, slow-loading websites into modern, high-speed web experiences that score 90+ on Google PageSpeed and pass Core Web Vitals."
  },
  {
    icon: Search,
    title: "Technical SEO Fundamentals Built-In",
    description: "Clean semantic markup, dynamic Open Graph tags, XML sitemaps, structured data schema, and crawl-friendly architecture right out of the box."
  }
];

const whoItsFor = [
  "Small business owners who need a professional digital storefront that reflects their real quality.",
  "Founders and early-stage startups launching their first product or validating market demand.",
  "Consultants, solo practitioners, and professional service providers wanting high-trust lead generation.",
  "Companies with slow, legacy websites losing mobile visitors to competitors."
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Scope",
    description: "We clarify your target audience, key business goals, content needs, and required integrations so every page has a clear purpose."
  },
  {
    step: "02",
    title: "Architecture & UI Development",
    description: "I translate your brand and requirements into clean, pixel-perfect, mobile-responsive code with intuitive user flows."
  },
  {
    step: "03",
    title: "Speed, SEO & Quality Auditing",
    description: "Rigorous testing across screen sizes, accessibility (WCAG), Core Web Vitals benchmarks, and search engine metadata validation."
  },
  {
    step: "04",
    title: "Launch & Support",
    description: "Smooth deployment to modern cloud hosting (Vercel, Netlify, or your preferred host), custom domain setup, and analytics integration."
  }
];

const faqs = [
  {
    q: "Why choose custom frontend development over a generic WordPress or Wix site?",
    a: "Generic page-builders often load dozens of unoptimized plugins, resulting in slow load times, poor mobile UX, and weak Core Web Vitals scores that hurt your Google rankings. A custom-built website is lightweight, lightning-fast, highly secure, and tailored precisely to your brand and conversion goals."
  },
  {
    q: "How long does a typical small-business website project take?",
    a: "Most focused small-business websites and landing pages are delivered within 2 to 4 weeks, depending on content readiness and the complexity of custom features."
  },
  {
    q: "Will my website be mobile-friendly and fast?",
    a: "Yes. Every website is built mobile-first and tested rigorously on real devices. I engineer every page to target sub-2-second load times and 90+ Google Lighthouse performance scores."
  },
  {
    q: "How do we get started?",
    a: "Send me a message via the contact form with your project outline. I will review your requirements, recommend the best technical approach, and provide a clear, transparent scope and timeline."
  }
];

const WebDevelopmentPage = () => {
  useEffect(() => {
    logServicePageView('small-business-web-development');
  }, []);

  const serviceSchema = {
    "@type": "Service",
    "@id": "https://yogeshbhavsar.com/web-development/#service",
    "name": "Small Business Website Development",
    "serviceType": "Web Development Services",
    "provider": {
      "@type": "Person",
      "@id": "https://yogeshbhavsar.com/#person",
      "name": "Yogesh Bhavsar"
    },
    "description": "Professional custom website development for small businesses, founders, and growing companies. High-performance, mobile-responsive, and SEO-optimized web development.",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Website Development Packages",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Business Website"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Landing Page Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Website Redesign & Speed Optimization"
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
        "name": "Web Development",
        "item": "https://yogeshbhavsar.com/web-development"
      }
    ]
  };

  return (
    <>
      <SEO
        title="Small Business Website Development | Fast, Modern Websites — Yogesh Bhavsar"
        description="Custom website development for small businesses and founders. Fast, mobile-responsive, and SEO-ready websites built with React and modern frontend standards by Yogesh Bhavsar."
        canonical="/web-development"
        schema={[serviceSchema, breadcrumbsSchema]}
        keywords="web developer for small business, small business website development, freelance web developer, custom website development, business website developer, website developer for startups, landing page developer, website redesign developer"
      />

      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-background selection:bg-primary/20">
        <div className="max-w-6xl mx-auto space-y-16">
          
          {/* Hero Section */}
          <motion.header 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto space-y-6 pt-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20">
              <Sparkles size={14} />
              <span>Small Business & Founder Web Development</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Websites Built for <br className="hidden sm:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-accent">
                Small Businesses & Growing Companies
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I build custom, high-speed, mobile-responsive websites that establish immediate credibility, 
              rank effectively on Google, and convert visitors into paying clients.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button asChild size="lg" className="w-full sm:w-auto text-base h-12 px-8 shadow-lg shadow-primary/20">
                <Link 
                  to="/contact" 
                  onClick={() => logCtaClick('hero_contact', '/contact')}
                >
                  Discuss Your Website Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto text-base h-12 px-8">
                <Link to="/projects">
                  View Case Studies
                </Link>
              </Button>
            </div>
          </motion.header>

          {/* Value Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
            {[
              { label: "Core Web Vitals", value: "90+ Score", sub: "Lightning-fast loads" },
              { label: "Responsive", value: "100% Mobile", sub: "Flawless on all screens" },
              { label: "Search Ready", value: "Technical SEO", sub: "Schema & sitemaps built-in" },
              { label: "Direct Access", value: "Senior Engineer", sub: "No agency middleman" }
            ].map((item, idx) => (
              <Card key={idx} className="text-center p-4 bg-card/60 border-muted/60">
                <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">{item.label}</p>
                <p className="text-xl sm:text-2xl font-black text-primary mt-1">{item.value}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{item.sub}</p>
              </Card>
            ))}
          </div>

          {/* Services Grid */}
          <section className="space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-extrabold text-foreground">What I Build for Small Businesses</h2>
              <p className="text-muted-foreground mt-2">
                Every project is crafted with modern engineering standards to ensure durability, security, and top search performance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {serviceOfferings.map((service, index) => (
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

          {/* Who It's For */}
          <section className="rounded-2xl border border-border/80 bg-muted/20 p-8 sm:p-10">
            <div className="grid md:grid-cols-[1fr_1.3fr] gap-8 items-center">
              <div>
                <Badge variant="outline" className="mb-3 text-primary border-primary/30">Target Customer Profile</Badge>
                <h2 className="text-2xl sm:text-3xl font-extrabold">Who This Service Is For</h2>
                <p className="text-muted-foreground mt-3 leading-relaxed">
                  Whether you are launching your first venture or replacing a slow site that no longer serves your business, 
                  I provide hands-on technical execution from initial concept to live deployment.
                </p>
              </div>
              <ul className="space-y-4">
                {whoItsFor.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-foreground/90 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Process Section */}
          <section className="space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-extrabold text-foreground">A Transparent, 4-Step Process</h2>
              <p className="text-muted-foreground mt-2">
                No surprises, no opaque agency markups. Direct collaboration from start to finish.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <div key={index} className="relative p-6 rounded-xl border border-border/70 bg-card/60 flex flex-col justify-between">
                  <div>
                    <span className="text-3xl font-black text-primary/30">{step.step}</span>
                    <h3 className="text-lg font-bold text-foreground mt-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Real Work Proof */}
          <section className="rounded-2xl border border-primary/20 bg-primary/5 p-8 sm:p-10 text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">Demonstrated Engineering Experience</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From large-scale consumer initiatives like <strong>Jio Gau Samriddhi</strong> (reaching millions across India with 100% SEO audit scores) 
              to independent digital products like <strong>Sangam Biodata</strong>, I bring genuine senior engineering rigor to every build.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Button asChild variant="outline">
                <Link to="/projects">Explore Project Case Studies</Link>
              </Button>
              <Button asChild>
                <Link to="/contact">Get a Quote for Your Project</Link>
              </Button>
            </div>
          </section>

          {/* FAQ Section */}
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

          {/* Bottom CTA */}
          <div className="text-center bg-card border border-border/70 rounded-2xl p-10 space-y-4">
            <h2 className="text-3xl font-extrabold text-foreground">Ready to Build a Website That Works for Your Business?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Tell me about your business goals and current website. I usually respond within 24 hours with actionable recommendations.
            </p>
            <div className="pt-2">
              <Button asChild size="lg" className="px-8 h-12 text-base">
                <Link to="/contact">Start Your Project Inquiry</Link>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default WebDevelopmentPage;
