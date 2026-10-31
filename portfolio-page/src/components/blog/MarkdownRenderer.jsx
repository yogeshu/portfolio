// src/components/blog/MarkdownRenderer.jsx
import React, { useEffect, useState, useRef } from 'react';
import { marked } from 'marked';
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-markdown';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-sql';
import { generateSlug } from '@/lib/blogStorage';
import { Check, Copy } from 'lucide-react';

// Configure marked with custom heading IDs and safe defaults
const renderer = new marked.Renderer();

renderer.heading = function (text, level) {
  // Strip any inline HTML tags from the ID
  const rawText = text.replace(/<[^>]*>?/gm, '');
  const id = generateSlug(rawText);
  return `<h${level} id="${id}" class="scroll-mt-24 group relative">${text}<a href="#${id}" class="anchor-link ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-primary font-mono text-sm" aria-label="Link to section">#</a></h${level}>`;
};

renderer.link = function (href, title, text) {
  const isExternal = href.startsWith('http://') || href.startsWith('https://');
  const targetAttr = isExternal ? 'target="_blank" rel="noopener noreferrer"' : '';
  const titleAttr = title ? `title="${title}"` : '';
  return `<a href="${href}" ${titleAttr} ${targetAttr} class="text-primary hover:text-accent underline underline-offset-4 decoration-primary/40 hover:decoration-accent transition-colors">${text}</a>`;
};

renderer.image = function (href, title, text) {
  const titleText = title || text || '';
  return `
    <figure class="my-8 rounded-xl overflow-hidden border border-border/60 bg-card">
      <img src="${href}" alt="${text || ''}" loading="lazy" class="w-full object-cover max-h-[500px]" />
      ${titleText ? `<figcaption class="text-center text-xs text-muted-foreground py-2 px-4 italic border-t border-border/40">${titleText}</figcaption>` : ''}
    </figure>
  `;
};

renderer.table = function (header, body) {
  return `
    <div class="overflow-x-auto my-8 border border-border/60 rounded-xl bg-card">
      <table class="w-full text-left text-sm">
        <thead class="bg-secondary/60 text-foreground border-b border-border/60">${header}</thead>
        <tbody class="divide-y divide-border/40">${body}</tbody>
      </table>
    </div>
  `;
};

renderer.blockquote = function (quote) {
  return `
    <blockquote class="border-l-4 border-primary pl-5 py-2 my-6 italic text-foreground/90 bg-primary/5 rounded-r-lg font-serif">
      ${quote}
    </blockquote>
  `;
};

marked.setOptions({
  renderer,
  gfm: true,
  breaks: true,
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

  const highlightedCode = React.useMemo(() => {
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
 * Splits code blocks into first-class CodeBlock components with copy buttons,
 * and renders standard markdown prose in styled typography.
 */
const MarkdownRenderer = ({ content = '' }) => {
  const containerRef = useRef(null);

  // Parse markdown by separating code blocks so we can attach React interactive buttons
  const parsedSections = React.useMemo(() => {
    if (!content) return [];
    const codeBlockRegex = /```([a-zA-Z0-9_-]*)\n([\s\S]*?)```/g;
    const sections = [];
    let lastIndex = 0;
    let match;

    while ((match = codeBlockRegex.exec(content)) !== null) {
      // Content before code block
      if (match.index > lastIndex) {
        const textChunk = content.substring(lastIndex, match.index);
        sections.push({
          type: 'html',
          content: marked.parse(textChunk),
        });
      }

      // Code block
      sections.push({
        type: 'code',
        language: match[1] || 'text',
        code: match[2].trimEnd(),
      });

      lastIndex = match.index + match[0].length;
    }

    // Remaining content after last code block
    if (lastIndex < content.length) {
      const remainingChunk = content.substring(lastIndex);
      sections.push({
        type: 'html',
        content: marked.parse(remainingChunk),
      });
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
