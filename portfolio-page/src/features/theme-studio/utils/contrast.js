/**
 * WCAG 2.1 Contrast Ratio and Accessibility validation utilities.
 */

import { hexToRgb, rgbToHsl, hslToHex, hexToHsl } from './color.js';

/**
 * Calculate the relative luminance of a color per WCAG 2.1 specification.
 * https://www.w3.org/WAI/GL/wiki/Relative_luminance
 * @param {string} hex 
 * @returns {number} Luminance between 0.0 (darkest black) and 1.0 (lightest white)
 */
export const getRelativeLuminance = (hex) => {
  const { r, g, b } = hexToRgb(hex);
  
  const toLinear = (c8Bit) => {
    const sRGB = c8Bit / 255;
    return sRGB <= 0.03928
      ? sRGB / 12.92
      : Math.pow((sRGB + 0.055) / 1.055, 2.4);
  };

  const R = toLinear(r);
  const G = toLinear(g);
  const B = toLinear(b);

  return 0.2126 * R + 0.7152 * G + 0.0722 * B;
};

/**
 * Calculate the contrast ratio between two colors per WCAG 2.1.
 * Returns ratio as a number, e.g. 7.42.
 * @param {string} foregroundHex 
 * @param {string} backgroundHex 
 * @returns {number} Contrast ratio between 1.0 and 21.0
 */
export const getContrastRatio = (foregroundHex, backgroundHex) => {
  const l1 = getRelativeLuminance(foregroundHex);
  const l2 = getRelativeLuminance(backgroundHex);

  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);

  const ratio = (lighter + 0.05) / (darker + 0.05);
  return Math.round(ratio * 100) / 100;
};

/**
 * Evaluate WCAG compliance ratings for a contrast ratio.
 * @param {number} ratio 
 * @returns {{
 *   ratio: number,
 *   ratioFormatted: string,
 *   normalAa: boolean,
 *   largeAa: boolean,
 *   aaa: boolean,
 *   score: 'fail' | 'pass-large' | 'pass-aa' | 'pass-aaa',
 *   label: string
 * }}
 */
export const evaluateCompliance = (ratio) => {
  const normalAa = ratio >= 4.5;
  const largeAa = ratio >= 3.0;
  const aaa = ratio >= 7.0;

  let score = 'fail';
  let label = 'Fails WCAG';

  if (aaa) {
    score = 'pass-aaa';
    label = 'Passes AAA (7:1+)';
  } else if (normalAa) {
    score = 'pass-aa';
    label = 'Passes AA (4.5:1+)';
  } else if (largeAa) {
    score = 'pass-large';
    label = 'Passes AA for Large Text Only (3:1+)';
  }

  return {
    ratio,
    ratioFormatted: `${ratio.toFixed(2)}:1`,
    normalAa,
    largeAa,
    aaa,
    score,
    label
  };
};

/**
 * Suggest an adjusted foreground color that achieves >= targetRatio against background.
 * Adjusts lightness while preserving hue and saturation where possible.
 * Never silently changes the user's selection; returns a suggestion string or null.
 * 
 * @param {string} foregroundHex 
 * @param {string} backgroundHex 
 * @param {number} targetRatio default 4.5
 * @returns {string|null} Suggested HEX color or null if already compliant
 */
export const suggestContrastAdjustment = (foregroundHex, backgroundHex, targetRatio = 4.5) => {
  const currentRatio = getContrastRatio(foregroundHex, backgroundHex);
  if (currentRatio >= targetRatio) return null;

  const bgLum = getRelativeLuminance(backgroundHex);
  const { h, s } = hexToHsl(foregroundHex);

  // If background is dark, increase lightness toward 100%
  // If background is light, decrease lightness toward 0%
  const shouldLighten = bgLum < 0.5;

  let bestHex = null;
  let bestRatio = 0;

  if (shouldLighten) {
    for (let l = 100; l >= 0; l -= 2) {
      const candidate = hslToHex(h, s, l);
      const ratio = getContrastRatio(candidate, backgroundHex);
      if (ratio >= targetRatio) {
        bestHex = candidate;
        bestRatio = ratio;
      } else {
        // Once ratio drops below target while stepping down, stop
        if (bestHex) break;
      }
    }
  } else {
    for (let l = 0; l <= 100; l += 2) {
      const candidate = hslToHex(h, s, l);
      const ratio = getContrastRatio(candidate, backgroundHex);
      if (ratio >= targetRatio) {
        bestHex = candidate;
        bestRatio = ratio;
      } else {
        if (bestHex) break;
      }
    }
  }

  return bestHex;
};

/**
 * Run a comprehensive contrast audit across a theme's color palette.
 * @param {Record<string, string>} colors
 * @returns {Array<{
 *   id: string,
 *   pairName: string,
 *   foregroundToken: string,
 *   backgroundToken: string,
 *   foregroundColor: string,
 *   backgroundColor: string,
 *   ratio: number,
 *   ratioFormatted: string,
 *   normalAa: boolean,
 *   largeAa: boolean,
 *   aaa: boolean,
 *   score: string,
 *   label: string,
 *   suggestedColor: string|null
 * }>}
 */
export const runContrastAudit = (colors) => {
  const pairsToCheck = [
    {
      id: 'text-on-bg',
      pairName: 'Primary Text on Background',
      fgKey: 'foreground',
      bgKey: 'background',
      critical: true
    },
    {
      id: 'muted-on-bg',
      pairName: 'Muted Text on Background',
      fgKey: 'foregroundMuted',
      bgKey: 'background',
      critical: false
    },
    {
      id: 'text-on-surface',
      pairName: 'Primary Text on Surface (Card)',
      fgKey: 'foreground',
      bgKey: 'surface',
      critical: true
    },
    {
      id: 'muted-on-surface',
      pairName: 'Muted Text on Surface (Card)',
      fgKey: 'foregroundMuted',
      bgKey: 'surface',
      critical: false
    },
    {
      id: 'primary-button',
      pairName: 'Button Text on Primary Color',
      fgKey: 'primaryForeground',
      bgKey: 'primary',
      critical: true
    },
    {
      id: 'accent-on-bg',
      pairName: 'Accent Color on Background',
      fgKey: 'accent',
      bgKey: 'background',
      critical: false
    },
    {
      id: 'error-on-bg',
      pairName: 'Error Alert Text on Background',
      fgKey: 'error',
      bgKey: 'background',
      critical: true
    },
    {
      id: 'success-on-bg',
      pairName: 'Success Badge on Background',
      fgKey: 'success',
      bgKey: 'background',
      critical: false
    }
  ];

  return pairsToCheck.map(pair => {
    const fg = colors[pair.fgKey] || '#FFFFFF';
    const bg = colors[pair.bgKey] || '#000000';
    const ratio = getContrastRatio(fg, bg);
    const evalResult = evaluateCompliance(ratio);
    const suggestedColor = suggestContrastAdjustment(fg, bg);

    return {
      id: pair.id,
      pairName: pair.pairName,
      foregroundToken: pair.fgKey,
      backgroundToken: pair.bgKey,
      foregroundColor: fg,
      backgroundColor: bg,
      critical: pair.critical,
      ...evalResult,
      suggestedColor
    };
  });
};
