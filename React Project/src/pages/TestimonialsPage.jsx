
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    name: "Jane Doe",
    title: "Project Manager, Tech Solutions Inc.",
    avatar: "https://via.placeholder.com/100?text=JD",
    testimonial: "Yogesh is an exceptional developer. His attention to detail and commitment to quality are evident in all his work. He was instrumental in delivering our project on time and exceeding expectations.",
    linkedin: "#",
    rating: 5,
  },
  {
    name: "John Smith",
    title: "Lead Designer, Creative Minds Agency",
    avatar: "https://via.placeholder.com/100?text=JS",
    testimonial: "Working with Yogesh was a pleasure. He has a keen eye for design and a deep understanding of front-end technologies, making collaboration seamless and productive.",
    linkedin: "#",
    rating: 5,
  },
  {
    name: "Alice Brown",
    title: "Senior Engineer, Innovatech",
    avatar: "https://via.placeholder.com/100?text=AB",
    testimonial: "Yogesh's problem-solving skills are top-notch. He consistently finds elegant solutions to complex challenges and is always eager to learn and adapt.",
    linkedin: "#",
    rating: 4,
  },
];

const TestimonialsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-12 py-8"
    >
      <header className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Testimonials</h1>
        <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
          Hear what colleagues, clients, and supervisors have to say about my work and collaboration.
        </p>
      </header>

      <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
          >
            <Card className="h-full flex flex-col overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out group transform hover:-translate-y-1">
              <CardHeader className="flex flex-row items-center space-x-4 p-6 bg-secondary/30 dark:bg-secondary/20">
                <Avatar className="h-16 w-16 border-2 border-primary">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-semibold text-primary group-hover:text-accent transition-colors">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </CardHeader>
              <CardContent className="flex-grow p-6">
                <p className="text-foreground/90 italic leading-relaxed">"{testimonial.testimonial}"</p>
              </CardContent>
              <CardFooter className="flex justify-between items-center p-6 border-t">
                <div className="flex">
                  {Array(testimonial.rating).fill(0).map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                  {Array(5 - testimonial.rating).fill(0).map((_, i) => (
                     <Star key={i+testimonial.rating} className="h-5 w-5 text-yellow-400" />
                  ))}
                </div>
                {testimonial.linkedin !== "#" && (
                  <Button variant="ghost" size="sm" asChild>
                    <a href={testimonial.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-500 hover:text-blue-400">
                       View on LinkedIn <Linkedin className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
      <div className="mt-12 text-center">
          <img 
            className="rounded-lg shadow-lg w-full max-w-lg mx-auto h-auto object-cover"
            alt="Collage of positive feedback or abstract representation of trust"
           src="https://images.unsplash.com/photo-1495224814653-94f36c0a31ea" />
        </div>
    </motion.div>
  );
};

export default TestimonialsPage;
  