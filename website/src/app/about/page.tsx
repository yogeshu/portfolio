import type { Metadata } from "next";
import Link from "next/link";
import { experience, technicalSkills, siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "About & Engineering Philosophy — Yogesh Bhavsar",
  description:
    "Professional journey of Yogesh Bhavsar: transitioning mechanical systems thinking into modern web engineering, 7+ years across Reach Plc, Jio, and TISS.",
  alternates: {
    canonical: "https://yogeshbhavsar.com/about",
  },
};

export default function AboutPage() {
  return (
    <div className="wrap">
      {/* ========================================================
          HERO: Open, Asymmetric, Signature Accent
          ======================================================== */}
      <section className="py-[70px] pb-[55px] grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-[40px] md:gap-[56px] items-end border-t-0">
        <div>
          <div className="kicker">01 / Background &amp; Systems Philosophy</div>
          <h1 className="text-[clamp(44px,7vw,86px)] leading-[0.94] tracking-[-0.085em] my-[20px] mb-[22px] max-w-[750px] font-[850] text-[var(--ink)]">
            Mechanical systems to <span className="accent">web architecture.</span>
          </h1>
          <p className="text-[18px] leading-[1.6] max-w-[510px] text-[#4b5a50] m-0">
            I began my engineering education in Mechanical Engineering before transitioning to software development. That background fundamentally shapes how I write code: I see frontend applications not as visual canvases, but as interconnected physical assemblies where every moving part has inertia, heat, and structural limits.
          </p>
        </div>

        <aside className="hero-side">
          <p className="text-[14px] text-[var(--muted)] m-0 mb-[20px] max-w-[330px]">
            In modern frontend engineering, abstractions are cheap to add and ruinously expensive to carry. Every external dependency and runtime CSS library adds drag. My work focuses on removing that drag.
          </p>
          <div className="pills">
            <span className="pill">7+ Years Production</span>
            <span className="pill">4M+ Daily Readers</span>
            <span className="pill">Mechanical Mindset</span>
            <span className="pill">Published Author</span>
          </div>
          <div className="pt-4 flex items-center gap-3">
            <a
              href={siteConfig.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] font-[800] text-[var(--forest)] hover:text-[var(--blue)] transition-colors inline-flex items-center gap-1"
            >
              <span>Download Technical CV (PDF)</span>
              <span>↗</span>
            </a>
          </div>
        </aside>
      </section>

      {/* ========================================================
          CAREER CHRONOLOGY: Open Editorial Rows (No Boxed Cards!)
          ======================================================== */}
      <section className="py-[28px] pb-[55px] border-t border-[var(--line)]">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-[20px] md:gap-[28px] pb-[22px]">
          <div>
            <div className="kicker"><b>01</b> / Chronology</div>
            <h2 className="text-[clamp(30px,4vw,44px)] leading-[1] tracking-[-0.065em] my-[10px] mb-0 font-[850]">
              7+ years of verified<br />production delivery.
            </h2>
          </div>
          <p className="max-w-[400px] m-0 text-[var(--muted)] text-[14px]">
            A documented track record across media publishing networks, enterprise portals, and national educational initiatives.
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
                  Key Architectural Contributions
                </span>
                <ul className="space-y-1.5 text-[12px] text-[var(--ink)] m-0 p-0 list-none">
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
                {exp.current ? "Active Role" : "Delivered"}
              </span>
            </article>
          ))}
        </div>
      </section>

      {/* ========================================================
          ENGINEERING ARSENAL: Open Competency Grid
          ======================================================== */}
      <section className="py-[28px] pb-[55px] border-t border-[var(--line)]">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-[20px] md:gap-[28px] pb-[22px]">
          <div>
            <div className="kicker"><b>02</b> / Competencies</div>
            <h2 className="text-[clamp(30px,4vw,44px)] leading-[1] tracking-[-0.065em] my-[10px] mb-0 font-[850]">
              Discipline &amp;<br />technical focus.
            </h2>
          </div>
          <p className="max-w-[400px] m-0 text-[var(--muted)] text-[14px]">
            Technical competencies vetted through production delivery under live SLAs, not checklist familiarity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pt-4 border-t border-[var(--line)]">
          {technicalSkills.map((skill, idx) => (
            <div key={idx} className="pt-2 border-t-2 border-[var(--forest)]">
              <span className="font-mono-meta text-[10px] font-[800] uppercase text-[var(--muted)] block mb-1">
                {skill.category}
              </span>
              <h4 className="text-[17px] font-[800] tracking-[-0.03em] m-0 mb-1 text-[var(--ink)]">
                {skill.name}
              </h4>
              <span className="text-[11px] font-mono-meta text-[var(--blue)] font-semibold block mb-2">
                {skill.level}
              </span>
              <p className="text-[12px] text-[var(--muted)] leading-relaxed m-0">
                {skill.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          BEYOND ENGINEERING: Published Author & Storytelling
          ======================================================== */}
      <section className="py-[28px] pb-[55px] border-t border-[var(--line)]">
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <div>
            <div className="kicker"><b>03</b> / Beyond Engineering</div>
            <h2 className="text-[clamp(28px,3.5vw,40px)] leading-[1.05] tracking-[-0.06em] my-[10px] font-[850]">
              Published author &amp; storyteller.
            </h2>
            <p className="text-[14px] text-[var(--muted)] leading-relaxed m-0 mb-4 max-w-[500px]">
              Outside software architecture, I am the author of <strong className="text-[var(--ink)]">&quot;Love, Loss and Life&quot;</strong> (published on Amazon Kindle) and creator of <strong className="text-[var(--ink)]">Makhanchor</strong> (Hinglish storytelling). Writing fiction refines clarity of thought, narrative structure, and empathy—qualities that directly translate into clear technical architecture documentation.
            </p>
            <div className="flex items-center gap-4 text-[12px] font-[800]">
              <a
                href="https://www.amazon.in/Love-Loss-Life-Yogesh-Bhavsar-ebook/dp/B0DX2JYDK8/"
                target="_blank"
                rel="noreferrer"
                className="text-[var(--forest)] hover:text-[var(--blue)] transition-colors"
              >
                View Book on Amazon ↗
              </a>
              <span className="text-[var(--line)]">•</span>
              <a
                href="https://makhanchor.in/"
                target="_blank"
                rel="noreferrer"
                className="text-[var(--muted)] hover:text-[var(--ink)] transition-colors"
              >
                Makhanchor Project ↗
              </a>
            </div>
          </div>

          <div className="p-6 bg-[#EDF1E9] border border-[var(--line)] rounded-sm text-xs font-mono-meta text-[var(--muted)]">
            <strong className="text-[var(--forest)] block mb-1">Education Foundation:</strong>
            Bachelor of Engineering in Mechanical Engineering<br />
            North Maharashtra University (NMU)<br /><br />
            Grounded in systems design, thermodynamics, structural mechanics, and mathematical modeling—principles directly translated into scalable, zero-waste frontend architecture.
          </div>
        </div>
      </section>

      {/* ========================================================
          CLOSING: Signature Signal Lime Banner
          ======================================================== */}
      <section className="closing">
        <div>
          <div className="kicker">Have a project in mind?</div>
          <h2 className="text-[clamp(30px,4vw,45px)] leading-[1] tracking-[-0.07em] my-[10px] text-[var(--forest)] font-[850]">
            Let&apos;s build something worth shipping.
          </h2>
          <p className="text-[#3e4d32] m-0 text-[14px] max-w-[450px]">
            Direct technical collaboration for frontend architecture, performance diagnostics, and contract product engineering.
          </p>
        </div>
        <Link className="contact" href="/contact">
          Start a conversation ↗
        </Link>
      </section>
    </div>
  );
}
