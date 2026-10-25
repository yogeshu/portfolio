import React from 'react';
import { useThemeStudio } from '../../context/ThemeStudioContext';
import { THEME_PRESETS } from '../../presets';
import { Check } from 'lucide-react';

const PresetsControl = () => {
  const { theme, applyPreset, currentMode } = useThemeStudio();

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Curated Design Directions
        </h3>
        <p className="text-xs text-muted-foreground mt-0.5">
          Select a distinct visual direction. Each preset defines a complete token architecture.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-2.5">
        {THEME_PRESETS.map((preset) => {
          const isSelected = theme.id === preset.id;
          const colors = preset.colors[currentMode] || preset.colors.dark;

          return (
            <div
              key={preset.id}
              onClick={() => applyPreset(preset.id)}
              className={`p-3.5 rounded-lg border text-left cursor-pointer transition-all ${
                isSelected
                  ? 'border-primary bg-primary/5 ring-1 ring-primary/30 shadow-sm'
                  : 'border-border bg-card/60 hover:bg-card hover:border-border/80'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-foreground">
                      {preset.name}
                    </span>
                    {isSelected && (
                      <span className="flex items-center gap-1 text-[10px] font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                        <Check size={11} /> Active
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {preset.description}
                  </p>
                </div>

                {/* Mini Color Swatch Palette */}
                <div className="flex items-center gap-1.5 p-1 rounded-md border border-border/80 bg-background/90 flex-shrink-0">
                  <div 
                    className="w-4 h-4 rounded-full border border-black/10 shadow-inner" 
                    style={{ backgroundColor: colors.background }} 
                    title="Background"
                  />
                  <div 
                    className="w-4 h-4 rounded-full border border-black/10 shadow-inner" 
                    style={{ backgroundColor: colors.surface }} 
                    title="Surface"
                  />
                  <div 
                    className="w-4 h-4 rounded-full border border-black/10 shadow-inner" 
                    style={{ backgroundColor: colors.primary }} 
                    title="Primary"
                  />
                  <div 
                    className="w-4 h-4 rounded-full border border-black/10 shadow-inner" 
                    style={{ backgroundColor: colors.accent }} 
                    title="Accent"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PresetsControl;
