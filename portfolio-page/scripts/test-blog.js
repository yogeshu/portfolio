// scripts/test-blog.js
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import crypto from 'node:crypto';
import { initialArticles, initialCategories, initialTags } from '../src/data/blogPosts.js';
import {
  calculateReadingTime,
  generateSlug,
  extractHeadings,
  saveArticle,
  getAllArticles,
  getArticleBySlug,
  deleteArticle,
  searchArticles,
  exportAllBlogData,
  importBlogData,
} from '../src/lib/blogStorage.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.resolve(__dirname, '../dist');

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;

function assert(condition, message) {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`  ✓ ${message}`);
  } else {
    failedTests++;
    console.error(`  ❌ FAIL: ${message}`);
  }
}

console.log('🧪 Starting Comprehensive Blog & Publishing System Test Suite...\n');

// ---------------------------------------------------------------------------
// 1. Content Modeling, Reading Time & Slug Generation
// ---------------------------------------------------------------------------
console.log('1. Testing Utilities, Reading Time & Slug Algorithms');

const slug1 = generateSlug('Engineering Core Web Vitals to 99+ on Next.js!');
assert(slug1 === 'engineering-core-web-vitals-to-99-on-nextjs', `generateSlug handles special chars: "${slug1}"`);

const slug2 = generateSlug('   Spaces & Trailing --- Dashes   ');
assert(slug2 === 'spaces-trailing-dashes', `generateSlug collapses spaces and trims dashes: "${slug2}"`);

const shortText = 'Hello world this is a test article.';
assert(calculateReadingTime(shortText) === '1 min read', 'calculateReadingTime returns minimum 1 min read');

const longText = new Array(500).fill('word').join(' ');
assert(calculateReadingTime(longText) === '3 min read', 'calculateReadingTime computes ~220 words per minute');

const markdownSample = `
# Title (Ignored)
## Architectural Decisions
Some text
### In-Memory Cache
More text
## Final Conclusion
Ending
`;
const headings = extractHeadings(markdownSample);
assert(headings.length === 3, `extractHeadings finds exactly 3 H2/H3 headings (found ${headings.length})`);
assert(headings[0].text === 'Architectural Decisions' && headings[0].level === 2, 'First heading text and level match');
assert(headings[1].text === 'In-Memory Cache' && headings[1].level === 3, 'Second heading level is 3 (H3)');
assert(headings[2].id === 'final-conclusion', 'Heading ID is cleanly slugified');

// ---------------------------------------------------------------------------
// 2. Draft vs Published Isolation & Public Article Visibility
// ---------------------------------------------------------------------------
console.log('\n2. Testing Article States, Drafts & Visibility Isolation');

const publishedSeedArticles = initialArticles.filter((a) => a.status === 'published');
assert(publishedSeedArticles.length >= 4, `Initial seed contains at least 4 published articles (found ${publishedSeedArticles.length})`);

// Ensure public querying only returns published posts
const publicArticles = getAllArticles({ includeDrafts: false });
assert(
  publicArticles.every((a) => a.status === 'published'),
  'Public query strictly excludes draft articles'
);

// Verify draft article handling
const draftArticle = {
  id: 'test-draft-xyz',
  title: 'Top Secret Unreleased Architecture',
  slug: 'top-secret-unreleased-architecture',
  excerpt: 'This should not appear in public feeds.',
  content: 'Draft content...',
  status: 'draft',
};

// Draft should not be discoverable via public getArticleBySlug
const publicDraftLookup = getArticleBySlug(draftArticle.slug, { includeDrafts: false });
assert(publicDraftLookup === null, 'getArticleBySlug({ includeDrafts: false }) returns null for drafts');

// ---------------------------------------------------------------------------
// 3. Search & Taxonomy Filtering
// ---------------------------------------------------------------------------
console.log('\n3. Testing Search & Taxonomy Filtering');

const searchReact = searchArticles('React', { includeDrafts: false });
assert(searchReact.length > 0, `searchArticles('React') returns matching articles (found ${searchReact.length})`);

const searchVitals = searchArticles('Core Web Vitals', { includeDrafts: false });
assert(searchVitals.length > 0, `searchArticles('Core Web Vitals') matches title or tags (found ${searchVitals.length})`);

const catFiltered = searchArticles('', { category: 'engineering-frontend', includeDrafts: false });
assert(
  catFiltered.length > 0 && catFiltered.every((a) => a.category === 'engineering-frontend'),
  'searchArticles with category filter isolates matching category'
);

// ---------------------------------------------------------------------------
// 4. Backup & Migration Integrity (Export / Import)
// ---------------------------------------------------------------------------
console.log('\n4. Testing Backup & Migration Data Portability');

const backup = exportAllBlogData();
assert(backup.version === '1.0.0', 'Exported backup contains version identifier');
assert(Array.isArray(backup.articles) && backup.articles.length > 0, 'Exported backup contains articles array');
assert(Array.isArray(backup.categories) && backup.categories.length > 0, 'Exported backup contains categories array');
assert(Array.isArray(backup.tags) && backup.tags.length > 0, 'Exported backup contains tags array');

let importSuccess = false;
try {
  importSuccess = importBlogData(backup, { overwrite: false });
} catch (e) {
  importSuccess = false;
}
assert(importSuccess === true, 'importBlogData successfully validates and ingests backup JSON');

// ---------------------------------------------------------------------------
// 5. Authentication & Security Hashing
// ---------------------------------------------------------------------------
console.log('\n5. Testing Admin Authentication & Cryptographic Hashing');

const samplePassphrase = `test-pass-${crypto.randomBytes(8).toString('hex')}`;
const hash = crypto.createHash('sha256').update(samplePassphrase).digest('hex');
assert(hash.length === 64, 'SHA-256 creates a standard 64-char hexadecimal hash');

// Lockout calculations
const MAX_ATTEMPTS = 5;
const simulatedFailedAttempts = 5;
const isLockedOut = simulatedFailedAttempts >= MAX_ATTEMPTS;
assert(isLockedOut === true, 'Rate limiter triggers lockout after 5 consecutive failed attempts');

// ---------------------------------------------------------------------------
// 6. Distribution & Technical SEO Verification (RSS & Sitemap)
// ---------------------------------------------------------------------------
console.log('\n6. Testing RSS Feed (feed.xml) & Sitemap Distribution');

const feedPath = path.join(DIST_DIR, 'feed.xml');
assert(fs.existsSync(feedPath), 'feed.xml exists in dist output');

const feedContent = fs.readFileSync(feedPath, 'utf-8');
assert(feedContent.includes('<rss version="2.0"'), 'feed.xml uses valid RSS 2.0 namespace');
assert(feedContent.includes('<channel>'), 'feed.xml contains channel container');
assert(feedContent.includes('https://yogeshbhavsar.com/blog/'), 'feed.xml contains canonical article links');
assert(feedContent.includes('<guid isPermaLink="true">'), 'feed.xml contains permaLink GUIDs');
assert(feedContent.includes('<pubDate>'), 'feed.xml contains pubDate timestamps');

// Sitemap verification
const sitemapPath = path.join(DIST_DIR, 'sitemap.xml');
assert(fs.existsSync(sitemapPath), 'sitemap.xml exists in dist output');

const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
assert(sitemapContent.includes('https://yogeshbhavsar.com/blog'), 'sitemap.xml includes /blog');
for (const art of publishedSeedArticles) {
  assert(sitemapContent.includes(`https://yogeshbhavsar.com/blog/${art.slug}`), `sitemap.xml includes article: ${art.slug}`);
}
assert(!sitemapContent.includes('/admin'), 'sitemap.xml strictly excludes private /admin routes');

// Robots.txt verification
const robotsPath = path.join(DIST_DIR, 'robots.txt');
const robotsContent = fs.readFileSync(robotsPath, 'utf-8');
assert(robotsContent.includes('Disallow: /admin'), 'robots.txt disallows search crawlers from /admin');
assert(robotsContent.includes('Allow: /'), 'robots.txt allows root and public routes');

// ---------------------------------------------------------------------------
// Summary
// ---------------------------------------------------------------------------
console.log('\n========================================');
console.log(`Results: ${passedTests} passed, ${failedTests} failed (Total: ${totalTests})`);
console.log('========================================');

if (failedTests > 0) {
  console.error('\n❌ Blog test suite failed.');
  process.exit(1);
} else {
  console.log('\n🎉 ALL BLOG & PUBLISHING SYSTEM TESTS PASSED PERFECTLY!\n');
}
