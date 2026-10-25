import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Briefcase, 
  Calendar, 
  CheckCircle2, 
  Building2, 
  Code2,
  Trophy,
  ArrowRight
} from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';

const experiences = [
  {
    company: "Millipixels Interactive (A Dentsu Group Company / Reach Plc)",
    role: "Senior Frontend Specialist",
    duration: "Aug 2026 - Present",
    current: true,
    description: "Technical Ownership: Own front-end technical direction across complex initiatives, making key decisions around architecture, scalability, maintainability, and engineering standards.",
    responsibilities: [
      "Own front-end technical direction across enterprise digital publishing platforms (Reach Plc), establishing component contracts and rendering strategies.",
      "Lead architectural decisions across React, Next.js, and TypeScript codebases to ensure 100% visual regression test compliance and WCAG accessibility standards.",
      "Spearhead performance engineering initiatives, eliminating hydration overhead and achieving consistent 90+ mobile Core Web Vitals scores.",
      "Mentor senior and mid-level developers, conduct architectural RFC reviews, and enforce rigid linting and code quality standards."
    ],
    technologies: ["React", "Next.js", "TypeScript", "Frontend Architecture", "Core Web Vitals", "Modular CSS"]
  },
  {
    company: "Millipixels Interactive (A Dentsu Group Company / Reach Plc)",
    role: "Senior Software Developer",
    duration: "Aug 2024 - Aug 2026 · 2 yrs",
    current: false,
    description: "Lead Front-End Development: Take ownership of front-end development for complex projects, ensuring high-quality code, performance, and scalability.",
    responsibilities: [
      "Took ownership of front-end feature delivery for high-traffic media properties, refactoring complex legacy logic into modular, testable UI systems.",
      "Reduced client bundle size by 25% through lazy loading, intelligent code splitting, and modular CSS migration away from styled-components.",
      "Partnered closely with UI/UX teams to translate Figma design systems into pixel-perfect, accessible component primitives.",
      "Enforced automated Husky pre-commit hooks, Jest unit testing suites (90%+ coverage), and continuous integration pipelines."
    ],
    technologies: ["TypeScript", "React", "Next.js", "Jest", "Husky", "CI/CD", "Modular CSS"]
  },
  {
    company: "Jio (via Quest Global)",
    role: "Senior Software Engineer",
    duration: "Aug 2021 - Aug 2024 · 3 yrs 1 mo",
    current: false,
    description: "Key frontend engineering contributor to Jio's agricultural and IoT enterprise ecosystems.",
    responsibilities: [
      "Led frontend delivery for 4 major projects including Jio Gau Samriddhi (100% SEO audit score) and Cattle Management Portal.",
      "Architected scalable state management solutions using Redux Toolkit and Context API for enterprise IoT dashboards.",
      "Mentored 5+ junior engineers, conducting daily code reviews and establishing strict linting conventions.",
      "Developed high-performance UI components for KaiOS mobile devices and modern Web browsers using the Jio Design System.",
      "Operated in a high-velocity Agile environment with daily deployments and sprint planning."
    ],
    technologies: ["React", "Redux", "Azure", "KaiOS", "Webpack", "Jio Design System"]
  },
  {
    company: "Tata Institute of Social Sciences (TISS)",
    role: "Software Engineer (UI/UX)",
    duration: "Jan 2019 - Jul 2021 · 2 yrs 7 mos",
    current: false,
    description: "Full-cycle frontend development for educational platforms used by thousands of students across India.",
    responsibilities: [
      "Led the migration of legacy Django template interfaces to modern React-based architectures, reducing maintenance overhead by 40%.",
      "Enhanced mobile engagement by 30% through accessible, responsive design implementation (Bootstrap/Material UI).",
      "Standardized coding practices across the organization, resulting in a 50% decrease in post-deployment bugs.",
      "Bridged UX research and frontend engineering to deliver offline-first educational modules for low-connectivity regions."
    ],
    technologies: ["React", "Django", "jQuery", "Bootstrap", "Material UI"]
  }
];

const ExperiencePage = () => {
  const experienceSchema = {
    "@type": "ProfilePage",
    "@id": "https://yogeshbhavsar.com/experience/#profile",
    "name": "Work Experience of Yogesh Bhavsar",
    "description": "Professional engineering experience of Yogesh Bhavsar, Senior Frontend Specialist & Technical Architect at Millipixels Interactive (Reach Plc), Jio, and TISS.",
    "mainEntity": {
      "@type": "Person",
      "@id": "https://yogeshbhavsar.com/#person"
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
        "name": "Experience",
        "item": "https://yogeshbhavsar.com/experience"
      }
    ]
  };

  return (
    <>
      <SEO
        title="Work Experience | Yogesh Bhavsar — Senior Frontend Specialist & Architect"
        description="Professional engineering experience: Senior Frontend Specialist at Millipixels Interactive (Reach Plc), Jio / Quest Global, and TISS. Specializing in React, Next.js, and frontend architecture."
        canonical="/experience"
        schema={[experienceSchema, breadcrumbsSchema]}
        keywords="Yogesh Bhavsar experience, Senior Frontend Specialist Millipixels Interactive, Senior Software Developer Reach Plc, Jio Frontend Engineer, React Next.js work experience"
      />

      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-background selection:bg-primary/20">
        
        {/* 1. Header Section */}
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center justify-center p-3 mb-4 rounded-full bg-primary/10 text-primary">
            <Trophy className="w-6 h-6" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Professional Journey
          </h1>
          <p className="text-xl text-muted-foreground">
            7+ years of delivering high-impact frontend solutions for 
            <span className="text-foreground font-semibold"> Media Publishing</span>, 
            <span className="text-foreground font-semibold"> IoT Systems</span>, and 
            <span className="text-foreground font-semibold"> EdTech Platforms</span>.
          </p>
        </motion.header>

        {/* 2. Timeline Layout (Original pixel-perfect structure) */}
        <div className="max-w-5xl mx-auto relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-border hidden sm:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-0 sm:pl-20"
              >
                {/* Timeline Dot (Desktop Only) */}
                <div className="absolute left-4 md:left-8 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary z-10 hidden sm:block">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"></span>
                  )}
                  <div className={`w-full h-full rounded-full ${exp.current ? 'bg-primary' : 'bg-muted'}`}></div>
                </div>

                {/* Experience Card */}
                <Card className={`relative border-l-4 shadow-lg hover:shadow-xl transition-all duration-300 ${exp.current ? 'border-l-primary ring-1 ring-primary/20' : 'border-l-muted-foreground/30'}`}>
                  
                  {/* Floating "Current Role" Badge */}
                  {exp.current && (
                    <div className="absolute top-0 right-0 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-bl-xl">
                      CURRENT ROLE
                    </div>
                  )}

                  <CardHeader className="bg-secondary/5 pb-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                      <div>
                        <h2 className="text-2xl font-bold flex items-center gap-2 text-foreground">
                          {exp.role}
                        </h2>
                        <div className="flex items-center text-muted-foreground mt-1 font-medium">
                          <Building2 className="w-4 h-4 mr-2 text-primary" />
                          {exp.company}
                        </div>
                      </div>
                      
                      <div className="flex items-center text-sm font-semibold text-muted-foreground bg-background px-3 py-1 rounded-full border shadow-sm w-fit">
                        <Calendar className="w-4 h-4 mr-2" />
                        {exp.duration}
                      </div>
                    </div>
                    
                    {/* Brief Description / Tagline */}
                    <p className="mt-4 text-sm text-foreground/80 italic border-l-2 border-primary/30 pl-3">
                      "{exp.description}"
                    </p>
                  </CardHeader>

                  <CardContent className="pt-6">
                    {/* Responsibilities Grid */}
                    <div className="mb-6">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                        <Briefcase className="w-4 h-4" /> Impact & Deliverables
                      </h3>
                      <ul className="grid gap-3">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start group">
                            <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                            <span className="text-sm md:text-base text-foreground/90">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack Footer */}
                    <div className="pt-4 border-t border-dashed">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                        <Code2 className="w-4 h-4" /> Tech Environment
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="px-3 py-1 bg-primary/5 hover:bg-primary/10 text-primary border-primary/10">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center space-y-4 pt-8 border-t border-border/50 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground">Looking for Senior Engineering Capacity?</h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-sm">
            Available for remote freelance engineering sprints, contract architecture roles, and performance consulting.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Button asChild>
              <Link to="/contact">Get in Touch <ArrowRight className="ml-1.5 h-4 w-4" /></Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/projects">View Products & Case Studies</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExperiencePage;
