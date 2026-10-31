// src/components/blog/TableOfContents.jsx
import React, { useEffect, useState } from 'react';
import { AlignLeft, ChevronDown, ChevronUp } from 'lucide-react';

const TableOfContents = ({ headings = [] }) => {
  const [activeId, setActiveId] = useState('');
  const [isOpenMobile, setIsOpenMobile] = useState(false);

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-80px 0px -60% 0px',
        threshold: 0.1,
      }
    );

    headings.forEach((heading) => {
      const el = document.getElementById(heading.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (!headings || headings.length === 0) {
    return null;
  }

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 90;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveId(id);
      setIsOpenMobile(false);
    }
  };

  return (
    <nav className="my-8 lg:my-0" aria-label="Table of contents">
      {/* Mobile Collapsible Header */}
      <div className="lg:hidden mb-4 border border-border/70 rounded-xl bg-card p-4">
        <button
          onClick={() => setIsOpenMobile(!isOpenMobile)}
          className="w-full flex items-center justify-between text-left font-medium text-sm text-foreground"
          aria-expanded={isOpenMobile}
        >
          <span className="flex items-center gap-2">
            <AlignLeft className="h-4 w-4 text-primary" />
            <span>Table of Contents ({headings.length})</span>
          </span>
          {isOpenMobile ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>

        {isOpenMobile && (
          <ul className="mt-3 space-y-2 border-t border-border/40 pt-3 text-sm">
            {headings.map((heading) => (
              <li
                key={heading.id}
                style={{ paddingLeft: `${(heading.level - 2) * 12}px` }}
              >
                <a
                  href={`#${heading.id}`}
                  onClick={(e) => handleScrollTo(e, heading.id)}
                  className={`block py-1 transition-colors ${
                    activeId === heading.id
                      ? 'text-primary font-semibold'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Desktop Sticky Sidebar */}
      <div className="hidden lg:block sticky top-28 bg-card/40 backdrop-blur-sm border border-border/60 rounded-xl p-5 shadow-sm">
        <h4 className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground font-bold mb-4">
          <AlignLeft className="h-3.5 w-3.5 text-primary" />
          <span>In this article</span>
        </h4>
        <ul className="space-y-2.5 text-xs font-sans">
          {headings.map((heading) => {
            const isActive = activeId === heading.id;
            return (
              <li
                key={heading.id}
                className="relative"
                style={{ paddingLeft: `${(heading.level - 2) * 12}px` }}
              >
                <a
                  href={`#${heading.id}`}
                  onClick={(e) => handleScrollTo(e, heading.id)}
                  className={`block py-0.5 leading-snug transition-all duration-200 ${
                    isActive
                      ? 'text-primary font-semibold translate-x-1'
                      : 'text-muted-foreground hover:text-foreground hover:translate-x-0.5'
                  }`}
                >
                  {heading.text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default TableOfContents;
