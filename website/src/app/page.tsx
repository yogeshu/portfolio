import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "Yogesh Bhavsar — Senior Frontend Engineer & Product Builder",
  description:
    "Senior-level frontend engineering, product development, and technical problem-solving with React, Next.js, and TypeScript.",
  alternates: {
    canonical: "https://yogeshbhavsar.com",
  },
};

export default function HomePage() {
  return (
    <div className="wrap">
      {/* ========================================================
          HERO: Open, Asymmetric, Signature Accent
          ======================================================== */}
      <section className="py-[70px] pb-[55px] grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-[40px] md:gap-[56px] items-end border-t-0">
        <div>
          <div className="kicker">01 / Senior Frontend Engineer &amp; Product Builder</div>
          <h1 className="text-[clamp(44px,7vw,86px)] leading-[0.94] tracking-[-0.085em] my-[20px] mb-[22px] max-w-[750px] font-[850] text-[var(--ink)]">
            I turn complex frontend problems into <span className="accent">products.</span>
          </h1>
          <p className="text-[18px] leading-[1.6] max-w-[510px] text-[#4b5a50] m-0">
            Senior-level frontend engineering, product development, and technical problem-solving with React, Next.js, and TypeScript. Helping teams diagnose bottlenecks, scale architecture, and ship dependable software.
          </p>
        </div>

        <aside className="hero-side">
          <p className="text-[14px] text-[var(--muted)] m-0 mb-[20px] max-w-[330px]">
            Mechanical systems background translated into frontend engineering: every abstraction has friction, weight, and runtime cost. Direct senior partner—no junior delegation.
          </p>
          <div className="pills">
            <span className="pill">Frontend architecture</span>
            <span className="pill">Performance audits</span>
            <span className="pill">React · Next.js</span>
            <span className="pill">Independent products</span>
          </div>
          <div className="pt-4 flex items-center gap-3">
            <Link
              href="/contact"
              className="text-[12px] font-[800] text-[var(--forest)] hover:text-[var(--blue)] transition-colors inline-flex items-center gap-1"
            >
              <span>Discuss a project</span>
              <span>↗</span>
            </Link>
            <span className="text-[var(--line)]">•</span>
            <a
              href={siteConfig.calUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] font-[800] text-[var(--muted)] hover:text-[var(--ink)] transition-colors"
            >
              Book 15-min fit call ↗
            </a>
          </div>
        </aside>
      </section>

      {/* ========================================================
          SECTION 01 / FEATURED PROJECT: Jio Gau Samriddhi
          ======================================================== */}
      <section className="py-[28px] pb-[55px] border-t border-[var(--line)]">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-[20px] md:gap-[28px] pb-[22px]">
          <div>
            <div className="kicker"><b>01</b> / Featured project</div>
            <h2 className="text-[clamp(30px,4vw,44px)] leading-[1] tracking-[-0.065em] my-[10px] mb-0 font-[850]">
              Sub-second speed.<br />Built for real networks.
            </h2>
          </div>
          <p className="max-w-[400px] m-0 text-[var(--muted)] text-[14px]">
            A high-performance Next.js application designed to load instantly on entry-level Android devices across rural India.
          </p>
        </div>

        <article className="feature">
          {/* Feature Art / Screenshot Showcase */}
          <div className="feature-art p-0 overflow-hidden relative" aria-label="Jio Gau Samriddhi web platform">
            <div className="relative w-full h-full min-h-[350px]">
              <Image
                src="/gausamriddhi_website.png"
                alt="Jio Gau Samriddhi platform screenshot"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            <span className="art-label bg-[#163b32]/80 text-[#f5f8ef] px-2.5 py-1 rounded backdrop-blur-sm">
              Jio Gau Samriddhi / Web platform
            </span>
          </div>

          {/* Feature Copy */}
          <div className="feature-copy">
            <div className="overline">Enterprise production · 01</div>
            <h3 className="text-[clamp(30px,4vw,43px)] tracking-[-0.07em] leading-[1.02] my-[14px] font-[850]">
              Jio Gau Samriddhi
            </h3>
            <p className="text-[#d2dfd4] max-w-[410px] text-[14px] m-0 mb-[18px]">
              Engineered static generation (SSG) with minimal client hydration cost over erratic 4G cellular connections, integrating the Jio Design System and enforcing strict asset budgets.
            </p>
            <div className="proof">
              <div>
                <strong>100% SEO</strong>
                <span>Audit score</span>
              </div>
              <div>
                <strong>&lt; 2s LCP</strong>
                <span>Over rural 4G</span>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <Link className="arrow" href="/work/jio-gau-samriddhi">
                Read the case study ↗
              </Link>
              <a
                className="text-[12px] font-[700] text-[#c1d1c5] hover:text-white transition-colors"
                href="https://www.jiogausamriddhi.com/"
                target="_blank"
                rel="noreferrer"
              >
                Visit live platform ↗
              </a>
            </div>
          </div>
        </article>
      </section>

      {/* ========================================================
          SECTION 02 / SELECTED ENGINEERING WORK: Open Rows
          ======================================================== */}
      <section className="py-[28px] pb-[55px] border-t border-[var(--line)]">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-[20px] md:gap-[28px] pb-[22px]">
          <div>
            <div className="kicker"><b>02</b> / Engineering work</div>
            <h2 className="text-[clamp(30px,4vw,44px)] leading-[1] tracking-[-0.065em] my-[10px] mb-0 font-[850]">
              Systems with<br />real constraints.
            </h2>
          </div>
          <p className="max-w-[400px] m-0 text-[var(--muted)] text-[14px]">
            Selected client and enterprise projects. Explore the engineering trade-offs, architecture decisions, and outcomes.
          </p>
        </div>

        <div className="work-list">
          {/* Row 01 */}
          <article className="work-row">
            <div className="index">01 —</div>
            <div>
              <div className="work-type">Media · Publishing</div>
              <h3 className="text-[22px] leading-[1.1] tracking-[-0.055em] m-0 mb-[7px] font-[800]">
                UK News &amp; Media Network
              </h3>
              <p className="text-[13px] text-[var(--muted)] m-0 max-w-[440px]">
                A publishing network deployed across 80+ domains serving 4M+ daily readers.
              </p>
            </div>
            <p className="text-[13px] text-[var(--muted)] m-0 max-w-[440px]">
              Migrated legacy styled-components to zero-runtime modular CSS, cutting initial JavaScript bundles by 25% while safeguarding 90+ Lighthouse Core Web Vitals.
            </p>
            <Link className="row-link" href="/work/uk-publication-platform">
              Case study <span>↗</span>
            </Link>
          </article>

          {/* Row 02 */}
          <article className="work-row">
            <div className="index">02 —</div>
            <div>
              <div className="work-type">Agriculture · Marketplace</div>
              <h3 className="text-[22px] leading-[1.1] tracking-[-0.055em] m-0 mb-[7px] font-[800]">
                Krishi Bazaar
              </h3>
              <p className="text-[13px] text-[var(--muted)] m-0 max-w-[440px]">
                Real-time agricultural marketplace connecting 50,000+ rural farmers with suppliers.
              </p>
            </div>
            <p className="text-[13px] text-[var(--muted)] m-0 max-w-[440px]">
              Engineered normalized GraphQL client caching and isolated price ticker rerenders to guarantee catalog update latency stayed under 400ms.
            </p>
            <Link className="row-link" href="/work/krishi-bazaar">
              Case study <span>↗</span>
            </Link>
          </article>

          {/* Row 03 */}
          <article className="work-row">
            <div className="index">03 —</div>
            <div>
              <div className="work-type">Education · Analytics</div>
              <h3 className="text-[22px] leading-[1.1] tracking-[-0.055em] m-0 mb-[7px] font-[800]">
                TISS CLIx Educational Dashboard
              </h3>
              <p className="text-[13px] text-[var(--muted)] m-0 max-w-[440px]">
                Academic analytics platform deployed across state schools in rural and semi-urban India.
              </p>
            </div>
            <p className="text-[13px] text-[var(--muted)] m-0 max-w-[440px]">
              Decoupled heavy progress telemetry into Web Workers and built resilient offline sync for classrooms experiencing multi-week internet outages.
            </p>
            <Link className="row-link" href="/work/clix-dashboard">
              Case study <span>↗</span>
            </Link>
          </article>

          {/* Row 04 */}
          <article className="work-row">
            <div className="index">04 —</div>
            <div>
              <div className="work-type">Enterprise · Cattle management</div>
              <h3 className="text-[22px] leading-[1.1] tracking-[-0.055em] m-0 mb-[7px] font-[800]">
                Enterprise Cattle Management Portal
              </h3>
              <p className="text-[13px] text-[var(--muted)] m-0 max-w-[440px]">
                Mission-critical livestock dashboard handling dense tabular medical histories and RFID tracking.
              </p>
            </div>
            <p className="text-[13px] text-[var(--muted)] m-0 max-w-[440px]">
              Virtualized data tables for 100K+ animals keeping frame rates locked at 60 FPS; wrote comprehensive Jest suites with zero reported data loss.
            </p>
            <Link className="row-link" href="/work/cattle-management-portal">
              Case study <span>↗</span>
            </Link>
          </article>
        </div>
      </section>

      {/* ========================================================
          SECTION 03 / CAPABILITIES: Open Numbered Rows
          ======================================================== */}
      <section className="py-[28px] pb-[55px] border-t border-[var(--line)]">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-[20px] md:gap-[28px] pb-[22px]">
          <div>
            <div className="kicker"><b>03</b> / Capabilities</div>
            <h2 className="text-[clamp(30px,4vw,44px)] leading-[1] tracking-[-0.065em] my-[10px] mb-0 font-[850]">
              Where I make<br />a difference.
            </h2>
          </div>
          <p className="max-w-[400px] m-0 text-[var(--muted)] text-[14px]">
            Focused frontend consulting and senior engineering execution for teams that need performance, architecture clarity, and product speed.
          </p>
        </div>

        <div className="work-list">
          {/* Cap 01 */}
          <div className="work-row">
            <div className="index">01 —</div>
            <div>
              <div className="work-type">Architecture · Performance</div>
              <h3 className="text-[22px] leading-[1.1] tracking-[-0.055em] m-0 mb-[7px] font-[800]">
                Frontend Architecture &amp; Core Web Vitals
              </h3>
              <p className="text-[13px] text-[var(--muted)] m-0 max-w-[440px]">
                Scalable Next.js and React foundations engineered for long-term maintainability.
              </p>
            </div>
            <p className="text-[13px] text-[var(--muted)] m-0 max-w-[440px]">
              Forensic diagnosis of render loops, hydration overhead, slow LCP/INP scores, bundle bloat, and fragile state layers. Code-level remediation roadmap.
            </p>
            <Link className="row-link" href="/services">
              Explore audits <span>↗</span>
            </Link>
          </div>

          {/* Cap 02 */}
          <div className="work-row">
            <div className="index">02 —</div>
            <div>
              <div className="work-type">Interface · Engineering</div>
              <h3 className="text-[22px] leading-[1.1] tracking-[-0.055em] m-0 mb-[7px] font-[800]">
                Complex UI Implementation &amp; Systems
              </h3>
              <p className="text-[13px] text-[var(--muted)] m-0 max-w-[440px]">
                Turning demanding product requirements into accessible, resilient user journeys.
              </p>
            </div>
            <p className="text-[13px] text-[var(--muted)] m-0 max-w-[440px]">
              Dense data tables, interactive graphs, tokenized design systems, and mobile ergonomics with strict WCAG AA accessibility compliance.
            </p>
            <Link className="row-link" href="/services">
              Details <span>↗</span>
            </Link>
          </div>

          {/* Cap 03 */}
          <div className="work-row">
            <div className="index">03 —</div>
            <div>
              <div className="work-type">Product · Full-cycle</div>
              <h3 className="text-[22px] leading-[1.1] tracking-[-0.055em] m-0 mb-[7px] font-[800]">
                Product Engineering &amp; MVP Launch
              </h3>
              <p className="text-[13px] text-[var(--muted)] m-0 max-w-[440px]">
                Partnering with founders and early teams to convert ideas into production software.
              </p>
            </div>
            <p className="text-[13px] text-[var(--muted)] m-0 max-w-[440px]">
              Pragmatic full-stack React and Next.js engineering that survives scale without introducing premature technical debt or unnecessary cloud overhead.
            </p>
            <Link className="row-link" href="/services">
              Consulting <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 04 / INDEPENDENT PRACTICE: Monogram Product Grid
          ======================================================== */}
      <section className="py-[65px] pb-[70px] border-t border-[var(--line)]" id="products">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-[20px] md:gap-[24px] mb-[22px]">
          <div>
            <div className="kicker"><b>04</b> / Independent practice</div>
            <h2 className="text-[clamp(32px,4vw,45px)] leading-[1] tracking-[-0.065em] my-[10px] mb-0 font-[850]">
              Built independently.<br />Shipped for real people.
            </h2>
          </div>
          <p className="max-w-[360px] text-[var(--muted)] text-[14px] m-0">
            Beyond client work, I build independent tools. Proves product thinking, full-lifecycle ownership, and execution capability.
          </p>
        </div>

        <div className="product-grid">
          {/* Product 01 */}
          <article className="product">
            <div className="symbol bg-[var(--lime)] text-[var(--forest)]">
              F.
            </div>
            <div>
              <div className="work-type">Live Browser Suite</div>
              <h3 className="text-[21px] tracking-[-0.05em] m-0 mb-[6px] font-[800]">
                FrontendYogi
              </h3>
              <p className="text-[13px] text-[var(--muted)] m-0 mb-[12px]">
                Free, privacy-friendly browser utilities (Image Compressor, PDF Suite, JSON Formatter, Base64 Suite) running 100% client-side with zero telemetry.
              </p>
              <a
                className="text-[12px] font-[800] hover:text-[var(--blue)] transition-colors"
                href="https://frontendyogi.com"
                target="_blank"
                rel="noreferrer"
              >
                Launch FrontendYogi ↗
              </a>
            </div>
          </article>

          {/* Product 02 */}
          <article className="product">
            <div className="symbol bg-[#cfe3d3] text-[var(--forest)]">
              S.
            </div>
            <div>
              <div className="work-type">Consumer Utility</div>
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

          {/* Product 03 */}
          <article className="product">
            <div className="symbol bg-[var(--coral)] text-[#56352c]">
              W.
            </div>
            <div>
              <div className="work-type">Writing tool</div>
              <h3 className="text-[21px] tracking-[-0.05em] m-0 mb-[6px] font-[800]">
                Writer Mirror
              </h3>
              <p className="text-[13px] text-[var(--muted)] m-0 mb-[12px]">
                A focused writing environment exploring grammar feedback, typing cadence, and zero-loss local state persistence.
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

          {/* Product 04 */}
          <article className="product">
            <div className="symbol bg-[#dbe4ff] text-[var(--blue)]">
              I/
            </div>
            <div>
              <div className="work-type">Research workflow</div>
              <h3 className="text-[21px] tracking-[-0.05em] m-0 mb-[6px] font-[800]">
                InterviewPrep_OS
              </h3>
              <p className="text-[13px] text-[var(--muted)] m-0 mb-[12px]">
                Engineering interview dashboard with structured frontend system design roadmaps and algorithm tracking without subscription paywalls.
              </p>
              <Link href="/lab" className="text-[12px] font-[800] hover:text-[var(--blue)] transition-colors">
                Explore in Lab ↗
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* ========================================================
          CLOSING: Signature Signal Lime Banner
          ======================================================== */}
      <section className="closing">
        <div>
          <div className="kicker">Have a problem worth solving?</div>
          <h2 className="text-[clamp(30px,4vw,45px)] leading-[1] tracking-[-0.07em] my-[10px] text-[var(--forest)] font-[850]">
            Let&apos;s build something worth shipping.
          </h2>
          <p className="text-[#3e4d32] m-0 text-[14px] max-w-[450px]">
            Direct senior technical collaboration for frontend architecture, performance overhauls, and contract product engineering. No middlemen, no account managers.
          </p>
        </div>
        <Link className="contact" href="/contact">
          Start a conversation ↗
        </Link>
      </section>
    </div>
  );
}
