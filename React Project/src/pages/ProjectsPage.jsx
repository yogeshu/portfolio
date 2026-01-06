
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
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-10 py-8"
    >
      <header className="text-center space-y-3">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
          Selected Work
        </h1>
        <p className="text-foreground/70 max-w-2xl mx-auto">
          Product-focused projects highlighting performance, UX judgment, and scalable front-end architecture.
        </p>
      </header>

      <div className="grid gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: index * 0.08 }}
          >
            <Card className="group overflow-hidden transition-all hover:shadow-xl">
              <div className="flex flex-col md:flex-row md:h-[320px]">

                {/* Image */}
                <div className="relative w-full aspect-[16/9] sm:aspect-[4/3] md:aspect-auto md:w-[35%] overflow-hidden">
                  <img
                    src={project.imageSrc}
                    alt={project.imageToken}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>


                {/* Content */}
                <div className="flex flex-col justify-between md:w-[65%] p-5">
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold">{project.title}</h3>

                    <p className="text-sm text-foreground/75 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.technologies.slice(0, 7).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 7 && (
                        <span className="text-xs text-foreground/50">
                          +{project.technologies.length - 7} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-end gap-3 pt-4">
                    {project.liveLink !== "#" && (
                      <Button size="sm" asChild>
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live Demo <ExternalLink className="ml-1 h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    {project.repoLink !== "#" && (
                      <Button variant="ghost" size="icon" asChild>
                        <a
                          href={project.repoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub repository"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};


export default ProjectsPage;
