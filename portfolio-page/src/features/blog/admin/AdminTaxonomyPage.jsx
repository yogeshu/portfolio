// src/features/blog/admin/AdminTaxonomyPage.jsx
import React, { useState, useMemo } from 'react';
import { FolderTree, Tag, Plus, Trash2, Edit, AlertCircle, Layers } from 'lucide-react';
import {
  getAllCategories,
  getAllTags,
  saveCategory,
  deleteCategory,
  saveTag,
  deleteTag,
  getAllArticles,
} from '@/lib/blogStorage';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const AdminTaxonomyPage = () => {
  const [categories, setCategories] = useState(() => getAllCategories());
  const [tags, setTags] = useState(() => getAllTags());
  const allArticles = useMemo(() => getAllArticles({ includeDrafts: true }), []);

  // Category Form State
  const [catName, setCatName] = useState('');
  const [catSlug, setCatSlug] = useState('');
  const [catDesc, setCatDesc] = useState('');
  const [newTag, setNewTag] = useState('');

  const refreshData = () => {
    setCategories(getAllCategories());
    setTags(getAllTags());
  };

  const handleAddCategory = (e) => {
    e.preventDefault();
    if (!catName.trim()) return;

    saveCategory({
      name: catName.trim(),
      slug: catSlug.trim() || undefined,
      description: catDesc.trim(),
    });

    setCatName('');
    setCatSlug('');
    setCatDesc('');
    refreshData();
  };

  const handleDeleteCategory = (id) => {
    if (confirm('Are you sure you want to delete this category?')) {
      deleteCategory(id);
      refreshData();
    }
  };

  const handleAddTag = (e) => {
    e.preventDefault();
    if (!newTag.trim()) return;
    saveTag(newTag.trim());
    setNewTag('');
    refreshData();
  };

  const handleDeleteTag = (tagName) => {
    if (confirm(`Delete tag "${tagName}"?`)) {
      deleteTag(tagName);
      refreshData();
    }
  };

  return (
    <div className="space-y-8 text-left">
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
          Categories & Tags
        </h1>
        <p className="text-xs sm:text-sm text-muted-foreground">
          Organize your engineering publications into structured taxonomy topics and keywords.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Categories Section */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center justify-between border-b border-border/60 pb-3">
            <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
              <FolderTree className="h-5 w-5 text-primary" />
              <span>Categories ({categories.length})</span>
            </h2>
          </div>

          {/* Add Category Form */}
          <form onSubmit={handleAddCategory} className="p-4 rounded-xl bg-card border border-border/70 space-y-3 shadow-xs">
            <h3 className="text-xs font-semibold text-foreground uppercase tracking-wider font-mono">
              Add New Category
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Input
                type="text"
                placeholder="Category Name"
                value={catName}
                onChange={(e) => setCatName(e.target.value)}
                className="text-xs h-9"
              />
              <Input
                type="text"
                placeholder="slug (e.g. engineering-frontend)"
                value={catSlug}
                onChange={(e) => setCatSlug(e.target.value)}
                className="text-xs h-9 font-mono"
              />
            </div>
            <Textarea
              rows={2}
              placeholder="Short description of this content category..."
              value={catDesc}
              onChange={(e) => setCatDesc(e.target.value)}
              className="text-xs resize-none"
            />
            <Button type="submit" size="sm" className="text-xs">
              <Plus className="h-3.5 w-3.5 mr-1" />
              Add Category
            </Button>
          </form>

          {/* Categories List */}
          <div className="space-y-3">
            {categories.map((cat) => {
              const count = allArticles.filter((a) => a.category === cat.slug).length;
              return (
                <div
                  key={cat.id || cat.slug}
                  className="p-4 rounded-xl bg-card border border-border/60 flex items-start justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-sm text-foreground">{cat.name}</h4>
                      <code className="text-[11px] font-mono text-muted-foreground bg-secondary px-1.5 py-0.5 rounded">
                        {cat.slug}
                      </code>
                    </div>
                    <p className="text-xs text-muted-foreground">{cat.description}</p>
                    <p className="text-[11px] font-mono text-primary pt-1">
                      {count} {count === 1 ? 'article' : 'articles'}
                    </p>
                  </div>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleDeleteCategory(cat.id || cat.slug)}
                    className="h-8 w-8 p-0 text-muted-foreground hover:text-destructive"
                    title="Delete category"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tags Section */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center justify-between border-b border-border/60 pb-3">
            <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
              <Tag className="h-5 w-5 text-primary" />
              <span>Tags ({tags.length})</span>
            </h2>
          </div>

          {/* Add Tag Form */}
          <form onSubmit={handleAddTag} className="p-4 rounded-xl bg-card border border-border/70 space-y-3 shadow-xs">
            <h3 className="text-xs font-semibold text-foreground uppercase tracking-wider font-mono">
              Add New Tag
            </h3>
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="Tag name (e.g. Web Workers)"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                className="text-xs h-9"
              />
              <Button type="submit" size="sm" className="text-xs shrink-0">
                <Plus className="h-3.5 w-3.5 mr-1" />
                Add
              </Button>
            </div>
          </form>

          {/* Tag Badges Cloud */}
          <div className="p-4 rounded-xl bg-card border border-border/60 flex flex-wrap gap-2">
            {tags.map((t) => {
              const count = allArticles.filter((a) => (a.tags || []).includes(t)).length;
              return (
                <div
                  key={t}
                  className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary text-xs font-medium text-foreground hover:bg-primary/20 transition-colors"
                >
                  <span>#{t}</span>
                  <span className="text-[10px] text-muted-foreground font-mono">({count})</span>
                  <button
                    onClick={() => handleDeleteTag(t)}
                    className="opacity-40 group-hover:opacity-100 hover:text-destructive transition-opacity ml-1 font-bold"
                    title="Remove tag"
                  >
                    ×
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminTaxonomyPage;
