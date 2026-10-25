/**
 * High Contrast Theme Preset
 * Maximized contrast ratios (> 7:1 AAA standard), distinct focus states, and hyper-accessible interfaces.
 */

export const highContrastPreset = {
  id: 'high-contrast',
  name: 'High Contrast',
  description: 'Uncompromising accessibility with high contrast ratios exceeding WCAG AAA, distinct focus rings, and crisp borders.',
  mode: 'dark',
  colors: {
    dark: {
      background: '#000000',
      surface: '#0E0E0E',
      surfaceSecondary: '#1C1C1C',
      foreground: '#FFFFFF',
      foregroundMuted: '#CCCCCC',
      primary: '#FFE600', // Safety amber / yellow (14:1+ contrast on black)
      primaryForeground: '#000000',
      accent: '#00F0FF', // Electric cyan
      accentForeground: '#000000',
      border: '#4D4D4D',
      ring: '#FFE600',
      success: '#00FF88',
      warning: '#FFB700',
      error: '#FF4D4D',
      interactiveHover: '#FFF04D',
      interactiveActive: '#E6CF00',
      interactiveDisabled: '#404040'
    },
    light: {
      background: '#FFFFFF',
      surface: '#F5F5F5',
      surfaceSecondary: '#E5E5E5',
      foreground: '#000000',
      foregroundMuted: '#2B2B2B',
      primary: '#003399', // Deep royal cobalt (10.5:1+ contrast on white)
      primaryForeground: '#FFFFFF',
      accent: '#7D003E', // Deep magenta (8.8:1+ contrast on white)
      accentForeground: '#FFFFFF',
      border: '#000000', // Bold 2px border
      ring: '#003399',
      success: '#005A28',
      warning: '#8A4700',
      error: '#9E0000',
      interactiveHover: '#00256E',
      interactiveActive: '#00194A',
      interactiveDisabled: '#8A8A8A'
    }
  },
  typography: {
    fontFamilySans: 'Inter, system-ui, -apple-system, sans-serif',
    fontFamilySerif: 'Georgia, serif',
    fontFamilyMono: 'ui-monospace, SFMono-Regular, monospace',
    headingFont: 'sans',
    bodyFont: 'sans',
    scaleRatio: 1.25,
    baseFontSize: 16,
    headingLineHeight: 1.25,
    bodyLineHeight: 1.6,
    headingWeight: 800,
    bodyWeight: 500, // Medium weight for enhanced legibility
    letterSpacingHeadings: '-0.01em',
    letterSpacingBody: '0.01em'
  },
  layout: {
    baseSpacing: 8,
    sectionSpacing: 64,
    contentMaxWidth: '74rem',
    borderRadius: 6,
    borderWidth: 2, // Bold accessible borders
    density: 'comfortable'
  },
  motion: {
    style: 'subtle',
    intensity: 15, // Restrained motion for accessibility
    durationMultiplier: 0.8
  }
};
