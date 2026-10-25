import React from 'react';
import { ArrowUpRight, Sparkles, Terminal } from 'lucide-react';

const PreviewNavigation = ({ theme, mode }) => {
  return (
    <nav className="w-full rounded-xl border border-border bg-card/90 backdrop-blur-md px-4 sm:px-6 py-3.5 flex items-center justify-between shadow-sm transition-all">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm shadow-sm">
          YB
        </div>
        <div>
          <span className="font-bold text-sm sm:text-base tracking-tight text-foreground" style={{ fontFamily: 'var(--theme-font-heading)' }}>
            Yogesh Bhavsar
          </span>
          <span className="hidden sm:inline-block ml-2 text-[10px] text-muted-foreground uppercase font-mono tracking-widest border border-border/80 px-1.5 py-0.5 rounded">
            Portfolio
          </span>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-6 text-xs sm:text-sm font-medium text-muted-foreground">
        <span className="text-foreground font-semibold hover:text-primary transition-colors cursor-pointer">Projects</span>
        <span className="hover:text-foreground transition-colors cursor-pointer">Services</span>
        <span className="hover:text-foreground transition-colors cursor-pointer">Experience</span>
        <span className="hover:text-foreground transition-colors cursor-pointer">About</span>
      </div>

      <div className="flex items-center gap-2.5">
        <div className="px-2.5 py-1 rounded-full bg-accent/15 border border-accent/30 text-accent font-semibold text-xs flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span>Available</span>
        </div>
        <button 
          type="button"
          className="px-3.5 py-1.5 rounded-lg bg-primary text-primary-foreground font-semibold text-xs shadow-sm hover:opacity-90 active:scale-95 transition-all flex items-center gap-1"
        >
          <span>Hire for Sprints</span>
          <ArrowUpRight size={13} />
        </button>
      </div>
    </nav>
  );
};

export default PreviewNavigation;
