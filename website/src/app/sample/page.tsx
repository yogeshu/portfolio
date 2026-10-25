"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/content";
import {
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  Code2,
  Terminal,
  Zap,
  Layers,
  Sparkles,
  ShieldCheck,
  Cpu,
  Monitor,
  Check,
  ArrowRight,
  Activity
} from "lucide-react";

type NonAnthropicTheme = "raycast" | "stripe" | "monochrome";

interface ThemeConfig {
  id: NonAnthropicTheme;
  name: string;
  vibe: string;
  bg: string;
  cardBg: string;
  cardSubtle: string;
  border: string;
  borderHover: string;
  text: string;
  textMuted: string;
  accent: string;
  accentBg: string;
  btnPrimaryBg: string;
  btnPrimaryText: string;
  btnSecondaryBg: string;
  btnSecondaryText: string;
  tagBg: string;
  tagText: string;
  fontClass: string;
}

const THEMES: Record<NonAnthropicTheme, ThemeConfig> = {
  raycast: {
    id: "raycast",
    name: "Linear / Raycast Dark",
    vibe: "Deep black, precision zinc grid, electric cyan & violet highlights, bento density",
    bg: "#09090b",
    cardBg: "#121215",
    cardSubtle: "#18181b",
    border: "#27272a",
    borderHover: "#3f3f46",
    text: "#fafafa",
    textMuted: "#a1a1aa",
    accent: "#38bdf8",
    accentBg: "rgba(56, 189, 248, 0.1)",
    btnPrimaryBg: "#ffffff",
    btnPrimaryText: "#09090b",
    btnSecondaryBg: "#18181b",
    btnSecondaryText: "#fafafa",
    tagBg: "#1c1c22",
    tagText: "#e4e4e7",
    fontClass: "font-sans",
  },
  stripe: {
    id: "stripe",
    name: "Stripe / Resend Crisp Light",
    vibe: "Pure white, cool slate borders, cobalt blue interactive focus, enterprise clarity",
    bg: "#ffffff",
    cardBg: "#ffffff",
    cardSubtle: "#f8fafc",
    border: "#e2e8f0",
    borderHover: "#cbd5e1",
    text: "#0f172a",
    textMuted: "#475569",
    accent: "#2563eb",
    accentBg: "rgba(37, 99, 235, 0.08)",
    btnPrimaryBg: "#0f172a",
    btnPrimaryText: "#ffffff",
    btnSecondaryBg: "#f1f5f9",
    btnSecondaryText: "#0f172a",
    tagBg: "#f1f5f9",
    tagText: "#334155",
    fontClass: "font-sans",
  },
  monochrome: {
    id: "monochrome",
    name: "High-Contrast Monochrome",
    vibe: "Stark black & white, Swiss typography, zero color distractions, maximum contrast",
    bg: "#000000",
    cardBg: "#0a0a0a",
    cardSubtle: "#141414",
    border: "#333333",
    borderHover: "#666666",
    text: "#ffffff",
    textMuted: "#888888",
    accent: "#ffffff",
    accentBg: "rgba(255, 255, 255, 0.12)",
    btnPrimaryBg: "#ffffff",
    btnPrimaryText: "#000000",
    btnSecondaryBg: "#1f1f1f",
    btnSecondaryText: "#ffffff",
    tagBg: "#171717",
    tagText: "#d4d4d4",
    fontClass: "font-sans tracking-tight",
  },
};

export default function NonAnthropicSamplePage() {
  const [activeTheme, setActiveTheme] = useState<NonAnthropicTheme>("raycast");
  const [selectedService, setSelectedService] = useState("audit");
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");

  const theme = THEMES[activeTheme];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div
      style={{
        backgroundColor: theme.bg,
        color: theme.text,
        minHeight: "100vh",
        transition: "background-color 0.2s ease, color 0.2s ease",
      }}
      className={`pb-28 selection:bg-cyan-500/30 selection:text-white ${theme.fontClass}`}
    >
      {/* ========================================================
          STICKY THEME SWITCHER BAR
          ======================================================== */}
      <nav
        style={{
          backgroundColor: theme.cardBg,
          borderBottom: `1px solid ${theme.border}`,
        }}
        className="sticky top-0 z-50 backdrop-blur-md px-4 py-3"
      >
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span
              style={{
                backgroundColor: theme.accentBg,
                color: theme.accent,
                borderColor: theme.border,
              }}
              className="px-2.5 py-1 rounded text-xs font-bold border flex items-center gap-1.5"
            >
              <Activity className="w-3.5 h-3.5" />
              NON-ANTHROPIC DIRECTIONS
            </span>
            <span style={{ color: theme.textMuted }} className="text-xs hidden md:inline">
              Zero beige. Zero editorial kickers. Zero toy graphics.
            </span>
          </div>

          <div
            className="flex items-center gap-1.5 p-1 rounded-lg border"
            style={{ borderColor: theme.border, backgroundColor: theme.cardSubtle }}
          >
            {(Object.keys(THEMES) as NonAnthropicTheme[]).map((key) => {
              const item = THEMES[key];
              const isSelected = activeTheme === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActiveTheme(key)}
                  style={{
                    backgroundColor: isSelected ? theme.bg : "transparent",
                    color: isSelected ? theme.text : theme.textMuted,
                    borderColor: isSelected ? theme.border : "transparent",
                  }}
                  className="px-3 py-1.5 rounded-md text-xs font-semibold flex items-center gap-1.5 border transition-all cursor-pointer"
                >
                  {isSelected && <Check className="w-3.5 h-3.5" style={{ color: theme.accent }} />}
                  <span>{item.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Concept Description Bar */}
      <div
        style={{
          backgroundColor: theme.cardSubtle,
          borderBottom: `1px solid ${theme.border}`,
          color: theme.textMuted,
        }}
        className="px-4 py-2 text-xs text-center font-medium"
      >
        <span>
          Selected Style: <strong style={{ color: theme.text }}>{theme.name}</strong> — {theme.vibe}
        </span>
      </div>

      <main className="max-w-6xl mx-auto px-5 sm:px-8 mt-12 space-y-20">
        {/* ========================================================
            HERO: Commercial, Direct, High-Impact
            ======================================================== */}
        <section className="space-y-6 pt-4">
          <div className="flex flex-wrap items-center gap-3">
            <span
              style={{
                backgroundColor: theme.accentBg,
                color: theme.accent,
                borderColor: theme.border,
              }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border"
            >
              <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: theme.accent }} />
              Open for Senior Eng / Architecture Contracts
            </span>
            <span style={{ color: theme.textMuted }} className="text-xs">
              7+ Years Production Experience · Ex-Quest Global / Jio / Reach Plc
            </span>
          </div>

          <h1
            style={{ color: theme.text }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] max-w-4xl"
          >
            I build high-scale frontend systems that load instantly and don&apos;t break.
          </h1>

          <p
            style={{ color: theme.textMuted }}
            className="text-lg sm:text-xl max-w-2xl leading-relaxed"
          >
            Senior frontend engineer specializing in React, Next.js, and Core Web Vitals optimization. Helping engineering teams audit bottlenecks, fix hydration drag, and ship production UI for millions of users.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href={siteConfig.calUrl}
              target="_blank"
              rel="noreferrer"
              style={{
                backgroundColor: theme.btnPrimaryBg,
                color: theme.btnPrimaryText,
              }}
              className="px-6 py-3.5 rounded-lg text-sm font-bold inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
            >
              <span>Schedule 15-Min Fit Call</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#systems"
              style={{
                backgroundColor: theme.btnSecondaryBg,
                color: theme.btnSecondaryText,
                borderColor: theme.border,
              }}
              className="px-6 py-3.5 rounded-lg text-sm font-bold inline-flex items-center gap-2 border hover:opacity-80 transition-opacity"
            >
              <span>View Case Studies</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Social Proof Brand Row */}
          <div className="pt-8 border-t flex flex-wrap items-center gap-8 sm:gap-12 opacity-80" style={{ borderColor: theme.border }}>
            <span style={{ color: theme.textMuted }} className="text-xs uppercase tracking-wider font-semibold">
              Shipped at Scale For:
            </span>
            <span className="font-extrabold text-base sm:text-lg tracking-tight">Jio Platforms</span>
            <span className="font-extrabold text-base sm:text-lg tracking-wider uppercase">Reach Plc (UK)</span>
            <span className="font-extrabold text-base sm:text-lg tracking-tight">Quest Global</span>
            <span className="font-extrabold text-base sm:text-lg tracking-tight">TISS (National EdTech)</span>
          </div>
        </section>

        {/* ========================================================
            BENTO GRID: Real Engineering Proof & Quantified Outcomes
            ======================================================== */}
        <section id="systems" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b pb-4" style={{ borderColor: theme.border }}>
            <div>
              <h2 style={{ color: theme.text }} className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Production Systems &amp; Case Studies
              </h2>
              <p style={{ color: theme.textMuted }} className="text-sm mt-1">
                Real code, real scale, real constraints. No hypothetical mockups.
              </p>
            </div>
            <span style={{ color: theme.accent }} className="text-xs font-mono font-semibold">
              4 Featured Systems
            </span>
          </div>

          {/* Featured System 1: Jio Gau Samriddhi */}
          <div
            style={{
              backgroundColor: theme.cardBg,
              borderColor: theme.border,
            }}
            className="rounded-2xl border overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-sm hover:border-zinc-500/40 transition-colors"
          >
            {/* Real Screenshot Preview */}
            <div
              style={{ backgroundColor: theme.cardSubtle }}
              className="lg:col-span-7 relative min-h-[350px] p-4 sm:p-6 flex items-center justify-center border-b lg:border-b-0 lg:border-r"
              border-color={theme.border}
            >
              <div className="relative w-full h-full min-h-[300px] sm:min-h-[360px] rounded-xl overflow-hidden border shadow-lg" style={{ borderColor: theme.border }}>
                <Image
                  src="/gausamriddhi_website.png"
                  alt="Jio Gau Samriddhi live production site"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority
                />
              </div>
              <div
                style={{
                  backgroundColor: theme.cardBg,
                  color: theme.text,
                  borderColor: theme.border,
                }}
                className="absolute top-8 left-8 px-3 py-1.5 rounded-md text-xs font-bold border backdrop-blur-md"
              >
                Enterprise Production · Jio Platforms
              </div>
            </div>

            {/* Architecture Details */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span
                    style={{
                      backgroundColor: theme.tagBg,
                      color: theme.tagText,
                    }}
                    className="px-2.5 py-1 rounded text-xs font-mono font-bold"
                  >
                    Next.js SSG
                  </span>
                  <span style={{ color: theme.accent }} className="text-xs font-mono font-bold">
                    &lt; 2s LCP on Rural 4G
                  </span>
                </div>

                <h3 style={{ color: theme.text }} className="text-xl sm:text-2xl font-extrabold tracking-tight">
                  Jio Gau Samriddhi
                </h3>

                <p style={{ color: theme.textMuted }} className="text-sm leading-relaxed">
                  Engineered high-performance static rendering and asset streaming for rural livestock owners across India relying on low-end Android phones and intermittent 4G connections.
                </p>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-lg border" style={{ borderColor: theme.border, backgroundColor: theme.cardSubtle }}>
                    <div className="text-xs font-mono" style={{ color: theme.textMuted }}>Audit Score</div>
                    <div className="text-lg font-bold" style={{ color: theme.accent }}>100% SEO</div>
                  </div>
                  <div className="p-3 rounded-lg border" style={{ borderColor: theme.border, backgroundColor: theme.cardSubtle }}>
                    <div className="text-xs font-mono" style={{ color: theme.textMuted }}>Hydration Drag</div>
                    <div className="text-lg font-bold" style={{ color: theme.accent }}>0ms TTFB</div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t flex items-center justify-between" style={{ borderColor: theme.border }}>
                <Link
                  href="/work/jio-gau-samriddhi"
                  style={{ color: theme.accent }}
                  className="text-xs font-bold inline-flex items-center gap-1 hover:underline"
                >
                  Inspect Case Study ↗
                </Link>
                <a
                  href="https://www.jiogausamriddhi.com/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: theme.textMuted }}
                  className="text-xs hover:underline inline-flex items-center gap-1"
                >
                  Live Platform <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Bento Row 2: Two Systems Side-by-Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* System 2: Reach Plc / UK Media Network */}
            <div
              style={{
                backgroundColor: theme.cardBg,
                borderColor: theme.border,
              }}
              className="p-6 sm:p-8 rounded-2xl border flex flex-col justify-between space-y-6 hover:border-zinc-500/40 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span
                    style={{
                      backgroundColor: theme.tagBg,
                      color: theme.tagText,
                    }}
                    className="px-2.5 py-1 rounded text-xs font-mono font-bold"
                  >
                    High-Volume Media
                  </span>
                  <span style={{ color: theme.accent }} className="text-xs font-mono font-bold">
                    4M+ Daily Readers
                  </span>
                </div>

                <h3 style={{ color: theme.text }} className="text-xl font-extrabold tracking-tight">
                  UK Publishing Network (80+ Domains)
                </h3>

                <p style={{ color: theme.textMuted }} className="text-sm leading-relaxed">
                  Migrated styled-components runtime bottlenecks to zero-runtime modular styling across a multi-tenant publication network, dropping initial JS bundles by 25% while safeguarding Lighthouse 90+ Core Web Vitals under heavy ad networks.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-xs px-2.5 py-1 rounded border font-mono" style={{ borderColor: theme.border, color: theme.textMuted }}>
                    Bundle Splitting
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded border font-mono" style={{ borderColor: theme.border, color: theme.textMuted }}>
                    INP Optimization
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded border font-mono" style={{ borderColor: theme.border, color: theme.textMuted }}>
                    Zero-Runtime CSS
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t flex items-center justify-between" style={{ borderColor: theme.border }}>
                <Link
                  href="/work/uk-publication-platform"
                  style={{ color: theme.accent }}
                  className="text-xs font-bold inline-flex items-center gap-1 hover:underline"
                >
                  Full Technical Writeup ↗
                </Link>
                <span style={{ color: theme.textMuted }} className="text-xs font-mono">
                  Reach Plc
                </span>
              </div>
            </div>

            {/* System 3: TISS CLIx Offline EdTech */}
            <div
              style={{
                backgroundColor: theme.cardBg,
                borderColor: theme.border,
              }}
              className="p-6 sm:p-8 rounded-2xl border flex flex-col justify-between space-y-6 hover:border-zinc-500/40 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span
                    style={{
                      backgroundColor: theme.tagBg,
                      color: theme.tagText,
                    }}
                    className="px-2.5 py-1 rounded text-xs font-mono font-bold"
                  >
                    EdTech Infrastructure
                  </span>
                  <span style={{ color: theme.accent }} className="text-xs font-mono font-bold">
                    Offline Web Workers
                  </span>
                </div>

                <h3 style={{ color: theme.text }} className="text-xl font-extrabold tracking-tight">
                  TISS CLIx Educational Dashboard
                </h3>

                <p style={{ color: theme.textMuted }} className="text-sm leading-relaxed">
                  Engineered telemetry dashboards deployed in state schools across India. Decoupled compute-heavy student analytics to Web Workers and built resilient offline IndexedDB sync for classrooms facing multi-week connectivity outages.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-xs px-2.5 py-1 rounded border font-mono" style={{ borderColor: theme.border, color: theme.textMuted }}>
                    IndexedDB Sync
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded border font-mono" style={{ borderColor: theme.border, color: theme.textMuted }}>
                    Web Workers
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded border font-mono" style={{ borderColor: theme.border, color: theme.textMuted }}>
                    Fault Tolerance
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t flex items-center justify-between" style={{ borderColor: theme.border }}>
                <Link
                  href="/work/clix-dashboard"
                  style={{ color: theme.accent }}
                  className="text-xs font-bold inline-flex items-center gap-1 hover:underline"
                >
                  Full Technical Writeup ↗
                </Link>
                <span style={{ color: theme.textMuted }} className="text-xs font-mono">
                  Tata Institute
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            INDEPENDENT SOFTWARE PRODUCTS: Real Shipped Software
            ======================================================== */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b pb-4" style={{ borderColor: theme.border }}>
            <div>
              <h2 style={{ color: theme.text }} className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Shipped Software Products
              </h2>
              <p style={{ color: theme.textMuted }} className="text-sm mt-1">
                Conceived, built, and operated independently. Zero venture debt, 100% execution.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Product 1: FrontendYogi */}
            <div
              style={{
                backgroundColor: theme.cardBg,
                borderColor: theme.border,
              }}
              className="p-6 sm:p-8 rounded-2xl border flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span style={{ color: theme.accent }} className="text-xs font-mono font-bold">
                    Live Web Suite · frontendyogi.com
                  </span>
                  <span className="text-xs font-mono" style={{ color: theme.textMuted }}>
                    Zero Telemetry
                  </span>
                </div>

                <h3 style={{ color: theme.text }} className="text-2xl font-extrabold">
                  FrontendYogi
                </h3>

                <p style={{ color: theme.textMuted }} className="text-sm leading-relaxed">
                  A complete suite of client-side developer utilities: Image Compressor, PDF Tools, JSON Formatter, and Base64 Converter. Runs entirely in the browser using WebAssembly and Web Workers—zero files uploaded to external servers.
                </p>

                <div className="p-4 rounded-xl border space-y-1.5" style={{ borderColor: theme.border, backgroundColor: theme.cardSubtle }}>
                  <div className="text-xs font-bold" style={{ color: theme.text }}>Core Architectural Decision:</div>
                  <div className="text-xs" style={{ color: theme.textMuted }}>
                    Leveraged client-side Canvas and WebAssembly to eliminate cloud compute costs while guaranteeing user data privacy.
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t flex items-center justify-between" style={{ borderColor: theme.border }}>
                <a
                  href="https://frontendyogi.com"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    backgroundColor: theme.btnPrimaryBg,
                    color: theme.btnPrimaryText,
                  }}
                  className="px-4 py-2 rounded text-xs font-bold inline-flex items-center gap-1.5 hover:opacity-90 transition-opacity"
                >
                  <span>Launch FrontendYogi</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <span style={{ color: theme.textMuted }} className="text-xs font-mono">
                  100% Free &amp; Private
                </span>
              </div>
            </div>

            {/* Product 2: Sangam Biodata */}
            <div
              style={{
                backgroundColor: theme.cardBg,
                borderColor: theme.border,
              }}
              className="p-6 sm:p-8 rounded-2xl border flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span style={{ color: theme.accent }} className="text-xs font-mono font-bold">
                    Consumer SaaS Utility
                  </span>
                  <span className="text-xs font-mono" style={{ color: theme.textMuted }}>
                    88% Mobile Users
                  </span>
                </div>

                <h3 style={{ color: theme.text }} className="text-2xl font-extrabold">
                  Sangam Biodata Builder
                </h3>

                <p style={{ color: theme.textMuted }} className="text-sm leading-relaxed">
                  Mobile-first matrimonial biodata generator featuring client-side vector PDF synthesis. Zero backend server storage, zero database overhead, and instant real-time print rendering for low-spec mobile browsers.
                </p>

                <div className="p-4 rounded-xl border space-y-1.5" style={{ borderColor: theme.border, backgroundColor: theme.cardSubtle }}>
                  <div className="text-xs font-bold" style={{ color: theme.text }}>Core Architectural Decision:</div>
                  <div className="text-xs" style={{ color: theme.textMuted }}>
                    Architected in-browser PDF layout engine to eliminate headless Chromium server rendering costs ($0/month infrastructure).
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t flex items-center justify-between" style={{ borderColor: theme.border }}>
                <Link
                  href="/work/sangam-biodata"
                  style={{
                    backgroundColor: theme.btnSecondaryBg,
                    color: theme.btnSecondaryText,
                    borderColor: theme.border,
                  }}
                  className="px-4 py-2 rounded text-xs font-bold inline-flex items-center gap-1.5 border hover:opacity-90 transition-opacity"
                >
                  <span>Read Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                <span style={{ color: theme.textMuted }} className="text-xs font-mono">
                  Vector Engine
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            CONSULTING & ENGAGEMENT: Transparent & Commercial
            ======================================================== */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b pb-4" style={{ borderColor: theme.border }}>
            <div>
              <h2 style={{ color: theme.text }} className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                How We Can Work Together
              </h2>
              <p style={{ color: theme.textMuted }} className="text-sm mt-1">
                Direct senior engagement. No account managers or junior delegations.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Offer 1 */}
            <div
              style={{
                backgroundColor: theme.cardBg,
                borderColor: selectedService === "audit" ? theme.accent : theme.border,
              }}
              onClick={() => setSelectedService("audit")}
              className="p-6 rounded-2xl border flex flex-col justify-between space-y-4 cursor-pointer hover:border-zinc-500/40 transition-colors"
            >
              <div className="space-y-3">
                <span style={{ color: theme.accent }} className="text-xs font-mono uppercase tracking-wider font-bold">
                  Fixed 10-Day Deliverable
                </span>
                <h3 style={{ color: theme.text }} className="text-xl font-bold">
                  Next.js Performance Audit
                </h3>
                <p style={{ color: theme.textMuted }} className="text-xs leading-relaxed">
                  Forensic analysis of rendering waterfalls, bundle bloat, hydration boundaries, and Core Web Vitals (INP/LCP).
                </p>
                <ul className="space-y-1.5 text-xs pt-2" style={{ color: theme.text }}>
                  <li className="flex items-center gap-2">✓ Prioritized ROI remediation plan</li>
                  <li className="flex items-center gap-2">✓ Exact file &amp; component fixes</li>
                  <li className="flex items-center gap-2">✓ 45-min live team walkthrough</li>
                </ul>
              </div>
              <div className="pt-4 border-t text-xs font-bold" style={{ borderColor: theme.border, color: theme.accent }}>
                Select for Inquiry →
              </div>
            </div>

            {/* Offer 2 */}
            <div
              style={{
                backgroundColor: theme.cardBg,
                borderColor: selectedService === "fractional" ? theme.accent : theme.border,
              }}
              onClick={() => setSelectedService("fractional")}
              className="p-6 rounded-2xl border flex flex-col justify-between space-y-4 cursor-pointer hover:border-zinc-500/40 transition-colors"
            >
              <div className="space-y-3">
                <span style={{ color: theme.accent }} className="text-xs font-mono uppercase tracking-wider font-bold">
                  Monthly Retainer
                </span>
                <h3 style={{ color: theme.text }} className="text-xl font-bold">
                  Fractional Frontend Architect
                </h3>
                <p style={{ color: theme.textMuted }} className="text-xs leading-relaxed">
                  10–15 hours weekly embedding into your engineering cadence to guide architecture, review PRs, and prevent regressions.
                </p>
                <ul className="space-y-1.5 text-xs pt-2" style={{ color: theme.text }}>
                  <li className="flex items-center gap-2">✓ High-risk PR code reviews</li>
                  <li className="flex items-center gap-2">✓ Next.js App Router migration</li>
                  <li className="flex items-center gap-2">✓ Architecture Decision Records</li>
                </ul>
              </div>
              <div className="pt-4 border-t text-xs font-bold" style={{ borderColor: theme.border, color: theme.accent }}>
                Select for Inquiry →
              </div>
            </div>

            {/* Offer 3 */}
            <div
              style={{
                backgroundColor: theme.cardBg,
                borderColor: selectedService === "sprint" ? theme.accent : theme.border,
              }}
              onClick={() => setSelectedService("sprint")}
              className="p-6 rounded-2xl border flex flex-col justify-between space-y-4 cursor-pointer hover:border-zinc-500/40 transition-colors"
            >
              <div className="space-y-3">
                <span style={{ color: theme.accent }} className="text-xs font-mono uppercase tracking-wider font-bold">
                  Sprint Execution
                </span>
                <h3 style={{ color: theme.text }} className="text-xl font-bold">
                  Complex UI Implementation
                </h3>
                <p style={{ color: theme.textMuted }} className="text-xs leading-relaxed">
                  Hands-on engineering for demanding interface requirements: virtualized data grids, custom charts, and tokenized design systems.
                </p>
                <ul className="space-y-1.5 text-xs pt-2" style={{ color: theme.text }}>
                  <li className="flex items-center gap-2">✓ 60 FPS performance locked</li>
                  <li className="flex items-center gap-2">✓ WCAG AA accessibility compliant</li>
                  <li className="flex items-center gap-2">✓ Production TypeScript primitives</li>
                </ul>
              </div>
              <div className="pt-4 border-t text-xs font-bold" style={{ borderColor: theme.border, color: theme.accent }}>
                Select for Inquiry →
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            DIRECT LEAD CAPTURE: Clean, Working, Direct
            ======================================================== */}
        <section
          style={{
            backgroundColor: theme.cardBg,
            borderColor: theme.border,
          }}
          className="rounded-2xl border p-6 sm:p-10 space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-5 space-y-4">
              <span style={{ color: theme.accent }} className="text-xs font-mono uppercase tracking-wider font-bold">
                Direct Contact
              </span>
              <h2 style={{ color: theme.text }} className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Start a technical conversation.
              </h2>
              <p style={{ color: theme.textMuted }} className="text-sm leading-relaxed">
                Whether you need a diagnostic audit, architecture review, or have a critical UI sprint, share your stack constraints. I respond directly within 12 hours.
              </p>
              <div className="pt-3 space-y-2 text-xs" style={{ color: theme.textMuted }}>
                <div>📧 Direct Email: <a href={`mailto:${siteConfig.email}`} className="font-mono underline" style={{ color: theme.text }}>{siteConfig.email}</a></div>
                <div>⚡ Cal.com: <a href={siteConfig.calUrl} target="_blank" rel="noreferrer" className="underline" style={{ color: theme.accent }}>Book 15-min discovery call ↗</a></div>
              </div>
            </div>

            <div className="md:col-span-7">
              {submitted ? (
                <div
                  style={{
                    backgroundColor: theme.cardSubtle,
                    borderColor: theme.border,
                  }}
                  className="p-6 rounded-xl border text-center space-y-3"
                >
                  <CheckCircle2 className="w-8 h-8 mx-auto" style={{ color: theme.accent }} />
                  <h4 className="font-bold text-base" style={{ color: theme.text }}>Inquiry Drafted</h4>
                  <p className="text-xs max-w-sm mx-auto" style={{ color: theme.textMuted }}>
                    Opening your default email client with your project details...
                  </p>
                  <a
                    href={`mailto:${siteConfig.email}?subject=Inquiry: ${encodeURIComponent(selectedService)}&body=${encodeURIComponent(notes)}`}
                    style={{
                      backgroundColor: theme.btnPrimaryBg,
                      color: theme.btnPrimaryText,
                    }}
                    className="inline-block mt-2 px-5 py-2.5 rounded text-xs font-bold"
                  >
                    Send Direct via Email Client ↗
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label style={{ color: theme.text }} className="block text-xs font-bold mb-1.5">
                      Selected Inquiry Topic
                    </label>
                    <input
                      type="text"
                      readOnly
                      value={selectedService === "audit" ? "Next.js Performance Audit (10-Day Diagnostic)" : selectedService === "fractional" ? "Fractional Frontend Architecture Retainer" : "Complex UI Implementation Sprint"}
                      style={{
                        backgroundColor: theme.cardSubtle,
                        borderColor: theme.border,
                        color: theme.text,
                      }}
                      className="w-full px-3.5 py-2.5 rounded-lg border text-xs font-medium focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label style={{ color: theme.text }} className="block text-xs font-bold mb-1.5">
                      Your Work Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{
                        backgroundColor: theme.cardSubtle,
                        borderColor: theme.border,
                        color: theme.text,
                      }}
                      className="w-full px-3.5 py-2.5 rounded-lg border text-xs font-medium focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label style={{ color: theme.text }} className="block text-xs font-bold mb-1.5">
                      Codebase Symptoms &amp; Goals
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Next.js 15 migration, slow INP on mobile catalog, looking for a 10-day audit..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      style={{
                        backgroundColor: theme.cardSubtle,
                        borderColor: theme.border,
                        color: theme.text,
                      }}
                      className="w-full px-3.5 py-2.5 rounded-lg border text-xs font-medium focus:outline-hidden resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      backgroundColor: theme.btnPrimaryBg,
                      color: theme.btnPrimaryText,
                    }}
                    className="w-full py-3.5 rounded-lg text-xs font-bold hover:opacity-90 transition-opacity cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Send Project Context</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
