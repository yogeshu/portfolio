#!/usr/bin/env node
import crypto from 'node:crypto';

const password = process.argv[2];

if (!password) {
  console.log(`
Usage:
  node scripts/generate-password-hash.js "<your-secret-passphrase>"

Example:
  node scripts/generate-password-hash.js "super-secret-passphrase-123"

Output:
  Generates a high-entropy, salted PBKDF2 hash (100,000 iterations)
  resistant to GPU dictionary attacks, to set as VITE_ADMIN_PASSWORD_HASH.
`);
  process.exit(1);
}

const salt = crypto.randomBytes(16).toString('hex');
const iterations = 100000;
const derivedKey = crypto.pbkdf2Sync(password.trim(), Buffer.from(salt, 'hex'), iterations, 32, 'sha256').toString('hex');
const pbkdf2Hash = `pbkdf2:${iterations}:${salt}:${derivedKey}`;

console.log('\n======================================================');
console.log('✅ Admin Passphrase PBKDF2 Hash Generated (100,000 rounds):');
console.log('======================================================');
console.log(`\n${pbkdf2Hash}\n`);
console.log('To configure this on your website without storing plain text:');
console.log('1. Add to .env.local (gitignored):');
console.log(`   VITE_ADMIN_PASSWORD_HASH=${pbkdf2Hash}`);
console.log('\n2. Then run your production build:');
console.log('   npm run build');
console.log('======================================================\n');
