import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Code2,
  Cpu,
  Globe,
  Layers,
  Rocket,
  Terminal,
  BookOpen,
  Award,
  ArrowUpRight,
  ArrowRight,
  Download
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';
import { logEvent } from '@/utils/analytics';

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
  const handleDownloadCV = () => {
    logEvent('Engagement', 'cv_download', 'About Page Resume Download');
    const link = document.createElement('a');
    link.href = '/Yogesh_Bhavsar-React-Next_Developer.pdf';
    link.download = 'Yogesh_Bhavsar_Senior_Frontend_Developer.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const aboutSchema = {
    "@type": "AboutPage",
    "@id": "https://yogeshbhavsar.com/about/#about",
    "name": "About Yogesh Bhavsar",
    "description": "Professional background, engineering philosophy, and career history of Yogesh Bhavsar, Senior Frontend Engineer and Technical Architect.",
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
        "name": "About",
        "item": "https://yogeshbhavsar.com/about"
      }
    ]
  };

  return (
    <>
      <SEO
        title="About Yogesh Bhavsar | Senior Frontend Engineer & Architect"
        description="Learn about Yogesh Bhavsar's 7+ year engineering journey from mechanical systems thinking to senior frontend architecture at Millipixels Interactive (Reach Plc) and Jio."
        canonical="/about"
        schema={[aboutSchema, breadcrumbsSchema]}
        keywords="About Yogesh Bhavsar, Yogesh Bhavsar bio, frontend architect, senior frontend developer India, React engineer biography"
      />

      <div className="min-h-screen bg-background text-foreground py-12 px-4 sm:px-6 lg:px-8 font-sans selection:bg-primary/20">

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4 border border-primary/20">
            <Terminal size={14} />
            <span>Senior Frontend Engineer & Architect</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-accent">
            Engineering Precision. <br className="hidden md:block" />
            <span className="text-foreground">Creative Execution.</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I bridge the gap between <strong>Mechanical Systems Thinking</strong> and <strong>Modern Web Architecture</strong>.
            Currently driving frontend performance at <span className="text-foreground font-semibold">Millipixels Interactive (Reach Plc)</span>.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6"
        >

          {/* Large Card: Professional Summary */}
          <motion.div variants={itemVariants} className="md:col-span-8 group relative overflow-hidden rounded-3xl border bg-card shadow-sm hover:shadow-md transition-all duration-300">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Cpu size={120} />
            </div>
            <div className="p-8 h-full flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Globe className="text-primary" /> The Engineer's Approach to Frontend
                </h2>
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                  Transitioning from <strong>Mechanical Engineering</strong> to Software Development gave me a unique perspective: I see code as a system of moving parts with tolerances, friction points, and load capacities.
                  Whether it's ensuring <strong>90%+ unit test coverage</strong> with Jest or architecting modular CSS and Next.js App Router streaming, I build web applications that are robust, measurable, and built to scale over years.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {["System Architecture", "Performance Optimization", "Micro-interactions", "CI/CD Pipelines", "Accessibility (WCAG)"].map((tag) => (
                  <Badge key={tag} variant="secondary" className="px-3 py-1 text-sm font-medium">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Key Stats */}
          <motion.div variants={itemVariants} className="md:col-span-4 grid grid-rows-3 gap-4">
            <Card className="bg-primary/5 border border-primary/20 flex flex-col justify-center items-center text-center p-6 hover:bg-primary/10 transition-colors">
              <span className="text-4xl font-black text-primary mb-1">7+</span>
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Years Experience</span>
            </Card>
            <Card className="bg-blue-500/5 border border-blue-500/20 flex flex-col justify-center items-center text-center p-6 hover:bg-blue-500/10 transition-colors">
              <span className="text-4xl font-black text-blue-600 mb-1">30%</span>
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Perf. Optimization</span>
            </Card>
            <Card className="bg-green-500/5 border border-green-500/20 flex flex-col justify-center items-center text-center p-6 hover:bg-green-500/10 transition-colors">
              <span className="text-4xl font-black text-green-600 mb-1">90%+</span>
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Test Coverage</span>
            </Card>
          </motion.div>

          {/* Current Role Impact */}
          <motion.div variants={itemVariants} className="md:col-span-12 rounded-3xl border bg-gradient-to-br from-card to-muted/40 p-8 shadow-sm">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-2">
              <div>
                <h2 className="text-2xl font-bold">Latest Impact: Millipixels Interactive (Reach Plc)</h2>
                <p className="text-primary font-medium">Senior Frontend Specialist • Aug 2024 - Present (Promoted Aug 2026)</p>
              </div>
              <Badge variant="outline" className="text-xs bg-primary/10 text-primary border-primary/30">Current Senior Role</Badge>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2 p-4 rounded-xl bg-card/60 border border-border/60">
                <div className="flex items-center gap-2 font-semibold text-foreground">
                  <Rocket size={18} className="text-orange-500" />
                  <span>Technical Ownership</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Own front-end technical direction across complex initiatives, making key decisions around architecture, scalability, maintainability, and engineering standards.
                </p>
              </div>
              <div className="space-y-2 p-4 rounded-xl bg-card/60 border border-border/60">
                <div className="flex items-center gap-2 font-semibold text-foreground">
                  <Layers size={18} className="text-blue-500" />
                  <span>Frontend Architecture</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Leading modular CSS migration and bundle optimization (25% reduction), enforcing rigid Git workflows and component boundaries across distributed teams.
                </p>
              </div>
              <div className="space-y-2 p-4 rounded-xl bg-card/60 border border-border/60">
                <div className="flex items-center gap-2 font-semibold text-foreground">
                  <BookOpen size={18} className="text-purple-500" />
                  <span>Engineering Leadership</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Mentoring developers, leading peer code reviews, and upholding automated testing (Jest, 90%+ coverage) in a fast-paced environment.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Technical Stack */}
          <motion.div variants={itemVariants} className="md:col-span-6 rounded-3xl border bg-card p-8">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Code2 className="text-primary" /> Technical Arsenal
            </h2>
            <div className="grid grid-cols-4 gap-4">
              {[
                { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
                { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
                { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
                { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
                { name: "Jest", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" },
                { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
                { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
              ].map((tech) => (
                <div key={tech.name} className="flex flex-col items-center justify-center p-3 rounded-xl bg-muted/40 hover:bg-muted/70 transition-colors group">
                  <img src={tech.icon} alt={tech.name} className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-medium text-muted-foreground">{tech.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Career Highlights */}
          <motion.div variants={itemVariants} className="md:col-span-6 rounded-3xl border bg-card p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Award className="text-yellow-500" /> Career Milestones
              </h2>
              <div className="space-y-6">
                <div className="relative pl-6 border-l-2 border-primary/40 pb-2">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
                  <h3 className="font-semibold text-lg">Jio (via Quest Global)</h3>
                  <p className="text-xs text-muted-foreground mb-2">Senior Software Engineer • 2021-2024</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Delivered 4 major IoT & consumer web portals including Jio Gau Samriddhi (100% SEO audit score) and enterprise livestock management systems.
                  </p>
                </div>

                <div className="relative pl-6 border-l-2 border-muted pb-2">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-muted-foreground" />
                  <h3 className="font-semibold text-lg">Tata Institute of Social Sciences (TISS)</h3>
                  <p className="text-xs text-muted-foreground mb-2">Software Engineer • 2019-2021</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Led migration from legacy Django templates to modern React SPA interfaces, improving mobile user engagement by 30%.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t flex flex-col sm:flex-row gap-3">
              <Button onClick={handleDownloadCV} className="flex-1 font-semibold gap-2">
                Download Senior CV <Download size={16} />
              </Button>
              <Button asChild variant="outline" className="flex-1">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </>
  );
};

export default AboutPage;
