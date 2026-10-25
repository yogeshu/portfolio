import React from 'react';
import { useThemeStudio } from '../../context/ThemeStudioContext';
import { THEME_PRESETS } from '../../presets';
import ScopedThemePreview from './ScopedThemePreview';
import { Columns, Bookmark, RefreshCw, X } from 'lucide-react';

const ComparisonView = () => {
  const { 
    theme, 
    candidateTheme, 
    currentMode, 
    saveAsCandidate, 
    setCandidateFromPreset, 
    setCompareMode 
  } = useThemeStudio();

  return (
    <div className="space-y-6">
      {/* Comparison Toolbar */}
      <div className="p-4 rounded-xl border border-border bg-card/80 backdrop-blur flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-primary/10 text-primary">
            <Columns size={16} />
          </div>
          <div>
            <h3 className="text-xs font-bold text-foreground">
              Side-by-Side Theme Evaluation
            </h3>
            <p className="text-[11px] text-muted-foreground">
              Evaluating Working Theme against Candidate with identical layout and content.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Candidate selector */}
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <span>Candidate:</span>
            <select
              value={candidateTheme?.id || 'monochrome'}
              onChange={(e) => setCandidateFromPreset(e.target.value)}
              className="px-2 py-1 text-xs rounded border border-border bg-background text-foreground font-semibold"
            >
              {THEME_PRESETS.map(p => (
                <option key={p.id} value={p.id}>
                  {p.name}
                </option>
              ))}
            </select>
          </div>

          <button
            type="button"
            onClick={saveAsCandidate}
            className="px-2.5 py-1 text-xs rounded border border-border bg-background text-foreground hover:bg-secondary font-medium flex items-center gap-1"
            title="Snapshot current working theme as the comparison candidate"
          >
            <Bookmark size={11} />
            <span>Snapshot Current</span>
          </button>

          <button
            type="button"
            onClick={() => setCompareMode(false)}
            className="p-1 rounded text-muted-foreground hover:text-foreground hover:bg-secondary"
            title="Exit Comparison"
          >
            <X size={16} />
          </button>
        </div>
      </div>

      {/* Side-by-Side Split Containers */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        {/* Left: Working Theme */}
        <div className="space-y-2">
          <div className="flex items-center justify-between px-1">
            <span className="text-xs font-bold text-primary uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span>Theme A: Working Configuration ({theme.name})</span>
            </span>
            <span className="text-[10px] font-mono text-muted-foreground">Active Editor</span>
          </div>
          <ScopedThemePreview theme={theme} mode={currentMode} label="Working Theme" />
        </div>

        {/* Right: Candidate Theme */}
        <div className="space-y-2">
          <div className="flex items-center justify-between px-1">
            <span className="text-xs font-bold text-accent uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span>Theme B: Comparison Candidate ({candidateTheme.name})</span>
            </span>
            <span className="text-[10px] font-mono text-muted-foreground">Baseline Reference</span>
          </div>
          <ScopedThemePreview theme={candidateTheme} mode={currentMode} label="Candidate Theme" />
        </div>
      </div>
    </div>
  );
};

export default ComparisonView;
