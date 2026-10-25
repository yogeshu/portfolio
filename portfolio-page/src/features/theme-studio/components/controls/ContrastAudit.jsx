import React, { useState } from 'react';
import { useThemeStudio } from '../../context/ThemeStudioContext';
import { CheckCircle2, AlertTriangle, XCircle, Copy, Check, Sparkles } from 'lucide-react';

const ContrastAudit = () => {
  const { contrastAudit, currentMode, updateColor } = useThemeStudio();
  const [copiedKey, setCopiedKey] = useState(null);

  const handleCopy = (id, color) => {
    navigator.clipboard.writeText(color);
    setCopiedKey(`${id}-${color}`);
    setTimeout(() => setCopiedKey(null), 1800);
  };

  const handleApplySuggestion = (fgToken, suggestedHex) => {
    if (!suggestedHex) return;
    updateColor(currentMode, fgToken, suggestedHex);
  };

  const failingCount = contrastAudit.filter(item => !item.normalAa).length;
  const criticalFails = contrastAudit.filter(item => item.critical && !item.normalAa).length;

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            WCAG 2.1 Contrast Matrix
          </h3>
          <span className="text-[10px] font-mono uppercase bg-secondary px-2 py-0.5 rounded border border-border">
            {currentMode.toUpperCase()} PALETTE
          </span>
        </div>
        <p className="text-xs text-muted-foreground mt-0.5">
          Live verification of foreground and background color combinations against WCAG 2.1 specifications.
        </p>
      </div>

      {/* Summary Scorecard */}
      <div className={`p-4 rounded-xl border flex items-center justify-between ${
        criticalFails > 0 
          ? 'bg-red-500/10 border-red-500/30' 
          : failingCount > 0 
          ? 'bg-yellow-500/10 border-yellow-500/30' 
          : 'bg-green-500/10 border-green-500/30'
      }`}>
        <div className="flex items-center gap-3">
          {criticalFails > 0 ? (
            <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
          ) : failingCount > 0 ? (
            <AlertTriangle className="w-5 h-5 text-yellow-500 flex-shrink-0" />
          ) : (
            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
          )}

          <div>
            <p className="text-xs font-bold text-foreground">
              {criticalFails > 0 
                ? `${criticalFails} Critical Contrast Violation${criticalFails > 1 ? 's' : ''}` 
                : failingCount > 0 
                ? `${failingCount} Non-critical Sub-4.5:1 Combination${failingCount > 1 ? 's' : ''}` 
                : '100% WCAG 2.1 AA Compliant'}
            </p>
            <p className="text-[11px] text-muted-foreground">
              {criticalFails > 0 
                ? 'Primary body copy must reach at least 4.5:1 ratio.' 
                : 'All tested pairs meet required readability standards.'}
            </p>
          </div>
        </div>

        <div className="text-right">
          <span className="text-xs font-mono font-bold text-foreground">
            {contrastAudit.length - failingCount}/{contrastAudit.length}
          </span>
          <p className="text-[9px] uppercase text-muted-foreground">Passed</p>
        </div>
      </div>

      {/* Detailed Pairs List */}
      <div className="space-y-3">
        {contrastAudit.map(pair => {
          const isPassed = pair.normalAa;
          const isLargePassedOnly = !pair.normalAa && pair.largeAa;

          return (
            <div 
              key={pair.id}
              className={`p-3.5 rounded-lg border transition-all space-y-3 ${
                !pair.largeAa 
                  ? 'border-red-500/40 bg-red-500/5' 
                  : isLargePassedOnly 
                  ? 'border-yellow-500/40 bg-yellow-500/5' 
                  : 'border-border bg-card/60'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-foreground">
                      {pair.pairName}
                    </span>
                    {pair.critical && (
                      <span className="text-[9px] uppercase font-bold text-red-500 border border-red-500/30 px-1 rounded">
                        Critical
                      </span>
                    )}
                  </div>

                  <p className="text-[10px] font-mono text-muted-foreground">
                    FG: {pair.foregroundColor} on BG: {pair.backgroundColor}
                  </p>
                </div>

                {/* Score & Ratio Badge */}
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-0.5 rounded text-xs font-mono font-bold ${
                    pair.aaa 
                      ? 'bg-green-500/15 text-green-600 dark:text-green-400 border border-green-500/30' 
                      : pair.normalAa 
                      ? 'bg-primary/15 text-primary border border-primary/30' 
                      : pair.largeAa 
                      ? 'bg-yellow-500/15 text-yellow-600 dark:text-yellow-400 border border-yellow-500/30' 
                      : 'bg-red-500/15 text-red-600 dark:text-red-400 border border-red-500/30'
                  }`}>
                    {pair.ratioFormatted}
                  </span>

                  <span className="text-[10px] font-semibold text-muted-foreground hidden sm:inline">
                    {pair.aaa ? 'AAA' : pair.normalAa ? 'AA' : pair.largeAa ? 'Large AA' : 'Fail'}
                  </span>
                </div>
              </div>

              {/* Visual Preview Swatch Bar */}
              <div 
                className="w-full p-2.5 rounded-md border flex items-center justify-between text-xs font-medium"
                style={{
                  backgroundColor: pair.backgroundColor,
                  color: pair.foregroundColor,
                  borderColor: 'rgba(128,128,128,0.2)'
                }}
              >
                <span>Sample preview text for readability</span>
                <span className="text-[10px] font-mono opacity-80">{pair.ratioFormatted}</span>
              </div>

              {/* Non-destructive Suggestion if Failing */}
              {!pair.normalAa && pair.suggestedColor && (
                <div className="p-2.5 rounded-md bg-secondary/80 border border-border flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Sparkles size={12} className="text-primary flex-shrink-0" />
                    <span>
                      Suggested adjustment: <strong className="text-foreground font-mono">{pair.suggestedColor}</strong>
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleCopy(pair.id, pair.suggestedColor)}
                      className="px-2 py-1 rounded text-[11px] font-medium bg-background border border-border hover:bg-secondary flex items-center gap-1"
                    >
                      {copiedKey === `${pair.id}-${pair.suggestedColor}` ? (
                        <>
                          <Check size={11} className="text-green-500" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy size={11} />
                          <span>Copy Color</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => handleApplySuggestion(pair.foregroundToken, pair.suggestedColor)}
                      className="px-2 py-1 rounded text-[11px] font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
                    >
                      Apply Fix
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContrastAudit;
