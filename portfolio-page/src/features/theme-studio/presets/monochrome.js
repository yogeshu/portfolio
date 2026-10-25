/**
 * Monochrome Theme Preset
 * Black, white, and carefully balanced neutral grays without chromatic distraction.
 */

export const monochromePreset = {
  id: 'monochrome',
  name: 'Monochrome',
  description: 'Black, white, and neutral grays with stark architectural contrast and typography focus.',
  mode: 'dark',
  colors: {
    dark: {
      background: '#0A0A0A',
      surface: '#141414',
      surfaceSecondary: '#1F1F1F',
      foreground: '#FAFAFA',
      foregroundMuted: '#8A8A8A',
      primary: '#FFFFFF',
      primaryForeground: '#000000',
      accent: '#B0B0B0',
      accentForeground: '#000000',
      border: '#282828',
      ring: '#FFFFFF',
      success: '#4ADE80',
      warning: '#FACC15',
      error: '#F87171',
      interactiveHover: '#E5E5E5',
      interactiveActive: '#CCCCCC',
      interactiveDisabled: '#3F3F3F'
    },
    light: {
      background: '#FFFFFF',
      surface: '#F8F8F8',
      surfaceSecondary: '#EEEEEE',
      foreground: '#0A0A0A',
      foregroundMuted: '#5C5C5C',
      primary: '#121212',
      primaryForeground: '#FFFFFF',
      accent: '#444444',
      accentForeground: '#FFFFFF',
      border: '#D8D8D8',
      ring: '#121212',
      success: '#16A34A',
      warning: '#CA8A04',
      error: '#DC2626',
      interactiveHover: '#2A2A2A',
      interactiveActive: '#3D3D3D',
      interactiveDisabled: '#BEBEBE'
    }
  },
  typography: {
    fontFamilySans: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
    fontFamilySerif: 'Georgia, serif',
    fontFamilyMono: 'ui-monospace, SFMono-Regular, "Roboto Mono", monospace',
    headingFont: 'sans',
    bodyFont: 'sans',
    scaleRatio: 1.25,
    baseFontSize: 15,
    headingLineHeight: 1.2,
    bodyLineHeight: 1.55,
    headingWeight: 800,
    bodyWeight: 400,
    letterSpacingHeadings: '-0.03em',
    letterSpacingBody: '-0.01em'
  },
  layout: {
    baseSpacing: 8,
    sectionSpacing: 64,
    contentMaxWidth: '72rem',
    borderRadius: 2, // Minimalist stark corners
    borderWidth: 1,
    density: 'compact'
  },
  motion: {
    style: 'smooth',
    intensity: 25,
    durationMultiplier: 1.0
  }
};
