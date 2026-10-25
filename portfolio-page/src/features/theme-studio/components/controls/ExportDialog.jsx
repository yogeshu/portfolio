import React, { useState, useMemo } from 'react';
import { useThemeStudio } from '../../context/ThemeStudioContext';
import { generateThemeCss, downloadCssFile } from '../../utils/export';
import { Copy, Check, Download, Code, FileText } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ExportDialog = () => {
  const { theme } = useThemeStudio();
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const cssOutput = useMemo(() => {
    return generateThemeCss(theme);
  }, [theme]);

  const handleCopy = () => {
    navigator.clipboard.writeText(cssOutput);
    setCopied(true);
    toast({
      title: 'CSS Tokens Copied',
      description: 'Clean CSS custom properties copied to your clipboard.'
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    downloadCssFile(`theme-${theme.id}-tokens.css`, cssOutput);
    toast({
      title: 'CSS File Downloaded',
      description: `Saved as theme-${theme.id}-tokens.css`
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border">
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Production CSS Export
          </h3>
          <p className="text-xs text-muted-foreground mt-0.5">
            Generates standards-compliant CSS custom properties for :root and .dark.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleCopy}
            className="px-3 py-1.5 rounded-lg border border-border bg-card text-foreground hover:bg-secondary font-semibold text-xs flex items-center gap-1.5 shadow-sm transition-all"
          >
            {copied ? (
              <>
                <Check size={13} className="text-green-500" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy size={13} />
                <span>Copy CSS</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={handleDownload}
            className="px-3 py-1.5 rounded-lg bg-primary text-primary-foreground font-semibold text-xs hover:opacity-90 flex items-center gap-1.5 shadow-sm transition-all"
          >
            <Download size={13} />
            <span>Download .css</span>
          </button>
        </div>
      </div>

      {/* Code Viewer */}
      <div className="rounded-xl border border-border bg-card/90 overflow-hidden shadow-inner">
        <div className="px-4 py-2 border-b border-border bg-secondary/60 flex items-center justify-between text-xs font-mono text-muted-foreground">
          <span className="flex items-center gap-2">
            <FileText size={12} />
            <span>theme-{theme.id}-tokens.css</span>
          </span>
          <span className="text-[10px] uppercase">
            {cssOutput.split('\n').length} lines
          </span>
        </div>

        <pre className="p-4 text-xs font-mono text-foreground/90 overflow-x-auto max-h-[460px] leading-relaxed selection:bg-primary/20">
          <code>{cssOutput}</code>
        </pre>
      </div>

      <div className="p-3.5 rounded-lg border border-border bg-secondary/30 text-xs text-muted-foreground space-y-1">
        <strong className="text-foreground block">Integration Guide:</strong>
        <p>
          Drop the generated custom properties into your <code>src/index.css</code> or a dedicated <code>tokens.css</code> file.
          The definitions map 1:1 with Tailwind CSS HSL variables and custom semantic properties.
        </p>
      </div>
    </div>
  );
};

export default ExportDialog;
