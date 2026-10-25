
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Edit3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: "The Importance of Web Accessibility in Modern Development",
    date: "May 15, 2025",
    excerpt: "Exploring why accessibility should be a core consideration for every web project, and practical tips for implementation.",
    imageToken: "Abstract design representing web accessibility, like diverse hands using a device",
    tags: ["Accessibility", "Web Development", "Best Practices"]
  },
  {
    id: 2,
    title: "Deep Dive into React Hooks: useState vs useEffect",
    date: "May 02, 2025",
    excerpt: "A comprehensive guide to understanding and effectively using two of React's most fundamental Hooks for state and side effects.",
    imageToken: "React logo with code snippets illustrating hooks",
    tags: ["React", "JavaScript", "Tutorial"]
  },
  {
    id: 3,
    title: "Optimizing Front-End Performance: A Checklist",
    date: "April 20, 2025",
    excerpt: "Key strategies and tools to boost your website's speed and provide a smoother user experience.",
    imageToken: "Speedometer or loading bar graphic symbolizing performance",
    tags: ["Performance", "Optimization", "Front-End"]
  }
];


const BlogPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-12 py-8"
    >
      <header className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Blog</h1>
        <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
          Sharing insights, tutorials, and experiences in the world of front-end development.
        </p>
      </header>

      {blogPosts.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col overflow-hidden group transform hover:shadow-2xl transition-all duration-300 ease-in-out hover:-translate-y-1">
                <div className="aspect-video overflow-hidden">
                  <img  
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                    alt={post.title}
                   src="https://images.unsplash.com/photo-1694388001616-1176f534d72f" />
                </div>
                <CardHeader>
                  <CardTitle className="group-hover:text-accent transition-colors">{post.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">{post.date}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-foreground/90 text-sm leading-relaxed">{post.excerpt}</p>
                   <div className="mt-4 flex flex-wrap gap-2">
                    {post.tags.map(tag => (
                      <span key={tag} className="px-2 py-0.5 text-xs font-medium bg-secondary text-secondary-foreground rounded-md">{tag}</span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-4 border-t">
                  <Button variant="link" asChild className="text-primary hover:text-accent group">
                    <Link to={`/blog/${post.id}`}>
                      Read More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <Edit3 className="mx-auto h-24 w-24 text-muted-foreground opacity-50 mb-6" />
          <h2 className="text-2xl font-semibold mb-2 text-foreground/80">Blog Coming Soon!</h2>
          <p className="text-muted-foreground">
            I'm currently working on some exciting articles. Check back later for updates!
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default BlogPage;
  