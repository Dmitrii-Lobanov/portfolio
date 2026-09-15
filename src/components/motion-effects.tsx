"use client";

import { usePathname } from "next/navigation";
import { useDepthEffects } from "@/components/motion/use-depth-effects";
import { useHeaderProgress } from "@/components/motion/use-header-progress";
import { usePointerEffects } from "@/components/motion/use-pointer-effects";
import { useRevealEffects } from "@/components/motion/use-reveal-effects";

export function MotionEffects() {
  const pathname = usePathname();

  useHeaderProgress();
  useRevealEffects(pathname);
  usePointerEffects(pathname);
  useDepthEffects(pathname);

  return null;
}
