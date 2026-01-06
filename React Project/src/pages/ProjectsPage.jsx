import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  Users
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';

// Import your assets
import project1 from '@/assets/gausamriddhi_website.png';
import project2 from '@/assets/gausamriddhi_portal.png';
import project3 from '@/assets/imp.png';
import project4 from '@/assets/placeholder.jpg'; // Assuming you have a placeholder
import project5 from '@/assets/clix.png';
import project6 from '@/assets/clix_dashboard.png';
import project7 from '@/assets/sangam.png';

// Enhanced Data Structure for "Case Study" Layout
const projects = [
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
    links: { live: "#", repo: "#" } // Internal
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
    links: { live: "#", repo: "#" } // Internal
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

  return (
    <div className="min-h-screen bg-background py-16 px-4 sm:px-6 lg:px-8">
      
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
          Highlighting architectural decisions, performance optimization, and scalable UI engineering.
        </p>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {["All", "Consumer", "Enterprise", "EdTech", "Startup"].map((cat) => (
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

      {/* 2. Projects Grid */}
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
                      {project.category}
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

                <CardFooter className="border-t bg-muted/20 pt-4 pb-4 px-6 flex gap-3">
                  {/* Smart Button Logic for Live/Repo/Internal */}
                  
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
                </CardFooter>

              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ProjectsPage;