
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "E-commerce Platform UI",
    description: "A modern, responsive UI for an e-commerce website, focusing on user experience and performance. Built with React and TailwindCSS.",
    imageToken: "Modern e-commerce website interface showing product listings",
    technologies: ["React", "TailwindCSS", "Framer Motion", "Context API"],
    liveLink: "#",
    repoLink: "#"
  },
  {
    title: "Task Management App",
    description: "A feature-rich task management application with drag-and-drop functionality, user authentication, and real-time updates.",
    imageToken: "Clean interface of a task management application with boards and cards",
    technologies: ["React", "Redux Toolkit", "Firebase", "Material UI (conceptual)"],
    liveLink: "#",
    repoLink: "#"
  },
  {
    title: "Portfolio Website Template",
    description: "A customizable portfolio website template for developers, showcasing skills, projects, and experience. Focus on SEO and accessibility.",
    imageToken: "Elegant portfolio website design for a developer",
    technologies: ["React", "Next.js (conceptual)", "CSS Modules (conceptual)", "Vercel"],
    liveLink: "#",
    repoLink: "#"
  },
  {
    title: "Data Visualization Dashboard",
    description: "An interactive dashboard for visualizing complex datasets, featuring various chart types and filtering options.",
    imageToken: "Dashboard with various charts and graphs displaying data",
    technologies: ["React", "D3.js (conceptual)", "Chart.js", "API Integration"],
    liveLink: "#",
    repoLink: "#"
  }
];

const ProjectsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-12 py-8"
    >
      <header className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">My Projects</h1>
        <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
          A selection of projects that demonstrate my skills in responsive design, performance optimization, and creating accessible web experiences.
        </p>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
          >
            <Card className="h-full flex flex-col overflow-hidden group transform hover:shadow-2xl transition-all duration-300 ease-in-out hover:-translate-y-1">
              <div className="aspect-video overflow-hidden">
                <img  
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                  alt={project.title}
                 src="https://images.unsplash.com/photo-1638913971789-667874197280" />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="h-20 overflow-y-auto text-foreground/80">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <h4 className="font-semibold mb-2 text-primary">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-end space-x-3 bg-secondary/20 dark:bg-secondary/10 p-4">
                {project.liveLink !== "#" && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                )}
                {project.repoLink !== "#" && (
                  <Button variant="ghost" size="sm" asChild>
                    <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                      GitHub <Github className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectsPage;
  