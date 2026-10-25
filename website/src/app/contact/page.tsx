"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/content";
import { ArrowUpRight, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    serviceType: "performance-audit",
    budget: "5k_15k",
    message: "",
    botField: "",
  });

  const [formState, setFormState] = useState<{
    status: "idle" | "submitting" | "success" | "error";
    message: string;
  }>({
    status: "idle",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.botField) {
      setFormState({
        status: "success",
        message: "Your inquiry has been received. I will review and reply within 12 hours.",
      });
      return;
    }

    if (formData.message.trim().length < 15) {
      setFormState({
        status: "error",
        message: "Please include a bit more context regarding your application, stack, or symptoms (minimum 15 characters).",
      });
      return;
    }

    setFormState({ status: "submitting", message: "" });

    try {
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "generate_lead", {
          service_type: formData.serviceType,
          budget_range: formData.budget,
        });
      }

      setFormState({
        status: "success",
        message:
          "Thank you for sharing your project context! I review all incoming inquiries personally and typically reply with initial diagnostic thoughts within 12 hours.",
      });

      setFormData((prev) => ({ ...prev, message: "" }));
    } catch (err) {
      setFormState({
        status: "error",
        message: "An unexpected error occurred. Please feel free to email me directly at " + siteConfig.email,
      });
    }
  };

  return (
    <div className="wrap">
      {/* ========================================================
          HERO: Open, Asymmetric, Signature Accent
          ======================================================== */}
      <section className="py-[70px] pb-[55px] grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-[40px] md:gap-[56px] items-end border-t-0">
        <div>
          <div className="kicker">01 / Direct Collaboration</div>
          <h1 className="text-[clamp(44px,7vw,86px)] leading-[0.94] tracking-[-0.085em] my-[20px] mb-[22px] max-w-[750px] font-[850] text-[var(--ink)]">
            Start a <span className="accent">conversation.</span>
          </h1>
          <p className="text-[18px] leading-[1.6] max-w-[510px] text-[#4b5a50] m-0">
            Whether you need a forensic Core Web Vitals audit, advice on Next.js rendering boundaries, or embedded senior architecture leadership, send the context of your codebase.
          </p>
        </div>

        <aside className="hero-side">
          <p className="text-[14px] text-[var(--muted)] m-0 mb-[20px] max-w-[330px]">
            Direct engineer-to-engineer communication. No account managers, no automated proposals. I review inquiries personally and reply within 12 hours.
          </p>
          <div className="pills">
            <span className="pill">Direct senior access</span>
            <span className="pill">12h response window</span>
            <span className="pill">Worldwide remote</span>
          </div>
        </aside>
      </section>

      {/* ========================================================
          DIRECT CONNECTION VS FORM: Open Asymmetric Grid
          ======================================================== */}
      <section className="py-[40px] pb-[70px] border-t border-[var(--line)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Fast Paths (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Cal.com Box */}
            <div className="p-7 bg-[var(--forest)] text-white rounded-[4px] flex flex-col gap-3.5">
              <span className="text-[10px] font-mono-meta text-[var(--lime)] uppercase tracking-wider font-bold">
                Fastest Path · 15-Min Fit Call
              </span>
              <h2 className="text-[22px] font-[850] tracking-[-0.04em] m-0 leading-snug">
                Reserve a slot directly on my calendar.
              </h2>
              <p className="text-[13px] text-[#c2d6cd] m-0 leading-relaxed">
                If you have an active performance regression, upcoming redesign, or clear timeline, skip the back-and-forth and talk directly.
              </p>
              <a
                href={siteConfig.calUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact text-center bg-[var(--lime)] text-[var(--forest)] hover:bg-[#c9ef32] mt-2 font-bold"
              >
                Book 15-Min Fit Call on Cal.com ↗
              </a>
            </div>

            {/* Direct Details */}
            <div className="flex flex-col gap-4 text-xs font-mono-meta text-[var(--muted)] border-t border-[var(--line)] pt-6">
              <div>
                <span className="uppercase tracking-wider font-bold block mb-1 text-[var(--ink)]">
                  Direct Email
                </span>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm font-bold text-[var(--forest)] hover:text-[var(--blue)] transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>

              <div>
                <span className="uppercase tracking-wider font-bold block mb-1 text-[var(--ink)]">
                  Location &amp; Availability
                </span>
                <span className="text-sm text-[var(--ink)] font-medium">
                  Maharashtra, India · Remote Worldwide
                </span>
              </div>

              <div>
                <span className="uppercase tracking-wider font-bold block mb-1 text-[var(--ink)]">
                  Typical Engagement Sizes
                </span>
                <span className="text-sm text-[var(--ink)] font-medium">
                  Audits: $5k–$15k · Fractional Retainers: 10–15 hrs/wk
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Written Context Form (7 cols) */}
          <div className="lg:col-span-7 pt-2">
            <h2 className="text-[26px] font-[850] text-[var(--ink)] tracking-[-0.05em] m-0 mb-2">
              Send project context
            </h2>
            <p className="text-[13px] text-[var(--muted)] m-0 mb-6 font-mono-meta">
              Please share enough detail for me to assess architectural feasibility.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="hidden" aria-hidden="true">
                <label htmlFor="botField">Leave empty</label>
                <input
                  id="botField"
                  type="text"
                  value={formData.botField}
                  onChange={(e) => setFormData({ ...formData, botField: e.target.value })}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label htmlFor="name" className="text-[11px] font-mono-meta uppercase tracking-wider text-[var(--ink)] font-bold">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    required
                    type="text"
                    placeholder="e.g. Elena Rostova"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="px-3.5 py-2.5 text-sm bg-white border border-[var(--line)] rounded-[2px] focus:border-[var(--forest)] outline-none"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="email" className="text-[11px] font-mono-meta uppercase tracking-wider text-[var(--ink)] font-bold">
                    Work Email *
                  </label>
                  <input
                    id="email"
                    required
                    type="email"
                    placeholder="elena@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="px-3.5 py-2.5 text-sm bg-white border border-[var(--line)] rounded-[2px] focus:border-[var(--forest)] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label htmlFor="serviceType" className="text-[11px] font-mono-meta uppercase tracking-wider text-[var(--ink)] font-bold">
                    Engagement Type *
                  </label>
                  <select
                    id="serviceType"
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="px-3.5 py-2.5 text-sm bg-white border border-[var(--line)] rounded-[2px] focus:border-[var(--forest)] outline-none"
                  >
                    <option value="performance-audit">Next.js Performance &amp; CWV Audit</option>
                    <option value="codebase-audit">Frontend Codebase Health Audit</option>
                    <option value="fractional-architecture">Fractional Architecture (Retainer)</option>
                    <option value="freelance-engineering">Complex React/Next.js Engineering</option>
                    <option value="other">General Technical Advisory</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="budget" className="text-[11px] font-mono-meta uppercase tracking-wider text-[var(--ink)] font-bold">
                    Budget Range (USD) *
                  </label>
                  <select
                    id="budget"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="px-3.5 py-2.5 text-sm bg-white border border-[var(--line)] rounded-[2px] focus:border-[var(--forest)] outline-none"
                  >
                    <option value="under_5k">Under $5,000 (Targeted Fix / Mini-Audit)</option>
                    <option value="5k_15k">$5,000 – $15,000 (Comprehensive Audit)</option>
                    <option value="15k_30k">$15,000 – $30,000 (Architecture Overhaul)</option>
                    <option value="30k_plus">$30,000+ (Embedded Retainer / Strategic)</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="message" className="text-[11px] font-mono-meta uppercase tracking-wider text-[var(--ink)] font-bold">
                  Application Overview, Stack &amp; Symptoms *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Describe your current setup (e.g. Next.js 14 on Vercel), observed pain points (e.g. 400ms INP, high LCP), and delivery timeline..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="px-3.5 py-2.5 text-sm bg-white border border-[var(--line)] rounded-[2px] focus:border-[var(--forest)] outline-none resize-y"
                />
              </div>

              {formState.message && (
                <div
                  className={`p-3 text-xs leading-relaxed flex items-start gap-2 border rounded-[2px] ${
                    formState.status === "success"
                      ? "bg-[#cfe3d3] border-[#8cac99] text-[var(--forest)]"
                      : "bg-rose-50 border-rose-200 text-rose-900"
                  }`}
                >
                  {formState.status === "success" ? (
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-[var(--forest)]" />
                  ) : (
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-600" />
                  )}
                  <span>{formState.message}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={formState.status === "submitting"}
                className="contact text-center bg-[var(--forest)] text-white py-3 rounded-[3px] font-[700] hover:bg-[#1f4f43] transition-colors disabled:opacity-50 mt-1 cursor-pointer"
              >
                {formState.status === "submitting"
                  ? "Transmitting..."
                  : "Submit Project Context ↗"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
