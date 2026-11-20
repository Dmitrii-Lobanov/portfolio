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

export function Header({ preference }: { preference: "en" | "ru" }) {
  const pathname = usePathname();
  const pagePath = pathname.replace(/^\/(en|ru)(?=\/|$)/, "") || "/";
  const selected = /^\/ru(?=\/|$)/.test(pathname)
    ? "ru"
    : /^\/en(?=\/|$)/.test(pathname)
      ? "en"
      : preference;
  const russian = selected === "ru";
  const contentLanguage =
    russian &&
    (pagePath === "/" ||
      pagePath === "/about" ||
      pagePath === "/contact" ||
      pagePath === "/work" ||
      pagePath === "/work/cpa-platform" ||
      pagePath === "/work/reliable-kanban" ||
      pagePath === "/work/frontend-engineering-wiki" ||
      pagePath === "/work/polaris" ||
      pagePath === "/work/wikimasters")
      ? "ru"
      : "en";
  useEffect(() => {
    document.documentElement.lang = contentLanguage;
  }, [contentLanguage]);
  const home = `/${selected}`;
  const onHome = pagePath === "/";
  const alternatePath = pagePath === "/" ? "" : pagePath;
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
    href === home
      ? onHome
      : pagePath === href || pagePath.startsWith(`${href}/`);

  return (
    <header className="site-header" data-scroll-header>
      <nav
        lang={selected}
        aria-label={russian ? "Основная навигация" : "Main navigation"}
      >
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
          <fieldset className="nav-language">
            <legend className="sr-only">{russian ? "Язык" : "Language"}</legend>
            <a
              href={`/en${alternatePath}`}
              hrefLang="en"
              lang="en"
              aria-label="English"
              aria-current={selected === "en" ? "page" : undefined}
            >
              EN
            </a>
            <a
              href={`/ru${alternatePath}`}
              hrefLang="ru"
              lang="ru"
              aria-label="Русский"
              aria-current={selected === "ru" ? "page" : undefined}
            >
              RU
            </a>
          </fieldset>
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
            aria-label={
              russian
                ? "Дмитрий Лобанов в LinkedIn"
                : "Dmitrii Lobanov on LinkedIn"
            }
            title="LinkedIn"
          >
            <LinkedinIcon width={17} height={17} aria-hidden="true" />
          </a>
          <a
            className="nav-social"
            href="https://github.com/Dmitrii-Lobanov"
            target="_blank"
            rel="noreferrer"
            aria-label={
              russian
                ? "Дмитрий Лобанов на GitHub"
                : "Dmitrii Lobanov on GitHub"
            }
            title="GitHub"
          >
            <GithubIcon width={17} height={17} aria-hidden="true" />
          </a>
          <Link
            href="/contact"
            className={`button-tactile nav-contact${isActive("/contact") ? " is-active" : ""}`}
            aria-current={isActive("/contact") ? "page" : undefined}
          >
            {russian ? "Связаться" : "Let's talk"}{" "}
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
