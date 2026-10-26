import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.resolve(__dirname, '../dist');

const expectedRoutes = [
  { path: '', canonical: 'https://yogeshbhavsar.com/', expectedTitle: 'Yogesh Bhavsar' },
  { path: 'web-development', canonical: 'https://yogeshbhavsar.com/web-development', expectedTitle: 'Web Developer for Small Business' },
  { path: 'frontend-development', canonical: 'https://yogeshbhavsar.com/frontend-development', expectedTitle: 'Freelance Frontend Developer' },
  { path: 'react-nextjs-development', canonical: 'https://yogeshbhavsar.com/react-nextjs-development', expectedTitle: 'React & Next.js Development' },
  { path: 'frontend-consulting', canonical: 'https://yogeshbhavsar.com/frontend-consulting', expectedTitle: 'Frontend Architecture & Performance Consulting' },
  { path: 'projects', canonical: 'https://yogeshbhavsar.com/projects', expectedTitle: 'Selected Work' },
  { path: 'projects/frontendyogi', canonical: 'https://yogeshbhavsar.com/projects/frontendyogi', expectedTitle: 'FrontendYogi' },
  { path: 'projects/writer-mirror', canonical: 'https://yogeshbhavsar.com/projects/writer-mirror', expectedTitle: 'Writer Mirror' },
  { path: 'projects/her-sanctuary', canonical: 'https://yogeshbhavsar.com/projects/her-sanctuary', expectedTitle: 'Her Sanctuary' },
  { path: 'case-studies/privacy-first-browser-tools', canonical: 'https://yogeshbhavsar.com/case-studies/privacy-first-browser-tools', expectedTitle: 'Building Privacy-First Browser Tools' },
  { path: 'case-studies/image-comparison-ux', canonical: 'https://yogeshbhavsar.com/case-studies/image-comparison-ux', expectedTitle: 'Designing a Better Image Comparison Tool' },
  { path: 'case-studies/local-first-document-workflows', canonical: 'https://yogeshbhavsar.com/case-studies/local-first-document-workflows', expectedTitle: 'Building a Local-First Document and Presentation Workflow' },
  { path: 'case-studies/local-photo-processing', canonical: 'https://yogeshbhavsar.com/case-studies/local-photo-processing', expectedTitle: 'Processing and Organizing Large Photo Collections Locally' },
  { path: 'case-studies/react-application-architecture', canonical: 'https://yogeshbhavsar.com/case-studies/react-application-architecture', expectedTitle: 'Frontend Architecture for Complex Interactive Applications' },
  { path: 'case-studies/research-workflow-engineering', canonical: 'https://yogeshbhavsar.com/case-studies/research-workflow-engineering', expectedTitle: 'Building a Reliable Research Ingestion Workflow' },
  { path: 'experience', canonical: 'https://yogeshbhavsar.com/experience', expectedTitle: 'Work Experience' },
  { path: 'about', canonical: 'https://yogeshbhavsar.com/about', expectedTitle: 'About Yogesh Bhavsar' },
  { path: 'skills', canonical: 'https://yogeshbhavsar.com/skills', expectedTitle: 'Technical Skills' },
  { path: 'contact', canonical: 'https://yogeshbhavsar.com/contact', expectedTitle: 'Contact Yogesh Bhavsar' },
];

let failed = false;

console.log(`Running Comprehensive Technical SEO Verification on ${expectedRoutes.length} Routes...\n`);

for (const route of expectedRoutes) {
  const filePath = route.path === '' 
    ? path.join(DIST_DIR, 'index.html') 
    : path.join(DIST_DIR, route.path, 'index.html');

  if (!fs.existsSync(filePath)) {
    console.error(`❌ Missing static HTML for route /${route.path}: ${filePath}`);
    failed = true;
    continue;
  }

  const html = fs.readFileSync(filePath, 'utf-8');

  // Title check
  const titleMatch = html.match(/<title>(.*?)<\/title>/i);
  if (!titleMatch || !titleMatch[1].includes(route.expectedTitle)) {
    console.error(`❌ Title check failed for /${route.path}. Got: ${titleMatch ? titleMatch[1] : 'NONE'}`);
    failed = true;
  } else {
    console.log(`✓ /${route.path.padEnd(45)} Title: "${titleMatch[1].substring(0, 45)}..."`);
  }

  // Canonical check
  const canonicalMatch = html.match(/<link\s+rel="canonical"\s+href="(.*?)"\s*\/?>/i);
  if (!canonicalMatch || canonicalMatch[1] !== route.canonical) {
    console.error(`❌ Canonical check failed for /${route.path}. Expected ${route.canonical}, got: ${canonicalMatch ? canonicalMatch[1] : 'NONE'}`);
    failed = true;
  }

  // Description check
  const descMatch = html.match(/<meta\s+name="description"\s+content="(.*?)"\s*\/?>/i);
  if (!descMatch || descMatch[1].length < 25) {
    console.error(`❌ Description check failed for /${route.path}.`);
    failed = true;
  }

  // Structured Data JSON-LD check
  const jsonLdMatch = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/i);
  if (!jsonLdMatch) {
    console.error(`❌ Missing JSON-LD structured data for /${route.path}`);
    failed = true;
  } else {
    try {
      const parsed = JSON.parse(jsonLdMatch[1]);
      if (!parsed['@context'] || !parsed['@graph']) {
        console.error(`❌ Invalid Schema.org format for /${route.path}`);
        failed = true;
      }
    } catch (e) {
      console.error(`❌ JSON-LD JSON parse error for /${route.path}:`, e.message);
      failed = true;
    }
  }
}

// Sitemap check
const sitemapPath = path.join(DIST_DIR, 'sitemap.xml');
if (!fs.existsSync(sitemapPath)) {
  console.error('❌ Missing sitemap.xml in dist');
  failed = true;
} else {
  const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
  for (const route of expectedRoutes) {
    if (!sitemapContent.includes(route.canonical)) {
      console.error(`❌ Sitemap missing URL: ${route.canonical}`);
      failed = true;
    }
  }
  console.log(`\n✓ sitemap.xml verified: All ${expectedRoutes.length} canonical URLs present.`);
}

// Robots check
const robotsPath = path.join(DIST_DIR, 'robots.txt');
if (!fs.existsSync(robotsPath)) {
  console.error('❌ Missing robots.txt in dist');
  failed = true;
} else {
  const robotsContent = fs.readFileSync(robotsPath, 'utf-8');
  if (!robotsContent.includes('Sitemap: https://yogeshbhavsar.com/sitemap.xml')) {
    console.error('❌ robots.txt does not link to sitemap.xml');
    failed = true;
  } else {
    // Check for non-standard un-commented directives that cause Lighthouse SEO audit to fail
    const lines = robotsContent.split('\n').map(l => l.trim()).filter(l => l && !l.startsWith('#'));
    const validDirectives = ['user-agent:', 'allow:', 'disallow:', 'sitemap:', 'crawl-delay:'];
    const invalidLines = lines.filter(l => !validDirectives.some(vd => l.toLowerCase().startsWith(vd)));
    
    if (invalidLines.length > 0) {
      console.error('❌ robots.txt contains invalid RFC 9309 directives (breaks Lighthouse SEO audit):', invalidLines);
      failed = true;
    } else {
      console.log('✓ robots.txt verified: 100% RFC 9309 compliant (0 unknown directives, valid sitemap).');
    }
  }
}

// ---------------------------------------------------------------------------
// Lighthouse Agentic Browsing & Machine Discovery Checks
// ---------------------------------------------------------------------------
const llmsPath = path.join(DIST_DIR, 'llms.txt');
if (!fs.existsSync(llmsPath)) {
  console.error('❌ Missing llms.txt in dist (Required for Lighthouse Agentic Browsing)');
  failed = true;
} else {
  const llmsContent = fs.readFileSync(llmsPath, 'utf-8');
  if (!llmsContent.includes('Yogesh Bhavsar') || !llmsContent.includes('Core Capabilities')) {
    console.error('❌ llms.txt does not match standard structure');
    failed = true;
  } else {
    console.log('✓ llms.txt verified: Machine-readable summary for AI agents valid.');
  }
}

const aiCatalogPath = path.join(DIST_DIR, '.well-known/ai-catalog.json');
if (!fs.existsSync(aiCatalogPath)) {
  console.error('❌ Missing .well-known/ai-catalog.json in dist (Required for Lighthouse ard-schema audit)');
  failed = true;
} else {
  try {
    const catalog = JSON.parse(fs.readFileSync(aiCatalogPath, 'utf-8'));
    if (catalog.specVersion !== "1.0" || !Array.isArray(catalog.entries)) {
      console.error('❌ ai-catalog.json must have specVersion: "1.0" and an entries array (ARD Schema v1)');
      failed = true;
    } else {
      const allValid = catalog.entries.every(e => e.identifier && e.displayName && e.type && (e.url || e.data));
      if (!allValid) {
        console.error('❌ ai-catalog.json entries must have identifier, displayName, type, and url/data');
        failed = true;
      } else {
        console.log(`✓ .well-known/ai-catalog.json verified: 100% ARD Schema v1 compliant (${catalog.entries.length} valid entries).`);
      }
    }
  } catch (err) {
    console.error('❌ ai-catalog.json parse error:', err.message);
    failed = true;
  }
}

if (failed) {
  console.error('\n❌ Verification failed with errors.');
  process.exit(1);
} else {
  console.log(`\n🎉 ALL ${expectedRoutes.length} ROUTES & TECHNICAL SEO CHECKS PASSED PERFECTLY!`);
}
