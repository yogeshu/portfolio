import Link from "next/link";
import { siteConfig } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)] py-[25px] md:py-[34px] text-[var(--muted)] text-[12px] mt-16">
      <div className="wrap flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
        <div>
          <strong className="text-[var(--ink)] font-bold text-sm">
            Yogesh Bhavsar <span className="text-[#168c67]">●</span>
          </strong>
          <br />
          <span>Senior frontend engineer · Independent product builder</span>
        </div>
        <div className="flex items-center gap-[18px] flex-wrap font-medium">
          <Link href="/" className="hover:text-[var(--blue)] transition-colors">
            Home
          </Link>
          <Link href="/work" className="hover:text-[var(--blue)] transition-colors">
            Work
          </Link>
          <Link href="/services" className="hover:text-[var(--blue)] transition-colors">
            Services
          </Link>
          <Link href="/lab" className="hover:text-[var(--blue)] transition-colors">
            Products
          </Link>
          <Link href="/about" className="hover:text-[var(--blue)] transition-colors">
            About
          </Link>
          <Link href="/writing" className="hover:text-[var(--blue)] transition-colors">
            Writing
          </Link>
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--blue)] transition-colors"
          >
            LinkedIn ↗
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="hover:text-[var(--blue)] transition-colors"
          >
            Email ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
