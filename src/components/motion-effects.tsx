"use client";

import { useEffect } from "react";

const revealSelectors = [
  ".section-heading",
  ".work-card",
  ".case-steps article",
  ".architecture-panel",
  ".principles-list article",
  ".article-row",
  ".experience-row",
  ".contact-grid > *",
];

export function MotionEffects() {
  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const revealItems = Array.from(
      document.querySelectorAll<HTMLElement>(revealSelectors.join(",")),
    );

    revealItems.forEach((item, index) => {
      item.classList.add("motion-reveal");
      item.style.setProperty("--reveal-delay", `${(index % 3) * 70}ms`);
    });
    root.classList.add("motion-ready");

    const header = document.querySelector<HTMLElement>(".site-header");
    const updateHeader = () =>
      header?.classList.toggle("is-scrolled", scrollY > 28);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    if (reducedMotion) {
      revealItems.forEach((item) => {
        item.classList.add("is-visible");
      });
      return () => window.removeEventListener("scroll", updateHeader);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -10%", threshold: 0.12 },
    );
    revealItems.forEach((item) => {
      observer.observe(item);
    });

    const portrait = document.querySelector<HTMLElement>(".portrait-island");
    const canHover = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    ).matches;
    const handlePointerMove = (event: PointerEvent) => {
      if (!portrait) return;
      const rect = portrait.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      portrait.style.setProperty("--portrait-x", `${x * 5}px`);
      portrait.style.setProperty("--portrait-y", `${y * 5}px`);
      portrait.style.setProperty("--portrait-ry", `${x * 1.5}deg`);
      portrait.style.setProperty("--portrait-rx", `${y * -1.5}deg`);
    };
    const resetPortrait = () => {
      portrait?.style.removeProperty("--portrait-x");
      portrait?.style.removeProperty("--portrait-y");
      portrait?.style.removeProperty("--portrait-rx");
      portrait?.style.removeProperty("--portrait-ry");
    };
    if (portrait && canHover) {
      portrait.addEventListener("pointermove", handlePointerMove);
      portrait.addEventListener("pointerleave", resetPortrait);
    }

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateHeader);
      portrait?.removeEventListener("pointermove", handlePointerMove);
      portrait?.removeEventListener("pointerleave", resetPortrait);
    };
  }, []);

  return null;
}
