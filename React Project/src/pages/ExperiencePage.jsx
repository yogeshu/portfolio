import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Calendar, 
  CheckCircle2, 
  Building2, 
  Code2,
  Trophy 
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const experiences = [
  {
    company: "MilliPixels Interactive",
    role: "Senior Frontend Developer",
    duration: "Aug 2024 - Present",
    current: true,
    description: "Leading frontend architecture for ReachPlc's large-scale media applications.",
    responsibilities: [
      "Engineered responsive web architectures using React and Next.js, ensuring 100% VR test compliance.",
      "Reduced bundle size by 25% through lazy loading, code splitting, and modular CSS migration.",
      "Collaborated with UI/UX teams to translate Figma designs into pixel-perfect, accessible interfaces.",
      "Optimized Core Web Vitals (Lighthouse), achieving consistent 90+ performance scores.",
      "Refactored complex legacy logic to improve article structure and SEO rendering requirements."
    ],
    technologies: ["React", "Next.js", "Modular CSS", "Jest", "Husky", "CI/CD"]
  },
  {
    company: "Jio (via Quest Global)",
    role: "Senior Software Engineer",
    duration: "Aug 2021 - Aug 2024",
    current: false,
    description: "Key contributor to Jio's agricultural and enterprise ecosystems.",
    responsibilities: [
      "Led frontend delivery for 4 major projects including Jio Gausamriddhi and Cattle Management Portal.",
      "Architected scalable state management solutions using Redux and Context API for enterprise apps.",
      "Mentored 5+ junior developers, conducting code reviews and enforcing strict linting standards.",
      "Developed high-performance UI components for KaiOS and Web platforms using Jio Design System.",
      "Operated in a high-velocity Agile environment with daily deployments and sprint planning."
    ],
    technologies: ["React", "Redux", "Azure", "KaiOS", "Webpack", "Jio Design System"]
  },
  {
    company: "Tata Institute of Social Sciences (TISS)",
    role: "Software Engineer (UI/UX)",
    duration: "Jan 2019 - July 2021",
    current: false,
    description: "Full-cycle development for educational platforms used by thousands of rural students.",
    responsibilities: [
      "Led the migration of legacy Django templates to modern React-based architecture, reducing maintenance costs by 40%.",
      "Enhanced mobile engagement by 30% through responsive design implementation (Bootstrap/Material UI).",
      "Standardized coding practices, resulting in a 50% decrease in post-deployment bugs.",
      "Bridged the gap between UX design and Engineering to create offline-first educational modules."
    ],
    technologies: ["React", "Django", "jQuery", "Bootstrap", "Material UI"]
  }
];

const ExperiencePage = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-background">
      
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
          <span className="text-foreground font-semibold"> EdTech</span>, 
          <span className="text-foreground font-semibold"> IoT</span>, and 
          <span className="text-foreground font-semibold"> Media/Publishing </span> 
          giants.
        </p>
      </motion.header>

      {/* 2. Timeline Layout */}
      <div className="max-w-5xl mx-auto relative">
        {/* Vertical Line */}
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
                
                {/* Floating "Present" Badge for Mobile/Desktop */}
                {exp.current && (
                  <div className="absolute top-0 right-0 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-bl-xl">
                    CURRENT ROLE
                  </div>
                )}

                <CardHeader className="bg-secondary/5 pb-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <div>
                      <h3 className="text-2xl font-bold flex items-center gap-2">
                        {exp.role}
                      </h3>
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
                  
                  {/* Brief Description */}
                  <p className="mt-4 text-sm text-foreground/80 italic border-l-2 border-primary/30 pl-3">
                    "{exp.description}"
                  </p>
                </CardHeader>

                <CardContent className="pt-6">
                  {/* Responsibilities Grid */}
                  <div className="mb-6">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                      <Briefcase className="w-4 h-4" /> Impact & Deliverables
                    </h4>
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
                    <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                      <Code2 className="w-4 h-4" /> Tech Environment
                    </h4>
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
    </div>
  );
};

export default ExperiencePage;