
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
             <div className="mt-6">
                <img 
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                  alt="Developer coding on a modern setup"
                 src="https://images.unsplash.com/photo-1505975297569-3e017ea9436d" />
              </div>
          </CardContent>
        </Card>
      </div>
      
      <section className="text-center py-10 bg-card rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4">My Expertise</h2>
        <p className="text-foreground/80 max-w-2xl mx-auto">
          I specialize in React, Redux, JavaScript, Next.js (conceptual understanding, primarily Vite in practice), CSS-in-JS patterns, and semantic HTML. My goal is to translate complex problems into elegant and efficient front-end solutions.
        </p>
      </section>
    </motion.div>
  );
};

export default AboutPage;
  