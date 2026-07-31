import Link from "next/link";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

const navItems = [
  { name: "Work", href: "/#work" },
  { name: "Case study", href: "/#case-study" },
  { name: "Principles", href: "/#principles" },
  { name: "Lab", href: "/#lab" },
  { name: "Writing", href: "/#writing" },
];

export function Header() {
  return (
    <header className="site-header">
      <nav aria-label="Main navigation">
        <Link
          href="#top"
          className="wordmark"
          aria-label="Dmitrii Lobanov, home"
        >
          DL<span>/</span>
        </Link>
        <div className="nav-links">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href}>
              {item.name}
            </Link>
          ))}
        </div>
        <div className="nav-actions">
          <a
            className="nav-social"
            href="https://www.linkedin.com/in/dmitrii-lobanov/"
            target="_blank"
            rel="noreferrer"
            aria-label="Dmitrii Lobanov on LinkedIn"
            title="LinkedIn"
          >
            <LinkedinIcon width={17} height={17} aria-hidden="true" />
          </a>
          <a
            className="nav-social"
            href="https://github.com/Dmitrii-Lobanov"
            target="_blank"
            rel="noreferrer"
            aria-label="Dmitrii Lobanov on GitHub"
            title="GitHub"
          >
            <GithubIcon width={17} height={17} aria-hidden="true" />
          </a>
          <Link href="/#contact" className="nav-contact">
            Let&apos;s talk <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
