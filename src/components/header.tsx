"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Impact", href: "#impact" },
  { name: "About", href: "#about" },
  { name: "Case Studies", href: "#case-studies" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-6 pointer-events-none">
      <nav
        className={cn(
          "pointer-events-auto flex items-center gap-6 rounded-full px-6 py-2.5 transition-all duration-200 border",
          isScrolled
            ? "bg-bg-surface/80 backdrop-blur-md border-border-subtle shadow-sm"
            : "bg-transparent border-transparent",
        )}
      >
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}
