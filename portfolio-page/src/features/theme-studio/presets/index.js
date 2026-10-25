/**
 * Theme Presets Registry
 */

import { verdigrisPreset } from './verdigris.js';
import { editorialPreset } from './editorial.js';
import { monochromePreset } from './monochrome.js';
import { earthMineralPreset } from './earth-mineral.js';
import { highContrastPreset } from './high-contrast.js';

export const THEME_PRESETS = [
  verdigrisPreset,
  editorialPreset,
  monochromePreset,
  earthMineralPreset,
  highContrastPreset
];

/**
 * Deep clone a theme configuration object.
 * @param {import('../types/theme').ThemeConfig} theme 
 * @returns {import('../types/theme').ThemeConfig}
 */
export const cloneTheme = (theme) => {
  return JSON.parse(JSON.stringify(theme));
};

/**
 * Get a preset by id. Falls back to Verdigris if not found.
 * @param {string} id 
 * @returns {import('../types/theme').ThemeConfig}
 */
export const getPresetById = (id) => {
  const match = THEME_PRESETS.find(p => p.id === id);
  return cloneTheme(match || verdigrisPreset);
};

/**
 * Get the initial default theme configuration:
 * Preset: Verdigris, Appearance: Dark, Motion: Subtle reveal, Intensity: 30%, Comparison: Off
 * @returns {import('../types/theme').ThemeConfig}
 */
export const getDefaultTheme = () => {
  const base = cloneTheme(verdigrisPreset);
  base.mode = 'dark';
  base.motion.style = 'subtle';
  base.motion.intensity = 30;
  return base;
};
