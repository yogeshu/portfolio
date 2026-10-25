import React from 'react';
import { ExternalLink, Github, Globe, ShieldCheck, Cpu, Zap, ArrowRight } from 'lucide-react';

const PreviewCardSection = ({ theme, mode }) => {
  return (
    <section className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-border pb-4">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary">
            01 — Representative Cards
          </span>
          <h2 
            className="text-2xl sm:text-3xl font-extrabold text-foreground mt-1"
            style={{ fontFamily: 'var(--theme-font-heading)' }}
          >
            Project & Case Study Layouts
          </h2>
        </div>
        <p className="text-xs text-muted-foreground sm:text-right max-w-xs">
          Verifying challenge/solution blocks, card borders, badge hierarchy, and action button states.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Sample Card 1: FrontendYogi Open Product */}
        <div className="rounded-xl border border-border bg-card p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all space-y-5">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-accent/15 text-accent border border-accent/25">
                Open Web App • Live
              </span>
              <span className="text-xs text-muted-foreground font-mono">
                /projects/frontendyogi
              </span>
            </div>

            <div>
              <h3 
                className="text-xl font-bold text-foreground"
                style={{ fontFamily: 'var(--theme-font-heading)' }}
              >
                FrontendYogi
              </h3>
              <p className="text-xs text-muted-foreground mt-1">
                A client-side developer workstation for mockups, diffing, and zero-upload conversions.
              </p>
            </div>

            {/* Challenge & Solution Blocks */}
            <div className="space-y-2.5">
              <div className="p-3 rounded-lg border border-red-500/15 bg-red-500/5 text-xs">
                <span className="font-bold text-red-500 uppercase tracking-wider text-[10px] block mb-1">
                  Challenge
                </span>
                <span className="text-muted-foreground">
                  Developers need fast utilities without uploading sensitive code to third-party servers.
                </span>
              </div>

              <div className="p-3 rounded-lg border border-green-500/15 bg-green-500/5 text-xs">
                <span className="font-bold text-green-500 uppercase tracking-wider text-[10px] block mb-1">
                  Solution
                </span>
                <span className="text-foreground">
                  Built a 100% in-browser workstation utilizing Web Workers and HTML5 Canvas diffing.
                </span>
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-2.5">
              <div className="p-2 rounded-lg bg-secondary/60 border border-secondary flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-primary" />
                <div>
                  <p className="text-xs font-bold text-foreground leading-none">Live Online</p>
                  <p className="text-[9px] text-muted-foreground uppercase">Availability</p>
                </div>
              </div>

              <div className="p-2 rounded-lg bg-secondary/60 border border-secondary flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5 text-primary" />
                <div>
                  <p className="text-xs font-bold text-foreground leading-none">In-Browser</p>
                  <p className="text-[9px] text-muted-foreground uppercase">Processing</p>
                </div>
              </div>
            </div>

            {/* Tech stack tags */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {['React', 'Next.js', 'TypeScript', 'Web Workers', 'Canvas API'].map(tag => (
                <span key={tag} className="px-2 py-0.5 rounded text-[11px] font-medium bg-muted text-foreground/80 border border-border">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div className="pt-4 border-t border-border flex items-center gap-2.5">
            <button 
              type="button"
              className="flex-1 py-2 px-3 rounded-lg bg-primary text-primary-foreground font-semibold text-xs shadow-sm hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-1.5"
            >
              <Globe size={13} />
              <span>Open Website</span>
            </button>
            <button 
              type="button"
              className="flex-1 py-2 px-3 rounded-lg bg-secondary text-secondary-foreground font-semibold text-xs border border-border hover:bg-secondary/80 active:scale-95 transition-all flex items-center justify-center gap-1.5"
            >
              <ExternalLink size={13} />
              <span>Architecture</span>
            </button>
          </div>
        </div>

        {/* Sample Card 2: Enterprise IoT Portal */}
        <div className="rounded-xl border border-border bg-card p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all space-y-5">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-secondary text-secondary-foreground border border-border">
                Enterprise • Telemetry
              </span>
              <span className="text-xs text-muted-foreground font-mono">
                Jio Platforms
              </span>
            </div>

            <div>
              <h3 
                className="text-xl font-bold text-foreground"
                style={{ fontFamily: 'var(--theme-font-heading)' }}
              >
                Cattle Management Portal
              </h3>
              <p className="text-xs text-muted-foreground mt-1">
                Complex livestock telemetry dashboard with strict role-based access across rural networks.
              </p>
            </div>

            {/* Challenge & Solution Blocks */}
            <div className="space-y-2.5">
              <div className="p-3 rounded-lg border border-red-500/15 bg-red-500/5 text-xs">
                <span className="font-bold text-red-500 uppercase tracking-wider text-[10px] block mb-1">
                  Challenge
                </span>
                <span className="text-muted-foreground">
                  Tracking millions of livestock telemetry records on low-bandwidth KaiOS and desktop interfaces.
                </span>
              </div>

              <div className="p-3 rounded-lg border border-green-500/15 bg-green-500/5 text-xs">
                <span className="font-bold text-green-500 uppercase tracking-wider text-[10px] block mb-1">
                  Solution
                </span>
                <span className="text-foreground">
                  Engineered modular React UI system with Redux state caching and automated Jest regression suites.
                </span>
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-2.5">
              <div className="p-2 rounded-lg bg-secondary/60 border border-secondary flex items-center gap-2">
                <Zap className="w-3.5 h-3.5 text-primary" />
                <div>
                  <p className="text-xs font-bold text-foreground leading-none">Sub-second</p>
                  <p className="text-[9px] text-muted-foreground uppercase">Data Load</p>
                </div>
              </div>

              <div className="p-2 rounded-lg bg-secondary/60 border border-secondary flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                <div>
                  <p className="text-xs font-bold text-foreground leading-none">Strict</p>
                  <p className="text-[9px] text-muted-foreground uppercase">Data Integrity</p>
                </div>
              </div>
            </div>

            {/* Tech stack tags */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {['React', 'Redux Toolkit', 'Jest', 'Material UI', 'Azure'].map(tag => (
                <span key={tag} className="px-2 py-0.5 rounded text-[11px] font-medium bg-muted text-foreground/80 border border-border">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div className="pt-4 border-t border-border flex items-center gap-2.5">
            <button 
              type="button"
              className="flex-1 py-2 px-3 rounded-lg bg-secondary text-secondary-foreground font-semibold text-xs border border-border hover:bg-secondary/80 active:scale-95 transition-all flex items-center justify-center gap-1.5"
            >
              <Github size={13} />
              <span>Private Enterprise</span>
            </button>
            <button 
              type="button"
              className="flex-1 py-2 px-3 rounded-lg bg-primary/10 text-primary border border-primary/25 font-semibold text-xs hover:bg-primary/20 active:scale-95 transition-all flex items-center justify-center gap-1.5"
            >
              <ExternalLink size={13} />
              <span>Portal Login</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreviewCardSection;
