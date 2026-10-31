// src/features/blog/admin/AdminDashboardPage.jsx
import React, { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  FileText,
  Plus,
  Search,
  Eye,
  Edit,
  Trash2,
  CheckCircle2,
  Clock,
  Sparkles,
  ExternalLink,
  BookOpen,
  Calendar,
  AlertTriangle,
} from 'lucide-react';
import {
  getAllArticles,
  deleteArticle,
  toggleArticleStatus,
  getAllCategories,
} from '@/lib/blogStorage';
import { formatDate } from '@/components/blog/ArticleCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const AdminDashboardPage = () => {
  const navigate = useNavigate();
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [articles, setArticles] = useState(() => getAllArticles({ includeDrafts: true }));
  const [deleteConfirmId, setDeleteConfirmId] = useState(null);

  const categories = useMemo(() => getAllCategories(), []);

  const refreshArticles = () => {
    setArticles(getAllArticles({ includeDrafts: true }));
  };

  const metrics = useMemo(() => {
    const total = articles.length;
    const published = articles.filter((a) => a.status === 'published').length;
    const drafts = articles.filter((a) => a.status === 'draft').length;
    const scheduled = articles.filter((a) => a.status === 'scheduled').length;
    const totalViews = articles.reduce((acc, a) => acc + (a.views || 0), 0);
    return { total, published, drafts, scheduled, totalViews };
  }, [articles]);

  const filteredArticles = useMemo(() => {
    return articles.filter((art) => {
      if (filterStatus !== 'all' && art.status !== filterStatus) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesTitle = art.title.toLowerCase().includes(q);
        const matchesExcerpt = (art.excerpt || '').toLowerCase().includes(q);
        const matchesTag = (art.tags || []).some((t) => t.toLowerCase().includes(q));
        return matchesTitle || matchesExcerpt || matchesTag;
      }
      return true;
    });
  }, [articles, filterStatus, searchQuery]);

  const handleToggleStatus = (id, currentStatus) => {
    const newStatus = currentStatus === 'published' ? 'draft' : 'published';
    toggleArticleStatus(id, newStatus);
    refreshArticles();
  };

  const handleDelete = (id) => {
    deleteArticle(id);
    setDeleteConfirmId(null);
    refreshArticles();
  };

  return (
    <div className="space-y-8">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
            Articles & Publications
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Manage your blog posts, draft articles, and content publishing workflow.
          </p>
        </div>

        <Button asChild className="gap-2">
          <Link to="/admin/editor">
            <Plus className="h-4 w-4" />
            <span>Create New Article</span>
          </Link>
        </Button>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 sm:p-5 rounded-2xl bg-card border border-border/70 shadow-sm space-y-1">
          <div className="flex items-center justify-between text-muted-foreground">
            <span className="text-xs font-medium">Total Articles</span>
            <FileText className="h-4 w-4 text-primary" />
          </div>
          <p className="text-2xl sm:text-3xl font-bold text-foreground">{metrics.total}</p>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-card border border-border/70 shadow-sm space-y-1">
          <div className="flex items-center justify-between text-muted-foreground">
            <span className="text-xs font-medium">Published</span>
            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
          </div>
          <p className="text-2xl sm:text-3xl font-bold text-emerald-600 dark:text-emerald-400">
            {metrics.published}
          </p>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-card border border-border/70 shadow-sm space-y-1">
          <div className="flex items-center justify-between text-muted-foreground">
            <span className="text-xs font-medium">Drafts</span>
            <Clock className="h-4 w-4 text-amber-500" />
          </div>
          <p className="text-2xl sm:text-3xl font-bold text-amber-600 dark:text-amber-400">
            {metrics.drafts}
          </p>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-card border border-border/70 shadow-sm space-y-1">
          <div className="flex items-center justify-between text-muted-foreground">
            <span className="text-xs font-medium">Total Reads</span>
            <Eye className="h-4 w-4 text-cyan-500" />
          </div>
          <p className="text-2xl sm:text-3xl font-bold text-foreground">{metrics.totalViews}</p>
        </div>
      </div>

      {/* Filter Tabs and Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        <div className="flex items-center gap-1.5 p-1 bg-secondary/50 rounded-xl border border-border/50 max-w-fit">
          {[
            { id: 'all', label: `All (${metrics.total})` },
            { id: 'published', label: `Published (${metrics.published})` },
            { id: 'draft', label: `Drafts (${metrics.drafts})` },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilterStatus(tab.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                filterStatus === tab.id
                  ? 'bg-card text-foreground shadow-sm font-semibold'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="relative max-w-xs w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-9 pl-9 text-xs bg-card border-border/70"
          />
        </div>
      </div>

      {/* Articles Table */}
      <div className="rounded-2xl border border-border/70 bg-card overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-secondary/40 text-muted-foreground text-xs uppercase tracking-wider font-mono border-b border-border/60">
              <tr>
                <th className="py-3.5 px-4 sm:px-6">Article</th>
                <th className="py-3.5 px-4">Category</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4">Published</th>
                <th className="py-3.5 px-4">Views</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              {filteredArticles.length > 0 ? (
                filteredArticles.map((art) => {
                  const cat = categories.find((c) => c.slug === art.category);
                  const isPublished = art.status === 'published';

                  return (
                    <tr key={art.id} className="hover:bg-secondary/20 transition-colors">
                      <td className="py-4 px-4 sm:px-6 max-w-md">
                        <div className="flex items-start gap-3">
                          {art.featured && (
                            <span title="Featured post">
                              <Sparkles className="h-4 w-4 text-amber-500 mt-1 flex-shrink-0" />
                            </span>
                          )}
                          <div className="space-y-1">
                            <p className="font-semibold text-foreground hover:text-primary transition-colors line-clamp-1">
                              <Link to={`/admin/editor/${art.id}`}>{art.title}</Link>
                            </p>
                            <p className="text-xs text-muted-foreground line-clamp-1 font-mono">
                              /blog/{art.slug}
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="py-4 px-4">
                        <span className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground font-medium">
                          {cat ? cat.name : art.category}
                        </span>
                      </td>

                      <td className="py-4 px-4">
                        <span
                          className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                            isPublished
                              ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30'
                              : 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30'
                          }`}
                        >
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${
                              isPublished ? 'bg-emerald-500' : 'bg-amber-500'
                            }`}
                          />
                          {isPublished ? 'Published' : 'Draft'}
                        </span>
                      </td>

                      <td className="py-4 px-4 text-xs text-muted-foreground font-mono">
                        {formatDate(art.publishedAt || art.updatedAt)}
                      </td>

                      <td className="py-4 px-4 text-xs font-mono text-muted-foreground">
                        {art.views || 0}
                      </td>

                      <td className="py-4 px-4 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          {/* Preview Live Link */}
                          <Button
                            variant="ghost"
                            size="sm"
                            asChild
                            className="h-8 w-8 p-0 text-muted-foreground hover:text-primary"
                            title="Preview article"
                          >
                            <Link to={`/blog/${art.slug}`} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4" />
                            </Link>
                          </Button>

                          {/* Edit button */}
                          <Button
                            variant="ghost"
                            size="sm"
                            asChild
                            className="h-8 w-8 p-0 text-muted-foreground hover:text-primary"
                            title="Edit article"
                          >
                            <Link to={`/admin/editor/${art.id}`}>
                              <Edit className="h-4 w-4" />
                            </Link>
                          </Button>

                          {/* Toggle Status */}
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleToggleStatus(art.id, art.status)}
                            className="h-8 px-2 text-xs font-medium text-muted-foreground hover:text-foreground"
                          >
                            {isPublished ? 'Unpublish' : 'Publish'}
                          </Button>

                          {/* Delete button */}
                          {deleteConfirmId === art.id ? (
                            <div className="flex items-center gap-1 bg-destructive/10 p-1 rounded-lg">
                              <button
                                onClick={() => handleDelete(art.id)}
                                className="px-2 py-0.5 text-xs font-bold text-destructive hover:underline"
                              >
                                Confirm
                              </button>
                              <button
                                onClick={() => setDeleteConfirmId(null)}
                                className="text-xs text-muted-foreground px-1"
                              >
                                Cancel
                              </button>
                            </div>
                          ) : (
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => setDeleteConfirmId(art.id)}
                              className="h-8 w-8 p-0 text-muted-foreground hover:text-destructive"
                              title="Delete article"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="6" className="py-12 text-center text-muted-foreground">
                    No articles found matching the current filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
