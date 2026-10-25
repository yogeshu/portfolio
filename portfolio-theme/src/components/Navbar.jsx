import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X, Moon, Sun, Code, Palette } from 'lucide-react';
import { logEvent } from '../utils/analytics';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Experience', path: '/experience' },
  { name: 'Projects', path: '/projects' },
  { name: 'Skills', path: '/skills' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Contact', path: '/contact' },
];

const PALETTES = [
  { id: 'terracotta', name: 'Raw Terracotta & Linen', icon: '🏺' },
  { id: 'forest', name: 'Deep Forest & Bookcloth', icon: '🌲' },
  { id: 'carbon', name: 'Cast Iron & Ochre', icon: '⚙️' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const theme = localStorage.getItem('theme');
    if (theme) return theme === 'dark';
    return true; // default to dark mode
  });

  const [palette, setPalette] = useState(() => {
    return localStorage.getItem('portfolio_palette') || 'terracotta';
  });

  const location = useLocation();

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove(
      'theme-terracotta',
      'theme-forest',
      'theme-carbon',
      'theme-sapphire',
      'theme-emerald',
      'theme-amber'
    );
    root.classList.add(`theme-${palette}`);
    localStorage.setItem('portfolio_palette', palette);
  }, [palette]);

  const toggleTheme = () => setDarkMode(!darkMode);
  const toggleMenu = () => setIsOpen(!isOpen);

  const cyclePalette = () => {
    const currentIndex = PALETTES.findIndex((p) => p.id === palette);
    const nextIndex = (currentIndex + 1) % PALETTES.length;
    setPalette(PALETTES[nextIndex].id);
  };

  const currentPalette = PALETTES.find((p) => p.id === palette) || PALETTES[0];

  const NavLink = ({ to, children }) => (
    <Link
      to={to}
      className={`relative px-3 py-2 text-sm font-medium rounded-md transition-colors duration-300
        ${location.pathname === to ? 'text-primary font-bold' : 'text-foreground/80 hover:text-primary/80'}`}
      onClick={() => {
        setIsOpen(false);
        logEvent('navigation_click', { page: to });
      }}
    >
      {children}
      {location.pathname === to && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent"
          layoutId="underline"
          initial={false}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        />
      )}
    </Link>
  );

  return (
    <nav className="sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b border-border/50 shadow-sm transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link
            to="/"
            className="flex items-center space-x-2 text-2xl font-black text-primary hover:text-accent transition-colors duration-300 tracking-tight"
          >
            <div className="p-2 rounded-xl bg-primary/10 text-primary border border-primary/20">
              <Code size={24} />
            </div>
            <span>Yogesh Bhavsar</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <NavLink key={item.name} to={item.path}>
                {item.name}
              </NavLink>
            ))}

            <div className="flex items-center space-x-2 ml-4 pl-4 border-l border-border/60">
              {/* Palette Cycle Button */}
              <Button
                variant="outline"
                size="sm"
                onClick={cyclePalette}
                className="text-xs font-semibold flex items-center gap-1.5 border-border/70 hover:border-primary/50 transition-colors"
                title={`Active Theme: ${currentPalette.name}. Click to switch palette.`}
              >
                <span>{currentPalette.icon}</span>
                <span className="hidden lg:inline">{currentPalette.name}</span>
              </Button>

              {/* Dark / Light Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                aria-label="Toggle dark/light mode"
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Trigger */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={cyclePalette}
              className="text-xs p-2"
              title="Switch palette"
            >
              <span>{currentPalette.icon}</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden px-4 pt-2 pb-4 space-y-1 bg-background/95 border-b border-border"
        >
          {navItems.map((item) => (
            <div key={item.name} className="py-1">
              <NavLink to={item.path}>{item.name}</NavLink>
            </div>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
