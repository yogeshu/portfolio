// src/data/blogPosts.js

export const initialCategories = [
  {
    id: "cat-1",
    name: "Engineering & Frontend",
    slug: "engineering-frontend",
    description: "Deep technical dives into React internals, Next.js architecture, performance optimization, and scalable UI engineering.",
    color: "from-blue-500/20 to-cyan-500/20 text-cyan-500 border-cyan-500/30"
  },
  {
    id: "cat-2",
    name: "Building in Public",
    slug: "building-in-public",
    description: "Honest retrospective logs, engineering blueprints, and metrics behind shipping products and developer tools.",
    color: "from-emerald-500/20 to-teal-500/20 text-emerald-500 border-emerald-500/30"
  },
  {
    id: "cat-3",
    name: "Product & Startups",
    slug: "product-startups",
    description: "Bridging the gap between engineering craft, user intuition, technical leverage, and sustainable product execution.",
    color: "from-purple-500/20 to-indigo-500/20 text-purple-400 border-purple-500/30"
  },
  {
    id: "cat-4",
    name: "Privacy & Technology",
    slug: "privacy-tech",
    description: "Local-first computing, zero-latency workflows, client-side cryptography, and building software that respects user sovereignty.",
    color: "from-amber-500/20 to-orange-500/20 text-amber-500 border-amber-500/30"
  },
  {
    id: "cat-5",
    name: "Engineering Opinions",
    slug: "opinions",
    description: "Pragmatic perspectives on software complexity, architectural hype cycles, tool churn, and developer ergonomics.",
    color: "from-rose-500/20 to-pink-500/20 text-rose-400 border-rose-500/30"
  },
  {
    id: "cat-6",
    name: "Experiments & Learnings",
    slug: "experiments-learnings",
    description: "Hands-on explorations of new browser APIs, Web Workers, Canvas, performance profiling, and unconventional solutions.",
    color: "from-violet-500/20 to-fuchsia-500/20 text-violet-400 border-violet-500/30"
  }
];

export const initialTags = [
  "React",
  "Next.js",
  "Architecture",
  "Performance",
  "Core Web Vitals",
  "TypeScript",
  "Local-First",
  "Tailwind CSS",
  "Web Workers",
  "Design Systems",
  "Browser APIs",
  "Product Engineering"
];

export const initialArticles = [
  {
    id: "art-1",
    title: "Engineering Core Web Vitals to 99+ on Production Next.js & React Apps",
    slug: "engineering-core-web-vitals-99-nextjs-react",
    subtitle: "A systematic approach to diagnosing LCP bottlenecks, eliminating INP micro-stalls, and achieving predictable sub-second rendering.",
    excerpt: "Most web performance advice stops at image compression and lazy loading. Here is the architectural playbook I use to diagnose long tasks, optimize interaction latency, and keep Core Web Vitals strictly in the 99th percentile.",
    category: "engineering-frontend",
    tags: ["Performance", "Core Web Vitals", "Next.js", "React", "Architecture"],
    status: "published",
    featured: true,
    publishedAt: "2026-10-15T09:00:00.000Z",
    updatedAt: "2026-10-20T14:30:00.000Z",
    featuredImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Abstract performance analytics and telemetry dashboard visualization",
    readingTime: "7 min read",
    views: 1420,
    seoTitle: "Engineering Core Web Vitals to 99+ on Next.js & React — Yogesh Bhavsar",
    seoDescription: "Learn how to eliminate LCP delays, prevent INP stalls, and achieve 99+ PageSpeed scores in production React and Next.js applications.",
    canonicalUrl: "https://yogeshbhavsar.com/blog/engineering-core-web-vitals-99-nextjs-react",
    author: {
      name: "Yogesh Bhavsar",
      role: "Senior Frontend Engineer & Technical Architect",
      avatar: "/YogeshBhavsar-160.webp"
    },
    content: `
Performance is never an afterthought; it is an architectural contract you establish with your users. When an application feels sluggish, users don't blame the framework—they leave.

In modern frontend systems, achieving sub-second load times requires looking beyond standard advice like "compress your images" or "use a CDN." In this deep dive, we break down real-world techniques for subduing Largest Contentful Paint (LCP) and Interaction to Next Paint (INP).

## The LCP Anatomy: Where Time Is Actually Lost

Largest Contentful Paint is composed of four distinct sub-parts:

1. **Time to First Byte (TTFB)** — The time the server takes to respond.
2. **Resource Load Delay** — The time between TTFB and when the browser discovers the LCP element.
3. **Resource Load Duration** — The time spent downloading the LCP asset.
4. **Element Render Delay** — The time spent between asset download completion and pixels appearing on screen.

\`\`\`typescript
// Telemetry hook to observe exact LCP sub-part timings
export function observeLcpBreakdown(onReport: (metrics: LcpMetrics) => void) {
  if (typeof window === 'undefined') return;

  const observer = new PerformanceObserver((entryList) => {
    const entries = entryList.getEntries();
    const lastEntry = entries[entries.length - 1] as PerformanceEntry & {
      element?: Element;
      url?: string;
      renderTime?: number;
      loadTime?: number;
    };

    if (lastEntry) {
      const navEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const ttfb = navEntry ? navEntry.responseStart : 0;
      const lcpTime = lastEntry.renderTime || lastEntry.loadTime || lastEntry.startTime;

      onReport({
        totalLcp: lcpTime,
        ttfb,
        discoveryDelay: Math.max(0, (lastEntry.startTime || 0) - ttfb),
        elementTag: lastEntry.element?.tagName || 'UNKNOWN',
      });
    }
  });

  observer.observe({ type: 'largest-contentful-paint', buffered: true });
}
\`\`\`

### Common Mistake: Lazy Loading Hero Images

The single most frequent mistake in React codebases is applying \`loading="lazy"\` to the hero banner or profile avatar. When an image has \`loading="lazy"\`, the browser defers fetching until layout computation confirms its viewport presence.

> **Key Rule:** Always explicitly set \`fetchpriority="high"\` and pre-render modern format WebP or AVIF variants for your above-the-fold hero elements.

\`\`\`html
<!-- Anti-Pattern -->
<img src="/hero.jpg" loading="lazy" />

<!-- Production-Ready Optimized Pattern -->
<link rel="preload" as="image" href="/hero.webp" fetchpriority="high" type="image/webp" />
<img src="/hero.webp" fetchpriority="high" decoding="async" alt="Hero representation" />
\`\`\`

## Mastering INP: Eliminating Main-Thread Stalls

Interaction to Next Paint measures how quickly a page responds visually to user actions (clicks, taps, keyboard presses). 

When a user clicks a button and the main thread is occupied by massive reconciliation or un-chunked data parsing, the browser cannot paint the response frame.

### 1. Yielding to the Main Thread via scheduler.yield()

When processing data collections or heavy filtering, break the execution into macro-tasks:

\`\`\`javascript
async function processLargeDataset(items, processItem) {
  const BATCH_SIZE = 50;
  for (let i = 0; i < items.length; i++) {
    processItem(items[i]);
    
    // Yield every 50 items so the browser can paint user interactions
    if (i % BATCH_SIZE === 0) {
      if ('scheduler' in window && 'yield' in window.scheduler) {
        await window.scheduler.yield();
      } else {
        await new Promise((resolve) => setTimeout(resolve, 0));
      }
    }
  }
}
\`\`\`

### 2. Transition State Isolation

React 18's \`useTransition\` allows you to separate high-priority feedback (button ripple, input character display) from secondary UI updates (filtering list items).

| Interaction Layer | Priority | Tooling |
|---|---|---|
| Typing in search input | Immediate (High) | Standard \`useState\` |
| Rendering 500 search results | Non-urgent (Low) | \`startTransition\` |
| Telemetry & analytics | Background (Idle) | \`requestIdleCallback\` |

## Summary Checklist for 99+ Scores

- [x] Preload primary LCP WebP asset with \`fetchpriority="high"\`.
- [x] Zero layout shift: Always define explicit \`width\` and \`height\` or \`aspect-ratio\` on media.
- [x] Defer non-critical analytics (such as Google Tag Manager or GA4) until first user interaction.
- [x] Keep total blocking time (TBT) strictly below 100ms.
- [x] Audit bundle sizes periodically with rollup-plugin-visualizer.

Adhering to these principles will yield consistent high-tier Lighthouse audits and, more importantly, an effortless reading and navigating experience for real humans.
`
  },
  {
    id: "art-2",
    title: "Why We Built FrontendYogi as a Local-First Browser Tool Suite",
    slug: "why-we-built-frontendyogi-local-first",
    subtitle: "Eliminating server uploads, protecting user privacy, and achieving instantaneous utility response times.",
    excerpt: "Most web utilities upload your photos, documents, and code snippets to an opaque cloud server. When designing FrontendYogi, I chose a radical architecture: 100% client-side execution using Web Workers and Canvas.",
    category: "building-in-public",
    tags: ["Local-First", "Web Workers", "Privacy", "Architecture", "TypeScript"],
    status: "published",
    featured: true,
    publishedAt: "2026-09-28T11:00:00.000Z",
    updatedAt: "2026-10-02T16:15:00.000Z",
    featuredImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Code and developer workstation tooling on a modern workspace",
    readingTime: "6 min read",
    views: 980,
    seoTitle: "Why We Built FrontendYogi as a Local-First Tool Suite — Yogesh Bhavsar",
    seoDescription: "An architectural case study on building FrontendYogi: zero server latency, 100% client-side Web Workers, and absolute data privacy.",
    canonicalUrl: "https://yogeshbhavsar.com/blog/why-we-built-frontendyogi-local-first",
    author: {
      name: "Yogesh Bhavsar",
      role: "Senior Frontend Engineer & Technical Architect",
      avatar: "/YogeshBhavsar-160.webp"
    },
    content: `
When a developer needs to compress an image, generate a device mockup, or inspect a PDF diff, their first instinct is to Google a utility. Within seconds, they are uploading confidential company mockups, contracts, or personal photos to an unknown server.

That paradigm is broken. Not only is it a privacy risk, but it also wastes bandwidth and creates needless server latency.

## The Guiding Philosophy

When I started building [FrontendYogi](https://frontendyogi.com/), the architecture had to satisfy three strict principles:

1. **Zero Data Egress:** Not a single byte of user data leaves their device.
2. **Instant Feedback Loop:** Operations execute at the speed of local hardware.
3. **Offline Resilience:** The suite functions completely offline as a Progressive Web App.

## Offloading Heavy Tasks to Web Workers

In a standard SPA, resizing a 24-megapixel photo on an HTML5 canvas will freeze the main UI thread for hundreds of milliseconds, triggering dropped frames and jittery scrolling.

To solve this, all computation is delegated to an isolated worker thread using \`comlink\` and native \`Worker\` APIs.

\`\`\`typescript
// imageCompressor.worker.ts
import { expose } from 'comlink';

export const imageWorker = {
  async processImage(bitmap: ImageBitmap, quality: number): Promise<Blob> {
    const canvas = new OffscreenCanvas(bitmap.width, bitmap.height);
    const ctx = canvas.getContext('2d');
    
    if (!ctx) throw new Error('OffscreenCanvas context not available');
    ctx.drawImage(bitmap, 0, 0);

    return await canvas.convertToBlob({
      type: 'image/webp',
      quality,
    });
  }
};

expose(imageWorker);
\`\`\`

### Communicating from the React Component

In the React UI layer, consuming the worker feels just like an asynchronous function call:

\`\`\`typescript
import { wrap } from 'comlink';

const workerInstance = new Worker(
  new URL('./imageCompressor.worker.ts', import.meta.url),
  { type: 'module' }
);
const api = wrap<typeof import('./imageCompressor.worker').imageWorker>(workerInstance);

export async function compressLocalImage(file: File, quality = 0.85) {
  const bitmap = await createImageBitmap(file);
  const compressedBlob = await api.processImage(bitmap, quality);
  return compressedBlob;
}
\`\`\`

## What We Learned

> "Local-first is not just an architectural luxury; it is the ultimate privacy guarantee. You cannot leak data you never collect."

The feedback from developers and privacy-conscious users was immediate: the tools felt faster than native desktop utilities because there was zero upload round-trip.

By shifting computation to the edge (literally the user's browser), our cloud infrastructure costs dropped to virtually zero—all we serve is static HTML, CSS, and JS.
`
  },
  {
    id: "art-3",
    title: "The Case for Local-First Architecture: Zero Data Ingestion as a Product Feature",
    slug: "case-for-local-first-architecture-zero-data-ingestion",
    subtitle: "How building software that retains data on user devices creates faster UX and eliminates compliance liability.",
    excerpt: "Every database record you store is a liability waiting to be breached. Here is how adopting a local-first computing model protects your users, accelerates your development velocity, and reduces infrastructure overhead.",
    category: "privacy-tech",
    tags: ["Privacy", "Local-First", "Architecture", "Security", "Web Workers"],
    status: "published",
    featured: false,
    publishedAt: "2026-09-10T10:00:00.000Z",
    updatedAt: "2026-09-12T12:00:00.000Z",
    featuredImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Digital privacy and encryption concept visualization",
    readingTime: "5 min read",
    views: 740,
    seoTitle: "The Case for Local-First Architecture — Yogesh Bhavsar",
    seoDescription: "Why local-first architecture and zero data ingestion creates superior user trust, unmatched responsiveness, and zero compliance headaches.",
    canonicalUrl: "https://yogeshbhavsar.com/blog/case-for-local-first-architecture-zero-data-ingestion",
    author: {
      name: "Yogesh Bhavsar",
      role: "Senior Frontend Engineer & Technical Architect",
      avatar: "/YogeshBhavsar-160.webp"
    },
    content: `
For the past two decades, SaaS architecture followed a monolithic doctrine: all state belongs in the cloud database, while the browser is simply a dumb terminal rendering views.

That model made sense when client devices were underpowered netbooks. Today, the laptop or smartphone browsing your website possesses multiple high-performance CPU cores, dedicated neural engines, and gigabytes of fast RAM.

## The Liability of Cloud Centralization

When you ingest user data into your central servers, you immediately take on:

- **GDPR and CCPA regulatory burdens** (data deletion pipelines, consent banners, compliance audits).
- **Security vulnerabilities** (credential stuffing, SQL injection risks, leaked S3 buckets).
- **Recurring server expenses** for storage, ingress, egress, and compute.

Conversely, if the application operates on data locally in the client's browser (using IndexedDB, OPFS, or WebAssembly), your privacy policy is reduced to a single sentence:

> **"Your data stays on your machine. We never see it, store it, or sell it."**

## Architectural Patterns for Local-First Apps

A resilient local-first application generally consists of three layers:

1. **Local Persistent Storage:** \`IndexedDB\` or the Origin Private File System (OPFS) for structured documents and large binary assets.
2. **In-Memory Cache:** Reactive client state (Zustand, Nano Stores, or React Context) synchronizing with storage on mutations.
3. **Export & Portability Engine:** Standard JSON or SQLite exports ensuring the user retains full ownership of their information.

\`\`\`javascript
// Minimalist Local-First Storage Utility
export const LocalStore = {
  get(key, defaultValue = null) {
    try {
      const val = localStorage.getItem(key);
      return val ? JSON.parse(val) : defaultValue;
    } catch {
      return defaultValue;
    }
  },

  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (e) {
      console.error('Storage quota exceeded or private mode error', e);
      return false;
    }
  }
};
\`\`\`

## Looking Ahead

As users grow increasingly wary of surveillance capitalism and subscription lock-in, products engineered with local-first principles will win on trust, speed, and reliability.
`
  },
  {
    id: "art-4",
    title: "Why Premature Framework Migrations Cripple Engineering Velocity",
    slug: "premature-framework-migrations-cripple-velocity",
    subtitle: "A critique of the modern frontend upgrade treadmill and a defense of boring, stable engineering foundations.",
    excerpt: "Every eighteen months, the frontend community crowns a new paradigm. But before rewriting your production app in the latest alpha framework, consider the compounding costs of rewrite churn versus shipping real customer value.",
    category: "opinions",
    tags: ["Architecture", "React", "Product Engineering", "Best Practices"],
    status: "published",
    featured: false,
    publishedAt: "2026-08-22T08:30:00.000Z",
    updatedAt: "2026-08-25T11:00:00.000Z",
    featuredImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Clean software code and engineering terminal on screen",
    readingTime: "5 min read",
    views: 1150,
    seoTitle: "Why Premature Framework Migrations Cripple Velocity — Yogesh Bhavsar",
    seoDescription: "An engineering perspective on avoiding rewrite churn, prioritizing stability, and delivering sustained user value.",
    canonicalUrl: "https://yogeshbhavsar.com/blog/premature-framework-migrations-cripple-velocity",
    author: {
      name: "Yogesh Bhavsar",
      role: "Senior Frontend Engineer & Technical Architect",
      avatar: "/YogeshBhavsar-160.webp"
    },
    content: `
We have all been there. You join a new team or look at a codebase written three years ago, and someone exclaims: *"This architecture is legacy! We must rewrite it in Framework X."*

Eighteen months later, the migration is 60% complete, two critical developers have left, original features have regressions, and Framework X is now declared obsolete by Twitter influencers in favor of Framework Y.

## The Illusion of the Clean Slate

The temptation to rewrite is driven by an illusion: **you are comparing an idealized vision of a new tool against the messy, battle-tested reality of your current production code.**

Every messy line in your existing codebase represents a bug that was discovered, a weird edge case in Safari that was patched, or a business rule that had to be handled. When you rewrite from scratch, you discard that accumulated wisdom.

### When a Migration Is Justified

A technology migration should only occur when the existing tool actively blocks core business outcomes:

| Factor | Justified Migration | Premature Churn |
|---|---|---|
| **Performance** | Measurable drop in user conversions directly attributed to framework bottleneck | "The benchmark blog says Framework B is 8ms faster" |
| **Security** | Dependency is end-of-life with unpatched CVEs | Upgrading just to try new compiler features |
| **Hiring** | Inability to hire engineers due to obsolete proprietary language | Standard React/TypeScript stack working reliably |

## Embrace 'Boring' Technology

Boring technology is predictable. Its failure modes are well documented on StackOverflow. Its edge cases are known.

When you choose stable, boring tools for your infrastructure, you conserve your team's limited cognitive budget for what actually matters: **solving unique product challenges for your users.**
`
  },
  {
    id: "art-5",
    title: "Profiling React Memory Leaks and Micro-Task Thrashing in Complex SPAs",
    slug: "profiling-react-memory-leaks-microtask-thrashing",
    subtitle: "Hands-on techniques with Chrome DevTools Memory Profiler to locate detached DOM nodes and runaway closures.",
    excerpt: "Single Page Applications that stay open for hours often degrade in performance. Here is how to take heap snapshots, locate retained DOM trees, and clean up subtle closure leaks in modern React.",
    category: "experiments-learnings",
    tags: ["React", "Performance", "Browser APIs", "Experiments"],
    status: "published",
    featured: false,
    publishedAt: "2026-08-04T13:00:00.000Z",
    updatedAt: "2026-08-05T15:20:00.000Z",
    featuredImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Data stream visualization representing memory allocation and diagnostics",
    readingTime: "6 min read",
    views: 610,
    seoTitle: "Profiling React Memory Leaks and Micro-Task Thrashing — Yogesh Bhavsar",
    seoDescription: "A hands-on guide to finding detached DOM nodes, memory leaks, and performance stalls using Chrome DevTools Memory Profiler.",
    canonicalUrl: "https://yogeshbhavsar.com/blog/profiling-react-memory-leaks-microtask-thrashing",
    author: {
      name: "Yogesh Bhavsar",
      role: "Senior Frontend Engineer & Technical Architect",
      avatar: "/YogeshBhavsar-160.webp"
    },
    content: `
Unlike server-rendered applications where each navigation destroys the memory context, Single Page Applications run in a persistent runtime environment. If an event listener isn't removed or a closure retains a reference to an unmounted component, that memory is never reclaimed by the garbage collector.

Over time, this results in:
- Stuttering animations
- Escalating RAM consumption
- Eventual browser tab crashes on mobile devices

## Diagnosing Detached DOM Elements

A detached DOM element is a node that is no longer part of the document DOM tree, but is still retained by a JavaScript reference.

\`\`\`javascript
// Classic React Leak: Uncleaned Global Listener
useEffect(() => {
  const handleResize = () => {
    // This closure captures 'props' and the component's state
    doSomethingWith(props.heavyData);
  };

  window.addEventListener('resize', handleResize);

  // Missing cleanup return function!
  // return () => window.removeEventListener('resize', handleResize);
}, [props.heavyData]);
\`\`\`

### Step-by-Step Heap Snapshot Analysis

1. Open **Chrome DevTools** → **Memory** tab.
2. Select **Heap snapshot** and click **Take snapshot**.
3. Perform the user action (e.g., open a modal, navigate to a page, then close/navigate away).
4. Force garbage collection by clicking the small **trash can icon** in DevTools.
5. Take a second snapshot.
6. Switch the view from **Summary** to **Comparison** between Snapshot 2 and Snapshot 1.
7. Filter by \`Detached\`. Any positive delta in \`Detached HTMLDivElement\` points directly to a leak!

## Summary

Regular memory audits ensure that your web application maintains peak responsiveness regardless of session duration. Clean up all subscription listeners, unbind third-party charts on unmount, and respect browser garbage collection cycles.
`
  }
];
