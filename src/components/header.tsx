import Link from "next/link";

const navItems = [
  { name: "Work", href: "/#work" },
  { name: "Case study", href: "/#case-study" },
  { name: "Principles", href: "/#principles" },
  { name: "Writing", href: "/#writing" },
];

export function Header() {
  return (
    <header className="site-header">
      <nav aria-label="Main navigation">
        <Link
          href="/#top"
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
        <Link href="/#contact" className="nav-contact">
          Let&apos;s talk <span aria-hidden="true">↗</span>
        </Link>
      </nav>
    </header>
  );
}
