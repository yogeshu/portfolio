
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Briefcase, Calendar, CheckSquare } from 'lucide-react';

const experiences = [
  {
    company: "MilliPixels Interactive",
    role: "Senior Frontend Developer",
    duration: "Aug 2024 - Present",
    responsibilities: [
      "Developed and maintained responsive web applications using React and Next.js.",
      "Imporved application performance and user experience through code optimization. Like reducing bundle size and implementing lazy loading.",
      "Collaborated with UI/UX designers to implement pixel-perfect interfaces.",
      "Optimized application performance and improved Lighthouse scores.",
      'Devloped Complex logic, to improve artcile struture based on requirements.',

    ],
    technologies: ["React", "Next.js", "JavaScript", "ModularCSS", "REST APIs", "JEST", "Husky", "ESLint", "Prettier"]
  },
  {
    company: "Jio (via Quest Global)",
    role: "Senior Software Engineer",
    duration: "Aug 2021 - Aug 2024",
    responsibilities: [
      "Contributed to the development of large-scale enterprise applications.",
      "Worked in an Agile environment, participating in sprints and daily stand-ups.",
      "Focused on front-end components and state management.",
      "Performed code reviews and mentored junior developers.",
      "Handled Alomot 4 projects Jio Gausamriddhi",
    ],
    technologies: ["React", "JavaScript ES6+", "Azure", "Styled Components", "Jio Design Sytem", "Next.js", "Kai Os",  "Webpack", "Redux"]
  },
  {
    company: "Tata Institute of Social Sciences (TISS)",
    role: "Software Engineer UX/UI",
    duration: "Jan 2019 - July 2021",
    responsibilities: [
      "Developed user-friendly web applications using HTML, CSS, JavaScript, Django, and React.js, significantly enhancing the interactive elements of educational modules used by thousands of students.",
      "Led the migration of legacy systems to a modern React-based architecture, improving system reliability and scalability, resulting in a 40% reduction in maintenance costs.",
      "Collaborated closely with UX/UI designers to implement responsive design principles, increasing mobile user engagement by over 30%.",
      "Conducted comprehensive code reviews and worked with the development team to uphold best practices and quality standards, leading to a 50% decrease in post-deployment issues.",
      "Initiated and led a successful pilot integrating advanced JavaScript features and React hooks, improving application efficiency and maintainability."
    ],
    technologies: ["HTML", "CSS", "JavaScript", "JQuery", "Bootstrap", "React", "Node.js", "Material UI"]
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
   
    </motion.div>
  );
};

export default ExperiencePage;
  