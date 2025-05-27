
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

import project1 from '@/assets/gausamriddhi_website.png';
import project2 from '@/assets/gausamriddhi_portal.png';
import project3 from '@/assets/imp.png';
import project4 from '@/assets/placeholder.jpg';
import project5 from '@/assets/clix.png';
import project6 from '@/assets/clix_dashboard.png';
import project7 from '@/assets/sangam.png';

const projects = [
  {
    title: "jiogausamriddhi.com",
    description: `Developed a fast, SEO-optimized website using Next.js for Jio Gau Samriddhi, aimed at generating high-quality leads and expanding the digital presence of the initiative across India.

Crafted a responsive, accessible, and content-focused design to effectively showcase the product's value to farmers, partners, and stakeholders, enhancing visibility and trust.

Integrated performance best practices and clean UI/UX to ensure smooth navigation, quick load times, and higher engagement from mobile and rural users.`,
    imageToken: "Screenshot of the Jio Gau Samriddhi website showcasing its clean design and responsive layout",
    imageSrc: project1,
    technologies: ["Next.js", "React", "Modular CSS", "Context API", "REST APIs", "Jio Design System"],
    liveLink: "https://www.jiogausamriddhi.com/",
    repoLink: "#"

  },
  {
    title: "Cattle Management Dashboard",
    description: "Engineered a robust cattle management portal using React, Material UI, and modular CSS, enabling efficient tracking and management of livestock-related data for farmers and internal teams. Designed and implemented scalable React systems, including reusable components, role-based access control, and intuitive navigation, to ensure a seamless user experience for diverse stakeholders. Integrated testing workflows with Jest, maintaining high code quality and reducing regressions through automated unit and integration tests. Built with performance and maintainability in mind, the dashboard supports real-time updates, detailed cattle records, and streamlined workflows for veterinary and productivity insights.",
    imageToken: "Screenshot of a cattle management dashboard ",
    imageSrc: project2,
    technologies: ["React", "Redux", "Firebase", "Material UI", "Context API", "Modular CSS (conceptual)", "Jest"],
    liveLink: "https://www.jiogausamriddhi.com/portal/login",
    repoLink: "#"
  },
  {
    title: "Input Market Place - Krishi Bazaar",
    description: "Internal Project - Admin Dashboard -  Developed a comprehensive input marketplace platform for farmers/ retailers , enabling them to buy and sell agricultural inputs like seeds, fertilizers, and equipment. Focused on creating a user-friendly interface with responsive design principles to ensure accessibility across devices.",
    imageToken: "Screen of Krishi Bazaer website As IMP in internal project",
    imageSrc: project3,
    technologies: ["React", "Redux", "Material UI", "Context API", "Modular CSS (conceptual)", "Jest"],
    liveLink: "#",
    repoLink: "#"
  },
  {
    title: "Jio Gau Samriddhi Admin Dashboard",
    description: "Internal Project - Admin Dashboard - Developed a comprehensive admin dashboard for Jio Gau Samriddhi, enabling efficient management of cattle data, user interactions, and performance analytics. Focused on creating a user-friendly interface with responsive design principles to ensure accessibility across devices.",
    imageToken: "Screenshot of Jio Gau Samriddhi Admin Dashboard",
    imageSrc: project4,
    technologies: ["React", "Next.js", "Material UI", "Context API", "Modular CSS (conceptual)", "Jest"],
    liveLink: "#",
    repoLink: "#"
  },
   {
    title: "Sangam Biodata",
    description: "Built Project Sangam, a modern matrimonial biodata generator using React and modular CSS; implemented customizable templates with Vedic astrology integration; enabled PDF download and shareable links for easy distribution; added authentication and user data handling via Firebase; and focused on an intuitive, mobile-first design to make biodata creation simple and culturally relevant.",
    imageToken: "Screenshot of Sangam Biodata website",
    imageSrc: project7,
    technologies: ['React', "Modular CSS/SCSS", 'Firebase', 'Framer Motion'],
    liveLink: "https://sangam-biodata.vercel.app/",
    repoLink: "https://github.com/yogeshu/sangam-biodata"
   },
  
  {
    title: "TISS E-Library",
    description: "Developed a comprehensive e-library platform for CLIx , enabling students and faculty to access a wide range of academic resources online. Focused on creating a user-friendly interface with responsive design principles to ensure accessibility across devices.",
    imageToken: "Screenshot of TISS E-Library",
    imageSrc: project5,
    technologies: ['HTML', 'CSS', 'JavaScript', "Jquery", "Bootstrap", 'Django'],
    liveLink: "https://clixoer.tiss.edu/home/e-library",
    repoLink: "#"
  },
  {
    title: "Clix Dashboard",
    description: "Developed a comprehensive dashboard for CLIx, data analytics and management platform, enabling educators to track student progress and engagement effectively. Focused on creating a user-friendly interface with responsive design principles to ensure accessibility across devices.",
    imageToken: "Screenshot of Clix Dashboard",
    imageSrc: project6,
    technologies: ['React', 'Redux', 'Material UI', 'Modular CSS (conceptual)'],
    liveLink: "https://clixdashboard.tiss.edu/home",
    repoLink: "#"

  },


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
        <h1 className="text-4xl md:text-5xl  font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">My Projects</h1>
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
                  alt={project.imageToken}
                  src={project.imageSrc} />
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
