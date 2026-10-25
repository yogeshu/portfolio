import React from 'react';
import { useThemeStudio } from '../../context/ThemeStudioContext';
import { ShieldCheck, Play, Activity } from 'lucide-react';

const MotionControl = () => {
  const { theme, updateMotion, prefersReducedMotion } = useThemeStudio();
  const motion = theme.motion;

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Motion & Animation System
        </h3>
        <p className="text-xs text-muted-foreground mt-0.5">
          Orchestrate page transitions, reveal animations, and micro-interactions.
        </p>
      </div>

      {/* Reduced Motion Warning / Notification */}
      {prefersReducedMotion && (
        <div className="p-3 rounded-lg border border-yellow-500/30 bg-yellow-500/10 text-xs flex items-start gap-2.5 text-foreground">
          <ShieldCheck className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
          <div className="space-y-0.5">
            <span className="font-bold text-yellow-600 dark:text-yellow-400">
              prefers-reduced-motion is Active
            </span>
            <p className="text-muted-foreground">
              Your system has requested reduced motion. All non-essential animations are automatically 
              clamped to instant transitions across the preview.
            </p>
          </div>
        </div>
      )}

      {/* Motion Styles */}
      <div className="space-y-3 p-3.5 rounded-lg border border-border bg-card/60">
        <label className="text-xs font-bold text-foreground">
          Animation Style
        </label>
        <p className="text-[10px] text-muted-foreground">
          Determines easing curves and entrance transitions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
          {[
            {
              id: 'none',
              label: 'None',
              desc: 'Instant state changes, zero latency (0ms)'
            },
            {
              id: 'subtle',
              label: 'Subtle Reveal (Default)',
              desc: 'Gentle fades & smooth opacity transitions (180ms)'
            },
            {
              id: 'smooth',
              label: 'Smooth Transitions',
              desc: 'Balanced cubic bezier curves (280ms)'
            },
            {
              id: 'expressive',
              label: 'Expressive Motion',
              desc: 'Snappy springs & dynamic scale transitions (400ms)'
            }
          ].map(style => (
            <button
              key={style.id}
              type="button"
              onClick={() => updateMotion('style', style.id)}
              className={`p-2.5 rounded-lg border text-left transition-all ${
                motion.style === style.id
                  ? 'border-primary bg-primary/10 text-primary font-semibold'
                  : 'border-border bg-background text-foreground hover:bg-secondary/60'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold">{style.label}</span>
                {motion.style === style.id && <Activity size={12} />}
              </div>
              <p className="text-[10px] opacity-75 mt-0.5">{style.desc}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Intensity Slider */}
      <div className="space-y-3 p-3.5 rounded-lg border border-border bg-card/60">
        <div className="flex items-center justify-between">
          <label className="text-xs font-bold text-foreground">
            Motion Intensity (0 - 100%)
          </label>
          <span className="font-mono text-xs font-bold text-primary">
            {motion.intensity}%
          </span>
        </div>

        <p className="text-[10px] text-muted-foreground">
          Scales duration and translation distance. Default is 30%.
        </p>

        <div className="pt-2">
          <input
            type="range"
            min="0"
            max="100"
            step="5"
            value={motion.intensity}
            onChange={(e) => updateMotion('intensity', parseInt(e.target.value, 10))}
            className="w-full accent-primary cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-muted-foreground font-mono mt-1">
            <span>0% (Instant)</span>
            <span className="font-bold text-primary">30% (Recommended)</span>
            <span>100% (High Drama)</span>
          </div>
        </div>

        {/* Quick Reset to Default Button */}
        <div className="pt-2 flex justify-end">
          <button
            type="button"
            onClick={() => {
              updateMotion('style', 'subtle');
              updateMotion('intensity', 30);
            }}
            className="text-[11px] font-semibold text-primary hover:underline"
          >
            Reset to Subtle (30%)
          </button>
        </div>
      </div>
    </div>
  );
};

export default MotionControl;
