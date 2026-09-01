"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Work", href: "/work" },
  { name: "Thinking", href: "/thinking" },
  { name: "About", href: "/about" },
];

export function Header() {
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="site-header">
      <nav aria-label="Main navigation">
        <Link href="/" className="wordmark" aria-label="Dmitrii Lobanov, home">
          DL<span>/</span>
        </Link>
        <div className="nav-links">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={isActive(item.href) ? "is-active" : undefined}
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="nav-actions">
          <details className="nav-menu">
            <summary aria-label="Open site navigation">Menu</summary>
            <div>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={isActive(item.href) ? "is-active" : undefined}
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </details>
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
          <Link
            href="/contact"
            className={`nav-contact${pathname.startsWith("/contact") ? " is-active" : ""}`}
            aria-current={pathname.startsWith("/contact") ? "page" : undefined}
          >
            Let&apos;s talk <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
