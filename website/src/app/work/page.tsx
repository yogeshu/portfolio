import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Selected Work — Yogesh Bhavsar",
  description:
    "Selected engineering work by Yogesh Bhavsar: frontend systems, product engineering, and independent products.",
  alternates: {
    canonical: "https://yogeshbhavsar.com/work",
  },
};

export default function WorkPage() {
  return (
    <div className="wrap">
      {/* ========================================================
          HERO: Open, Asymmetric, Signature Accent
          ======================================================== */}
      <section className="py-[70px] pb-[55px] grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-[40px] md:gap-[56px] items-end border-t-0">
        <div>
          <div className="kicker">01 / Case studies &amp; product work</div>
          <h1 className="text-[clamp(44px,7vw,86px)] leading-[0.94] tracking-[-0.085em] my-[20px] mb-[22px] max-w-[750px] font-[850] text-[var(--ink)]">
            Selected engineering <span className="accent">work.</span>
          </h1>
          <p className="text-[18px] leading-[1.6] max-w-[510px] text-[#4b5a50] m-0">
            A selection of systems and products I&apos;ve helped shape. Explore the problem, the engineering decisions, and what it took to ship.
          </p>
        </div>

        <aside className="hero-side">
          <p className="text-[14px] text-[var(--muted)] m-0 mb-[20px] max-w-[330px]">
            I work across frontend systems and independent products—from untangling complex interfaces to shipping useful tools for real people.
          </p>
          <div className="pills">
            <span className="pill">Frontend engineering</span>
            <span className="pill">Product development</span>
            <span className="pill">React · Next.js</span>
          </div>
        </aside>
      </section>

      {/* ========================================================
          FEATURED PROJECT: Deep Forest Block with Stylized Window
          ======================================================== */}
      <section id="work" className="py-[28px] pb-[55px] border-t border-[var(--line)]">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-[20px] md:gap-[28px] pb-[22px]">
          <div>
            <div className="kicker"><b>01</b> / Featured project</div>
            <h2 className="text-[clamp(30px,4vw,44px)] leading-[1] tracking-[-0.065em] my-[10px] mb-0 font-[850]">
              Useful by design.<br />Built to ship.
            </h2>
          </div>
          <p className="max-w-[400px] m-0 text-[var(--muted)] text-[14px]">
            A browser-based toolkit focused on practical jobs people need to finish—not another dashboard to learn.
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
            <div className="overline">Independent product · 01</div>
            <h3 className="text-[clamp(30px,4vw,43px)] tracking-[-0.07em] leading-[1.02] my-[14px] font-[850]">
              FrontendYogi
            </h3>
            <p className="text-[#d2dfd4] max-w-[410px] text-[14px] m-0 mb-[18px]">
              A collection of browser-based utilities designed around everyday tasks. The challenge is making the right tool easy to find, fast to use, and straightforward to trust.
            </p>
            <div className="proof">
              <div>
                <strong>Practical</strong>
                <span>Outcome-first tools</span>
              </div>
              <div>
                <strong>Browser-based</strong>
                <span>Low-friction workflows</span>
              </div>
            </div>
            <a
              className="arrow"
              href="https://frontendyogi.com/"
              target="_blank"
              rel="noreferrer"
            >
              Explore the live product ↗
            </a>
          </div>
        </article>
      </section>

      {/* ========================================================
          ENGINEERING WORK: Open Editorial Rows (No Boxed Cards!)
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
            Selected professional projects. Each entry gives you the context; the detailed case study should carry the full technical story.
          </p>
        </div>

        <div className="work-list">
          {/* Row 01 */}
          <article className="work-row">
            <div className="index">01 —</div>
            <div>
              <div className="work-type">IoT · Cattle management</div>
              <h3 className="text-[22px] leading-[1.1] tracking-[-0.055em] m-0 mb-[7px] font-[800]">
                Jio Gau Samriddhi
              </h3>
              <p className="text-[13px] text-[var(--muted)] m-0 max-w-[440px]">
                A cattle-management platform supporting monitoring workflows and operational needs in the field.
              </p>
            </div>
            <p className="text-[13px] text-[var(--muted)] m-0 max-w-[440px]">
              Next.js static-first architecture for rural 4G networks, achieving sub-2s LCP and 100% SEO audit.
            </p>
            <Link className="row-link" href="/work/jio-gau-samriddhi">
              Case study <span>↗</span>
            </Link>
          </article>

          {/* Row 02 */}
          <article className="work-row">
            <div className="index">02 —</div>
            <div>
              <div className="work-type">Media · Publishing</div>
              <h3 className="text-[22px] leading-[1.1] tracking-[-0.055em] m-0 mb-[7px] font-[800]">
                UK News &amp; Media Network
              </h3>
              <p className="text-[13px] text-[var(--muted)] m-0 max-w-[440px]">
                A publishing experience with content-heavy workflows and audience-facing pages.
              </p>
            </div>
            <p className="text-[13px] text-[var(--muted)] m-0 max-w-[440px]">
              Migrated 80+ publication domains from styled-components to modular CSS; cut initial bundles by 25%.
            </p>
            <Link className="row-link" href="/work/uk-publication-platform">
              Case study <span>↗</span>
            </Link>
          </article>

          {/* Row 03 */}
          <article className="work-row">
            <div className="index">03 —</div>
            <div>
              <div className="work-type">Agriculture · Marketplace</div>
              <h3 className="text-[22px] leading-[1.1] tracking-[-0.055em] m-0 mb-[7px] font-[800]">
                Krishi Bazaar
              </h3>
              <p className="text-[13px] text-[var(--muted)] m-0 max-w-[440px]">
                A digital marketplace experience shaped around agricultural users and business needs.
              </p>
            </div>
            <p className="text-[13px] text-[var(--muted)] m-0 max-w-[440px]">
              Built normalized GraphQL client caching to keep agricultural catalog updates under 400ms.
            </p>
            <Link className="row-link" href="/work/krishi-bazaar">
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
                A portal supporting enterprise workflows and information for operational teams.
              </p>
            </div>
            <p className="text-[13px] text-[var(--muted)] m-0 max-w-[440px]">
              Virtualized dense data tables for 100K+ livestock records; achieved 90%+ Jest test coverage.
            </p>
            <Link className="row-link" href="/work/cattle-management-portal">
              Case study <span>↗</span>
            </Link>
          </article>

          {/* Row 05 */}
          <article className="work-row">
            <div className="index">05 —</div>
            <div>
              <div className="work-type">Education · Analytics</div>
              <h3 className="text-[22px] leading-[1.1] tracking-[-0.055em] m-0 mb-[7px] font-[800]">
                TISS CLIx Educational Dashboard
              </h3>
              <p className="text-[13px] text-[var(--muted)] m-0 max-w-[440px]">
                An educational dashboard presenting information for users working across learning programmes.
              </p>
            </div>
            <p className="text-[13px] text-[var(--muted)] m-0 max-w-[440px]">
              Offline-tolerant reporting across rural state schools in 4 Indian states; reduced defects by 50%.
            </p>
            <Link className="row-link" href="/work/clix-dashboard">
              Case study <span>↗</span>
            </Link>
          </article>

          {/* Row 06 */}
          <article className="work-row">
            <div className="index">06 —</div>
            <div>
              <div className="work-type">Productivity · Documents</div>
              <h3 className="text-[22px] leading-[1.1] tracking-[-0.055em] m-0 mb-[7px] font-[800]">
                Sangam Biodata Builder
              </h3>
              <p className="text-[13px] text-[var(--muted)] m-0 max-w-[440px]">
                A focused tool for creating and organizing biodata documents through a guided workflow.
              </p>
            </div>
            <p className="text-[13px] text-[var(--muted)] m-0 max-w-[440px]">
              Client-side vector PDF generation running completely in-browser; $0/month serverless architecture.
            </p>
            <Link className="row-link" href="/work/sangam-biodata">
              Case study <span>↗</span>
            </Link>
          </article>
        </div>
      </section>

      {/* ========================================================
          INDEPENDENT PRACTICE: 2-Column Monogram Grid
          ======================================================== */}
      <section className="py-[65px] pb-[70px] border-t border-[var(--line)]" id="products">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-[20px] md:gap-[24px] mb-[22px]">
          <div>
            <div className="kicker"><b>03</b> / Independent practice</div>
            <h2 className="text-[clamp(32px,4vw,45px)] leading-[1] tracking-[-0.065em] my-[10px] mb-0 font-[850]">
              Small teams.<br />Real experiments.
            </h2>
          </div>
          <p className="max-w-[360px] text-[var(--muted)] text-[14px] m-0">
            Products and experiments where I explore how thoughtful engineering can make a useful idea real.
          </p>
        </div>

        <div className="product-grid">
          {/* Product 01 */}
          <article className="product">
            <div className="symbol bg-[var(--lime)] text-[var(--forest)]">
              W.
            </div>
            <div>
              <div className="work-type">Writing tool</div>
              <h3 className="text-[21px] tracking-[-0.05em] m-0 mb-[6px] font-[800]">
                Writer Mirror
              </h3>
              <p className="text-[13px] text-[var(--muted)] m-0 mb-[12px]">
                A focused writing environment exploring grammar feedback, clarity, and stronger prose.
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

          {/* Product 02 */}
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
                An experiment in collecting and organizing interview research into a useful workflow.
              </p>
              <Link href="/lab" className="text-[12px] font-[800] hover:text-[var(--blue)] transition-colors">
                Explore in Lab ↗
              </Link>
            </div>
          </article>

          {/* Product 03 */}
          <article className="product">
            <div className="symbol bg-[var(--coral)] text-[#56352c]">
              Y.
            </div>
            <div>
              <div className="work-type">Productivity</div>
              <h3 className="text-[21px] tracking-[-0.05em] m-0 mb-[6px] font-[800]">
                Yogimetrics
              </h3>
              <p className="text-[13px] text-[var(--muted)] m-0 mb-[12px]">
                A personal project exploring focused telemetry and frontend performance profiling tools.
              </p>
              <Link href="/lab" className="text-[12px] font-[800] hover:text-[var(--blue)] transition-colors">
                Details ↗
              </Link>
            </div>
          </article>

          {/* Product 04 */}
          <article className="product">
            <div className="symbol bg-[#cfe3d3] text-[var(--forest)]">
              +
            </div>
            <div>
              <div className="work-type">The wider archive</div>
              <h3 className="text-[21px] tracking-[-0.05em] m-0 mb-[6px] font-[800]">
                Not every build needs a case study.
              </h3>
              <p className="text-[13px] text-[var(--muted)] m-0 mb-[12px]">
                Smaller experiments can live in a compact archive instead of competing with the featured work.
              </p>
              <Link href="/contact" className="text-[12px] font-[800] hover:text-[var(--blue)] transition-colors">
                Ask about a project ↗
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
            Let&apos;s make the next thing useful.
          </h2>
          <p className="text-[#3e4d32] m-0 text-[14px] max-w-[450px]">
            Share the challenge, the constraints, and what a successful outcome looks like. We can start there.
          </p>
        </div>
        <Link className="contact" href="/contact">
          Start a conversation ↗
        </Link>
      </section>
    </div>
  );
}
