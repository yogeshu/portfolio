
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Briefcase, Calendar, CheckSquare } from 'lucide-react';

const experiences = [
  {
    company: "MilliPixels Interactive",
    role: "Front-End Developer",
    duration: "Jan 2022 - Present",
    responsibilities: [
      "Developed and maintained responsive web applications using React and Redux.",
      "Collaborated with UI/UX designers to implement pixel-perfect interfaces.",
      "Optimized application performance and improved Lighthouse scores.",
      "Integrated third-party APIs and services."
    ],
    technologies: ["React", "Redux", "JavaScript", "TailwindCSS", "REST APIs"]
  },
  {
    company: "Jio (via Quest Global)",
    role: "Software Engineer",
    duration: "Jul 2020 - Dec 2021",
    responsibilities: [
      "Contributed to the development of large-scale enterprise applications.",
      "Worked in an Agile environment, participating in sprints and daily stand-ups.",
      "Focused on front-end components and state management.",
      "Performed code reviews and mentored junior developers."
    ],
    technologies: ["React", "JavaScript ES6+", "Styled Components", "Webpack"]
  },
  {
    company: "Tata Institute of Social Sciences (TISS)",
    role: "Project Intern",
    duration: "May 2019 - Jul 2019",
    responsibilities: [
      "Assisted in developing a web portal for research data management.",
      "Gained experience in full-stack development concepts.",
      "Contributed to UI design and database interactions.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"]
  }
];

const ExperiencePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-12 py-8"
    >
      <header className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">My Experience</h1>
        <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
          A timeline of my professional journey, highlighting key roles, responsibilities, and achievements in the field of front-end development.
        </p>
      </header>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out group">
              <CardHeader className="bg-secondary/30 dark:bg-secondary/20 p-6">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                  <CardTitle className="text-2xl mb-1 sm:mb-0 group-hover:text-accent transition-colors">{exp.role}</CardTitle>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Briefcase className="mr-2 h-4 w-4" /> {exp.company}
                  </div>
                </div>
                <CardDescription className="flex items-center text-sm">
                  <Calendar className="mr-2 h-4 w-4" /> {exp.duration}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Key Responsibilities:</h4>
                  <ul className="space-y-2 list-inside">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start">
                        <CheckSquare className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-foreground/90">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
       <div className="mt-12 text-center">
          <img 
            className="rounded-lg shadow-lg w-full max-w-2xl mx-auto h-auto object-cover"
            alt="Timeline graphic or abstract representation of career growth"
           src="https://images.unsplash.com/photo-1582738098967-b8161ddfe161" />
        </div>
    </motion.div>
  );
};

export default ExperiencePage;
  