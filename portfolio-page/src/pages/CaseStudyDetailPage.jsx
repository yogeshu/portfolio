import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  Terminal, 
  Code2, 
  Sparkles,
  Zap,
  BookOpen,
  AlertTriangle
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SEO from '@/components/SEO';
import { engineeringCaseStudies } from '@/data/portfolioData';

const caseStudyArticles = {
  "privacy-first-browser-tools": {
    h1: "Building Privacy-First Browser Tools: Zero-Upload Client-Side Architecture",
    intro: "Most online developer utilities—converters, formatters, and image transformers—force users to transmit source files and images to remote cloud servers. With FrontendYogi (an open web application at frontendyogi.com), I engineered a high-performance architecture where 100% of data processing occurs locally within the browser.",
    problemStatement: "Traditional web utility tools introduce unnecessary latency, server hosting overhead, and privacy risks. By moving processing into the browser, users get instant results without waiting for upload roundtrips.",
    solutionDetails: [
      {
        title: "Web Workers & Non-Blocking Background Processing",
        body: "Heavy computational tasks—such as parsing multi-megabyte JSON payloads, SVG path sanitization, and image quantization—are offloaded to dedicated Web Workers. This ensures the main UI thread stays at a locked 60 frames per second, preventing layout freezes during heavy compute."
      },
      {
        title: "Browser Memory Management & Binary Streams",
        body: "Processing large files in memory risks crashing browser tabs. I implemented Chunked ArrayBuffer streaming using the Streams API and explicit object URL revocation (`URL.revokeObjectURL`) to maintain a minimal memory footprint."
      },
      {
        title: "SEO Architecture for Client-Side Utility Discovery",
        body: "To capture targeted search queries without server-side rendering overhead, each tool features statically pre-rendered landing metadata, Schema.org SoftwareApplication markup, and targeted contextual documentation."
      }
    ],
    tradeoffs: "Pure client-side processing is bound by the client's local CPU and available RAM. For ultra-massive datasets (e.g. multi-gigabyte video encoding), native WebAssembly threads are required, and users on legacy mobile hardware experience longer execution times than high-core cloud servers.",
    takeaway: "By shifting compute to the edge of the user's device, we achieve instant latency, zero server hosting bills, and unbeatable privacy guarantees that enterprise teams trust."
  },
  "image-comparison-ux": {
    h1: "Designing a Better Image Comparison Tool: Synchronized Viewports & Diff UX",
    intro: "While building image utilities on FrontendYogi, I observed that existing web comparison tools failed in fundamental ways: cramped side-by-side viewports, lack of zoom synchronization, and sluggish redraws when panning high-resolution assets.",
    problemStatement: "Developers, QA testers, and designers inspecting visual regressions need to detect 1-pixel differences across large screenshots. Fixed side-by-side viewports force manual scrolling in two separate windows, making subtle font-smoothing or padding regressions impossible to spot.",
    solutionDetails: [
      {
        title: "Unified Mathematical Coordinate Space",
        body: "Engineered a normalized 2D matrix transformation system that synchronizes zoom factor, pan coordinates, and pinch gestures across both before and after images with sub-pixel precision."
      },
      {
        title: "Multi-Mode Visual Diffing Engine",
        body: "Implemented four real-time inspection modes: Split Slider (interactive divider), Onion Skin (variable opacity blending), Difference Heatmap (absolute RGB delta highlighting), and 2-Up Synchronized Pan."
      },
      {
        title: "GPU-Accelerated Canvas & CSS Transforms",
        body: "Leveraged CSS hardware acceleration (`transform: translate3d`) for interactive dragging, and offloaded difference heatmap computation to off-screen HTML5 Canvas buffers to maintain zero-lag responsiveness."
      }
    ],
    tradeoffs: "Pixel-diff rendering across different device pixel ratios (retina 2x vs standard 1x displays) requires normalizing canvas backing stores, adding a minor initial buffer allocation overhead.",
    takeaway: "Intuitive UX for complex developer tools requires combining fluid tactile interaction (gesture physics) with robust rendering performance."
  },
  "local-first-document-workflows": {
    h1: "Building a Local-First Document & Presentation Workflow",
    intro: "An architectural exploration into turning structured documents into interactive presentation decks while keeping sensitive corporate files strictly local on the user's machine.",
    problemStatement: "Creating slides from research notes or technical memos usually requires pasting confidential notes into cloud SaaS presentation platforms, violating enterprise confidentiality policies.",
    solutionDetails: [
      {
        title: "Local-First Storage with OPFS & IndexedDB",
        body: "Leveraging the Origin Private File System (OPFS) and IndexedDB to provide near-native filesystem read/write performance entirely within the browser sandbox."
      },
      {
        title: "Deterministic Document-to-Slide AST Parser",
        body: "Parsing Markdown and structured text into a deterministic Abstract Syntax Tree (AST), automatically chunking headings, bullet trees, and code blocks into responsive slide layouts."
      },
      {
        title: "Offline-First State & Export Pipelines",
        body: "Enabling offline slide generation, local presentation mode with keyboard controls, and client-side vector PDF generation."
      }
    ],
    tradeoffs: "Local-first applications require designing robust schema migration strategies inside IndexedDB, as user data resides across thousands of disparate client browsers without a centralized database schema.",
    takeaway: "Local-first architecture provides the privacy and speed of desktop software with the zero-install accessibility of the modern web."
  },
  "local-photo-processing": {
    h1: "Processing and Organizing Large Photo Collections Locally",
    intro: "Architecting a high-throughput photo organization pipeline using Node.js, TypeScript, worker thread pools, and ONNX Runtime for local machine learning inference.",
    problemStatement: "Users want to organize, cluster, and deduplicate tens of thousands of family or project photos without paying cloud storage subscriptions or uploading personal memories to corporate AI datasets.",
    solutionDetails: [
      {
        title: "Worker Thread Concurrency Pipeline",
        body: "Designed a multi-threaded Node.js processing pipeline that saturates available CPU cores to extract EXIF data, compute perceptual hashes (pHash), and resize thumbnails in parallel."
      },
      {
        title: "Local ONNX Machine Learning Inference",
        body: "Integrated lightweight ONNX face detection models running on local hardware (CPU/Metal) to extract facial bounding boxes and generate vector embeddings for clustering."
      },
      {
        title: "Memory-Safe Stream Architecture",
        body: "Constructed file ingestion around bounded memory streams and backpressure queues, preventing V8 heap out-of-memory errors when batch processing 50,000+ RAW/JPEG photos."
      }
    ],
    tradeoffs: "Local ML inference speed is directly dependent on user hardware capabilities. Running heavy deep learning models on low-spec laptops requires aggressive model quantization (INT8) to balance accuracy against inference latency.",
    takeaway: "With modern TypeScript runtimes and optimized ONNX models, complex computer vision tasks can be run locally and privately without cloud GPUs."
  },
  "react-application-architecture": {
    h1: "Frontend Architecture for Complex Interactive Applications",
    intro: "A technical playbook for structuring production React and Next.js applications that remain fast, testable, and maintainable over years of continuous team development.",
    problemStatement: "As web applications grow, teams frequently suffer from architectural decay: ballooning client bundle sizes, slow re-render cascades, fragile global state, and broken component boundaries.",
    solutionDetails: [
      {
        title: "Strict Server / Client Component Boundaries",
        body: "Enforcing clean separation between data-fetching Server Components (RSC) and minimal, interactive Client Components, slashing unnecessary hydration payloads."
      },
      {
        title: "Pragmatic State Management Hierarchy",
        body: "Classifying application state into Server Cache (React Query/SWR), URL State (search params for shareability), and localized UI State, avoiding bloated monolithic global stores."
      },
      {
        title: "Automated Architectural Guardrails",
        body: "Establishing automated linting boundaries, Husky pre-commit gates, and 90%+ unit test coverage with Jest and React Testing Library to catch regressions before production."
      }
    ],
    tradeoffs: "Rigid architectural boundaries require greater upfront discipline and developer education during onboarding, but pay massive dividends by preventing codebase rewrites as the product scales.",
    takeaway: "High-performance frontend architecture is not about clever tricks—it is about strict boundaries, predictable state flow, and relentless elimination of unnecessary client JavaScript."
  },
  "research-workflow-engineering": {
    h1: "Building a Reliable Research Ingestion Workflow",
    intro: "Designing reliable, fault-tolerant data ingestion, deduplication, and persistence pipelines for multi-source research applications.",
    problemStatement: "Ingesting heterogeneous articles, transcripts, and technical documents often leads to rate-limiting failures, duplicate data records, and fragile data parsing across unstable external APIs.",
    solutionDetails: [
      {
        title: "Resilient Queue with Exponential Backoff",
        body: "Engineered an asynchronous queue system with deterministic rate limiting, jittered retries, and dead-letter queues to handle network instability smoothly."
      },
      {
        title: "Content Normalization & Deduplication",
        body: "Implemented cryptographic content hashing and fuzzy text similarity matching to detect duplicate articles and consolidate research sources."
      },
      {
        title: "Strict Data Sanitization & Privacy Isolation",
        body: "All personal identifiers and credentials are automatically scrubbed and isolated prior to persistence, ensuring compliance with strict data protection standards."
      }
    ],
    tradeoffs: "Comprehensive normalization and validation adds latency to the initial ingestion phase, which must be offset by asynchronous background processing and clear user progress indicators.",
    takeaway: "Reliability in research workflows stems from defensive data ingestion, strict validation schemas, and deterministic failure recovery."
  }
};

const CaseStudyDetailPage = () => {
  const { slug } = useParams();
  const study = engineeringCaseStudies.find((s) => s.slug === slug);

  if (!study) {
    return <Navigate to="/projects" replace />;
  }

  const article = caseStudyArticles[study.slug] || {
    h1: study.title,
    intro: study.summary,
    problemStatement: "Addressing complex engineering constraints in production web environments.",
    solutionDetails: [],
    tradeoffs: "Evaluating performance against engineering complexity.",
    takeaway: "Applying rigorous frontend architecture to deliver tangible business value."
  };

  const caseStudySchema = {
    "@type": "TechArticle",
    "@id": `https://yogeshbhavsar.com/case-studies/${study.slug}/#article`,
    "headline": article.h1,
    "description": study.summary,
    "author": {
      "@type": "Person",
      "@id": "https://yogeshbhavsar.com/#person",
      "name": "Yogesh Bhavsar"
    },
    "publisher": {
      "@type": "Person",
      "@id": "https://yogeshbhavsar.com/#person"
    },
    "inLanguage": "en-US",
    "keywords": study.targetKeywords
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
        "name": study.title,
        "item": `https://yogeshbhavsar.com/case-studies/${study.slug}`
      }
    ]
  };

  return (
    <>
      <SEO
        title={`${study.title} | Case Study by Yogesh Bhavsar`}
        description={study.summary}
        canonical={`/case-studies/${study.slug}`}
        schema={[caseStudySchema, breadcrumbsSchema]}
        keywords={study.targetKeywords}
      />

      <article className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-background selection:bg-primary/20">
        <div className="max-w-4xl mx-auto space-y-12">

          {/* Back link */}
          <div>
            <Button asChild variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-foreground">
              <Link to="/projects">
                <ArrowLeft size={16} /> Back to Selected Work
              </Link>
            </Button>
          </div>

          {/* Article Header */}
          <header className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary" className="bg-primary/10 text-primary text-xs font-semibold flex items-center gap-1.5">
                <Terminal size={13} /> {study.status}
              </Badge>
              <span className="text-xs text-muted-foreground border border-border px-2.5 py-0.5 rounded-full font-medium">
                Author: Yogesh Bhavsar
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
              {article.h1}
            </h1>

            <p className="text-lg text-primary font-medium">
              {study.subtitle}
            </p>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed pt-2">
              {article.intro}
            </p>
          </header>

          {/* Problem Statement */}
          <Card className="border-border/70 bg-card/70 p-6 sm:p-8 space-y-3">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-amber-500" />
              <h2 className="text-xl font-bold text-foreground">The Engineering Problem</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              {article.problemStatement}
            </p>
          </Card>

          {/* Solution & Architectural Breakdown */}
          <section className="space-y-6">
            <div className="border-b border-border/70 pb-3">
              <h2 className="text-2xl font-bold text-foreground">Implementation & Architectural Decisions</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Concrete technical approaches designed to ensure speed, security, and scalability.
              </p>
            </div>

            <div className="space-y-6">
              {article.solutionDetails.map((sol, idx) => (
                <div key={idx} className="p-6 rounded-xl border border-border/70 bg-card space-y-2">
                  <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    {sol.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed pl-7">
                    {sol.body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Trade-offs & Engineering Realism */}
          <Card className="border-border/70 bg-muted/20 p-6 sm:p-8 space-y-3">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
              <Cpu className="h-5 w-5 text-primary" /> Technical Trade-Offs & Constraints
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {article.tradeoffs}
            </p>
          </Card>

          {/* Key Takeaway */}
          <div className="p-6 sm:p-8 rounded-2xl border border-primary/30 bg-primary/5 space-y-3">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
              <Zap className="h-5 w-5 text-primary" /> Core Takeaway for Engineering Teams
            </h2>
            <p className="text-sm sm:text-base text-foreground/90 font-medium leading-relaxed">
              {article.takeaway}
            </p>
          </div>

          {/* Related Service Link */}
          {study.relatedService && (
            <Card className="border-border/70 bg-card p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Related Service Offering</p>
                <h3 className="text-lg font-bold text-foreground mt-0.5">Need help solving similar architectural challenges?</h3>
              </div>
              <Button asChild size="sm" className="gap-2 shrink-0">
                <Link to={study.relatedService.path}>
                  Explore {study.relatedService.name} <ArrowRight size={14} />
                </Link>
              </Button>
            </Card>
          )}

          {/* Bottom Navigation */}
          <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Button asChild variant="outline">
              <Link to="/projects">
                <ArrowLeft size={16} className="mr-2" /> Back to Selected Work
              </Link>
            </Button>
            <Button asChild>
              <Link to="/contact">
                Contact Yogesh Bhavsar <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>

        </div>
      </article>
    </>
  );
};

export default CaseStudyDetailPage;
