// src/components/blog/ArticleCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Eye, Sparkles } from 'lucide-react';
import { getCategoryBySlug } from '@/lib/blogStorage';

export function formatDate(isoDate) {
  if (!isoDate) return '';
  const date = new Date(isoDate);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
}

const ArticleCard = ({ article, variant = 'standard', className = '' }) => {
  const category = getCategoryBySlug(article.category);
  const formattedDate = formatDate(article.publishedAt || article.updatedAt);

  if (variant === 'featured') {
    return (
      <article className={`group relative bg-card/60 backdrop-blur-sm border border-border/70 rounded-2xl p-6 sm:p-8 lg:p-10 hover:border-primary/50 transition-all duration-300 shadow-sm ${className}`}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Cover Media */}
          {article.featuredImage && (
            <div className="lg:col-span-6 overflow-hidden rounded-xl aspect-[16/10] bg-secondary/30 relative">
              <img
                src={article.featuredImage}
                alt={article.imageAlt || article.title}
                loading="eager"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 flex items-center gap-2">
                <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-mono font-semibold tracking-wider uppercase rounded-full bg-primary text-primary-foreground shadow-sm">
                  <Sparkles className="h-3 w-3" />
                  Featured Article
                </span>
              </div>
            </div>
          )}

          {/* Editorial Content */}
          <div className={`${article.featuredImage ? 'lg:col-span-6' : 'lg:col-span-12'} flex flex-col justify-between space-y-4 text-left`}>
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                {category && (
                  <Link
                    to={`/blog/category/${category.slug}`}
                    className="font-medium text-primary hover:underline hover:text-accent transition-colors"
                  >
                    {category.name}
                  </Link>
                )}
                <span>•</span>
                <span className="inline-flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" />
                  <time dateTime={article.publishedAt}>{formattedDate}</time>
                </span>
                <span>•</span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {article.readingTime}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors leading-tight">
                <Link to={`/blog/${article.slug}`}>
                  {article.title}
                </Link>
              </h2>

              {article.subtitle && (
                <p className="text-base sm:text-lg text-foreground/80 font-medium">
                  {article.subtitle}
                </p>
              )}

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed line-clamp-3">
                {article.excerpt}
              </p>
            </div>

            <div className="pt-4 flex items-center justify-between border-t border-border/40">
              <div className="flex items-center gap-3">
                {article.author?.avatar && (
                  <img
                    src={article.author.avatar}
                    alt={article.author.name}
                    className="w-9 h-9 rounded-full object-cover border border-border"
                  />
                )}
                <div>
                  <p className="text-xs font-semibold text-foreground">{article.author?.name}</p>
                  <p className="text-[11px] text-muted-foreground">{article.author?.role}</p>
                </div>
              </div>

              <Link
                to={`/blog/${article.slug}`}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-accent group-hover:translate-x-1 transition-transform"
                aria-label={`Read article: ${article.title}`}
              >
                <span>Read Story</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </article>
    );
  }

  if (variant === 'compact') {
    return (
      <article className={`group py-6 border-b border-border/60 hover:border-primary/40 transition-colors text-left ${className}`}>
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            {category && (
              <Link
                to={`/blog/category/${category.slug}`}
                className="text-primary font-medium hover:underline"
              >
                {category.name}
              </Link>
            )}
            <span>•</span>
            <time dateTime={article.publishedAt}>{formattedDate}</time>
          </div>
          <span className="font-mono text-[11px] text-muted-foreground/80">{article.readingTime}</span>
        </div>

        <h3 className="text-lg sm:text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors mb-2">
          <Link to={`/blog/${article.slug}`}>
            {article.title}
          </Link>
        </h3>

        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed mb-3">
          {article.excerpt}
        </p>

        <div className="flex flex-wrap items-center gap-1.5">
          {(article.tags || []).slice(0, 3).map((tag) => (
            <Link
              key={tag}
              to={`/blog/tags/${tag.toLowerCase()}`}
              className="text-[11px] px-2 py-0.5 rounded-md bg-secondary/70 text-secondary-foreground hover:bg-primary/20 hover:text-primary transition-colors"
            >
              #{tag}
            </Link>
          ))}
        </div>
      </article>
    );
  }

  // Standard Editorial Grid Variant
  return (
    <article className={`group flex flex-col justify-between bg-card/60 backdrop-blur-sm border border-border/60 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 shadow-sm text-left ${className}`}>
      {article.featuredImage && (
        <div className="overflow-hidden aspect-[16/9] bg-secondary/30 relative">
          <img
            src={article.featuredImage}
            alt={article.imageAlt || article.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {category && (
            <Link
              to={`/blog/category/${category.slug}`}
              className="absolute bottom-3 left-3 px-2.5 py-1 text-[11px] font-semibold rounded-md bg-background/90 backdrop-blur-md text-foreground border border-border/50 hover:text-primary transition-colors"
            >
              {category.name}
            </Link>
          )}
        </div>
      )}

      <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between space-y-4">
        <div className="space-y-2.5">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              <time dateTime={article.publishedAt}>{formattedDate}</time>
            </span>
            <span className="inline-flex items-center gap-1 font-mono text-[11px]">
              <Clock className="h-3 w-3" />
              {article.readingTime}
            </span>
          </div>

          <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors leading-snug">
            <Link to={`/blog/${article.slug}`}>
              {article.title}
            </Link>
          </h3>

          <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
            {article.excerpt}
          </p>
        </div>

        <div className="pt-3 border-t border-border/40 flex items-center justify-between text-xs">
          <div className="flex flex-wrap gap-1">
            {(article.tags || []).slice(0, 2).map((t) => (
              <span key={t} className="text-[11px] text-muted-foreground">
                #{t}
              </span>
            ))}
          </div>

          <Link
            to={`/blog/${article.slug}`}
            className="inline-flex items-center gap-1 font-semibold text-primary group-hover:translate-x-1 transition-transform"
          >
            <span>Read</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
