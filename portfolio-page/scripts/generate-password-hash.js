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
  Generates a SHA-256 hash that you can set as VITE_ADMIN_PASSWORD_HASH
  in your .env.local file or deployment platform environment variables.
`);
  process.exit(1);
}

const hash = crypto.createHash('sha256').update(password.trim()).digest('hex');

console.log('\n======================================================');
console.log('✅ Admin Passphrase SHA-256 Hash Generated:');
console.log('======================================================');
console.log(`\n${hash}\n`);
console.log('To configure this on your website without storing plain text:');
console.log('1. Add to .env.local (gitignored):');
console.log(`   VITE_ADMIN_PASSWORD_HASH=${hash}`);
console.log('\n2. Or configure in Vercel / Netlify / Cloudflare Environment Variables:');
console.log(`   Key:   VITE_ADMIN_PASSWORD_HASH`);
console.log(`   Value: ${hash}`);
console.log('======================================================\n');
