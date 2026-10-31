// src/pages/blog/BlogSearchPage.jsx
import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, X, Layers, Home, ChevronRight, SlidersHorizontal } from 'lucide-react';
import SEO from '@/components/SEO';
import ArticleCard from '@/components/blog/ArticleCard';
import { getAllArticles, getAllCategories, getAllTags } from '@/lib/blogStorage';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const BlogSearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const initialCategory = searchParams.get('category') || 'all';

  const [query, setQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  const categories = useMemo(() => getAllCategories(), []);
  const allTags = useMemo(() => getAllTags(), []);
  const allArticles = useMemo(() => getAllArticles({ includeDrafts: false }), []);

  // Update URL params when query changes
  useEffect(() => {
    const params = {};
    if (query.trim()) params.q = query.trim();
    if (selectedCategory !== 'all') params.category = selectedCategory;
    setSearchParams(params, { replace: true });
  }, [query, selectedCategory, setSearchParams]);

  const searchResults = useMemo(() => {
    const q = query.toLowerCase().trim();

    return allArticles.filter((article) => {
      if (selectedCategory !== 'all' && article.category !== selectedCategory) {
        return false;
      }
      if (!q) return true;

      const titleMatch = article.title.toLowerCase().includes(q);
      const subtitleMatch = (article.subtitle || '').toLowerCase().includes(q);
      const excerptMatch = (article.excerpt || '').toLowerCase().includes(q);
      const tagMatch = (article.tags || []).some((t) => t.toLowerCase().includes(q));
      const contentMatch = (article.content || '').toLowerCase().includes(q);

      return titleMatch || subtitleMatch || excerptMatch || tagMatch || contentMatch;
    });
  }, [allArticles, query, selectedCategory]);

  const handleClear = () => {
    setQuery('');
    setSelectedCategory('all');
  };

  return (
    <>
      <SEO
        title={query ? `Search: "${query}" | Yogesh Bhavsar` : 'Search Articles | Yogesh Bhavsar'}
        description="Search through engineering deep dives, frontend architecture essays, and performance optimization guides by Yogesh Bhavsar."
        canonical="/blog/search"
        noindex={true} // Search pages should not be indexed by robots to prevent duplicate content
      />

      <div className="max-w-5xl mx-auto pb-16 text-left space-y-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumbs" className="flex items-center gap-1.5 text-xs text-muted-foreground pt-2">
          <Link to="/" className="hover:text-primary transition-colors flex items-center gap-1">
            <Home className="h-3 w-3" />
            <span>Home</span>
          </Link>
          <ChevronRight className="h-3 w-3 text-muted-foreground/60" />
          <Link to="/blog" className="hover:text-primary transition-colors">
            Blog
          </Link>
          <ChevronRight className="h-3 w-3 text-muted-foreground/60" />
          <span className="text-foreground">Search</span>
        </nav>

        {/* Search Header & Inputs */}
        <header className="space-y-4 border-b border-border/60 pb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Search Articles & Deep Dives
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base">
            Search across all articles, architecture guides, tutorials, and opinions.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <div className="relative flex-grow">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search topics: React, Performance, Web Workers, Next.js..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus
                className="pl-10 pr-10 h-12 bg-card border-border/70 rounded-xl text-base"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-muted-foreground hover:text-foreground"
                  aria-label="Clear query"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="h-12 px-4 rounded-xl border border-border/70 bg-card text-sm font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
              aria-label="Filter by Category"
            >
              <option value="all">All Categories</option>
              {categories.map((c) => (
                <option key={c.id} value={c.slug}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>

          {/* Popular Search Suggestions */}
          <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-muted-foreground">
            <span className="font-mono text-[11px] font-semibold">Suggested:</span>
            {['React', 'Performance', 'Local-First', 'Core Web Vitals', 'TypeScript'].map((s) => (
              <button
                key={s}
                onClick={() => setQuery(s)}
                className="px-2.5 py-1 rounded-md bg-secondary/70 hover:bg-primary/20 hover:text-primary transition-colors text-[11px]"
              >
                {s}
              </button>
            ))}
          </div>
        </header>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
          <span>
            {query.trim() || selectedCategory !== 'all'
              ? `Found ${searchResults.length} ${searchResults.length === 1 ? 'article' : 'articles'} matching your search`
              : `Showing all ${searchResults.length} published articles`}
          </span>

          {(query || selectedCategory !== 'all') && (
            <button
              onClick={handleClear}
              className="hover:text-primary underline transition-colors"
            >
              Clear filters
            </button>
          )}
        </div>

        {/* Search Results Grid */}
        <section>
          {searchResults.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {searchResults.map((art) => (
                <ArticleCard key={art.id} article={art} variant="standard" />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-card/40 border border-border/60 rounded-2xl p-8 space-y-4">
              <Layers className="h-14 w-14 text-muted-foreground/50 mx-auto" />
              <h3 className="text-xl font-bold text-foreground">No matches found for "{query}"</h3>
              <p className="text-sm text-muted-foreground max-w-md mx-auto">
                Try refining your search terms, removing filters, or browsing by category.
              </p>
              <Button variant="outline" size="sm" onClick={handleClear}>
                Reset Search Filters
              </Button>
            </div>
          )}
        </section>
      </div>
    </>
  );
};

export default BlogSearchPage;
