// src/pages/blog/ArticleDetailPage.jsx
import React, { useEffect, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Calendar,
  Clock,
  ArrowLeft,
  ArrowRight,
  Eye,
  RefreshCw,
  FolderOpen,
  Tag,
  AlertCircle,
  Home,
  ChevronRight,
} from 'lucide-react';
import SEO from '@/components/SEO';
import MarkdownRenderer from '@/components/blog/MarkdownRenderer';
import TableOfContents from '@/components/blog/TableOfContents';
import SocialShare from '@/components/blog/SocialShare';
import ArticleCard, { formatDate } from '@/components/blog/ArticleCard';
import {
  getArticleBySlug,
  getAllArticles,
  getCategoryBySlug,
  getRelatedArticles,
  extractHeadings,
  incrementArticleViews,
} from '@/lib/blogStorage';
import { Button } from '@/components/ui/button';

const ArticleDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Fetch article (published only for public view)
  const article = useMemo(() => getArticleBySlug(slug, { includeDrafts: false }), [slug]);

  // All published articles for prev/next navigation
  const allArticles = useMemo(() => getAllArticles({ includeDrafts: false }), []);

  // Category info
  const category = useMemo(() => {
    return article ? getCategoryBySlug(article.category) : null;
  }, [article]);

  // Extract headings for Table of Contents
  const headings = useMemo(() => {
    return article ? extractHeadings(article.content) : [];
  }, [article]);

  // Related articles
  const relatedArticles = useMemo(() => {
    return article ? getRelatedArticles(article, 3) : [];
  }, [article]);

  // Prev / Next articles
  const { prevArticle, nextArticle } = useMemo(() => {
    if (!article || allArticles.length === 0) return { prevArticle: null, nextArticle: null };
    const currentIndex = allArticles.findIndex((a) => a.id === article.id);
    const next = currentIndex > 0 ? allArticles[currentIndex - 1] : null;
    const prev = currentIndex < allArticles.length - 1 ? allArticles[currentIndex + 1] : null;
    return { prevArticle: prev, nextArticle: next };
  }, [article, allArticles]);

  // Track page view count
  useEffect(() => {
    if (article) {
      incrementArticleViews(article.id);
    }
  }, [article]);

  if (!article) {
    return (
      <div className="max-w-xl mx-auto py-24 text-center space-y-6">
        <AlertCircle className="h-16 w-16 text-muted-foreground/60 mx-auto" />
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Article Not Found</h1>
        <p className="text-muted-foreground">
          The article you are looking for may have been moved, unpublished, or does not exist.
        </p>
        <div className="pt-2">
          <Button asChild>
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Return to Blog Home
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  const siteUrl = 'https://yogeshbhavsar.com';
  const articleUrl = `${siteUrl}/blog/${article.slug}`;

  // JSON-LD Article Schema
  const articleSchema = [
    {
      '@type': 'BlogPosting',
      '@id': `${articleUrl}/#article`,
      isPartOf: {
        '@id': `${siteUrl}/blog/#blog`,
      },
      headline: article.seoTitle || article.title,
      description: article.seoDescription || article.excerpt,
      image: article.featuredImage ? (article.featuredImage.startsWith('http') ? article.featuredImage : `${siteUrl}${article.featuredImage}`) : `${siteUrl}/og-image.png`,
      datePublished: article.publishedAt,
      dateModified: article.updatedAt || article.publishedAt,
      mainEntityOfPage: articleUrl,
      author: {
        '@type': 'Person',
        name: article.author?.name || 'Yogesh Bhavsar',
        url: siteUrl,
        jobTitle: article.author?.role || 'Senior Frontend Engineer & Technical Architect',
      },
      publisher: {
        '@type': 'Person',
        name: 'Yogesh Bhavsar',
        url: siteUrl,
      },
      articleSection: category ? category.name : 'Engineering',
      keywords: (article.tags || []).join(', '),
      inLanguage: 'en-US',
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
        ...(category
          ? [
              {
                '@type': 'ListItem',
                position: 3,
                name: category.name,
                item: `${siteUrl}/blog/category/${category.slug}`,
              },
              {
                '@type': 'ListItem',
                position: 4,
                name: article.title,
                item: articleUrl,
              },
            ]
          : [
              {
                '@type': 'ListItem',
                position: 3,
                name: article.title,
                item: articleUrl,
              },
            ]),
      ],
    },
  ];

  return (
    <>
      <SEO
        title={`${article.seoTitle || article.title} — Yogesh Bhavsar`}
        description={article.seoDescription || article.excerpt}
        canonical={`/blog/${article.slug}`}
        ogType="article"
        ogImage={article.featuredImage || '/og-image.png'}
        schema={articleSchema}
        keywords={(article.tags || []).join(', ')}
      />

      <article className="max-w-5xl mx-auto pb-20 text-left">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumbs" className="flex items-center gap-1.5 text-xs text-muted-foreground mb-6 overflow-x-auto py-1">
          <Link to="/" className="hover:text-primary transition-colors flex items-center gap-1">
            <Home className="h-3 w-3" />
            <span>Home</span>
          </Link>
          <ChevronRight className="h-3 w-3 text-muted-foreground/60" />
          <Link to="/blog" className="hover:text-primary transition-colors">
            Blog
          </Link>
          {category && (
            <>
              <ChevronRight className="h-3 w-3 text-muted-foreground/60" />
              <Link to={`/blog/category/${category.slug}`} className="hover:text-primary transition-colors">
                {category.name}
              </Link>
            </>
          )}
          <ChevronRight className="h-3 w-3 text-muted-foreground/60" />
          <span className="text-foreground truncate max-w-[200px] sm:max-w-xs">{article.title}</span>
        </nav>

        {/* Article Header */}
        <header className="space-y-6 border-b border-border/60 pb-8">
          <div className="flex flex-wrap items-center gap-3">
            {category && (
              <Link
                to={`/blog/category/${category.slug}`}
                className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 transition-colors"
              >
                {category.name}
              </Link>
            )}

            <div className="flex items-center gap-3 text-xs text-muted-foreground font-mono">
              <span className="inline-flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" />
                <time dateTime={article.publishedAt}>
                  {formatDate(article.publishedAt)}
                </time>
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {article.readingTime}
              </span>
              {article.views > 0 && (
                <>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1">
                    <Eye className="h-3.5 w-3.5" />
                    {article.views} reads
                  </span>
                </>
              )}
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.18]">
            {article.title}
          </h1>

          {article.subtitle && (
            <p className="text-lg sm:text-xl text-foreground/80 font-medium leading-relaxed">
              {article.subtitle}
            </p>
          )}

          {/* Author Card & Editorial Metadata */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-border/40">
            <div className="flex items-center gap-3.5">
              {article.author?.avatar && (
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary/30"
                />
              )}
              <div>
                <p className="text-sm font-bold text-foreground">
                  <Link to="/about" className="hover:text-primary transition-colors">
                    {article.author?.name || 'Yogesh Bhavsar'}
                  </Link>
                </p>
                <p className="text-xs text-muted-foreground">
                  {article.author?.role || 'Senior Frontend Engineer & Technical Architect'}
                </p>
              </div>
            </div>

            {article.updatedAt && article.updatedAt !== article.publishedAt && (
              <span className="inline-flex items-center gap-1 text-[11px] font-mono text-muted-foreground">
                <RefreshCw className="h-3 w-3" />
                Updated {formatDate(article.updatedAt)}
              </span>
            )}
          </div>
        </header>

        {/* Featured Cover Media */}
        {article.featuredImage && (
          <figure className="my-8 rounded-2xl overflow-hidden border border-border/70 bg-card shadow-sm">
            <img
              src={article.featuredImage}
              alt={article.imageAlt || article.title}
              className="w-full max-h-[520px] object-cover"
              loading="eager"
            />
            {article.imageAlt && (
              <figcaption className="text-center text-xs text-muted-foreground py-2.5 px-4 bg-secondary/30 border-t border-border/40">
                {article.imageAlt}
              </figcaption>
            )}
          </figure>
        )}

        {/* Article Body Grid: Main Content + Sticky Table of Contents */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-8">
          {/* Main Markdown Prose Content */}
          <div className="lg:col-span-8 space-y-8">
            <MarkdownRenderer content={article.content} />

            {/* Tags footer */}
            {article.tags && article.tags.length > 0 && (
              <div className="pt-8 border-t border-border/50">
                <div className="flex items-center gap-2 mb-3 text-xs font-mono uppercase text-muted-foreground font-semibold">
                  <Tag className="h-3.5 w-3.5" />
                  <span>Filed under topics</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((t) => (
                    <Link
                      key={t}
                      to={`/blog/tags/${t.toLowerCase()}`}
                      className="text-xs px-3 py-1.5 rounded-lg bg-secondary/70 text-secondary-foreground hover:bg-primary/20 hover:text-primary transition-colors font-medium"
                    >
                      #{t}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Social Share Bar */}
            <SocialShare url={`/blog/${article.slug}`} title={article.title} excerpt={article.excerpt} />

            {/* Author Bio Box */}
            <div className="p-6 rounded-2xl bg-card border border-border/60 flex flex-col sm:flex-row gap-5 items-start">
              <img
                src={article.author?.avatar || '/YogeshBhavsar-160.webp'}
                alt={article.author?.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-primary/20 flex-shrink-0"
              />
              <div className="space-y-2">
                <h3 className="text-base font-bold text-foreground">
                  Written by {article.author?.name}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Senior Frontend Engineer and Technical Architect with 7+ years of experience crafting high-performance React and Next.js applications, building local-first developer tools, and consulting on Core Web Vitals.
                </p>
                <div className="pt-1 flex items-center gap-4 text-xs font-medium">
                  <Link to="/about" className="text-primary hover:underline">
                    Read Biography →
                  </Link>
                  <Link to="/contact" className="text-muted-foreground hover:text-foreground">
                    Get in Touch →
                  </Link>
                </div>
              </div>
            </div>

            {/* Previous & Next Article Navigation */}
            <nav aria-label="Adjacent Articles" className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              {prevArticle ? (
                <Link
                  to={`/blog/${prevArticle.slug}`}
                  className="group p-5 rounded-xl border border-border/60 bg-card hover:border-primary/50 transition-colors text-left flex flex-col justify-between"
                >
                  <span className="text-[11px] font-mono text-muted-foreground flex items-center gap-1 group-hover:text-primary">
                    <ArrowLeft className="h-3 w-3" />
                    <span>Previous Article</span>
                  </span>
                  <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors mt-2 line-clamp-2">
                    {prevArticle.title}
                  </p>
                </Link>
              ) : (
                <div />
              )}

              {nextArticle && (
                <Link
                  to={`/blog/${nextArticle.slug}`}
                  className="group p-5 rounded-xl border border-border/60 bg-card hover:border-primary/50 transition-colors text-right flex flex-col justify-between sm:ml-auto w-full"
                >
                  <span className="text-[11px] font-mono text-muted-foreground flex items-center gap-1 justify-end group-hover:text-primary">
                    <span>Next Article</span>
                    <ArrowRight className="h-3 w-3" />
                  </span>
                  <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors mt-2 line-clamp-2">
                    {nextArticle.title}
                  </p>
                </Link>
              )}
            </nav>
          </div>

          {/* Sticky Table of Contents Column */}
          <aside className="lg:col-span-4 space-y-6">
            <TableOfContents headings={headings} />
          </aside>
        </div>

        {/* Related Articles Section */}
        {relatedArticles.length > 0 && (
          <section className="mt-16 pt-12 border-t border-border/60 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                Related Reading
              </h3>
              <Link to="/blog" className="text-xs font-semibold text-primary hover:underline">
                View All Articles →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedArticles.map((rel) => (
                <ArticleCard key={rel.id} article={rel} variant="standard" />
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  );
};

export default ArticleDetailPage;
