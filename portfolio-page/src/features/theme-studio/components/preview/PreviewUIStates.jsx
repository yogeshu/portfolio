import React from 'react';
import { CheckCircle2, AlertTriangle, XCircle, Info, Star } from 'lucide-react';

const PreviewUIStates = ({ theme, mode }) => {
  return (
    <section className="space-y-6 pt-4 border-t border-border">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-border pb-4">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary">
            02 — UI Component States
          </span>
          <h2 
            className="text-2xl sm:text-3xl font-extrabold text-foreground mt-1"
            style={{ fontFamily: 'var(--theme-font-heading)' }}
          >
            Interactive States & Token Hierarchy
          </h2>
        </div>
        <p className="text-xs text-muted-foreground sm:text-right max-w-xs">
          Verifying hover, focus ring, active, and disabled states across all semantic levels.
        </p>
      </div>

      {/* Button Matrix */}
      <div className="rounded-xl border border-border bg-card p-6 space-y-4">
        <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Button Variants & Interactive States
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {/* Primary */}
          <div className="space-y-2">
            <span className="text-[10px] font-mono text-muted-foreground uppercase">Primary</span>
            <button type="button" className="w-full py-2 px-3 rounded-lg bg-primary text-primary-foreground font-semibold text-xs shadow-sm hover:opacity-90 active:scale-95 transition-all">
              Default
            </button>
            <button type="button" disabled className="w-full py-2 px-3 rounded-lg bg-primary/40 text-primary-foreground/50 font-semibold text-xs cursor-not-allowed">
              Disabled
            </button>
          </div>

          {/* Secondary */}
          <div className="space-y-2">
            <span className="text-[10px] font-mono text-muted-foreground uppercase">Secondary</span>
            <button type="button" className="w-full py-2 px-3 rounded-lg bg-secondary text-secondary-foreground font-semibold text-xs border border-border hover:bg-secondary/80 active:scale-95 transition-all">
              Default
            </button>
            <button type="button" disabled className="w-full py-2 px-3 rounded-lg bg-secondary/50 text-secondary-foreground/40 font-semibold text-xs border border-border/50 cursor-not-allowed">
              Disabled
            </button>
          </div>

          {/* Outline / Focus */}
          <div className="space-y-2">
            <span className="text-[10px] font-mono text-muted-foreground uppercase">Outline & Focus</span>
            <button type="button" className="w-full py-2 px-3 rounded-lg border-2 border-primary text-primary font-semibold text-xs hover:bg-primary/10 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
              Focusable
            </button>
            <button type="button" disabled className="w-full py-2 px-3 rounded-lg border border-border text-muted-foreground/40 font-semibold text-xs cursor-not-allowed">
              Disabled
            </button>
          </div>

          {/* Accent */}
          <div className="space-y-2">
            <span className="text-[10px] font-mono text-muted-foreground uppercase">Accent</span>
            <button type="button" className="w-full py-2 px-3 rounded-lg bg-accent text-accent-foreground font-semibold text-xs shadow-sm hover:opacity-90 active:scale-95 transition-all">
              Accent
            </button>
            <button type="button" disabled className="w-full py-2 px-3 rounded-lg bg-accent/40 text-accent-foreground/50 font-semibold text-xs cursor-not-allowed">
              Disabled
            </button>
          </div>

          {/* Destructive / Error */}
          <div className="space-y-2">
            <span className="text-[10px] font-mono text-muted-foreground uppercase">Destructive</span>
            <button type="button" className="w-full py-2 px-3 rounded-lg bg-destructive text-destructive-foreground font-semibold text-xs shadow-sm hover:opacity-90 active:scale-95 transition-all">
              Delete
            </button>
            <button type="button" disabled className="w-full py-2 px-3 rounded-lg bg-destructive/40 text-destructive-foreground/50 font-semibold text-xs cursor-not-allowed">
              Disabled
            </button>
          </div>
        </div>
      </div>

      {/* Badges & System Alerts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Badges */}
        <div className="rounded-xl border border-border bg-card p-6 space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Badges & Status Indicators
          </h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary text-primary-foreground">
              Primary Badge
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-secondary text-secondary-foreground border border-border">
              Secondary
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent/15 text-accent border border-accent/30">
              Accent Token
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold border border-border text-foreground">
              Outline
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-500/15 text-green-600 dark:text-green-400 border border-green-500/25">
              Success Status
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-yellow-500/15 text-yellow-600 dark:text-yellow-400 border border-yellow-500/25">
              Warning
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-red-500/15 text-red-600 dark:text-red-400 border border-red-500/25">
              Error / Reject
            </span>
          </div>
        </div>

        {/* System Feedback Messages */}
        <div className="rounded-xl border border-border bg-card p-6 space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Notification & Alert Surfaces
          </h3>

          <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20 text-xs flex items-center gap-2.5 text-foreground">
            <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
            <span><strong>Success:</strong> Changes saved to local storage with verified contrast.</span>
          </div>

          <div className="p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20 text-xs flex items-center gap-2.5 text-foreground">
            <AlertTriangle className="w-4 h-4 text-yellow-500 flex-shrink-0" />
            <span><strong>Notice:</strong> Secondary text contrast on light card is 4.12:1 (large text only).</span>
          </div>

          <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-xs flex items-center gap-2.5 text-foreground">
            <XCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
            <span><strong>Validation:</strong> Connection timeout during git remote fetch.</span>
          </div>
        </div>
      </div>

      {/* Surface Elevation Comparison */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl border border-border bg-background space-y-2">
          <span className="text-[10px] font-mono uppercase text-muted-foreground">Base Background</span>
          <p className="text-xs font-medium text-foreground">Level 0: Canvas</p>
          <p className="text-xs text-muted-foreground">Default document body background.</p>
        </div>

        <div className="p-4 rounded-xl border border-border bg-card shadow-sm space-y-2">
          <span className="text-[10px] font-mono uppercase text-muted-foreground">Card Surface</span>
          <p className="text-xs font-medium text-foreground">Level 1: Cards & Panels</p>
          <p className="text-xs text-muted-foreground">Contained modules, articles, and cards.</p>
        </div>

        <div className="p-4 rounded-xl border border-border bg-secondary/80 space-y-2">
          <span className="text-[10px] font-mono uppercase text-muted-foreground">Secondary Surface</span>
          <p className="text-xs font-medium text-foreground">Level 2: Nested Controls</p>
          <p className="text-xs text-muted-foreground">Input backgrounds, toolbars, and pills.</p>
        </div>
      </div>
    </section>
  );
};

export default PreviewUIStates;
