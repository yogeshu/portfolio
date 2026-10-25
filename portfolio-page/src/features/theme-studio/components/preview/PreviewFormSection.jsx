import React, { useState } from 'react';
import { Send, Check, AlertCircle } from 'lucide-react';

const PreviewFormSection = ({ theme, mode }) => {
  const [selectedService, setSelectedService] = useState('react-nextjs');
  const [agree, setAgree] = useState(true);

  return (
    <section className="space-y-6 pt-4 border-t border-border">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-border pb-4">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary">
            03 — Forms & User Input
          </span>
          <h2 
            className="text-2xl sm:text-3xl font-extrabold text-foreground mt-1"
            style={{ fontFamily: 'var(--theme-font-heading)' }}
          >
            Form Controls & Validation States
          </h2>
        </div>
        <p className="text-xs text-muted-foreground sm:text-right max-w-xs">
          Verifying field focus rings, error borders, disabled inputs, and typography alignment.
        </p>
      </div>

      <div className="rounded-xl border border-border bg-card p-6 sm:p-8 max-w-2xl mx-auto shadow-sm space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Normal Input */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-foreground">
              Your Name <span className="text-primary">*</span>
            </label>
            <input 
              type="text" 
              defaultValue="Yogesh Bhavsar"
              placeholder="e.g. Alex Miller"
              className="w-full px-3.5 py-2 text-xs rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring transition-all"
            />
          </div>

          {/* Error State Input */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold text-foreground">
                Work Email <span className="text-destructive">*</span>
              </label>
              <span className="text-[10px] text-destructive flex items-center gap-1 font-medium">
                <AlertCircle size={10} /> Invalid email format
              </span>
            </div>
            <input 
              type="email" 
              defaultValue="invalid-email-address@"
              className="w-full px-3.5 py-2 text-xs rounded-lg border-2 border-destructive bg-destructive/5 text-foreground focus:outline-none focus:ring-2 focus:ring-destructive/30 transition-all"
            />
          </div>
        </div>

        {/* Select Dropdown */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-foreground">
            Project Scope or Engagement Type
          </label>
          <select 
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            className="w-full px-3.5 py-2 text-xs rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
          >
            <option value="react-nextjs">React & Next.js Production Engineering</option>
            <option value="small-biz">Small Business Custom Website Development</option>
            <option value="freelance">Senior Freelance Frontend Sprints</option>
            <option value="consulting">Core Web Vitals & Architecture Audit</option>
          </select>
        </div>

        {/* Textarea */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-foreground">
            Project Details & Timeline
          </label>
          <textarea 
            rows={3}
            defaultValue="We are looking to migrate our legacy web application to Next.js App Router with strict Core Web Vitals targets."
            className="w-full px-3.5 py-2 text-xs rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring transition-all resize-none"
          />
        </div>

        {/* Checkbox */}
        <div className="flex items-center gap-3 pt-1">
          <button 
            type="button" 
            onClick={() => setAgree(!agree)}
            className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${
              agree ? 'bg-primary border-primary text-primary-foreground' : 'border-border bg-background'
            }`}
          >
            {agree && <Check size={12} />}
          </button>
          <span className="text-xs text-muted-foreground">
            I agree to receive initial scope and architecture estimation via email.
          </span>
        </div>

        {/* Submit Button */}
        <div className="pt-2 flex justify-end">
          <button 
            type="button"
            className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-xs shadow-md hover:opacity-90 active:scale-95 transition-all flex items-center gap-2"
          >
            <span>Send Project Inquiry</span>
            <Send size={13} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PreviewFormSection;
