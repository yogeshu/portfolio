// src/pages/blog/TagArchivePage.jsx
import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Tag, ArrowLeft, Layers, Home, ChevronRight } from 'lucide-react';
import SEO from '@/components/SEO';
import ArticleCard from '@/components/blog/ArticleCard';
import { getAllArticles, getAllTags } from '@/lib/blogStorage';
import { Button } from '@/components/ui/button';

const TagArchivePage = () => {
  const { slug } = useParams();
  const currentTagSlug = (slug || '').toLowerCase();

  const allTags = useMemo(() => getAllTags(), []);

  // Find original tag display casing
  const originalTagName = useMemo(() => {
    return allTags.find((t) => t.toLowerCase() === currentTagSlug) || currentTagSlug;
  }, [allTags, currentTagSlug]);

  const articles = useMemo(() => {
    const all = getAllArticles({ includeDrafts: false });
    return all.filter((a) =>
      (a.tags || []).some((t) => t.toLowerCase() === currentTagSlug)
    );
  }, [currentTagSlug]);

  const siteUrl = 'https://yogeshbhavsar.com';
  const tagUrl = `${siteUrl}/blog/tags/${currentTagSlug}`;

  const tagSchema = [
    {
      '@type': 'CollectionPage',
      '@id': `${tagUrl}/#collection`,
      name: `Articles tagged with #${originalTagName} — Yogesh Bhavsar`,
      description: `Collection of technical articles and engineering deep dives tagged with #${originalTagName}.`,
      url: tagUrl,
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: `${siteUrl}/`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Blog',
          item: `${siteUrl}/blog`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: `#${originalTagName}`,
          item: tagUrl,
        },
      ],
    },
  ];

  return (
    <>
      <SEO
        title={`#${originalTagName} Articles | Yogesh Bhavsar`}
        description={`Read technical articles, frontend engineering playbooks, and case studies tagged with #${originalTagName}.`}
        canonical={`/blog/tags/${currentTagSlug}`}
        ogType="website"
        schema={tagSchema}
      />

      <div className="max-w-5xl mx-auto pb-16 text-left space-y-10">
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
          <span className="text-foreground">#{originalTagName}</span>
        </nav>

        {/* Tag Header */}
        <header className="border-b border-border/60 pb-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-primary bg-primary/10 border border-primary/20">
            <Tag className="h-3.5 w-3.5" />
            <span>Topic Tag</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground font-mono">
            #{originalTagName}
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            Articles and engineering notes categorized under <span className="font-semibold text-foreground">#{originalTagName}</span>.
          </p>
          <p className="text-xs font-mono text-muted-foreground pt-2">
            {articles.length} {articles.length === 1 ? 'article tagged' : 'articles tagged'}
          </p>
        </header>

        {/* Articles List */}
        <section>
          {articles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {articles.map((art) => (
                <ArticleCard key={art.id} article={art} variant="standard" />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-card/40 border border-border/60 rounded-2xl p-8 space-y-3">
              <Layers className="h-12 w-12 text-muted-foreground/60 mx-auto" />
              <h3 className="text-lg font-semibold text-foreground">No articles found with this tag</h3>
              <p className="text-sm text-muted-foreground max-w-md mx-auto">
                No published articles currently use this tag.
              </p>
              <Button asChild variant="outline" size="sm">
                <Link to="/blog">Return to Blog</Link>
              </Button>
            </div>
          )}
        </section>

        {/* Other Tags */}
        <section className="pt-10 border-t border-border/60 space-y-4">
          <h3 className="text-sm font-mono uppercase tracking-wider text-muted-foreground font-bold">
            All Technical Topics
          </h3>
          <div className="flex flex-wrap gap-2">
            {allTags.map((t) => (
              <Link
                key={t}
                to={`/blog/tags/${t.toLowerCase()}`}
                className={`text-xs px-3 py-1.5 rounded-lg border transition-colors ${
                  t.toLowerCase() === currentTagSlug
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-card border-border/70 text-foreground/80 hover:text-primary hover:border-primary/40'
                }`}
              >
                #{t}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default TagArchivePage;
