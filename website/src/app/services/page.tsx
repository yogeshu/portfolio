import type { Metadata } from "next";
import Link from "next/link";
import { services, siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services & Architecture Audits — Yogesh Bhavsar",
  description:
    "Fixed-scope Next.js performance audits, Core Web Vitals remediation, and fractional frontend architecture leadership for engineering teams.",
  alternates: {
    canonical: "https://yogeshbhavsar.com/services",
  },
};

export default function ServicesPage() {
  const faqs = [
    {
      q: "Are you an agency or an independent specialist?",
      a: "I am a solo specialist. When you hire me, you work directly with me—no junior substitutions, no account managers, and no communication friction. You get 7+ years of dedicated production frontend experience directly embedded into your problem."
    },
    {
      q: "How does the Next.js Performance Audit engagement work?",
      a: "The audit is structured as a 10-day fixed-scope diagnostic. We begin by collecting your field telemetry (RUM), bundle analyzer traces, WebPageTest runs, and repository access. I perform a forensic analysis of your rendering boundaries, hydration overhead, and script waterfalls, delivering an executive impact deck and an exhaustive technical remediation guide."
    },
    {
      q: "What is the typical deliverable of an audit?",
      a: "You receive a prioritized, code-level remediation document with exact file paths, component boundaries to adjust, and script tag priority modifications—ranked strictly by estimated engineering effort versus Core Web Vitals impact. We conclude with a 45-minute interactive walkthrough and Q&A session with your core team."
    },
    {
      q: "Do you offer ongoing fractional architecture support?",
      a: "Yes. For select teams that have completed an initial diagnostic or need senior guidance during a major feature or redesign cycle, I offer fractional retainers (typically 10–15 hours weekly) providing pull request reviews, architecture decision records, and technical design spikes."
    },
    {
      q: "Can you assist with implementing the recommendations?",
      a: "Absolutely. Teams frequently retain me to personally architect and execute the highest-leverage foundational changes (such as zero-runtime modular CSS migrations or App Router route restructuring) alongside their internal engineers."
    }
  ];

  return (
    <div className="wrap">
      {/* ========================================================
          HERO: Open, Asymmetric, Signature Accent
          ======================================================== */}
      <section className="py-[70px] pb-[55px] grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-[40px] md:gap-[56px] items-end border-t-0">
        <div>
          <div className="kicker">01 / Consulting &amp; Diagnostic Engagements</div>
          <h1 className="text-[clamp(44px,7vw,86px)] leading-[0.94] tracking-[-0.085em] my-[20px] mb-[22px] max-w-[750px] font-[850] text-[var(--ink)]">
            Frontend architecture &amp; <span className="accent">audits.</span>
          </h1>
          <p className="text-[18px] leading-[1.6] max-w-[510px] text-[#4b5a50] m-0">
            I partner with engineering teams, founders, and CTOs shipping React and Next.js applications who need senior diagnostic depth, architectural governance, or performance fixes that measurably impact Core Web Vitals.
          </p>
        </div>

        <aside className="hero-side">
          <p className="text-[14px] text-[var(--muted)] m-0 mb-[20px] max-w-[330px]">
            Fixed-scope diagnostics with zero disruption. Pinpoint root causes, rank remedies by ROI, and walk your engineers through the exact file-level code fixes.
          </p>
          <div className="pills">
            <span className="pill">Next.js App Router</span>
            <span className="pill">Core Web Vitals</span>
            <span className="pill">Lighthouse 90+</span>
            <span className="pill">Architecture reviews</span>
          </div>
          <div className="pt-4 flex items-center gap-3">
            <a
              href={siteConfig.calUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] font-[800] text-[var(--forest)] hover:text-[var(--blue)] transition-colors inline-flex items-center gap-1"
            >
              <span>Book 15-min fit call</span>
              <span>↗</span>
            </a>
          </div>
        </aside>
      </section>

      {/* ========================================================
          ENGAGEMENT MODELS: Open Editorial Rows (No Boxed Cards!)
          ======================================================== */}
      <section className="py-[28px] pb-[55px] border-t border-[var(--line)]">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-[20px] md:gap-[28px] pb-[22px]">
          <div>
            <div className="kicker"><b>01</b> / Engagement models</div>
            <h2 className="text-[clamp(30px,4vw,44px)] leading-[1] tracking-[-0.065em] my-[10px] mb-0 font-[850]">
              Clear deliverables.<br />Predictable scope.
            </h2>
          </div>
          <p className="max-w-[400px] m-0 text-[var(--muted)] text-[14px]">
            Three focused ways to engage, designed for engineering teams that need senior certainty without agency overhead.
          </p>
        </div>

        <div className="work-list">
          {services.map((service, idx) => (
            <article key={service.id} className="work-row">
              <div className="index">0{idx + 1} —</div>
              <div>
                <div className="work-type">{service.tag} · {service.deliverable}</div>
                <h3 className="text-[22px] leading-[1.1] tracking-[-0.055em] m-0 mb-[7px] font-[800]">
                  {service.title}
                </h3>
                <p className="text-[13px] text-[var(--muted)] m-0 max-w-[440px]">
                  {service.description}
                </p>
              </div>
              <div>
                <span className="block text-[11px] font-mono-meta uppercase tracking-wider text-[var(--muted)] font-bold mb-1">
                  Ideal For
                </span>
                <p className="text-[13px] text-[var(--ink)] m-0 max-w-[440px] font-medium">
                  {service.idealFor}
                </p>
                <div className="text-[11px] font-mono-meta text-[var(--muted)] mt-2">
                  Scope: {service.features.slice(0, 3).join(" · ")}
                </div>
              </div>
              <Link className="row-link" href={`/contact?service=${service.id}`}>
                Initiate <span>↗</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* ========================================================
          THE DIAGNOSTIC BLUEPRINT: Open 5-Step Process
          ======================================================== */}
      <section className="py-[28px] pb-[55px] border-t border-[var(--line)]">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-[20px] md:gap-[28px] pb-[22px]">
          <div>
            <div className="kicker"><b>02</b> / Methodology</div>
            <h2 className="text-[clamp(30px,4vw,44px)] leading-[1] tracking-[-0.065em] my-[10px] mb-0 font-[850]">
              The diagnostic<br />blueprint.
            </h2>
          </div>
          <p className="max-w-[400px] m-0 text-[var(--muted)] text-[14px]">
            How I deliver architectural certainty, ranked by engineering effort versus user outcome.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 pt-4 border-t border-[var(--line)]">
          {[
            { step: "01", title: "Telemetry Intake", desc: "Collect RUM field telemetry, WebPageTest traces, and client bundle profiles." },
            { step: "02", title: "Root-Cause Forensics", desc: "Trace hydration waterfalls, long frames, unoptimized assets, and state thrashing." },
            { step: "03", title: "Ranked Blueprint", desc: "Produce code-level fixes ordered strictly by engineering effort vs. CWV impact." },
            { step: "04", title: "Team Walkthrough", desc: "Host an interactive 45-minute architectural Q&A session with your core team." },
            { step: "05", title: "Post-Fix Validation", desc: "Verify field performance improvements against baseline Core Web Vitals budgets." },
          ].map((item) => (
            <div key={item.step} className="pt-2 border-t-2 border-[var(--forest)]">
              <span className="font-mono-meta text-[11px] font-[800] text-[var(--forest)] block mb-1">
                {item.step}
              </span>
              <h4 className="text-[16px] font-[800] tracking-[-0.03em] m-0 mb-1.5 text-[var(--ink)]">
                {item.title}
              </h4>
              <p className="text-[12px] text-[var(--muted)] leading-relaxed m-0">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          TRANSPARENCY & FAQ: Clean Divider Rows
          ======================================================== */}
      <section className="py-[28px] pb-[55px] border-t border-[var(--line)]">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-[20px] md:gap-[28px] pb-[22px]">
          <div>
            <div className="kicker"><b>03</b> / Transparency</div>
            <h2 className="text-[clamp(30px,4vw,44px)] leading-[1] tracking-[-0.065em] my-[10px] mb-0 font-[850]">
              Frequently asked<br />questions.
            </h2>
          </div>
          <p className="max-w-[400px] m-0 text-[var(--muted)] text-[14px]">
            Direct answers on engagement structure, team integration, and code deliverables.
          </p>
        </div>

        <div className="divide-y divide-[var(--line)] border-t border-[var(--line)]">
          {faqs.map((faq, idx) => (
            <div key={idx} className="py-[24px] grid grid-cols-1 md:grid-cols-12 gap-[16px] items-start">
              <h3 className="md:col-span-5 text-[17px] font-[800] text-[var(--ink)] tracking-[-0.03em] m-0">
                {faq.q}
              </h3>
              <p className="md:col-span-7 text-[14px] text-[var(--muted)] leading-relaxed m-0">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          CLOSING: Signature Signal Lime Banner
          ======================================================== */}
      <section className="closing">
        <div>
          <div className="kicker">Immediate Next Step</div>
          <h2 className="text-[clamp(30px,4vw,45px)] leading-[1] tracking-[-0.07em] my-[10px] text-[var(--forest)] font-[850]">
            Confirm project fit in 15 minutes.
          </h2>
          <p className="text-[#3e4d32] m-0 text-[14px] max-w-[450px]">
            Zero-pressure call to outline your application challenges, tech stack, and verify whether a diagnostic audit is the correct first step.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={siteConfig.calUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="contact"
          >
            Book Fit Call on Cal.com ↗
          </a>
        </div>
      </section>
    </div>
  );
}
