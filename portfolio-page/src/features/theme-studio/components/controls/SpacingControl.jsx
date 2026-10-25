import React from 'react';
import { useThemeStudio } from '../../context/ThemeStudioContext';

const SpacingControl = () => {
  const { theme, updateLayout } = useThemeStudio();
  const layout = theme.layout;

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Spacing & Layout Structure
        </h3>
        <p className="text-xs text-muted-foreground mt-0.5">
          Tune rhythm, layout density, corner radius, and outline border thickness.
        </p>
      </div>

      {/* Density Selector */}
      <div className="space-y-2 p-3.5 rounded-lg border border-border bg-card/60">
        <label className="text-xs font-bold text-foreground">
          Layout Density
        </label>
        <p className="text-[10px] text-muted-foreground">
          Controls padding and component breathing room across all containers.
        </p>

        <div className="grid grid-cols-3 gap-2 pt-1">
          {[
            { id: 'compact', label: 'Compact', desc: 'Tight margins (0.75x)' },
            { id: 'comfortable', label: 'Comfortable', desc: 'Balanced default (1.0x)' },
            { id: 'spacious', label: 'Spacious', desc: 'Generous air (1.25x)' }
          ].map(d => (
            <button
              key={d.id}
              type="button"
              onClick={() => updateLayout('density', d.id)}
              className={`p-2 rounded-lg border text-left transition-all ${
                layout.density === d.id
                  ? 'border-primary bg-primary/10 text-primary font-semibold'
                  : 'border-border bg-background text-foreground hover:bg-secondary/60'
              }`}
            >
              <p className="text-xs font-bold">{d.label}</p>
              <p className="text-[10px] opacity-75 mt-0.5">{d.desc}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Border Radius */}
      <div className="space-y-2 p-3.5 rounded-lg border border-border bg-card/60">
        <div className="flex items-center justify-between">
          <label className="text-xs font-bold text-foreground">Border Radius</label>
          <span className="font-mono text-[10px] text-primary">{layout.borderRadius}px</span>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-8 gap-1.5 pt-1">
          {[0, 2, 4, 6, 8, 12, 16, 24].map(rad => (
            <button
              key={rad}
              type="button"
              onClick={() => updateLayout('borderRadius', rad)}
              className={`py-1.5 text-xs font-mono rounded border text-center transition-all ${
                layout.borderRadius === rad
                  ? 'border-primary bg-primary/10 text-primary font-bold'
                  : 'border-border bg-background text-foreground hover:bg-secondary/60'
              }`}
            >
              {rad}px
            </button>
          ))}
        </div>
      </div>

      {/* Border Width */}
      <div className="space-y-2 p-3.5 rounded-lg border border-border bg-card/60">
        <div className="flex items-center justify-between">
          <label className="text-xs font-bold text-foreground">Border Thickness</label>
          <span className="font-mono text-[10px] text-primary">{layout.borderWidth}px</span>
        </div>

        <div className="grid grid-cols-2 gap-2 pt-1">
          {[
            { val: 1, label: 'Standard Stroke (1px)' },
            { val: 2, label: 'Accessible Bold Stroke (2px)' }
          ].map(b => (
            <button
              key={b.val}
              type="button"
              onClick={() => updateLayout('borderWidth', b.val)}
              className={`p-2 rounded border text-xs text-center transition-all ${
                layout.borderWidth === b.val
                  ? 'border-primary bg-primary/10 text-primary font-bold'
                  : 'border-border bg-background text-foreground hover:bg-secondary/60'
              }`}
            >
              {b.label}
            </button>
          ))}
        </div>
      </div>

      {/* Base Spacing & Section Spacing */}
      <div className="space-y-4 p-3.5 rounded-lg border border-border bg-card/60">
        <h4 className="text-xs font-bold text-foreground">Spacing Scale</h4>

        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">Base Unit Grid</span>
            <span className="font-mono text-[10px] text-primary">{layout.baseSpacing}px</span>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {[4, 6, 8, 10].map(s => (
              <button
                key={s}
                type="button"
                onClick={() => updateLayout('baseSpacing', s)}
                className={`py-1 text-xs font-mono rounded border text-center transition-all ${
                  layout.baseSpacing === s
                    ? 'border-primary bg-primary/10 text-primary font-bold'
                    : 'border-border bg-background text-foreground hover:bg-secondary/60'
                }`}
              >
                {s}px
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-1.5 pt-2 border-t border-border/60">
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">Section Vertical Rhythm</span>
            <span className="font-mono text-[10px] text-primary">{layout.sectionSpacing}px</span>
          </div>
          <div className="grid grid-cols-5 gap-1.5">
            {[32, 48, 64, 80, 96].map(sec => (
              <button
                key={sec}
                type="button"
                onClick={() => updateLayout('sectionSpacing', sec)}
                className={`py-1 text-xs font-mono rounded border text-center transition-all ${
                  layout.sectionSpacing === sec
                    ? 'border-primary bg-primary/10 text-primary font-bold'
                    : 'border-border bg-background text-foreground hover:bg-secondary/60'
                }`}
              >
                {sec}px
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Max Width */}
      <div className="space-y-2 p-3.5 rounded-lg border border-border bg-card/60">
        <div className="flex items-center justify-between">
          <label className="text-xs font-bold text-foreground">Content Max Width</label>
          <span className="font-mono text-[10px] text-primary">{layout.contentMaxWidth}</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
          {[
            { val: '64rem', label: 'Narrow (1024px)' },
            { val: '72rem', label: 'Standard (1152px)' },
            { val: '80rem', label: 'Wide (1280px)' },
            { val: '100%', label: 'Full Width' }
          ].map(w => (
            <button
              key={w.val}
              type="button"
              onClick={() => updateLayout('contentMaxWidth', w.val)}
              className={`p-1.5 rounded border text-xs text-center transition-all ${
                layout.contentMaxWidth === w.val
                  ? 'border-primary bg-primary/10 text-primary font-bold'
                  : 'border-border bg-background text-foreground hover:bg-secondary/60'
              }`}
            >
              {w.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpacingControl;
