import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Cpu,
  Globe,
  Layers,
  Rocket,
  Terminal,
  BookOpen,
  Award,
  ArrowUpRight
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Animation variants for smooth staggering
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
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

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-4 sm:px-6 lg:px-8 font-sans selection:bg-primary/20">

      {/* 1. HERO SECTION: Positioning you as an Architect */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 border border-primary/20">
          <Terminal size={14} />
          <span>Senior Frontend Developer</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-accent">
          Engineering Precision. <br className="hidden md:block" />
          <span className="text-foreground">Creative Execution.</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          I bridge the gap between <strong>Mechanical Systems Thinking</strong> and <strong>Modern Web Architecture</strong>.
          Currently driving frontend performance at <span className="text-foreground font-semibold">Millipixels Interactive</span>.
        </p>
      </motion.div>

      {/* 2. BENTO GRID LAYOUT */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6"
      >

        {/* LARGE CARD: Professional Summary (Spans 8 cols) */}
        <motion.div variants={itemVariants} className="md:col-span-8 group relative overflow-hidden rounded-3xl border bg-card shadow-sm hover:shadow-md transition-all duration-300">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Cpu size={120} />
          </div>
          <div className="p-8 h-full flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Globe className="text-primary" /> The Engineer's Approach to Frontend
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Transitioning from <strong>Mechanical Engineering</strong> to Software Development gave me a unique advantage: I see code as a system of moving parts.
                Whether it's ensuring <strong>90%+ unit test coverage</strong> or architecting modular CSS systems, I build applications that are robust, measurable, and scalable.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {["System Architecture", "Performance Optimization", "Micro-interactions", "CI/CD Pipelines"].map((tag) => (
                <Badge key={tag} variant="secondary" className="px-3 py-1 text-sm">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </motion.div>

        {/* TALL CARD: Key Stats (Spans 4 cols) */}
        <motion.div variants={itemVariants} className="md:col-span-4 grid grid-rows-3 gap-4">
          <Card className="bg-primary/5 border-none flex flex-col justify-center items-center text-center p-6 hover:bg-primary/10 transition-colors">
            <span className="text-4xl font-black text-primary mb-1">7+</span>
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Years Experience</span>
          </Card>
          <Card className="bg-blue-500/5 border-none flex flex-col justify-center items-center text-center p-6 hover:bg-blue-500/10 transition-colors">
            <span className="text-4xl font-black text-blue-600 mb-1">30%</span>
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Perf. Optimization</span>
          </Card>
          <Card className="bg-green-500/5 border-none flex flex-col justify-center items-center text-center p-6 hover:bg-green-500/10 transition-colors">
            <span className="text-4xl font-black text-green-600 mb-1">90%</span>
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Test Coverage</span>
          </Card>
        </motion.div>

        {/* WIDE CARD: Current Role Impact (Spans 12 cols) */}
        <motion.div variants={itemVariants} className="md:col-span-12 rounded-3xl border bg-gradient-to-br from-card to-muted/50 p-8 shadow-sm">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h3 className="text-2xl font-bold">Latest Impact: Millipixels Interactive</h3>
              <p className="text-primary font-medium">Senior Frontend Developer</p>
            </div>
            <div className="mt-2 md:mt-0">
              <span className="text-xs text-muted-foreground border px-2 py-1 rounded">Aug 2024 - Present</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-semibold text-foreground">
                <Rocket size={18} className="text-orange-500" />
                <span>Optimization</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Leading migration from styled-components to modular CSS, significantly reducing render overhead for large-scale apps.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-semibold text-foreground">
                <Layers size={18} className="text-blue-500" />
                <span>Architecture</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Enforcing rigid Git workflows and Husky pre-commit hooks to maintain code integrity across distributed teams.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-semibold text-foreground">
                <BookOpen size={18} className="text-purple-500" />
                <span>Mentorship</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Mentoring developers and leading peer code reviews to uphold best practices in a fast-paced environment.
              </p>
            </div>
          </div>
        </motion.div>

        {/* SQUARE CARD: Tech Stack (Spans 6 cols) */}
        <motion.div variants={itemVariants} className="md:col-span-6 rounded-3xl border bg-card p-8">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Code2 className="text-primary" /> Technical Arsenal
          </h3>
          <div className="grid grid-cols-4 gap-4">
            {[
              { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
              { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
              { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
              { name: "TS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
              { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
              { name: "Jest", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" },
              { name: "Sass", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
              { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
            ].map((tech) => (
              <div key={tech.name} className="flex flex-col items-center justify-center p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors group cursor-pointer">
                <img src={tech.icon} alt={tech.name} className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-medium text-muted-foreground">{tech.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* SQUARE CARD: Past Wins (Spans 6 cols) */}
        <motion.div variants={itemVariants} className="md:col-span-6 rounded-3xl border bg-card p-8 flex flex-col">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Award className="text-yellow-500" /> Career Highlights
          </h3>
          <div className="space-y-6 flex-1 overflow-y-auto pr-2">
            <div className="relative pl-6 border-l-2 border-muted pb-1">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
              <h4 className="font-semibold text-lg">Quest Global</h4>
              <p className="text-sm text-muted-foreground mb-2">Senior Software Developer • 2021-2024</p>
              <p className="text-sm">
                Developed four robust dashboards and web applications for real-time IoT system monitoring, leveraging React, Redux, Jio Design System, Material UI, and Chart.js to deliver intuitive data visualization and seamless user experiences.
              </p>
              <p className="text-sm">Optimized API usage by 30% through Redux state management. Built reusable component libraries for KaiOS mobile apps.</p>
            </div>

            <div className="relative pl-6 border-l-2 border-muted">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-muted-foreground" />
              <h4 className="font-semibold text-lg">TISS (CLIx)</h4>
              <p className="text-sm text-muted-foreground mb-2">Software Developer • 2019-2021</p>
              <p className="text-sm">Engineered dynamic apps with React & Django. Focused on offline-first accessibility and speed bottlenecks.</p>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t">
            <button className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
              Download Full Resume <ArrowUpRight size={18} />
            </button>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default AboutPage;