import React, { useState } from 'react';
import { useThemeStudio } from '../../context/ThemeStudioContext';
import { normalizeHex, parseColorToHex, formatColorFormats } from '../../utils/color';
import { Copy, Check, Sun, Moon } from 'lucide-react';

const tokenDefinitions = [
  { key: 'background', label: 'Background', group: 'Canvas & Surfaces', desc: 'Main viewport page background' },
  { key: 'surface', label: 'Surface (Card)', group: 'Canvas & Surfaces', desc: 'Elevated containers, cards, and modal panels' },
  { key: 'surfaceSecondary', label: 'Secondary Surface', group: 'Canvas & Surfaces', desc: 'Inputs, table headers, and nested blocks' },
  
  { key: 'foreground', label: 'Primary Text', group: 'Typography', desc: 'Headings, primary body text, and active labels' },
  { key: 'foregroundMuted', label: 'Secondary Text', group: 'Typography', desc: 'Captions, subtitles, and metadata copy' },

  { key: 'primary', label: 'Brand Primary', group: 'Brand & Accents', desc: 'Key call-to-actions, brand accents, and active tabs' },
  { key: 'primaryForeground', label: 'Text on Primary', group: 'Brand & Accents', desc: 'Readable label text over primary buttons' },
  { key: 'accent', label: 'Accent Highlight', group: 'Brand & Accents', desc: 'Warm highlights, decorative underlines, and pills' },
  { key: 'accentForeground', label: 'Text on Accent', group: 'Brand & Accents', desc: 'Text over accent pills and badges' },

  { key: 'border', label: 'Border & Dividers', group: 'Structure & Focus', desc: 'Card borders, separators, and outline strokes' },
  { key: 'ring', label: 'Focus Ring', group: 'Structure & Focus', desc: 'Keyboard accessibility focus outline' },

  { key: 'success', label: 'Success State', group: 'System Feedback', desc: 'Completed tasks, verified pills, and positive alerts' },
  { key: 'warning', label: 'Warning State', group: 'System Feedback', desc: 'Caution notices and non-blocking warnings' },
  { key: 'error', label: 'Error / Destructive', group: 'System Feedback', desc: 'Validation failures, destructive actions, and alerts' }
];

const ColorControl = () => {
  const { theme, updateColor, currentMode, setMode } = useThemeStudio();
  const [editingMode, setEditingMode] = useState(currentMode);
  const [copiedKey, setCopiedKey] = useState(null);

  const colors = theme.colors[editingMode] || theme.colors.dark;

  const handleCopy = (key, text) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(`${key}-${text}`);
    setTimeout(() => setCopiedKey(null), 1800);
  };

  const groups = Array.from(new Set(tokenDefinitions.map(t => t.group)));

  return (
    <div className="space-y-6">
      {/* Palette Mode Toggle */}
      <div className="flex items-center justify-between pb-3 border-b border-border">
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Semantic Color Tokens
          </h3>
          <p className="text-xs text-muted-foreground mt-0.5">
            Accepts arbitrary HEX, RGB, or HSL strings.
          </p>
        </div>

        {/* Light/Dark Palette Switcher */}
        <div className="flex items-center p-1 rounded-lg bg-secondary/80 border border-border">
          <button
            type="button"
            onClick={() => {
              setEditingMode('dark');
              setMode('dark');
            }}
            className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-md transition-all ${
              editingMode === 'dark'
                ? 'bg-background text-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Moon size={12} />
            <span>Dark</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setEditingMode('light');
              setMode('light');
            }}
            className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-md transition-all ${
              editingMode === 'light'
                ? 'bg-background text-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Sun size={12} />
            <span>Light</span>
          </button>
        </div>
      </div>

      {/* Token Groups */}
      <div className="space-y-6">
        {groups.map(groupName => {
          const tokensInGroup = tokenDefinitions.filter(t => t.group === groupName);

          return (
            <div key={groupName} className="space-y-3">
              <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-primary border-l-2 border-primary/40 pl-2">
                {groupName}
              </h4>

              <div className="space-y-2.5">
                {tokensInGroup.map(token => {
                  const currentValue = colors[token.key] || '#000000';
                  const normalizedHex = normalizeHex(currentValue) || '#000000';
                  const formats = formatColorFormats(normalizedHex);

                  return (
                    <div 
                      key={token.key}
                      className="p-3 rounded-lg border border-border bg-card/60 hover:border-border/80 transition-all space-y-2"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div>
                          <label className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                            <span>{token.label}</span>
                          </label>
                          <p className="text-[10px] text-muted-foreground">
                            {token.desc}
                          </p>
                        </div>

                        {/* Color Picker + Input Box */}
                        <div className="flex items-center gap-2">
                          {/* Native color picker */}
                          <div className="relative w-7 h-7 rounded-md border border-border overflow-hidden flex-shrink-0 cursor-pointer shadow-sm">
                            <input
                              type="color"
                              value={normalizedHex}
                              onChange={(e) => updateColor(editingMode, token.key, e.target.value)}
                              className="absolute -inset-2 w-12 h-12 cursor-pointer opacity-0"
                            />
                            <div 
                              className="w-full h-full"
                              style={{ backgroundColor: normalizedHex }}
                            />
                          </div>

                          {/* Editable Text Input */}
                          <input
                            type="text"
                            value={currentValue}
                            onChange={(e) => updateColor(editingMode, token.key, e.target.value)}
                            placeholder="#HEX or rgb() or hsl()"
                            className="w-28 px-2 py-1 text-xs font-mono rounded border border-border bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                          />
                        </div>
                      </div>

                      {/* Formats Copy Bar */}
                      <div className="flex items-center justify-between pt-1 border-t border-border/40 text-[10px] font-mono text-muted-foreground">
                        <span className="truncate max-w-[170px]" title={formats.hsl}>
                          {formats.hex} • {formats.hsl}
                        </span>

                        <div className="flex items-center gap-1">
                          <button
                            type="button"
                            onClick={() => handleCopy(token.key, formats.hex)}
                            className="p-1 rounded hover:bg-secondary hover:text-foreground transition-colors"
                            title="Copy HEX"
                          >
                            {copiedKey === `${token.key}-${formats.hex}` ? (
                              <Check size={11} className="text-green-500" />
                            ) : (
                              <Copy size={11} />
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ColorControl;
