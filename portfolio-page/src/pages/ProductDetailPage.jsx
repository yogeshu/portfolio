import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  ArrowRight, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  Sparkles, 
  Code2, 
  Globe, 
  Zap,
  Terminal
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SEO from '@/components/SEO';
import { featuredProducts } from '@/data/portfolioData';

const productDetails = {
  frontendyogi: {
    architecturalDeepDive: [
      {
        title: "Open Client-Side Architecture",
        description: "Built as an open web application, all file conversions, image diffing, and formatting operate purely within the browser's JavaScript runtime and Web Workers. Users get instant execution and complete data privacy with zero server latency."
      },
      {
        title: "High-Performance Canvas Diffing & Mockup Engine",
        description: "Built custom GPU-accelerated canvas overlays supporting synchronized coordinate zooming, panning, and pixel-by-pixel difference heatmaps without dropping below 60fps."
      },
      {
        title: "SEO-Driven Utility Discovery",
        description: "Architected clean URL routing and dynamic metadata generation for individual utility tools, earning natural search engine visibility while delivering immediate utility to frontend developers and designers."
      }
    ],
    technicalChallenges: "Managing large binary buffers in memory without causing tab crashes, handling cross-browser canvas security contexts (CORS), and designing responsive gesture handling on touch devices.",
    outcomes: "An open, fast, zero-server-cost workstation delivering immediate utilities to developers while serving as proof of senior frontend engineering and client-side architecture."
  },
  "writer-mirror": {
    architecturalDeepDive: [
      {
        title: "Minimalist Lexical Text Engine",
        description: "Constructed on top of a highly modular rich text framework, allowing seamless document state serialization, real-time word counting, and undo/redo stacks with zero input lag."
      },
      {
        title: "Real-Time Linguistic & Readability Scoring",
        description: "Implemented on-the-fly syllable estimation, Flesch-Kincaid grade level calculations, and sentence complexity diagnostics running asynchronously to keep typing buttery smooth."
      },
      {
        title: "Local-First Storage & Offline Resilience",
        description: "Automatic persistence to browser local storage and IndexedDB ensures that authors never lose a single keystroke, even during network drops or accidental tab closures."
      }
    ],
    technicalChallenges: "Balancing continuous text diagnostic calculations with sub-16ms keystroke responsiveness, preventing garbage collection spikes during long editing sessions.",
    outcomes: "A distraction-free writing haven with instantaneous feedback, used daily for drafting technical publications, articles, and book chapters."
  },
  "her-sanctuary": {
    architecturalDeepDive: [
      {
        title: "Content-First Editorial Architecture",
        description: "Designed a clean, content-led information hierarchy that puts typography, accessibility, and readability first, allowing essays and community stories to breathe."
      },
      {
        title: "Sub-Second Next.js Static Delivery",
        description: "Leveraged Next.js Static Site Generation (SSG) with aggressive edge caching and responsive image optimization to achieve near-instantaneous mobile page transitions."
      },
      {
        title: "Inclusive Design & High-Contrast Theming",
        description: "Engineered an accessible design system compliant with WCAG 2.1 AA standards, featuring harmonious dark/light mode transitions and keyboard-friendly navigation."
      }
    ],
    technicalChallenges: "Balancing rich editorial visual design with stringent mobile performance constraints, optimizing typography rendering to prevent Cumulative Layout Shift (CLS).",
    outcomes: "Flawless 95+ Core Web Vitals scores, exceptional reader retention, and an authentic brand platform that exemplifies modern web craftsmanship."
  }
};

const ProductDetailPage = () => {
  const { slug } = useParams();
  const product = featuredProducts.find((p) => p.slug === slug);

  if (!product) {
    return <Navigate to="/projects" replace />;
  }

  const deepDive = productDetails[product.slug] || {
    architecturalDeepDive: [],
    technicalChallenges: "Engineering resilient, maintainable web systems tailored to real user needs.",
    outcomes: "Delivering high-performance, measurable improvements in user experience."
  };

  const productSchema = {
    "@type": "SoftwareApplication",
    "@id": `https://yogeshbhavsar.com/projects/${product.slug}/#app`,
    "name": product.title,
    "description": product.description,
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "Web Browser",
    "author": {
      "@type": "Person",
      "@id": "https://yogeshbhavsar.com/#person",
      "name": "Yogesh Bhavsar"
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
        "name": "Selected Work",
        "item": "https://yogeshbhavsar.com/projects"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": product.title,
        "item": `https://yogeshbhavsar.com/projects/${product.slug}`
      }
    ]
  };

  return (
    <>
      <SEO
        title={`${product.title} | Featured Product by Yogesh Bhavsar`}
        description={product.description}
        canonical={`/projects/${product.slug}`}
        schema={[productSchema, breadcrumbsSchema]}
        keywords={`${product.title}, ${product.title} architecture, ${product.stack.join(', ')}, Yogesh Bhavsar product`}
      />

      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-background selection:bg-primary/20">
        <div className="max-w-4xl mx-auto space-y-12">

          {/* Breadcrumb / Back Link */}
          <div>
            <Button asChild variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-foreground">
              <Link to="/projects">
                <ArrowLeft size={16} /> Back to Selected Work
              </Link>
            </Button>
          </div>

          {/* Header */}
          <header className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary" className="bg-primary/10 text-primary text-xs font-semibold">
                {product.category}
              </Badge>
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground border border-border px-2 py-0.5 rounded-full">
                {product.badge}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
              {product.title}
            </h1>

            <p className="text-xl text-primary font-medium">
              {product.tagline}
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed pt-2">
              {product.description}
            </p>

            {product.externalUrl && product.externalUrl !== "#" && (
              <div className="pt-2">
                <Button asChild size="sm" className="gap-2">
                  <a href={product.externalUrl} target="_blank" rel="noopener noreferrer">
                    Visit Live Application <ExternalLink size={14} />
                  </a>
                </Button>
              </div>
            )}
          </header>

          {/* Tech Stack Banner */}
          <Card className="border-border/70 bg-card/60 p-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
              Technologies & Architecture Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {product.stack.map((tech) => (
                <Badge key={tech} variant="outline" className="text-xs px-3 py-1 font-medium bg-secondary/30">
                  {tech}
                </Badge>
              ))}
            </div>
          </Card>

          {/* Architectural Deep Dive */}
          <section className="space-y-6">
            <div className="border-b border-border/70 pb-3">
              <h2 className="text-2xl font-bold text-foreground">Architectural Decisions & Implementation</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Engineering foundations that prioritize speed, user privacy, and scalable maintainability.
              </p>
            </div>

            <div className="space-y-4">
              {deepDive.architecturalDeepDive.map((item, idx) => (
                <Card key={idx} className="border-border/70 bg-card/80 p-6 space-y-2">
                  <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed pl-7">
                    {item.description}
                  </p>
                </Card>
              ))}
            </div>
          </section>

          {/* Challenges & Outcomes */}
          <div className="grid sm:grid-cols-2 gap-6">
            <Card className="border-border/70 bg-muted/20 p-6 space-y-2">
              <h3 className="font-bold text-sm uppercase tracking-wider text-primary flex items-center gap-2">
                <ShieldCheck size={16} /> Engineering Constraints
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {deepDive.technicalChallenges}
              </p>
            </Card>

            <Card className="border-border/70 bg-muted/20 p-6 space-y-2">
              <h3 className="font-bold text-sm uppercase tracking-wider text-green-500 flex items-center gap-2">
                <Zap size={16} /> Measured Results
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {deepDive.outcomes}
              </p>
            </Card>
          </div>

          {/* Related Case Study Banner */}
          {product.caseStudySlug && (
            <Card className="border-primary/25 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-6 sm:p-8 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <Badge variant="outline" className="mb-2 text-primary border-primary/30">Technical Deep Dive</Badge>
                  <h3 className="text-xl font-bold text-foreground">Want to inspect the detailed engineering behind this?</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Read the dedicated technical case study exploring the specific algorithms and trade-offs.
                  </p>
                </div>
                <Button asChild className="gap-2 shrink-0">
                  <Link to={`/case-studies/${product.caseStudySlug}`}>
                    Read Case Study <ArrowRight size={16} />
                  </Link>
                </Button>
              </div>
            </Card>
          )}

          {/* Bottom Navigation */}
          <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Button asChild variant="outline">
              <Link to="/projects">
                <ArrowLeft size={16} className="mr-2" /> All Selected Work
              </Link>
            </Button>
            <Button asChild>
              <Link to="/contact">
                Discuss a Similar Project <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>

        </div>
      </div>
    </>
  );
};

export default ProductDetailPage;
