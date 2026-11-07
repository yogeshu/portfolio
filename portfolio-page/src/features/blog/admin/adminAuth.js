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

// In-memory brute-force defense in addition to persistent storage
let inMemoryFailedAttempts = 0;
let inMemoryLockoutUntil = 0;

/**
 * Generate a cryptographically secure random session token
 */
export function generateSecureToken() {
  const cryptoObj = typeof window !== 'undefined' ? window.crypto : globalThis.crypto;
  if (cryptoObj?.getRandomValues) {
    const bytes = new Uint8Array(24);
    cryptoObj.getRandomValues(bytes);
    return `adm_${Array.from(bytes).map((b) => b.toString(16).padStart(2, '0')).join('')}`;
  }
  return `adm_${Date.now()}_${Math.random().toString(36).substring(2)}`;
}

/**
 * Standard SHA-256 hash using Web Crypto API (browser) or node:crypto (tests)
 */
export async function sha256(message) {
  if (typeof window !== 'undefined' && window.crypto?.subtle) {
    const msgUint8 = new TextEncoder().encode(message);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
  }
  const nodeCrypto = await import('node:crypto');
  return nodeCrypto.createHash('sha256').update(message).digest('hex');
}

/**
 * PBKDF2 Key Derivation with 100,000 iterations for GPU attack resistance
 */
export async function derivePbkdf2Hash(password, saltHex, iterations = 100000) {
  if (typeof window !== 'undefined' && window.crypto?.subtle) {
    const enc = new TextEncoder();
    const keyMaterial = await crypto.subtle.importKey(
      'raw',
      enc.encode(password),
      'PBKDF2',
      false,
      ['deriveBits']
    );
    const saltBytes = new Uint8Array(
      saltHex.match(/.{1,2}/g).map((byte) => parseInt(byte, 16))
    );
    const derived = await crypto.subtle.deriveBits(
      {
        name: 'PBKDF2',
        salt: saltBytes,
        iterations,
        hash: 'SHA-256',
      },
      keyMaterial,
      256
    );
    const hashArray = Array.from(new Uint8Array(derived));
    return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
  }
  const nodeCrypto = await import('node:crypto');
  const saltBuf = Buffer.from(saltHex, 'hex');
  return nodeCrypto.pbkdf2Sync(password, saltBuf, iterations, 32, 'sha256').toString('hex');
}

/**
 * Verify password against stored hash (supports both PBKDF2 stretched hash and legacy SHA-256)
 */
export async function verifyPassword(password, expectedHash) {
  if (!expectedHash) return false;
  const cleanExpected = expectedHash.trim();

  // 1. Check for PBKDF2 format: pbkdf2:<iterations>:<saltHex>:<hashHex>
  if (cleanExpected.startsWith('pbkdf2:')) {
    const parts = cleanExpected.split(':');
    if (parts.length === 4) {
      const iterations = parseInt(parts[1], 10) || 100000;
      const saltHex = parts[2];
      const targetHash = parts[3];
      const derived = await derivePbkdf2Hash(password, saltHex, iterations);
      return derived.toLowerCase() === targetHash.toLowerCase();
    }
  }

  // 2. Fallback to standard SHA-256 comparison
  const inputHash = await sha256(password);
  return inputHash.toLowerCase() === cleanExpected.toLowerCase();
}

/**
 * Returns true if running in production build (e.g. deployed on yogeshbhavsar.com)
 */
export function isProductionEnvironment() {
  if (typeof import.meta !== 'undefined' && import.meta.env?.PROD) {
    return true;
  }
  if (typeof window !== 'undefined' && window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
    return true;
  }
  return false;
}

/**
 * Check if the admin hash was provided via build environment variable
 */
export function isEnvConfigured() {
  const envHash = typeof import.meta !== 'undefined' && import.meta.env?.VITE_ADMIN_PASSWORD_HASH;
  return Boolean(envHash && envHash.trim());
}

/**
 * Check if an admin credential has been configured
 */
export function isAdminConfigured() {
  if (typeof window === 'undefined') return false;
  // 1. Environment variable hash configured in .env.local or deployment platform
  if (isEnvConfigured()) return true;

  // 2. In production, we ONLY trust the environment variable VITE_ADMIN_PASSWORD_HASH.
  // We NEVER allow public strangers on the live website to create an ad-hoc local password.
  if (isProductionEnvironment()) {
    return false;
  }

  // 3. In local development (localhost), allow local developer setup
  const customHash = localStorage.getItem(AUTH_CONFIG.PASSWORD_KEY);
  return Boolean(customHash && customHash.trim());
}

/**
 * Check if the admin portal is completely locked (production without env hash configured)
 */
export function isProductionLocked() {
  return isProductionEnvironment() && !isAdminConfigured();
}

/**
 * Get the expected password hash
 */
export async function getExpectedPasswordHash() {
  if (typeof window === 'undefined') return '';
  const envHash = typeof import.meta !== 'undefined' && import.meta.env?.VITE_ADMIN_PASSWORD_HASH;
  if (envHash && envHash.trim()) {
    return envHash.replace(/\s+/g, '').trim();
  }
  if (!isProductionEnvironment()) {
    const customHash = localStorage.getItem(AUTH_CONFIG.PASSWORD_KEY);
    return (customHash || '').replace(/\s+/g, '').trim();
  }
  return '';
}

/**
 * First-time initialization of master passphrase (ALLOWED ONLY ON LOCALHOST)
 */
export async function setupInitialPassword(newPassword) {
  if (isProductionEnvironment()) {
    throw new Error('Public registration is disabled. You must configure VITE_ADMIN_PASSWORD_HASH in your hosting environment variables.');
  }

  if (isAdminConfigured()) {
    throw new Error('Admin passphrase has already been configured on this instance.');
  }

  if (!newPassword || newPassword.length < 8) {
    throw new Error('Passphrase must be at least 8 characters long.');
  }

  let hash;
  if (typeof window !== 'undefined' && window.crypto?.getRandomValues) {
    const saltBytes = new Uint8Array(16);
    window.crypto.getRandomValues(saltBytes);
    const saltHex = Array.from(saltBytes).map((b) => b.toString(16).padStart(2, '0')).join('');
    const derived = await derivePbkdf2Hash(newPassword, saltHex, 100000);
    hash = `pbkdf2:100000:${saltHex}:${derived}`;
  } else {
    hash = await sha256(newPassword);
  }

  localStorage.setItem(AUTH_CONFIG.PASSWORD_KEY, hash);

  // Automatically start authenticated session with cryptographically secure token
  const token = generateSecureToken();
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
  const now = Date.now();
  // Check memory lockout first
  if (inMemoryLockoutUntil > now) {
    const remainingSeconds = Math.ceil((inMemoryLockoutUntil - now) / 1000);
    return { isLocked: true, remainingSeconds };
  }

  if (typeof window === 'undefined') return { isLocked: false, remainingSeconds: 0 };
  const lockoutUntil = parseInt(localStorage.getItem(AUTH_CONFIG.LOCKOUT_UNTIL_KEY) || '0', 10);
  if (lockoutUntil > now) {
    const remainingSeconds = Math.ceil((lockoutUntil - now) / 1000);
    return { isLocked: true, remainingSeconds };
  }
  return { isLocked: false, remainingSeconds: 0 };
}

export async function loginAdmin(password) {
  if (isProductionLocked()) {
    throw new Error('PRODUCTION_LOCKED');
  }

  if (!isAdminConfigured()) {
    throw new Error('SETUP_REQUIRED');
  }

  const { isLocked, remainingSeconds } = checkLockout();
  if (isLocked) {
    throw new Error(`Too many failed attempts. Account locked for ${remainingSeconds}s.`);
  }

  const expectedHash = await getExpectedPasswordHash();
  const isValid = await verifyPassword(password, expectedHash);

  if (isValid) {
    // Reset failed attempts upon successful login
    inMemoryFailedAttempts = 0;
    inMemoryLockoutUntil = 0;
    localStorage.removeItem(AUTH_CONFIG.FAILED_ATTEMPTS_KEY);
    localStorage.removeItem(AUTH_CONFIG.LOCKOUT_UNTIL_KEY);

    const token = generateSecureToken();
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
    inMemoryFailedAttempts++;
    const storedFailedAttempts = parseInt(localStorage.getItem(AUTH_CONFIG.FAILED_ATTEMPTS_KEY) || '0', 10) + 1;
    const failedAttempts = Math.max(inMemoryFailedAttempts, storedFailedAttempts);
    localStorage.setItem(AUTH_CONFIG.FAILED_ATTEMPTS_KEY, failedAttempts.toString());

    if (failedAttempts >= AUTH_CONFIG.MAX_FAILED_ATTEMPTS) {
      const lockoutUntil = Date.now() + AUTH_CONFIG.LOCKOUT_DURATION_MS;
      inMemoryLockoutUntil = lockoutUntil;
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

  if (isProductionEnvironment() || isEnvConfigured()) {
    throw new Error(
      'In-browser password change is restricted when using build environment variables or production hosting. Generate a new hash with scripts/generate-password-hash.js, update VITE_ADMIN_PASSWORD_HASH, and redeploy.'
    );
  }

  const expectedHash = await getExpectedPasswordHash();
  const isValid = await verifyPassword(currentPassword, expectedHash);

  if (!isValid) {
    throw new Error('Current passphrase does not match.');
  }

  if (!newPassword || newPassword.length < 8) {
    throw new Error('New passphrase must be at least 8 characters long.');
  }

  let newHash;
  if (typeof window !== 'undefined' && window.crypto?.getRandomValues) {
    const saltBytes = new Uint8Array(16);
    window.crypto.getRandomValues(saltBytes);
    const saltHex = Array.from(saltBytes).map((b) => b.toString(16).padStart(2, '0')).join('');
    const derived = await derivePbkdf2Hash(newPassword, saltHex, 100000);
    newHash = `pbkdf2:100000:${saltHex}:${derived}`;
  } else {
    newHash = await sha256(newPassword);
  }

  localStorage.setItem(AUTH_CONFIG.PASSWORD_KEY, newHash);
  return true;
}
