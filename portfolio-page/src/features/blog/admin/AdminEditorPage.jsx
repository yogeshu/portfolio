// src/features/blog/admin/AdminEditorPage.jsx
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  Save,
  Send,
  Eye,
  Columns,
  Maximize2,
  Minimize2,
  ArrowLeft,
  Calendar,
  Sparkles,
  Image as ImageIcon,
  Check,
  AlertCircle,
  Clock,
  Bold,
  Italic,
  Heading1,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  Code,
  Quote,
  Table as TableIcon,
  Link2,
  Upload,
} from 'lucide-react';
import MarkdownRenderer from '@/components/blog/MarkdownRenderer';
import {
  getArticleById,
  saveArticle,
  getAllCategories,
  getAllTags,
  generateSlug,
  calculateReadingTime,
  saveDraft,
  getDraft,
  clearDraft,
} from '@/lib/blogStorage';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const AdminEditorPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = Boolean(id);

  const categories = useMemo(() => getAllCategories(), []);
  const allAvailableTags = useMemo(() => getAllTags(), []);

  // Form State
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [slug, setSlug] = useState('');
  const [slugManuallyEdited, setSlugManuallyEdited] = useState(false);
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('engineering-frontend');
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState('');
  const [featured, setFeatured] = useState(false);
  const [featuredImage, setFeaturedImage] = useState('');
  const [imageAlt, setImageAlt] = useState('');
  const [seoTitle, setSeoTitle] = useState('');
  const [seoDescription, setSeoDescription] = useState('');
  const [status, setStatus] = useState('draft');
  const [scheduledFor, setScheduledFor] = useState('');

  // UI state
  const [viewMode, setViewMode] = useState('split'); // 'editor' | 'preview' | 'split'
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [lastSavedTime, setLastSavedTime] = useState(null);
  const [saving, setSaving] = useState(false);
  const [notification, setNotification] = useState(null);

  const textareaRef = useRef(null);

  // Load article if editing, or restore unsaved draft
  useEffect(() => {
    if (isEditing) {
      const art = getArticleById(id);
      if (art) {
        setTitle(art.title || '');
        setSubtitle(art.subtitle || '');
        setSlug(art.slug || '');
        setSlugManuallyEdited(true);
        setExcerpt(art.excerpt || '');
        setContent(art.content || '');
        setCategory(art.category || 'engineering-frontend');
        setTags(art.tags || []);
        setFeatured(Boolean(art.featured));
        setFeaturedImage(art.featuredImage || '');
        setImageAlt(art.imageAlt || '');
        setSeoTitle(art.seoTitle || '');
        setSeoDescription(art.seoDescription || '');
        setStatus(art.status || 'draft');
        setScheduledFor(art.scheduledFor || '');
      } else {
        navigate('/admin', { replace: true });
      }
    } else {
      // Check for local unsaved draft for new post
      const draft = getDraft('new');
      if (draft) {
        setTitle(draft.title || '');
        setSubtitle(draft.subtitle || '');
        setSlug(draft.slug || '');
        setExcerpt(draft.excerpt || '');
        setContent(draft.content || '');
        setCategory(draft.category || 'engineering-frontend');
        setTags(draft.tags || []);
        setFeatured(Boolean(draft.featured));
        setFeaturedImage(draft.featuredImage || '');
        setImageAlt(draft.imageAlt || '');
        setSeoTitle(draft.seoTitle || '');
        setSeoDescription(draft.seoDescription || '');
        setLastSavedTime(draft.savedAt ? new Date(draft.savedAt) : null);
      }
    }
  }, [id, isEditing, navigate]);

  // Auto-slugify when title changes if user hasn't manually customized slug
  const handleTitleChange = (e) => {
    const val = e.target.value;
    setTitle(val);
    setHasUnsavedChanges(true);
    if (!slugManuallyEdited) {
      setSlug(generateSlug(val));
    }
  };

  // Warn before leaving window if unsaved changes exist
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (hasUnsavedChanges) {
        e.preventDefault();
        e.returnValue = '';
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [hasUnsavedChanges]);

  // Periodic autosave to local draft storage every 15s
  useEffect(() => {
    if (!hasUnsavedChanges) return;

    const timer = setInterval(() => {
      const draftPayload = {
        title,
        subtitle,
        slug,
        excerpt,
        content,
        category,
        tags,
        featured,
        featuredImage,
        imageAlt,
        seoTitle,
        seoDescription,
        status,
        scheduledFor,
      };
      saveDraft(id || 'new', draftPayload);
      setLastSavedTime(new Date());
    }, 15000);

    return () => clearInterval(timer);
  }, [
    hasUnsavedChanges,
    id,
    title,
    subtitle,
    slug,
    excerpt,
    content,
    category,
    tags,
    featured,
    featuredImage,
    imageAlt,
    seoTitle,
    seoDescription,
    status,
    scheduledFor,
  ]);

  // Markdown Toolbar helper to insert text around selection
  const insertMarkdown = (before, after = '') => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const previousContent = textarea.value;
    const selectedText = previousContent.substring(start, end);

    const replacement = `${before}${selectedText}${after}`;
    const newContent =
      previousContent.substring(0, start) + replacement + previousContent.substring(end);

    setContent(newContent);
    setHasUnsavedChanges(true);

    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + before.length, end + before.length);
    }, 0);
  };

  const handleAddTag = (e) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      const clean = tagInput.trim().replace(/^#/, '');
      if (clean && !tags.includes(clean)) {
        setTags([...tags, clean]);
        setTagInput('');
        setHasUnsavedChanges(true);
      }
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((t) => t !== tagToRemove));
    setHasUnsavedChanges(true);
  };

  // Image file upload handler (converts to base64 data URL)
  const handleImageFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 2 * 1024 * 1024) {
      alert('Image size exceeds 2MB limit. Please upload a smaller WebP or compressed image.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (uploadEvent) => {
      const dataUrl = uploadEvent.target?.result;
      if (dataUrl) {
        setFeaturedImage(dataUrl);
        setHasUnsavedChanges(true);
      }
    };
    reader.readAsDataURL(file);
  };

  // Save / Publish
  const handleSave = async (targetStatus) => {
    if (!title.trim()) {
      alert('Article title cannot be empty.');
      return;
    }

    setSaving(true);

    try {
      const payload = {
        id: isEditing ? id : undefined,
        title: title.trim(),
        subtitle: subtitle.trim(),
        slug: slug.trim() || generateSlug(title),
        excerpt: excerpt.trim(),
        content,
        category,
        tags,
        featured,
        featuredImage: featuredImage.trim(),
        imageAlt: imageAlt.trim() || title.trim(),
        seoTitle: seoTitle.trim() || `${title} — Yogesh Bhavsar`,
        seoDescription: seoDescription.trim() || excerpt.trim(),
        status: targetStatus,
        scheduledFor: targetStatus === 'scheduled' ? scheduledFor : null,
      };

      const savedArticle = saveArticle(payload);
      setHasUnsavedChanges(false);
      clearDraft(id || 'new');
      setLastSavedTime(new Date());

      setNotification({
        type: 'success',
        message:
          targetStatus === 'published'
            ? 'Article published successfully!'
            : 'Draft saved successfully!',
      });

      setTimeout(() => {
        navigate('/admin');
      }, 1200);
    } catch (err) {
      console.error('Save failed', err);
      setNotification({ type: 'error', message: 'Failed to save article.' });
    } finally {
      setSaving(false);
    }
  };

  const readingTimeEstimate = useMemo(() => calculateReadingTime(content), [content]);
  const wordCount = useMemo(() => {
    return content.trim().split(/\s+/).filter(Boolean).length;
  }, [content]);

  return (
    <div className="space-y-6 pb-20 text-left">
      {/* Editor Header Bar */}
      <div className="sticky top-16 z-30 bg-background/95 backdrop-blur-md border-b border-border/70 -mx-4 sm:-mx-8 px-4 sm:px-8 py-3 flex flex-wrap items-center justify-between gap-3 shadow-sm">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" asChild className="h-8 gap-1 text-xs">
            <Link to="/admin">
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Articles</span>
            </Link>
          </Button>

          <span className="text-muted-foreground/40">|</span>

          <span className="text-xs font-mono text-muted-foreground flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            <span>{readingTimeEstimate}</span>
            <span>•</span>
            <span>{wordCount} words</span>
          </span>

          {lastSavedTime && (
            <span className="hidden md:inline text-[11px] font-mono text-muted-foreground/70">
              Saved {lastSavedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </span>
          )}
        </div>

        {/* View Mode & Save Actions */}
        <div className="flex items-center gap-2">
          {/* View Mode Buttons */}
          <div className="hidden sm:flex items-center gap-1 bg-secondary/50 p-1 rounded-lg border border-border/50 text-xs">
            <button
              type="button"
              onClick={() => setViewMode('editor')}
              className={`px-2.5 py-1 rounded transition-colors ${
                viewMode === 'editor' ? 'bg-card font-semibold text-foreground shadow-xs' : 'text-muted-foreground'
              }`}
            >
              Editor
            </button>
            <button
              type="button"
              onClick={() => setViewMode('split')}
              className={`px-2.5 py-1 rounded transition-colors ${
                viewMode === 'split' ? 'bg-card font-semibold text-foreground shadow-xs' : 'text-muted-foreground'
              }`}
            >
              Split
            </button>
            <button
              type="button"
              onClick={() => setViewMode('preview')}
              className={`px-2.5 py-1 rounded transition-colors ${
                viewMode === 'preview' ? 'bg-card font-semibold text-foreground shadow-xs' : 'text-muted-foreground'
              }`}
            >
              Preview
            </button>
          </div>

          <Button
            variant="outline"
            size="sm"
            disabled={saving}
            onClick={() => handleSave('draft')}
            className="text-xs gap-1.5"
          >
            <Save className="h-3.5 w-3.5" />
            <span>Save Draft</span>
          </Button>

          <Button
            size="sm"
            disabled={saving}
            onClick={() => handleSave('published')}
            className="text-xs gap-1.5"
          >
            <Send className="h-3.5 w-3.5" />
            <span>Publish Article</span>
          </Button>
        </div>
      </div>

      {notification && (
        <div
          className={`p-3.5 rounded-xl text-xs flex items-center justify-between ${
            notification.type === 'success'
              ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400'
              : 'bg-destructive/10 border border-destructive/20 text-destructive'
          }`}
        >
          <span>{notification.message}</span>
          <button onClick={() => setNotification(null)} className="font-bold ml-2">
            ×
          </button>
        </div>
      )}

      {/* Main Metadata Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-card border border-border/70 rounded-2xl p-6 shadow-sm">
        {/* Left Column: Title, Subtitle, Excerpt */}
        <div className="lg:col-span-8 space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-semibold text-foreground">Article Title *</label>
            <Input
              type="text"
              placeholder="e.g. Engineering Core Web Vitals to 99+ on Production Next.js"
              value={title}
              onChange={handleTitleChange}
              className="text-lg font-bold h-12 bg-secondary/30 border-border"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-foreground">Subtitle / Deck</label>
            <Input
              type="text"
              placeholder="A brief editorial subtitle summarizing the angle of the post..."
              value={subtitle}
              onChange={(e) => {
                setSubtitle(e.target.value);
                setHasUnsavedChanges(true);
              }}
              className="h-10 text-sm bg-secondary/30 border-border"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-foreground">Slug (URL)</label>
              <Input
                type="text"
                placeholder="my-article-slug"
                value={slug}
                onChange={(e) => {
                  setSlug(generateSlug(e.target.value));
                  setSlugManuallyEdited(true);
                  setHasUnsavedChanges(true);
                }}
                className="font-mono text-xs h-10 bg-secondary/30 border-border"
              />
              <p className="text-[11px] text-muted-foreground font-mono">
                https://yogeshbhavsar.com/blog/{slug || '...'}
              </p>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-foreground">Category</label>
              <select
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                  setHasUnsavedChanges(true);
                }}
                className="w-full h-10 px-3 rounded-lg border border-border bg-secondary/30 text-xs font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
              >
                {categories.map((c) => (
                  <option key={c.id} value={c.slug}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-foreground">Excerpt (Feed Summary)</label>
            <Textarea
              rows={2}
              placeholder="Short, compelling hook shown on article cards and search snippets..."
              value={excerpt}
              onChange={(e) => {
                setExcerpt(e.target.value);
                setHasUnsavedChanges(true);
              }}
              className="text-xs bg-secondary/30 border-border resize-none"
            />
          </div>
        </div>

        {/* Right Column: Featured Image, Tags, Options */}
        <div className="lg:col-span-4 space-y-4 border-t lg:border-t-0 lg:border-l border-border/50 lg:pl-6">
          <div className="space-y-2">
            <label className="text-xs font-semibold text-foreground flex items-center justify-between">
              <span>Featured Cover Image</span>
              <label className="text-primary hover:underline cursor-pointer flex items-center gap-1 font-normal text-[11px]">
                <Upload className="h-3 w-3" />
                <span>Upload</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageFileUpload}
                  className="hidden"
                />
              </label>
            </label>
            <Input
              type="text"
              placeholder="Paste image URL (https://...)"
              value={featuredImage}
              onChange={(e) => {
                setFeaturedImage(e.target.value);
                setHasUnsavedChanges(true);
              }}
              className="text-xs h-9 bg-secondary/30 border-border font-mono"
            />

            {featuredImage && (
              <div className="relative aspect-[16/9] rounded-lg overflow-hidden border border-border/70 bg-secondary/20">
                <img
                  src={featuredImage}
                  alt={imageAlt || 'Featured preview'}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <Input
              type="text"
              placeholder="Cover image alt text"
              value={imageAlt}
              onChange={(e) => {
                setImageAlt(e.target.value);
                setHasUnsavedChanges(true);
              }}
              className="text-xs h-8 bg-secondary/30 border-border"
            />
          </div>

          {/* Tags Manager */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-foreground">Tags (Press Enter)</label>
            <Input
              type="text"
              placeholder="Type tag & press Enter..."
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={handleAddTag}
              className="text-xs h-9 bg-secondary/30 border-border"
            />
            <div className="flex flex-wrap gap-1.5 pt-1">
              {tags.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-md bg-secondary text-secondary-foreground"
                >
                  <span>#{t}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveTag(t)}
                    className="hover:text-destructive font-bold text-xs"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Featured Post Checkbox */}
          <div className="pt-2 border-t border-border/40 flex items-center justify-between">
            <span className="text-xs font-medium text-foreground flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-amber-500" />
              <span>Feature on Blog Homepage</span>
            </span>
            <input
              type="checkbox"
              checked={featured}
              onChange={(e) => {
                setFeatured(e.target.checked);
                setHasUnsavedChanges(true);
              }}
              className="h-4 w-4 rounded border-border text-primary focus:ring-primary"
            />
          </div>
        </div>
      </div>

      {/* Markdown Toolbar */}
      <div className="flex flex-wrap items-center gap-1 p-2 bg-card border border-border/70 rounded-xl shadow-xs text-muted-foreground">
        <button
          type="button"
          onClick={() => insertMarkdown('## ', '\n')}
          className="p-1.5 rounded hover:bg-secondary hover:text-foreground"
          title="Heading 2"
        >
          <Heading2 className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => insertMarkdown('### ', '\n')}
          className="p-1.5 rounded hover:bg-secondary hover:text-foreground"
          title="Heading 3"
        >
          <Heading3 className="h-4 w-4" />
        </button>
        <span className="h-4 w-px bg-border/80 mx-1" />
        <button
          type="button"
          onClick={() => insertMarkdown('**', '**')}
          className="p-1.5 rounded hover:bg-secondary hover:text-foreground"
          title="Bold"
        >
          <Bold className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => insertMarkdown('*', '*')}
          className="p-1.5 rounded hover:bg-secondary hover:text-foreground"
          title="Italic"
        >
          <Italic className="h-4 w-4" />
        </button>
        <span className="h-4 w-px bg-border/80 mx-1" />
        <button
          type="button"
          onClick={() => insertMarkdown('- ', '\n')}
          className="p-1.5 rounded hover:bg-secondary hover:text-foreground"
          title="Bullet List"
        >
          <List className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => insertMarkdown('1. ', '\n')}
          className="p-1.5 rounded hover:bg-secondary hover:text-foreground"
          title="Numbered List"
        >
          <ListOrdered className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => insertMarkdown('> ', '\n')}
          className="p-1.5 rounded hover:bg-secondary hover:text-foreground"
          title="Blockquote"
        >
          <Quote className="h-4 w-4" />
        </button>
        <span className="h-4 w-px bg-border/80 mx-1" />
        <button
          type="button"
          onClick={() => insertMarkdown('`', '`')}
          className="p-1.5 rounded hover:bg-secondary hover:text-foreground font-mono text-xs font-semibold"
          title="Inline Code"
        >
          &lt;/&gt;
        </button>
        <button
          type="button"
          onClick={() => insertMarkdown('```typescript\n', '\n```')}
          className="p-1.5 rounded hover:bg-secondary hover:text-foreground"
          title="Code Block"
        >
          <Code className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() =>
            insertMarkdown(
              '\n| Feature | Status | Details |\n|---|---|---|\n| Item 1 | Active | Details 1 |\n'
            )
          }
          className="p-1.5 rounded hover:bg-secondary hover:text-foreground"
          title="Table"
        >
          <TableIcon className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => insertMarkdown('[', '](https://)')}
          className="p-1.5 rounded hover:bg-secondary hover:text-foreground"
          title="Hyperlink"
        >
          <Link2 className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => insertMarkdown('![Alt Text](', ')')}
          className="p-1.5 rounded hover:bg-secondary hover:text-foreground"
          title="Inline Image"
        >
          <ImageIcon className="h-4 w-4" />
        </button>
      </div>

      {/* Writing Area: Split View, Editor Only, or Preview Only */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-[600px]">
        {/* Markdown Source Textarea */}
        {(viewMode === 'editor' || viewMode === 'split') && (
          <div
            className={`${
              viewMode === 'split' ? 'lg:col-span-6' : 'lg:col-span-12'
            } flex flex-col`}
          >
            <div className="bg-secondary/40 border border-border/70 rounded-t-xl px-4 py-2 text-xs font-mono font-medium text-muted-foreground flex items-center justify-between">
              <span>Markdown Source</span>
              <span>UTF-8</span>
            </div>
            <textarea
              ref={textareaRef}
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
                setHasUnsavedChanges(true);
              }}
              placeholder="Write your article in Markdown here... Use ## for section headings, ```typescript for code blocks."
              className="flex-grow min-h-[550px] p-4 bg-card border-x border-b border-border/70 rounded-b-xl font-mono text-sm leading-relaxed text-foreground resize-y focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
          </div>
        )}

        {/* Live Preview Panel */}
        {(viewMode === 'preview' || viewMode === 'split') && (
          <div
            className={`${
              viewMode === 'split' ? 'lg:col-span-6' : 'lg:col-span-12'
            } flex flex-col`}
          >
            <div className="bg-secondary/40 border border-border/70 rounded-t-xl px-4 py-2 text-xs font-mono font-medium text-muted-foreground flex items-center justify-between">
              <span>Live Rendered Preview</span>
              <span className="text-primary font-semibold">Real-time</span>
            </div>
            <div className="flex-grow min-h-[550px] p-6 sm:p-8 bg-card border-x border-b border-border/70 rounded-b-xl overflow-y-auto max-h-[750px]">
              {content ? (
                <MarkdownRenderer content={content} />
              ) : (
                <div className="py-20 text-center text-muted-foreground text-sm italic">
                  Start typing in the editor to see your live preview here...
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* SEO Drawer & Search Snippet Preview */}
      <div className="p-6 bg-card border border-border/70 rounded-2xl shadow-sm space-y-4">
        <h3 className="text-sm font-bold text-foreground">
          Technical SEO & Google SERP Preview
        </h3>
        <p className="text-xs text-muted-foreground">
          Configure how this article appears in search engine snippets, social cards, and browser tabs.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-semibold text-foreground">SEO Meta Title</label>
            <Input
              type="text"
              placeholder={title ? `${title} — Yogesh Bhavsar` : ''}
              value={seoTitle}
              onChange={(e) => {
                setSeoTitle(e.target.value);
                setHasUnsavedChanges(true);
              }}
              className="text-xs h-9 bg-secondary/30 border-border"
            />
            <p className="text-[11px] text-muted-foreground">
              {(seoTitle || title).length} / 60 recommended characters
            </p>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-foreground">SEO Meta Description</label>
            <Input
              type="text"
              placeholder={excerpt || 'Meta description for Google search snippet...'}
              value={seoDescription}
              onChange={(e) => {
                setSeoDescription(e.target.value);
                setHasUnsavedChanges(true);
              }}
              className="text-xs h-9 bg-secondary/30 border-border"
            />
            <p className="text-[11px] text-muted-foreground">
              {(seoDescription || excerpt).length} / 160 recommended characters
            </p>
          </div>
        </div>

        {/* Google SERP Simulated Card */}
        <div className="p-4 rounded-xl bg-secondary/20 border border-border/50 space-y-1 text-left font-sans">
          <p className="text-xs text-muted-foreground font-mono">
            https://yogeshbhavsar.com/blog/{slug || '...'}
          </p>
          <h4 className="text-base text-blue-600 dark:text-blue-400 font-medium hover:underline cursor-pointer line-clamp-1">
            {seoTitle || title || 'Untitled Article'} — Yogesh Bhavsar
          </h4>
          <p className="text-xs text-muted-foreground line-clamp-2">
            {seoDescription || excerpt || 'Article excerpt and description will appear in search results...'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminEditorPage;
