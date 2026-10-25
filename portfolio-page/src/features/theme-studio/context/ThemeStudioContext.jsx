import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';
import { getDefaultTheme, getPresetById, cloneTheme } from '../presets';
import { loadSavedTheme, saveTheme, clearSavedTheme, loadCandidateTheme, saveCandidateTheme } from '../utils/storage';
import { parseColorToHex } from '../utils/color';
import { runContrastAudit } from '../utils/contrast';

const ThemeStudioContext = createContext(null);

export const ThemeStudioProvider = ({ children }) => {
  // Working theme state
  const [theme, setTheme] = useState(() => loadSavedTheme());

  // Snapshot of last saved theme to track dirty state
  const [savedSnapshot, setSavedSnapshot] = useState(() => JSON.stringify(loadSavedTheme()));

  // Active tab in the controls panel
  const [activeTab, setActiveTab] = useState('presets');

  // Preview viewport mode: desktop (100%), tablet (768px), mobile (375px)
  const [viewportMode, setViewportMode] = useState('desktop');

  // Compare mode (Default: Off)
  const [compareMode, setCompareMode] = useState(false);

  // Candidate theme for comparison (Default: Monochrome or loaded candidate)
  const [candidateTheme, setCandidateThemeState] = useState(() => {
    const loaded = loadCandidateTheme();
    return loaded || getPresetById('monochrome');
  });

  // OS prefers-reduced-motion check
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Compute dirty state
  const isDirty = useMemo(() => {
    return JSON.stringify(theme) !== savedSnapshot;
  }, [theme, savedSnapshot]);

  // Active appearance mode ('dark' or 'light')
  const currentMode = theme.mode || 'dark';

  // Live WCAG contrast audit for current mode
  const contrastAudit = useMemo(() => {
    const activeColors = theme.colors[currentMode] || theme.colors.dark;
    return runContrastAudit(activeColors);
  }, [theme.colors, currentMode]);

  // Color updater
  const updateColor = useCallback((mode, key, rawValue) => {
    setTheme(prev => {
      const next = cloneTheme(prev);
      const hex = parseColorToHex(rawValue);
      // Even if rawValue is incomplete (e.g. typing "#4"), update string so user can type,
      // but ensure hex conversion stays safe
      if (!next.colors[mode]) next.colors[mode] = {};
      next.colors[mode][key] = hex || rawValue;
      return next;
    });
  }, []);

  // Typography updater
  const updateTypography = useCallback((key, value) => {
    setTheme(prev => {
      const next = cloneTheme(prev);
      next.typography[key] = value;
      return next;
    });
  }, []);

  // Layout updater
  const updateLayout = useCallback((key, value) => {
    setTheme(prev => {
      const next = cloneTheme(prev);
      next.layout[key] = value;
      return next;
    });
  }, []);

  // Motion updater
  const updateMotion = useCallback((key, value) => {
    setTheme(prev => {
      const next = cloneTheme(prev);
      next.motion[key] = value;
      return next;
    });
  }, []);

  // Toggle preview appearance mode ('dark' or 'light')
  const setMode = useCallback((mode) => {
    setTheme(prev => {
      const next = cloneTheme(prev);
      next.mode = mode;
      return next;
    });
  }, []);

  // Apply a preset
  const applyPreset = useCallback((presetId) => {
    const preset = getPresetById(presetId);
    setTheme(prev => {
      // Preserve current mode selection if desired, or use preset default
      preset.mode = prev.mode || preset.mode;
      return preset;
    });
  }, []);

  // Save current theme
  const handleSave = useCallback(() => {
    const success = saveTheme(theme);
    if (success) {
      setSavedSnapshot(JSON.stringify(theme));
    }
    return success;
  }, [theme]);

  // Reset to current preset defaults
  const resetToPreset = useCallback(() => {
    const fresh = getPresetById(theme.id);
    fresh.mode = theme.mode;
    setTheme(fresh);
  }, [theme.id, theme.mode]);

  // Reset everything to default (Verdigris Dark)
  const resetAll = useCallback(() => {
    const freshDefault = clearSavedTheme();
    setTheme(freshDefault);
    setSavedSnapshot(JSON.stringify(freshDefault));
    setCompareMode(false);
  }, []);

  // Save current theme as comparison candidate
  const saveAsCandidate = useCallback(() => {
    const candidate = cloneTheme(theme);
    setCandidateThemeState(candidate);
    saveCandidateTheme(candidate);
  }, [theme]);

  // Set candidate from a specific preset
  const setCandidateFromPreset = useCallback((presetId) => {
    const candidate = getPresetById(presetId);
    setCandidateThemeState(candidate);
    saveCandidateTheme(candidate);
  }, []);

  const value = useMemo(() => ({
    theme,
    setTheme,
    currentMode,
    setMode,
    updateColor,
    updateTypography,
    updateLayout,
    updateMotion,
    applyPreset,
    isDirty,
    saveTheme: handleSave,
    resetToPreset,
    resetAll,
    activeTab,
    setActiveTab,
    viewportMode,
    setViewportMode,
    compareMode,
    setCompareMode,
    candidateTheme,
    saveAsCandidate,
    setCandidateFromPreset,
    prefersReducedMotion,
    contrastAudit
  }), [
    theme,
    currentMode,
    setMode,
    updateColor,
    updateTypography,
    updateLayout,
    updateMotion,
    applyPreset,
    isDirty,
    handleSave,
    resetToPreset,
    resetAll,
    activeTab,
    viewportMode,
    compareMode,
    candidateTheme,
    saveAsCandidate,
    setCandidateFromPreset,
    prefersReducedMotion,
    contrastAudit
  ]);

  return (
    <ThemeStudioContext.Provider value={value}>
      {children}
    </ThemeStudioContext.Provider>
  );
};

export const useThemeStudio = () => {
  const context = useContext(ThemeStudioContext);
  if (!context) {
    throw new Error('useThemeStudio must be used within a ThemeStudioProvider');
  }
  return context;
};
