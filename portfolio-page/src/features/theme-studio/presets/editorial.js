/**
 * Editorial Theme Preset
 * Paper-like backgrounds, ink-inspired typography, and a literary feel.
 */

export const editorialPreset = {
  id: 'editorial',
  name: 'Editorial',
  description: 'Paper-like backgrounds, ink-inspired typography, deckle edges, and a literary feel.',
  mode: 'light',
  colors: {
    light: {
      background: '#FBF8F3', // Creamy book paper
      surface: '#FFFFFF',
      surfaceSecondary: '#F2EDE2',
      foreground: '#1F1D19', // Fountain pen black ink
      foregroundMuted: '#686055', // Sepia muted text
      primary: '#9E4424', // Terracotta vermilion stamp
      primaryForeground: '#FFFFFF',
      accent: '#446452', // Muted forest sage
      accentForeground: '#FFFFFF',
      border: '#E3DACE',
      ring: '#9E4424',
      success: '#2B7A4B',
      warning: '#B56816',
      error: '#BA3434',
      interactiveHover: '#86381C',
      interactiveActive: '#6E2D16',
      interactiveDisabled: '#C8BEAF'
    },
    dark: {
      background: '#141311', // Dark linen bookcloth
      surface: '#1D1B18',
      surfaceSecondary: '#272420',
      foreground: '#F0EBE1', // Warm aged paper text
      foregroundMuted: '#A09789',
      primary: '#E07B4C', // Terracotta warmth
      primaryForeground: '#120904',
      accent: '#8AA087', // Sage mineral
      accentForeground: '#0C120C',
      border: '#332E27',
      ring: '#E07B4C',
      success: '#4BB878',
      warning: '#E29E38',
      error: '#DE5858',
      interactiveHover: '#EB8A5D',
      interactiveActive: '#D06E3F',
      interactiveDisabled: '#4A433A'
    }
  },
  typography: {
    fontFamilySans: 'system-ui, -apple-system, sans-serif',
    fontFamilySerif: 'Georgia, Cambria, "Times New Roman", serif',
    fontFamilyMono: 'ui-monospace, SFMono-Regular, monospace',
    headingFont: 'serif',
    bodyFont: 'sans',
    scaleRatio: 1.333, // Perfect fourth for editorial drama
    baseFontSize: 16,
    headingLineHeight: 1.15,
    bodyLineHeight: 1.65,
    headingWeight: 700,
    bodyWeight: 400,
    letterSpacingHeadings: '-0.01em',
    letterSpacingBody: '0.005em'
  },
  layout: {
    baseSpacing: 8,
    sectionSpacing: 80,
    contentMaxWidth: '68rem',
    borderRadius: 4, // Subtle refined corners
    borderWidth: 1,
    density: 'comfortable'
  },
  motion: {
    style: 'subtle',
    intensity: 20,
    durationMultiplier: 0.9
  }
};
