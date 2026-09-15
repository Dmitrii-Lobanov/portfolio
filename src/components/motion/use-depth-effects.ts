import { useEffect } from "react";

export function useDepthEffects(pathname: string) {
  useEffect(() => {
    void pathname;
    const canUseDepth =
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
      window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!canUseDepth) return;

    const stages = Array.from(
      document.querySelectorAll<HTMLElement>("[data-depth-stage]"),
    );
    const updateDepth = (event: PointerEvent) => {
      const stage = event.currentTarget as HTMLElement;
      const rect = stage.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      stage.style.setProperty("--stage-x", x.toFixed(3));
      stage.style.setProperty("--stage-y", y.toFixed(3));
      stage.querySelectorAll<HTMLElement>("[data-depth]").forEach((layer) => {
        const depth = Number(layer.dataset.depth ?? 0);
        layer.style.setProperty("--depth-x", `${x * depth * 42}px`);
        layer.style.setProperty("--depth-y", `${y * depth * 28}px`);
      });
    };
    const resetDepth = (event: PointerEvent) => {
      const stage = event.currentTarget as HTMLElement;
      stage.style.removeProperty("--stage-x");
      stage.style.removeProperty("--stage-y");
      stage.querySelectorAll<HTMLElement>("[data-depth]").forEach((layer) => {
        layer.style.removeProperty("--depth-x");
        layer.style.removeProperty("--depth-y");
      });
    };

    stages.forEach((stage) => {
      stage.addEventListener("pointermove", updateDepth);
      stage.addEventListener("pointerleave", resetDepth);
    });

    return () => {
      stages.forEach((stage) => {
        stage.removeEventListener("pointermove", updateDepth);
        stage.removeEventListener("pointerleave", resetDepth);
      });
    };
  }, [pathname]);
}
