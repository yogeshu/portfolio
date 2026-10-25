import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Zap, Users, MessageCircle, Settings, Palette, Code, ArrowRight } from 'lucide-react';
import SEO from '@/components/SEO';

const technicalSkills = [
  { name: "React (18 / 19)", level: 95, icon: <Code className="text-blue-400" /> },
  { name: "Next.js (App Router, RSC, SSR)", level: 90, icon: <Code className="text-gray-400" /> },
  { name: "TypeScript", level: 90, icon: <Code className="text-blue-500" /> },
  { name: "JavaScript (ES6+)", level: 95, icon: <Code className="text-yellow-400" /> },
  { name: "Redux / Redux Toolkit", level: 85, icon: <Code className="text-purple-400" /> },
  { name: "HTML5 & Semantic Web", level: 95, icon: <Code className="text-orange-500" /> },
  { name: "CSS3 / Modular CSS / SASS", level: 90, icon: <Palette className="text-pink-500" /> },
  { name: "Tailwind CSS", level: 90, icon: <Palette className="text-teal-400" /> },
  { name: "Git & Version Control", level: 90, icon: <Code className="text-red-500" /> },
  { name: "REST & GraphQL APIs", level: 85, icon: <Settings className="text-green-500" /> },
  { name: "Vite / Webpack / Tooling", level: 85, icon: <Settings className="text-indigo-500" /> },
];

const softSkills = [
  { name: "Clear Asynchronous Communication", icon: <MessageCircle className="text-sky-500" /> },
  { name: "Remote Teamwork & Global Collaboration", icon: <Users className="text-emerald-500" /> },
  { name: "Root-Cause Technical Problem-Solving", icon: <Zap className="text-amber-500" /> },
  { name: "Fast Adaptability to New Codebases", icon: <Settings className="text-violet-500" /> },
  { name: "Attention to Accessibility & Detail", icon: <Palette className="text-rose-500" /> },
];

const devTools = [
  { name: "Git & GitHub", icon: <Code className="text-red-500" /> },
  { name: "Jest & React Testing Library", icon: <Code className="text-green-500" /> },
  { name: "Husky Pre-commit Hooks", icon: <Settings className="text-gray-500" /> },
  { name: "Figma to Code", icon: <Palette className="text-pink-400" /> },
  { name: "Chrome DevTools Performance Profiler", icon: <Zap className="text-yellow-500" /> },
  { name: "Lighthouse & Web Vitals", icon: <Zap className="text-amber-500" /> },
  { name: "Azure DevOps & CI/CD", icon: <Settings className="text-blue-700" /> },
  { name: "Jira & Linear", icon: <Settings className="text-indigo-500" /> },
  { name: "Postman", icon: <Settings className="text-orange-400" /> },
  { name: "VS Code", icon: <Code className="text-blue-400" /> },
  { name: "ESLint & Prettier", icon: <Settings className="text-purple-500" /> },
];

const SkillBar = ({ name, level, icon }) => (
  <div className="mb-4">
    <div className="flex items-center justify-between mb-1">
      <span className="text-sm font-medium text-foreground/90 flex items-center">
        {React.cloneElement(icon, { className: `${icon.props.className} mr-2 h-5 w-5` })}
        {name}
      </span>
      <span className="text-xs font-semibold text-primary">{level}%</span>
    </div>
    <div className="w-full bg-muted rounded-full h-2.5">
      <motion.div
        className="bg-gradient-to-r from-primary to-accent h-2.5 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${level}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </div>
  </div>
);

const SkillsPage = () => {
  const skillsSchema = {
    "@type": "WebPage",
    "@id": "https://yogeshbhavsar.com/skills/#webpage",
    "name": "Technical Skills & Engineering Competencies",
    "description": "Comprehensive technical skill matrix and engineering tools of Yogesh Bhavsar.",
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
        "name": "Skills",
        "item": "https://yogeshbhavsar.com/skills"
      }
    ]
  };

  return (
    <>
      <SEO
        title="Technical Skills & Architecture | Yogesh Bhavsar"
        description="Comprehensive technical skills of Yogesh Bhavsar: React, Next.js, TypeScript, Redux Toolkit, Tailwind CSS, Webpack/Vite, Core Web Vitals, and CI/CD."
        canonical="/skills"
        schema={[skillsSchema, breadcrumbsSchema]}
        keywords="Yogesh Bhavsar skills, React skills, Next.js architecture, TypeScript developer skills, Core Web Vitals specialist"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-12 py-8 selection:bg-primary/20"
      >
        <header className="text-center max-w-3xl mx-auto space-y-3">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Technical Arsenal
          </h1>
          <p className="text-lg text-foreground/80">
            A comprehensive overview of core frontend technologies, architecture foundations, and development tools.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Technical Skills */}
          <Card className="shadow-lg border-border/70">
            <CardHeader>
              <CardTitle className="text-xl">Engineering & Frameworks</CardTitle>
            </CardHeader>
            <CardContent>
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <SkillBar name={skill.name} level={skill.level} icon={skill.icon} />
                </motion.div>
              ))}
            </CardContent>
          </Card>

          {/* Soft Skills & Practices */}
          <div className="space-y-8">
            <Card className="shadow-lg border-border/70">
              <CardHeader>
                <CardTitle className="text-xl">Engineering Practices & Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {softSkills.map((skill, index) => (
                    <motion.li
                      key={skill.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.08 }}
                      className="flex items-center text-foreground/90 text-sm p-3 bg-secondary/30 rounded-lg hover:bg-primary/10 transition-colors"
                    >
                      {React.cloneElement(skill.icon, { className: `${skill.icon.props.className} mr-3 h-5 w-5 flex-shrink-0` })}
                      <span className="font-medium">{skill.name}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-border/70">
              <CardHeader>
                <CardTitle className="text-xl">Productivity & Diagnostic Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="flex flex-wrap gap-2.5">
                  {devTools.map((tool) => (
                    <li
                      key={tool.name}
                      className="flex items-center bg-secondary/30 rounded-lg px-3 py-1.5 text-foreground/90 text-xs font-medium hover:bg-primary/10 transition-colors"
                    >
                      {React.cloneElement(tool.icon, { className: `${tool.icon.props.className} mr-1.5 h-4 w-4` })}
                      {tool.name}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="max-w-4xl mx-auto text-center pt-8 border-t border-border/50 space-y-4">
          <h2 className="text-2xl font-bold">See These Skills in Production</h2>
          <p className="text-muted-foreground text-sm max-w-lg mx-auto">
            Discover how these technologies are applied across enterprise applications, Next.js sites, and performance audits.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Button asChild>
              <Link to="/projects">Explore Projects <ArrowRight className="ml-1.5 h-4 w-4" /></Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/frontend-development">Hire for Sprints</Link>
            </Button>
          </div>
        </div>

      </motion.div>
    </>
  );
};

export default SkillsPage;
