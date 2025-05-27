
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const AboutPage = () => {
  const journeyPoints = [
    "Passionate about creating intuitive and dynamic user experiences.",
    "Started my journey with a curiosity for how websites come to life.",
    "Deep dived into JavaScript, realizing its power to build interactive applications.",
    "Fell in love with React for its component-based architecture and efficiency.",
    "Continuously learning and exploring new technologies in the front-end ecosystem."
  ];

  const coreBeliefs = [
    "Commitment to web accessibility (WCAG standards).",
    "Emphasis on SEO optimization for better reach.",
    "Belief in writing clean, maintainable, and scalable code.",
    "Advocate for performance optimization for smooth user interactions."
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-12 py-8"
    >
      <header className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">About Me</h1>
        <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
          A dedicated Front-End React Developer with a passion for building beautiful, functional, and user-centric web applications.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <Card className="shadow-xl transform hover:scale-105 transition-transform duration-300">
          <CardHeader>
            <CardTitle>My Journey into Front-End</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-foreground/90">
            {journeyPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-start space-x-3"
              >
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                <p>{point}</p>
              </motion.div>
            ))}
          </CardContent>
        </Card>

        <Card className="shadow-xl transform hover:scale-105 transition-transform duration-300">
          <CardHeader>
            <CardTitle>Core Philosophy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-foreground/90">
            {coreBeliefs.map((belief, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-start space-x-3"
              >
                <CheckCircle className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                <p>{belief}</p>
              </motion.div>
            ))}
             {/* <div className="mt-6">
                <img 
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                  alt="Developer coding on a modern setup"
                 src="https://images.unsplash.com/photo-1505975297569-3e017ea9436d" />
              </div> */}
          </CardContent>
        </Card>
      </div>
      
<section className="relative py-12 px-4 sm:px-8 max-w-4xl mx-auto rounded-2xl shadow-2xl bg-white/70 dark:bg-card/70 backdrop-blur-lg border border-white/30 dark:border-card/30 overflow-hidden mt-8">
  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent text-center"
  >
    My Expertise
  </motion.h2>
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    viewport={{ once: true }}
    className="text-lg text-foreground/80 max-w-2xl mx-auto text-center mb-8"
  >
    With over six years of experience in frontend development, I specialize in building intuitive and high-performance interfaces using React, Redux, JavaScript, and Next.js (conceptually, though I primarily use Vite in practice). I'm deeply familiar with CSS-in-JS / Modular CSS patterns and prioritize semantic, accessible HTML. My core strength lies in translating complex business problems into elegant, scalable frontend solutions that balance user experience with technical efficiency.
  </motion.p>
  <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-6">
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      viewport={{ once: true }}
      className="flex flex-col items-center bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-5 shadow-md"
    >
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-10 h-10 mb-2" />
      <span className="font-semibold text-foreground">React</span>
    </motion.div>
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      viewport={{ once: true }}
      className="flex flex-col items-center bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-5 shadow-md"
    >
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt="Redux" className="w-10 h-10 mb-2" />
      <span className="font-semibold text-foreground">Redux</span>
    </motion.div>
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.3 }}
      viewport={{ once: true }}
      className="flex flex-col items-center bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-5 shadow-md"
    >
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-10 h-10 mb-2" />
      <span className="font-semibold text-foreground">JavaScript</span>
    </motion.div>
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.4 }}
      viewport={{ once: true }}
      className="flex flex-col items-center bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-5 shadow-md"
    >
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" className="w-10 h-10 mb-2 bg-white rounded-full p-1" />
      <span className="font-semibold text-foreground">Next.js</span>
    </motion.div>
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.5 }}
      viewport={{ once: true }}
      className="flex flex-col items-center bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-5 shadow-md"
    >
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" className="w-10 h-10 mb-2" />
      <span className="font-semibold text-foreground">CSS-in-JS / Modular CSS</span>
    </motion.div>
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.6 }}
      viewport={{ once: true }}
      className="flex flex-col items-center bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-5 shadow-md"
    >
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" className="w-10 h-10 mb-2" />
      <span className="font-semibold text-foreground">Semantic HTML</span>
    </motion.div>
  </div>
  <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-3xl opacity-30 pointer-events-none"></div>
  <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-3xl opacity-30 pointer-events-none"></div>
</section>

    </motion.div>
  );
};

export default AboutPage;
  