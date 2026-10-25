import React, { createContext, useContext, useState, useEffect } from 'react';

export const AVAILABLE_THEMES = [
  {
    id: 'default',
    name: 'Default',
    description: 'Modern developer palette with neon purple & magenta',
    colorDark: '#8A2BE2',
    colorLight: '#7C3AED',
    accentDark: '#EC4899',
    accentLight: '#DB2777'
  },
  {
    id: 'verdigris',
    name: 'Verdigris',
    description: 'Muted teal, mineral verdigris & golden-sand accents',
    colorDark: '#4AA896',
    colorLight: '#246D60',
    accentDark: '#CFAB64',
    accentLight: '#B58638'
  },
  {
    id: 'editorial',
    name: 'Editorial',
    description: 'Paper-like warmth, terracotta vermilion & fountain pen ink',
    colorDark: '#E07B4C',
    colorLight: '#9E4424',
    accentDark: '#8AA087',
    accentLight: '#446452'
  },
  {
    id: 'monochrome',
    name: 'Monochrome',
    description: 'Stark architectural black, white & neutral grays',
    colorDark: '#FFFFFF',
    colorLight: '#121212',
    accentDark: '#B0B0B0',
    accentLight: '#444444'
  },
  {
    id: 'earth-mineral',
    name: 'Earth & Mineral',
    description: 'Warm stone, baked terracotta clay & malachite green',
    colorDark: '#C97A52',
    colorLight: '#9B4C29',
    accentDark: '#5E9E8C',
    accentLight: '#336C5D'
  },
  {
    id: 'high-contrast',
    name: 'High Contrast',
    description: 'Maximized contrast ratios, electric cyan & safety amber',
    colorDark: '#FFE600',
    colorLight: '#003399',
    accentDark: '#00F0FF',
    accentLight: '#7D003E'
  },
  {
    id: 'risograph',
    name: 'Risograph',
    badge: 'Anti-AI',
    description: 'Physical analog print, fluorescent melon & sunflower ink',
    colorDark: '#FF6B6B',
    colorLight: '#E63946',
    accentDark: '#FBBF24',
    accentLight: '#D97706'
  },
  {
    id: 'phosphor',
    name: 'Phosphor CRT',
    badge: 'Anti-AI',
    description: 'Bare-metal terminal, glowing amber P3 & pitch carbon',
    colorDark: '#FFAA00',
    colorLight: '#B45309',
    accentDark: '#39FF14',
    accentLight: '#15803D'
  },
  {
    id: 'raw-kraft',
    name: 'Raw Brutalist',
    badge: 'Anti-AI',
    description: 'Unbleached kraft cardstock, cobalt blue & safety orange',
    colorDark: '#4D7CFF',
    colorLight: '#1848D4',
    accentDark: '#FF5722',
    accentLight: '#C2410C'
  }
];

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  // 1. Dark Mode State (default to true)
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === 'undefined') return true;
    const saved = localStorage.getItem('theme');
    return saved !== null ? saved === 'dark' : true;
  });

  // 2. Visual Theme Preset State (default to 'default' or saved)
  const [siteTheme, setSiteThemeState] = useState(() => {
    if (typeof window === 'undefined') return 'default';
    const saved = localStorage.getItem('site_theme');
    const isValid = AVAILABLE_THEMES.some(t => t.id === saved);
    return isValid ? saved : 'default';
  });

  // Synchronize Dark Mode on <html> element
  useEffect(() => {
    if (typeof document === 'undefined') return;
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Synchronize data-theme on <html> element
  useEffect(() => {
    if (typeof document === 'undefined') return;
    if (siteTheme === 'default') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', siteTheme);
    }
    localStorage.setItem('site_theme', siteTheme);
  }, [siteTheme]);

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  const changeTheme = (themeId) => {
    const match = AVAILABLE_THEMES.find(t => t.id === themeId);
    if (match) {
      setSiteThemeState(match.id);
    }
  };

  const activeThemeMeta = AVAILABLE_THEMES.find(t => t.id === siteTheme) || AVAILABLE_THEMES[0];

  return (
    <ThemeContext.Provider value={{
      darkMode,
      setDarkMode,
      toggleDarkMode,
      siteTheme,
      setSiteTheme: changeTheme,
      activeThemeMeta,
      availableThemes: AVAILABLE_THEMES
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
