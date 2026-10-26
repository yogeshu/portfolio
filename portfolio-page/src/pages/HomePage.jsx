import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Github, 
  Linkedin, 
  ArrowRight, 
  FileText, 
  BookOpen, 
  Code2, 
  Terminal, 
  Cpu, 
  Boxes, 
  Briefcase, 
  Gauge, 
  Layers, 
  PenLine, 
  ShieldCheck, 
  Sparkles,
  Globe,
  Workflow
} from 'lucide-react';
import { Link } from 'react-router-dom';
import YogeshPic from '@/assets/YogeshBhavsar.png';
import YogeshPic160 from '@/assets/YogeshBhavsar-160.webp';
import YogeshPic320 from '@/assets/YogeshBhavsar-320.webp';
import SEO from '@/components/SEO';
import { logCtaClick } from '@/utils/analytics';

const expertiseCards = [
  {
    icon: Layers,
    label: 'Architecture',
    title: 'Scalable Frontend Architecture',
    description: 'React, Next.js App Router, Server Components, SSR, SSG, ISR, Edge Runtime, and design system foundations.'
  },
  {
    icon: Gauge,
    label: 'Performance',
    title: 'Core Web Vitals Engineering',
    description: 'INP, hydration cost, bundle splitting, image strategy, caching, and rendering diagnostics for production apps.'
  },
  {
    icon: Boxes,
    label: 'Systems',
    title: 'Component Architecture',
    description: 'Accessible UI patterns, reusable primitives, monorepo-friendly structure, and product-minded delivery.'
  }
];

const commercialServices = [
  {
    icon: Globe,
    title: "Web Developer for Small Business",
    description: "Custom, high-speed websites for small businesses and founders. Built with modern React standards, mobile-first responsiveness, and built-in technical SEO.",
    link: "/web-development",
    action: "Hire Small Business Web Developer"
  },
  {
    icon: Code2,
    title: "Freelance Frontend Engineering",
    description: "Senior frontend capacity for startups and engineering teams. Delivering feature roadmaps, component libraries, and clean TypeScript code in Agile sprints.",
    link: "/frontend-development",
    action: "Hire for Sprints"
  },
  {
    icon: Terminal,
    title: "Production React & Next.js",
    description: "App Router architecture, React Server Components (RSC), SSR/SSG caching, and migration from legacy SPAs to high-speed Next.js platforms.",
    link: "/react-nextjs-development",
    action: "View Next.js Solutions"
  },
  {
    icon: Gauge,
    title: "Performance & Architecture Consulting",
    description: "Fractional leadership, Core Web Vitals optimization (INP/LCP fixes), codebase health audits, and guidance for engineering teams scaling UI systems.",
    link: "/frontend-consulting",
    action: "Request Codebase Audit"
  }
];

const HomePage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <>
      <SEO
        title="Yogesh Bhavsar | Senior Frontend Engineer & Technical Architect"
        description="Senior Frontend Engineer with 7+ years of experience in React, Next.js, and scalable UI architecture. Available for small business web development, freelance frontend engineering, and performance consulting."
        canonical="/"
        keywords="Yogesh Bhavsar, Senior Frontend Engineer, Technical Architect, React Developer, Next.js Developer, Freelance Frontend Developer, Web Developer for Small Business, Core Web Vitals Consultant"
      />

      <div className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-start overflow-hidden bg-background py-10 md:py-14">
        
        {/* Background Grid */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_800px_at_50%_200px,hsl(var(--primary)/0.14),transparent_65%)]"></div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="container px-4 md:px-6 flex flex-col items-center text-center relative z-10"
        >
          
          {/* Avatar with Status */}
          <motion.div variants={itemVariants} className="relative mb-8 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            
            <div className="w-40 h-40 rounded-full border-4 border-background shadow-2xl relative overflow-hidden bg-muted">
              <picture>
                <source 
                  type="image/webp" 
                  srcSet={`${YogeshPic160} 160w, ${YogeshPic320} 320w`} 
                  sizes="(max-width: 640px) 152px, 160px"
                />
                <img 
                  src={YogeshPic160} 
                  srcSet={`${YogeshPic160} 160w, ${YogeshPic320} 320w`}
                  sizes="(max-width: 640px) 152px, 160px"
                  alt="Yogesh Bhavsar — Senior Frontend Engineer and Technical Architect" 
                  width={160}
                  height={160}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="w-full h-full object-cover" 
                />
              </picture>
            </div>

            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8, type: "spring" }}
              className="absolute -bottom-2 -right-2 bg-background border border-border p-2 rounded-full shadow-lg"
            >
              <div className="bg-green-500 w-4 h-4 rounded-full animate-pulse" title="Available for work & projects" />
            </motion.div>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            variants={itemVariants}
            className="max-w-5xl text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight"
          >
            Yogesh Bhavsar <br className="hidden md:block" />
            <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-accent">
              Senior Frontend Engineer & Technical Architect
            </span>
          </motion.h1>

          {/* Subtext Value Proposition */}
          <motion.p 
            variants={itemVariants}
            className="text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed"
          >
            I help companies, founders, and engineering teams ship
            <span className="text-foreground font-semibold"> scalable</span>,
            <span className="text-foreground font-semibold"> high-performance </span>
            React and Next.js applications.
            <span className="block mt-2 text-sm opacity-80">
              Specializing in frontend architecture, Core Web Vitals, accessibility, and maintainable UI systems.
            </span>
          </motion.p>

          {/* Primary Calls to Action */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto">
            <Button asChild size="lg" className="w-full sm:w-auto text-lg h-12 px-8 group bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20">
              <Link 
                to="/projects"
                onClick={() => logCtaClick('home_hero_case_studies', '/projects')}
              >
                View Case Studies 
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto text-lg h-12 px-8 border-2 hover:bg-muted/50">
              <a href="/Yogesh_Bhavsar-React-Next_Developer.pdf" target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2 h-5 w-5" />
                Download CV
              </a>
            </Button>
          </motion.div>

          {/* Tech Stack Strip */}
          <motion.div 
            variants={itemVariants}
            className="mt-14 pt-8 border-t border-border/40 w-full max-w-4xl"
          >
            <p className="text-sm text-muted-foreground uppercase tracking-wider mb-6 font-semibold">Powering Applications With</p>
            
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
               <div className="flex flex-col items-center gap-2 group cursor-pointer">
                  <div className="p-3 bg-muted/50 rounded-xl group-hover:bg-blue-500/10 transition-colors">
                    <Code2 className="w-6 h-6 text-blue-500" />
                  </div>
                  <span className="text-xs font-medium">React</span>
               </div>

               <div className="flex flex-col items-center gap-2 group cursor-pointer">
                  <div className="p-3 bg-muted/50 rounded-xl group-hover:bg-black/10 dark:group-hover:bg-white/10 transition-colors">
                    <Terminal className="w-6 h-6 text-foreground" />
                  </div>
                  <span className="text-xs font-medium">Next.js</span>
               </div>

               <div className="flex flex-col items-center gap-2 group cursor-pointer">
                  <div className="p-3 bg-muted/50 rounded-xl group-hover:bg-blue-600/10 transition-colors">
                    <Code2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="text-xs font-medium">TypeScript</span>
               </div>

               <div className="flex flex-col items-center gap-2 group cursor-pointer">
                  <div className="p-3 bg-muted/50 rounded-xl group-hover:bg-purple-500/10 transition-colors">
                    <Cpu className="w-6 h-6 text-purple-500" />
                  </div>
                  <span className="text-xs font-medium">Tailwind CSS</span>
               </div>

               <div className="flex flex-col items-center gap-2 group cursor-pointer">
                  <div className="p-3 bg-muted/50 rounded-xl group-hover:bg-yellow-500/10 transition-colors">
                    <Code2 className="w-6 h-6 text-yellow-500" />
                  </div>
                  <span className="text-xs font-medium">JavaScript</span>
               </div>
            </div>
          </motion.div>

          {/* COMMERCIAL SERVICES SECTION */}
          <motion.section
            variants={itemVariants}
            aria-label="Commercial Services & Client Solutions"
            className="mt-20 w-full max-w-6xl text-left"
          >
            <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
                  <Sparkles size={14} /> Services & Solutions
                </p>
                <h2 className="mt-2 text-3xl font-extrabold text-foreground md:text-4xl">How I Can Help Your Business</h2>
              </div>
              <p className="max-w-xl text-sm leading-relaxed text-muted-foreground md:text-right">
                Whether you are a founder building your first web presence or an engineering team scaling a production product.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {commercialServices.map((service) => (
                <article
                  key={service.title}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-border/70 bg-card/80 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-accent to-transparent opacity-80" />
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold leading-snug text-foreground">{service.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-border/50">
                    <Link
                      to={service.link}
                      className="inline-flex items-center text-sm font-bold text-primary hover:text-primary/90 group-hover:underline gap-1.5"
                    >
                      <span>{service.action}</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </motion.section>

          {/* Core Expertise Cards */}
          <motion.section
            variants={itemVariants}
            aria-label="Core Technical Expertise"
            className="mt-16 w-full max-w-6xl text-left"
          >
            <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">Core Technical Focus</p>
                <h2 className="mt-2 text-3xl font-extrabold text-foreground md:text-4xl">What I Build</h2>
              </div>
              <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-right">
                Senior frontend work that sits where architecture, performance, accessibility, and product delivery meet.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {expertiseCards.map((card) => (
                <article
                  key={card.title}
                  className="group relative overflow-hidden rounded-lg border border-border/70 bg-card/80 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-accent to-transparent opacity-70" />
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/15 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <card.icon className="h-5 w-5" />
                    </div>
                    <span className="rounded-full border border-border bg-muted/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                      {card.label}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold leading-snug text-foreground">{card.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{card.description}</p>
                </article>
              ))}
            </div>
          </motion.section>

          {/* Experience Proof */}
          <motion.section
            variants={itemVariants}
            aria-label="Experience Proof"
            className="mt-8 w-full max-w-6xl overflow-hidden rounded-lg border border-border/70 bg-card/80 text-left shadow-sm"
          >
            <div className="grid gap-0 md:grid-cols-[0.85fr_1.15fr]">
              <div className="border-b border-border/70 bg-muted/30 p-6 md:border-b-0 md:border-r">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-foreground text-background">
                  <Briefcase className="h-5 w-5" />
                </div>
                <p className="text-xs font-bold uppercase tracking-wider text-primary">Experience Proof</p>
                <h2 className="mt-2 text-2xl font-extrabold text-foreground">Millipixels Interactive (Reach Plc)</h2>
                <p className="mt-2 text-sm font-medium text-muted-foreground">Senior Frontend Specialist • Technical Ownership & Architecture</p>
              </div>
              <div className="p-6">
                <p className="text-base leading-relaxed text-muted-foreground">
                  I work on frontend systems where product quality, rendering strategy, accessibility, and long-term maintainability matter.
                  My day-to-day vocabulary includes React architecture, Next.js performance, design systems, and practical tradeoffs for teams shipping at speed.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {['Rendering strategy', 'Accessible UI', 'Team-scale systems'].map((item) => (
                    <div key={item} className="rounded-lg border border-border/70 bg-background/60 px-4 py-3 text-sm font-semibold text-foreground">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* Independent Work & Consulting Callouts */}
          <motion.section
            variants={itemVariants}
            aria-label="Independent Work"
            className="mt-8 w-full max-w-6xl grid gap-4 text-left md:grid-cols-2"
          >
            <article className="rounded-lg border border-border/70 bg-card/80 p-6 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent ring-1 ring-accent/15">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <p className="text-xs font-bold uppercase tracking-wider text-primary">Independent Work</p>
              <h2 className="mt-2 text-2xl font-extrabold">Products Built as Solo Engineer</h2>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                Projects like Her Sanctuary and Frontendyogi are treated as engineering case studies: product constraints, privacy-first architecture,
                data handling, UX clarity, and sustainable frontend structure.
              </p>
            </article>

            <article className="rounded-lg border border-primary/25 bg-primary/5 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                <Sparkles className="h-5 w-5" />
              </div>
              <p className="text-xs font-bold uppercase tracking-wider text-primary">Consulting</p>
              <h2 className="mt-2 text-2xl font-extrabold">Available for Fractional Architecture Engagements</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                I take on <Link to="/frontend-consulting" className="font-semibold text-primary underline-offset-4 hover:underline">frontend architecture consulting</Link>,
                performance-focused audits, and codebase reviews for teams that need senior React and Next.js judgment without adding full-time headcount.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild size="sm">
                  <Link to="/frontend-consulting">
                    Explore Consulting Details <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <a href="https://consult.yogeshbhavsar.com/" target="_blank" rel="noopener noreferrer">
                    Dedicated Consulting Portal ↗
                  </a>
                </Button>
              </div>
            </article>
          </motion.section>

          {/* Speaking and Creative Identity */}
          <motion.section
            variants={itemVariants}
            aria-label="Speaking and Creative Identity"
            className="mt-8 mb-10 w-full max-w-6xl grid gap-4 text-left md:grid-cols-[1.1fr_0.9fr]"
          >
            <article className="rounded-lg border border-border/70 bg-card/80 p-6 shadow-sm">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/15">
                <PenLine className="h-5 w-5" />
              </div>
              <p className="text-xs font-bold uppercase tracking-wider text-primary">Speaking & Writing</p>
              <h2 className="mt-2 text-2xl font-extrabold">Technical Ideas With a Point of View</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                I write and speak about local-first software architecture, privacy-first frontend decisions, Core Web Vitals, and scalable frontend systems for small teams.
              </p>
            </article>

            <article className="rounded-lg border border-border/70 bg-muted/30 p-6 shadow-sm">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-background text-primary ring-1 ring-border">
                <BookOpen className="h-5 w-5" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Beyond Engineering</p>
              <h2 className="mt-2 text-2xl font-extrabold">Creative Identity</h2>
              <div className="mt-4 space-y-4">
                <div>
                  <h3 className="text-base font-semibold">Author of "Love, Loss and Life"</h3>
                  <p className="mt-1 text-sm text-muted-foreground">A creative body of work kept separate from the engineering credibility path.</p>
                </div>
                <div>
                  <h3 className="text-base font-semibold">Makhanchor - Hinglish Storytelling</h3>
                  <p className="mt-1 text-sm text-muted-foreground">A distinct creative identity connected as background context, not mixed into the technical positioning.</p>
                </div>
              </div>
            </article>
          </motion.section>

          {/* Floating Socials */}
          <motion.div 
            variants={itemVariants}
            className="fixed left-6 bottom-0 hidden xl:flex flex-col gap-4 items-center after:content-[''] after:w-[1px] after:h-24 after:bg-border after:mt-4"
          >
            <a 
              href="https://github.com/yogeshu" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="GitHub Profile"
              className="p-2 hover:-translate-y-1 transition-transform text-muted-foreground hover:text-primary"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com/in/yogeshbhavsarui" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn Profile"
              className="p-2 hover:-translate-y-1 transition-transform text-muted-foreground hover:text-blue-600"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </motion.div>

        </motion.div>
      </div>
    </>
  );
};

export default HomePage;
