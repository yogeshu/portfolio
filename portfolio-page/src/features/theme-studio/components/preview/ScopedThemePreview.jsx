import React, { useMemo } from 'react';
import { hexToTailwindHslString } from '../../utils/color';
import PreviewNavigation from './PreviewNavigation';
import PreviewHero from './PreviewHero';
import PreviewCardSection from './PreviewCardSection';
import PreviewFormSection from './PreviewFormSection';
import PreviewUIStates from './PreviewUIStates';

/**
 * ScopedThemePreview container that applies CSS variables locally to its container.
 * Completely isolates theme preview from the host website's global styles.
 */
const ScopedThemePreview = ({ theme, mode, label }) => {
  const activeMode = mode || theme.mode || 'dark';
  const activeColors = theme.colors[activeMode] || theme.colors.dark;

  const fontFamilies = {
    sans: theme.typography.fontFamilySans,
    serif: theme.typography.fontFamilySerif,
    mono: theme.typography.fontFamilyMono
  };

  const headingFont = fontFamilies[theme.typography.headingFont] || fontFamilies.sans;
  const bodyFont = fontFamilies[theme.typography.bodyFont] || fontFamilies.sans;

  // Compute motion duration
  let motionMs = 200;
  if (theme.motion.style === 'none') motionMs = 0;
  else if (theme.motion.style === 'subtle') motionMs = 150 + (theme.motion.intensity * 1.5);
  else if (theme.motion.style === 'smooth') motionMs = 250 + (theme.motion.intensity * 2.0);
  else if (theme.motion.style === 'expressive') motionMs = 350 + (theme.motion.intensity * 3.5);

  const motionEasing = theme.motion.style === 'expressive'
    ? 'cubic-bezier(0.34, 1.56, 0.64, 1)'
    : 'cubic-bezier(0.4, 0, 0.2, 1)';

  // Density padding multiplier
  const densityPadding = theme.layout.density === 'compact' ? '0.75rem' : theme.layout.density === 'spacious' ? '1.5rem' : '1rem';

  const scopedStyles = useMemo(() => {
    return {
      // Tailwind HSL tokens
      '--background': hexToTailwindHslString(activeColors.background),
      '--foreground': hexToTailwindHslString(activeColors.foreground),
      '--card': hexToTailwindHslString(activeColors.surface),
      '--card-foreground': hexToTailwindHslString(activeColors.foreground),
      '--popover': hexToTailwindHslString(activeColors.surface),
      '--popover-foreground': hexToTailwindHslString(activeColors.foreground),
      '--primary': hexToTailwindHslString(activeColors.primary),
      '--primary-foreground': hexToTailwindHslString(activeColors.primaryForeground),
      '--secondary': hexToTailwindHslString(activeColors.surfaceSecondary),
      '--secondary-foreground': hexToTailwindHslString(activeColors.foreground),
      '--muted': hexToTailwindHslString(activeColors.surfaceSecondary),
      '--muted-foreground': hexToTailwindHslString(activeColors.foregroundMuted),
      '--accent': hexToTailwindHslString(activeColors.accent),
      '--accent-foreground': hexToTailwindHslString(activeColors.accentForeground),
      '--destructive': hexToTailwindHslString(activeColors.error),
      '--destructive-foreground': hexToTailwindHslString(activeColors.primaryForeground),
      '--border': hexToTailwindHslString(activeColors.border),
      '--input': hexToTailwindHslString(activeColors.border),
      '--ring': hexToTailwindHslString(activeColors.ring),
      '--radius': `${theme.layout.borderRadius}px`,

      // Direct semantic colors
      '--theme-color-bg': activeColors.background,
      '--theme-color-surface': activeColors.surface,
      '--theme-color-surface-sec': activeColors.surfaceSecondary,
      '--theme-color-text': activeColors.foreground,
      '--theme-color-text-muted': activeColors.foregroundMuted,
      '--theme-color-primary': activeColors.primary,
      '--theme-color-primary-fg': activeColors.primaryForeground,
      '--theme-color-accent': activeColors.accent,
      '--theme-color-border': activeColors.border,
      '--theme-color-success': activeColors.success,
      '--theme-color-warning': activeColors.warning,
      '--theme-color-error': activeColors.error,

      // Typography
      '--theme-font-heading': headingFont,
      '--theme-font-body': bodyFont,
      '--theme-lh-heading': theme.typography.headingLineHeight,
      '--theme-lh-body': theme.typography.bodyLineHeight,
      '--theme-fw-heading': theme.typography.headingWeight,
      '--theme-fw-body': theme.typography.bodyWeight,
      '--theme-spacing-h': theme.typography.letterSpacingHeadings,
      '--theme-spacing-b': theme.typography.letterSpacingBody,

      // Layout
      '--theme-base-spacing': `${theme.layout.baseSpacing}px`,
      '--theme-border-width': `${theme.layout.borderWidth}px`,
      '--theme-density-padding': densityPadding,

      // Motion
      '--theme-motion-duration': `${motionMs}ms`,
      '--theme-motion-easing': motionEasing,

      // Apply body font and background
      fontFamily: bodyFont,
      backgroundColor: activeColors.background,
      color: activeColors.foreground,
      transition: `background-color ${motionMs}ms ${motionEasing}, color ${motionMs}ms ${motionEasing}`
    };
  }, [activeColors, theme, headingFont, bodyFont, motionMs, motionEasing, densityPadding]);

  return (
    <div
      style={scopedStyles}
      className={`theme-preview-root w-full rounded-xl overflow-hidden border border-border shadow-2xl ${activeMode === 'dark' ? 'dark' : ''}`}
      data-theme-id={theme.id}
      data-theme-mode={activeMode}
    >
      {/* Scope Header Badge */}
      {label && (
        <div className="px-4 py-2 bg-secondary/80 border-b border-border text-xs font-mono font-semibold flex items-center justify-between text-muted-foreground">
          <span>{label}</span>
          <span className="uppercase text-[10px] tracking-wider bg-background px-2 py-0.5 rounded border border-border">
            {theme.name} • {activeMode.toUpperCase()}
          </span>
        </div>
      )}

      {/* Realistic Interface Sections */}
      <div className="space-y-12 p-4 sm:p-8 max-w-[var(--layout-content-max-width)] mx-auto">
        <PreviewNavigation theme={theme} mode={activeMode} />
        <PreviewHero theme={theme} mode={activeMode} />
        <PreviewCardSection theme={theme} mode={activeMode} />
        <PreviewUIStates theme={theme} mode={activeMode} />
        <PreviewFormSection theme={theme} mode={activeMode} />
      </div>
    </div>
  );
};

export default ScopedThemePreview;
