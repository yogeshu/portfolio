import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Download, ExternalLink, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { logEvent } from '@/utils/analytics';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleDownloadCV = () => {
    logEvent('Engagement', 'cv_download', 'Footer CV Download Click');
    const link = document.createElement('a');
    link.href = '/Yogesh_Bhavsar-React-Next_Developer.pdf';
    link.download = 'Yogesh_Bhavsar_Senior_Frontend_Developer.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <footer className="bg-secondary/40 text-secondary-foreground border-t border-border/60 py-14 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10 text-left">
          
          {/* Identity & Bio */}
          <div className="md:col-span-1 space-y-3">
            <Link to="/" className="inline-flex items-center gap-2 text-xl font-bold text-foreground">
              <Code2 className="text-primary h-5 w-5" />
              <span>Yogesh Bhavsar</span>
            </Link>
            <p className="text-sm font-medium text-primary">Senior Frontend Engineer & Technical Architect</p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Crafting fast, accessible, and high-performance React and Next.js applications with 7+ years of industry experience.
            </p>
            <div className="pt-2 flex space-x-2">
              <a 
                href="https://github.com/yogeshu" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="GitHub Profile"
                className="p-2 rounded-lg bg-card border border-border text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-4 w-4" />
              </a>
              <a 
                href="https://www.linkedin.com/in/yogeshbhavsarui" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn Profile"
                className="p-2 rounded-lg bg-card border border-border text-muted-foreground hover:text-blue-600 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a 
                href="mailto:yogeshbhavsar1994@gmail.com" 
                aria-label="Email Yogesh"
                className="p-2 rounded-lg bg-card border border-border text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Commercial Services */}
          <div>
            <p className="font-bold text-sm uppercase tracking-wider text-foreground mb-3">Services</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/web-development" className="text-muted-foreground hover:text-primary transition-colors">
                  Web Developer for Small Business
                </Link>
              </li>
              <li>
                <Link to="/frontend-development" className="text-muted-foreground hover:text-primary transition-colors">
                  Freelance Frontend Engineering
                </Link>
              </li>
              <li>
                <Link to="/react-nextjs-development" className="text-muted-foreground hover:text-primary transition-colors">
                  React & Next.js Development
                </Link>
              </li>
              <li>
                <Link to="/frontend-consulting" className="text-muted-foreground hover:text-primary transition-colors">
                  Performance & Architecture Consulting
                </Link>
              </li>
              <li>
                <a 
                  href="https://consult.yogeshbhavsar.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-primary hover:underline inline-flex items-center gap-1 font-medium text-xs pt-1"
                >
                  Fractional Retainers Portal <ExternalLink size={12} />
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation Links */}
          <div>
            <p className="font-bold text-sm uppercase tracking-wider text-foreground mb-3">Portfolio & Experience</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-muted-foreground hover:text-primary transition-colors">
                  Case Studies & Projects
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Engineering Blog & Essays
                </Link>
              </li>
              <li>
                <Link to="/experience" className="text-muted-foreground hover:text-primary transition-colors">
                  Work Experience
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About & Background
                </Link>
              </li>
              <li>
                <Link to="/skills" className="text-muted-foreground hover:text-primary transition-colors">
                  Technical Skills
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Project Inquiry
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Availability */}
          <div className="space-y-3">
            <p className="font-bold text-sm uppercase tracking-wider text-foreground mb-3">Availability</p>
            <p className="text-xs text-muted-foreground">
              Open to high-impact freelance projects, contract frontend engineering, and architectural audits.
            </p>
            <p className="text-xs font-semibold text-foreground">
              Location: Maharashtra, India (Remote worldwide)
            </p>
            <div className="pt-2">
              <Button variant="outline" size="sm" className="w-full text-xs font-semibold" onClick={handleDownloadCV}>
                Download Senior CV <Download className="ml-1.5 h-3.5 w-3.5" />
              </Button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground gap-3">
          <p>
            &copy; {currentYear} Yogesh Bhavsar. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/theme-studio" className="hover:text-primary transition-colors flex items-center gap-1 font-mono text-[11px]">
              <span>Theme Studio (Preview)</span>
            </Link>
            <p className="hidden sm:inline">
              Engineered with React 18, Vite & Tailwind CSS. Fast, accessible & search-optimized.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
