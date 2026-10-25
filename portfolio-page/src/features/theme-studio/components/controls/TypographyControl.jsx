import React from 'react';
import { useThemeStudio } from '../../context/ThemeStudioContext';

const TypographyControl = () => {
  const { theme, updateTypography } = useThemeStudio();
  const typo = theme.typography;

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Typography System
        </h3>
        <p className="text-xs text-muted-foreground mt-0.5">
          Configure heading/body font pairings, modular scale, line heights, and letter spacing.
        </p>
      </div>

      {/* Font Pairings */}
      <div className="space-y-4 p-3.5 rounded-lg border border-border bg-card/60">
        <h4 className="text-xs font-bold text-foreground">Font Families</h4>

        {/* Heading Font */}
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-muted-foreground flex justify-between">
            <span>Heading Font</span>
            <span className="font-mono text-[10px] text-primary">{typo.headingFont}</span>
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: 'sans', label: 'Sans-Serif', sample: 'Inter / System' },
              { id: 'serif', label: 'Editorial Serif', sample: 'Georgia' },
              { id: 'mono', label: 'Monospace', sample: 'SFMono / Code' }
            ].map(item => (
              <button
                key={item.id}
                type="button"
                onClick={() => updateTypography('headingFont', item.id)}
                className={`p-2 rounded-lg border text-left transition-all ${
                  typo.headingFont === item.id
                    ? 'border-primary bg-primary/10 text-primary font-semibold'
                    : 'border-border bg-background text-foreground hover:bg-secondary/60'
                }`}
              >
                <p className="text-xs font-bold leading-tight">{item.label}</p>
                <p className="text-[10px] opacity-75 mt-0.5">{item.sample}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Body Font */}
        <div className="space-y-1.5 pt-2 border-t border-border/60">
          <label className="text-xs font-medium text-muted-foreground flex justify-between">
            <span>Body Font</span>
            <span className="font-mono text-[10px] text-primary">{typo.bodyFont}</span>
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: 'sans', label: 'Modern Sans', sample: 'Inter' },
              { id: 'serif', label: 'Book Serif', sample: 'Georgia' },
              { id: 'mono', label: 'Technical Mono', sample: 'SFMono' }
            ].map(item => (
              <button
                key={item.id}
                type="button"
                onClick={() => updateTypography('bodyFont', item.id)}
                className={`p-2 rounded-lg border text-left transition-all ${
                  typo.bodyFont === item.id
                    ? 'border-primary bg-primary/10 text-primary font-semibold'
                    : 'border-border bg-background text-foreground hover:bg-secondary/60'
                }`}
              >
                <p className="text-xs font-bold leading-tight">{item.label}</p>
                <p className="text-[10px] opacity-75 mt-0.5">{item.sample}</p>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Modular Scale & Base Size */}
      <div className="space-y-4 p-3.5 rounded-lg border border-border bg-card/60">
        <h4 className="text-xs font-bold text-foreground">Scale & Base Font Size</h4>

        {/* Scale Ratio */}
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-muted-foreground flex justify-between">
            <span>Modular Scale Ratio</span>
            <span className="font-mono text-[10px] text-primary">{typo.scaleRatio}</span>
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { val: 1.125, name: 'Major Second (1.125)' },
              { val: 1.200, name: 'Minor Third (1.200)' },
              { val: 1.250, name: 'Major Third (1.250)' },
              { val: 1.333, name: 'Perfect 4th (1.333)' }
            ].map(scale => (
              <button
                key={scale.val}
                type="button"
                onClick={() => updateTypography('scaleRatio', scale.val)}
                className={`p-2 rounded border text-xs text-center transition-all ${
                  typo.scaleRatio === scale.val
                    ? 'border-primary bg-primary/10 text-primary font-bold'
                    : 'border-border bg-background hover:bg-secondary/60 text-foreground'
                }`}
              >
                {scale.name}
              </button>
            ))}
          </div>
        </div>

        {/* Base Size */}
        <div className="space-y-1.5 pt-2 border-t border-border/60">
          <label className="text-xs font-medium text-muted-foreground flex justify-between">
            <span>Base Font Size</span>
            <span className="font-mono text-[10px] text-primary">{typo.baseFontSize}px</span>
          </label>
          <div className="grid grid-cols-4 gap-2">
            {[14, 15, 16, 18].map(size => (
              <button
                key={size}
                type="button"
                onClick={() => updateTypography('baseFontSize', size)}
                className={`py-1.5 rounded border text-xs text-center font-mono transition-all ${
                  typo.baseFontSize === size
                    ? 'border-primary bg-primary/10 text-primary font-bold'
                    : 'border-border bg-background hover:bg-secondary/60 text-foreground'
                }`}
              >
                {size}px
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Line Heights & Weights */}
      <div className="space-y-4 p-3.5 rounded-lg border border-border bg-card/60">
        <h4 className="text-xs font-bold text-foreground">Line Heights & Weights</h4>

        <div className="grid grid-cols-2 gap-4">
          {/* Heading Line Height */}
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-muted-foreground flex justify-between">
              <span>Heading LH</span>
              <span className="font-mono text-[10px] text-primary">{typo.headingLineHeight}</span>
            </label>
            <input
              type="range"
              min="1.05"
              max="1.4"
              step="0.05"
              value={typo.headingLineHeight}
              onChange={(e) => updateTypography('headingLineHeight', parseFloat(e.target.value))}
              className="w-full accent-primary cursor-pointer"
            />
          </div>

          {/* Body Line Height */}
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-muted-foreground flex justify-between">
              <span>Body LH</span>
              <span className="font-mono text-[10px] text-primary">{typo.bodyLineHeight}</span>
            </label>
            <input
              type="range"
              min="1.4"
              max="1.8"
              step="0.05"
              value={typo.bodyLineHeight}
              onChange={(e) => updateTypography('bodyLineHeight', parseFloat(e.target.value))}
              className="w-full accent-primary cursor-pointer"
            />
          </div>
        </div>

        {/* Weights */}
        <div className="grid grid-cols-2 gap-4 pt-2 border-t border-border/60">
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-muted-foreground">Heading Weight</label>
            <div className="flex gap-1.5">
              {[600, 700, 800].map(weight => (
                <button
                  key={weight}
                  type="button"
                  onClick={() => updateTypography('headingWeight', weight)}
                  className={`flex-1 py-1 text-xs rounded border text-center transition-all ${
                    typo.headingWeight === weight
                      ? 'border-primary bg-primary/10 text-primary font-bold'
                      : 'border-border bg-background text-foreground hover:bg-secondary/60'
                  }`}
                >
                  {weight}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-medium text-muted-foreground">Body Weight</label>
            <div className="flex gap-1.5">
              {[400, 500].map(weight => (
                <button
                  key={weight}
                  type="button"
                  onClick={() => updateTypography('bodyWeight', weight)}
                  className={`flex-1 py-1 text-xs rounded border text-center transition-all ${
                    typo.bodyWeight === weight
                      ? 'border-primary bg-primary/10 text-primary font-bold'
                      : 'border-border bg-background text-foreground hover:bg-secondary/60'
                  }`}
                >
                  {weight}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Letter Spacing */}
        <div className="space-y-1.5 pt-2 border-t border-border/60">
          <label className="text-xs font-medium text-muted-foreground flex justify-between">
            <span>Heading Letter Spacing (Tracking)</span>
            <span className="font-mono text-[10px] text-primary">{typo.letterSpacingHeadings}</span>
          </label>
          <div className="grid grid-cols-4 gap-1.5">
            {['-0.03em', '-0.02em', '-0.01em', '0em'].map(tracking => (
              <button
                key={tracking}
                type="button"
                onClick={() => updateTypography('letterSpacingHeadings', tracking)}
                className={`py-1 text-[11px] font-mono rounded border text-center transition-all ${
                  typo.letterSpacingHeadings === tracking
                    ? 'border-primary bg-primary/10 text-primary font-bold'
                    : 'border-border bg-background text-foreground hover:bg-secondary/60'
                }`}
              >
                {tracking}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypographyControl;
