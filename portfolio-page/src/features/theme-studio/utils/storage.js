/**
 * Theme Studio LocalStorage Persistence & Validation.
 * Strictly isolated from the live website's 'theme' key.
 */

import { getDefaultTheme, getPresetById } from '../presets/index.js';
import { normalizeHex } from './color.js';

export const STORAGE_KEY = 'yogesh_theme_studio_v1';
export const CANDIDATE_STORAGE_KEY = 'yogesh_theme_studio_candidate_v1';

/**
 * Validate a theme object structure.
 * Returns true if valid, false if malformed.
 * @param {any} obj 
 * @returns {boolean}
 */
export const validateThemeConfig = (obj) => {
  if (!obj || typeof obj !== 'object') return false;
  if (typeof obj.id !== 'string' || typeof obj.name !== 'string') return false;
  if (!obj.colors || typeof obj.colors !== 'object') return false;
  if (!obj.colors.dark || !obj.colors.light) return false;

  const requiredColorKeys = [
    'background', 'surface', 'foreground', 'foregroundMuted',
    'primary', 'primaryForeground', 'accent', 'border', 'ring'
  ];

  for (const key of requiredColorKeys) {
    if (!normalizeHex(obj.colors.dark[key])) return false;
    if (!normalizeHex(obj.colors.light[key])) return false;
  }

  if (!obj.typography || typeof obj.typography !== 'object') return false;
  if (!obj.layout || typeof obj.layout !== 'object') return false;
  if (!obj.motion || typeof obj.motion !== 'object') return false;

  return true;
};

/**
 * Load saved theme from LocalStorage.
 * Returns getDefaultTheme() if not found, malformed, or storage unavailable.
 * @returns {import('../types/theme').ThemeConfig}
 */
export const loadSavedTheme = () => {
  if (typeof window === 'undefined') return getDefaultTheme();

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return getDefaultTheme();

    const parsed = JSON.parse(raw);
    if (validateThemeConfig(parsed)) {
      return parsed;
    }
    console.warn('[ThemeStudio] Stored theme failed validation. Falling back to default.');
    return getDefaultTheme();
  } catch (err) {
    console.warn('[ThemeStudio] Error reading from localStorage:', err);
    return getDefaultTheme();
  }
};

/**
 * Save theme configuration to LocalStorage.
 * @param {import('../types/theme').ThemeConfig} theme 
 * @returns {boolean} True if successfully saved
 */
export const saveTheme = (theme) => {
  if (typeof window === 'undefined') return false;

  try {
    if (!validateThemeConfig(theme)) {
      console.error('[ThemeStudio] Refusing to save invalid theme configuration.');
      return false;
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(theme));
    return true;
  } catch (err) {
    console.error('[ThemeStudio] Error saving to localStorage:', err);
    return false;
  }
};

/**
 * Clear saved theme from LocalStorage and return default.
 * @returns {import('../types/theme').ThemeConfig}
 */
export const clearSavedTheme = () => {
  if (typeof window !== 'undefined') {
    try {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem(CANDIDATE_STORAGE_KEY);
    } catch (e) {
      // ignore
    }
  }
  return getDefaultTheme();
};

/**
 * Save a candidate theme for comparison.
 * @param {import('../types/theme').ThemeConfig} theme 
 */
export const saveCandidateTheme = (theme) => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(CANDIDATE_STORAGE_KEY, JSON.stringify(theme));
  } catch (e) {
    // ignore
  }
};

/**
 * Load comparison candidate theme.
 * @returns {import('../types/theme').ThemeConfig|null}
 */
export const loadCandidateTheme = () => {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(CANDIDATE_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return validateThemeConfig(parsed) ? parsed : null;
  } catch (e) {
    return null;
  }
};
