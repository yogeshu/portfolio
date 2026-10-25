/**
 * Automated test suite for Theme Studio utilities, algorithms, presets, and export.
 * Run with: node scripts/test-theme-studio.js
 */

import {
  normalizeHex,
  hexToRgb,
  rgbToHex,
  rgbToHsl,
  hslToRgb,
  hexToHsl,
  hslToHex,
  parseColorToHex,
  hexToTailwindHslString,
  sanitizeCssValue
} from '../src/features/theme-studio/utils/color.js';

import {
  getRelativeLuminance,
  getContrastRatio,
  evaluateCompliance,
  suggestContrastAdjustment,
  runContrastAudit
} from '../src/features/theme-studio/utils/contrast.js';

import { THEME_PRESETS, getPresetById, getDefaultTheme } from '../src/features/theme-studio/presets/index.js';
import { generateThemeCss } from '../src/features/theme-studio/utils/export.js';
import { validateThemeConfig } from '../src/features/theme-studio/utils/storage.js';

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    passed++;
    console.log(`  ✓ ${message}`);
  } else {
    failed++;
    console.error(`  ❌ FAILED: ${message}`);
  }
}

console.log('🧪 Starting Theme Studio Test Suite...\n');

// ---------------------------------------------------------------------------
// 1. Color Conversion & Parsing Tests
// ---------------------------------------------------------------------------
console.log('1. Testing Color Conversion & Parsing Utilities');

assert(normalizeHex('#fff') === '#FFFFFF', 'Normalizes 3-char hex #fff to #FFFFFF');
assert(normalizeHex('#2e6f62') === '#2E6F62', 'Normalizes 6-char hex #2e6f62 to #2E6F62');
assert(normalizeHex('4e9f8e') === '#4E9F8E', 'Normalizes hex string missing # prefix');
assert(normalizeHex('invalid') === null, 'Returns null for invalid hex string');

const rgb = hexToRgb('#FFFFFF');
assert(rgb.r === 255 && rgb.g === 255 && rgb.b === 255, 'hexToRgb converts #FFFFFF to {r:255, g:255, b:255}');

const rgbBlack = hexToRgb('#000000');
assert(rgbBlack.r === 0 && rgbBlack.g === 0 && rgbBlack.b === 0, 'hexToRgb converts #000000 to {r:0, g:0, b:0}');

const backHex = rgbToHex(46, 111, 98);
assert(backHex === '#2E6F62', 'rgbToHex converts (46, 111, 98) back to #2E6F62');

const parsedRgb = parseColorToHex('rgb(46, 111, 98)');
assert(parsedRgb === '#2E6F62', 'parseColorToHex parses rgb(46, 111, 98)');

const parsedHsl = parseColorToHex('hsl(168, 41%, 31%)');
assert(parsedHsl !== null && parsedHsl.startsWith('#'), 'parseColorToHex parses hsl string to valid hex');

const tailwindHsl = hexToTailwindHslString('#2E6F62');
assert(typeof tailwindHsl === 'string' && tailwindHsl.includes('%'), 'hexToTailwindHslString produces valid Tailwind HSL format');

assert(sanitizeCssValue('red; background: black') === 'red background: black', 'sanitizeCssValue removes dangerous semicolon from CSS value');

// ---------------------------------------------------------------------------
// 2. WCAG Contrast & Luminance Tests
// ---------------------------------------------------------------------------
console.log('\n2. Testing WCAG 2.1 Contrast & Accessibility Calculations');

const lumBlack = getRelativeLuminance('#000000');
assert(lumBlack === 0, 'Relative luminance of #000000 is 0.0');

const lumWhite = getRelativeLuminance('#FFFFFF');
assert(Math.abs(lumWhite - 1.0) < 0.001, 'Relative luminance of #FFFFFF is 1.0');

const contrastMax = getContrastRatio('#FFFFFF', '#000000');
assert(contrastMax === 21, 'Contrast ratio between black and white is exactly 21:1');

const contrastIdentical = getContrastRatio('#2E6F62', '#2E6F62');
assert(contrastIdentical === 1, 'Contrast ratio between identical colors is exactly 1:1');

const evalPass = evaluateCompliance(7.5);
assert(evalPass.normalAa && evalPass.largeAa && evalPass.aaa, '7.5:1 ratio passes AA, Large AA, and AAA');

const evalFail = evaluateCompliance(2.5);
assert(!evalFail.normalAa && !evalFail.largeAa && !evalFail.aaa, '2.5:1 ratio fails all WCAG standards');

// Test suggestion generator
const lowContrastFg = '#444444';
const darkBg = '#101010';
const suggestion = suggestContrastAdjustment(lowContrastFg, darkBg, 4.5);
assert(suggestion !== null, 'Suggests adjustment for failing contrast ratio');
if (suggestion) {
  const newRatio = getContrastRatio(suggestion, darkBg);
  assert(newRatio >= 4.5, `Suggested color ${suggestion} achieves >= 4.5:1 ratio (actual: ${newRatio}:1)`);
}

// ---------------------------------------------------------------------------
// 3. Presets Integrity Tests
// ---------------------------------------------------------------------------
console.log('\n3. Testing Theme Presets Integrity');

assert(THEME_PRESETS.length === 5, 'Exactly 5 distinct visual presets registered');

const expectedPresetIds = ['verdigris', 'editorial', 'monochrome', 'earth-mineral', 'high-contrast'];
for (const id of expectedPresetIds) {
  const preset = getPresetById(id);
  assert(preset && preset.id === id, `Preset '${id}' loads correctly via getPresetById`);
  assert(validateThemeConfig(preset), `Preset '${id}' passes full theme schema validation`);
  assert(Boolean(preset.colors.light.background), `Preset '${id}' has light background`);
  assert(Boolean(preset.colors.dark.background), `Preset '${id}' has dark background`);
  assert(Boolean(preset.typography.scaleRatio), `Preset '${id}' has typography scaleRatio`);
  assert(Boolean(preset.layout.borderRadius !== undefined), `Preset '${id}' has layout borderRadius`);
  assert(Boolean(preset.motion.style), `Preset '${id}' has motion style`);
}

const defaultTheme = getDefaultTheme();
assert(defaultTheme.id === 'verdigris', 'Default theme is Verdigris');
assert(defaultTheme.mode === 'dark', 'Default appearance mode is Dark');
assert(defaultTheme.motion.style === 'subtle', 'Default motion style is Subtle reveal');
assert(defaultTheme.motion.intensity === 30, 'Default motion intensity is 30%');

// ---------------------------------------------------------------------------
// 4. CSS Export Tests
// ---------------------------------------------------------------------------
console.log('\n4. Testing CSS Custom Properties Export');

const exportedCss = generateThemeCss(defaultTheme);
assert(typeof exportedCss === 'string' && exportedCss.length > 500, 'generateThemeCss returns non-empty CSS string');
assert(exportedCss.includes(':root {'), 'Exported CSS includes :root block');
assert(exportedCss.includes('.dark {'), 'Exported CSS includes .dark block');
assert(exportedCss.includes('--color-primary:'), 'Exported CSS defines --color-primary');
assert(exportedCss.includes('--font-family-heading:'), 'Exported CSS defines --font-family-heading');
assert(exportedCss.includes('--motion-duration-base:'), 'Exported CSS defines --motion-duration-base');
assert(exportedCss.includes('@media (prefers-reduced-motion: reduce)'), 'Exported CSS includes prefers-reduced-motion block');

// ---------------------------------------------------------------------------
// 5. Test Contrast Audit on Default Theme
// ---------------------------------------------------------------------------
console.log('\n5. Testing Live Contrast Audit Matrix');

const darkAudit = runContrastAudit(defaultTheme.colors.dark);
assert(Array.isArray(darkAudit) && darkAudit.length >= 6, 'runContrastAudit checks at least 6 key color pairs');
const primaryTextAudit = darkAudit.find(p => p.id === 'text-on-bg');
assert(primaryTextAudit && primaryTextAudit.normalAa, 'Default theme primary text on dark background passes WCAG AA');

// ---------------------------------------------------------------------------
// Summary
// ---------------------------------------------------------------------------
console.log(`\n========================================`);
console.log(`Results: ${passed} passed, ${failed} failed`);
console.log(`========================================\n`);

if (failed > 0) {
  process.exit(1);
} else {
  console.log('🎉 ALL THEME STUDIO TESTS PASSED PERFECTLY!\n');
}
