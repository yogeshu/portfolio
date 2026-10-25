import React from 'react';
import { ArrowRight, Code2, Gauge, Layers, ShieldCheck } from 'lucide-react';

const PreviewHero = ({ theme, mode }) => {
  return (
    <section className="text-center py-8 sm:py-12 space-y-6">
      {/* Eyebrow badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold border border-border">
        <span className="w-2 h-2 rounded-full bg-primary" />
        <span>Senior Frontend Specialist & Technical Architect</span>
      </div>

      {/* Hero Headline */}
      <h1 
        className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground max-w-4xl mx-auto leading-tight"
        style={{
          fontFamily: 'var(--theme-font-heading)',
          lineHeight: 'var(--theme-lh-heading)',
          letterSpacing: 'var(--theme-spacing-h)',
          fontWeight: 'var(--theme-fw-heading)'
        }}
      >
        Engineering Scalable Web Systems with{' '}
        <span className="text-accent underline decoration-accent/40 decoration-wavy underline-offset-8">
          Architectural Rigor
        </span>
      </h1>

      {/* Subtitle */}
      <p 
        className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        style={{
          lineHeight: 'var(--theme-lh-body)',
          letterSpacing: 'var(--theme-spacing-b)',
          fontWeight: 'var(--theme-fw-body)'
        }}
      >
        Specializing in production React & Next.js architectures, Core Web Vitals optimization, and 
        high-performance browser applications. Available for high-impact contracts and architecture consulting.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-wrap justify-center items-center gap-3 pt-2">
        <button 
          type="button"
          className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm shadow-md hover:opacity-90 active:scale-95 transition-all flex items-center gap-2"
        >
          <span>Explore Projects</span>
          <ArrowRight size={15} />
        </button>

        <button 
          type="button"
          className="px-5 py-2.5 rounded-lg bg-secondary text-secondary-foreground font-semibold text-sm border border-border hover:bg-secondary/80 active:scale-95 transition-all"
        >
          <span>Architecture Consulting</span>
        </button>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto pt-6 text-left">
        {[
          { icon: <Gauge className="w-4 h-4 text-primary" />, label: 'Core Web Vitals', value: '95+ Score' },
          { icon: <Layers className="w-4 h-4 text-primary" />, label: 'Experience', value: '7+ Years' },
          { icon: <Code2 className="w-4 h-4 text-primary" />, label: 'Architecture', value: 'Next.js & RSC' },
          { icon: <ShieldCheck className="w-4 h-4 text-primary" />, label: 'Accessibility', value: '100% WCAG AA' },
        ].map((item, idx) => (
          <div key={idx} className="p-3 rounded-lg border border-border bg-card/60 flex items-center gap-3 shadow-sm">
            <div className="p-2 rounded-md bg-secondary/80">
              {item.icon}
            </div>
            <div>
              <p className="text-xs font-semibold text-foreground">{item.value}</p>
              <p className="text-[10px] text-muted-foreground uppercase">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PreviewHero;
