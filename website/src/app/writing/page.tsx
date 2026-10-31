import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/lib/content";

export const metadata: Metadata = {
  title: "Technical Writing & Field Notes — Yogesh Bhavsar",
  description:
    "Grounded technical writing on React architecture, Next.js performance diagnostics, Core Web Vitals (INP) debugging, and zero-runtime CSS migrations.",
  alternates: {
    canonical: "https://yogeshbhavsar.com/writing",
  },
};

export default function WritingPage() {
  return (
    <div className="wrap">
      {/* ========================================================
          HERO: Open, Asymmetric, Signature Accent
          ======================================================== */}
      <section className="py-[70px] pb-[55px] grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-[40px] md:gap-[56px] items-end border-t-0">
        <div>
          <div className="kicker">01 / Technical Writing &amp; Field Notes</div>
          <h1 className="text-[clamp(44px,7vw,86px)] leading-[0.94] tracking-[-0.085em] my-[20px] mb-[22px] max-w-[750px] font-[850] text-[var(--ink)]">
            Engineering post-mortems &amp; <span className="accent">lessons.</span>
          </h1>
          <p className="text-[18px] leading-[1.6] max-w-[510px] text-[#4b5a50] m-0">
            Grounded technical writing derived from production triage, performance profiling, and real-world system migrations across millions of users. No shallow AI summaries or generic tutorials.
          </p>
        </div>

        <aside className="hero-side">
          <p className="text-[14px] text-[var(--muted)] m-0 mb-[20px] max-w-[330px]">
            Real findings from production frontends: runtime CSS costs, interaction delays (INP), and architectural boundaries that survive scale.
          </p>
          <div className="pills">
            <span className="pill">Performance profiling</span>
            <span className="pill">Next.js App Router</span>
            <span className="pill">Core Web Vitals</span>
            <span className="pill">Zero-runtime CSS</span>
          </div>
        </aside>
      </section>

      {/* ========================================================
          ARTICLES STREAM: Open Editorial Rows
          ======================================================== */}
      <section className="py-[28px] pb-[55px] border-t border-[var(--line)]">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-[20px] md:gap-[28px] pb-[22px]">
          <div>
            <div className="kicker"><b>01</b> / Published notes</div>
            <h2 className="text-[clamp(30px,4vw,44px)] leading-[1] tracking-[-0.065em] my-[10px] mb-0 font-[850]">
              Field notes &amp;<br />technical post-mortems.
            </h2>
          </div>
          <p className="max-w-[400px] m-0 text-[var(--muted)] text-[14px]">
            In-depth breakdowns of architectural trade-offs tested in high-traffic environments.
          </p>
        </div>

        <div className="divide-y divide-[var(--line)] border-t border-[var(--line)]">
          {articles.map((article) => (
            <article key={article.slug} className="py-[36px] flex flex-col gap-4">
              <div className="flex items-center gap-3 text-xs font-mono-meta text-[var(--muted)]">
                <span className="font-bold text-[var(--forest)] uppercase">{article.category}</span>
                <span>•</span>
                <span>{article.date}</span>
                <span>•</span>
                <span>{article.readTime}</span>
              </div>

              <h3 className="text-[clamp(24px,3.5vw,34px)] font-[850] text-[var(--ink)] tracking-[-0.06em] m-0 leading-tight">
                {article.title}
              </h3>

              <p className="text-[15px] text-[#4b5a50] leading-relaxed max-w-[750px] m-0">
                {article.excerpt}
              </p>

              {/* Takeaways box */}
              <div className="p-4 bg-white border border-[var(--line)] rounded-[3px] max-w-[750px] text-xs">
                <strong className="text-[var(--forest)] block mb-2 font-mono-meta uppercase tracking-wider">
                  Core Findings:
                </strong>
                <ul className="space-y-1.5 m-0 p-0 list-none text-[var(--ink)]">
                  {article.takeaways.map((takeaway, tIdx) => (
                    <li key={tIdx} className="leading-relaxed">
                      • {takeaway}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Full Content */}
              <div className="space-y-3 text-[14px] text-[var(--muted)] leading-relaxed max-w-[750px] pt-2">
                {article.content.map((p, pIdx) => (
                  <p key={pIdx} className="m-0">{p}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ========================================================
          CLOSING: Signature Signal Lime Banner
          ======================================================== */}
      <section className="closing">
        <div>
          <div className="kicker">Facing a similar performance challenge?</div>
          <h2 className="text-[clamp(30px,4vw,45px)] leading-[1] tracking-[-0.07em] my-[10px] text-[var(--forest)] font-[850]">
            Let&apos;s diagnose your application.
          </h2>
          <p className="text-[#3e4d32] m-0 text-[14px] max-w-[450px]">
            Fixed-scope Core Web Vitals diagnostic audits pinpointing exact code bottlenecks with ROI-ranked remediation.
          </p>
        </div>
        <Link className="contact" href="/services">
          Explore Performance Audits ↗
        </Link>
      </section>
    </div>
  );
}
