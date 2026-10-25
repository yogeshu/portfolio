import type { Metadata } from "next";
import Link from "next/link";
import { experience, technicalSkills, siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "Curriculum Vitae — Yogesh Bhavsar",
  description:
    "Complete professional background and engineering CV of Yogesh Bhavsar, Senior Frontend Engineer with 7+ years of production experience across Reach Plc, Jio, and TISS.",
  alternates: {
    canonical: "https://yogeshbhavsar.com/resume",
  },
};

export default function ResumePage() {
  return (
    <div className="wrap">
      {/* ========================================================
          HERO: Open, Asymmetric, Signature Accent
          ======================================================== */}
      <section className="py-[70px] pb-[55px] grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-[40px] md:gap-[56px] items-end border-t-0">
        <div>
          <div className="kicker">01 / Curriculum Vitae</div>
          <h1 className="text-[clamp(44px,7vw,86px)] leading-[0.94] tracking-[-0.085em] my-[20px] mb-[22px] max-w-[750px] font-[850] text-[var(--ink)]">
            Yogesh <span className="accent">Bhavsar.</span>
          </h1>
          <p className="text-[18px] leading-[1.6] max-w-[510px] text-[#4b5a50] m-0">
            Senior Frontend Engineer &amp; Technical Architect · 7+ Years Experience across React, Next.js, and large-scale web systems.
          </p>
        </div>

        <aside className="hero-side">
          <p className="text-[14px] text-[var(--muted)] m-0 mb-[20px] max-w-[330px]">
            Download a formatted PDF copy of my technical résumé for formal engineering reviews and contract procurement.
          </p>
          <a
            href={siteConfig.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="contact text-center inline-block"
          >
            Download PDF Document ↗
          </a>
        </aside>
      </section>

      {/* ========================================================
          CAREER CHRONOLOGY: Open Editorial Rows
          ======================================================== */}
      <section className="py-[28px] pb-[55px] border-t border-[var(--line)]">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-[20px] md:gap-[28px] pb-[22px]">
          <div>
            <div className="kicker"><b>01</b> / Professional Experience</div>
            <h2 className="text-[clamp(30px,4vw,44px)] leading-[1] tracking-[-0.065em] my-[10px] mb-0 font-[850]">
              Production delivery<br />record.
            </h2>
          </div>
          <p className="max-w-[400px] m-0 text-[var(--muted)] text-[14px]">
            A documented record of engineering ownership, performance governance, and system migrations.
          </p>
        </div>

        <div className="work-list">
          {experience.map((exp, idx) => (
            <article key={idx} className="work-row">
              <div className="index">0{idx + 1} —</div>
              <div>
                <div className="work-type">{exp.duration} · {exp.role}</div>
                <h3 className="text-[22px] leading-[1.1] tracking-[-0.055em] m-0 mb-[7px] font-[800]">
                  {exp.company}
                </h3>
                {exp.parent && (
                  <span className="text-[12px] font-mono-meta text-[var(--muted)] block mb-1">
                    {exp.parent}
                  </span>
                )}
                <p className="text-[13px] text-[var(--muted)] m-0 max-w-[440px]">
                  {exp.description}
                </p>
              </div>
              <div>
                <span className="block text-[11px] font-mono-meta uppercase tracking-wider text-[var(--muted)] font-bold mb-1.5">
                  Contributions
                </span>
                <ul className="space-y-1 text-[12px] text-[var(--ink)] m-0 p-0 list-none">
                  {exp.deliverables.slice(0, 3).map((deliv, dIdx) => (
                    <li key={dIdx} className="leading-relaxed">
                      • {deliv}
                    </li>
                  ))}
                </ul>
                <div className="text-[11px] font-mono-meta text-[var(--muted)] mt-2">
                  Stack: {exp.techStack.slice(0, 4).join(" · ")}
                </div>
              </div>
              <span className="text-[11px] font-mono-meta text-[#168c67] font-bold">
                {exp.current ? "Present" : "Delivered"}
              </span>
            </article>
          ))}
        </div>
      </section>

      {/* ========================================================
          EDUCATION & COMPETENCIES
          ======================================================== */}
      <section className="py-[28px] pb-[55px] border-t border-[var(--line)]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <div className="kicker mb-2"><b>02</b> / Engineering Education</div>
            <h3 className="text-[22px] font-[850] text-[var(--ink)] tracking-[-0.04em] m-0 mb-2">
              Bachelor of Engineering in Mechanical Engineering
            </h3>
            <span className="text-[13px] font-mono-meta text-[var(--muted)] block mb-3">
              North Maharashtra University (NMU)
            </span>
            <p className="text-[13px] text-[#4b5a50] leading-relaxed m-0">
              Grounded in mechanical systems design, thermodynamics, and mathematical modeling—principles directly translated into scalable, zero-waste web frontend architectures.
            </p>
          </div>

          <div>
            <div className="kicker mb-2"><b>03</b> / Core Stack</div>
            <h3 className="text-[22px] font-[850] text-[var(--ink)] tracking-[-0.04em] m-0 mb-3">
              Specialized Technologies
            </h3>
            <div className="pills">
              {technicalSkills.map((s) => (
                <span key={s.name} className="pill bg-white">
                  {s.name} ({s.level})
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          CLOSING: Signature Signal Lime Banner
          ======================================================== */}
      <section className="closing">
        <div>
          <div className="kicker">Need a senior frontend engineer?</div>
          <h2 className="text-[clamp(30px,4vw,45px)] leading-[1] tracking-[-0.07em] my-[10px] text-[var(--forest)] font-[850]">
            Let&apos;s talk about your project.
          </h2>
          <p className="text-[#3e4d32] m-0 text-[14px] max-w-[450px]">
            Available for frontend architecture audits, Core Web Vitals remediation, and contract product engineering.
          </p>
        </div>
        <Link className="contact" href="/contact">
          Get in touch ↗
        </Link>
      </section>
    </div>
  );
}
