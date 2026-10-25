/**
 * CSS custom properties export generator and file downloader.
 */

import { hexToTailwindHslString, sanitizeCssValue, formatColorFormats } from './color.js';

/**
 * Generate production-ready CSS custom properties for a theme.
 * Includes both :root (light mode) and .dark (dark mode) definitions,
 * along with typography, layout, and motion tokens.
 * 
 * @param {import('../types/theme').ThemeConfig} theme 
 * @returns {string} Clean CSS code
 */
export const generateThemeCss = (theme) => {
  const { colors, typography, layout, motion, name, id } = theme;

  const fontFamilies = {
    sans: typography.fontFamilySans,
    serif: typography.fontFamilySerif,
    mono: typography.fontFamilyMono
  };

  const headingFont = fontFamilies[typography.headingFont] || fontFamilies.sans;
  const bodyFont = fontFamilies[typography.bodyFont] || fontFamilies.sans;

  // Calculate motion duration in ms based on style and intensity
  let baseMotionMs = 200;
  if (motion.style === 'none') baseMotionMs = 0;
  else if (motion.style === 'subtle') baseMotionMs = 150 + (motion.intensity * 1.5);
  else if (motion.style === 'smooth') baseMotionMs = 250 + (motion.intensity * 2.0);
  else if (motion.style === 'expressive') baseMotionMs = 350 + (motion.intensity * 3.5);

  const motionEasing = motion.style === 'expressive'
    ? 'cubic-bezier(0.34, 1.56, 0.64, 1)'
    : 'cubic-bezier(0.4, 0, 0.2, 1)';

  // Density multiplier for spacing
  const densityMultiplier = layout.density === 'compact' ? 0.75 : layout.density === 'spacious' ? 1.25 : 1.0;

  // Format light tokens
  const light = colors.light;
  const dark = colors.dark;

  const lines = [
    `/* ==========================================================================`,
    `   Theme Studio Export: ${sanitizeCssValue(name)} (${sanitizeCssValue(id)})`,
    `   Generated: ${new Date().toISOString()}`,
    `   ========================================================================== */`,
    ``,
    `/* Global Design Tokens & Typography */`,
    `:root {`,
    `  /* Typography */`,
    `  --font-family-heading: ${sanitizeCssValue(headingFont)};`,
    `  --font-family-body: ${sanitizeCssValue(bodyFont)};`,
    `  --font-size-base: ${typography.baseFontSize}px;`,
    `  --font-scale-ratio: ${typography.scaleRatio};`,
    `  --font-weight-heading: ${typography.headingWeight};`,
    `  --font-weight-body: ${typography.bodyWeight};`,
    `  --line-height-heading: ${typography.headingLineHeight};`,
    `  --line-height-body: ${typography.bodyLineHeight};`,
    `  --letter-spacing-heading: ${sanitizeCssValue(typography.letterSpacingHeadings)};`,
    `  --letter-spacing-body: ${sanitizeCssValue(typography.letterSpacingBody)};`,
    ``,
    `  /* Layout & Spacing */`,
    `  --spacing-base: ${layout.baseSpacing}px;`,
    `  --spacing-density-multiplier: ${densityMultiplier};`,
    `  --spacing-section: ${layout.sectionSpacing}px;`,
    `  --layout-content-max-width: ${sanitizeCssValue(layout.contentMaxWidth)};`,
    `  --border-radius: ${layout.borderRadius}px;`,
    `  --border-width: ${layout.borderWidth}px;`,
    ``,
    `  /* Motion & Animation */`,
    `  --motion-duration-base: ${baseMotionMs}ms;`,
    `  --motion-easing-base: ${motionEasing};`,
    `  --motion-intensity: ${motion.intensity}%;`,
    ``,
    `  /* Light Mode Semantic Hex Tokens */`,
    `  --color-background: ${sanitizeCssValue(light.background)};`,
    `  --color-surface: ${sanitizeCssValue(light.surface)};`,
    `  --color-surface-secondary: ${sanitizeCssValue(light.surfaceSecondary)};`,
    `  --color-text-primary: ${sanitizeCssValue(light.foreground)};`,
    `  --color-text-secondary: ${sanitizeCssValue(light.foregroundMuted)};`,
    `  --color-primary: ${sanitizeCssValue(light.primary)};`,
    `  --color-primary-foreground: ${sanitizeCssValue(light.primaryForeground)};`,
    `  --color-accent: ${sanitizeCssValue(light.accent)};`,
    `  --color-accent-foreground: ${sanitizeCssValue(light.accentForeground)};`,
    `  --color-border: ${sanitizeCssValue(light.border)};`,
    `  --color-ring: ${sanitizeCssValue(light.ring)};`,
    `  --color-success: ${sanitizeCssValue(light.success)};`,
    `  --color-warning: ${sanitizeCssValue(light.warning)};`,
    `  --color-error: ${sanitizeCssValue(light.error)};`,
    ``,
    `  /* Tailwind HSL Values (Light Mode) */`,
    `  --background: ${hexToTailwindHslString(light.background)};`,
    `  --foreground: ${hexToTailwindHslString(light.foreground)};`,
    `  --card: ${hexToTailwindHslString(light.surface)};`,
    `  --card-foreground: ${hexToTailwindHslString(light.foreground)};`,
    `  --popover: ${hexToTailwindHslString(light.surface)};`,
    `  --popover-foreground: ${hexToTailwindHslString(light.foreground)};`,
    `  --primary: ${hexToTailwindHslString(light.primary)};`,
    `  --primary-foreground: ${hexToTailwindHslString(light.primaryForeground)};`,
    `  --secondary: ${hexToTailwindHslString(light.surfaceSecondary)};`,
    `  --secondary-foreground: ${hexToTailwindHslString(light.foreground)};`,
    `  --muted: ${hexToTailwindHslString(light.surfaceSecondary)};`,
    `  --muted-foreground: ${hexToTailwindHslString(light.foregroundMuted)};`,
    `  --accent: ${hexToTailwindHslString(light.accent)};`,
    `  --accent-foreground: ${hexToTailwindHslString(light.accentForeground)};`,
    `  --destructive: ${hexToTailwindHslString(light.error)};`,
    `  --destructive-foreground: ${hexToTailwindHslString(light.primaryForeground)};`,
    `  --border: ${hexToTailwindHslString(light.border)};`,
    `  --input: ${hexToTailwindHslString(light.border)};`,
    `  --ring: ${hexToTailwindHslString(light.ring)};`,
    `  --radius: ${layout.borderRadius}px;`,
    `}`,
    ``,
    `/* Dark Mode Tokens */`,
    `.dark {`,
    `  /* Dark Mode Semantic Hex Tokens */`,
    `  --color-background: ${sanitizeCssValue(dark.background)};`,
    `  --color-surface: ${sanitizeCssValue(dark.surface)};`,
    `  --color-surface-secondary: ${sanitizeCssValue(dark.surfaceSecondary)};`,
    `  --color-text-primary: ${sanitizeCssValue(dark.foreground)};`,
    `  --color-text-secondary: ${sanitizeCssValue(dark.foregroundMuted)};`,
    `  --color-primary: ${sanitizeCssValue(dark.primary)};`,
    `  --color-primary-foreground: ${sanitizeCssValue(dark.primaryForeground)};`,
    `  --color-accent: ${sanitizeCssValue(dark.accent)};`,
    `  --color-accent-foreground: ${sanitizeCssValue(dark.accentForeground)};`,
    `  --color-border: ${sanitizeCssValue(dark.border)};`,
    `  --color-ring: ${sanitizeCssValue(dark.ring)};`,
    `  --color-success: ${sanitizeCssValue(dark.success)};`,
    `  --color-warning: ${sanitizeCssValue(dark.warning)};`,
    `  --color-error: ${sanitizeCssValue(dark.error)};`,
    ``,
    `  /* Tailwind HSL Values (Dark Mode) */`,
    `  --background: ${hexToTailwindHslString(dark.background)};`,
    `  --foreground: ${hexToTailwindHslString(dark.foreground)};`,
    `  --card: ${hexToTailwindHslString(dark.surface)};`,
    `  --card-foreground: ${hexToTailwindHslString(dark.foreground)};`,
    `  --popover: ${hexToTailwindHslString(dark.surface)};`,
    `  --popover-foreground: ${hexToTailwindHslString(dark.foreground)};`,
    `  --primary: ${hexToTailwindHslString(dark.primary)};`,
    `  --primary-foreground: ${hexToTailwindHslString(dark.primaryForeground)};`,
    `  --secondary: ${hexToTailwindHslString(dark.surfaceSecondary)};`,
    `  --secondary-foreground: ${hexToTailwindHslString(dark.foreground)};`,
    `  --muted: ${hexToTailwindHslString(dark.surfaceSecondary)};`,
    `  --muted-foreground: ${hexToTailwindHslString(dark.foregroundMuted)};`,
    `  --accent: ${hexToTailwindHslString(dark.accent)};`,
    `  --accent-foreground: ${hexToTailwindHslString(dark.accentForeground)};`,
    `  --destructive: ${hexToTailwindHslString(dark.error)};`,
    `  --destructive-foreground: ${hexToTailwindHslString(dark.primaryForeground)};`,
    `  --border: ${hexToTailwindHslString(dark.border)};`,
    `  --input: ${hexToTailwindHslString(dark.border)};`,
    `  --ring: ${hexToTailwindHslString(dark.ring)};`,
    `}`,
    ``,
    `/* Prefers-Reduced-Motion Override */`,
    `@media (prefers-reduced-motion: reduce) {`,
    `  *, ::before, ::after {`,
    `    animation-duration: 0.01ms !important;`,
    `    animation-iteration-count: 1 !important;`,
    `    transition-duration: 0.01ms !important;`,
    `    scroll-behavior: auto !important;`,
    `  }`,
    `}`
  ];

  return lines.join('\n');
};

/**
 * Trigger client-side browser file download of a CSS string.
 * @param {string} filename 
 * @param {string} cssContent 
 */
export const downloadCssFile = (filename, cssContent) => {
  if (typeof window === 'undefined') return;
  const blob = new Blob([cssContent], { type: 'text/css;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename || 'theme-tokens.css';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
