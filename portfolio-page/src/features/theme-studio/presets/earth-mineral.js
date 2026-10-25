/**
 * Earth & Mineral Theme Preset
 * Earthy neutrals, raw stone, warm clay, and mineral-inspired accents.
 */

export const earthMineralPreset = {
  id: 'earth-mineral',
  name: 'Earth & Mineral',
  description: 'Warm stone, terracotta clay, weathered limestone, and deep malachite mineral accents.',
  mode: 'dark',
  colors: {
    dark: {
      background: '#13110F', // Basalt stone
      surface: '#1D1916',
      surfaceSecondary: '#26221D',
      foreground: '#E8E2DA', // Travertine
      foregroundMuted: '#9B9085',
      primary: '#C97A52', // Baked terracotta clay
      primaryForeground: '#170B04',
      accent: '#5E9E8C', // Malachite green
      accentForeground: '#071510',
      border: '#332C24',
      ring: '#C97A52',
      success: '#4CB882',
      warning: '#E29B35',
      error: '#DD5252',
      interactiveHover: '#D98960',
      interactiveActive: '#BD6D45',
      interactiveDisabled: '#473E35'
    },
    light: {
      background: '#F5F2EB', // Warm limestone
      surface: '#FFFFFF',
      surfaceSecondary: '#EBE5DA',
      foreground: '#241E18', // Raw umber
      foregroundMuted: '#6B6053',
      primary: '#9B4C29', // Deep terracotta
      primaryForeground: '#FFFFFF',
      accent: '#336C5D', // Deep malachite
      accentForeground: '#FFFFFF',
      border: '#DCD3C4',
      ring: '#9B4C29',
      success: '#247F52',
      warning: '#B8690F',
      error: '#C43131',
      interactiveHover: '#863E1F',
      interactiveActive: '#703317',
      interactiveDisabled: '#C2B8A8'
    }
  },
  typography: {
    fontFamilySans: 'Inter, system-ui, sans-serif',
    fontFamilySerif: 'Georgia, Cambria, serif',
    fontFamilyMono: 'ui-monospace, SFMono-Regular, monospace',
    headingFont: 'sans',
    bodyFont: 'sans',
    scaleRatio: 1.25,
    baseFontSize: 16,
    headingLineHeight: 1.22,
    bodyLineHeight: 1.62,
    headingWeight: 700,
    bodyWeight: 400,
    letterSpacingHeadings: '-0.015em',
    letterSpacingBody: '0em'
  },
  layout: {
    baseSpacing: 8,
    sectionSpacing: 64,
    contentMaxWidth: '72rem',
    borderRadius: 10,
    borderWidth: 1,
    density: 'comfortable'
  },
  motion: {
    style: 'subtle',
    intensity: 35,
    durationMultiplier: 1.05
  }
};
