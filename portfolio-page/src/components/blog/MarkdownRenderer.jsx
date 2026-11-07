// src/components/blog/MarkdownRenderer.jsx
import React, { useState, useMemo, useRef } from 'react';
import { marked } from 'marked';
import Prism from 'prismjs';
import DOMPurify from 'dompurify';
import { generateSlug } from '@/lib/blogStorage';
import { Check, Copy } from 'lucide-react';

/**
 * Sanitize HTML with strict allow-list to neutralize stored XSS vectors
 */
function sanitizeHtml(html) {
  if (!html) return '';
  if (typeof window === 'undefined') return html;
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: [
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'a', 'b', 'i', 'strong', 'em', 'strike', 's', 'del',
      'ul', 'ol', 'li', 'blockquote', 'code', 'pre', 'hr', 'br', 'table', 'thead', 'tbody',
      'tr', 'th', 'td', 'img', 'figure', 'figcaption', 'span', 'div', 'mark', 'sub', 'sup'
    ],
    ALLOWED_ATTR: [
      'href', 'title', 'target', 'rel', 'class', 'id', 'src', 'alt', 'loading',
      'aria-label', 'aria-hidden'
    ],
    ALLOW_DATA_ATTR: false,
  });
}

// Ensure Prism global exists in browser environments
if (typeof window !== 'undefined') {
  window.Prism = Prism;
}

// Safely register syntax highlighting for common web languages without external script loading issues
if (Prism && Prism.languages) {
  // TypeScript grammar extension
  if (!Prism.languages.typescript && Prism.languages.javascript) {
    Prism.languages.typescript = Prism.languages.extend('javascript', {
      'class-name': {
        pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
        lookbehind: true,
        greedy: true,
        inside: null,
      },
      'builtin': /\b(?:string|Function|any|number|boolean|array|symbol|console|Promise|unknown|never|void)\b/,
    });
  }

  Prism.languages.ts = Prism.languages.typescript || Prism.languages.javascript;
  Prism.languages.tsx = Prism.languages.typescript || Prism.languages.javascript;
  Prism.languages.jsx = Prism.languages.javascript;
  Prism.languages.json = Prism.languages.javascript;
  Prism.languages.bash = Prism.languages.javascript;
  Prism.languages.sh = Prism.languages.javascript;
  Prism.languages.shell = Prism.languages.javascript;
  Prism.languages.python = Prism.languages.javascript;
  Prism.languages.py = Prism.languages.javascript;
  Prism.languages.sql = Prism.languages.javascript;
}

// Configure marked with custom heading IDs and safe defaults supporting marked v12+ and earlier
marked.use({
  gfm: true,
  breaks: true,
  renderer: {
    heading(token) {
      const text = typeof token === 'object' ? token.text : token;
      const depth = typeof token === 'object' ? token.depth : arguments[1] || 2;
      const rawText = String(text || '').replace(/<[^>]*>?/gm, '');
      const id = generateSlug(rawText);
      return `<h${depth} id="${id}" class="scroll-mt-24 group relative">${text}<a href="#${id}" class="anchor-link ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-primary font-mono text-sm" aria-label="Link to section">#</a></h${depth}>`;
    },
    link(token) {
      const href = typeof token === 'object' ? token.href : token;
      const title = typeof token === 'object' ? token.title : arguments[1];
      const text = typeof token === 'object' ? token.text : arguments[2];
      const isExternal = String(href || '').startsWith('http://') || String(href || '').startsWith('https://');
      const targetAttr = isExternal ? 'target="_blank" rel="noopener noreferrer"' : '';
      const titleAttr = title ? `title="${title}"` : '';
      return `<a href="${href}" ${titleAttr} ${targetAttr} class="text-primary hover:text-accent underline underline-offset-4 decoration-primary/40 hover:decoration-accent transition-colors">${text}</a>`;
    },
    image(token) {
      const href = typeof token === 'object' ? token.href : token;
      const title = typeof token === 'object' ? token.title : arguments[1];
      const text = typeof token === 'object' ? token.text : arguments[2];
      const titleText = title || text || '';
      return `
        <figure class="my-8 rounded-xl overflow-hidden border border-border/60 bg-card">
          <img src="${href}" alt="${text || ''}" loading="lazy" class="w-full object-cover max-h-[500px]" />
          ${titleText ? `<figcaption class="text-center text-xs text-muted-foreground py-2 px-4 italic border-t border-border/40">${titleText}</figcaption>` : ''}
        </figure>
      `;
    },
    blockquote(token) {
      const text = typeof token === 'object' ? (token.text || '') : token;
      return `
        <blockquote class="border-l-4 border-primary pl-5 py-2 my-6 italic text-foreground/90 bg-primary/5 rounded-r-lg font-serif">
          ${text}
        </blockquote>
      `;
    },
  },
});

/**
 * Custom CodeBlock interactive component with Copy Button and Language badge
 */
export const CodeBlock = ({ language, code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.warn('Failed to copy to clipboard', e);
    }
  };

  const highlightedCode = useMemo(() => {
    const lang = (language || 'javascript').toLowerCase();
    const grammar = Prism.languages[lang] || Prism.languages.javascript;
    try {
      return Prism.highlight(code, grammar, lang);
    } catch {
      return code;
    }
  }, [code, language]);

  return (
    <div className="my-6 rounded-xl overflow-hidden border border-border/80 bg-slate-950 dark:bg-black/80 shadow-md">
      <div className="flex items-center justify-between px-4 py-2 bg-slate-900/90 dark:bg-zinc-900/90 border-b border-border/40 text-xs">
        <span className="font-mono text-zinc-400 uppercase tracking-wider font-semibold text-[11px]">
          {language || 'text'}
        </span>
        <button
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors text-[11px] font-medium"
          aria-label="Copy code to clipboard"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-emerald-400" />
              <span className="text-emerald-400">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <div className="p-4 overflow-x-auto text-[13px] sm:text-sm font-mono leading-relaxed text-zinc-100">
        <pre className="!bg-transparent !p-0 !m-0">
          <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
        </pre>
      </div>
    </div>
  );
};

/**
 * Main MarkdownRenderer Component
 */
const MarkdownRenderer = ({ content = '' }) => {
  const containerRef = useRef(null);

  // Parse markdown by separating code blocks so we can attach React interactive buttons
  const parsedSections = useMemo(() => {
    if (!content) return [];
    const codeBlockRegex = /```([a-zA-Z0-9_-]*)\n([\s\S]*?)```/g;
    const sections = [];
    let lastIndex = 0;
    let match;

    while ((match = codeBlockRegex.exec(content)) !== null) {
      if (match.index > lastIndex) {
        const textChunk = content.substring(lastIndex, match.index);
        try {
          sections.push({
            type: 'html',
            content: sanitizeHtml(marked.parse(textChunk)),
          });
        } catch (e) {
          sections.push({ type: 'html', content: sanitizeHtml(textChunk) });
        }
      }

      sections.push({
        type: 'code',
        language: match[1] || 'text',
        code: match[2].trimEnd(),
      });

      lastIndex = match.index + match[0].length;
    }

    if (lastIndex < content.length) {
      const remainingChunk = content.substring(lastIndex);
      try {
        sections.push({
          type: 'html',
          content: sanitizeHtml(marked.parse(remainingChunk)),
        });
      } catch (e) {
        sections.push({ type: 'html', content: sanitizeHtml(remainingChunk) });
      }
    }

    return sections;
  }, [content]);

  return (
    <article
      ref={containerRef}
      className="prose prose-zinc dark:prose-invert max-w-none 
        prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-foreground
        prose-h1:text-3xl md:prose-h1:text-4xl prose-h1:mb-6
        prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-4
        prose-h3:text-xl md:prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
        prose-p:text-foreground/85 prose-p:leading-relaxed prose-p:my-5 prose-p:text-base md:prose-p:text-lg
        prose-li:text-foreground/85 prose-li:my-1.5
        prose-strong:text-foreground prose-strong:font-semibold
        prose-hr:border-border/60 prose-hr:my-8"
    >
      {parsedSections.map((sec, idx) => {
        if (sec.type === 'code') {
          return <CodeBlock key={idx} language={sec.language} code={sec.code} />;
        }
        return (
          <div
            key={idx}
            dangerouslySetInnerHTML={{ __html: sec.content }}
            className="editorial-prose"
          />
        );
      })}
    </article>
  );
};

export default MarkdownRenderer;
