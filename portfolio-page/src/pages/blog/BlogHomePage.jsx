// src/pages/blog/BlogHomePage.jsx
import React, { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Sparkles, BookOpen, Layers, ArrowRight, Rss } from 'lucide-react';
import SEO from '@/components/SEO';
import ArticleCard from '@/components/blog/ArticleCard';
import { getAllArticles, getAllCategories, getAllTags } from '@/lib/blogStorage';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const POSTS_PER_PAGE = 6;

const BlogHomePage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);

  const categories = useMemo(() => getAllCategories(), []);
  const allTags = useMemo(() => getAllTags(), []);
  const allPublishedArticles = useMemo(() => getAllArticles({ includeDrafts: false }), []);

  // Filtered articles
  const filteredArticles = useMemo(() => {
    return allPublishedArticles.filter((article) => {
      if (selectedCategory !== 'all' && article.category !== selectedCategory) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesTitle = article.title.toLowerCase().includes(q);
        const matchesSubtitle = (article.subtitle || '').toLowerCase().includes(q);
        const matchesExcerpt = (article.excerpt || '').toLowerCase().includes(q);
        const matchesTags = (article.tags || []).some((t) => t.toLowerCase().includes(q));
        return matchesTitle || matchesSubtitle || matchesExcerpt || matchesTags;
      }
      return true;
    });
  }, [allPublishedArticles, selectedCategory, searchQuery]);

  const featuredArticle = useMemo(() => {
    return allPublishedArticles.find((a) => a.featured) || allPublishedArticles[0];
  }, [allPublishedArticles]);

  const nonFeaturedArticles = useMemo(() => {
    if (selectedCategory !== 'all' || searchQuery.trim()) {
      return filteredArticles;
    }
    return filteredArticles.filter((a) => a.id !== featuredArticle?.id);
  }, [filteredArticles, featuredArticle, selectedCategory, searchQuery]);

  const displayedArticles = useMemo(() => {
    return nonFeaturedArticles.slice(0, visibleCount);
  }, [nonFeaturedArticles, visibleCount]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/blog/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + POSTS_PER_PAGE);
  };

  // Structured Data Schema for Blog
  const blogSchema = {
    '@type': 'Blog',
    '@id': 'https://yogeshbhavsar.com/blog/#blog',
    name: 'Yogesh Bhavsar Technical Blog & Engineering Essays',
    description: 'First-hand technical deep dives, React internals, Next.js architecture, local-first computing, and product engineering reflections.',
    url: 'https://yogeshbhavsar.com/blog',
    publisher: {
      '@type': 'Person',
      name: 'Yogesh Bhavsar',
      url: 'https://yogeshbhavsar.com/',
    },
  };

  return (
    <>
      <SEO
        title="Engineering Notes & Architecture Essays | Yogesh Bhavsar"
        description="Technical essays on React internals, Next.js performance, local-first architecture, web workers, and software craftsmanship by Yogesh Bhavsar."
        canonical="/blog"
        ogType="website"
        schema={blogSchema}
        keywords="Frontend Engineering Blog, React Architecture, Next.js Performance, Local-First Software, Web Development Essays, Yogesh Bhavsar"
      />

      <div className="space-y-12 max-w-6xl mx-auto pb-16">
        {/* Editorial Masthead */}
        <header className="text-left space-y-6 pt-4 border-b border-border/60 pb-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono font-medium text-primary w-fit">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Engineering Journal & Perspectives</span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="/feed.xml"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-primary transition-colors border border-border/70 rounded-lg px-2.5 py-1 bg-card"
                title="Subscribe to RSS Feed"
              >
                <Rss className="h-3.5 w-3.5 text-amber-500" />
                <span>RSS Feed</span>
              </a>
            </div>
          </div>

          <div className="space-y-3 max-w-3xl">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15]">
              Writing on software craft, performance, and building products.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              First-hand architectural playbooks, frontend internals, privacy-first software experiments, and candid opinions from 7+ years of building web applications.
            </p>
          </div>

          {/* Search Bar & Quick Categories */}
          <div className="pt-2 flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            <form onSubmit={handleSearchSubmit} className="relative flex-grow max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search articles by topic, keyword, or concept..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 h-11 bg-card/80 border-border/70 rounded-xl text-sm focus:border-primary"
              />
            </form>

            {/* Category filter pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full no-scrollbar">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'bg-secondary/70 text-secondary-foreground hover:bg-secondary'
                }`}
              >
                All Topics ({allPublishedArticles.length})
              </button>
              {categories.map((cat) => {
                const count = allPublishedArticles.filter((a) => a.category === cat.slug).length;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.slug)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                      selectedCategory === cat.slug
                        ? 'bg-primary text-primary-foreground shadow-sm'
                        : 'bg-secondary/70 text-secondary-foreground hover:bg-secondary'
                    }`}
                  >
                    {cat.name} ({count})
                  </button>
                );
              })}
            </div>
          </div>
        </header>

        {/* Featured Article Section (Only if no active filter/query) */}
        {selectedCategory === 'all' && !searchQuery.trim() && featuredArticle && (
          <section aria-label="Featured Story">
            <ArticleCard article={featuredArticle} variant="featured" />
          </section>
        )}

        {/* Articles Feed */}
        <section className="space-y-8" aria-label="Latest Publications">
          <div className="flex items-center justify-between border-b border-border/40 pb-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              <span>
                {selectedCategory === 'all'
                  ? 'Latest Articles'
                  : categories.find((c) => c.slug === selectedCategory)?.name || 'Filtered Articles'}
              </span>
            </h2>
            <span className="text-xs font-mono text-muted-foreground">
              Showing {displayedArticles.length} of {nonFeaturedArticles.length}
            </span>
          </div>

          {displayedArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {displayedArticles.map((article) => (
                <ArticleCard key={article.id} article={article} variant="standard" />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-card/40 border border-border/60 rounded-2xl p-8 space-y-3">
              <Layers className="h-12 w-12 text-muted-foreground/60 mx-auto" />
              <h3 className="text-lg font-semibold text-foreground">No matching articles found</h3>
              <p className="text-sm text-muted-foreground max-w-md mx-auto">
                No articles matched your filter criteria. Try searching for a different keyword or view all categories.
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}

          {/* Load More Pagination */}
          {visibleCount < nonFeaturedArticles.length && (
            <div className="pt-6 text-center">
              <Button
                variant="outline"
                size="lg"
                onClick={handleLoadMore}
                className="font-medium text-sm px-8 hover:border-primary/50"
              >
                Load More Articles ({nonFeaturedArticles.length - visibleCount} remaining)
              </Button>
            </div>
          )}
        </section>

        {/* Explore Topics / Tags Archive Footer */}
        <section className="pt-10 border-t border-border/60 text-left space-y-4">
          <h3 className="text-sm font-mono uppercase tracking-wider text-muted-foreground font-bold">
            Explore by Technical Topic
          </h3>
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <Link
                key={tag}
                to={`/blog/tags/${tag.toLowerCase()}`}
                className="text-xs px-3 py-1.5 rounded-lg bg-card border border-border/60 text-foreground/80 hover:text-primary hover:border-primary/40 transition-colors"
              >
                #{tag}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogHomePage;
