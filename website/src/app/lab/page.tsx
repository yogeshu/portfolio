import type { Metadata } from "next";
import Link from "next/link";
import { products, siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "Products & Laboratory — Yogesh Bhavsar",
  description:
    "Independent web utilities, developer tools, and software experiments by Yogesh Bhavsar, including FrontendYogi, Writer Mirror, InterviewPrep_OS, and Sangam Biodata.",
  alternates: {
    canonical: "https://yogeshbhavsar.com/lab",
  },
};

export default function LabPage() {
  const featured = products.find((p) => p.name === "FrontendYogi") || products[0];
  const list = products.filter((p) => p.name !== "FrontendYogi");

  return (
    <div className="wrap">
      {/* ========================================================
          HERO: Open, Asymmetric, Signature Accent
          ======================================================== */}
      <section className="py-[70px] pb-[55px] grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-[40px] md:gap-[56px] items-end border-t-0">
        <div>
          <div className="kicker">01 / Independent Practice &amp; Lab</div>
          <h1 className="text-[clamp(44px,7vw,86px)] leading-[0.94] tracking-[-0.085em] my-[20px] mb-[22px] max-w-[750px] font-[850] text-[var(--ink)]">
            Small teams. <span className="accent">Real experiments.</span>
          </h1>
          <p className="text-[18px] leading-[1.6] max-w-[510px] text-[#4b5a50] m-0">
            A showcase of products, utilities, and focused experiments I have conceived and engineered outside client silos. Built to test ideas, solve personal friction, and ship working software for real people.
          </p>
        </div>

        <aside className="hero-side">
          <p className="text-[14px] text-[var(--muted)] m-0 mb-[20px] max-w-[330px]">
            Building independent software keeps engineering sharp: no enterprise committees, no junior delegation. Full-lifecycle ownership from idea to edge deployment.
          </p>
          <div className="pills">
            <span className="pill">Full-lifecycle ownership</span>
            <span className="pill">Zero-telemetry tools</span>
            <span className="pill">Client-side execution</span>
          </div>
        </aside>
      </section>

      {/* ========================================================
          FLAGSHIP PRODUCT: FrontendYogi Deep Forest Feature
          ======================================================== */}
      <section className="py-[28px] pb-[55px] border-t border-[var(--line)]">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-[20px] md:gap-[28px] pb-[22px]">
          <div>
            <div className="kicker"><b>01</b> / Flagship product</div>
            <h2 className="text-[clamp(30px,4vw,44px)] leading-[1] tracking-[-0.065em] my-[10px] mb-0 font-[850]">
              Useful by design.<br />Built to ship.
            </h2>
          </div>
          <p className="max-w-[400px] m-0 text-[var(--muted)] text-[14px]">
            Free, privacy-friendly browser utilities designed around everyday conversion jobs. No subscriptions, no cloud tracking.
          </p>
        </div>

        <article className="feature">
          {/* Feature Art Window */}
          <div className="feature-art" aria-label="FrontendYogi interface illustration">
            <span className="art-label">FrontendYogi / Product interface</span>
            <div className="window">
              <div className="window-head">
                <span>FrontendYogi</span>
                <span>Browser tools ↗</span>
              </div>
              <div className="search">⌕ &nbsp; Find a tool for the job…</div>
              <div className="tools">
                <div className="tool">Image<br />compressor</div>
                <div className="tool">PDF<br />tools</div>
                <div className="tool">JSON<br />formatter</div>
                <div className="tool">Photo<br />resizer</div>
                <div className="tool">Base64<br />converter</div>
                <div className="tool">Text<br />utilities</div>
              </div>
            </div>
          </div>

          {/* Feature Copy */}
          <div className="feature-copy">
            <div className="overline">Flagship product · 01</div>
            <h3 className="text-[clamp(30px,4vw,43px)] tracking-[-0.07em] leading-[1.02] my-[14px] font-[850]">
              FrontendYogi
            </h3>
            <p className="text-[#d2dfd4] max-w-[410px] text-[14px] m-0 mb-[18px]">
              A collection of browser-based utilities designed around everyday tasks. Client-side canvas compression, PDF splitting, and JSON formatting that runs entirely in the browser with zero cloud storage.
            </p>
            <div className="proof">
              <div>
                <strong>Zero Telemetry</strong>
                <span>100% Client-side</span>
              </div>
              <div>
                <strong>Free Public Web</strong>
                <span>Active users</span>
              </div>
            </div>
            <a
              className="arrow"
              href="https://frontendyogi.com/"
              target="_blank"
              rel="noreferrer"
            >
              Launch FrontendYogi ↗
            </a>
          </div>
        </article>
      </section>

      {/* ========================================================
          COMPLETE PRODUCT GRID: 2-Column Monogram Rows
          ======================================================== */}
      <section className="py-[65px] pb-[70px] border-t border-[var(--line)]">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-[20px] md:gap-[24px] mb-[22px]">
          <div>
            <div className="kicker"><b>02</b> / Complete catalog</div>
            <h2 className="text-[clamp(32px,4vw,45px)] leading-[1] tracking-[-0.065em] my-[10px] mb-0 font-[850]">
              Active tools &amp;<br />focused utilities.
            </h2>
          </div>
          <p className="max-w-[360px] text-[var(--muted)] text-[14px] m-0">
            Each utility represents a specific engineering trade-off: client-side processing, typography, or performance analysis.
          </p>
        </div>

        <div className="product-grid">
          {/* Sangam */}
          <article className="product">
            <div className="symbol bg-[#cfe3d3] text-[var(--forest)]">
              S.
            </div>
            <div>
              <div className="work-type">Consumer Utility · Live</div>
              <h3 className="text-[21px] tracking-[-0.05em] m-0 mb-[6px] font-[800]">
                Sangam Biodata Builder
              </h3>
              <p className="text-[13px] text-[var(--muted)] m-0 mb-[12px]">
                Mobile-first matrimonial biodata generator featuring in-browser vector PDF synthesis. 88% mobile traffic with $0/month serverless infrastructure.
              </p>
              <Link href="/work/sangam-biodata" className="text-[12px] font-[800] hover:text-[var(--blue)] transition-colors">
                Case study ↗
              </Link>
            </div>
          </article>

          {/* Writer Mirror */}
          <article className="product">
            <div className="symbol bg-[var(--coral)] text-[#56352c]">
              W.
            </div>
            <div>
              <div className="work-type">Writing Tool · Active</div>
              <h3 className="text-[21px] tracking-[-0.05em] m-0 mb-[6px] font-[800]">
                Writer Mirror
              </h3>
              <p className="text-[13px] text-[var(--muted)] m-0 mb-[12px]">
                A focused writing environment exploring grammar feedback, typing cadence, and zero-loss local state persistence for long-form drafting.
              </p>
              <a
                className="text-[12px] font-[800] hover:text-[var(--blue)] transition-colors"
                href="https://writer-mirror.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Visit product ↗
              </a>
            </div>
          </article>

          {/* InterviewPrep_OS */}
          <article className="product">
            <div className="symbol bg-[#dbe4ff] text-[var(--blue)]">
              I/
            </div>
            <div>
              <div className="work-type">Developer Prep · Active</div>
              <h3 className="text-[21px] tracking-[-0.05em] m-0 mb-[6px] font-[800]">
                InterviewPrep_OS
              </h3>
              <p className="text-[13px] text-[var(--muted)] m-0 mb-[12px]">
                Engineering interview dashboard with structured frontend system design roadmaps and algorithm tracking without paywalls.
              </p>
              <span className="text-[11px] font-mono-meta text-[var(--muted)]">
                Local-first state persistence
              </span>
            </div>
          </article>

          {/* Yogimetrics */}
          <article className="product">
            <div className="symbol bg-[var(--lime)] text-[var(--forest)]">
              Y.
            </div>
            <div>
              <div className="work-type">Diagnostic Utility</div>
              <h3 className="text-[21px] tracking-[-0.05em] m-0 mb-[6px] font-[800]">
                Yogimetrics
              </h3>
              <p className="text-[13px] text-[var(--muted)] m-0 mb-[12px]">
                Developer diagnostic tool utilizing PerformanceObserver APIs to uncover runtime long tasks and memory leaks missed by synthetic audits.
              </p>
              <span className="text-[11px] font-mono-meta text-[var(--muted)]">
                &lt; 0.8% CPU footprint
              </span>
            </div>
          </article>
        </div>
      </section>

      {/* ========================================================
          CLOSING: Signature Signal Lime Banner
          ======================================================== */}
      <section className="closing">
        <div>
          <div className="kicker">Have a product challenge?</div>
          <h2 className="text-[clamp(30px,4vw,45px)] leading-[1] tracking-[-0.07em] my-[10px] text-[var(--forest)] font-[850]">
            Let&apos;s build the next useful thing.
          </h2>
          <p className="text-[#3e4d32] m-0 text-[14px] max-w-[450px]">
            I help founders and small teams turn ambiguous requirements into dependable, production-ready web products.
          </p>
        </div>
        <Link className="contact" href="/contact">
          Start a conversation ↗
        </Link>
      </section>
    </div>
  );
}
