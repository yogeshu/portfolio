import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useThemeStudio } from '../context/ThemeStudioContext';
import { THEME_PRESETS } from '../presets/index.js';
import PresetsControl from './controls/PresetsControl';
import ColorControl from './controls/ColorControl';
import TypographyControl from './controls/TypographyControl';
import SpacingControl from './controls/SpacingControl';
import MotionControl from './controls/MotionControl';
import ContrastAudit from './controls/ContrastAudit';
import ExportDialog from './controls/ExportDialog';
import ScopedThemePreview from './preview/ScopedThemePreview';
import ComparisonView from './preview/ComparisonView';
import { 
  Palette, 
  Type, 
  Maximize2, 
  Activity, 
  ShieldCheck, 
  Download, 
  Save, 
  RotateCcw, 
  Sun, 
  Moon, 
  Columns, 
  Smartphone, 
  Tablet, 
  Monitor, 
  ArrowLeft,
  Sparkles,
  Layers,
  AlertCircle
} from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const tabs = [
  { id: 'presets', label: 'Presets', icon: Layers },
  { id: 'colors', label: 'Colors', icon: Palette },
  { id: 'typography', label: 'Typography', icon: Type },
  { id: 'spacing', label: 'Spacing', icon: Maximize2 },
  { id: 'motion', label: 'Motion', icon: Activity },
  { id: 'accessibility', label: 'Contrast', icon: ShieldCheck },
  { id: 'export', label: 'Export CSS', icon: Download }
];

const ThemeStudioLayout = () => {
  const {
    theme,
    currentMode,
    setMode,
    isDirty,
    saveTheme,
    resetToPreset,
    resetAll,
    activeTab,
    setActiveTab,
    viewportMode,
    setViewportMode,
    compareMode,
    setCompareMode
  } = useThemeStudio();

  const { toast } = useToast();
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  const handleSave = () => {
    const success = saveTheme();
    if (success) {
      toast({
        title: 'Theme Configuration Saved',
        description: 'Your custom tokens have been stored locally.'
      });
    }
  };

  const handleResetPreset = () => {
    resetToPreset();
    setShowResetConfirm(false);
    toast({
      title: 'Reset to Preset Defaults',
      description: `Reverted all customizations back to ${theme.name}.`
    });
  };

  const handleResetAll = () => {
    resetAll();
    setShowResetConfirm(false);
    toast({
      title: 'Reset All',
      description: 'Reverted to default Verdigris (Dark) theme.'
    });
  };

  // Determine viewport width style
  const viewportStyles = {
    desktop: 'w-full max-w-full',
    tablet: 'max-w-[768px] mx-auto',
    mobile: 'max-w-[390px] mx-auto'
  }[viewportMode] || 'w-full';

  return (
    <div className="min-h-screen bg-[#0D1117] text-[#C9D1D9] flex flex-col font-sans selection:bg-teal-500/30">
      
      {/* 1. TOP STUDIO TOOLBAR */}
      <header className="h-14 border-b border-[#30363D] bg-[#161B22]/90 backdrop-blur px-4 flex items-center justify-between gap-4 sticky top-0 z-50">
        
        {/* Left: Brand & Title */}
        <div className="flex items-center gap-3">
          <Link 
            to="/" 
            className="flex items-center gap-1.5 text-xs text-[#8B949E] hover:text-[#F0F6FC] transition-colors py-1 px-2 rounded hover:bg-[#21262D]"
            title="Return to public portfolio"
          >
            <ArrowLeft size={14} />
            <span className="hidden sm:inline">Portfolio</span>
          </Link>

          <div className="h-4 w-px bg-[#30363D]" />

          <div className="flex items-center gap-2">
            <h1 className="text-sm font-bold text-[#F0F6FC] tracking-tight">
              Theme Studio
            </h1>
            <span className="text-[10px] uppercase font-mono font-bold tracking-wider px-1.5 py-0.5 rounded bg-[#21262D] text-teal-400 border border-teal-500/20">
              Dev Preview
            </span>
          </div>

          {/* Active Preset Tag */}
          <div className="hidden lg:flex items-center gap-1.5 ml-2 text-xs text-[#8B949E]">
            <span>Preset:</span>
            <strong className="text-[#F0F6FC] font-semibold">{theme.name}</strong>
          </div>

          {/* Unsaved Changes Indicator */}
          {isDirty && (
            <span className="flex items-center gap-1 text-[10px] font-semibold text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2 py-0.5 rounded-full animate-pulse">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              Unsaved
            </span>
          )}
        </div>

        {/* Center: Viewport Controls */}
        <div className="hidden md:flex items-center p-0.5 rounded-lg border border-[#30363D] bg-[#0D1117]">
          <button
            type="button"
            onClick={() => setViewportMode('desktop')}
            className={`p-1.5 rounded text-xs transition-colors ${
              viewportMode === 'desktop' ? 'bg-[#21262D] text-[#F0F6FC]' : 'text-[#8B949E] hover:text-[#F0F6FC]'
            }`}
            title="Desktop View (100%)"
          >
            <Monitor size={14} />
          </button>
          <button
            type="button"
            onClick={() => setViewportMode('tablet')}
            className={`p-1.5 rounded text-xs transition-colors ${
              viewportMode === 'tablet' ? 'bg-[#21262D] text-[#F0F6FC]' : 'text-[#8B949E] hover:text-[#F0F6FC]'
            }`}
            title="Tablet View (768px)"
          >
            <Tablet size={14} />
          </button>
          <button
            type="button"
            onClick={() => setViewportMode('mobile')}
            className={`p-1.5 rounded text-xs transition-colors ${
              viewportMode === 'mobile' ? 'bg-[#21262D] text-[#F0F6FC]' : 'text-[#8B949E] hover:text-[#F0F6FC]'
            }`}
            title="Mobile View (390px)"
          >
            <Smartphone size={14} />
          </button>
        </div>

        {/* Right: Actions (Mode, Compare, Save, Reset, Export) */}
        <div className="flex items-center gap-2">
          {/* Appearance Switcher */}
          <button
            type="button"
            onClick={() => setMode(currentMode === 'dark' ? 'light' : 'dark')}
            className="p-1.5 rounded-lg border border-[#30363D] bg-[#21262D] text-[#C9D1D9] hover:text-[#F0F6FC] transition-colors flex items-center gap-1.5 text-xs font-semibold"
            title={`Toggle preview appearance (currently ${currentMode})`}
          >
            {currentMode === 'dark' ? <Moon size={14} className="text-teal-400" /> : <Sun size={14} className="text-amber-400" />}
            <span className="hidden sm:inline capitalize">{currentMode}</span>
          </button>

          {/* Comparison Toggle */}
          <button
            type="button"
            onClick={() => setCompareMode(!compareMode)}
            className={`px-2.5 py-1.5 rounded-lg border text-xs font-semibold transition-all flex items-center gap-1.5 ${
              compareMode
                ? 'bg-teal-500/15 border-teal-500/40 text-teal-300'
                : 'border-[#30363D] bg-[#21262D] text-[#C9D1D9] hover:text-[#F0F6FC]'
            }`}
            title="Toggle side-by-side theme comparison"
          >
            <Columns size={13} />
            <span className="hidden sm:inline">Compare</span>
          </button>

          {/* Reset Action */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowResetConfirm(!showResetConfirm)}
              className="p-1.5 rounded-lg border border-[#30363D] bg-[#21262D] text-[#8B949E] hover:text-[#F0F6FC] transition-colors"
              title="Reset options"
            >
              <RotateCcw size={14} />
            </button>

            {/* Dropdown Confirm Menu */}
            {showResetConfirm && (
              <div className="absolute right-0 top-9 w-52 rounded-lg border border-[#30363D] bg-[#161B22] p-2 shadow-2xl z-50 space-y-1 text-xs">
                <p className="text-[10px] uppercase font-bold text-[#8B949E] px-2 py-1">
                  Reset Tokens
                </p>
                <button
                  type="button"
                  onClick={handleResetPreset}
                  className="w-full text-left px-2 py-1.5 rounded hover:bg-[#21262D] text-[#C9D1D9] hover:text-[#F0F6FC] transition-colors"
                >
                  Reset to <strong>{theme.name}</strong> Defaults
                </button>
                <button
                  type="button"
                  onClick={handleResetAll}
                  className="w-full text-left px-2 py-1.5 rounded hover:bg-red-500/15 text-red-400 hover:text-red-300 transition-colors"
                >
                  Reset All to Verdigris Dark
                </button>
              </div>
            )}
          </div>

          {/* Save Action */}
          <button
            type="button"
            onClick={handleSave}
            className={`px-3 py-1.5 rounded-lg font-semibold text-xs transition-all flex items-center gap-1.5 ${
              isDirty
                ? 'bg-teal-600 text-white hover:bg-teal-500 shadow-sm'
                : 'bg-[#21262D] text-[#8B949E] border border-[#30363D]'
            }`}
            title="Save theme locally"
          >
            <Save size={13} />
            <span className="hidden sm:inline">Save</span>
          </button>

          {/* Export Action */}
          <button
            type="button"
            onClick={() => setActiveTab('export')}
            className="px-3 py-1.5 rounded-lg bg-teal-500/20 text-teal-300 border border-teal-500/30 hover:bg-teal-500/30 font-semibold text-xs transition-all flex items-center gap-1.5"
            title="Export CSS tokens"
          >
            <Download size={13} />
            <span className="hidden sm:inline">Export CSS</span>
          </button>
        </div>
      </header>

      {/* 2. STUDIO WORKSPACE BODY */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        
        {/* LEFT COLUMN: Controls Panel */}
        <aside className="w-full lg:w-[420px] lg:min-w-[420px] border-r border-[#30363D] bg-[#161B22] flex flex-col h-auto lg:h-[calc(100vh-3.5rem)] overflow-hidden">
          
          {/* Tabs Navigation */}
          <div className="flex items-center overflow-x-auto border-b border-[#30363D] p-1.5 gap-1 bg-[#0D1117]/60 no-scrollbar">
            {tabs.map(tab => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-[#21262D] text-[#F0F6FC] shadow-sm'
                      : 'text-[#8B949E] hover:text-[#C9D1D9] hover:bg-[#21262D]/50'
                  }`}
                >
                  <Icon size={12} className={isActive ? 'text-teal-400' : ''} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content Panels */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-6">
            {activeTab === 'presets' && <PresetsControl />}
            {activeTab === 'colors' && <ColorControl />}
            {activeTab === 'typography' && <TypographyControl />}
            {activeTab === 'spacing' && <SpacingControl />}
            {activeTab === 'motion' && <MotionControl />}
            {activeTab === 'accessibility' && <ContrastAudit />}
            {activeTab === 'export' && <ExportDialog />}
          </div>
        </aside>

        {/* RIGHT COLUMN: Live Interactive Canvas */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-8 bg-[#0D1117] h-auto lg:h-[calc(100vh-3.5rem)]">
          <div className={`${viewportStyles} transition-all duration-300`}>
            {compareMode ? (
              <ComparisonView />
            ) : (
              <ScopedThemePreview theme={theme} mode={currentMode} />
            )}
          </div>
        </main>

      </div>
    </div>
  );
};

export default ThemeStudioLayout;
