import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X, Moon, Sun, Code, ChevronDown, Sparkles, Palette, Check } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { logEvent } from '../utils/analytics';

const serviceLinks = [
  { 
    name: 'Small Business Websites', 
    path: '/web-development', 
    description: 'Fast, high-converting websites for businesses & founders' 
  },
  { 
    name: 'Freelance Frontend', 
    path: '/frontend-development', 
    description: 'Senior React & TypeScript engineering for product teams' 
  },
  { 
    name: 'React & Next.js Development', 
    path: '/react-nextjs-development', 
    description: 'Production App Router, Server Components & SSR' 
  },
  { 
    name: 'Frontend Consulting', 
    path: '/frontend-consulting', 
    description: 'Core Web Vitals, performance audits & architecture' 
  },
];

const mainNavItems = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Blog', path: '/blog' },
  { name: 'Experience', path: '/experience' },
  { name: 'About', path: '/about' },
  { name: 'Skills', path: '/skills' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);
  const themeDropdownRef = useRef(null);

  const {
    darkMode,
    toggleDarkMode,
    siteTheme,
    setSiteTheme,
    availableThemes,
    activeThemeMeta
  } = useTheme();

  const location = useLocation();

  // Close theme dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (themeDropdownRef.current && !themeDropdownRef.current.contains(event.target)) {
        setThemeDropdownOpen(false);
      }
    };
    if (themeDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [themeDropdownOpen]);

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
    setThemeDropdownOpen(false);
  }, [location.pathname]);

  const isServiceActive = serviceLinks.some((s) => s.path === location.pathname);

  const handleSelectTheme = (themeId) => {
    setSiteTheme(themeId);
    setThemeDropdownOpen(false);
    logEvent('Theme', 'change_theme', themeId);
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b border-border/40 shadow-sm transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Identity */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-xl sm:text-2xl font-bold text-primary hover:text-accent transition-colors duration-300"
            onClick={() => {
              setIsOpen(false);
              logEvent('Navigation', 'nav_logo_click', '/');
            }}
          >
            <Code size={26} className="text-primary" />
            <span className="tracking-tight">Yogesh Bhavsar</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            
            {/* Home Link */}
            <Link
              to="/"
              className={`relative px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200
                ${location.pathname === '/' ? 'text-primary' : 'text-foreground/80 hover:text-primary'}`}
              onClick={() => logEvent('Navigation', 'nav_click', '/')}>
              Home
              {location.pathname === '/' && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent"
                  layoutId="navbar-underline"
                />
              )}
            </Link>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200
                  ${isServiceActive ? 'text-primary' : 'text-foreground/80 hover:text-primary'}`}
                onClick={() => setServicesOpen(!servicesOpen)}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                <span>Services</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180 text-primary' : ''}`} />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.98 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 w-80 mt-1 p-2 bg-card/95 backdrop-blur-md rounded-xl border border-border shadow-xl z-50"
                  >
                    <div className="px-3 py-2 border-b border-border/50 mb-1">
                      <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                        <Sparkles size={12} className="text-primary" /> Engineering Services
                      </p>
                    </div>
                    {serviceLinks.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className={`block p-2.5 rounded-lg transition-colors text-left group
                          ${location.pathname === service.path ? 'bg-primary/10 text-primary' : 'hover:bg-muted/70 text-foreground'}`}
                        onClick={() => {
                          setServicesOpen(false);
                          logEvent('Navigation', 'nav_service_click', service.path);
                        }}
                      >
                        <p className="text-sm font-semibold group-hover:text-primary transition-colors">
                          {service.name}
                        </p>
                        <p className="text-xs text-muted-foreground line-clamp-1 mt-0.5">
                          {service.description}
                        </p>
                      </Link>
                    ))}
                    <div className="pt-2 mt-1 border-t border-border/50 px-2 pb-1">
                      <a
                        href="https://consult.yogeshbhavsar.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-primary font-medium hover:underline flex items-center justify-between"
                      >
                        <span>Dedicated Consulting Portal</span>
                        <span>↗</span>
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Other Main Links */}
            {mainNavItems.slice(1).map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200
                  ${location.pathname === item.path ? 'text-primary' : 'text-foreground/80 hover:text-primary'}`}
                onClick={() => logEvent('Navigation', 'nav_click', item.path)}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent"
                    layoutId="navbar-underline"
                  />
                )}
              </Link>
            ))}

            {/* Desktop Theme Picker Dropdown */}
            <div className="relative ml-2" ref={themeDropdownRef}>
              <button
                type="button"
                onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
                className="flex items-center gap-2 px-2.5 py-1.5 rounded-full border border-border/80 bg-muted/30 hover:bg-muted/60 transition-colors text-xs font-medium text-foreground/90 shadow-xs"
                aria-label="Change website theme"
                aria-haspopup="true"
                aria-expanded={themeDropdownOpen}
              >
                {/* Visual Swatch for active theme */}
                <span className="flex items-center -space-x-1">
                  <span
                    className="w-3.5 h-3.5 rounded-full border border-background shadow-xs ring-1 ring-border/50"
                    style={{ backgroundColor: darkMode ? activeThemeMeta.colorDark : activeThemeMeta.colorLight }}
                  />
                  <span
                    className="w-2.5 h-2.5 rounded-full border border-background shadow-xs ring-1 ring-border/50"
                    style={{ backgroundColor: darkMode ? activeThemeMeta.accentDark : activeThemeMeta.accentLight }}
                  />
                </span>
                <span className="hidden xl:inline">{activeThemeMeta.name}</span>
                <ChevronDown size={12} className={`transition-transform duration-200 ${themeDropdownOpen ? 'rotate-180 text-primary' : 'text-muted-foreground'}`} />
              </button>

              <AnimatePresence>
                {themeDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-2 w-72 p-2 bg-card/95 backdrop-blur-md rounded-2xl border border-border shadow-2xl z-50 max-h-[80vh] overflow-y-auto scrollbar-thin"
                  >
                    <div className="px-3 py-2 border-b border-border/50 mb-1 sticky top-0 bg-card/95 backdrop-blur-md z-10">
                      <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                        <Palette size={13} className="text-primary" /> Visual Themes
                      </p>
                      <p className="text-[11px] text-muted-foreground mt-0.5">
                        Includes classic & raw Anti-AI palettes
                      </p>
                    </div>

                    <div className="space-y-1">
                      {availableThemes.map((theme) => {
                        const isSelected = theme.id === siteTheme;
                        const primaryColor = darkMode ? theme.colorDark : theme.colorLight;
                        const accentColor = darkMode ? theme.accentDark : theme.accentLight;

                        return (
                          <button
                            key={theme.id}
                            type="button"
                            onClick={() => handleSelectTheme(theme.id)}
                            className={`w-full flex items-center justify-between p-2 rounded-xl text-left transition-all group
                              ${isSelected ? 'bg-primary/10 text-primary font-semibold ring-1 ring-primary/30' : 'hover:bg-muted/70 text-foreground'}`}
                          >
                            <div className="flex items-center gap-2.5 min-w-0">
                              {/* Swatches */}
                              <div className="flex items-center -space-x-1.5 flex-shrink-0">
                                <span
                                  className="w-4 h-4 rounded-full border-2 border-background shadow-xs ring-1 ring-border/40"
                                  style={{ backgroundColor: primaryColor }}
                                />
                                <span
                                  className="w-3.5 h-3.5 rounded-full border-2 border-background shadow-xs ring-1 ring-border/40"
                                  style={{ backgroundColor: accentColor }}
                                />
                              </div>

                              <div className="min-w-0">
                                <div className="flex items-center gap-1.5">
                                  <p className="text-xs font-medium leading-none truncate">
                                    {theme.name}
                                  </p>
                                  {theme.badge && (
                                    <span className="px-1.5 py-0.2 text-[9px] font-bold rounded-full bg-primary/15 text-primary border border-primary/25 tracking-wider flex-shrink-0">
                                      {theme.badge}
                                    </span>
                                  )}
                                </div>
                                <p className="text-[10px] text-muted-foreground mt-0.5 line-clamp-1">
                                  {theme.description}
                                </p>
                              </div>
                            </div>

                            {isSelected && (
                              <Check size={14} className="text-primary flex-shrink-0 ml-2" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Dark / Light Mode Toggle */}
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleDarkMode} 
              aria-label="Toggle dark / light mode"
              className="ml-1 hover:bg-muted/60"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5 text-foreground" />}
            </Button>
          </div>

          {/* Mobile Right Controls */}
          <div className="md:hidden flex items-center space-x-1">
            {/* Theme Toggle Pill on Mobile Bar */}
            <div className="relative" ref={themeDropdownRef}>
              <button
                type="button"
                onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
                className="p-2 rounded-lg hover:bg-muted/60 text-foreground transition-colors flex items-center gap-1"
                aria-label="Change website theme"
              >
                <span className="flex items-center -space-x-1">
                  <span
                    className="w-3.5 h-3.5 rounded-full border border-background shadow-xs ring-1 ring-border/50"
                    style={{ backgroundColor: darkMode ? activeThemeMeta.colorDark : activeThemeMeta.colorLight }}
                  />
                  <span
                    className="w-2.5 h-2.5 rounded-full border border-background shadow-xs ring-1 ring-border/50"
                    style={{ backgroundColor: darkMode ? activeThemeMeta.accentDark : activeThemeMeta.accentLight }}
                  />
                </span>
              </button>

              <AnimatePresence>
                {themeDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-2 w-64 p-2 bg-card/95 backdrop-blur-md rounded-2xl border border-border shadow-2xl z-50 max-h-[75vh] overflow-y-auto"
                  >
                    <div className="px-2 py-1.5 border-b border-border/50 mb-1 sticky top-0 bg-card/95 backdrop-blur-md z-10">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                        <Palette size={12} className="text-primary" /> Visual Themes
                      </p>
                    </div>
                    <div className="space-y-1">
                      {availableThemes.map((theme) => {
                        const isSelected = theme.id === siteTheme;
                        const primaryColor = darkMode ? theme.colorDark : theme.colorLight;
                        const accentColor = darkMode ? theme.accentDark : theme.accentLight;

                        return (
                          <button
                            key={theme.id}
                            type="button"
                            onClick={() => handleSelectTheme(theme.id)}
                            className={`w-full flex items-center justify-between p-2 rounded-lg text-left transition-all
                              ${isSelected ? 'bg-primary/10 text-primary font-semibold ring-1 ring-primary/30' : 'hover:bg-muted/70 text-foreground'}`}
                          >
                            <div className="flex items-center gap-2 min-w-0">
                              <div className="flex items-center -space-x-1 flex-shrink-0">
                                <span
                                  className="w-3.5 h-3.5 rounded-full border border-background shadow-xs"
                                  style={{ backgroundColor: primaryColor }}
                                />
                                <span
                                  className="w-2.5 h-2.5 rounded-full border border-background shadow-xs"
                                  style={{ backgroundColor: accentColor }}
                                />
                              </div>
                              <div className="flex items-center gap-1.5 min-w-0">
                                <span className="text-xs font-medium truncate">{theme.name}</span>
                                {theme.badge && (
                                  <span className="text-[8px] font-bold px-1 rounded bg-primary/20 text-primary flex-shrink-0">
                                    Anti-AI
                                  </span>
                                )}
                              </div>
                            </div>
                            {isSelected && <Check size={12} className="text-primary flex-shrink-0 ml-1" />}
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Dark / Light Mode */}
            <Button variant="ghost" size="icon" onClick={toggleDarkMode} aria-label="Toggle dark mode">
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5 text-foreground" />}
            </Button>

            {/* Menu Open/Close */}
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden px-4 pt-2 pb-6 space-y-3 bg-background/98 border-b border-border shadow-2xl overflow-hidden"
          >
            {/* Quick Theme Selector in Mobile Drawer */}
            <div className="border border-border/60 rounded-xl p-3 bg-muted/20">
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5 mb-2.5">
                <Palette size={13} className="text-primary" /> Website Theme
              </p>
              <div className="grid grid-cols-2 gap-1.5">
                {availableThemes.map((theme) => {
                  const isSelected = theme.id === siteTheme;
                  const primaryColor = darkMode ? theme.colorDark : theme.colorLight;
                  const accentColor = darkMode ? theme.accentDark : theme.accentLight;

                  return (
                    <button
                      key={theme.id}
                      type="button"
                      onClick={() => handleSelectTheme(theme.id)}
                      className={`flex items-center gap-2 p-2 rounded-lg text-left transition-all border
                        ${isSelected 
                          ? 'bg-primary/10 border-primary text-primary font-semibold shadow-xs' 
                          : 'border-border/50 bg-card/60 hover:bg-muted/70 text-foreground'}`}
                    >
                      <div className="flex items-center -space-x-1 flex-shrink-0">
                        <span
                          className="w-3.5 h-3.5 rounded-full border border-background shadow-xs"
                          style={{ backgroundColor: primaryColor }}
                        />
                        <span
                          className="w-2.5 h-2.5 rounded-full border border-background shadow-xs"
                          style={{ backgroundColor: accentColor }}
                        />
                      </div>
                      <div className="flex items-center gap-1.5 min-w-0">
                        <span className="text-xs truncate">{theme.name}</span>
                        {theme.badge && (
                          <span className="text-[8px] font-bold px-1 py-0.2 rounded bg-primary/20 text-primary flex-shrink-0">
                            Anti-AI
                          </span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <Link
              to="/"
              className={`block px-3 py-2 rounded-md text-base font-medium
                ${location.pathname === '/' ? 'bg-primary/10 text-primary font-bold' : 'text-foreground/80'}`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>

            {/* Mobile Services Accordion */}
            <div className="border border-border/60 rounded-lg p-2 bg-muted/20">
              <button
                type="button"
                className="w-full flex items-center justify-between px-2 py-1 text-sm font-bold text-foreground"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              >
                <span className="flex items-center gap-2">
                  <Sparkles size={14} className="text-primary" /> Services & Solutions
                </span>
                <ChevronDown size={16} className={`transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {mobileServicesOpen && (
                <div className="mt-2 space-y-1 pl-2 border-l border-border/60">
                  {serviceLinks.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className={`block px-3 py-1.5 rounded-md text-sm font-medium
                        ${location.pathname === service.path ? 'text-primary font-bold' : 'text-muted-foreground hover:text-foreground'}`}
                      onClick={() => {
                        setIsOpen(false);
                        logEvent('Navigation', 'nav_mobile_service_click', service.path);
                      }}
                    >
                      {service.name}
                    </Link>
                  ))}
                  <a
                    href="https://consult.yogeshbhavsar.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-3 py-1.5 text-xs text-primary font-medium"
                  >
                    Consulting Portal ↗
                  </a>
                </div>
              )}
            </div>

            {/* Other Mobile Nav Items */}
            {mainNavItems.slice(1).map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium
                  ${location.pathname === item.path ? 'bg-primary/10 text-primary font-bold' : 'text-foreground/80'}`}
                onClick={() => {
                  setIsOpen(false);
                  logEvent('Navigation', 'nav_mobile_click', item.path);
                }}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
