import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
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
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';
import YogeshPic from '@/assets/YogeshBhavsar.png';

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

const HomePage = () => {
  // Animation variants for staggering elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
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
    <div className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-start overflow-hidden bg-background py-10 md:py-14">
      
      {/* 1. ENGINEERING BACKGROUND GRID */}
      {/* A subtle grid pattern that signals 'Architecture' */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Background radial gradient for depth */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_800px_at_50%_200px,hsl(var(--primary)/0.14),transparent_65%)]"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container px-4 md:px-6 flex flex-col items-center text-center relative z-10"
      >
        
        {/* 2. AVATAR WITH PHYSICAL CRAFT BEZEL */}
        <motion.div variants={itemVariants} className="relative mb-8 group">
          <Avatar className="w-40 h-40 border-4 border-card shadow-xl ring-2 ring-border/80 relative">
            <AvatarImage src={YogeshPic} alt="Yogesh Bhavsar" className="object-cover" />
            <AvatarFallback className="bg-muted text-4xl font-bold text-muted-foreground">YB</AvatarFallback>
          </Avatar>

          {/* Availability Stamp Badge */}
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8, type: "spring" }}
            className="absolute -bottom-2 -right-2 bg-card border-2 border-border px-2.5 py-1 rounded-full shadow-md flex items-center gap-1.5"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] font-bold text-foreground tracking-wider uppercase">Available</span>
          </motion.div>
        </motion.div>

        {/* 3. AUTHOR & SPECIALIST BADGE */}
        <motion.div variants={itemVariants} className="mb-6">
          <Badge variant="outline" className="px-4 py-1.5 text-xs font-semibold border-primary/40 bg-card/90 text-primary hover:bg-card transition-all cursor-default shadow-xs flex items-center gap-2">
            <BookOpen className="w-3.5 h-3.5 text-primary" />
            <span>Author: &ldquo;Love, Loss and Life&rdquo; · Mechanical Systems to Web Architecture</span>
          </Badge>
        </motion.div>

        {/* 4. HEADLINE - SOLID TYPOGRAPHIC GRAVITY (NO SYNTHETIC GRADIENTS) */}
        <motion.h1 
          variants={itemVariants}
          className="max-w-5xl text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight text-foreground"
        >
          Yogesh Bhavsar <br className="hidden md:block" />
          <span className="text-primary font-bold">
            Senior Frontend Engineer &amp; Technical Architect
          </span>
        </motion.h1>

        {/* 5. SUBTEXT - VALUE PROPOSITION */}
        <motion.p 
          variants={itemVariants}
          className="text-xl text-muted-foreground mb-10 max-w-3xl leading-relaxed"
        >
          Translating <span className="text-foreground font-semibold">15+ years of engineering discipline</span> and mechanical systems thinking into 
          <span className="text-foreground font-semibold"> high-scale, bulletproof</span> React and Next.js platforms.
          <span className="block mt-2 text-sm opacity-85">
            Specializing in frontend architecture governance, Core Web Vitals diagnostics, design systems, and resilient UI delivery.
          </span>
        </motion.p>

        {/* 6. CALL TO ACTION - DUAL PATH */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto">
          <Button asChild size="lg" className="w-full sm:w-auto text-base font-bold h-12 px-8 group bg-primary text-primary-foreground hover:opacity-90 shadow-sm border border-primary/30 transition-all">
            <Link to="/projects">
              View Case Studies 
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto text-base font-semibold h-12 px-8 border-2 border-border/80 hover:bg-card text-foreground transition-all">
            <a href="/Yogesh_Bhavsar-React-Next_Developer.pdf" target="_blank" rel="noopener noreferrer">
              <FileText className="mr-2 h-4 w-4" />
              Download Technical CV
            </a>
          </Button>
        </motion.div>

        {/* 7. TECH STACK STRIP - VISUAL AUTHORITY */}
        <motion.div 
          variants={itemVariants}
          className="mt-16 pt-8 border-t border-border/40 w-full max-w-4xl"
        >
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-6 font-semibold">Powering Applications With</p>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Tech Icons - Using simple SVGs or Images for logos works best here. 
                 Using Lucide icons as placeholders for the 'feel' */}
             
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
                <div className="p-3 bg-muted/50 rounded-xl group-hover:bg-purple-500/10 transition-colors">
                  <Cpu className="w-6 h-6 text-purple-500" />
                </div>
                <span className="text-xs font-medium">CSS</span>
             </div>

             <div className="flex flex-col items-center gap-2 group cursor-pointer">
                <div className="p-3 bg-muted/50 rounded-xl group-hover:bg-blue-600/10 transition-colors">
                  <Code2 className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-xs font-medium">TypeScript</span>
             </div>
              <div className="flex flex-col items-center gap-2 group cursor-pointer">
                <div className="p-3 bg-muted/50 rounded-xl group-hover:bg-yellow-500/10 transition-colors">
                  <Code2 className="w-6 h-6 text-yellow-500" />
                </div>
                <span className="text-xs font-medium">JavaScript</span>
             </div>
          </div>
        </motion.div>

        <motion.section
          variants={itemVariants}
          aria-label="Core Expertise"
          className="mt-20 w-full max-w-6xl text-left"
        >
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">Core Expertise</p>
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
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">Experience Proof</p>
              <h2 className="mt-2 text-2xl font-extrabold text-foreground">Millipixels Interactive (Reach Plc)</h2>
              <p className="mt-2 text-sm font-medium text-muted-foreground">Senior Frontend Engineer</p>
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

        <motion.section
          variants={itemVariants}
          aria-label="Independent Work"
          className="mt-8 w-full max-w-6xl grid gap-4 text-left md:grid-cols-2"
        >
          <article className="rounded-lg border border-border/70 bg-card/80 p-6 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent ring-1 ring-accent/15">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">Independent Work</p>
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
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">Consulting</p>
            <h2 className="mt-2 text-2xl font-extrabold">Available for Fractional Architecture Engagements</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              I take on <a href="https://consult.yogeshbhavsar.com/" className="font-semibold text-primary underline-offset-4 hover:underline">frontend architecture consulting</a>,
              performance-focused audits, and codebase reviews for teams that need senior React and Next.js judgment without adding full-time headcount.
            </p>
            <a
              href="https://consult.yogeshbhavsar.com/"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-colors hover:bg-primary/90"
            >
              Explore Consulting <ArrowRight className="h-4 w-4" />
            </a>
          </article>
        </motion.section>

        <motion.section
          variants={itemVariants}
          aria-label="Speaking and Creative Identity"
          className="mt-8 mb-10 w-full max-w-6xl grid gap-4 text-left md:grid-cols-[1.1fr_0.9fr]"
        >
          <article className="rounded-lg border border-border/70 bg-card/80 p-6 shadow-sm">
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/15">
              <PenLine className="h-5 w-5" />
            </div>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">Speaking & Writing</p>
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

        {/* 8. FLOATING SOCIALS */}
        <motion.div 
          variants={itemVariants}
          className="fixed left-6 bottom-0 hidden xl:flex flex-col gap-4 items-center after:content-[''] after:w-[1px] after:h-24 after:bg-border after:mt-4"
        >
          <a href="https://github.com/yogeshu" target="_blank" rel="noopener noreferrer" className="p-2 hover:-translate-y-1 transition-transform text-muted-foreground hover:text-primary">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/in/yogeshbhavsarui" target="_blank" rel="noopener noreferrer" className="p-2 hover:-translate-y-1 transition-transform text-muted-foreground hover:text-blue-600">
            <Linkedin className="w-6 h-6" />
          </a>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default HomePage;
