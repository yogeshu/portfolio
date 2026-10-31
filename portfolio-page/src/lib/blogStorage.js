// src/lib/blogStorage.js
import { initialArticles, initialCategories, initialTags } from '../data/blogPosts.js';

const STORAGE_KEYS = {
  ARTICLES: 'yb_blog_articles_v1',
  CATEGORIES: 'yb_blog_categories_v1',
  TAGS: 'yb_blog_tags_v1',
  DRAFT_PREFIX: 'yb_blog_draft_',
  VIEWS: 'yb_blog_views_v1',
};

const IS_BROWSER = typeof window !== 'undefined';

/**
 * Calculate human-readable reading time from markdown content
 */
export function calculateReadingTime(content = '') {
  if (!content) return '1 min read';
  const cleanText = content
    .replace(/```[\s\S]*?```/g, '') // remove code blocks
    .replace(/#+\s+/g, '') // remove headers
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // remove links
    .replace(/[*_~`]/g, '') // remove formatting symbols
    .trim();
  const words = cleanText.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 220));
  return `${minutes} min read`;
}

/**
 * Generate a clean, URL-safe slug from a string
 */
export function generateSlug(text = '') {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // remove non-word chars
    .replace(/[\s_-]+/g, '-') // collapse whitespace and dashes
    .replace(/^-+|-+$/g, ''); // trim leading and trailing dashes
}

/**
 * Extract H2 and H3 headings from markdown for dynamic Table of Contents
 */
export function extractHeadings(markdown = '') {
  if (!markdown) return [];
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const headings = [];
  let match;

  while ((match = headingRegex.exec(markdown)) !== null) {
    const level = match[1].length;
    const text = match[2].trim().replace(/\*\*/g, '').replace(/`/g, '');
    const id = generateSlug(text);
    headings.push({ id, text, level });
  }

  return headings;
}

// ---------------------------------------------------------------------------
// Internal Cache / Memory Fallback
// ---------------------------------------------------------------------------
let memoryArticles = [...initialArticles];
let memoryCategories = [...initialCategories];
let memoryTags = [...initialTags];

function getStoredJSON(key, fallback) {
  if (!IS_BROWSER) return fallback;
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : fallback;
  } catch (e) {
    console.warn(`Failed reading localStorage key: ${key}`, e);
    return fallback;
  }
}

function setStoredJSON(key, value) {
  if (!IS_BROWSER) return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error(`Failed writing localStorage key: ${key}`, e);
  }
}

/**
 * Initialize storage with initial seed data if empty
 */
function ensureInitialized() {
  if (!IS_BROWSER) return;
  if (!localStorage.getItem(STORAGE_KEYS.ARTICLES)) {
    setStoredJSON(STORAGE_KEYS.ARTICLES, initialArticles);
  }
  if (!localStorage.getItem(STORAGE_KEYS.CATEGORIES)) {
    setStoredJSON(STORAGE_KEYS.CATEGORIES, initialCategories);
  }
  if (!localStorage.getItem(STORAGE_KEYS.TAGS)) {
    setStoredJSON(STORAGE_KEYS.TAGS, initialTags);
  }
}

// ---------------------------------------------------------------------------
// Article Operations
// ---------------------------------------------------------------------------

/**
 * Fetch all articles, optionally filtering by status
 */
export function getAllArticles(options = {}) {
  const { includeDrafts = false, includeScheduled = false } = options;
  ensureInitialized();

  let articles = getStoredJSON(STORAGE_KEYS.ARTICLES, memoryArticles);
  if (!Array.isArray(articles)) {
    articles = initialArticles;
  }

  const now = new Date();

  return articles.filter((art) => {
    if (includeDrafts) return true;
    if (art.status === 'published') {
      if (!includeScheduled && art.scheduledFor) {
        return new Date(art.scheduledFor) <= now;
      }
      return true;
    }
    return false;
  }).sort((a, b) => new Date(b.publishedAt || b.updatedAt) - new Date(a.publishedAt || a.updatedAt));
}

/**
 * Fetch a single article by slug
 */
export function getArticleBySlug(slug, options = {}) {
  const { includeDrafts = false } = options;
  const articles = getAllArticles({ includeDrafts: true });
  const article = articles.find((a) => a.slug === slug);

  if (!article) return null;
  if (!includeDrafts && article.status !== 'published') {
    return null;
  }
  return article;
}

/**
 * Fetch article by unique ID
 */
export function getArticleById(id) {
  const articles = getAllArticles({ includeDrafts: true });
  return articles.find((a) => a.id === id) || null;
}

/**
 * Save an article (Create or Update)
 */
export function saveArticle(articleData) {
  ensureInitialized();
  const articles = getAllArticles({ includeDrafts: true });
  const now = new Date().toISOString();

  let id = articleData.id;
  const isNew = !id;

  if (isNew) {
    id = `art-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
  }

  // Generate or sanitize slug
  let slug = generateSlug(articleData.slug || articleData.title || `article-${Date.now()}`);
  
  // Enforce slug uniqueness
  let uniqueSlug = slug;
  let counter = 1;
  while (articles.some((a) => a.slug === uniqueSlug && a.id !== id)) {
    uniqueSlug = `${slug}-${counter}`;
    counter++;
  }
  slug = uniqueSlug;

  const readingTime = calculateReadingTime(articleData.content || '');

  const completeArticle = {
    ...articleData,
    id,
    slug,
    title: (articleData.title || 'Untitled Article').trim(),
    subtitle: (articleData.subtitle || '').trim(),
    excerpt: (articleData.excerpt || '').trim(),
    content: articleData.content || '',
    category: articleData.category || 'engineering-frontend',
    tags: Array.isArray(articleData.tags) ? articleData.tags : [],
    status: articleData.status || 'draft',
    featured: Boolean(articleData.featured),
    featuredImage: articleData.featuredImage || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    imageAlt: (articleData.imageAlt || articleData.title || 'Article cover image').trim(),
    readingTime,
    views: articleData.views || 0,
    seoTitle: articleData.seoTitle || `${articleData.title} — Yogesh Bhavsar`,
    seoDescription: articleData.seoDescription || articleData.excerpt || '',
    canonicalUrl: articleData.canonicalUrl || `https://yogeshbhavsar.com/blog/${slug}`,
    author: articleData.author || {
      name: 'Yogesh Bhavsar',
      role: 'Senior Frontend Engineer & Technical Architect',
      avatar: '/YogeshBhavsar-160.webp'
    },
    publishedAt: articleData.status === 'published' 
      ? (articleData.publishedAt || now) 
      : (articleData.publishedAt || null),
    updatedAt: now,
    scheduledFor: articleData.scheduledFor || null,
  };

  let updatedArticles;
  if (isNew) {
    updatedArticles = [completeArticle, ...articles];
  } else {
    updatedArticles = articles.map((a) => (a.id === id ? completeArticle : a));
  }

  setStoredJSON(STORAGE_KEYS.ARTICLES, updatedArticles);
  memoryArticles = updatedArticles;

  // Clear local draft cache if this article was being drafted
  clearDraft(id);

  return completeArticle;
}

/**
 * Delete an article by ID
 */
export function deleteArticle(id) {
  ensureInitialized();
  const articles = getAllArticles({ includeDrafts: true });
  const filtered = articles.filter((a) => a.id !== id);
  setStoredJSON(STORAGE_KEYS.ARTICLES, filtered);
  memoryArticles = filtered;
  clearDraft(id);
  return true;
}

/**
 * Toggle publication status between published and draft
 */
export function toggleArticleStatus(id, newStatus) {
  const article = getArticleById(id);
  if (!article) return null;
  return saveArticle({
    ...article,
    status: newStatus,
    publishedAt: newStatus === 'published' ? (article.publishedAt || new Date().toISOString()) : article.publishedAt
  });
}

/**
 * Increment view count for an article (privacy-friendly, client-side only)
 */
export function incrementArticleViews(id) {
  if (!IS_BROWSER) return;
  const viewedKey = `yb_viewed_${id}`;
  if (sessionStorage.getItem(viewedKey)) {
    return; // Count once per session
  }
  sessionStorage.setItem(viewedKey, 'true');

  const articles = getAllArticles({ includeDrafts: true });
  const updated = articles.map((a) => {
    if (a.id === id) {
      return { ...a, views: (a.views || 0) + 1 };
    }
    return a;
  });
  setStoredJSON(STORAGE_KEYS.ARTICLES, updated);
  memoryArticles = updated;
}

// ---------------------------------------------------------------------------
// Categories & Tags Operations
// ---------------------------------------------------------------------------

export function getAllCategories() {
  ensureInitialized();
  return getStoredJSON(STORAGE_KEYS.CATEGORIES, memoryCategories);
}

export function getCategoryBySlug(slug) {
  const cats = getAllCategories();
  return cats.find((c) => c.slug === slug) || null;
}

export function saveCategory(category) {
  ensureInitialized();
  const cats = getAllCategories();
  const id = category.id || `cat-${Date.now()}`;
  const slug = generateSlug(category.slug || category.name);
  const updatedCategory = { ...category, id, slug };

  const existingIndex = cats.findIndex((c) => c.id === id || c.slug === slug);
  let updated;
  if (existingIndex >= 0) {
    updated = [...cats];
    updated[existingIndex] = updatedCategory;
  } else {
    updated = [...cats, updatedCategory];
  }

  setStoredJSON(STORAGE_KEYS.CATEGORIES, updated);
  memoryCategories = updated;
  return updatedCategory;
}

export function deleteCategory(id) {
  ensureInitialized();
  const cats = getAllCategories();
  const filtered = cats.filter((c) => c.id !== id && c.slug !== id);
  setStoredJSON(STORAGE_KEYS.CATEGORIES, filtered);
  memoryCategories = filtered;
  return true;
}

export function getAllTags() {
  ensureInitialized();
  return getStoredJSON(STORAGE_KEYS.TAGS, memoryTags);
}

export function saveTag(tag) {
  ensureInitialized();
  const cleanTag = tag.trim();
  if (!cleanTag) return;
  const tags = getAllTags();
  if (!tags.includes(cleanTag)) {
    const updated = [...tags, cleanTag];
    setStoredJSON(STORAGE_KEYS.TAGS, updated);
    memoryTags = updated;
  }
  return cleanTag;
}

export function deleteTag(tag) {
  ensureInitialized();
  const tags = getAllTags();
  const filtered = tags.filter((t) => t.toLowerCase() !== tag.toLowerCase());
  setStoredJSON(STORAGE_KEYS.TAGS, filtered);
  memoryTags = filtered;
  return true;
}

// ---------------------------------------------------------------------------
// Search & Filter Operations
// ---------------------------------------------------------------------------

export function searchArticles(query = '', options = {}) {
  const { category, tag, includeDrafts = false } = options;
  const articles = getAllArticles({ includeDrafts });

  const q = query.toLowerCase().trim();

  return articles.filter((art) => {
    // Category match
    if (category && art.category !== category) {
      return false;
    }

    // Tag match
    if (tag && (!art.tags || !art.tags.some((t) => t.toLowerCase() === tag.toLowerCase()))) {
      return false;
    }

    // Text search query
    if (!q) return true;

    const inTitle = (art.title || '').toLowerCase().includes(q);
    const inSubtitle = (art.subtitle || '').toLowerCase().includes(q);
    const inExcerpt = (art.excerpt || '').toLowerCase().includes(q);
    const inTags = (art.tags || []).some((t) => t.toLowerCase().includes(q));
    const inContent = (art.content || '').toLowerCase().includes(q);

    return inTitle || inSubtitle || inExcerpt || inTags || inContent;
  });
}

export function getRelatedArticles(currentArticle, limit = 3) {
  if (!currentArticle) return [];
  const all = getAllArticles({ includeDrafts: false });
  return all
    .filter((a) => a.id !== currentArticle.id)
    .sort((a, b) => {
      // Prioritize same category
      const sameCategoryA = a.category === currentArticle.category ? 1 : 0;
      const sameCategoryB = b.category === currentArticle.category ? 1 : 0;
      if (sameCategoryA !== sameCategoryB) return sameCategoryB - sameCategoryA;

      // Prioritize shared tags
      const currentTags = currentArticle.tags || [];
      const sharedA = (a.tags || []).filter((t) => currentTags.includes(t)).length;
      const sharedB = (b.tags || []).filter((t) => currentTags.includes(t)).length;
      return sharedB - sharedA;
    })
    .slice(0, limit);
}

// ---------------------------------------------------------------------------
// Autosave Draft Storage
// ---------------------------------------------------------------------------

export function saveDraft(id = 'new', draftData) {
  if (!IS_BROWSER) return;
  const key = `${STORAGE_KEYS.DRAFT_PREFIX}${id}`;
  setStoredJSON(key, {
    ...draftData,
    savedAt: new Date().toISOString()
  });
}

export function getDraft(id = 'new') {
  if (!IS_BROWSER) return null;
  const key = `${STORAGE_KEYS.DRAFT_PREFIX}${id}`;
  return getStoredJSON(key, null);
}

export function clearDraft(id = 'new') {
  if (!IS_BROWSER) return;
  const key = `${STORAGE_KEYS.DRAFT_PREFIX}${id}`;
  localStorage.removeItem(key);
}

// ---------------------------------------------------------------------------
// Backup & Migration (Export & Import)
// ---------------------------------------------------------------------------

export function exportAllBlogData() {
  ensureInitialized();
  return {
    version: '1.0.0',
    exportedAt: new Date().toISOString(),
    website: 'https://yogeshbhavsar.com',
    articles: getAllArticles({ includeDrafts: true }),
    categories: getAllCategories(),
    tags: getAllTags()
  };
}

export function importBlogData(backupData, options = { overwrite: false }) {
  if (!backupData || !Array.isArray(backupData.articles)) {
    throw new Error('Invalid backup file format: missing articles array.');
  }

  ensureInitialized();

  if (options.overwrite) {
    setStoredJSON(STORAGE_KEYS.ARTICLES, backupData.articles);
    if (Array.isArray(backupData.categories)) {
      setStoredJSON(STORAGE_KEYS.CATEGORIES, backupData.categories);
    }
    if (Array.isArray(backupData.tags)) {
      setStoredJSON(STORAGE_KEYS.TAGS, backupData.tags);
    }
  } else {
    // Merge without duplicate IDs
    const currentArticles = getAllArticles({ includeDrafts: true });
    const existingIds = new Set(currentArticles.map((a) => a.id));
    const mergedArticles = [...currentArticles];

    for (const art of backupData.articles) {
      if (!existingIds.has(art.id)) {
        mergedArticles.push(art);
      }
    }
    setStoredJSON(STORAGE_KEYS.ARTICLES, mergedArticles);
  }

  return true;
}

export function resetBlogDataToDefaults() {
  if (!IS_BROWSER) return;
  setStoredJSON(STORAGE_KEYS.ARTICLES, initialArticles);
  setStoredJSON(STORAGE_KEYS.CATEGORIES, initialCategories);
  setStoredJSON(STORAGE_KEYS.TAGS, initialTags);
  return true;
}
