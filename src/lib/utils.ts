/**
 * Utility functions for the portfolio
 * Place shared helper functions here
 */

/**
 * Combines class names conditionally
 * Useful for dynamic Tailwind class application
 * 
 * @example
 * cn('base-class', condition && 'conditional-class', 'another-class')
 */
export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Format a date to a readable string
 * 
 * @param date - Date to format
 * @returns Formatted date string
 */
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

/**
 * Truncate text to a specified length
 * 
 * @param text - Text to truncate
 * @param length - Maximum length
 * @returns Truncated text with ellipsis if needed
 */
export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length).trim() + '...';
}
