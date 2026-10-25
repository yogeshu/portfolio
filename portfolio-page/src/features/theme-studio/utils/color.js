/**
 * Color parsing, conversion, and validation utilities for Theme Studio.
 * Supports HEX, RGB, and HSL color formats with safe fallbacks and Tailwind HSL string format.
 */

/**
 * Clamp a number between min and max.
 * @param {number} val 
 * @param {number} min 
 * @param {number} max 
 * @returns {number}
 */
export const clamp = (val, min, max) => Math.min(Math.max(val, min), max);

/**
 * Validate and clean a hex color string.
 * @param {string} hex 
 * @returns {string|null} 6-character hex with # or null if invalid
 */
export const normalizeHex = (hex) => {
  if (typeof hex !== 'string') return null;
  const clean = hex.trim().replace(/^#/, '');
  if (/^[0-9a-fA-F]{3}$/.test(clean)) {
    return '#' + clean.split('').map(c => c + c).join('').toUpperCase();
  }
  if (/^[0-9a-fA-F]{6}$/.test(clean)) {
    return '#' + clean.toUpperCase();
  }
  if (/^[0-9a-fA-F]{8}$/.test(clean)) {
    return '#' + clean.slice(0, 6).toUpperCase();
  }
  return null;
};

/**
 * Convert HEX to RGB {r, g, b}.
 * @param {string} hex 
 * @returns {{r: number, g: number, b: number}}
 */
export const hexToRgb = (hex) => {
  const normalized = normalizeHex(hex) || '#000000';
  const clean = normalized.replace('#', '');
  const r = parseInt(clean.substring(0, 2), 16);
  const g = parseInt(clean.substring(2, 4), 16);
  const b = parseInt(clean.substring(4, 6), 16);
  return { r, g, b };
};

/**
 * Convert RGB {r, g, b} to HEX.
 * @param {number} r 0-255
 * @param {number} g 0-255
 * @param {number} b 0-255
 * @returns {string} #RRGGBB
 */
export const rgbToHex = (r, g, b) => {
  const cr = clamp(Math.round(r), 0, 255);
  const cg = clamp(Math.round(g), 0, 255);
  const cb = clamp(Math.round(b), 0, 255);
  const toHex = (c) => c.toString(16).padStart(2, '0').toUpperCase();
  return `#${toHex(cr)}${toHex(cg)}${toHex(cb)}`;
};

/**
 * Convert RGB {r, g, b} to HSL {h, s, l}.
 * @param {number} r 0-255
 * @param {number} g 0-255
 * @param {number} b 0-255
 * @returns {{h: number, s: number, l: number}} h: 0-360, s: 0-100, l: 0-100
 */
export const rgbToHsl = (r, g, b) => {
  const rn = clamp(r, 0, 255) / 255;
  const gn = clamp(g, 0, 255) / 255;
  const bn = clamp(b, 0, 255) / 255;

  const max = Math.max(rn, gn, bn);
  const min = Math.min(rn, gn, bn);
  const delta = max - min;

  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (delta !== 0) {
    s = l > 0.5 ? delta / (2 - max - min) : delta / (max + min);
    if (max === rn) {
      h = ((gn - bn) / delta + (gn < bn ? 6 : 0)) / 6;
    } else if (max === gn) {
      h = ((bn - rn) / delta + 2) / 6;
    } else {
      h = ((rn - gn) / delta + 4) / 6;
    }
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100)
  };
};

/**
 * Convert HSL {h, s, l} to RGB {r, g, b}.
 * @param {number} h 0-360
 * @param {number} s 0-100
 * @param {number} l 0-100
 * @returns {{r: number, g: number, b: number}}
 */
export const hslToRgb = (h, s, l) => {
  const hn = ((h % 360) + 360) % 360 / 360;
  const sn = clamp(s, 0, 100) / 100;
  const ln = clamp(l, 0, 100) / 100;

  if (sn === 0) {
    const val = Math.round(ln * 255);
    return { r: val, g: val, b: val };
  }

  const q = ln < 0.5 ? ln * (1 + sn) : ln + sn - ln * sn;
  const p = 2 * ln - q;

  const hue2rgb = (pVal, qVal, tVal) => {
    let t = tVal;
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return pVal + (qVal - pVal) * 6 * t;
    if (t < 1 / 2) return qVal;
    if (t < 2 / 3) return pVal + (qVal - pVal) * (2 / 3 - t) * 6;
    return pVal;
  };

  return {
    r: Math.round(hue2rgb(p, q, hn + 1 / 3) * 255),
    g: Math.round(hue2rgb(p, q, hn) * 255),
    b: Math.round(hue2rgb(p, q, hn - 1 / 3) * 255)
  };
};

/**
 * Convert HEX string directly to HSL.
 * @param {string} hex 
 * @returns {{h: number, s: number, l: number}}
 */
export const hexToHsl = (hex) => {
  const rgb = hexToRgb(hex);
  return rgbToHsl(rgb.r, rgb.g, rgb.b);
};

/**
 * Convert HSL directly to HEX.
 * @param {number} h 
 * @param {number} s 
 * @param {number} l 
 * @returns {string} #RRGGBB
 */
export const hslToHex = (h, s, l) => {
  const rgb = hslToRgb(h, s, l);
  return rgbToHex(rgb.r, rgb.g, rgb.b);
};

/**
 * Convert any supported color string (HEX, RGB, HSL) into a normalized HEX string.
 * Returns null if the string cannot be parsed.
 * @param {string} input 
 * @returns {string|null}
 */
export const parseColorToHex = (input) => {
  if (!input || typeof input !== 'string') return null;
  const str = input.trim();

  // 1. Try HEX
  const hexNorm = normalizeHex(str);
  if (hexNorm) return hexNorm;

  // 2. Try RGB/RGBA e.g. "rgb(46, 111, 98)" or "rgba(46, 111, 98, 0.9)"
  const rgbMatch = str.match(/^rgba?\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/i);
  if (rgbMatch) {
    const r = parseInt(rgbMatch[1], 10);
    const g = parseInt(rgbMatch[2], 10);
    const b = parseInt(rgbMatch[3], 10);
    return rgbToHex(r, g, b);
  }

  // 3. Try HSL/HSLA e.g. "hsl(167, 41%, 31%)" or "hsla(167, 41%, 31%, 1)"
  const hslMatch = str.match(/^hsla?\s*\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\s*%\s*,\s*(\d+(?:\.\d+)?)\s*%/i);
  if (hslMatch) {
    const h = parseFloat(hslMatch[1]);
    const s = parseFloat(hslMatch[2]);
    const l = parseFloat(hslMatch[3]);
    return hslToHex(h, s, l);
  }

  return null;
};

/**
 * Format HEX color as a Tailwind-compatible HSL variable string: "h s% l%"
 * Example: "#2E6F62" -> "168 41.4% 30.8%"
 * @param {string} hex 
 * @returns {string}
 */
export const hexToTailwindHslString = (hex) => {
  const { h, s, l } = hexToHsl(hex);
  return `${h} ${s}% ${l}%`;
};

/**
 * Format a color into standard strings for display and copying.
 * @param {string} hex 
 * @returns {{hex: string, rgb: string, hsl: string}}
 */
export const formatColorFormats = (hex) => {
  const norm = normalizeHex(hex) || '#000000';
  const rgb = hexToRgb(norm);
  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
  return {
    hex: norm,
    rgb: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`,
    hsl: `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`
  };
};

/**
 * Escape string for safe inclusion in CSS properties to prevent injection.
 * @param {string} val 
 * @returns {string}
 */
export const sanitizeCssValue = (val) => {
  if (typeof val !== 'string') return String(val);
  return val.replace(/[<>{};]/g, '').trim();
};
