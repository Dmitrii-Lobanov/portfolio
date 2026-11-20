"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Work", href: "/work" },
  { name: "Thinking", href: "/thinking" },
  { name: "About", href: "/about" },
];

export function Header() {
  const pathname = usePathname();
  const russian = pathname === "/ru";
  useEffect(() => {
    document.documentElement.lang = russian ? "ru" : "en";
  }, [russian]);
  const home = russian ? "/ru" : pathname === "/en" ? "/en" : "/";
  const onHome = pathname === home;
  const labels = russian ? ["Главная", "Проекты", "Заметки", "Обо мне"] : null;
  const items = navItems.map((item, index) => ({
    name: labels?.[index] ?? item.name,
    href: index === 0 ? home : item.href,
  }));
  const menuRef = useRef<HTMLDetailsElement>(null);
  const closeMenu = () => {
    if (menuRef.current) menuRef.current.open = false;
  };
  const isActive = (href: string) =>
    href === home ? onHome : pathname.startsWith(href);

  return (
    <header className="site-header" data-scroll-header>
      <nav aria-label={russian ? "Основная навигация" : "Main navigation"}>
        <Link
          href={home}
          className="wordmark"
          aria-label={
            russian ? "Дмитрий Лобанов, главная" : "Dmitrii Lobanov, home"
          }
        >
          DL<span>/</span>
        </Link>
        <div className="nav-links">
          {items.map((item) => (
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
          {onHome && (
            <fieldset className="nav-language">
              <legend className="sr-only">
                {russian ? "Язык" : "Language"}
              </legend>
              <a
                href="/en"
                hrefLang="en"
                lang="en"
                aria-label="English"
                aria-current={!russian ? "page" : undefined}
              >
                EN
              </a>
              <a
                href="/ru"
                hrefLang="ru"
                lang="ru"
                aria-label="Русский"
                aria-current={russian ? "page" : undefined}
              >
                RU
              </a>
            </fieldset>
          )}
          <details className="nav-menu" ref={menuRef}>
            <summary>{russian ? "Меню" : "Menu"}</summary>
            <div>
              {items.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={closeMenu}
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
            className={`button-tactile nav-contact${pathname.startsWith("/contact") ? " is-active" : ""}`}
            aria-current={pathname.startsWith("/contact") ? "page" : undefined}
          >
            {russian ? "Связаться" : "Let's talk"}{" "}
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
