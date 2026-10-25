import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Github, 
  ExternalLink, 
  Lock, 
  Cpu, 
  Zap, 
  Database, 
  Layout, 
  BarChart3, 
  ShieldCheck, 
  Search, 
  Users,
  ArrowRight,
  Terminal,
  BookOpen,
  Globe
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import SEO from '@/components/SEO';

// Assets
import project1 from '@/assets/gausamriddhi_website.png';
import project2 from '@/assets/gausamriddhi_portal.png';
import project3 from '@/assets/imp.png';
import project4 from '@/assets/placeholder.jpg';
import project5 from '@/assets/clix.png';
import project6 from '@/assets/clix_dashboard.png';
import project7 from '@/assets/sangam.png';

import { engineeringCaseStudies, privateWorkCaseStudies } from '@/data/portfolioData';

// Complete Projects List: Products being built + All Major Career Projects
const projects = [
  // Products We Are Building
  {
    id: "frontendyogi",
    title: "FrontendYogi",
    category: "Products",
    badge: "Open Website • Live",
    image: project4,
    challenge: "Developers, designers, and creators need high-performance browser tools for device mockups, image diffing, and file conversions without server upload latency.",
    solution: "Built FrontendYogi as an open, client-side developer workstation running 100% in-browser using Web Workers, HTML5 Canvas, and modern web APIs.",
    metrics: [
      { label: "Status", value: "Open Web App", icon: <Globe className="w-3 h-3" /> },
      { label: "Processing", value: "In-Browser", icon: <Cpu className="w-3 h-3" /> }
    ],
    stack: ["React", "TypeScript", "Next.js", "Web Workers", "Canvas API", "Tailwind CSS"],
    links: { live: "https://frontendyogi.com/", repo: "https://frontendyogi.com/" },
    detailUrl: "/projects/frontendyogi",
    isOpenProduct: true
  },
  {
    id: "writer-mirror",
    title: "Writer Mirror",
    category: "Products",
    image: project4,
    challenge: "Writers need a focused, distraction-free editing environment with real-time text diagnostics, readability scoring, and offline reliability.",
    solution: "Engineered a minimalist rich text workspace with asynchronous syllable analysis, Flesch readability indices, and IndexedDB persistence.",
    metrics: [
      { label: "Latency", value: "Zero Delay", icon: <Zap className="w-3 h-3" /> },
      { label: "Storage", value: "Local-First", icon: <Database className="w-3 h-3" /> }
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "IndexedDB", "Framer Motion"],
    links: { live: "#", repo: "#" },
    detailUrl: "/projects/writer-mirror"
  },
  {
    id: "her-sanctuary",
    title: "Her Sanctuary",
    category: "Products",
    image: project4,
    challenge: "Creating an end-to-end editorial publication and community sanctuary with accessible typography and instant mobile loading.",
    solution: "Designed an empathetic content architecture with Next.js SSG, WCAG 2.1 AA accessible theming, and Core Web Vitals optimization.",
    metrics: [
      { label: "SEO / Speed", value: "95+ Score", icon: <Search className="w-3 h-3" /> },
      { label: "Accessibility", value: "WCAG AA", icon: <Layout className="w-3 h-3" /> }
    ],
    stack: ["Next.js", "React", "Tailwind CSS", "Contentlayer", "SEO Schema"],
    links: { live: "#", repo: "#" },
    detailUrl: "/projects/her-sanctuary"
  },

  // Major Career & Client Projects (Preserved in full fidelity)
  {
    id: "jio-website",
    title: "Jio Gau Samriddhi",
    category: "Consumer",
    image: project1,
    challenge: "Need for high-quality lead generation and expanding digital presence across rural India.",
    solution: "Architected a high-performance Next.js site with modular CSS and JIO Design System integration.",
    metrics: [
      { label: "SEO Score", value: "100%", icon: <Search className="w-3 h-3" /> },
      { label: "Performance", value: "High", icon: <Zap className="w-3 h-3" /> }
    ],
    stack: ["Next.js", "React", "Context API", "Jio Design System"],
    links: { live: "https://www.jiogausamriddhi.com/", repo: "#" }
  },
  {
    id: "cattle-dashboard",
    title: "Cattle Management Portal",
    category: "Enterprise",
    image: project2,
    challenge: "Tracking complex livestock data with role-based access for farmers and internal teams.",
    solution: "Engineered a scalable React system with Redux state management and automated Jest testing.",
    metrics: [
      { label: "Data Integrity", value: "Strict", icon: <Database className="w-3 h-3" /> },
      { label: "Testing", value: "Jest", icon: <ShieldCheck className="w-3 h-3" /> }
    ],
    stack: ["React", "Redux", "Firebase", "Material UI", "Jest"],
    links: { live: "https://www.jiogausamriddhi.com/portal/login", repo: "#" }
  },
  {
    id: "sangam-biodata",
    title: "Sangam Biodata",
    category: "Startup",
    image: project7,
    challenge: "Simplifying the creation of culturally relevant matrimonial biodatas on mobile devices.",
    solution: "Built a template-based generator with Firebase Auth and client-side PDF export logic.",
    metrics: [
      { label: "Auth", value: "Secure", icon: <Users className="w-3 h-3" /> },
      { label: "UX", value: "Mobile-First", icon: <Layout className="w-3 h-3" /> }
    ],
    stack: ["React", "Framer Motion", "Firebase", "PDF Gen"],
    links: { live: "https://sangam-biodata.vercel.app/", repo: "https://github.com/yogeshu/sangam-biodata" }
  },
  {
    id: "imp-dashboard",
    title: "Krishi Bazaar (IMP)",
    category: "Enterprise",
    image: project3,
    challenge: "Enabling farmers and retailers to buy/sell agricultural inputs in a unified marketplace.",
    solution: "Developed a responsive Admin Dashboard handling complex inventory and transaction flows.",
    metrics: [
      { label: "Type", value: "B2B/B2C", icon: <Layout className="w-3 h-3" /> },
      { label: "Access", value: "Internal", icon: <Lock className="w-3 h-3" /> }
    ],
    stack: ["React", "Redux", "Material UI", "Rest API"],
    links: { live: "#", repo: "#" }
  },
  {
    id: "jio-admin",
    title: "Jio Admin Analytics",
    category: "Enterprise",
    image: project4,
    challenge: "Managing vast amounts of cattle data and analyzing user performance metrics.",
    solution: "Created a comprehensive dashboard with data visualization and responsive design principles.",
    metrics: [
      { label: "Analytics", value: "Real-time", icon: <BarChart3 className="w-3 h-3" /> },
      { label: "Stack", value: "Next.js", icon: <Cpu className="w-3 h-3" /> }
    ],
    stack: ["Next.js", "React", "Material UI", "Context API"],
    links: { live: "#", repo: "#" }
  },
  {
    id: "clix-dashboard",
    title: "CLIx Dashboard",
    category: "EdTech",
    image: project6,
    challenge: "Educators needed a way to track student progress and engagement effectively.",
    solution: "Built a data analytics platform using Redux for state management and Material UI.",
    metrics: [
      { label: "User Base", value: "Faculty", icon: <Users className="w-3 h-3" /> },
      { label: "UI", value: "Responsive", icon: <Layout className="w-3 h-3" /> }
    ],
    stack: ["React", "Redux", "Material UI", "Charts"],
    links: { live: "https://clixdashboard.tiss.edu/home", repo: "#" }
  },
  {
    id: "tiss-library",
    title: "TISS E-Library",
    category: "EdTech",
    image: project5,
    challenge: "Providing students access to academic resources across various devices.",
    solution: "Developed a responsive interface integrated with a Django backend.",
    metrics: [
      { label: "Backend", value: "Django", icon: <Database className="w-3 h-3" /> },
      { label: "Legacy", value: "Migration", icon: <Cpu className="w-3 h-3" /> }
    ],
    stack: ["HTML/CSS", "Bootstrap", "Django", "jQuery"],
    links: { live: "https://clixoer.tiss.edu/home/e-library", repo: "#" }
  }
];

const ProjectsPage = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  const projectsSchema = {
    "@type": "CollectionPage",
    "@id": "https://yogeshbhavsar.com/projects/#collection",
    "name": "Selected Work & Engineering Case Studies — Yogesh Bhavsar",
    "description": "Products built, engineering problems solved, and production systems improved by Yogesh Bhavsar.",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": projects.map((p, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "name": p.title,
        "description": p.solution
      }))
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
      }
    ]
  };

  return (
    <>
      <SEO
        title="Selected Work & Engineering Case Studies | Yogesh Bhavsar"
        description="Products built, engineering problems solved, and systems made better by Senior Frontend Engineer Yogesh Bhavsar. Featuring FrontendYogi, Writer Mirror, Her Sanctuary, Jio platforms, and technical case studies."
        canonical="/projects"
        schema={[projectsSchema, breadcrumbsSchema]}
        keywords="Yogesh Bhavsar projects, frontend developer portfolio, Jio Gau Samriddhi, FrontendYogi, Writer Mirror, Her Sanctuary, React developer portfolio"
      />

      <div className="min-h-screen bg-background py-16 px-4 sm:px-6 lg:px-8 selection:bg-primary/20">
        
        {/* 1. Header with Senior Positioning */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Selected Work
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Products I've built, engineering problems I've solved, and systems I've helped make better.
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {["All", "Products", "Consumer", "Enterprise", "EdTech", "Startup"].map((cat) => (
              <Button
                key={cat}
                variant={filter === cat ? "default" : "outline"}
                onClick={() => setFilter(cat)}
                className="rounded-full px-5 text-sm transition-all duration-300"
              >
                {cat}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* 2. Projects Grid (Exact Original Layout & Card Design) */}
        <motion.div 
          layout
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={project.id}
              >
                <Card className="h-full flex flex-col overflow-hidden border-muted/60 shadow-lg hover:shadow-xl transition-all duration-300 group bg-card">
                  
                  {/* Image Section */}
                  <div className="relative h-56 overflow-hidden bg-muted">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute bottom-4 left-4 z-20">
                      <Badge className="bg-white/10 backdrop-blur-md text-white border-white/20 hover:bg-white/20">
                        {project.badge || project.category}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-2xl">{project.title}</CardTitle>
                    </div>
                  </CardHeader>

                  <CardContent className="flex-grow space-y-6 pt-2">
                    
                    {/* Challenge & Solution Blocks */}
                    <div className="space-y-3">
                       <div className="p-3 bg-red-500/5 rounded-lg border border-red-500/10 dark:bg-red-900/10">
                          <p className="text-[10px] font-bold text-red-600 dark:text-red-400 uppercase tracking-wider mb-1">Challenge</p>
                          <p className="text-sm text-muted-foreground leading-snug">{project.challenge}</p>
                       </div>
                       <div className="p-3 bg-green-500/5 rounded-lg border border-green-500/10 dark:bg-green-900/10">
                          <p className="text-[10px] font-bold text-green-600 dark:text-green-400 uppercase tracking-wider mb-1">Solution</p>
                          <p className="text-sm text-foreground leading-snug">{project.solution}</p>
                       </div>
                    </div>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-2 gap-3">
                      {project.metrics.map((metric, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-2 rounded-lg bg-secondary/40 border border-secondary">
                          <div className="p-1.5 rounded-full bg-background shadow-sm text-primary">
                            {metric.icon}
                          </div>
                          <div>
                            <p className="text-sm font-bold leading-none">{metric.value}</p>
                            <p className="text-[10px] text-muted-foreground uppercase">{metric.label}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Stack Tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.stack.map((tech) => (
                        <span key={tech} className="px-2 py-1 text-[11px] font-medium rounded-md bg-muted text-foreground/80 border">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="border-t bg-muted/20 pt-4 pb-4 px-6 flex flex-col gap-3">
                    <div className="w-full flex gap-3">
                      {project.isOpenProduct ? (
                        <>
                          <Button size="sm" asChild className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 font-medium">
                            <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                              <Globe className="w-4 h-4 mr-2" /> Open Website
                            </a>
                          </Button>
                          {project.detailUrl && (
                            <Button variant="outline" size="sm" asChild className="flex-1">
                              <Link to={project.detailUrl}>
                                <ExternalLink className="w-4 h-4 mr-2" /> Architecture
                              </Link>
                            </Button>
                          )}
                        </>
                      ) : (
                        <>
                          {project.links.repo !== "#" ? (
                            <Button variant="outline" size="sm" asChild className="flex-1">
                              <a href={project.links.repo} target="_blank" rel="noopener noreferrer">
                                <Github className="w-4 h-4 mr-2" /> Code
                              </a>
                            </Button>
                          ) : (
                            <Button variant="ghost" size="sm" disabled className="flex-1 opacity-50 cursor-not-allowed">
                              <Lock className="w-3 h-3 mr-2" /> Private Repo
                            </Button>
                          )}

                          {project.links.live !== "#" ? (
                            <Button size="sm" asChild className="flex-1 bg-primary/10 text-primary hover:bg-primary/20 hover:text-primary border border-primary/20 shadow-none">
                              <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                              </a>
                            </Button>
                          ) : (
                            <Button variant="ghost" size="sm" disabled className="flex-1 opacity-50 cursor-not-allowed">
                               <Lock className="w-3 h-3 mr-2" /> Internal Access
                            </Button>
                          )}
                        </>
                      )}
                    </div>

                    {!project.isOpenProduct && project.detailUrl && (
                      <div className="w-full text-right pt-1">
                        <Link 
                          to={project.detailUrl}
                          className="text-xs text-primary font-semibold hover:underline inline-flex items-center gap-1"
                        >
                          <span>Explore Product Architecture Details</span>
                          <ArrowRight size={12} />
                        </Link>
                      </div>
                    )}
                  </CardFooter>

                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* 3. SECTION 02 — ENGINEERING CASE STUDIES (The thinking behind the build) */}
        <section className="max-w-7xl mx-auto mt-28 space-y-8 pt-12 border-t border-border/70" aria-label="Engineering Case Studies">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-primary">02 — Technical Depth</p>
              <h2 className="text-3xl font-extrabold text-foreground mt-1">Engineering Case Studies</h2>
              <p className="text-sm text-muted-foreground mt-1">The thinking behind the build.</p>
            </div>
            <p className="text-sm text-muted-foreground max-w-md sm:text-right">
              Detailed technical analyses around real problems solved: client-side processing, image diff UX, and local-first workflows.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {engineeringCaseStudies.map((study) => (
              <Card key={study.slug} className="flex flex-col justify-between border-border/70 bg-card/80 p-6 hover:border-primary/40 transition-colors">
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-semibold text-primary uppercase tracking-wider flex items-center gap-1">
                      <Terminal size={12} /> {study.status}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground hover:text-primary transition-colors leading-snug">
                    <Link to={`/case-studies/${study.slug}`}>
                      {study.title}
                    </Link>
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {study.summary}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-border/50">
                  <Link
                    to={`/case-studies/${study.slug}`}
                    className="inline-flex items-center text-xs font-semibold text-primary hover:underline gap-1"
                  >
                    <span>Read Case Study</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* 4. SECTION 03 — SELECTED PRIVATE WORK (Engineering beyond the public portfolio) */}
        <section className="max-w-7xl mx-auto mt-20 space-y-8 pt-12 border-t border-border/70" aria-label="Selected Private Work">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-primary">03 — Enterprise Rigor</p>
              <h2 className="text-3xl font-extrabold text-foreground mt-1">Selected Private Work</h2>
              <p className="text-sm text-muted-foreground mt-1">Engineering beyond the public portfolio.</p>
            </div>
            <p className="text-sm text-muted-foreground max-w-md sm:text-right">
              Anonymized case studies focusing on constraints, trade-offs, and technical decisions without disclosing proprietary employer code.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {privateWorkCaseStudies.map((study) => (
              <Card key={study.id} className="border-border/80 bg-muted/20 p-6 sm:p-8 space-y-4">
                <Badge variant="outline" className="text-xs font-semibold text-primary border-primary/30 w-fit">
                  <Lock size={12} className="mr-1.5" /> {study.badge}
                </Badge>
                <h3 className="text-2xl font-bold text-foreground">{study.title}</h3>
                <p className="text-sm text-foreground/90 font-medium leading-relaxed">
                  {study.context}
                </p>

                <div className="space-y-3 pt-2">
                  <div className="p-3 bg-red-500/5 rounded-lg border border-red-500/10">
                    <p className="text-[10px] font-bold text-red-500 uppercase tracking-wider mb-1">The Challenge</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{study.challenge}</p>
                  </div>

                  <div className="p-3 bg-green-500/5 rounded-lg border border-green-500/10">
                    <p className="text-[10px] font-bold text-green-600 dark:text-green-400 uppercase tracking-wider mb-1">My Contribution</p>
                    <ul className="space-y-1">
                      {study.contribution.map((item, i) => (
                        <li key={i} className="text-xs text-muted-foreground flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-2 text-xs text-muted-foreground border-t border-border/40">
                  <span className="font-bold text-foreground">Verified Evidence:</span> {study.evidence}
                </div>
              </Card>
            ))}
          </div>
        </section>

      </div>
    </>
  );
};

export default ProjectsPage;
