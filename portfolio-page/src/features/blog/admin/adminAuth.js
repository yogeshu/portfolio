// src/features/blog/admin/adminAuth.js

const AUTH_CONFIG = {
  SESSION_KEY: 'yb_admin_auth_session',
  PASSWORD_KEY: 'yb_admin_custom_hash',
  FAILED_ATTEMPTS_KEY: 'yb_admin_failed_attempts',
  LOCKOUT_UNTIL_KEY: 'yb_admin_lockout_until',
  SESSION_DURATION_MS: 4 * 60 * 60 * 1000, // 4 hours
  MAX_FAILED_ATTEMPTS: 5,
  LOCKOUT_DURATION_MS: 5 * 60 * 1000, // 5 minutes
};

/**
 * Standard SHA-256 hash using the Web Crypto API
 */
export async function sha256(message) {
  if (typeof window !== 'undefined' && window.crypto?.subtle) {
    const msgUint8 = new TextEncoder().encode(message);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
  }
  // Fallback for Node test environments
  const nodeCrypto = await import('node:crypto');
  return nodeCrypto.createHash('sha256').update(message).digest('hex');
}

/**
 * Check if an admin credential has been configured (either via build-time env var or browser setup)
 */
export function isAdminConfigured() {
  if (typeof window === 'undefined') return false;
  // 1. Environment variable hash configured in .env.local or deployment platform
  const envHash = typeof import.meta !== 'undefined' && import.meta.env?.VITE_ADMIN_PASSWORD_HASH;
  if (envHash && envHash.trim()) return true;

  // 2. Custom hash stored securely in this browser instance
  const customHash = localStorage.getItem(AUTH_CONFIG.PASSWORD_KEY);
  return Boolean(customHash && customHash.trim());
}

/**
 * Get the expected password hash
 */
export async function getExpectedPasswordHash() {
  if (typeof window === 'undefined') return '';
  const envHash = typeof import.meta !== 'undefined' && import.meta.env?.VITE_ADMIN_PASSWORD_HASH;
  if (envHash && envHash.trim()) {
    return envHash.trim().toLowerCase();
  }
  const customHash = localStorage.getItem(AUTH_CONFIG.PASSWORD_KEY);
  return (customHash || '').trim().toLowerCase();
}

/**
 * First-time initialization of master passphrase (when no env var or stored hash exists)
 */
export async function setupInitialPassword(newPassword) {
  if (isAdminConfigured()) {
    throw new Error('Admin passphrase has already been configured on this instance.');
  }

  if (!newPassword || newPassword.length < 8) {
    throw new Error('Passphrase must be at least 8 characters long.');
  }

  const hash = await sha256(newPassword);
  localStorage.setItem(AUTH_CONFIG.PASSWORD_KEY, hash);

  // Automatically start authenticated session
  const token = `adm_${Date.now()}_${Math.random().toString(36).substring(2)}`;
  const sessionData = {
    token,
    expiresAt: Date.now() + AUTH_CONFIG.SESSION_DURATION_MS,
    user: {
      name: 'Yogesh Bhavsar',
      role: 'Site Owner & Administrator',
      email: 'yogeshbhavsar1994@gmail.com',
    },
  };

  sessionStorage.setItem(AUTH_CONFIG.SESSION_KEY, JSON.stringify(sessionData));
  return sessionData.user;
}

export function checkLockout() {
  if (typeof window === 'undefined') return { isLocked: false, remainingSeconds: 0 };
  const lockoutUntil = parseInt(localStorage.getItem(AUTH_CONFIG.LOCKOUT_UNTIL_KEY) || '0', 10);
  const now = Date.now();
  if (lockoutUntil > now) {
    const remainingSeconds = Math.ceil((lockoutUntil - now) / 1000);
    return { isLocked: true, remainingSeconds };
  }
  return { isLocked: false, remainingSeconds: 0 };
}

export async function loginAdmin(password) {
  if (!isAdminConfigured()) {
    throw new Error('SETUP_REQUIRED');
  }

  const { isLocked, remainingSeconds } = checkLockout();
  if (isLocked) {
    throw new Error(`Too many failed attempts. Account locked for ${remainingSeconds}s.`);
  }

  const expectedHash = await getExpectedPasswordHash();
  const inputHash = await sha256(password);

  if (inputHash.toLowerCase() === expectedHash) {
    // Reset failed attempts upon successful login
    localStorage.removeItem(AUTH_CONFIG.FAILED_ATTEMPTS_KEY);
    localStorage.removeItem(AUTH_CONFIG.LOCKOUT_UNTIL_KEY);

    const token = `adm_${Date.now()}_${Math.random().toString(36).substring(2)}`;
    const sessionData = {
      token,
      expiresAt: Date.now() + AUTH_CONFIG.SESSION_DURATION_MS,
      user: {
        name: 'Yogesh Bhavsar',
        role: 'Site Owner & Administrator',
        email: 'yogeshbhavsar1994@gmail.com',
      },
    };

    sessionStorage.setItem(AUTH_CONFIG.SESSION_KEY, JSON.stringify(sessionData));
    return sessionData.user;
  } else {
    const failedAttempts = parseInt(localStorage.getItem(AUTH_CONFIG.FAILED_ATTEMPTS_KEY) || '0', 10) + 1;
    localStorage.setItem(AUTH_CONFIG.FAILED_ATTEMPTS_KEY, failedAttempts.toString());

    if (failedAttempts >= AUTH_CONFIG.MAX_FAILED_ATTEMPTS) {
      const lockoutUntil = Date.now() + AUTH_CONFIG.LOCKOUT_DURATION_MS;
      localStorage.setItem(AUTH_CONFIG.LOCKOUT_UNTIL_KEY, lockoutUntil.toString());
      throw new Error('Account locked due to 5 consecutive failed attempts. Try again in 5 minutes.');
    }

    throw new Error(`Invalid passphrase. ${AUTH_CONFIG.MAX_FAILED_ATTEMPTS - failedAttempts} attempts remaining.`);
  }
}

export function logoutAdmin() {
  if (typeof window === 'undefined') return;
  sessionStorage.removeItem(AUTH_CONFIG.SESSION_KEY);
}

export function isAuthenticated() {
  if (typeof window === 'undefined') return false;
  try {
    const raw = sessionStorage.getItem(AUTH_CONFIG.SESSION_KEY);
    if (!raw) return false;
    const session = JSON.parse(raw);
    if (Date.now() > session.expiresAt) {
      sessionStorage.removeItem(AUTH_CONFIG.SESSION_KEY);
      return false;
    }
    return true;
  } catch {
    return false;
  }
}

export function getCurrentAdminUser() {
  if (!isAuthenticated()) return null;
  try {
    const raw = sessionStorage.getItem(AUTH_CONFIG.SESSION_KEY);
    return JSON.parse(raw).user;
  } catch {
    return null;
  }
}

export async function changeAdminPassword(currentPassword, newPassword) {
  if (!isAuthenticated()) {
    throw new Error('Unauthorized');
  }

  const expectedHash = await getExpectedPasswordHash();
  const inputHash = await sha256(currentPassword);

  if (inputHash.toLowerCase() !== expectedHash) {
    throw new Error('Current passphrase does not match.');
  }

  if (!newPassword || newPassword.length < 8) {
    throw new Error('New passphrase must be at least 8 characters long.');
  }

  const newHash = await sha256(newPassword);
  localStorage.setItem(AUTH_CONFIG.PASSWORD_KEY, newHash);
  return true;
}
