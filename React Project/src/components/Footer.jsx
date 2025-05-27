
import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-12 mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <p className="font-semibold text-lg mb-2">Yogesh Bhavsar</p>
            <p className="text-sm">Front-End React Developer</p>
            <p className="text-xs mt-1">Crafting responsive and accessible web interfaces.</p>
          </div>
          <div>
            <p className="font-semibold text-lg mb-2">Quick Links</p>
            <ul className="space-y-1 text-sm">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-lg mb-2">Connect</p>
            <div className="flex justify-center space-x-4 mb-4">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                <Button variant="ghost" size="icon" className="hover:text-primary transition-colors"><Github className="h-6 w-6" /></Button>
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                <Button variant="ghost" size="icon" className="hover:text-primary transition-colors"><Linkedin className="h-6 w-6" /></Button>
              </a>
              <a href="mailto:youremail@example.com" aria-label="Email">
                <Button variant="ghost" size="icon" className="hover:text-primary transition-colors"><Mail className="h-6 w-6" /></Button>
              </a>
            </div>
            <Button variant="outline" className="group">
              Download CV <Download className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
        <div className="border-t border-muted pt-8">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Yogesh Bhavsar. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Designed with <span role="img" aria-label="heart">💜</span> and coded with React & TailwindCSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
  