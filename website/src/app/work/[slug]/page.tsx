import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects, siteConfig } from "@/lib/content";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — Technical Case Study | Yogesh Bhavsar`,
    description: project.summary,
    alternates: {
      canonical: `${siteConfig.url}/work/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | Case Study by Yogesh Bhavsar`,
      description: project.summary,
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="wrap py-[40px]">
      {/* Back Link */}
      <div className="pb-8">
        <Link
          href="/work"
          className="inline-flex items-center gap-1.5 text-[12px] font-[800] text-[var(--muted)] hover:text-[var(--ink)] transition-colors font-mono-meta uppercase tracking-wider"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Work Index</span>
        </Link>
      </div>

      {/* Case Study Header */}
      <header className="pb-[45px] border-b border-[var(--line)]">
        <div className="kicker mb-3">
          <b>{project.category}</b> / {project.company} · {project.duration}
        </div>

        <h1 className="text-[clamp(40px,6vw,72px)] leading-[0.96] tracking-[-0.08em] my-[16px] max-w-[850px] font-[850] text-[var(--ink)]">
          {project.title}
        </h1>

        <p className="text-[18px] leading-[1.6] text-[#4b5a50] max-w-[700px] m-0 mb-8">
          {project.summary}
        </p>

        {/* Open Metadata Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-[var(--line)] text-xs font-mono-meta">
          <div>
            <span className="text-[var(--muted)] uppercase tracking-wider font-bold block mb-1">My Role</span>
            <span className="text-[var(--ink)] font-bold text-sm block">{project.role}</span>
          </div>
          <div>
            <span className="text-[var(--muted)] uppercase tracking-wider font-bold block mb-1">Timeline</span>
            <span className="text-[var(--ink)] font-bold text-sm block">{project.duration}</span>
          </div>
          <div>
            <span className="text-[var(--muted)] uppercase tracking-wider font-bold block mb-1">Company</span>
            <span className="text-[var(--ink)] font-bold text-sm block">{project.company}</span>
          </div>
          <div>
            <span className="text-[var(--muted)] uppercase tracking-wider font-bold block mb-1">Availability</span>
            <span className="text-[var(--ink)] font-bold text-sm block">
              {project.liveUrl ? "Public Web Application" : "Enterprise System (NDA)"}
            </span>
          </div>
        </div>

        {/* Media or High-Contrast Architectural Composition */}
        {project.image ? (
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-[4px] overflow-hidden border border-[var(--line)] bg-white shadow-xs mt-8">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        ) : (
          <div className="w-full p-8 md:p-12 rounded-[4px] bg-[var(--forest)] text-white mt-8 flex flex-col justify-between gap-6">
            <div className="flex items-center justify-between border-b border-[#245447] pb-3">
              <span className="font-mono-meta text-xs uppercase tracking-wider text-[var(--lime)] font-bold">
                Enterprise Production Architecture
              </span>
              <span className="font-mono-meta text-xs text-[#c2d6cd]">
                {project.company}
              </span>
            </div>
            <div className="flex flex-col gap-2 max-w-2xl">
              <h3 className="text-2xl sm:text-3xl font-[850] text-white tracking-[-0.05em] m-0">
                High-scale production deployment under enterprise NDA.
              </h3>
              <p className="text-sm text-[#c2d6cd] leading-relaxed m-0">
                {project.summary}
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[#245447]">
              {Object.entries(project.metrics).map(([key, val]) => (
                <div key={key}>
                  <span className="block text-[10px] font-mono-meta text-[#9bb7ab] uppercase font-bold">{key}</span>
                  <span className="text-lg font-extrabold text-[var(--lime)] mt-0.5 block">{val}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Case Study Content Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-12">
        {/* Main Content (8 cols) */}
        <div className="lg:col-span-8 flex flex-col gap-12">
          {/* Problem */}
          <section>
            <div className="kicker mb-2"><b>01</b> / Problem &amp; Context</div>
            <h2 className="text-[26px] font-[850] text-[var(--ink)] tracking-[-0.05em] m-0 mb-3">
              The operational challenge.
            </h2>
            <p className="text-[15px] text-[#4b5a50] leading-relaxed m-0">
              {project.challenge}
            </p>
          </section>

          {/* Decisions */}
          <section className="pt-8 border-t border-[var(--line)]">
            <div className="kicker mb-2"><b>02</b> / Engineering decisions</div>
            <h2 className="text-[26px] font-[850] text-[var(--ink)] tracking-[-0.05em] m-0 mb-3">
              Architecture &amp; technical trade-offs.
            </h2>
            <p className="text-[15px] text-[#4b5a50] leading-relaxed m-0 mb-6">
              {project.solution}
            </p>

            <div className="work-list">
              {project.architectureDecisions.map((decision, dIdx) => (
                <div key={dIdx} className="py-4 border-b border-[var(--line)] grid grid-cols-[40px_1fr] gap-4 items-start">
                  <span className="font-mono-meta text-xs font-bold text-[var(--forest)] pt-0.5">
                    0{dIdx + 1}
                  </span>
                  <span className="text-sm text-[var(--ink)] leading-relaxed">
                    {decision}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Responsibilities */}
          <section className="pt-8 border-t border-[var(--line)]">
            <div className="kicker mb-2"><b>03</b> / Deliverables</div>
            <h2 className="text-[26px] font-[850] text-[var(--ink)] tracking-[-0.05em] m-0 mb-4">
              What was delivered &amp; owned.
            </h2>
            <div className="space-y-3">
              {project.responsibilities.map((resp, rIdx) => (
                <div key={rIdx} className="flex items-start gap-2.5 text-sm text-[var(--ink)]">
                  <CheckCircle2 className="w-4 h-4 text-[var(--forest)] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{resp}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar (4 cols) */}
        <aside className="lg:col-span-4 flex flex-col gap-8">
          {/* Verified Stats */}
          <div className="p-6 bg-white border border-[var(--line)] rounded-[3px]">
            <span className="font-mono-meta text-[10px] uppercase tracking-wider text-[var(--muted)] font-bold block mb-4">
              Verified Metrics
            </span>
            <div className="space-y-4">
              {Object.entries(project.metrics).map(([label, val]) => (
                <div key={label} className="border-b border-[var(--line)] pb-3 last:border-0 last:pb-0">
                  <span className="text-[11px] font-mono-meta text-[var(--muted)] block">{label}</span>
                  <span className="text-xl font-[850] text-[var(--forest)] mt-0.5 block">{val}</span>
                </div>
              ))}
            </div>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="contact text-center w-full block mt-4"
              >
                Visit Live Application ↗
              </a>
            )}
          </div>

          {/* Implementation Stack */}
          <div className="p-6 bg-white border border-[var(--line)] rounded-[3px]">
            <span className="font-mono-meta text-[10px] uppercase tracking-wider text-[var(--muted)] font-bold block mb-3">
              Implementation Stack
            </span>
            <div className="pills">
              {project.techStack.map((tech) => (
                <span key={tech} className="pill bg-[#edf1e9]">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>

      {/* Closing Signal Lime Banner */}
      <section className="closing mt-10">
        <div>
          <div className="kicker">Facing a similar bottleneck?</div>
          <h2 className="text-[clamp(30px,4vw,45px)] leading-[1] tracking-[-0.07em] my-[10px] text-[var(--forest)] font-[850]">
            Let&apos;s discuss your architecture.
          </h2>
          <p className="text-[#3e4d32] m-0 text-[14px] max-w-[450px]">
            I diagnose rendering debt, hydration bottlenecks, and state regressions for teams shipping React &amp; Next.js.
          </p>
        </div>
        <Link className="contact" href="/services">
          Explore Audits &amp; Retainers ↗
        </Link>
      </section>
    </div>
  );
}
