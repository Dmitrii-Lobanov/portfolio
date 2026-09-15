import { useEffect } from "react";

export function useHeaderProgress() {
  useEffect(() => {
    const header = document.querySelector<HTMLElement>("[data-scroll-header]");
    if (!header) return;

    const updateHeader = () => {
      header.classList.toggle("is-scrolled", scrollY > 28);
      const scrollable = document.documentElement.scrollHeight - innerHeight;
      const progress = scrollable > 0 ? Math.min(scrollY / scrollable, 1) : 0;
      header.style.setProperty("--scroll-progress", `${progress * 100}%`);
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);
}
