import { useEffect } from "react";

export function usePointerEffects(pathname: string) {
  useEffect(() => {
    void pathname;
    const canUsePointerEffects =
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
      window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!canUsePointerEffects) return;

    const spotlightItems = Array.from(
      document.querySelectorAll<HTMLElement>("[data-spotlight]"),
    );
    const updateSpotlight = (event: PointerEvent) => {
      const target = event.currentTarget as HTMLElement;
      const rect = target.getBoundingClientRect();
      target.style.setProperty(
        "--spotlight-x",
        `${event.clientX - rect.left}px`,
      );
      target.style.setProperty(
        "--spotlight-y",
        `${event.clientY - rect.top}px`,
      );
    };

    spotlightItems.forEach((item) => {
      item.addEventListener("pointermove", updateSpotlight);
    });

    return () => {
      spotlightItems.forEach((item) => {
        item.removeEventListener("pointermove", updateSpotlight);
      });
    };
  }, [pathname]);
}
