/**
 * Verdigris Theme Preset
 * Muted teal, verdigris, warm neutrals, and restrained golden-sand accents.
 */

export const verdigrisPreset = {
  id: 'verdigris',
  name: 'Verdigris',
  description: 'Muted teal, mineral verdigris, warm linen neutrals, and restrained golden-sand accents.',
  mode: 'dark', // Default appearance: Dark
  colors: {
    dark: {
      background: '#0E1513',
      surface: '#151F1C',
      surfaceSecondary: '#1C2925',
      foreground: '#E3EDE8',
      foregroundMuted: '#899E96',
      primary: '#4AA896',
      primaryForeground: '#091512',
      accent: '#CFAB64',
      accentForeground: '#171309',
      border: '#243530',
      ring: '#4AA896',
      success: '#3FB97E',
      warning: '#E29E38',
      error: '#DE5656',
      interactiveHover: '#57B5A3',
      interactiveActive: '#3E9484',
      interactiveDisabled: '#3B4D47'
    },
    light: {
      background: '#F5F7F6',
      surface: '#FFFFFF',
      surfaceSecondary: '#E9EFEA',
      foreground: '#152420',
      foregroundMuted: '#586A64',
      primary: '#246D60',
      primaryForeground: '#FFFFFF',
      accent: '#B58638',
      accentForeground: '#FFFFFF',
      border: '#D3DFDC',
      ring: '#246D60',
      success: '#238355',
      warning: '#B36D12',
      error: '#C63434',
      interactiveHover: '#1D5A4F',
      interactiveActive: '#17473E',
      interactiveDisabled: '#B5C4BF'
    }
  },
  typography: {
    fontFamilySans: 'Inter, system-ui, -apple-system, sans-serif',
    fontFamilySerif: 'Georgia, Cambria, serif',
    fontFamilyMono: 'ui-monospace, SFMono-Regular, Menlo, monospace',
    headingFont: 'sans',
    bodyFont: 'sans',
    scaleRatio: 1.25,
    baseFontSize: 16,
    headingLineHeight: 1.2,
    bodyLineHeight: 1.6,
    headingWeight: 700,
    bodyWeight: 400,
    letterSpacingHeadings: '-0.02em',
    letterSpacingBody: '0em'
  },
  layout: {
    baseSpacing: 8,
    sectionSpacing: 64,
    contentMaxWidth: '72rem',
    borderRadius: 8,
    borderWidth: 1,
    density: 'comfortable'
  },
  motion: {
    style: 'subtle', // Default: Subtle reveal
    intensity: 30,   // Default: 30% intensity
    durationMultiplier: 1.0
  }
};
