// src/pages/blog/CategoryArchivePage.jsx
import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FolderOpen, ArrowLeft, Layers, Home, ChevronRight } from 'lucide-react';
import SEO from '@/components/SEO';
import ArticleCard from '@/components/blog/ArticleCard';
import { getAllArticles, getCategoryBySlug, getAllCategories } from '@/lib/blogStorage';
import { Button } from '@/components/ui/button';

const CategoryArchivePage = () => {
  const { slug } = useParams();

  const category = useMemo(() => getCategoryBySlug(slug), [slug]);
  const allCategories = useMemo(() => getAllCategories(), []);

  const articles = useMemo(() => {
    const all = getAllArticles({ includeDrafts: false });
    return all.filter((a) => a.category === slug);
  }, [slug]);

  const siteUrl = 'https://yogeshbhavsar.com';
  const categoryUrl = `${siteUrl}/blog/category/${slug}`;

  if (!category) {
    return (
      <div className="max-w-xl mx-auto py-24 text-center space-y-6">
        <FolderOpen className="h-16 w-16 text-muted-foreground/60 mx-auto" />
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Category Not Found</h1>
        <p className="text-muted-foreground">
          The category you are looking for does not exist or has been removed.
        </p>
        <Button asChild>
          <Link to="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog Home
          </Link>
        </Button>
      </div>
    );
  }

  const categorySchema = [
    {
      '@type': 'CollectionPage',
      '@id': `${categoryUrl}/#collection`,
      name: `${category.name} Articles — Yogesh Bhavsar`,
      description: category.description,
      url: categoryUrl,
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
          name: category.name,
          item: categoryUrl,
        },
      ],
    },
  ];

  return (
    <>
      <SEO
        title={`${category.name} — Technical Essays & Architecture | Yogesh Bhavsar`}
        description={category.description}
        canonical={`/blog/category/${category.slug}`}
        ogType="website"
        schema={categorySchema}
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
          <span className="text-foreground">{category.name}</span>
        </nav>

        {/* Category Header */}
        <header className="border-b border-border/60 pb-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-primary bg-primary/10 border border-primary/20">
            <FolderOpen className="h-3.5 w-3.5" />
            <span>Topic Category</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
            {category.name}
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            {category.description}
          </p>
          <p className="text-xs font-mono text-muted-foreground pt-2">
            {articles.length} {articles.length === 1 ? 'article published' : 'articles published'}
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
              <h3 className="text-lg font-semibold text-foreground">No articles in this category yet</h3>
              <p className="text-sm text-muted-foreground max-w-md mx-auto">
                Articles in this category are being prepared. Check back soon or explore other topics below.
              </p>
              <Button asChild variant="outline" size="sm">
                <Link to="/blog">Browse All Articles</Link>
              </Button>
            </div>
          )}
        </section>

        {/* Other Categories */}
        <section className="pt-10 border-t border-border/60 space-y-4">
          <h3 className="text-sm font-mono uppercase tracking-wider text-muted-foreground font-bold">
            Explore Other Categories
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {allCategories
              .filter((c) => c.slug !== category.slug)
              .map((c) => (
                <Link
                  key={c.id}
                  to={`/blog/category/${c.slug}`}
                  className="text-xs px-3.5 py-2 rounded-xl bg-card border border-border/70 hover:border-primary/50 text-foreground transition-all hover:text-primary"
                >
                  {c.name}
                </Link>
              ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default CategoryArchivePage;
